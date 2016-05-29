//closures say local variables for a function is not deallocated after the function has returned..
function outerFunction(x){
    var z=3;

    return function(y){
        console.log(x+y+z);
    }
}

var innerFunction = outerFunction(2);  //inner function is now a closure..
//by calling  outerFunction it sets the values x=2 and z=3 and returns a function which takes a y and gives us the sum ..

//the returning function get assigned to innerFunction() on return..in geenral variables x and z should be destroyed as outerFunction() has completed its execution and it returned successfully...
///but closures say it exists for innerFunction and whenever we call innerFunction values of x and y will always be same defined by the outerfunction..

console.log(innerFunction); //you get a function back
