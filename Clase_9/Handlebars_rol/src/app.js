import express from 'express';
import handlesbar from 'express-handlebars';
import __dirname from './utils.js';

const port = 8080;
const app = express();

app.engine('handlebars', handlesbar.engine());

app.set('views',`${__dirname}/views`);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname+'/public'));

let food = [
    {name:"Hamburguesa", price:"100"},
    {name:"Banana", price:"20"},
    {name:"Soda", price:"40"},
    {name:"Ensalada", price:"120"},
    {name:"Pizza", price:"150"},
]


app.get('/', (req, res)=>{
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

app.listen(port, ()=>{
    console.log(`Servidor escuchando por el puerto ${port}`);
})