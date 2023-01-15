let students = [
  {
    name: "Bob",
    age: 22,
    isMarried: true,
    scores: 85,
  },
  {
    name: "Alex",
    age: 21,
    isMarried: true,
    scores: 89,
  },
  {
    name: "Nick",
    age: 20,
    isMarried: false,
    scores: 120,
  },
  {
    name: "John",
    age: 19,
    isMarried: false,
    scores: 100,
  }
];

const getStName = (array) => {
  const result = [];
  const getName = item => item.name
  for (let i = 0; i < array.length; i++) {
    result[i] = getName(array[i])
  }
  return result;
}

console.log(getStName(students));