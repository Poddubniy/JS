'use strict'
// 2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML - структуре.Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
// 2.1.Пустая корзина должна выводить строку «Корзина пуста»;
// 2.2.Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
// 3 *.Сделать так, чтобы товары в каталоге выводились при помощи JS:
// 3.1.Создать массив товаров(сущность Product);
// 3.2.При загрузке страницы на базе данного массива генерировать вывод из него.HTML - код должен содержать только div id =”catalog” без вложенного кода.Весь вид каталога генерируется JS.

let total = 0;
let amount = 0;
// let shopCart = [];

function product() {
    let catalog = document.getElementById('catalog');

    const product = [
        { name: 'Датчик движения', price: 1600 },
        { name: 'Умная колонка', price: 10000 },
        { name: 'Умная лампочка', price: 850 }
    ]

    for (const i of product) {
        let htmlProduct = `<section><header>${i.name}</header><p class="price">${i.price} руб</p><p><button id="button">В корзину</button></p></section>`;
        catalog.insertAdjacentHTML('afterbegin', htmlProduct);
    }
}


function addProduct(total) {
    let button = document.getElementsByTagName('button');

    for (const iterator of button) {
        iterator.addEventListener('click', add);
    }


    function add() {
        total = 1 + total++;
        return cart(total);
    }
}

function cart(total) {
    let cart = document.getElementById('cart');

    if (total <= 0) {
        cart.insertAdjacentText('afterbegin', 'Корзина пуста');
    } else {
        let htmlTotal = `<span id="total_amount">В корзине: ${total} товаров на сумму ${amount} рублей</span>`;
        cart.insertAdjacentHTML('afterbegin', htmlTotal);
    }

    // let rem = document.getElementsByTagName('span');
    // rem.removeEventListener('click', console.log(total));
}

product();
cart(total);
addProduct(total);
















// for (let key in product) {
//     catalog.insertAdjacentHTML('afterbegin', product[key].name + ' ' + product[key].price + '<br>');
// }
// for (let i = 0; i < product.length; i++) {
//     const element = product[i];
//     cart.insertAdjacentHTML('afterbegin', element.name + element.price);
// }

// product.forEach(element => catalog.insertAdjacentHTML('afterbegin', element.name + ' ' + element.price + '</br >'));
