function combine(n1: number | string, n2: number | string, resultConversation: 'as-number' | 'as-text') {
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
