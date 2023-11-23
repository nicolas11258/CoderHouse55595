import mongoose from "mongoose";

const coursesCollection = "courses";
const { Schema, model } = mongoose;

const coursesSchema = new Schema({
  title: String,
  description: String,
  difficulty: Number,
  topics: {
    type: Array,
    default: [],
  },
  teacher: String,
  students: {
    type: Array,
    default: [],
  },
});

const coursesModel = model(coursesCollection, coursesSchema);

export default coursesModel;
