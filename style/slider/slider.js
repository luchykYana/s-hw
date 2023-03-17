const slider = document.querySelector('.container__carousel__slider');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let direction = -1;

prev.addEventListener('click', function() {
    if(direction === -1){
        slider.appendChild(slider.childNodes[0])
        direction = 1
    }

    slider.style.transform = 'translate(33.33%)';
});

next.addEventListener('click', function() {
    if (direction === 1) {
        slider.prepend(slider.childNodes[slider.childNodes.length - 1]);
        direction = -1;
    }

    slider.style.transform = 'translate(-33.33%)';
});

slider.ontransitionend = () => {
    if(direction === -1) {
        slider.appendChild(slider.firstElementChild);
        slider.appendChild(slider.firstElementChild);
    } else  {
        slider.prepend(slider.lastElementChild);
        slider.prepend(slider.lastElementChild);
    }

    slider.style.transition = 'none';
    slider.style.transform = 'translate(0)';
    setTimeout(function() {
        slider.style.transition = 'transform 1.2s ease'
    })
}
