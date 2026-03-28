const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

menuToggle?.addEventListener("click", () => {
  menu.classList.toggle("open");
});

// Portfolio filter
const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioCards = document.querySelectorAll(".portfolio-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    portfolioCards.forEach((card) => {
      const category = card.dataset.category;

      if (filter === "all" || filter === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Simple testimonial slider for smaller screens
const track = document.getElementById("testimonialTrack");
const prevBtn = document.getElementById("prevTestimonial");
const nextBtn = document.getElementById("nextTestimonial");

let scrollAmount = 0;

nextBtn?.addEventListener("click", () => {
  track.scrollBy({ left: 280, behavior: "smooth" });
});

prevBtn?.addEventListener("click", () => {
  track.scrollBy({ left: -280, behavior: "smooth" });
});

// Close mobile menu on link click
document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
  });
});
