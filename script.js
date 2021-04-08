const form = document.querySelector('#searchForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.elements.query.value;
    console.log(name);
})