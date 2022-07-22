const express = require('express');
const app = express();
const port = 8000;

app.set( 'view engine', 'ejs' ); //확장자가 ejs 인 파일들을 사용할 것이고 views 폴더에 모아 놓을 것이다.
app.use( '/abc', express.static( 'public' ) );

/* app.get('/', (req,res) => {
    res.send( 'Hello Express!');
}); */

app.get('/', (req,res) => {
    res.render( 'css', { a: 'hi' } );
});

app.listen(port, () => {
    console.log( 'Server port : ', port );
});