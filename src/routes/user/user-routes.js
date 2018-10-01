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
      query.push({ name: { [Op.like]: `%${req.query.name}%` } });
    }

    if (mail) {
      query.push({ mail: { [Op.like]: `%${req.query.mail}%` } });
    }
    try {
      const users = await db.user.findAll({
        attributes: { exclude: ['password'] },
        where: {
          [Op.and]: query,
        },
      });
      res.status(HttpStatus.OK).send({ data: users });
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
      res.status(HttpStatus.OK).send({ data: userData });
    } catch (e) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: 'Cannot create user' });
    }
  });

  router.patch('/:id', async (req, res) => {
    const {
      password,
      name,
      username,
      dateOfBirth,
      mail,
      phone,
      address,
    } = req.body;

    const { id } = req.params;
    const attributes = {};
    // build query
    if (username) {
      attributes.userName = req.body.username;
    }

    if (password) {
      attributes.password = req.body.password;
    }

    if (name) {
      attributes.name = req.body.name;
    }

    if (dateOfBirth) {
      attributes.dateOfBirth = req.body.dateOfBirth;
    }

    if (mail) {
      attributes.mail = req.body.mail;
    }

    if (phone) {
      attributes.phone = req.body.phone;
    }

    if (address) {
      attributes.address = req.body.address;
    }

    try {
      const user = await db.user.findById(id);
      if (user) {
        user.update(attributes).then((result) => {
          res.status(HttpStatus.OK).send({ data: result });
        });
      }
    } catch (e) {
      console.log(e);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: 'Cannot update user' });
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
      res.status(HttpStatus.OK).send({ message: 'Deleted' });
    } catch (e) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: 'Cannot delete user' });
    }
  });

  return router;
};

export default routes;
