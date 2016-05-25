// // Given two strings, write a method to decide if one is a permutation of the other.
// We can also use the definition of an anagram—two words with the same character
// counts—to implement this algorithm. We simply iterate through this code, counting
// how many times each character appears.Then, afterwards, we compare the two arrays

var anagram  = function(str1, str2){
	
	//do with one map
	var map =[];
	for (var i=0 ; i < str1.length ; ++i){
		map[str1[i]] = (typeof map[str1[i]] === 'undefined')? 1: ++map[str1[i]];

		   //have to use quotations for undefined..

	}	
	console.log(map) //[s: 1, r: 1, i: 2, n: 1]


}

console.log(anagram("srini", "inirs"));

