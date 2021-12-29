import { model, Schema, Document } from "mongoose";

export interface ITask extends Document {
  title: string;
  description: string;
  done: boolean;
}

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
});

export default model<ITask>("Task", taskSchema);
