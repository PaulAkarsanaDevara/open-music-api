import app from "./app";
import { connectToDB } from "./config/database";
// import { connectToRedis } from "./config/redis";

const PORT = process.env.PORT || 3001;

const startServer  = async() => {
  await connectToDB();
  // await connectToRedis();
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

startServer()
