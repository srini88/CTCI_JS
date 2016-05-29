var nodes = document.
            getElementsByTagName('button');
   

for (var i = 0; i < nodes.length; i++) {

    nodes[i].addEventListener('click', (function(j) {

        return function(){
            console.log('You clicked element #' + j);
        }
    })(i));  
}
// The reason is that after the for loop is completed, the variable i assumes a value equal to the length of the nodes list. In addition, because i was in scope at the time the code attached the handler, the variable belongs to handler’s closure. As you’ll recall, the value of the variables in closures isn’t static, hence the value of i isn’t the value at the time the handler was added (0 for the first button in the list, 1 for the second, and so on). At the time the handler will be executed, on the console will be printed the current value of the variable i, that is equal to the length of the nodes list.

