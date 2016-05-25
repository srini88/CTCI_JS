// Assume you have a method isSubstring which checks if one word is a substring
// of another. Given two strings, si and s2, write code to check Ifs2 is a rotation of si
// using only onecalltoisSubstring (e.g., "waterbottLe" is a rotation of "erbottLewat").



// String.prototype.indexOf returns the position of the string in the other string. If not found, it will return -1:

// var string = "foo",
//     substring = "oo";
// console.log(string.indexOf(substring) > -1);


// var str1 = "sssrini";
// var str2 = "rini";

// console.log(str1.indexOf("rini"));  //3
// console.log(str1.indexOf("rdi"));  //-1


var isSubstring = function(str1, str2){

	return (str1.indexOf(str2) > -1) ? true:false;

}

// console.log(isSubstring("srini", "rfini"))



var rotation = function(str1, str2){

	if (str1.length !== str2.length || !str1.length){
		return false; ////strings must be of equal length and str1 should not be empty
	}
	var newStr1 = str1+str1;

	return isSubstring(newStr1, str2);

}