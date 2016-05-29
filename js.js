var nodes = document.
            getElementsByTagName('button');
   

for (var i = 0; i < nodes.length; i++) {

    nodes[i].addEventListener('click', (function(j) {

        return function(){
            console.log('You clicked element #' + j);
        }
    })(i));  
}

///working nowwwwwwwwwwwwww...........also see http://stackoverflow.com/questions/37495673/javascript-onclick-event-not-firing-correctly

// Here is what it is happening in you code:

// ==> for loop gets executed synchronously as it is part of javascript engine post which javascript handles event queue which is a FIFO (first in first out)

// ==> When for loop finished value of i is three which remains in memory until the function inside it executes

// ==> Each time it takes a value 3 and prints it.