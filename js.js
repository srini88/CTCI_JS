///Loops and closures...

//As closure tells you that innerFunc use the outer or upper scope variables copy..if it is not an object...it may cause problems

var myFunctions ={};

for (var i=0; i<3 ; i++){ //putting functions inside myFunctions..

    //in the previous commit...you are setting the function..bbut you are not running the function...very very imp....
    //////the function wont run until you call them..we want it to run and save the context of i...
    myFunctions[i] = (function(i){
        console.log("my value: "+i);
    })(i);

}

// for (var j=0; j<3 ; j++){
//     myFunctions[j]();  //that's why parantheses to run them
// }
console.log(myFunctions)
//prints Object {0: undefined, 1: undefined, 2: undefined}

//because the function has not returned.. //worng syntax....you got to return something...and that return has to be a function..because you are storing function inside myFunctions[i]