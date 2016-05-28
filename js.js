
function generateparen(left,right,str, arr)
{
	
    if(right==0)
    {
        arr.push(str);
        return;
    }
    if(left>0)
    {
    	//console.log("1st left: "+left, "right: "+ right, "str: " +str);
    	generateparen(left-1,right,str+'(', arr);
    }

    	
    if(right>left)
    {
    	//console.log("2nd left: "+left, " right: "+ right, "str: "+str);
    	generateparen(left,right-1,str+')',arr);
    }
 
 	return arr;
}

    var n=3; 
    var str="";
    var arr=[];
    console.log(generateparen(n,n,str, arr));


