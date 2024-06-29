import { Request, Response } from 'express';
import Recycler from '../models/recycler';

// Create a new recycler
export const createRecycler = async (req: Request, res: Response): Promise<void> => {
  try {
    const newRecycler = new Recycler(req.body);
    await newRecycler.save();
    res.status(201).json(newRecycler);
  } catch (err:any) {
    res.status(400).json({ error: err.message });
  }
};

// Get all recyclers
export const getRecyclers = async (req: Request, res: Response): Promise<void> => {
  try {
    const recyclers = await Recycler.find();
    res.status(200).json(recyclers);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single recycler by ID
export const getRecyclerById = async (req: Request, res: Response): Promise<void> => {
  try {
    const recycler = await Recycler.findById(req.params.id);
    if (!recycler) {
      res.status(404).json({ message: 'Recycler not found' });
      return;
    }
    res.status(200).json(recycler);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};
