// const Container = document.getElementById("clothh");

// const loadMoreButton = document.getElementById("view1");

// const cardIncrease = 5;
// let currentPage = 1;
// const API_URL = "https://fakestoreapi.com/products?limit=15";

// const createProductCard = (product) => {
//   const wrapper = document.createElement("div");
//   wrapper.className = "products";

//   const button = document.createElement("button");
//   button.className = "Product1";

//   const img = document.createElement("img");
//   img.src = product.image;
//   button.appendChild(img);
//   wrapper.appendChild(button);

//   const desc = document.createElement("p");
//   desc.className = "ProDes";

//   let customDescription = product.title;
//   if (product.id === 1) customDescription = "Travel Backpack";
//   else if (product.id === 2) customDescription = "Mens Casual T-shirts";
//   else if (product.id === 5) customDescription = "Silver Dragon Bracelet";
//   else if (product.id === 6) customDescription = "Solid Gold Micropave";
//   else if (product.id === 7) customDescription = "White Gold Plated Ring";
//   else if (product.id === 8) customDescription = "Gold Plated Kada";
//   else if (product.id === 9) customDescription = "Hard Drive - USB 3.0";
//   else if (product.id === 10) customDescription = "SanDisk SSD PLUS";
//   else if (product.id === 11) customDescription = "Silicon 256GB SSD";
//   else if (product.id === 12) customDescription = "Portable Hard Drive";
//   else if (product.id === 13) customDescription = "Full HD IPS Ultra-Thin";
//   else if (product.id === 14) customDescription = "Ultrawide Screen";
//   else if (product.id === 15) customDescription = "Snowboard  Coats";
//   else if (product.id === 16) customDescription = " Leather Jacket";
//   else if (product.id === 17) customDescription = "Striped Climbing Raincoats";
//   else if (product.id === 18) customDescription = "Boat Neck V";
//   else if (product.id === 19) customDescription = "Short Sleeve Moisture";
//   else if (product.id === 20) customDescription = "T Shirt Casual Cotton";
//   else customDescription = product.title;
//   desc.textContent = customDescription;
//   wrapper.appendChild(desc);

//   const rating = document.createElement("p");
//   rating.className = "Rating";
//   const stars = Math.round(product.rating?.rate || 0);
//   rating.innerHTML = "★".repeat(stars) + "☆".repeat(5 - stars);
//   wrapper.appendChild(rating);

//   const price = document.createElement("p");
//   price.className = "Price";
//   price.textContent = "$" + product.price;
//   wrapper.appendChild(price);

//   return wrapper;
// };

// const addCards = async () => {
//   try {
//     const response = await fetch(API_URL);
//     const data = await response.json();

//     // Calculate slice indices based on currentPage and cardIncrease
//     const start = (currentPage - 1) * cardIncrease;
//     const end = currentPage * cardIncrease;
//     const sliced = data.slice(start, end);

//     if (sliced.length === 0) {
//       loadMoreButton.disabled = true;
//       loadMoreButton.textContent = "No more products";
//       return;
//     }

//     sliced.forEach((product) => {
//       const card = createProductCard(product);
//       Container.appendChild(card);
//     });

//     currentPage++;
//   } catch (error) {
//     console.error("Error fetching products:", error);
//   }
// };

// window.onload = () => {
//   addCards(); // Load first set of products on page load
//   loadMoreButton.addEventListener("click", addCards);
// };

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("clothh");
  const loadMoreButton = document.getElementById("view1");

  const API_URL = "https://fakestoreapi.com/products?limit=15";
  const pageSize = 5;
  let currentPage = 1;

  const customTitles = {
    1: "Travel Backpack",
    2: "Mens Casual T-shirts",
    5: "Silver Dragon Bracelet",
    6: "Solid Gold Micropave",
    7: "White Gold Plated Ring",
    8: "Gold Plated Kada",
    9: "Hard Drive - USB 3.0",
    10: "SanDisk SSD PLUS",
    11: "Silicon 256GB SSD",
    12: "Portable Hard Drive",
    13: "Full HD IPS Ultra-Thin",
    14: "Ultrawide Screen",
    15: "Snowboard Coats",
    16: "Leather Jacket",
    17: "Striped Climbing Raincoats",
    18: "Boat Neck V",
    19: "Short Sleeve Moisture",
    20: "T Shirt Casual Cotton",
  };

  const createCard = (product) => {
    const wrapper = document.createElement("div");
    wrapper.className = "products";

    const button = document.createElement("button");
    button.className = "Product1";

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.title;
    img.onerror = () => {
      img.src = "https://via.placeholder.com/120";
    };

    button.appendChild(img);
    wrapper.appendChild(button);

    const desc = document.createElement("p");
    desc.className = "ProDes";
    desc.textContent = customTitles[product.id] || product.title;
    wrapper.appendChild(desc);

    const rating = document.createElement("p");
    rating.className = "Rating";
    const stars = Math.round(product.rating?.rate || 0);
    rating.innerHTML = "★".repeat(stars) + "☆".repeat(5 - stars);
    wrapper.appendChild(rating);

    const price = document.createElement("p");
    price.className = "Price";
    price.textContent = `$${product.price}`;
    wrapper.appendChild(price);

    return wrapper;
  };

  const loadProducts = async () => {
    try {
      const limit = currentPage * pageSize;
      const response = await fetch(`${API_URL}?limit=${limit}`);
      const data = await response.json();

      // Slice only the new products to avoid duplicates
      const newProducts = data.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
      );

      if (newProducts.length === 0) {
        loadMoreButton.disabled = true;
        loadMoreButton.textContent = "No more products";
        return;
      }

      newProducts.forEach((product) => {
        const card = createCard(product);
        container.appendChild(card);
      });

      currentPage++;
    } catch (error) {
      console.error("Error loading products:", error);
    }
  };

  loadMoreButton.addEventListener("click", loadProducts);
  loadProducts(); // initial load
});

/* -------------------------------------------------- */

const cardContainer1 = document.getElementById("clothh1");

const loadMoreButton1 = document.getElementById("view2");

const Increase = 5;
let currentpage = 3;
const API_url = "https://fakestoreapi.com/products?limit=20";

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
  else if (product.id === 10) customDescription = "SanDisk SSD PLUS";
  else if (product.id === 11) customDescription = "Silicon 256GB SSD";
  else if (product.id === 12) customDescription = "Portable Hard Drive";
  else if (product.id === 14) customDescription = "Ultrawide Screen";
  else if (product.id === 15) customDescription = "Snowboard Coats";
  else if (product.id === 16) customDescription = "Leather Jacket";
  else if (product.id === 17) customDescription = "Striped Climbing Raincoats";
  else if (product.id === 18) customDescription = "Boat Neck V";
  else if (product.id === 19) customDescription = "Short Sleeve Moisture";
  else if (product.id === 20) customDescription = "T Shirt Casual Cotton";
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
  loadMoreButton1.addEventListener("click", Cards);
};
