import mongoose from 'mongoose';

const { Schema, model } = mongoose;
const studentColletion = 'Student';

// Definir el esquema del estudiante
const studentSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    grade: Number,
    group: String,
});

// Definir el modelo 'Student'
const Student = model(studentColletion, studentSchema);

export default Student;