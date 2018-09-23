import express from 'express';
import bcrypt from 'bcryptjs';

import db from '../../database';
import { BCRYPT_SALT } from '../../config';

const routes = () => {
  const router = express.Router();
  router.get('/', async (req, res) => {
    const users = await db.user.findAll();
    users.forEach(user => console.log(user.dataValues.userId));
    // console.log(users);
    // console.log(db.user.findAll());
    console.log(req);
    res.send('hello world');
  });

  router.post('/', async (req, res) => {
    const {
      password,
      name,
      username,
      createdBy,
      updatedBy,
    } = req.body;
    // hash password using bcrypt
    const salt = bcrypt.genSaltSync(BCRYPT_SALT);
    const hash = bcrypt.hashSync(password.toString(), salt);
    await db.user.create({
      userName: username,
      password: hash,
      name,
      createdBy,
      updatedBy,
    });
    res.send('hello world');
  });

  return router;
};

export default routes;
