const Container = document.getElementById("clothh");

const loadMoreButton = document.getElementById("view");

const cardIncrease = 5;
let currentPage = 1;
const API_URL = "https://fakestoreapi.com/products?limit=15";

const createProductCard = (product) => {
  const wrapper = document.createElement("div");
  wrapper.className = "products";

  const button = document.createElement("button");
  button.className = "Product1";

  const img = document.createElement("img");
  img.src = product.image;
  button.appendChild(img);
  wrapper.appendChild(button);

  const desc = document.createElement("p");
  desc.className = "ProDes";

  let customDescription = product.title;
  if (product.id === 1) customDescription = "Travel Backpack";
  else if (product.id === 2) customDescription = "Mens Casual T-shirts";
  else if (product.id === 5) customDescription = "Silver Dragon Bracelet";
  else if (product.id === 6) customDescription = "Solid Gold Micropave";
  else if (product.id === 7) customDescription = "White Gold Plated Ring";
  else if (product.id === 8) customDescription = "Gold Plated Kada";
  else if (product.id === 9) customDescription = "Hard Drive - USB 3.0";
  else if (product.id === 10) customDescription = "SanDisk SSD PLUS";
  else if (product.id === 11) customDescription = "Silicon 256GB SSD";
  else if (product.id === 12) customDescription = "Portable Hard Drive";
  else if (product.id === 13) customDescription = "Full HD IPS Ultra-Thin";
  else if (product.id === 14) customDescription = "Ultrawide Screen";
  else if (product.id === 15) customDescription = "Snowboard  Coats";
  else customDescription = product.title;

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

const addCards = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    // Calculate slice indices based on currentPage and cardIncrease
    const start = (currentPage - 1) * cardIncrease;
    const end = currentPage * cardIncrease;
    const sliced = data.slice(start, end);

    if (sliced.length === 0) {
      loadMoreButton.disabled = true;
      loadMoreButton.textContent = "No more products";
      return;
    }

    sliced.forEach((product) => {
      const card = createProductCard(product);
      Container.appendChild(card);
    });

    currentPage++;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

window.onload = () => {
  addCards(); // Load first set of products on page load
  loadMoreButton.addEventListener("click", addCards);
};

/**-------------------------------------------------- */

const cardContainer1 = document.getElementById("clothh1");

const loadMoreButton1 = document.getElementById("viewmoree");

const Increase = 5;
let currentpage = 1;
const API_url = "https://fakestoreapi.com/products?limit=30";

const createProduct = (product) => {
  const wrapper = document.createElement("div");
  wrapper.className = "products";

  const button = document.createElement("button");
  button.className = "Product1";

  const img = document.createElement("img");
  img.src = product.image;
  button.appendChild(img);
  wrapper.appendChild(button);

  const desc = document.createElement("p");
  desc.className = "ProDes";

  let customDescription = product.title;
  if (product.id === 13) customDescription = "Full HD IPS Ultra-Thin";
  // else if (product.id === 2) customDescription = "Pullover Hoodie";
  else customDescription = product.title;

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

const Cards = async () => {
  try {
    const response = await fetch(API_url);
    const data = await response.json();

    // Calculate slice indices based on currentpage and Increase
    const start = (currentpage - 1) * Increase;
    const end = currentpage * Increase;
    const sliced = data.slice(start, end);

    if (sliced.length === 0) {
      loadMoreButton1.disabled = true;
      loadMoreButton1.textContent = "No more products";
      return;
    }

    sliced.forEach((product) => {
      const card = createProduct(product);
      cardContainer1.appendChild(card);
    });

    currentpage++;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

window.onload = () => {
  Cards(); // Load first set of products on page load
  loadMoreButton1.addEventListener("click", addCards);
};
