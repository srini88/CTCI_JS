// Implement a function void reversefchar* str) in Cor C++ which reverses a null-terminated
// string.

var reverseString = function(str) {
      var len = str.length;
      console.log(str, len)
      if (len > 1) {
      	
        return str[len - 1] + reverseString(str.substring(1, len - 1)) + str[0];
      }
      return str; ///this is the base case.....at that time no string at all, len will be zero,, this wil be returned to the return in the above if...and that stuff will be plussed..
    }


console.log(reverseString("sriniv"))