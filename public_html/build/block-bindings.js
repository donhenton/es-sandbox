/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

"use strict";

function blockBindingDemo() {
    var roll_num = 123;
    if (true) {
        var _roll_num = 456;
        console.log(_roll_num);
    }
    console.log(roll_num);
}

blockBindingDemo();
var i = 0;
for (var _i = 0; _i < 5; _i++) {
    console.log(_i);
}

console.log(i);
//# sourceMappingURL=block-bindings.js.map
