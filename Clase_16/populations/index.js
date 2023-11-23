import coursesModel from "./models/courses.model.js";
import studentModel from "./models/students.model.js";

import mongoose from "mongoose";

const consulta = async () => {
  await mongoose.connect(
    "mongodb+srv://nicolas11258:0kCg8T4wNf5Ne0zc@cluster0.sy13hmr.mongodb.net/clase_16?retryWrites=true&w=majority",
    {}
  );
  // await createStudent();
  // await createCourse();
  // await matchStudentCourse();
  await search();
};

consulta();

const search = async () => {
  let student = await studentModel.findOne({ _id: "655ea5b96d16972d93d90ca0" });
  // .populate("courses.course");

  // console.log(JSON.stringify(student, null, "\t"));
  console.log(JSON.stringify(student));
};

const matchStudentCourse = async () => {
  let student = await studentModel.findOne({ _id: "655ea5b96d16972d93d90ca0" });

  student.courses.push({ course: "655ea5c944cb6dd84c4ae33d" });
  const resutl = await studentModel.updateOne(
    { _id: "655ea5b96d16972d93d90ca0" },
    student
  );
};

function createCourse() {
  coursesModel.create({
    title: "Curso de mongo",
    description: "Como hacer consultas a la base de datos ",
    difficulty: 2,
    topics: ["Javascript", "Servidores"],
    teacher: "Nikolas",
  });
}

function createStudent() {
  studentModel.create({
    first_name: "NN",
    last_name: "AAA",
    email: "sss@ss.com",
    gender: "Male",
  });
}
