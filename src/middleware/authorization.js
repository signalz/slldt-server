import HttpStatus from 'http-status-codes';
import Sequelize from 'sequelize';

import db from '../database';

const { Op } = Sequelize;

const authorize = async (req, res, next) => {
  const { user, baseUrl, method } = req;
  const { roles } = user;
  const rolesIds = [];
  roles.forEach(role => rolesIds.push(role.UserRole.role_id));
  const functions = await db.role.findAll({
    where: {
      roleId: {
        [Op.in]: rolesIds,
      },
    },
    include: [{
      model: db.function,
      as: 'functions',
      attributes: ['method', 'path'],
      through: {
        attributes: ['role_id'],
      },
      where: {
        method,
        path: baseUrl,
      },
    }],
  });

  if (functions.length > 0) {
    next();
  } else {
    res.status(HttpStatus.FORBIDDEN).send({ message: 'Forbidden' });
  }
};

export default authorize;
