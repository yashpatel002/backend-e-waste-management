import mongoose from "mongoose";
import dotenv from 'dotenv'; 

dotenv.config(); 
const mongoURI = process.env.MONGODB_URL!;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    mongoose.set('strictQuery', false); 
    console.log('MongoDB Connected');
  } catch (err) {
  }
};

export default connectDB;
