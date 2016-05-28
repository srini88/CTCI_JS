

//division works for all cases...

function division(a, b){

	var absa = abs(a);
	var absb = abs(b);

	if (absa < absb ) return 0;
	if (absb ===0) return "cannot divide by zero";
	if (a === 0) return 0;  //if a is zero
	//we get into 

	var result = 0;
	var count = 0;
	while(result <= absa){

		result += absb;
		++count;
	}
	count = --count;
	if ((a <0 &&  b < 0) || (a>0 && b>0))
		return count;
	else
		return negate(count);

}

console.log(division(25, 0.8))



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

//console.log(division(15, 3));