const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Ronaldo',
  age: 35,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
};

person.role = [0, 'admin'];

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

export {};
