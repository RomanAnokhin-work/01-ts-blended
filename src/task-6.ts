// Завдання:

// Створіть тип для user.
// Зробіть address необов’язковим.
// Перевірте, що user.address?.city не викликає помилки.

type User = {
  name: string;
  address?: {
    city: string;
  };
};

const user: User = {
  name: "Alice",
  address: {
    city: "Kyiv",
  },
};

console.log("Task-6:");

console.log(user.address?.city);
