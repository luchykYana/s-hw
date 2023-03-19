const popup = document.getElementById('popup');
const popupText = document.querySelector('.popup__text');
const popupButton = document.querySelector('.popup__button');
const body = document.getElementById('blur');

popup.style.visibility = 'hidden'

function showAlert() {
    popupButton.innerText = 'Yes!'
    popupText.innerText = `Are you here?`;
    body.classList.toggle('active')
    popup.style.visibility = 'visible'
    popup.style.top = '30%'
    popup.style.opacity = '1'
}

function hideAlert() {
    popup.style.visibility = 'hidden';
}

let inactivityTime = function () {
    ['click', 'mousemove', 'keydown'].forEach(function (eventType) {
        document.addEventListener(eventType, resetTimer);
    });

    let time;

    function logout() {
        if (popup.style.visibility !== 'hidden') {
            console.log('close')
            window.close()
        } else {
            showAlert()
            resetTimer();
        }
    }

    function resetTimer() {
        clearTimeout(time);
        time = setTimeout(logout, 1000 * 60)
    }
};

inactivityTime()

popupButton.onclick = () => hideAlert();