const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];

const navRef = document.getElementById('ingredients');

ingredients.map(value => {
    const newArray = [];
    const linkRef = document.createElement('li');
    linkRef.textContent = value;
    newArray.push(linkRef);
    navRef.append(...newArray);
  });