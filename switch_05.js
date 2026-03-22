const drink = "Кава";
let text;
switch (drink) {
  case "Чай":
    text = "Добре, зараз буде чай";
    break;
  case "Кава":
    text = "Добре, зараз буде кава";
    break;
  case "Сік":
    text = "Добре, зараз буде сік";
    break;
  default:
    text = "Виберіть щось з цього: `Чай, кава, сік `";
}
console.log(text);

const day = "Wednesday";
let text1;
switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    text1 = "It`s a working day";
    break;
  case "Saturday":
  case "Sunday":
    text1 = "It`s a day off";
    break;
  default:
    text1 = "Write the day of the week correctly";
    break;
}
console.log(text1);

const number = 7;
let text2;

switch (number) {
  case 12:
  case 1:
  case 2:
    text2 = "it`s a winter";
    break;
  case 3:
  case 4:
  case 5:
    text2 = "it`s a spring";
    break;
  case 6:
  case 7:
  case 8:
    text2 = "it`s a summer";
    break;
  case 9:
  case 10:
  case 11:
    text2 = "it`s a fall";
    break;
  default:
    text2 = "Enter a  number from 1 to 12";
    break;
}
console.log(text2);

const color = "Green";
let text3;
switch (color) {
  case "Red":
    text3 = "stop";
    break;
  case "Yellow":
    text3 = "wait";
    break;
  case "Green":
    text3 = "go";
    break;
  default:
    break;
}
console.log(text3);

const number1 = 20;
const number2 = 4;
const operator = "*";
let result;

switch (operator) {
  case "+":
    result = number1 + number2;
    break;

  case "-":
    result = number1 - number2;
    break;

  case "*":
    result = number1 * number2;
    break;

  case "/":
    if (number2 === 0) {
      console.log("You cannot divide by 0");
    } else {
      result = number1 / number2;
    }
    break;

  default:
    console.log("Enter the correct operator");
}
console.log(result);