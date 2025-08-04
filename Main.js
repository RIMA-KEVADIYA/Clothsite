let loadMoreBtn = document.querySelector(".viewall");
let currentItem = 3;

loadMoreBtn.onclick = () => {
  let boxes = [...document.querySelectorAll(".cloth_Section .cloth")];

  for (var i = currentItem; i < currentItem + 3; i++) {
    boxes[i].style.display = "inline-block";
  }

  currentItem += 3;

  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = "none";
  }
};
