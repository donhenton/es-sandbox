/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

let arrowFunction = (amt) =>
 {
         
         let retVal = (amt *0.5)+" amount";   
            
         return retVal;   
}

console.log("arrow function "+arrowFunction(25))


let words = ['alpha','beta','gamma','delta','omega'];

let bonzo = words.map(word => { return word.toUpperCase()});
 
 console.log('bonzo '+bonzo +" type "+typeof bonzo);
 
 /**
  * shows that using an arrow function defines this by what is contained in
  * where normally *this* is normally the scope of the function that it's in
  */
 
 let course = 
 {
     name: "Master ES6",
     description: "The Next Level",
     author: "bonzo",
     getSummary: function()
     {    let name = 'inside1';
         window.setTimeout( function(){
           let name = 'inside2';
           console.log("normal '"+  this.name+"'");   
     },1000);
        
     } ,
     
     getSummary2:  function()
     {
         
         
         window.setTimeout( () =>{
             
           console.log("arrow '"+  this.name+"'");   
     },1000);
     }
     
     
 }
 
 course.getSummary();
 course.getSummary2();
 //console.log(Course().getSummary2()+" -- getSummary2")