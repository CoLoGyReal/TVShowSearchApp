const form = document.querySelector('#searchForm');
const text = document.querySelector('input');

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const name = text.value;
    const res = await axios.get(`http://api.tvmaze.com/singlesearch/shows?q=${name}`);
    console.log(res.data);
    const img = document.createElement('img');
    img.src = res.data.image.medium;
    document.body.append(img);

})