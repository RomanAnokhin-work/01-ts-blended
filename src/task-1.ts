// Завдання:

// Створіть тип Settings, який описує цей об'єкт.
// Типізуйте settings через цей тип.

type Settings = {
  darkMode: boolean;
  fontSize: number;
  language: string;
};

const settings: Settings = {
  darkMode: true,
  fontSize: 16,
  language: "en",
};

console.log("Task-1:");

console.log(settings);