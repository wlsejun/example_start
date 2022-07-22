function call(name) {
    return new Promise( function ( resolve, reject) {
        setTimeout( function() {
            console.log(name);
            resolve(name);
        }, 1000)
    })
}
function back( txt ) {
    return new Promise( function ( resolve, reject) {
        setTimeout( function() {
            resolve("back");
    }, 1000 );
})
}
function hell( message ) {
    return new Promise( function ( resolve, reject) {
        setTimeout( function() {
            console.log();
            resolve( "callback hell" );
    }, 1000 );
})
}

call('kim')
    .then( function(name){
        console.log( name + "반가워" );
        return back( name );
    })
    .then( function(txt) {
        console.log(txt + "을 실행했구나" );
        return hell(txt);
    })
    .then( function( message) {
        console.log( "여기는 " + message );
    });