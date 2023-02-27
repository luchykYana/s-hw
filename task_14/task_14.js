// Задача14
// Перевірити, чи дотримується в заданому тексті баланс круглих дужок,
//     що відкриваються і закриваються, тобто можна встановити взаємно
// однозначну відповідність відкриваючих і закриваючих дужок, причому
// відкриваюча дужка завжди передує тій, що закривається. Якщо баланс
// дотримується вивести цей текст на html – сторінку і заборонити користувачу
// копіювати цей текст та перегляд коду сторінки.

const form = document.getElementById('form');
const text = document.getElementsByClassName('text')[0];

form.onsubmit = (ev) => {
    ev.preventDefault();

    const str = form.elements[0].value;
    const info = checkParenthesesBalance(str);
    text.innerText = info ? info : '';

    if(info) {
        text.addEventListener('copy', (ev) => ev.preventDefault())

        document.addEventListener('keydown', (ev) => {
            if (ev.ctrlKey && (ev.key === 'u' || ev.key === 'U' || ev.key === 'г' || ev.key === 'Г')) {
                alert('Content is protected\nYou cannot view the page source.');
                ev.preventDefault();
                ev.stopPropagation();
            }
        });

        document.addEventListener('contextmenu', (ev) => {
            ev.preventDefault();
            alert('Content is protected\nYou cannot view the context menu.');
        });
    }
}

function checkParenthesesBalance (text) {
    let stack = [];

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            if (stack.length === 0 || stack[stack.length - 1] !== '(') {
                alert('Помилка: баланс круглих дужок не дотримується.');
                return false;
            }
            stack.pop();
        }
    }

    if (stack.length > 0) {
        alert('Помилка: баланс круглих дужок не дотримується.');
        return false;
    } else {
        return text;
    }
}
