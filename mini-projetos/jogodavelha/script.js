let cells = document.querySelectorAll('.cel');

cells.forEach(cel => {
    cel.addEventListener('click', () => {
        if (!cel.classList.contains('x') && !cel.classList.contains('circle')) {
            cel.classList.add('x');
        }
    });
});
