const services = require("../Services/Auth.js")

class Controllers {

    async register(req, res) {
            let resault = await services.register(req)
            res.send(resault)
    }

    async login(req, res){
           let resault = await services.login(req)
           res.send(resault)
    }

    async check(req, res){
           let resault = await services.check(req)
           res.send(resault)
    }

}

module.exports = new Controllers()