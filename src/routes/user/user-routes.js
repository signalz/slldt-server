import express from 'express';

const routes = () => {
  const router = express.Router();
  router.get('/', (req, res) => {
    res.send('hello world');
  });

  return router;
};

export default routes;
