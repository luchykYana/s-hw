// Задача10
// Дано рядок, що містить повне ім'я файлу (наприклад, 'c:
//     \WebServers\home\testsite\www\myfile.txt'). Виділіть із цього рядка ім'я файлу
// без розширення.

const extractFileName = (fullPath) => fullPath.split('\\').pop().slice(0, fullPath.split('\\').pop().lastIndexOf('.'));

const myString = `C:\\WebServers\\home\\testsite\\www\\myfile.txt`;

console.log(extractFileName(myString));

// JS сприймає один \ як метасимвол. Дана функція цієї проблеми уникає шляхом подвоюванням слешів.
// У іншому випадку її можна вирішити змінивши напрямок слеша, що притаманно для іншої операційної системи
// або використати String.raw але це діє напряму при ініціалізації стрічки