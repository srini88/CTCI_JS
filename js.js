function sayHelloToClosures(yourName){
    var text = 'Hello Closures from '+yourName;
    var sayAlert = function(){   //has access to text 
        console.log(text);
    }
    sayAlert();
}

sayHelloToClosures("srini");

