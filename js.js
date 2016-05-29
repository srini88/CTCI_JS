var nodes = document.
            getElementsByTagName('button');
   

for (var i = 0; i < nodes.length; i++) {
   nodes[i].addEventListener('click', function() {
     console.log('You clicked element #' + i);
   });  
}

//this code by default prints you clicked element 3....problem......fix it 