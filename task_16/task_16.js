// Задача16
// Створити пароль для користувача. Вимоги: довжина від 6 до 20
// символів повинен бути рівно один символ підкреслення, хоча б дві великі
// літери, не більше 5 цифр, будь-які дві цифри поспіль неприпустимі.

const generatePassword = () => {
    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const getRandomUpper = () => String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    const getRandomLower = () => String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }

        return array;
    }

    let length = 1, password = ['_'], letters = [], numbers = [];

    let temp = getRandomInt(3, 18);

    for (let i = 0; i < temp; i++) {
        letters.push(getRandomUpper());
    }
    length += temp;

    temp = getRandomInt(0, 5);
    temp = 20 - length > 5 ? temp : 20 - length;

    for (let i = 0; i < temp; i++) {
        numbers.push(getRandomInt(0, 9))
    }
    length += temp;

    if(20 - length > 0) {
        temp = length > 6 ? getRandomInt(0, 20 - length) : getRandomInt(6 - length, 20 - length)

        for (let i = 0; i < temp; i++) {
            letters.push(getRandomLower())
        }
    }

    password = shuffleArray(password.concat(letters).concat(numbers));

    for (let i = 0; i < password.length - 1; i++) {
        if (typeof password[i] === 'number' && typeof password[i + 1] === 'number') {
            password.splice(i, 1, getRandomLower());
        }
    }

    return password.join('')
}

console.log(generatePassword());

