const validator = require("./validation");

module.exports = (req, res, next)=>{
    if(validator.name(req.body.username) == "ok"){
        next()
    }
    else{
        res.send(validator.name(req.body.username))
    }
}