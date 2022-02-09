function combine(n1, n2) {
    var result;
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
var combineAges = combine(30, 20);
console.log(combineAges);
var combineNames = combine('Ron', 'Aldo');
console.log(combineNames);
