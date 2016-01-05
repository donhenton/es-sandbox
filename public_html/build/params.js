'use strict';

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function defaultDemo(anchor) {
  var alpha = arguments.length <= 1 || arguments[1] === undefined ? 'get a job' : arguments[1];

  $(anchor).text(alpha);
}

//should do something
defaultDemo('#example1');
defaultDemo('#example2', 'get another job,baby!!!');
//# sourceMappingURL=params.js.map
