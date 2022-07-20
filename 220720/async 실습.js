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

async function exec() {
    let name = await call('kim')
    console.log( name + "반가워" );
    let txt = await back(name);
    console.log( txt + "을 실행했구나" );
    let message = await hell(txt);
    console.log("여기는" + message);
}

exec();