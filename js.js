// Implement an algorithm to determine if a string has all unique characters. What if
// you cannot use additional data structures?


// ASCII has a total of 128 characters (256 in the extended set).

// ASCII defines 128 characters, which map to the numbers 0–127. Unicode defines (less than) 221 characters, which, similarly, map to numbers 0–221 (though not all numbers are currently assigned, and some are reserved).

// Unicode is a superset of ASCII, and the numbers 0–128 have the same meaning in ASCII as they have in Unicode. For example, the number 65 means "Latin capital 'A'".


// http://stackoverflow.com/questions/37427133/fill-in-the-values-of-an-array-using-the-array-map

var isUnique = function(str) {
    //can't have unique characters if string length is greater than the # of possible characters
	if (str.length > 256) return false; 
	for (var i = 0; i< str.length; i++) {
		//console.log(str.indexOf(str[i]))
		//console.log(str.lastIndexOf(str[i])===i)
		if (str.indexOf(str[i]) !== str.lastIndexOf(str[i]) ) {

			return false;
		}
	}
	return true;
   }

console.log(isUnique("abcdevfa")) //false

// 'canal'.lastIndexOf('a');     // returns 3
// 'canal'.lastIndexOf('x');     // returns -1