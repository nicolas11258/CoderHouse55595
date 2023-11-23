import mongoose from "mongoose";

const { Schema, model } = mongoose;
const studentCollection = "students";

const studentSchema = new Schema({
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  courses: {
    type: [
      {
        course: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "courses",
          },
        ],
      },
    ],
  },
});

studentSchema.pre("findOne", function() {
  this.populate("courses.course");
});

const studentModel = model(studentCollection, studentSchema);

export default studentModel;
