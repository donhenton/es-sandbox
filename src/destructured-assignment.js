/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
let things = ['bonzo',"dog","band"];
let  [a1,a2,a3] = things;
let items = {};
items["a1"] = a1;
items["a2"] = a2;
items["a3"] = a3;

things.forEach((thing,idx) =>{
    
    let v = "a"+(idx+1); 
    console.log(v);
    $("#"+v).text(items[v]+" -- "+idx);
    
    
})

