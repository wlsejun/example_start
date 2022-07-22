const os = require('os')

console.log('os.freemem():', os.freemem());
console.log('os.totalmem():', os.totalmem());
console.log('os.homedir():', os.homedir());

const path = require('path');

const string = __filename;

console.log('path.sep:', path.sep);
console.log('path.extname():', path.extname(string));
console.log('path.parse():', path.parse(string));
