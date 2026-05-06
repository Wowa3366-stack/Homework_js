// Завдання 1
const logItems = function(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
};

logItems(["Mango", "Poly", "Ajax"]);


// Завдання 2
const calculateEngravingPrice = function(message, pricePerWord) {
  const words = message.split(" ");
  return words.length * pricePerWord;
};

console.log(calculateEngravingPrice("Я дуже обожнюю джаваскрипт", 5));


// Завдання 3
const findLongestWord = function(string) {
  const words = string.split(" ");
  let longestWord = words[0];

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
};

console.log(findLongestWord("Доброго дня вас вітає компанія Нестле"));


// Завдання 4
const formatString = function(string) {
  if (string.length <= 40) {
    return string;
  } else {
    return string.slice(0, 40) + "...";
  }
};

console.log(formatString("Вітаємо та щиро дякуємо за ваш візит!"));


// Завдання 5
const checkForSpam = function(message) {
  const lowerMessage = message.toLowerCase();
  return lowerMessage.includes("spam") || lowerMessage.includes("sale");
};

console.log(checkForSpam("Це повідомлення містить spam"));
console.log(checkForSpam("Звичайний текст"));
console.log(checkForSpam("Є слово sale тут"));


// Завдання 6
let input;
const numbers = [];

while (true) {
  input = prompt("Введіть число");

  if (input === null) {
    break;
  }

  const value = Number(input);

  if (isNaN(value)) {
    alert("Було введено не число, попробуйте ще раз");
    continue;
  }

  numbers.push(value);
}

let total = 0;

for (const num of numbers) {
  total += num;
}

if (numbers.length > 0) {
  console.log(`Загальна сума чисел дорівнює ${total}`);
}