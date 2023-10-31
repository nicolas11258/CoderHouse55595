import express from 'express';

const router = express.Router();

viewRouter.get('/', (req, res)=>{
    res.render('index',{});
});

export default viewRouter;