import express from 'express';
import HttpStatus from 'http-status-codes';
import Sequelize from 'sequelize';
import db from '../../database';

const { Op } = Sequelize;

const routes = () => {
  const router = express.Router();

  router.get('/', async (req, res) => {
    const userNameWhere = req.query.username ? { userName: req.query.username } : {};
    const nameWhere = req.query.name ? { name: { $like: `%${req.query.name}%` } } : {};
    const mail = req.query.mail ? { mail: { $like: `%${req.query.mail}%` } } : {};
    try {
      const users = await db.user.findAll({
        where: {
          [Op.and]: [
            userNameWhere,
            nameWhere,
            mail,
          ],
        },
      });
      res.status(HttpStatus.OK).send(users);
    } catch (error) {
      console.log(error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('Cannot search user');
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
    console.log(req.body.userId);
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
