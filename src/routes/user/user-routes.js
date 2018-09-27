import express from 'express';
import HttpStatus from 'http-status-codes';
import Sequelize from 'sequelize';
import db from '../../database';

const { Op } = Sequelize;

const routes = () => {
  const router = express.Router();

  router.get('/', async (req, res) => {
    const { username, name, mail } = req.query;
    const query = [];
    // build query
    if (username) {
      query.push({ userName: req.query.username });
    }

    if (name) {
      query.push({ name: { $like: `%${req.query.name}%` } });
    }

    if (mail) {
      query.push({ mail: { $like: `%${req.query.mail}%` } });
    }

    try {
      const users = await db.user.findAll({
        where: {
          [Op.and]: query,
        },
      });
      res.status(HttpStatus.OK).send(users.dataValues);
    } catch (error) {
      console.log(error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: 'Cannot search user' });
    }
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
      const userData = await db.user.create({
        userName: username,
        password,
        name,
        dateOfBirth,
        mail,
        phone,
        address,
        createdBy: req.user.userId,
        updatedBy: req.user.userId,
      });
      res.status(HttpStatus.OK).send(userData.dataValues);
    } catch (e) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: 'Cannot create user' });
    }
  });

  router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await db.user.destroy({
        where: {
          userId: id,
        },
      });
      res.status(HttpStatus.OK).send('Deleted');
    } catch (e) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: 'Cannot delete user' });
    }
  });

  return router;
};

export default routes;
