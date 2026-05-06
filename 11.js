// ===== 1. Bank Account =====
const bankAccount = {
  ownerName: "Volodia",
  accountNumber: "123456789",
  balance: 1000,

  deposit(amount) {
    this.balance += amount;
    alert(`Рахунок поповнено. Баланс: ${this.balance}`);
  },

  withdraw(amount) {
    if (amount > this.balance) {
      alert("Недостатньо коштів!");
    } else {
      this.balance -= amount;
      alert(`Знято кошти. Баланс: ${this.balance}`);
    }
  }
};

// Використання confirm + prompt
const action = confirm("Хочете поповнити рахунок? Натисніть OK для поповнення або Cancel для зняття");

const amount = Number(prompt("Введіть суму"));

if (!isNaN(amount)) {
  if (action) {
    bankAccount.deposit(amount);
  } else {
    bankAccount.withdraw(amount);
  }
}


// ===== 2. Weather =====
const weather = {
  temperature: 0,
  humidity: 70,
  windSpeed: 10,

  isCold() {
    return this.temperature < 0;
  }
};

weather.temperature = Number(prompt("Введіть температуру"));

if (weather.isCold()) {
  console.log("Температура нижче 0 градусів Цельсія");
} else {
  console.log("Температура вище або рівна 0 градусів Цельсія");
}


// ===== 3. User =====
const user = {
  name: "Volodia",
  email: "test@gmail.com",
  password: "12345",

  login(inputEmail, inputPassword) {
    if (inputEmail === this.email && inputPassword === this.password) {
      console.log("Успішний вхід!");
    } else {
      console.log("Невірний email або пароль!");
    }
  }
};

// Перевірка
const emailInput = prompt("Введіть email");
const passwordInput = prompt("Введіть пароль");

user.login(emailInput, passwordInput);


// ===== 4. Movie =====
const movie = {
  title: "Inception",
  director: "Christopher Nolan",
  year: 2010,
  rating: 8.8,

  isHighRated() {
    return this.rating > 8;
  }
};

// Вивід властивостей
console.log("Назва:", movie.title);
console.log("Режисер:", movie.director);
console.log("Рік:", movie.year);
console.log("Рейтинг:", movie.rating);

// Перевірка рейтингу
console.log("Рейтинг вище 8:", movie.isHighRated());




// ===== Завдання 1 =====
const userObj = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

userObj.mood = "happy";
userObj.hobby = "skydiving";
userObj.premium = false;

for (const key of Object.keys(userObj)) {
  console.log(`${key}: ${userObj[key]}`);
}


// ===== Завдання 2 =====
const countProps = function(obj) {
  return Object.keys(obj).length;
};

console.log(countProps(userObj));


// ===== Завдання 3 =====
const employees = {
  Mango: 120,
  Poly: 80,
  Ajax: 150,
};

const findBestEmployee = function(employees) {
  let bestName = "";
  let maxTasks = 0;

  for (const name in employees) {
    if (employees[name] > maxTasks) {
      maxTasks = employees[name];
      bestName = name;
    }
  }

  return bestName;
};

console.log(findBestEmployee(employees));


// ===== Завдання 4 =====
const countTotalSalary = function(employees) {
  let total = 0;

  for (const value of Object.values(employees)) {
    total += value;
  }

  return total;
};

console.log(countTotalSalary(employees));


// ===== Завдання 5 =====
const products = [
  { name: "Apple", price: 30, quantity: 3 },
  { name: "Orange", price: 20, quantity: 5 },
  { name: "Banana", price: 15, quantity: 7 },
];

const getAllPropValues = function(arr, prop) {
  const result = [];

  for (const obj of arr) {
    if (obj[prop] !== undefined) {
      result.push(obj[prop]);
    }
  }

  return result;
};

console.log(getAllPropValues(products, "name"));
console.log(getAllPropValues(products, "price"));


// ===== Завдання 6 =====
const calculateTotalPrice = function(allProducts, productName) {
  for (const product of allProducts) {
    if (product.name === productName) {
      return product.price * product.quantity;
    }
  }
  return 0;
};

console.log(calculateTotalPrice(products, "Apple"));
console.log(calculateTotalPrice(products, "Orange"));