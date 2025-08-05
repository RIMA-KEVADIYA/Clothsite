const product = document.getElementsByClassName("products");
const loadMoreBtn = document.getElementById("viewmore");

let visibleCount = 4;
const step = 1;

function showNextProducts() {
  for (let i = 0; i < visibleCount + step && i < product.length; i++) {
    product[i].style.display = "block";
  }
  visibleCount += step;

  if (visibleCount >= product.length) {
    loadMoreBtn.textContent = "No More Products";
    loadMoreBtn.classList.add("disabled");
    loadMoreBtn.disabled = true;
  }
}

// Initial load
showNextProducts();

// Load more on click
loadMoreBtn.addEventListener("click", showNextProducts);
