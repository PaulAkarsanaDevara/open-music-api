import { createClient } from "redis";

export const redisClient = createClient({
  url: process.env.REDIS_URL as string
});

redisClient.on("error", (err) => console.error("Redis error:", err));
redisClient.on("connect", () => console.log("Redis connected"));

export const connectToRedis = async () => {
  await redisClient.connect();
};
