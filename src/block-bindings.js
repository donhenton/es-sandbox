/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


"use strict";
function blockBindingDemo()
{
    let roll_num = 123;
    if (true)
    {
       let roll_num = 456;
       console.log(roll_num);

    }
    console.log(roll_num);
}

blockBindingDemo();
var i=0;
for (let i=0;i<5;i++)
{
    console.log(i);
    
    
}

console.log(i);