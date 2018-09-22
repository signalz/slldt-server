import express from 'express';

const routes = () => {
  const router = express.Router();
  router.post('/', (req, res) => {
    res.status(200).json({
      user: req.user,
      token: req.token,
    });
  });

  return router;
};

export default routes;
