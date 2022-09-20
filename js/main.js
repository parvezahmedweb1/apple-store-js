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
    console.log(category);
    const { name } = category;
    const li = document.createElement("li");
    li.className = "nav-item";
    li.innerHTML = `<a class="nav-link" aria-current="page" href="#">${name}</a>`;
    navberContainer.appendChild(li);
  });
};
loadData("/category.json", displayCategories);
