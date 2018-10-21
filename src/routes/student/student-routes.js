import express from 'express';
import HttpStatus from 'http-status-codes';
import Sequelize from 'sequelize';
import db from '../../database';

const { Op } = Sequelize;

const DEFAULT_LIMIT = 20;
const DEFAULT_OFFSET = 0;
const DEFAULT_ORDER_COL = 'studentName';
const DEFAULT_ORDER_TYPE = 'ASC';

const routes = () => {
  const router = express.Router();

  router.get('/', async (req, res) => {
    const {
      studentName, className, dateOfBirth, fromAdmissionDate,
      toAdmissionDate, limit, offset, orderBy, orderType,
    } = req.query;
    const query = [];
    const subQuery = [];
    // build query
    if (dateOfBirth) {
      query.push(Sequelize.literal(`extract(YEAR FROM "Student"."date_of_birth") = ${dateOfBirth}`));
    }

    if (studentName) {
      query.push({ studentName: { [Op.like]: `%${req.query.studentName}%` } });
    }

    if (fromAdmissionDate) {
      query.push({ admissionDate: { [Op.gte]: req.query.fromAdmissionDate } });
    }

    if (toAdmissionDate) {
      query.push({ admissionDate: { [Op.lte]: req.query.fromAdmissionDate } });
    }

    let isInclude = false;
    if (className) {
      subQuery.push({ class_name: { [Op.like]: `%${req.query.className}%` } });
      isInclude = true;
    }
    const queryLimit = limit || DEFAULT_LIMIT;
    const queryOffset = offset || DEFAULT_OFFSET;
    const queryOrderCol = orderBy || DEFAULT_ORDER_COL;
    const queryOrderType = orderType || DEFAULT_ORDER_TYPE;
    try {
      await db.student.findAndCountAll({
        limit: queryLimit,
        offset: queryOffset,
        order: [[queryOrderCol, queryOrderType]],
        include:
          [{
            model: db.class,
            as: 'classes',
            attributes: [['class_id', 'classId'], ['class_name', 'className']],
            through: {
              attributes: ['class_id'],
            },
            where: subQuery,
            required: isInclude,
          }],
        where: {
          [Op.and]: query,
        },
      }).then((result) => {
        res.status(HttpStatus.OK).send({ count: result.count, data: result.rows });
      });
    } catch (error) {
      console.log(error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: 'Cannot search student' });
    }
  });

  router.post('/', async (req, res) => {
    const scoresArr = [];
    const { classId } = req.body;
    const classModel = await db.class.findById(classId);
    if (!classModel) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: 'Failllll' });
      return;
    }
    db.sequelize.transaction(t => db.student
      .create({
        studentName: req.body.studentName,
        createdBy: req.user.userId,
        updatedBy: req.user.userId,
      }, { transaction: t })
      .then(student => db.class_student
        .create({
          studentId: student.studentId,
          classId,
          createdBy: req.user.userId,
          updatedBy: req.user.userId,
        }, { transaction: t })
        .then(() => {
          // student.setClasses(classModel);
          student.setClasses(classModel, {
            through: {
              studentId: student.studentId,
              classId,
              createdBy: req.user.userId,
              createdDate: Date.now(),
              updatedBy: req.user.userId,
              updatedDate: Date.now(),
            },
          });
          return student;
        }))
      .then((student) => {
        req.body.scores.forEach((e) => {
          scoresArr.push({
            studentId: student.studentId,
            month: e.month,
            score: e.score,
            link: e.link,
            createdBy: req.user.userId,
            updatedBy: req.user.userId,
          });
        });
        return db.score
          .bulkCreate(scoresArr, { returning: true, transaction: t })
          .then((scores) => {
            console.log(scores);
            student.setScores(scores);
            return student;
          });
      }))
      .then((student) => {
        // db.student.findById(student.studentId).then((result) => console.log(result));
        res.status(HttpStatus.OK).json({ data: student, message: 'okkk' });
      }).catch((e) => {
        console.log(e);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: 'Failllll' });
      });
  });

  router.delete('/', async (req, res) => {
    const { id } = req.params;
    try {
      await db.student.destroy({
        where: {
          studentId: id,
        },
      });
      res.status(200).send({ message: 'Deleted' });
    } catch (error) {
      console.log(error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: 'Cannot delete student' });
    }
  });

  return router;
};

export default routes;
