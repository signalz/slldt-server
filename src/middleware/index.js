import passport, { generateToken } from './auth';
import authorize from './authorization';

export default {
  authentication: {
    passport,
    generateToken,
    authorize,
  },
  authorization: {
    authorize,
  },
};
