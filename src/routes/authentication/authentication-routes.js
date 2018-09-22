import express from 'express';
import crypto from 'crypto';

const routes = () => {
  const router = express.Router();
  router.post('/', (req, res) => {
    if (req.body.refreshToken) {
      // TODO: delete refresd token from db
      // insert new one
      console.log(req.body.refreshToken);
    }
    res.status(200).json({
      user: req.user,
      token: req.token,
      refreshToken: `${req.user.userId.toString()}.${crypto.randomBytes(40).toString('hex')}`,
    });
  });

  return router;
};

export default routes;
