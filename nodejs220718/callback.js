const { createBrotliCompress } = require("zlib");

console.log( "start" );

function login(id,  pw, cb) {
    setTimeout(() => {
        console.log( '정보없음' );
        cb( id );  
    }, 3000 );
}

const user = login('kim', '1234', user => {
    console.log(user + "님 반갑습니다.")
});

console.log( "finish" );

function login(id, pw, cb) {
    setTimeout(() => {
        console.log("사용자 입장");
        cb(id);
    }, 3000);
}

function getVdieo( id, cb ) {
    setTimeout(() => {
        cb( ['아이언맨1', '아이언맨2']);
    }, 2000);
}

function getDetail( video, cb ) {
    setTimeout(() => {
        cb("비디오 제목은 : ", video);
    }, 1000);
}
login2('kim', '1234', user => {
    console.log( 'user님 환영' );
    getVdieo( user, (videos) => {
        console.log( videos );
        getDetail(video[0], title => {
            console.log(title);
        });
    });
});