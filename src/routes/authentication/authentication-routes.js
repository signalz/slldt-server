import express from 'express';
import crypto from 'crypto';
import moment from 'moment';

import db from '../../database';

const sendResponse = async (req, res) => {
  const refreshToken = `${req.user.id.toString()}.${crypto.randomBytes(40).toString('hex')}`;
  // TODO: save refresh token to db
  const { user } = req;
  await db.refreshToken.create({
    token: refreshToken,
    expiresAt: moment().add(2, 'week').toISOString(),
    userId: user.id,
    createdBy: user.id,
    updatedBy: user.id,
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
    // FIXME: too many if =============
    if (req.authInfo.isExp) {
      if (req.body.refreshToken) {
        const refreshToken = await db.refreshToken.findOne({
          where: { token: req.body.refreshToken },
        });
        if (refreshToken) {
          // refresh token existed => delete
          await db.refreshToken.destroy({
            where: { token: req.body.refreshToken },
          });
          // is refresh token expired ?
          const { expiresAt } = refreshToken;
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
