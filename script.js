// DOM elements
const createCardBtn = document.getElementById("createCardBtn");
const itemsContainerExtra = document.getElementById("items");

// Function to create a new card dynamically
function createNewCard(title, imgURL, desc) {
  const card = document.createElement("article");
  card.className = "card";

  const img = document.createElement("div");
  img.className = "thumb";
  img.style.backgroundImage = `url(${imgURL})`;
  card.appendChild(img);

  const meta = document.createElement("div");
  meta.className = "meta";
  meta.innerHTML = `
    <div class="title">${title}</div>
    <div class="muted small">${desc}</div>
  `;
  card.appendChild(meta);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "btn-ghost";
  deleteBtn.style.marginTop = "auto";
  deleteBtn.addEventListener("click", () => {
    card.remove();
    toast("Card deleted", { type: "info" });
  });

  card.appendChild(deleteBtn);
  itemsContainerExtra.appendChild(card);
}

// Event: Create card on button click
createCardBtn.addEventListener("click", () => {
  createNewCard(
    "Custom Auction Item",
    "https://picsum.photos/seed/" + Math.floor(Math.random() * 1000) + "/800/600",
    "This is a dynamically added auction card."
  );
});
