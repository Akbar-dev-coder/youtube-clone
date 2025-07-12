import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8888, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDb connection faild ", error);
  });
