"use strict";

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var things = ['bonzo', "dog", "band"];
var a1 = things[0];
var a2 = things[1];
var a3 = things[2];

var items = {};
items["a1"] = a1;
items["a2"] = a2;
items["a3"] = a3;

things.forEach(function (thing, idx) {

    var v = "a" + (idx + 1);
    console.log(v);
    $("#" + v).text(items[v] + " -- " + idx);
});
//# sourceMappingURL=destructured-assignment.js.map
