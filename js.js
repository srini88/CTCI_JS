// Implement a method to perform basic string compression using the counts of
// repeated characters. For example, the string aabcccccaaa would become
// a2blc5a3. If the "compressed" string would not become smaller than the original
// string, your method should return the original string.


var compression = function(str){

	var output ="";
	var count =1;
	var temp = str[0];

	for (var i=1; i < str.length ;++i){
		if (str[i] === temp){
			++count;
		}
		else{
			output += temp+count;  /// having a[i] +count giving wrong
			temp = str[i];
			count =1;
		}

	}
	output += temp+count;
	return output;



}

console.log(compression("aabcccccaaa"));