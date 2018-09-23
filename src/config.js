export const databaseConfig = {
  host: process.env.HOST || 'localhost',
  user: process.env.user || 'postgres',
  password: process.env.password || 'postgres',
  schema: process.env.chema || 'SLLDT',
};

export const SERVER_KEY = process.env.SERVER_KEY || 'server secret';
export const TOKEN_EXPIRES = process.env.TOKEN_EXPIRES || '1w';
export const BCRYPT_SALT = process.env.BCRYPT_SALT || 10;
