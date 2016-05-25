

///do multiplication with just addition
function mult (a, b){
	
	if (abs(a) < abs(b)) return (mult(b,a));

	//now inside
	//7 and 3, b is 3 here//
	var temp  = abs(a);
	var result = 0;
	for (var i=0; i < abs(b); ++i){
		result += temp;
	}
	//if both are either positive or negative..return result.
	if ((a <0 &&  b < 0) || (a>0 && b>0))
		return result;
	else
		return negate(result);

}

//absolute function to always return +ve if x is +ve or -ve
function abs (x){

	if (x > 0) return x;

	return negate(x);

}
//does negation of a number
function negate(x){
	var i = (x >0) ? -1 : 1;
	var a = 0;

	while (x!==0){

		a += i;
		x += i;
	}

	console.log("a: " +a);
	console.log("x: " + x);
	return a;  ///

}

//console.log(negate(5))

console.log(mult(3, 0));