// 1. Почему код дает именно такие результаты ?
// var a = 1, b = 1, c, d;
// c = ++a; alert(c); // 2 В данном примере мы видем префиксный унарный оператор, сначала инкрементирование, а потом новое значение.
// d = b++; alert(d); // 1 В постфиксном, сначала старое значение, а потом инкрементирование.
// c = (2 + ++a); alert(c); // 5 Т.к переменная 'a' уже имеет значение 2, а инкрементирование префиксное, то при сложении получается 5
// d = (2 + b++); alert(d); // 4 Т.к переменная 'b' уже имеет значение 1, а инкрементирование постфиксное, то при сложении получается 4
// alert(a); // 3 Т.к значение 'а' три раза инкрементировалось.
// alert(b); // 3 Т.к значение 'b' три раза инкрементировалось.


// 2. Чему будет равен x ?
// var a = 2;
// var x = 1 + (a *= 2); 'х' ,будет равен 5


// 3. Объявить две целочисленные переменные — a и b и задать им произвольные начальные
// значения.Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму;
// Ноль можно считать положительным числом.

// let a = 5;
// let b = 2;
// let x = 0;

// if (a > 0 && b > 0) {
//     x = a - b;
//     console.log(x);
// }
// else if (a < 0 && b < 0) {
//     x = a * b;
//     console.log(x);
// }
// else {
//     x = a + b;
//     console.log(x);
// }

// 4. Присвоить переменной а значение в промежутке[0..15].С помощью оператора switch
// организовать вывод чисел от a до 15.
// let a = 5;

// switch (a) {
//     case a:
//         while (a <= 15) {
//             console.log(a);
//             ++a;
//         }
//         break;
// Не понятно зачем эту задачу выполнять через switch с выводом чисел от a до 15, если программа работает и без данного оператора.


// 5. Реализовать четыре основные арифметические операции в виде функций с двумя
// параметрами.Обязательно использовать оператор return.
// let a = 7;
// let b = 8;

// function sum(a, b) {
//     return a + b;
// }
// function minus(a, b) {
//     return a - b;
// }
// function multiplication(a, b) {
//     return a * b;
// }
// function division(a, b) {
//     return a / b;
// }

// console.log(sum(a, b));
// console.log(minus(a, b));
// console.log(multiplication(a, b));
// console.log(division(a, b));


// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 — значения аргументов, operation — строка с названием операции.В
// зависимости от переданного значения выполнить одну из арифметических операций
//     (использовать функции из пункта 5) и вернуть полученное значение(применить switch).
// let arg1 = 5;
// let arg2 = 7;
// let operation = 'minus';

// function sum(arg1, arg2) {
//     return arg1 + arg2;
// }
// function minus(arg1, arg2) {
//     return arg1 - arg2;
// }
// function multiplication(arg1, arg2) {
//     return arg1 * arg2;
// }
// function division(arg1, arg2) {
//     return arg1 / arg2;
// }

// function mathOperation(arg1, arg2, operation) {
//     switch (operation) {
//         case 'sum':
//             return sum(arg1, arg2);
//         case 'minus':
//             return minus(arg1, arg2);
//         case 'multiplication':
//             return multiplication(arg1, arg2);
//         case 'division':
//             return division(arg1, arg2);
//     }
// }
// console.log(mathOperation(arg1, arg2, operation))

// 7. * Сравнить null и 0. Объяснить результат.
// console.log(null == 0);
// console.log(null < 0);
// console.log(null >= 0);
// Сравнения преобразуют null в число, рассматривая его как 0. Поэтому выражение(3) null >= 0 истинно, а null > 0 ложно. 
// А вот равны они могут быть только самим себе.


// 8. * С помощью рекурсии организовать функцию возведения числа в степень.Формат: function
//     power(val, pow), где val — заданное число, pow –— степень.

// function power(val, pow) {
//     if (pow == 1) {
//         return val;
//     } else {
//         return val * power(val, pow - 1);
//     }
// }

// console.log(power(6, 3))