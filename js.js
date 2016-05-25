//add an element to an array and mnove the nesxt indices...

var arr = [0, 1, 2, 4, 5, 6, 7];

var newElement = 3;
var index = 3;

//go to the index directly..
for (var i = arr.length-1; i >=index ; --i){
	arr[i+1] = arr[i];
}
console.log(arr); //[0, 1, 2, 4, 4, 5, 6, 7]
arr[index] = newElement;

console.log(arr);




