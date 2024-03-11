const categoriesList = document.querySelector('#categories');
const children = [...categoriesList.children];

console.log(`Number of categories: ${children.length}`);

children.forEach((item) => {
  const descendants = item.children;
  console.log(`Category: ${descendants[0].textContent}`);
  console.log(`Elements: ${descendants[1].children.length}`);
});