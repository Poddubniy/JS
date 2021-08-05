'use strict'
/* 1. Создать функцию, генерирующую шахматную доску.При этом можно использовать любые html - теги по своему желанию.
Доска должна быть разлинована соответствующим образом, т.е.чередовать черные и белые ячейки.
Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H. */
function generateСhessboard() {
    let $top = document.querySelector('#letters_top');
    let $board = document.querySelector('#board');
    let $bottom = document.querySelector('#letters_bottom');
    let $left = document.querySelector('#numbers_left');
    let $right = document.querySelector('#numbers_right');
    let lettersMassive = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    for (let n = 1; n < 9; n++) {
        let numberLeft = `<li class='numbers'>${n}</li>`;
        let numberRight = `<li class='numbers'>${n}</li>`;
        $left.insertAdjacentHTML('beforeend', numberLeft);
        $right.insertAdjacentHTML('beforeend', numberRight);
    }

    for (let letter in lettersMassive) {
        let letters = lettersMassive[letter];
        let htmlLetters = `<li class='letters'>${letters}</li>`;
        $top.insertAdjacentHTML('beforeend', htmlLetters);
    }

    let cellWhite = `<div class='cell_white'></div>`;
    let cellBlack = `<div class='cell_black'></div>`;

    for (let i = 0; i < 8; i++) {
        let block = document.createElement('div');
        block.className = 'board_block';

        $board.append(block);

        for (let j = 0; j < 4; j++) {
            let $boardBlock = document.querySelector('#board').children[i];

            $boardBlock.insertAdjacentHTML('beforeend', cellWhite);
            $boardBlock.insertAdjacentHTML('beforeend', cellBlack);
        }
    }

    for (let letter in lettersMassive) {
        let letters = lettersMassive[letter];
        let htmlLetters = `<li class='letters'>${letters}</li>`;
        $bottom.insertAdjacentHTML('beforeend', htmlLetters);
    }
}

generateСhessboard()
