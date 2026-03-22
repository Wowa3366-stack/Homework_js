const firstTextField = "hello123";
const secondTextField = "world";
if(firstTextField !== "" && secondTextField !== ""){
    console.log("Обидва поля заповнені");
}else{
    console.log("Не всі поля заповнені");
}

const firstNumber = 6;
const secondNumber = 5;
const sum = firstNumber + secondNumber;
if(sum >= 10){
    console.log("Сума більша за 10");
}else{
    console.log("Сума менша або дорівнює 10");
    
}

const text = "I really like coding";
if(text.includes("JavaScript")){
    console.log("Текст містить слово JavaScript");
}else{
    console.log("Текст не містить слово JavaScript");
}

const number = 17;
const numericalRange = number >= 10 && number <= 20;
if(numericalRange) {
    console.log("Число входить в діапазон від 10 до 20");
}else {
    console.log("Число не входить в діапазон від 10 до 20");
}

const name = "Олег";
const email = "oleg_test@ukr.net";
const password = "qwerty12";
const correct = name.length >= 3 && email.includes("@") && password.length >= 6;
if (correct) {
    console.log("Перенаправлення на іншу сторінку");
}else{
    console.log("Помилка: неправильне заповнення");
}