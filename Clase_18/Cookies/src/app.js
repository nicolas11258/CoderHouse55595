import express from "express";
import cookieParser from "cookie-parser";

const app = express();
const port = 8080;

app.listen(port, () => {
  console.log(`Servidor escuchando por el puerto: ${port}`);
});

// app.use(cookieParser());

//hola mundo hash512
app.use(
  cookieParser(
    "e361ecc31f2aac2066a3103d3b14dc63b5984b028f9f2d09dee67460ce2702bc81673acf58109b553324852c62a227d9a75d4c2f686580270fe143048f47c33c"
  )
);

app.get("/cookie", (req, res) => {
  res
    .cookie(
      "ExampleCookie",
      "Esta es una cookie poderosa" /*, { maxAge: 10000 }*/
    )
    .send("Cookie");
});

app.get("/cookieSign", (req, res) => {
  res
    .cookie("ExampleCookie", "Esta es una cookie poderosa", {
      signed: true /*maxAge: 10000*/,
    })
    .send("Cookie");
});

app.get("/getCookie", (req, res) => {
  res.send(req.cookies);
});

app.get("/deleteCookie", (req, res) => {
  res.clearCookie("ExampleCookie").send("Cookie removed");
});
