// If secondmodule file is .js file
// So we can export file using "require".

const simple1 = require('./secondmodule');
simple1();


// ---------------------.mjs file ------------------

//If secondmodule file is .mjs file
//Then 'require' is not working for importing file, importing .mjs file so add "type: module" in package.json file. 
// Method of import .mjs file is--

// import { simple } from "./secondmodule.mjs";

// simple();