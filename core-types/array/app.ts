const person: {
  name: string;
  age: number;
  hobbies: string[];
} = {
  name: 'Ronaldo',
  age: 35,
  hobbies: ['Sports', 'Cooking'],
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
