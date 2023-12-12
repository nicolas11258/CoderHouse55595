import passport from "passport";
import jwt from "passport-jwt";
// import userModel from "../models/user.model.js";
import "dotenv/config.js";

const JWTStrategy = jwt.Strategy;
const ExtractJWT = jwt.ExtractJwt;

const cookieExtractor = (req) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["access_token"];
  }
  return token;
};

const initializePassport = () => {
  passport.use(
    "jwt",
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor]),
        secretOrKey: process.env.KEYSECRET,
      },
      async (jwt_payload, done) => {
        try {
          return done(null, jwt_payload);
        } catch (error) {
          return done(error);
        }
      }
    )
  );
//   passport.serializeUser((user, done) => {
//     done(null, user._id);
//   });
//   passport.deserializeUser(async (id, done) => {
//     let user = await userModel.findById(id);
//     done(null, user);
//   });
};

export default initializePassport;
