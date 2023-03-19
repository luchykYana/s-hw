const articles = document.querySelectorAll('.section-seven__article');
const four = document.querySelector('.photo--fourth');
const five = document.querySelector('.photo--fifth');

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

async function fetAllMovies(url) {
    const response = await fetch(url, {
        method: "GET",
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTYxYWFjYjFkMGU4NmI5ODVlMWJhN2I4ZWQ0NDBmYSIsInN1YiI6IjYxMzI4ZWRlMmNkZTk4MDA2MmQwZDllMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tcx1nliQ_tQWkCtY5TSS5wqKtel_Rv5zJsy0c6wo9zY"
        }
    });
    return response.json();
}

fetAllMovies("https://api.themoviedb.org/3/discover/movie?&page=1").then((films) => {
    four.style.background = `url(https://image.tmdb.org/t/p/w300/${films.results[0].backdrop_path}) no-repeat`;
    four.style.backgroundSize = 'cover';
    articles[0].querySelector('h3').innerText = `${films.results[0].original_title}`
    articles[0].querySelector('p').innerText = `${films.results[0].overview.slice(0, 120)}...`

    five.style.background = `url(https://image.tmdb.org/t/p/w300/${films.results[2].backdrop_path}) no-repeat`;
    five.style.backgroundSize = 'cover';
    articles[1].querySelector('h3').innerText = `${films.results[2].original_title}`
    articles[1].querySelector('p').innerText = `${films.results[2].overview.slice(0, 115)}...`
});


