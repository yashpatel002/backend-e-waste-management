import { Router } from 'express';

export const userRouter = Router();

userRouter.get('/', (req, res) => {
  res.send("What's up doc ?!");
});

