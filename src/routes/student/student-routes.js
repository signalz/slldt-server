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
    req.body.scores.forEach((e) => {
      scoresArr.push({
        month: e.month,
        score: e.score,
        link: e.link,
        createdBy: req.user.userId,
        updatedBy: req.user.userId,
      });
    });

    db.sequelize.transaction(t => db.student.create({ studentName: 'Test', createdBy: req.user.userId, updatedBy: req.user.userId },
      { transaction: t }).then(student => student.setScores([
      { studentId: student.studentId, createdBy: req.user.userId, updatedBy: req.user.userId },
      { studentId: student.studentId, createdBy: req.user.userId, updatedBy: req.user.userId }],
    { transaction: t }).then(() => {
      res.status(HttpStatus.OK);
    })));

    db.sequelize.transaction((t) => {
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
        scores: scoresArr,
      }, {
        include: [{
          model: db.score,
          as: 'scores',
          t,
        }],
      });
    });


    // db.sequelize.transaction((t) => {
    //   return db.student.create({
    //     studentName: req.body.studentName,
    //     admissionDate: req.body.admissionDate,
    //     dateOfBirth: req.body.dateOfBirth,
    //     school: req.body.school,
    //     parentName: req.body.parentName,
    //     parentPhone: req.body.parentPhone,
    //     parentMail: req.body.parentMail,
    //     address: req.body.address,
    //     createdBy: req.user.userId,
    //     updatedBy: req.user.userId,
    //   }, { transaction: t }).then((student) => {
    //     return student.setScores([{month: '1', score: '1'}], { transaction: t });
    //   }).then((result) => {
    //     res.status(HttpStatus.OK).send({ data: result });
    //   }).catch((err) => {
    //     console.log(err);
    //   });
    // });
  });

  // router.post('/', (req, res) => {
  //   db.sequelize.transaction((t) => {
  //     return db.student.create({
  //       studentName: req.body.studentName,
  //       admissionDate: req.body.admissionDate,
  //       dateOfBirth: req.body.dateOfBirth,
  //       school: req.body.school,
  //       parentName: req.body.parentName,
  //       parentPhone: req.body.parentPhone,
  //       parentMail: req.body.parentMail,
  //       address: req.body.address,
  //       createdBy: req.user.userId,
  //       updatedBy: req.user.userId,
  //     }, { transaction: t }).then((student) => {
  //       // return Promise.all(
  //       Promise.all(req.body.scores.map(score => {
  //         return db.score.create({
  //           studentId: student.studentId,
  //           month: score.month,
  //           score: score.score,
  //           link: score.link,
  //           createdBy: req.user.userId,
  //           updatedBy: req.user.userId,
  //         }, { transaction: t });
  //       })).then(() => {
  //         console.log("Test");
  //       })
  //       // );
  //     });
  //   }).then((result) => {
  //     res.status(HttpStatus.OK).send({ data: result });
  //   }).catch((err) => {
  //     console.log(err);
  //     res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: 'Cannot create student' });
  //   });
  // });

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
