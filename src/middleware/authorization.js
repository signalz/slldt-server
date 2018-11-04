import HttpStatus from 'http-status-codes';
// import Sequelize from 'sequelize';

import db from '../database';

// const { Op } = Sequelize;

const authorize = async (req, res, next) => {
  const { user, baseUrl, method } = req;
  const { role } = user;

  const userRole = await db.role.findOne({
    where: { id: role.id },
    include: [{
      model: db.function,
      as: 'functions',
      where: {
        method,
        path: baseUrl,
      },
    }],
  });

  if (userRole.functions.length > 0) {
    next();
  } else {
    res.status(HttpStatus.FORBIDDEN).send({ message: 'Forbidden' });
  }
};

export default authorize;
