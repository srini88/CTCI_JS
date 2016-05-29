//closures say local variables for a function is not deallocated after the function has returned..
function outerFunction(x){
    return function(y){
        x=x+1;
        console.log(x+y);
    }
}

var myVal = new Number(2); //myVal is an object
console.log(myVal); //prints Number {[[PrimitiveValue]]: 2}


var innerFunction  = outerFunction(myVal);
innerFunction(10)   //im passing y as 10
innerFunction(10)
innerFunction(10)

console.log(myVal);

//look at my question
//http://stackoverflow.com/questions/37506570/value-of-javascript-object-not-changing-pass-by-reference



// var bb = 5;
// function run() {
//   var bb = 34;
//   console.log(bb);  //34
//   console.log( window.bb ); //the outerbb is attached to window...so this output prints 5..
// }
// run();