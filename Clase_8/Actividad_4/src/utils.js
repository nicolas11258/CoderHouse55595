import multer from 'multer';

// Configurar la carpeta y el nombre del archivo
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './src/public/img'); // Carpeta donde se guardarán los archivos
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const originalname = file.originalname;
    const filename = `${timestamp}-Clase_8`;
    cb(null, filename);
  },
});

export const uploader = multer({ storage });;
