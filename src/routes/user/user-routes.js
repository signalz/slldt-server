import express from 'express';

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
      createdBy,
      updatedBy,
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
        createdBy,
        updatedBy,
      });
      res.send('hello world');
    } catch (e) {
      console.log(e);
      res.send('Cannot create user');
    }
  });

  return router;
};

export default routes;
