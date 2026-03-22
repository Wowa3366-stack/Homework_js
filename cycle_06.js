let num = 1;
while (num <= 10) {
  console.log(num);
  num += 1;
}

for (let i = 2; i <= 20; i += 1) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}

for (let i = 1; i <= 10; i += 1) {
  console.log(`7 * ${i} = ${7 * i}`);
}

let n = 8;
for (let i = 1; ; i += 1) {
  if (i >= n) {
    break;
  }
  console.log(i);
}

let number = 1;
while (number <= 20) {
  if (number % 3 === 0) {
    number += 1;
    continue;
  }
  console.log(number);
  number += 1;
}