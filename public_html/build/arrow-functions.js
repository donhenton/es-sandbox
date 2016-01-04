"use strict";

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var arrowFunction = function arrowFunction(amt) {

  var retVal = amt * 0.5 + " amount";

  return retVal;
};

console.log("arrow function " + arrowFunction(25));

var words = ['alpha', 'beta', 'gamma', 'delta', 'omega'];

var bonzo = words.map(function (word) {
  return word.toUpperCase();
});

console.log('bonzo ' + bonzo + " type " + (typeof bonzo === "undefined" ? "undefined" : _typeof(bonzo)));

/**
 * shows that using an arrow function defines this by what is contained in
 * where normally *this* is normally the scope of the function that it's in
 */

var course = {
  name: "Master ES6",
  description: "The Next Level",
  author: "bonzo",
  getSummary: function getSummary() {
    var name = 'inside1';
    window.setTimeout(function () {
      var name = 'inside2';
      console.log("normal '" + this.name + "'");
    }, 1000);
  },

  getSummary2: function getSummary2() {
    var _this = this;

    window.setTimeout(function () {

      console.log("arrow '" + _this.name + "'");
    }, 1000);
  }

};

course.getSummary();
course.getSummary2();
//console.log(Course().getSummary2()+" -- getSummary2")
//# sourceMappingURL=arrow-functions.js.map
