let num1 = prompt('Введите первое число');
if (!num1) {
  console.log('Некорректный ввод!');
} else if (!Number(num1)) {
  console.log('Некорректный ввод!');
};

let num2 = prompt('Введите первое число'):
if (!num2) {
  console.log('Некорректный ввод!');
} else if (!Number(num2)) {
  console.log('Некорректный ввод!');
};

let sum = Number(num1) + Number(num2);
let divide = num1 / num2;

console.log(`Ответ: ${sum}, ${divide}.`);