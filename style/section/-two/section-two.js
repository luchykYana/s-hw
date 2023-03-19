const serviceBlocks = document.getElementsByClassName('service');
const inputs = document.querySelectorAll('input[name=service]');

const url = 'https://jsonplaceholder.typicode.com/users/1';

Promise.all([
    fetch(`${url}/posts`).then(response => response.json()),
    fetch(`${url}/albums`).then(response => response.json()),
    fetch(`${url}/todos`).then(response => response.json())
])
    .then(([posts, albums, todos]) => {
        posts = posts.filter(post => post?.id % 2 !== 0);
        albums = albums.filter(album => album?.id > 5);
        todos = todos.filter(todo => todo?.completed === true).splice(0, 5);

        let checked = 0;

        inputs.forEach(radioBtn => {
            radioBtn.addEventListener('click', ev => {
                if (checked === radioBtn.value && checked !== 0) {
                    ev.target.checked = false;
                    inputs[0].click();
                    drawAll([posts[0], albums[0], todos[0]], ['Post', 'Album', 'Todo']);
                    checked = 0
                } else {
                    if(ev.target.checked) {
                        if (radioBtn.value === '0') {
                            drawAll([posts[0], albums[0], todos[0]], ['Post', 'Album', 'Todo']);
                        }
                        else if(radioBtn.value === '1') {
                            draw(posts, 'Post', 'service__post');
                        } else if (radioBtn.value === '2') {
                            draw(albums, 'Album', 'service__album');
                        } else if (radioBtn.value === '3') {
                            draw(todos, 'Todo', 'service__todo');
                        }
                    }
                    checked = radioBtn.value;
                }
            });
        })
        inputs[0].click();
    })
    .catch(error => {
        console.error(error);
    });

function draw(items, title, className) {
    const list = ['service__post', 'service__album', 'service__todo'];

    for (const block of serviceBlocks) {
        block.classList.add('none');
    }

    setTimeout(() => {
        items.forEach((item, index) => {
            serviceBlocks[index].childNodes[1].innerText = `${title} ${item.id}`;
            serviceBlocks[index].childNodes[3].innerText = `${item.title}`;
        })

        for (const block of serviceBlocks) {
            block.classList.add(className);
            block.classList.remove('none');
            block.classList.remove(...list.filter(item => item !== className));
        }
    }, 300);
}

function drawAll(items, title) {
    const list = ['service__post', 'service__album', 'service__todo'];

    for (const block of serviceBlocks) {
        block.classList.add('none');
    }

    setTimeout(() => {
        items.forEach((item, index) => {
            serviceBlocks[index].childNodes[1].innerText = `${title[index]} ${item.id}`;
            serviceBlocks[index].childNodes[3].innerText = `${item.title}`;

            serviceBlocks[index].classList.remove('none');
            serviceBlocks[index].classList.add(list[index]);
            serviceBlocks[index].classList.remove(...list.filter(item => item !== list[index]));
        })
    }, 300)
}
