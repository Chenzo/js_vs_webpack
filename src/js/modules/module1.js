

var module_1 = (function(){

    function privateFunction() {
        console.log("I'm private");
    }

    function init() {
        console.log("initializing");
        privateFunction();
    }

    function pubFunction() {
        console.log("I'm a public function in module_1");
    }

    return {
        init: init,
        pubFunction: pubFunction
    };

}());


module_1.init();