document.addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();

    const sqaure = document.createElement('div')
    sqaure.style.width = '100px;'
    sqaure.style.height = '100px'
    sqaure.style.backgroundColor = 'blue'

    document.body.appendChild(sqaure);

    function stopIt() {
        sqaure.remove()
    }

    setTimeout(stopIt, 1000)
})

document.body.style.background = 'yellow';
