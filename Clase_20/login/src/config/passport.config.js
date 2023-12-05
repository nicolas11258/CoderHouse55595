import passport  from  'passport';
import local from 'passport-local';
import  userModel from '../models/user.model.js'
import { createHash, isValidPassword } from '../utils.js';

const LocalStrategy = local.Strategy;
const initializePassport = () => {
    passport.use('register', new LocalStrategy(
        {passReqToCallback: true, usernameField: 'email' }, async (req, username, password, done) =>{
            const {name, email} = req.body;
            try{
                let user = await userModel.findOne({email: username});
                if(user){
                    console.log('Usuario ya existente');
                    return done(null, false);
                }
                const newUser = {
                    name,
                    email,
                    password:createHash(password)
                }

                let result = userModel.create(newUser)
                return done(null, result)
            }
            catch(error){
                return done('Error al obtener el usuario:'+ error)
            }
        }))

    passport.use('login', new LocalStrategy({usernameField: 'email'}, async (username, password, done)=>{
        try{
            let user = await userModel.findOne({email: username});
                if(!user){
                    console.log('Usuario no existe');
                    return done(null, false);
                }
                if(!isValidPassword(user, password)) return done(null, false);

                return done(null, user);
        }
        catch(error){
            return done(error)
        }
    }))
}


passport.serializeUser((user,done)=>{
    done(null, user._id);
});

passport.deserializeUser( async (id, done) =>{
    let user = await userModel.findById(id);
    done(null, user);
});

export default initializePassport;
