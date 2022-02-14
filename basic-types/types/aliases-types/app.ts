type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(n1: Combinable, n2: Combinable, resultConversation: ConversionDescriptor) {
  let result;
  if ((typeof n1 === 'number' && typeof n2 === 'number') || resultConversation === 'as-number') {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
}

const combinedAges = combine(30, 20, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '20', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Ron', 'Aldo', 'as-text');
console.log(combinedNames);

export {};
