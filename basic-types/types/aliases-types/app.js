"use strict";
function combine(n1, n2, resultConversation) {
    var result;
    if ((typeof n1 === 'number' && typeof n2 === 'number') || resultConversation === 'as-number') {
        result = +n1 + +n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
var combinedAges = combine(30, 20, 'as-number');
console.log(combinedAges);
var combinedStringAges = combine('30', '20', 'as-number');
console.log(combinedStringAges);
var combinedNames = combine('Ron', 'Aldo', 'as-text');
console.log(combinedNames);
