const fs = require("fs");

fs.readFile("./text.txt", (err, DataTransfer) => {
    if (err) throw err;

    console.log( data );
    console.log( data.toString());
})