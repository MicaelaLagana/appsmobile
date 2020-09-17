const rp = require("request-promise");

var options ={
    uri:"https://official-joke-api.appspot.com/jokes/programming/random",
    json:true
}


function contarChiste(){
    return rp(options);
}

module.exports = contarChiste;