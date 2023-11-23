import { db } from "./config/database.js";
import Student from "./models/student.model.js";

// Generar algunos datos de prueba
const testData = [
    { first_name: 'Juan', last_name: 'Pérez', email: 'juan@example.com', gender: 'Male', grade: 90, group: '1A' },
    { first_name: 'Ana', last_name: 'Gómez', email: 'ana@example.com', gender: 'Female', grade: 85, group: '1B' },
    { first_name: 'Carlos', last_name: 'Martínez', email: 'carlos@example.com', gender: 'Male', grade: 75, group: '2A' },
    { first_name: 'María', last_name: 'Rodríguez', email: 'maria@example.com', gender: 'Female', grade: 95, group: '2B' },
    { first_name: 'Pedro', last_name: 'López', email: 'pedro@example.com', gender: 'Male', grade: 88, group: '1A' },
    { first_name: 'Sofía', last_name: 'Gutiérrez', email: 'sofia@example.com', gender: 'Female', grade: 80, group: '1B' },
    { first_name: 'Javier', last_name: 'Hernández', email: 'javier@example.com', gender: 'Male', grade: 92, group: '2A' },
    { first_name: 'Laura', last_name: 'Díaz', email: 'laura@example.com', gender: 'Female', grade: 87, group: '2B' },
    { first_name: 'Andrés', last_name: 'Ramírez', email: 'andres@example.com', gender: 'Male', grade: 78, group: '1A' },
    { first_name: 'Camila', last_name: 'Sánchez', email: 'camila@example.com', gender: 'Female', grade: 93, group: '1B' },
];

// ********************************************************
// Insertar los datos en la colección 'students'
// Student.insertMany(testData)
// .then(() => {
//     console.log('Datos insertados con éxito.');
// })
// .catch((error) => {
//     console.error('Error al insertar datos:', error);
// })
 
// ********************************************************
// Obtener a los estudiantes agrupados por calificación del mejor al peor
// Student.find().sort({ grade: -1 })
// .then((result) => {
//     console.log('Estudiantes agrupados por calificación (mejor a peor):', result);
// })
// .catch((error) => {
//     console.error('Error al obtener estudiantes:', error);
// })

// ********************************************************
//Obtener a los estudiantes agrupados por grupo
// Student.aggregate([{ $group: { _id: '$group', students: { $push: '$$ROOT' } } }])
// .then((result) => {
//     //console.log('Estudiantes agrupados por grupo:', result);
//     // Datos completos visualizados
//     //console.log('Estudiantes agrupados por grupo:', JSON.stringify(result, null, 2));
// })
// .catch((error) => {
//     console.error('Error al obtener estudiantes:', error);
// })

// ********************************************************
// Obtener el promedio de calificación de todos los estudiantes
// Student.aggregate([
//     { $group: { _id: null, average: { $avg: '$grade' } } }
// ])
// .then((result) => {
//     console.log('Promedio general de calificación:', result[0]?.average);
// })
// .catch((error) => {
//     console.error('Error al obtener el promedio general:', error);
// })

// ********************************************************
// Obtener el promedio de los estudiantes por grupo
// let group = '1B';
// Student.aggregate([
//     { $match: { group: group } },
//     { $group: { _id: null, average: { $avg: '$grade' } } }
// ])
// .then((result) => {
//     console.log(`Promedio de calificación del grupo ${group}:`, result[0]?.average);
// })
// .catch((error) => {
//     console.error('Error al obtener el promedio:', error);
// })

// ********************************************************
//Obtener el promedio de calificación por genero
// let gender = 'Male';
// Student.aggregate([
//     { $match: { gender: gender } },
//     { $group: { _id: null, average: { $avg: '$grade' } } }
// ])
// .then((result) => {
//     console.log(`Promedio de calificación por genero ${gender}:`, result[0]?.average);
// })
// .catch((error) => {
//     console.error('Error al obtener el promedio:', error);
// })
