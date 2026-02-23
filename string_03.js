// 1
const result = 5 + 5 + '5';
console.log(result);
console.log(typeof result);

// 2
const email = "example@gmail.com";
const hasAtSymbol = email.includes("@");
const emailLength = email.length;

console.log("Містить @:", hasAtSymbol);
console.log("Кількість символів:", emailLength);

// 3
const word1 = "My";
const word2 = "name";
const word3 = "is";

let fullName = word1 + " " + word2 + " " + word3;
fullName += " Viktor";

console.log(fullName);

// 4
const userName = "Олександра";
const payment = 300;

alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);
// 5
const fullAndName = "Volodia Matkovskyi";
const spaceIndex = fullAndName.indexOf(" ");
console.log(spaceIndex);

// 6
const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'розпродаж';

const string1 = 'Привіт, я Ілон Маск, це не спам, пропоную тобі мільйон!';
const string2 = 'Найбільший РОЗПРОДАЖ цього тижня, не пропустіть!';
const string3 = 'Рекламна кампанія #jsIsAwesome';

console.log(string1.toLowerCase().includes(blacklistedWord1));
console.log(string2.toLowerCase().includes(blacklistedWord2));
console.log(string3.toLowerCase().includes(blacklistedWord1));
// 7
const fruit = 'апельсин';
const lastSymbol = fruit[fruit.length - 1];
console.log(lastSymbol);