const articles = document.querySelectorAll('.section-seven__article');

window.addEventListener('scroll', checkArticles);

function checkArticles() {
    const triggerBottom = window.innerHeight;

    articles.forEach((a) => {
        const boxTop = a.getBoundingClientRect().top;

        if(boxTop < triggerBottom) {
            a.style.animation = "1s articles ease"
            a.onanimationend = () => {
                a.style.opacity = '1';
                a.style.right = '0'
            }
        } else {
            a.style.animation = ""
            a.onanimationend = () => {
                a.style.opacity = '0';
                a.style.right = '100px'
            }
        }
    })
}