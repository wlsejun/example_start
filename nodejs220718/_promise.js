function login(id, pw) {
    return new Promise( function ( resolve, reject ) {
        setTimeout( function() {
            console.log( "사용자 입장" );
            resolve(id);
        }, 3000);
    })
    // Promise { 'kim' }
}
var a = new Promise(function(resolve, reject){
    resolve("hi");
});
console.log(a);
function getVideo(id) {
    return new Promise( function( resolve, reject ) {
        setTimeout( function() {
            resolve(['아이언맨1', '아이언맨2']);
        }, 2000);
    })
}
function getDetail(video) {
    return new Promise( function( resolve, reject ) {
        setTimeout(function() {
            resolve( "비디오 제목은 : " + video);
        });
    });
}
login( 'kim', '1234' )
    .then( function(user){
        console.log( 'user님 환영' );
        var videos = getVideo(user);
        // videos = Promise { ['아이언맨1', '아이언맨2'] }
        return videos;
    })
    .then( function(videos){
        console.log( videos );
        var txt = getDetail( videos[0] );
        // txt = Promise ( "비디오 제목은 아이언맨1" )
        return txt;
    })
    .then( function(title) {
        console.log( title );
    })