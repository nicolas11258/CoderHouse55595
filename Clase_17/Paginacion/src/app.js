import { db } from "./config/database.js";
import Student from "./models/student.model.js";
 
// Ejemplo de uso de la paginación
async function getStudents(pageNumber, pageSize) {
    try {
      // Utilizar la función `paginate` proporcionada por mongoose-paginate-v2
      const result = await Student.paginate({}, { page: pageNumber, limit: pageSize });
  
      // Imprimir el resultado en la consola
      console.log(result);
    } catch (error) {
      console.error('Error al obtener estudiantes:', error);
    }
  }
  
  // Llamar a la función con el número de página y el tamaño deseado
  getStudents(1, 2);