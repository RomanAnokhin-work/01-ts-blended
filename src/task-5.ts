// Завдання:

// Типізуйте функцію повністю: параметри і повернення функції.

interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}
type CreateUser = {
  name: string;
  age: number;
};

function createUser({ name, age }: CreateUser): User {
  return {
    name,
    age,
    isAdmin: false,
  };
}

console.log("Task-5:");

console.log(createUser({ name: "Alice", age: 30 }));
