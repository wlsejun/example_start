let obj = {
    key1 : "value1",
    key2 : "value2",
    key3: function(){
        console.log( "a" );
    }
};

const { key1, key2 } = obj;
key3();