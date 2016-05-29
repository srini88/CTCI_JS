var nodes = document.
            getElementsByTagName('button');
   

for (var i = 0; i < nodes.length; i++) {

    nodes[i].addEventListener('click', handleWrapper(i) );  
}
function handleWrapper(i){
    return function(){
       console.log('You clicked element #' + i); 
    }
}

// awesome solution above....
