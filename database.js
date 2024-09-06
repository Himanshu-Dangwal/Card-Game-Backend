import { MongoClient, ServerApiVersion } from "mongodb";
import mongoose from "mongoose";
import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config();

// Access the MONGO_URI environment variable
const URI = process.env.MONGO_URI;

// Log the URI to the console to check if it's loaded correctly
console.log(URI);

export const initializeDatabase = (callback) => {
  const options = {
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
  };

  try {
    mongoose.connect(URI, options).then(
      () => {
        console.log(
          "Pinged your deployment. You successfully connected to MongoDB!"
        );
      },
      (err) => {
        console.log(err);
      }
    );
  } catch {
    console.log("Close");
    callback(err);
  }
};
