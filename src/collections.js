/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 

let s = new Set([10,20,70,70,30,40]);
 
function repaintSet()
{
    $('#sets').empty();
    for (let t of s)
    {
        $('#sets').append("<li>"+t+` <button onclick="deleteThis(${t})">Delete</button>   </li>`);
    }
}

function deleteThis(thing)
{
   
    //console.log("found %s '%s'",s.has(thing),thing);
    s.delete(thing);
     
    repaintSet();
}

repaintSet();

//////////////////////////////////////////////////////////////////////////////
//Maps

let mapItems = ['alpha','beta','gamma'];

let mapThing = new Map();

for(let m of mapItems)
{
    let key = {'key': m};
    mapThing.set(key,m);
}


for (let key of mapThing.keys())
{
    
   let lineItem =  `<li><b>Key:</b> ${JSON.stringify(key)} <i>Value</i> ${mapThing.get(key)}</li>`;
   $('#maps').append(lineItem);
   
   
    
}