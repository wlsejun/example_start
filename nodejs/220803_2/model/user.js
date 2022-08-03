const fs = require("fs").promises;

exports.post_user = function( data ){
    // console.log( data );
    // fs.writeFile('../user.txt', data.id + "//" + data.pw + "//");
    const { id, pw, name, age } =  data;
    fs.writeFile("./info.txt", `${id}//${pw}//${name}//${age}`);
}

exports.get_user = async function(){
    // var buffer = fs.readFile("../user.txt");
    var buffer = await fs.readFile("./info.txt");
    return buffer.toString();
}

//sdf//sfd//sf//dsf