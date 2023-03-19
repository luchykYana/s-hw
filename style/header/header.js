const openBtn = document.getElementsByClassName('openBtn')[0];

let i = 0;

openBtn.onclick = () => {
    if(i === 0) {
        openNav();
        i++;
    } else {
        closeNav();
        i--;
    }
}

function openNav() {
    document.getElementsByClassName('main-nav')[0].style.visibility = 'visible';
    document.getElementsByClassName('main-nav')[0].style.opacity = '1';
}

function closeNav() {
    document.getElementsByClassName('main-nav')[0].style.opacity = '0';
    setTimeout(() => {
        document.getElementsByClassName('main-nav')[0].style.visibility = 'hidden';
    }, 500)
}

window.onresize = () => {
    if(window.innerWidth > 860) {
        document.getElementsByClassName('main-nav')[0].style.visibility = 'visible';
        document.getElementsByClassName('main-nav')[0].style.opacity = '1';
    } else {
        document.getElementsByClassName('main-nav')[0].style.visibility = 'hidden';
        document.getElementsByClassName('main-nav')[0].style.opacity = '0';
    }
}