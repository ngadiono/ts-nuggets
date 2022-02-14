const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies];

console.log(activeHobbies);

const person = {
  name: 'Ronaldo',
  age: 35,
};

const copiedPerson = {
  ...person,
};

console.log(copiedPerson);
