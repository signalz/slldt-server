import express from 'express';
import crypto from 'crypto';

const sendResponse = (req, res) => {
  const refreshToken = `${req.user.userId.toString()}.${crypto.randomBytes(40).toString('hex')}`;
  // TODO: save refresh token to db
  res.status(200).json({
    user: req.user,
    token: req.token,
    refreshToken,
  });
};

const routes = () => {
  const router = express.Router();
  router.post('/', (req, res) => {
    if (req.authInfo.isExp) {
      if (req.body.refreshToken) {
        // TODO: delete refresd token from db
        // insert new one
        console.log(req.body.refreshToken);
        sendResponse(req, res);
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
