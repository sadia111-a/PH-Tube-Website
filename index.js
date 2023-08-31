const handleCategory = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await response.json();
  const btnContainer = document.getElementById("btn-container");
  data.data.forEach((category) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <button onclick=" handleLoadNews('${category.category_id}')" class="btn">${category.category}</button>
    
    `;
    btnContainer.appendChild(div);
  });
  console.log(data.data);
};
const handleLoadNews = async (categoryId) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
  );
  const data = await response.json();
  console.log(data.data);
};

handleCategory();
