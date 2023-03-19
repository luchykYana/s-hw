import confetti from 'https://cdn.skypack.dev/canvas-confetti';

const message = document.querySelector('.form__message');
const popup = document.getElementById('popup');
const popupText = document.querySelector('.popup__text');
const popupButton = document.querySelector('.popup__button');
const form = document.getElementById('subscribe-form');
const body = document.getElementById('blur');
const firstNameInput = form.elements.namedItem('name');
const lastNameInput = form.elements.namedItem('surname');
const emailInput = form.elements.namedItem('email');

const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

firstNameInput.setCustomValidity('The field is required');
lastNameInput.setCustomValidity('The field is required');
emailInput.setCustomValidity('The field is required');

function validateInput(input, regex, message) {
    regex.test(input.value) ? input.setCustomValidity('') : input.setCustomValidity(message);
}

firstNameInput.addEventListener('input', () => {
    validateInput(firstNameInput, /^[A-Z][a-z]*$/, 'Only Latin letters, the first letter is capital.\n' +
        ' The presence of numbers and spaces is unacceptable.');
});

lastNameInput.addEventListener('input', () => {
    validateInput(lastNameInput, /^[A-Z][a-z]*$/, 'Only Latin letters, the first letter is capital.\n' +
        ' The presence of numbers and spaces is unacceptable.');
});

emailInput.addEventListener('input', () => {
    validateInput(emailInput, /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/, 'To validate an email, ' +
        'it should contain the "@" symbol, followed by some letters or numbers. After that, there must be a dot "." ' +
        'and at least two characters.');
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
        form.reportValidity();
    } else {
        const formData = {
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            email: emailInput.value
        };
        localStorage.setItem('formData', JSON.stringify(formData));

        form.reset();

        message.innerText = `Thank you for subscribing, ${formData.firstName}! We will send you a letter!`;
        message.style.opacity = '1';

        setTimeout(() => {
            message.style.opacity = '0';
        }, 10000);

        if(formData.firstName === 'Yana') {
            party();
            greetings(formData.firstName);
        }
    }
});

function greetings(name) {
    const date = new Date().getDate() + ' ' + months[new Date().getMonth()];
    popupButton.innerText = 'Thank you!'
    popupText.innerText = `Our congratulations!\n Today, ${date}, we are giving all users named ${name} 120% discount!`;
    body.classList.toggle('active');
    popup.style.visibility = 'visible'
    popup.style.top= '30%'
    popup.style.opacity = '1'
}

function party(){
    confetti({angle: 45, gravity: 0.5, ticks: 500, particleCount: 100, origin:{x:0,y:0}});
    confetti({angle: 135, gravity: 0.5, ticks: 500, particleCount: 100, origin:{x:1,y:0}});
    confetti({angle: 45, gravity: 0.5, ticks: 500, particleCount: 100, origin:{x:0,y:1}});
    confetti({angle: 135, gravity: 0.5, ticks: 500, particleCount: 100, origin:{x:1,y:1}});
    confetti({angle: 45, gravity: 0.5, ticks: 500, particleCount: 100, origin:{x:0,y:0.5}});
    confetti({angle: 135, gravity: 0.5, ticks: 500, particleCount: 100, origin:{x:1,y:0.5}});
}

popupButton.onclick = () => {
    popup.style.visibility = 'hidden'
    popup.style.top= '20%'
    popup.style.opacity = '0'
    body.classList.toggle('active');
}