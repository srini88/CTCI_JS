// Given two strings, write a method to decide if one is a permutation of the other.

// If two strings are anagrams, then we know they have the same characters, but in different
// orders. Therefore, sorting the strings will put the characters from two anagrams in the
// same order. We just need to compare the sorted versions of the strings

var anagram  = function(str1, str2){
	if (str1.length !== str2.length)
		return false;

	str1Arr = str1.split("").sort(); ///has to be assigned..split is not mutable..
	console.log(str1Arr); //you got elements array
	str2Arr = str2.split("").sort(); //["i", "i", "n", "r", "s"]
	console.log(str2Arr);

	//var anagram = true;
	str1Arr.forEach( function(element, index) {
		if (str2Arr[index] !== element)
		{
			console.log(str2Arr[index])
			return false;  ///this returns from the callback function...not from our original anagram fun//wrong sol
		}
	});
	return true;



}

console.log(anagram("ksrini", "inirss"));

