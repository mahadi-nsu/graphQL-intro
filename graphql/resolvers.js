import { data, getById, addPerson } from "./db";

const resolvers = {
  Query: {
    people: () => data,
    person: (_, { id }) => getById(id),
  },
  Mutation: {
    addPerson: (_, { name, age, gender }) => addPerson(name, age, gender),
  },
};

export default resolvers;
