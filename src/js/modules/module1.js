const threeOBJ = require("./threeOBJ");

console.log("Module_1");

var module_1 = (function(){

    function privateFunction() {
        console.log("I'm private");
    }

    function init() {
        console.log("initializing");
        privateFunction();
        threeOBJ.thing();
    }

    function pubFunction() {
        console.log("I'm a public function in module_1");
    }

    return {
        init: init,
        pubFunction: pubFunction
    };

}());

module.exports = { 
    init: module_1.init,
    pubFunction: module_1.pubFunction
};

//module_1.init();