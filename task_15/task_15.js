// Задача15
// Запросіть користувача ввести якусь фразу. Відобразіть кожне слово у
// вигляді списку ul li. Також відобразіть перше слово UPPERCASE, а останні 2
// з маленької. Знайдіть усі літери "а" їх кількість виведіть у alert вікно. Після
// закриття alert - реалізувати скрипт, який через 5 хвилин бездіяльності
// користувача (нічого не натискається, нічого не виділяється, не рухається
// прогрес-бар) висвітлює повідомлення "Ви ще тут?" Якщо так, користувач
// залишається на сторінці, якщо ні сторінка закривається.

const string = prompt("Привіт) Введіть довільну фразу, будь-ласка.");

const words = string.split(' ').filter(word => word !== '');

const listElement = document.createElement('ul');

for (let word of words) {
    let info = document.createElement('li');
    info.innerText = word;
    listElement.appendChild(info);
}

for (let i = 0; i < listElement.children.length; i++) {
    if(i === 0) {
        listElement.children[i].style.textTransform = 'uppercase';
    }

    if(i > listElement.children.length - 3) {
        listElement.children[i].style.textTransform = 'lowercase';
    }
}

document.body.appendChild(listElement);

const countA = [...string].filter(char => char === 'a' || char === 'а').length;

function alertPromise(message) {
    return new Promise(function(resolve) {
        window.alert(message);
        resolve();
    });
}
alertPromise(`У вашому реченні ${countA} a`).then(function() {
    showPromptAfterInactivity();
});

function showPromptAfterInactivity() {
    let activityTimeoutId;

    function resetActivityTimeout() {
        clearTimeout(activityTimeoutId);
        activityTimeoutId = setTimeout(function() {
            alertPromise('Ви ще тут?').then(resetActivityTimeout);
        }, 5 * 1000); // 5 хвилин
    }

    resetActivityTimeout();

    // відслідковування подій користувача для скидання таймауту
    ['click', 'mousemove', 'keydown'].forEach(function(eventType) {
        document.addEventListener(eventType, resetActivityTimeout);
    });
}








