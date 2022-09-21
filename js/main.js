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
// ! displayProducts
const displayProducts = (data) => {
  localStorage.setItem("PRODUCTS", JSON.stringify(data.products));
  const getProducts = JSON.parse(localStorage.getItem("PRODUCTS"));
  const products = document.getElementById("products");
  getProducts.forEach((product) => {
    console.log(product);
    const { id, img, name, discription, price } = product;
    const div = document.createElement("div");
    div.className = "col";
    div.innerHTML = `
                <div class="card h-100 text-center border-0 shadow-lg">
                <img
                  src="${img}"
                  class="card-img-top card-img mx-auto pt-2"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">${name}</h5>
                  <p class="card-text">${
                    discription ? discription : "Not Found"
                  }</p>
                  <p class="card-text fw-bold">$${price}</p>
                  <button class="btn btn-dark w-100">Buy Now</button>
                </div>
                </div>
    `;
    products.appendChild(div);
  });
};
loadData("/products.json", displayProducts);
