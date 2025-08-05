// const product = document.getElementsByClassName("products");
// const loadMoreBtn = document.getElementById("viewmore");

// let visibleCount = 4;
// const step = 1;

// function showNextProducts() {
//   for (let i = 0; i < visibleCount + step && i < product.length; i++) {
//     product[i].style.display = "block";
//   }
//   visibleCount += step;

//   if (visibleCount >= product.length) {
//     loadMoreBtn.textContent = "No More Products";
//     loadMoreBtn.classList.add("disabled");
//     loadMoreBtn.disabled = true;
//   }
// }

// // Initial load
// showNextProducts();

// // Load more on click
// loadMoreBtn.addEventListener("click", showNextProducts);

const cardContainer = document.getElementById("clothh");
const loadMoreButton = document.getElementById("viewmore");

const cardIncrease = 5;
let currentPage = 1;
let allProducts = [];

// ✅ FREE fake API (no login needed)
const API_URL = "https://fakestoreapi.com/products";

// Create one product card
const createProductCard = (product) => {
  const wrapper = document.createElement("div");
  wrapper.className = "card";

  const button = document.createElement("button");
  button.className = "Product1";

  const img = document.createElement("img");
  img.src = product.image;
  button.appendChild(img);
  wrapper.appendChild(button);

  const desc = document.createElement("p");
  desc.className = "ProDes";
  desc.textContent = product.title;
  wrapper.appendChild(desc);

  const rating = document.createElement("p");
  rating.className = "Rating";
  const stars = Math.round(product.rating?.rate || 0);
  rating.innerHTML = "★".repeat(stars) + "☆".repeat(5 - stars);
  wrapper.appendChild(rating);

  const price = document.createElement("p");
  price.className = "Price";
  price.textContent = "$" + product.price;
  wrapper.appendChild(price);

  return wrapper;
};

// Display 5 products at a time
const addCards = () => {
  const start = (currentPage - 1) * cardIncrease;
  const end = currentPage * cardIncrease;
  const sliced = allProducts.slice(start, end);

  if (sliced.length > 0) {
    const column = document.createElement("div");
    column.className = "column";

    sliced.forEach((product) => {
      const card = createProductCard(product);
      column.appendChild(card);
    });

    cardContainer.appendChild(column);
  }

  currentPage++;

  if ((currentPage - 1) * cardIncrease >= allProducts.length) {
    loadMoreButton.disabled = true;
    loadMoreButton.textContent = "No more products";
  }
};

// Fetch product data from the API
const fetchProducts = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    allProducts = data;
    addCards(); // show first 5 products
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

// Start when the page is ready
window.onload = () => {
  fetchProducts();
  loadMoreButton.addEventListener("click", addCards);
};
