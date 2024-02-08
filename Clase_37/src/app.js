import express from "express";
import cors from "cors";
import router from "./routes/router.js";
import mongoConect from "./db/db.mongo.js";

const app = express();
const port = 8080

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

router(app);

mongoConect();

app.listen(port, () => {
  console.log(`Server listened on port: ${port}`);
});
