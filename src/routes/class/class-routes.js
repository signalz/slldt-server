import express from 'express';
import HttpStatus from 'http-status-codes';
import Sequelize from 'sequelize';
import db from '../../database';

const { Op } = Sequelize;

const DEFAULT_LIMIT = 20;
const DEFAULT_OFFSET = 0;
const DEFAULT_ORDER_COL = 'className';
const DEFAULT_ORDER_TYPE = 'ASC';

const routes = () => {
  const router = express.Router();

  // Router
  router.get('/', async (req, res) => {
    const {
      className, studentName, teacherName, limit, offset, orderBy, orderType,
    } = req.query;

    const query = [];
    const subQuery = [];
    // build query
    if (studentName) {
      subQuery.push({ student_name: { [Op.like]: `%${req.query.studentName}%` } });
    }
    if (className) {
      query.push({ className: { [Op.like]: `%${req.query.className}%` } });
    }
    if (teacherName) {
      query.push({ className: { [Op.like]: `%${req.query.teacherName}%` } });
    }

    const queryLimit = limit || DEFAULT_LIMIT;
    const queryOffset = offset || DEFAULT_OFFSET;
    const queryOrderCol = orderBy || DEFAULT_ORDER_COL;
    const queryOrderType = orderType || DEFAULT_ORDER_TYPE;
    console.log(query);
    try {
      const result = await db.class.findAndCountAll({
        limit: queryLimit,
        offset: queryOffset,
        order: [[queryOrderCol, queryOrderType]],
        include: studentName
          ? [
            {
              model: db.student,
              as: 'students',
              attributes: [['student_id', 'studentId'], ['student_name', 'studentName']],
              through: {
                attributes: ['student_id'],
              },
              where: subQuery,
            },
          ]
          : [],
        where: {
          [Op.and]: query,
        },
      });
      res.status(HttpStatus.OK).send({ count: result.count, data: result.rows });
    } catch (error) {
      console.log(error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: 'Cannot search class' });
    }
  });

  return router;
};

export default routes;
