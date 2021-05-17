export const data = [
  {
    id: 1,
    name: "Mahadi Hassan",
    age: 26,
    gender: "male",
  },
  {
    id: 2,
    name: "Mahadi Hassan",
    age: 26,
    gender: "male",
  },
  {
    id: 3,
    name: "Mahadi Hassan",
    age: 26,
    gender: "male",
  },
  {
    id: 4,
    name: "Mahadi Hassan",
    age: 26,
    gender: "male",
  },
];

export const getById = (id) => {
  const filterPeople = data.filter((person) => person.id === id);
  return filterPeople[0];
  console.log(filterPeople);
};

export const addPerson = (name, age, gender) => {
  const newPerson = { id: data.length + 1, name, age, gender };
  data.push(newPerson);
  return newPerson;
};
