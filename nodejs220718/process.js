const os = require("os");

console.log( os.hostname() );

const path = require("path");
const string = __filename__;
console.log( path.extname(string) );

/* console.log( process.version );
console.log( process.arch );
console.log( process.platform ); */