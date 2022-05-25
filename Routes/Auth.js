const app = require("../server.js");
const controllers = require("../Controllers/Auth.js");
const validation = require("../Middleware/validationMiddleware")

app.post("/register", validation, controllers.register)

app.post("/login", validation, controllers.login)

app.get("/check", controllers.check)