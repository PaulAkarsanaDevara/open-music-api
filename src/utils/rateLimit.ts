import rateLimit from "express-rate-limit";
import RedisStore from "rate-limit-redis";
import redisClient from "../config/redis";
import { config } from "../config/app.config";

export const globalLimiter = rateLimit({
  store: new RedisStore({
    sendCommand: (...args: string[]) => redisClient.call(...args) as any,
  }),
  windowMs: config.rateLimit.windowMs,
  max: config.rateLimit.max,
  message: "Terlalu banyak request dari IP ini, coba lagi nanti.",
  standardHeaders: true,
  legacyHeaders: false,
});
