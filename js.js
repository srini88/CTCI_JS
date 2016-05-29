//closures say local variables for a function is not deallocated after the function has returned..
function outerFunction(x){
    var z=3;

    return function(y){
        console.log("z: " +z);
        console.log(x+y+(++z));
    }
}

var innerFunction = outerFunction(2);  

innerFunction(1); //7
innerFunction(1);  //8
innerFunction(1);  //9
innerFunction(1);  //10

// z value is tracked...we doing ++z in the code...when we call innerFunction again z value is persisted and state is retained..