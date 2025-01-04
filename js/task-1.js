const numbOfCategories = document.querySelectorAll(`.item`);
console.log(`Number of categories: ${numbOfCategories.length}`);
const categories = document.querySelectorAll(`#categories .item`);
categories.forEach((category) => {
  const categoryName = category.querySelector(`h2`).textContent;
  console.log("Category:", categoryName);
  const categoryElements = category.querySelectorAll("ul li");
  console.log(`Elements: ${categoryElements.length}`);
});
