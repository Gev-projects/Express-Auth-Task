const User = require("../Models/User");
const jwt = require("jsonwebtoken");
const config = require("../config");
const bcrypt = require("bcrypt");

class Services {
    async register(req){
        const {username, password} = req.body;

            if(await User.exists({name: username})){
                return "User already exists!"
            }
            else{
                let hashedPassword = await bcrypt.hash(password, 10)
                new User({name:username, password: hashedPassword}).save()
                let user = { name: username }
                return jwt.sign(user, config.jwtPrivateKey, {expiresIn: "12h"})
                // return "User created"

            }
        }

        async login(req){
          const {username, password} = req.body;
          if(await User.exists({name: username})){
              let client = await User.findOne({name:username})
              let compared = bcrypt.compare(password, client.password)
              if(compared){
                  return jwt.sign({name: client.username}, config.jwtPrivateKey, {expiresIn: "12h"})
              }
              else{
                  return "password is not correct"
              }
          }
          else{
              return "Username is not correct"
          }
        }


        async check(req){
           let token = req.headers["authorization"].split(" ")[1];
           let isAuth = jwt.verify(token, config.jwtPrivateKey, (err, user)=> {
               if (err) {
                   return res.sendStatus(403)
               } else {
                   return "User passed authentication"
               }
           });
           return isAuth
        }

}

module.exports = new Services();