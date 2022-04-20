let num1 = prompt('Введите первое число')
if (!num1) {
  console.log('Некорректный ввод!');
} else if (!Number(num1)) {
  console.log('Некорректный ввод!');
};

let num2 = prompt('Введите второе число')
if (!num2) {
  console.log('Некорректный ввод!');
} else if (!Number(num2)) {
  console.log('Некорректный ввод!');
};

console.log((Number(num1)).toString(num2));