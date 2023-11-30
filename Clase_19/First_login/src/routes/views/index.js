import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    let data ={
        layout: "main"
    }
    res.render("index", data);
});

export default router;
