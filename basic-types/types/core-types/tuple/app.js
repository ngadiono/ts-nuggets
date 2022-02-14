"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person = {
    name: 'Ronaldo',
    age: 35,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'],
};
person.role = [0, 'admin'];
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
//# sourceMappingURL=app.js.map