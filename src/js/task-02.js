const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];

const navRef = document.getElementById('ingredients');

const arr = [];
ingredients.forEach(value => {
    const linkRef = document.createElement('li');
    linkRef.textContent = value;
    arr.push(linkRef.outerHTML);
});
const stringLinks = arr.join('');
navRef.insertAdjacentHTML('afterbegin', stringLinks);