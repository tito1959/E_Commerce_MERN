import mongoose from "mongoose";

const url_mongo = process.env.MONGO_URL as string;


// connection, connect devuelve una promesa.
mongoose.connect(url_mongo)
  .then(() => console.log("Database Connected"))
  .catch(err => console.error(err));

process.on("uncaughtException", error => {
  console.log(error);
  mongoose.disconnect();
});