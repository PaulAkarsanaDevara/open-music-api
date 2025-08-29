import dotenv from "dotenv";

dotenv.config();

export const config = {
  server: {
    port: Number(process.env.PORT) || 3001,
  },
  mongo: {
    uri: process.env.MONGODB_URI as string,
    dbName: process.env.MONGODB_NAME as string,
  },
  redis: {
    host: process.env.REDIS_HOST as string,
    port: Number(process.env.REDIS_PORT),
    password: process.env.REDIS_PASSWORD || ''
  },
  rateLimit: {
    windowMs: (Number(process.env.RATE_LIMIT_WINDOW) || 15) * 60 * 1000,
    max: Number(process.env.RATE_LIMIT_MAX) || 100,
  }
}