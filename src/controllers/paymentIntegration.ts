import { Request, Response } from 'express';
import Payment from '../models/paymentIntegration';

// Create a new payment
export const createPayment = async (req: Request, res: Response): Promise<void> => {
  try {
    const newPayment = new Payment(req.body);
    await newPayment.save();
    res.status(201).json(newPayment);
  } catch (err:any) {
    res.status(400).json({ error: err.message });
  }
};

// Get all payments
export const getPayments = async (req: Request, res: Response): Promise<void> => {
  try {
    const payments = await Payment.find().populate('userId', 'name email');
    res.status(200).json(payments);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single payment by ID
export const getPaymentById = async (req: Request, res: Response): Promise<void> => {
  try {
    const payment = await Payment.findById(req.params.id).populate('userId', 'name email');
    if (!payment) {
      res.status(404).json({ message: 'Payment not found' });
      return;
    }
    res.status(200).json(payment);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};
