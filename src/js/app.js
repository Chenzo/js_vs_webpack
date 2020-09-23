
import module_1 from './modules/module1.js';
import threeOBJ from './modules/threeOBJ.js';
import two_obj from './modules/two.js';


//var module_1 = require('./modules/module1.js');
//var two_obj = require('./modules/two.js');

//import * as module_1 from './modules/module1.js';
//import * as two_obj from './modules/two.js';

//import './modules/module1.js';
//import './modules/two.js';

/* require('./modules/module1.js');
require('./modules/two.js'); */


module_1.init();
two_obj.init();

two_obj.pubFunction();


console.log(threeOBJ.someVar);


threeOBJ.someVar = "Chenzo is cool";


two_obj.readNewVar();