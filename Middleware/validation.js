class Validate {
    name(name){
        let message = "";
        switch(true){
            case name == "":
                message = "name is empty";
                break;
            case typeof name !== "string":
                message = "name must be a string";
                break;
            case name.length > 10:
                message = "name must be less than 10 characters";
                break;
            case name.length < 3:
                message = "name must be more than 3 characters";
                break;
            default:
                message = "ok";
        }
        return message;
    }
}

module.exports = new Validate();
