import express from "express";
import {
  registerUser,
  loginUser,
  logOutUser,
  recoveryPassword,
} from "../../controllers/authController.js";
import passport from "passport";

const router = express.Router();

// router.post("/register", registerUser);

router.post(
  "/register",
  passport.authenticate("register", { failureRedirect: "/failregister" }),
  async (req, res) => {
    let user = req.user;
    delete user.password;
    req.session.user = user;
    res.redirect("/profile");
  }
);

// router.post("/login", loginUser);

router.post(
  "/login",
  passport.authenticate("login", { failureRedirect: "/faillogin" }),
  async (req, res) => {
    let user = req.user;
    if (!user)
      return res
        .status(400)
        .send({ status: "Error", error: "Inalid Credentials" });
    delete user.password;
    req.session.user = user;
    res.redirect("/profile");
  }
);
router.post("/recovery", recoveryPassword);
router.get("/", logOutUser);

export default router;
