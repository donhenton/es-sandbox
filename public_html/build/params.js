'use strict';

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

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

var itemSample = ['bonzo', "dog", "band"];

allSorts('#allList', "Snort", itemSample[0], itemSample[1], itemSample[2]);

function allSorts(anchor, title) {
    $('#allTitle').html(title);

    for (var _len = arguments.length, items = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        items[_key - 2] = arguments[_key];
    }

    $.each(items, function (idx, d) {

        $(anchor).append('<li>' + d + '</li>');
    });
}

$('#writeSomething').html(writeSomething('hello there ', 'John', 'Smith'));

function writeSomething(message) {

    return message + (arguments.length <= 2 ? undefined : arguments[2]) + ", " + (arguments.length <= 1 ? undefined : arguments[1]);
}

$('#destrucParam1').html(destructParam('Message', { 'last': 'Smith', 'first': 'John' }));

function destructParam(msg, _ref) {
    var lastName = _ref.last;
    var firstName = _ref.first;

    return msg + " ho ho " + lastName + ", " + firstName;
}

/////////////////////////////////////////////////

var numbers = [10, 20, 30, 40, 50];

$('#destrucArray1').append(destructArray(numbers));

function destructArray(_ref2) {
    var _ref3 = _toArray(_ref2);

    var first = _ref3[0];
    var second = _ref3[1];

    var remainder = _ref3.slice(2);

    var val = "<ol>";
    val += "<li>" + first + '</li>';
    val += "<li>" + second + '</li>';

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = remainder[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            val += "<li style='color:blue'>" + item + ' from for loop</li>';
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    remainder.forEach(function (item) {
        val += "<li style='color:red'>" + item + '</li>';
    });

    val += "<li>rest has length of " + remainder.length + '</li>';

    val = val + "</ol>";
    return val;
}

var sample = { 'last': 'Smith', 'first': 'John' };
$('#templateItem').append(templateDemo(sample));

function templateDemo(thing) {
    //requires backtick to get the interpolation
    var templateString = '<h3>This is for ' + thing.first + ' ' + thing.last + '</h3>';
    return templateString;
}
//# sourceMappingURL=params.js.map
