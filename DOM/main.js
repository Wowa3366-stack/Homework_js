const input = document.querySelector(".textInput");
const button = document.querySelector(".myButton");


const inputEl = document.querySelector("input")
console.log(inputEl);
const inputValue = inputEl.value;
console.log(inputValue);
const buttonEl = document.querySelector('button[type = "button"]');
console.log(buttonEl);
buttonEl.textContent = inputValue;


const image1 = document.querySelector(".image1");
image1.src = "https://s.mind.ua/img/forall/a/201923/89.jpg?1717744198";


const link = document.querySelector(".link");
link.href = "https://www.tiktok.com/uk-UA/";

const image2 = document.querySelector(".image2");
image2.alt = "Віталій Кличко";


const firstItem = document.querySelector("li");
firstItem.textContent = "Новий перший елемент";