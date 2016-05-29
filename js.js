//closures say local variables for a function is not deallocated after the function has returned..
function outerFunction(x){
    var z=3;

    return function(y){
        x=x+1;
        console.log(x+y+z);
    }
}

var myVal = new Number(2);
console.log(myVal);

// The Number() function converts the object argument to a number that represents the object's value.

// If the value cannot be converted to a legal number, NaN is returned.  

Boolean(expression) will simply convert the expression into a boolean primitive value, while new Boolean(expression) will create a wrapper object around the converted boolean value.

// Note I'm using strict-equals
new Boolean("true") === true; // false
Boolean("true") === true; // true

typeof new Boolean("true"); // "object"
typeof Boolean("true"); // "boolean"

new Number( x )
creates a new wrapper object. I don't think that there is a valid reason to ever use this.

Number( x )
converts the passed argument into a Number value. You can use this to cast some variable to the Number type. However this gets the same job done:

The Number JavaScript object is a wrapper object allowing you to work with numerical values. A Number object is created using the Number() constructor.