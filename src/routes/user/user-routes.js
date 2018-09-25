import express from 'express';
import HttpStatus from 'http-status-codes';
import db from '../../database';

const routes = () => {
  const router = express.Router();
  router.get('/', async (req, res) => {
    const users = await db.user.findAll();
    users.forEach(user => console.log(user.dataValues.userId));
    res.send('hello world');
  });

  router.post('/', async (req, res) => {
    const {
      password,
      name,
      username,
      dateOfBirth,
      mail,
      phone,
      address,
    } = req.body;
    try {
      await db.user.create({
        userName: username,
        password,
        name,
        dateOfBirth,
        mail,
        phone,
        address,
        createdBy: req.user.userId,
        updatedBy: req.user.userId,
      }).then((u) => {
        res.status(HttpStatus.OK).send(u.dataValues);
      });
    } catch (e) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('Cannot create user');
    }
  });

  router.delete('/', async (req, res) => {
    await db.user.destroy({
      where: {
        userId: req.body.userId,
      },
    });
    res.status(HttpStatus.OK).send('Deleted');
  });

  return router;
};

export default routes;
