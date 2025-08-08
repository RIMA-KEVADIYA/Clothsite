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

const API_URL = "https://fakestoreapi.com/products";

const createProductCard = (product) => {
  const wrapper = document.createElement("div");
  wrapper.className = "products"; // Changed from "card" to "products"

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

  let customDescription = product.title;

  if (product.id === 1) {
    customDescription = "Travel Backpack";
  }
  if (product.id === 2) {
    customDescription = "Mens Casual T-shirts";
  }
  if (product.id === 5) {
    customDescription = "Silver Dragon Bracelet";
  }
  if (product.id === 8) {
    customDescription = "Gold Plated Kada";
  }
  if (product.id === 9) {
    customDescription = "Hard Drive - USB 3.0";
  }
  if (product.id === 10) {
    customDescription = "SanDisk SSD PLUS";
  }
  if (product.id === 11) {
    customDescription = "Silicon Power 256GB SSD";
  }
  if (product.id === 12) {
    customDescription = "Portable External Hard Drive";
  }
  if (product.id === 13) {
    customDescription = "Full HD IPS Ultra-Thin";
  }
  if (product.id === 14) {
    customDescription = "Samsung Ultrawide Screen";
  }
  if (product.id === 15) {
    customDescription = " Snowboard Winter Coats";
  }

  desc.textContent = customDescription;
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

const addCards = () => {
  const start = (currentPage - 1) * cardIncrease;
  const end = currentPage * cardIncrease;
  const sliced = allProducts.slice(start, end);

  if (sliced.length > 0) {
    sliced.forEach((product) => {
      const card = createProductCard(product);
      cardContainer.appendChild(card); // Directly append to cardContainer
    });
  }

  currentPage++;

  if ((currentPage - 1) * cardIncrease >= allProducts.length) {
    loadMoreButton.disabled = true;
    loadMoreButton.textContent = "No more products";
  }
};

const fetchProducts = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    allProducts = data.slice(0, 15);
    addCards(); // show first 5 products
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

window.onload = () => {
  fetchProducts();
  loadMoreButton.addEventListener("click", addCards);
};
