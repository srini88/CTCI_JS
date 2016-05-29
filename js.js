//closures say local variables for a function is not deallocated after the function has returned..
function outerFunction(x){
    var z=3;

    return function(y){
        console.log(x);
        ++x.a;
        console.log(x+y+z);
    }
}

var myObj = { a:2} //myVal is an object
//console.log(myVal); //Number {[[PrimitiveValue]]: 2}
///myVal is passed as x which is a primitive obj

var innerFunction  = outerFunction(myObj); //you are passing in object right...
innerFunction(10)   //im passing y as 10
innerFunction(10)
innerFunction(10)

console.log(myObj);  //this myObj has updated value...because closure updates the value..

