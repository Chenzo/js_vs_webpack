const module1 = require("./module1");
const threeOBJ = require("./threeOBJ");


var two_obj = (function(){

    function privateFunction() {
        console.log("I'm private in two_obj");
    }

    function init() {
        console.log("two_obj initializing");
        privateFunction();
    }

    function pubFunction() {
        console.log("I'm a public function in two_obj!!");
        module1.pubFunction();
    }

    function readNewVar() {
        console.log(threeOBJ.someVar);
    }

    return {
        init: init,
        pubFunction: pubFunction,
        readNewVar: readNewVar
    };

}());

module.exports = { 
    init: two_obj.init,
    pubFunction: two_obj.pubFunction,
    readNewVar: two_obj.readNewVar
};

//two_obj.init();