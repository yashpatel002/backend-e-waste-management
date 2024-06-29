import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { userRouter } from "./Users/route/route";
import { recyclerRoute } from "./Recyclers/route/route";
import connectDB from "./utils/mongooseConnection";
dotenv.config()

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

connectDB();

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use('/user',userRouter);
app.use('/recycler',recyclerRoute);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
  console.log("asdf");
});