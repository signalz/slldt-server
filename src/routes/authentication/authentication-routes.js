import express from 'express';
import crypto from 'crypto';
import moment from 'moment';

import db from '../../database';

const sendResponse = async (req, res) => {
  const refreshToken = `${req.user.userId.toString()}.${crypto.randomBytes(40).toString('hex')}`;
  // TODO: save refresh token to db
  const { user } = req;
  await db.refresh_token.create({
    token: refreshToken,
    expiresAt: moment().add(2, 'week').toISOString(),
    userId: user.userId,
    createdBy: user.userId,
    updatedBy: user.userId,
  });
  // remove password before sending back to user
  delete user.password;
  res.status(200).json({
    user,
    token: req.token,
    refreshToken,
  });
};

const routes = () => {
  const router = express.Router();
  router.post('/', async (req, res) => {
    // too many if =============
    if (req.authInfo.isExp) {
      if (req.body.refreshToken) {
        const refreshToken = await db.refresh_token.findOne({
          where: { token: req.body.refreshToken },
        });
        if (refreshToken.dataValues) {
          // refresh token existed => delete
          await db.refresh_token.destroy({
            where: { token: req.body.refreshToken },
          });
          // is refresh token expired ?
          const { expiresAt } = refreshToken.dataValues;
          if (moment(expiresAt).valueOf() < moment().valueOf()) {
            res.status(401).json({
              message: 'Unauthorized',
            });
          } else {
            sendResponse(req, res);
          }
        } else {
          // invalid refresh token => unathorized
          res.status(401).json({
            message: 'Unauthorized',
          });
        }
      } else {
        res.status(401).json({
          message: 'Unauthorized',
        });
      }
    } else {
      sendResponse(req, res);
    }
  });

  return router;
};

export default routes;
