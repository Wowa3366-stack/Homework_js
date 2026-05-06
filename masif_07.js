let array1 = [7, 8, 9];
array1[1] = 15;
console.log(array1);

let array2 = ["car", "bus", "bike"];
array2[3] = "train";
console.log(array2);

const array3 = [3, 6, 12, 24];
let sum = 0;
for (const num of array3) {
    sum += num;
}
console.log(sum);

const array4 = [9, 4, 7, 2, 6];
for (let i = 0; i < array4.length; i += 1) {
    console.log(array4[i]);
}

const array5 = ["banana", "sky", "computer", "tree", "mountain"];
for (const str of array5) {
    if (str.length > 5) {
        console.log(str); 
    }
}

const array6 = [11, 4, 8, 2, 15, 7, 3, 10, 6, 1];
let max = array6[0];
for (const num of array6) {
    if (num > max) {
        max = num;
    }
}
console.log(max);

const array7 = [10, 3, 5, 8, 12, 7, 14, 1, 6, 9];
for (const number of array7) {
     if (number % 2 == 0) {
        console.log(number);
     }
}




const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let string = "";
for (let i = 0; i < friends.length; i+= 1) {
    string += friends[i];
    if (i !== friends.length - 1) {
        string += ", ";
    }
}
console.log(string);

const friends1 = ["Mango", "Poly", "Kiwi", "Ajax"];
console.log(friends1.join(", "));

const cards = ["Карточка-1", "Карточка-2", "Карточка-3", "Карточка-4", "Карточка-5"];
const cardToRemove = 'Карточка-3';
const indexCard = cards.indexOf(cardToRemove);
if (indexCard !== -1) {
    cards.splice(indexCard, 1);
}
console.log(cards);

const cardToInsert = 'Карточка-6';
cards.push(cardToInsert);
console.log(cards);

const cardIUpdate = 'Карточка-4' ;
const indexUpdateCard =  cards.indexOf(cardIUpdate);
const newCard = "Супер карточка 4";
if (indexUpdateCard !== -1) {
    cards.splice(indexUpdateCard, 1, newCard);
}
console.log(cards);