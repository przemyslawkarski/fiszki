const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});

const input = document.getElementById("searchInput");
const sections = document.querySelectorAll(".card-container");

input.addEventListener("input", function () {
  const value = this.value.toLowerCase().trim();

  sections.forEach(section => {
    const text = section.textContent.toLowerCase();
    section.style.display = text.includes(value) ? "block" : "none";
  });
});