///Loops and closures...

//As closure tells you that innerFunc use the outer or upper scope variables copy..if it is not an object...it may cause problems

var myFunctions ={};

for (var i=0; i<3 ; i++){ //putting functions inside myFunctions..

    myFunctions[i] = (function(i){
        return function(){  //now returning a function which will be put into each index...and since IIFE it will be executed immediately..
            console.log("my value: "+i);
        }
        
    
    })(i);

}

for (var j=0; j<3 ; j++){
    myFunctions[j]();  //that's why parantheses to run them
}

