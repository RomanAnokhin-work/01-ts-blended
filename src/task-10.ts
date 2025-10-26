// 1. Створіть типізовану функцію toUserObjects, яка приймає масив рядків (імен користувачів).

// 2. Усередині функції переберіть масив імен та для кожного імені створи об’єкт з такими властивостями:

// id — порядковий номер (починаючи з 1),
// name — саме ім’я користувача (рядок з масиву).
// 3. Функція повинна повертати масив отриманих об’єктів.

// 4. Переконайтеся, що результат функції має правильну типізацію, а TypeScript не видає помилок.
interface User {
  id: number;
  name: string;
}

const users = ["alice", "bob", "charlie"];

function toUserObjects(arr: string[]): User[] {
  return arr.map((item, index) => ({
    id: index + 1,
    name: item,
  }));
}

console.log("Task-10:");

console.log(toUserObjects(users));
