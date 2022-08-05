const mysql = require("mysql");
const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'Sesac1234*',
    database: 'Sesac'
});

exports.get_visitors = () => {
    cnn.query( 'SELECT * FROM visitor', (err, rows) => {
        if ( err ) throw err;
        console.log( rows);
        cb(rows);
    });
}