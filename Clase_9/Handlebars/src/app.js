import express from 'express';
import handlesbar from 'express-handlebars';
import __dirname from './utils.js';

const port = 8080;
const app = express();

app.engine('handlebars', handlesbar.engine());

app.set('views',`${__dirname}/views`);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname+'/public'));

app.get('/', (req, res)=>{
    let testUser ={
        name:"Hilda",
        last_name: "Martinez"
    }

    res.render('index',testUser);
});

app.listen(port, ()=>{
    console.log(`Servidor escuchando por el puerto ${port}`);
})