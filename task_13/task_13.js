// Задача13
// Дано рядок, що складається зі слів, розділених пробілами. Сформувати
// новий рядок з такими властивостями: а) усі слова у нижньому регістрі, крім
// першої літери першого слова; б) усі посилання у словах замінюються на
// "[посилання заборонено]"; в) всі email замінюються на "[контакти
// заборонені]"; г) усі слова довжини понад 3 символи, що містять лише цифри,
// видаляються.
//     Якщо кількість символів в отриманому рядку буде більшої ніж
// кількість символів у вихідному, то запустити функцію, що буде кожні 5
// секунд в alert буде питати, чи потрібна нам допомога

const modifyString = (str) => {
    const replaceUrl = str => str.replace(/(https?:\/\/[^\s]+)/g, "[посилання заборонено]");
    const replaceEmail = str => str.replace(/\b\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}\b/g, "[контакти заборонені]");
    const removeDigits = str => str.replace(/\b\d{4,}\b/g, "");

    let words = str.split(" ");
    let newWords = words.map((word, index) => {
        if (index === 0) {
            return word[0] + word.slice(1).toLowerCase();
        } else {
            return removeDigits(replaceEmail(replaceUrl(word.toLowerCase())));
        }
    });

    let newStr = newWords.join(" ");

    if (newStr.length > str.length) {
        setInterval(() => {
            if (confirm("Чи потрібна вам допомога?")) {
                alert("Допомога надана!");
            }
        }, 5000);
    }

    return newStr;
}

const originalString = "Це текст з посиланням на https://example.com та емейлом user@example.com та цифрами 12345 та 12.";
const modifiedString = modifyString(originalString);

console.log(modifiedString);