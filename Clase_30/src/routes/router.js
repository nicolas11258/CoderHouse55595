import mailController from "../controller/mail.controller.js";
import smsController from "../controller/sms.controller.js";

const router = (app) => {
  app.use("/mail", validInt,  mailController);
  app.use("/sms", smsController);
};


const validInt = (req, res, int, next)=>{
    if(true){
        next()
    }
    res.status(500).json({messaje: "el formato no es un entero"})
}

export default router;
