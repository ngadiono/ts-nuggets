enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person: {
  name: any;
  age: any;
  hobbies: any[];
  role: any;
} = {
  name: 'Ronaldo',
  age: 35,
  hobbies: ['Sports', 'Cooking'],
  role: Role.AUTHOR,
};

person.role = [0, 'admin'];

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

if (person.role === Role.AUTHOR) {
  console.log('is author');
}

export {};
