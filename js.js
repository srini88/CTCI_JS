// Implement an algorithm to determine if a string has all unique characters. What if
// you cannot use additional data structures?


// ASCII has a total of 128 characters (256 in the extended set).

// ASCII defines 128 characters, which map to the numbers 0–127. Unicode defines (less than) 221 characters, which, similarly, map to numbers 0–221 (though not all numbers are currently assigned, and some are reserved).

// Unicode is a superset of ASCII, and the numbers 0–128 have the same meaning in ASCII as they have in Unicode. For example, the number 65 means "Latin capital 'A'".


// http://stackoverflow.com/questions/37427133/fill-in-the-values-of-an-array-using-the-array-map

var isUnique = function(str) {
      var char_set = Array.apply(null, Array(256)).map(Boolean.prototype.valueOf, false); //fills it with false, if you put true fills it with true..
      console.log(char_set); //all false 256  /// index 0-255  , value false..
      console.log(char_set.length) //256
      for (var i = 0; i < str.length; i++) {
      	//console.log(char_set[str[i].charCodeAt(0)], str[i].charCodeAt(0), str[i]) //you got only one letter..you calculating character code at 0, since one letter is there..
        if (char_set[str[i].charCodeAt(0)]) {
          return false;
        }
        char_set[str[i].charCodeAt(0)] = true;
      }
      return true;
   }

console.log(isUnique("abcdevfa"))