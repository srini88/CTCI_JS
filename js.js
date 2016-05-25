///remove duplicates in a string

var str1 = "Helloooo";

var result ="";
for (var i=0 ; i < str1.length; ++i){
	console.log(result.indexOf(str1[i]))
	if (result.indexOf(str1[i]) === -1){  //leka pothe add cheyi
		result +=str1[i];
	}
}
console.log(result) //Helo