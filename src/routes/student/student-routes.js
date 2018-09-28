import express from 'express';
import HttpStatus from 'http-status-codes';
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
      query.push({ dateOfBirth: req.query.dateOfBirth });
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
    console.log(query);
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
    db.student.create({
      studentName: req.body.studentName,
      admissionDate: req.body.admissionDate,
      dateOfBirth: req.body.dateOfBirth,
      school: req.body.school,
      parentName: req.body.parentName,
      parentPhone: req.body.parentPhone,
      parentMail: req.body.parentMail,
      address: req.body.address,
      createdBy: req.user.userId,
      updatedBy: req.user.userId,
    }).then((student) => {
      req.body.scores.forEach((e) => {
        db.score.create({
          studentId: student.studentId,
          month: e.month,
          score: e.score,
          link: e.link,
          createdBy: req.user.userId,
          updatedBy: req.user.userId,
        });
      });
    });

    res.send('hello world');
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
