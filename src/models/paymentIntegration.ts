import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for the Payment document
export interface IPayment extends Document {
  amount: number;
  paymentMethod: string;
  transactionId: string;
  status: string;
  userId: mongoose.Types.ObjectId;
}

// Define the schema
const paymentSchema: Schema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
    enum: ['credit card', 'debit card', 'paypal', 'bank transfer'],
  },
  transactionId: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['pending', 'completed', 'failed'],
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  }
}, {
  timestamps: true
});

const Payment = mongoose.model<IPayment>('Payment', paymentSchema);

export default Payment;
