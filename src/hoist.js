/* 
 * hoisting means moving to the top of the file. Only for declarations 
 * NOT initializations
 * 
 */


//Example 1
var x = 'alpha';

document.getElementById('example1').innerHTML =(x + " "+y);

//initializations are not hoisted
var y = 'beta';


//Example 2
var x = 'alpha';
var y;

document.getElementById('example2').innerHTML =(x + " "+y);

//initializations are not hoisted
 y = 'beta';