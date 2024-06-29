import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for the Recycler document
export interface IRecycler extends Document {
  companyName: string;
  typesOfWaste: string[];
  typeOfProcessingMethods: string[];
  serviceArea: string;
  timeSlots: {
    day: string;
    startTime: string;
    endTime: string;
  }[];
}

// Define the schema
const recyclerSchema: Schema = new Schema({
  companyName: {
    type: String,
    required: true,
    trim: true,
  },
  typesOfWaste: {
    type: [String],
    required: true,
  },
  typeOfProcessingMethods: {
    type: [String],
    required: true,
  },
  serviceArea: {
    type: String,
    required: true,
    trim: true,
  },
  timeSlots: [
    {
      day: { type: String, required: true },
      startTime: { type: String, required: true },
      endTime: { type: String, required: true },
    }
  ]
}, {
  timestamps: true
});

const Recycler = mongoose.model<IRecycler>('Recycler', recyclerSchema);

export default Recycler;
