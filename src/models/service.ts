import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for the Service document
export interface IService extends Document {
  serviceName: string;
  serviceType: string;
  serviceDescription: string;
}

// Define the schema
const serviceSchema: Schema = new Schema({
  serviceName: {
    type: String,
    required: true,
    trim: true,
  },
  serviceType: {
    type: String,
    required: true,
    trim: true,
  },
  serviceDescription: {
    type: String,
    required: true,
    trim: true,
  }
}, {
  timestamps: true
});

const Service = mongoose.model<IService>('Service', serviceSchema);

export default Service;
