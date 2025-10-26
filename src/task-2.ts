// Завдання:

// Типізуйте параметри функції дозволивши властивості currency лише одне із значень "USD", "EUR", "UAH".
// Типізуйте повернення функції.

type Currency = "USD" | "EUR" | "UAH";

type ConvertCurrency = {
  amount: number;
  currency: Currency;
};

function convertCurrency({ amount, currency }: ConvertCurrency): void {
  console.log(`Converting ${amount} to ${currency}`);
}

console.log("Task-2:");

convertCurrency({ amount: 42, currency: "USD" });
