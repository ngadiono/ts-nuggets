"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var add = function (a, b) {
    if (b === void 0) { b = 1; }
    return a + b;
};
var printOutput = function (output) { return console.log(output); };
var button = document.querySelector('button');
if (button) {
    button.addEventListener('click', function (event) { return console.log(event); });
}
printOutput(add(5));
//# sourceMappingURL=app.js.map