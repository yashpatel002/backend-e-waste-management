import Registration from "../models/registratonModel";
import { Response } from "express";
import { Request } from "express";
// Create a new registration
exports.createRegistration = async (req:Request, res:Response) => {
  try {
    const newRegistration = new Registration(req.body);
    await newRegistration.save();
    res.status(201).json(newRegistration);
  } catch (err:any) {
    res.status(400).json({ error: err.message });
  }
};

// Get all registrations
exports.getRegistrations = async (req:Request, res:Response) => {
  try {
    const registrations = await Registration.find();
    res.status(200).json(registrations);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single registration by ID
exports.getRegistrationById = async (req:any, res:any) => {
  try {
    const registration = await Registration.findById(req.params.id);
    if (!registration) {
      return res.status(404).json({ error: 'Registration not found' });
    }
    res.status(200).json(registration);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

// Update a registration
exports.updateRegistration = async (req:Request, res:Response) => {
  try {
    const registration = await Registration.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!registration) {
      return res.status(404).json({ error: 'Registration not found' });
    }
    res.status(200).json(registration);
  } catch (err:any) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a registration
exports.deleteRegistration = async (req:Request, res:Response) => {
  try {
    const registration = await Registration.findByIdAndDelete(req.params.id);
    if (!registration) {
      return res.status(404).json({ error: 'Registration not found' });
    }
    res.status(200).json({ message: 'Registration deleted' });
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};
