import express from 'express';
// import bcrypt from 'bcryptjs';
// import { BCRYPT_SALT } from '../../config';

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
    // hash password using bcrypt
    // const salt = bcrypt.genSaltSync(BCRYPT_SALT);
    // const hash = bcrypt.hashSync(password.toString(), salt);
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
  });

  return router;
};

export default routes;
