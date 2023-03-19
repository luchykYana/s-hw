const load = document.getElementsByClassName('load')[0];
const bodyClass = document.getElementsByClassName('body')[0];
const letter = document.getElementsByClassName('letter');
const logo = document.getElementsByClassName('logo')[0];

logo.onanimationend = () => {
    load.style.opacity = '0';

    setTimeout(()=>{
        load.style.display = 'none'
        bodyClass.style.display = 'block'

        setTimeout(() => {
            bodyClass.style.opacity = '1'
        }, 300)

    }, 300)
}