const fs = require("fs").promises;

//console.log(fs);

// ---------------------------------파일 읽어오기-------------------

/* fs.readFile("./test.txt", function(err, data){
    if ( err ) throw err;

    console.log(data);

    console.log( data.toString() );}); */

// ---------------------------------파일 생성하기-------------------

/* fs.writeFile('./write.txt', '안녕')
    .then(() => {
        console.log( "작성 완료");
    })
    .catch((err) => {
        console.log( err );
    }); */

// --------------------------------파일 복사하기---------------------

/* fs.copyFile("./write.txt", "./new.txt")
    .then(() => {
        console.log("복사완료");
    })
    .catch((err) => {
        console.log( err );
    }); */


// ------------------------------비동기화를 동기화로-------------------
async function exec(){
    await fs.writeFile("./write.txt", "안녕");
    await fs.copyFile("./write.txt", "./new2.txt")
}
exec();
