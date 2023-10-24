import multer from 'multer';

// Configurar la carpeta y el nombre del archivo
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Carpeta donde se guardarán los archivos
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const originalname = file.originalname;
    const filename = `${timestamp}-${originalname}`;
    console.log(filename, originalname)
    cb(null, filename);
  },
});

const uploader = multer({ storage: storage });

export { uploader };
