
//1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
// let i = 0;
// while (i <= 99) {
//     if (i % 2 == 0) {
//         console.log(i++);
//         continue;
//     }
//     i++;
// }
/*2. С этого урока начинаем работать с функционалом интернет - магазина.Предположим, есть сущность корзины.
    Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.*/
// let cart = [1500, 2000, 500];
// let price = 0;

// for (let prod of cart) {
//     price += prod;
// }
// console.log("Стоимость корзины: " + price + "руб.");

/*3. Товары в корзине хранятся в массиве.
    Задачи:
    a. Организовать такой массив для хранения товаров в корзине;
    b. Организовать функцию countBasketPrice, которая будет считать стоимость корзины.*/
// let cart = [1500, 2000, 500];
// let price = 0;

// function countBasketPrice(cart) {
//     for (let prod of cart) {
//         price += prod;
//     }
//     return price;
// }
// console.log("Стоимость корзины: " + countBasketPrice(cart) + "руб.");

/*4. * Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.
Выглядеть это должно так:
for (...) {// здесь пусто}*/
// for (let i = 0; i < 10; console.log(i++)) { }

//5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5
// let row = 'x';
// for (let i = 0; i < 20; i++) {
//     console.log(row);
//     row += 'x';
// }