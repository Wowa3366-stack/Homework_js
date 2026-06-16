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





const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];
 const ingredientsList = [];
const ingredientsEl = document.querySelector('#ingredients');

for (const ingredient of ingredients) {
    const item = document.createElement("li");
    item.textContent = ingredient;
    ingredientsList.push(item)
}
ingredientsEl.append(...ingredientsList);

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('#gallery');

const markup = images
  .map(
    ({ url, alt }) =>
      `<li><img src="${url}" alt="${alt}" /></li>`
  )
  .join('');

galleryEl.insertAdjacentHTML('beforeend', markup);