import mongoose, { Schema } from "mongoose";

// Schema for CURD -> Student table
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  date: {
    type: String,
    default: Date.now(),
  }
});

// Model

const studentModel = mongoose.model("students",studentSchema);

export default studentModel; 
   