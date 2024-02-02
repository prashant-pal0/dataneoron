import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

export const connectDB = async () => {
  console.log(process.env.db);
  await mongoose
    .connect(process.env.db)
    .then(() => {
      console.log("your db connect sucessfully");
    })
    .catch((error) => {
      console.log(`error occured during connecting db ${error}`);
    });
};
