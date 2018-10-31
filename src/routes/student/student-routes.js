import express from 'express';
import HttpStatus from 'http-status-codes';
import uuidv4 from 'uuid/v4';
import Sequelize from 'sequelize';
import db from '../../database';

const { Op } = Sequelize;

const routes = () => {
  const router = express.Router();

  router.get('/', async (req, res) => {
    const {
      studentName, className, dateOfBirth, fromAdmissionDate, toAdmissionDate,
    } = req.query;
    const query = [];
    const subQuery = [];
    // build query
    if (dateOfBirth) {
      query.push(Sequelize.literal(`extract(YEAR FROM "Student"."date_of_birth") = ${dateOfBirth}`));
      // Sequelize.literal('extract(YEAR FROM "Student"."date_of_birth") = 2018')
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

    if (className) {
      subQuery.push({ class_name: { [Op.like]: `%${req.query.className}%` } });
    }
    try {
      await db.student.findAndCountAll({
        include: [{
          model: db.class,
          as: 'classes',
          attributes: [['class_id', 'classId'], ['class_name', 'className']],
          through: {
            attributes: ['class_id'],
          },
          where: subQuery,
        }],
        where:
        // Sequelize.literal('extract(YEAR FROM "Student"."date_of_birth") = 2018'),
        {
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
    console.log(classModel);
    if (!classModel) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: 'Failllll 1' });
      return;
    }


    // db.sequelize.transaction(t => db.student.create({
    //   id: studentId,
    //   name: req.body.studentName,
    //   createdBy: '6ecd8c99-4036-403d-bf84-cf8400f67836',
    //   updatedBy: '6ecd8c99-4036-403d-bf84-cf8400f67836',
    //   scores: [
    //     {
    //       id: '75b639f0-ebdb-480a-abae-a772f0f58662',
    //       studentId,
    //       month: '1',
    //       score: 'Test Score',
    //       createdBy: '6ecd8c99-4036-403d-bf84-cf8400f67836',
    //       updatedBy: '6ecd8c99-4036-403d-bf84-cf8400f67836',
    //     },
    //     {
    //       id: '75b639f0-ebdb-480a-abae-a772f0f58662',
    //       studentId,
    //       month: '1',
    //       score: 'Test Score',
    //       createdBy: '6ecd8c99-4036-403d-bf84-cf8400f67836',
    //       updatedBy: '6ecd8c99-4036-403d-bf84-cf8400f67836',
    //     },
    //   ],
    // }, {
    //   include: [{
    //     model: db.score,
    //     as: 'scores',
    //   }]
    // }));

    const studentId = uuidv4();

    db.sequelize.transaction(t => db.student
      .create({
        id: studentId,
        name: req.body.studentName,
        createdBy: '6ecd8c99-4036-403d-bf84-cf8400f67836',
        updatedBy: '6ecd8c99-4036-403d-bf84-cf8400f67836',
      }, { transaction: t })
      .then(student => db.classStudent
        .create({
          studentId: student.id,
          classId,
          createdBy: '6ecd8c99-4036-403d-bf84-cf8400f67836',
          updatedBy: '6ecd8c99-4036-403d-bf84-cf8400f67836',
        }, { transaction: t })
        .then(() => {
          // student.setClasses(classModel);
          student.setClasses(classModel, {
            through: {
              studentId: student.id,
              classId,
              createdBy: '6ecd8c99-4036-403d-bf84-cf8400f67836',
              createdDate: Date.now(),
              updatedBy: '6ecd8c99-4036-403d-bf84-cf8400f67836',
              updatedDate: Date.now(),
            },
          });
          return student;
        }))
      .then((student) => {
        req.body.scores.forEach((e) => {
          scoresArr.push({
            id: uuidv4(),
            studentId: student.id,
            month: e.month,
            score: e.score,
            link: e.link,
            createdBy: '6ecd8c99-4036-403d-bf84-cf8400f67836',
            updatedBy: '6ecd8c99-4036-403d-bf84-cf8400f67836',
          });
        });
        return db.score
          .bulkCreate(scoresArr, { returning: true, transaction: t })
          .then((scores) => {
            student.setScores(scores);
            return student;
          });
      }))
      .then((student) => {
        res.status(HttpStatus.OK).json({ data: student, message: 'okkk' });
      }).catch((e) => {
        console.log(e);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: 'Failllll 2' });
      });
  });

  router.delete('/', async (req, res) => {
    await db.student.destroy({
      where: {
        studentId: req.body.studentId,
      },
    });
    res.status(400).send('Deleted');
  });

  // router.post('/', async (req, res) => {
  //   console.log(req.body);
  //   res.send('hello world');
  // });

  return router;
};

export default routes;
