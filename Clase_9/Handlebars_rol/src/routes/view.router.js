import express from 'express';

const viewRouter = express.Router();

const food = [
    {name:"Hamburguesa", price:"100"},
    {name:"Banana", price:"20"},
    {name:"Soda", price:"40"},
    {name:"Ensalada", price:"120"},
    {name:"Pizza", price:"150"},
]

viewRouter.get('/', (req, res)=>{
    let testUser ={
        name:"Hilda",
        last_name: "Martinez",
        role: "admin"
    }

    res.render('index',{
        user:testUser,
        isAdmin:testUser.role==="admin",
        food
    });
});

export default viewRouter;