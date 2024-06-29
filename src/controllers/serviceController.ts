import { Request, Response } from 'express';
import Service from '../models/service';

// Create a new service
export const createService = async (req: Request, res: Response): Promise<void> => {
  try {
    const newService = new Service(req.body);
    await newService.save();
    res.status(201).json(newService);
  } catch (err:any) {
    res.status(400).json({ error: err.message });
  }
};

// Get all services
export const getServices = async (req: Request, res: Response): Promise<void> => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single service by ID
export const getServiceById = async (req: Request, res: Response): Promise<void> => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      res.status(404).json({ message: 'Service not found' });
      return;
    }
    res.status(200).json(service);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};
