const navRef = document.querySelector('#categories');

const navLinksRef = navRef.querySelectorAll('.item');
console.log(`У списку ${navLinksRef.length} категорії`);

for (let i = 0; i < navLinksRef.length; i += 1) {
    const titleRef = navLinksRef[i].firstElementChild;
    const itemsAnimalRef = titleRef.nextElementSibling.children.length;
    console.log(`
          Категорія: ${titleRef.innerText}
          Кількість елементів: ${itemsAnimalRef}
      `);
}