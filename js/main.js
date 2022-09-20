// ! load data
const loadData = async (url, callback) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    callback(data);
  } catch (error) {
    console.log(error);
  }
};

// ! categories data
const displayCategories = (data) => {
  //   console.log(data);
  const navberContainer = document.getElementById("navber-container");
  data.forEach((category) => {
    const { name } = category;
    const li = document.createElement("li");
    li.className = "nav-item";
    li.innerHTML = `<a class="nav-link" aria-current="page" href="#">${name}</a>`;
    navberContainer.appendChild(li);
  });
};
loadData("/category.json", displayCategories);
// ! displayCategoriesDetails
const displayCategoriesDetails = (data) => {
  console.log(data);
  const categories = document.getElementById("categories");
  data.slice(0, 4).forEach((category) => {
    const { name, img } = category;
    const div = document.createElement("div");
    div.className = "col text-center";
    div.innerHTML = `
                <img
                class="p-3 border rounded-circle h-50"
                src="${img}"
                alt=""
                />
                <h6 class="mt-1">${name}</h6>
    `;
    categories.appendChild(div);
  });
};
loadData("/category.json", displayCategoriesDetails);
