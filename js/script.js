const students = [
  {name: "Alex", age: 33, address: { street: "Pushkinskaya", number: 101, },},
  {name: "Bob", age: 38, address: { street: "Sadovaya", number: 257, },},
];

// const studentsCopy = students.map(s => ({...s}));

const studentsCopy = [...students]

console.log(students);
console.log(studentsCopy);

console.log(students === studentsCopy); //false
console.log(students[0] === studentsCopy[0]) //false

console.log(students[0].address.street === studentsCopy[0].address.street);
console.log(students[0].address.street);

//CRUD
const addSt = [...students, {name: "Anna", age: 28}];
const updateBobAge = students.map(st => st.name === "Bob" ? {...st, age: 39} : st);
const removeStudent = students.filter(st => st.name !== "Bob")

console.log(students)
console.log(updateBobAge)
console.log(removeStudent)