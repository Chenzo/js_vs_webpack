

var two_obj = (function(){

    function privateFunction() {
        console.log("I'm private in two_obj");
    }

    function init() {
        console.log("two_obj initializing");
        privateFunction();
    }

    function pubFunction() {
        console.log("I'm a public function in two_obj");
    }

    return {
        init: init,
        pubFunction: pubFunction
    };

}());


two_obj.init();