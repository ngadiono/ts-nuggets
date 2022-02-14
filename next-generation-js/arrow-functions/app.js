"use strict";
var add = function (a, b) { return a + b; };
var printOutput = function (output) { return console.log(output); };
var button = document.querySelector('button');
if (button) {
    button.addEventListener('click', function (event) { return console.log(event); });
}
printOutput(add(5, 2));
//# sourceMappingURL=app.js.map