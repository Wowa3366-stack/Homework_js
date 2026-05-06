// ===== Завдання 1 =====
const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ['кіт', 'собака', 'миша', 'папуга', 'хомяк'];

const countItems = function(array, condition) {
  let count = 0;

  for (const element of array) {
    if (condition(element)) {
      count++;
    }
  }

  return count;
};

// Умови
const isEven = num => num % 2 === 0;
const isLarge = num => num > 10;
const isShort = word => word.length <= 3;

// Тест
console.log('Парних чисел:', countItems(numbers, isEven));
console.log('Чисел більше 10:', countItems(numbers, isLarge));
console.log('Коротких слів:', countItems(words, isShort));


// ===== Завдання 2 =====
const calculate = (a, b, operation) => {
  return operation(a, b);
};

// Операції
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

const divide = (a, b) => {
  if (b === 0) {
    return "Помилка: ділення на нуль";
  }
  return a / b;
};

// Тест
console.log(calculate(10, 5, add));
console.log(calculate(10, 5, subtract));
console.log(calculate(10, 5, multiply));
console.log(calculate(10, 5, divide));
console.log(calculate(10, 0, divide));


// ===== Завдання 3 =====
const repeatMessage = (times, messageCreator) => {
  for (let i = 0; i < times; i++) {
    console.log(messageCreator(i));
  }
};

// Тест
repeatMessage(3, (i) => `Повідомлення №${i + 1}`);
repeatMessage(5, (i) => `Ітерація: ${i}`);
repeatMessage(4, (i) => `Привіт! Це раз ${i + 1}`);