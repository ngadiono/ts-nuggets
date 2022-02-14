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

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);

const { name, age } = person;
console.log(name);

export {};
