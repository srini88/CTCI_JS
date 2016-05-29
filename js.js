var nodes = document.
            getElementsByTagName('button');
   

for (var i = 0; i < nodes.length; i++) {
    ////converted click function into an IIFE so it executes then and there only 
    nodes[i].addEventListener('click', (function(j) {
        console.log('You clicked element #' + j);
    })(i));  
}

////to some extent this stuff works..yuo could see IIFE running immediely...console shows 0 1 2....but you want to show only when we click...so we got to reutn the stuff instead of just consoling..