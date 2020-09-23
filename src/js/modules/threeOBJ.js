

threeOBJ = {

    someVar: "Vince was here",


    thing: function() {
        console.log("From Inside threeOBJ - boop");
    }

}



module.exports = { 
    someVar: threeOBJ.someVar,
    thing: threeOBJ.thing
};
