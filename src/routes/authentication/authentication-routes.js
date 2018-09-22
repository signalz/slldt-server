import express from 'express';

const routes = () => {
  const router = express.Router();
  router.post('/', (req, res) => {
    res.status(200).json({
      user: req.user,
      token: req.token,
    });
  });

  router.post('/token', (req, res) => {
    if (req.user) {
      res.status(200).json({
        user: req.user,
        token: req.token,
      });
    } else {
      res.status(401).json({
        message: 'unauthorized',
      });
    }
  });

  return router;
};

export default routes;
