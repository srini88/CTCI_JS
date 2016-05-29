// Question 2: Create “native” methods
// Define a repeatify function on the String object. The function accepts an integer that specifies how many times the string has to be repeated. The function returns the string repeated the number of times specified. For example:


String.prototype.repeatify = function(n){
    //this will be the str
    var str = this;
    console.log(this) //String {0: "h", 1: "e", 2: "l", 3: "l", 4: "o", length: 5, [[PrimitiveValue]]: "hello"}
}


console.log('hello'.repeatify(3));
// Should print hellohellohello.



