
function generateparen(left,right,str)
{
	var arr = [];
    if(right==0)
    {
        console.log(str);
        return;
    }
    if(left>0)
    {
    	console.log("1st left: "+left, "right: "+ right, "str: " +str);
    	generateparen(left-1,right,str+'(');
    }

    	
    if(right>left)
    {
    	console.log("2nd left: "+left, " right: "+ right, "str: "+str);
    	generateparen(left,right-1,str+')');
    }
 
}

    var n=3; 
    var str="";
    generateparen(n,n,str);


