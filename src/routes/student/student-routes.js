import express from 'express';
import db from '../../database';

const routes = () => {
  const router = express.Router();

  router.get('/', async (req, res) => {
    res.send('hello world');
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
      createdBy: 1,
      updatedBy: 1,
    }).then((student) => {
      req.body.scores.forEach((e) => {
        db.score.create({
          studentId: student.studentId,
          month: e.month,
          score: e.score,
          link: e.link,
          createdBy: 1,
          updatedBy: 1,
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
