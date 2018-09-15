import express from 'express';
import db from '../../database';

const routes = () => {
  const router = express.Router();
  router.get('/', async (req, res) => {
    const users = await db.user.findAll();
    users.forEach(user => console.log(user.dataValues.userId));
    // console.log(users);
    // console.log(db.user.findAll());
    res.send('hello world');
  });

  return router;
};

export default routes;
