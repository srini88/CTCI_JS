// Question 2: Create “native” methods
// Define a repeatify function on the String object. The function accepts an integer that specifies how many times the string has to be repeated. The function returns the string repeated the number of times specified. For example:


String.prototype.repeatify = function(n){
    //this will be the str
    var str = this;
    var output ="";
    //console.log(str+str); //hellohello //working this +this..I think to string will be called I guess by default..
    while (n!=0){
       output+= str;
       --n; 
    }
    return output;
}


console.log('hello'.repeatify(3));
// Should print hellohellohello.


///my solution above..
///actual solution
// String.prototype.repeatify = String.prototype.repeatify || function(times) {
//    var str = '';

//    for (var i = 0; i < times; i++) {
//       str += this;
//    }

//    return str;
// };

