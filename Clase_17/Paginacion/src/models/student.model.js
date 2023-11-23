import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2'

const studentColletion = 'Student';
const { Schema, model } = mongoose;

// Definir el esquema del estudiante
const studentSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    grade: Number,
    group: String,
});

// Generar paginación
studentSchema.plugin(mongoosePaginate);

// Definir el modelo 'Student'
const Student = model('Student', studentSchema);

export default Student;