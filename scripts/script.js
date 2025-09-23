document.getElementById("current-year").textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  document
    .querySelectorAll(".animate-on-scroll, .fade-in-up, .animate-fade")
    .forEach((el) => {
      observer.observe(el);
    });
});

/* Loading screen */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.display = "none";
  }
});

/* hamburger menu */
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger-toggle");
  const navList = document.getElementById("nav-list");

  // Function to toggle the menu state
  const toggleMenu = () => {
    navList.classList.toggle("active");
    hamburger.classList.toggle("active");

    // Update ARIA for accessibility (screen readers)
    const isExpanded =
      hamburger.getAttribute("aria-expanded") === "true" || false;
    hamburger.setAttribute("aria-expanded", !isExpanded);
  };

  // 1. Toggle when hamburger is clicked
  hamburger.addEventListener("click", toggleMenu);

  // 2. Optional: Close menu if a link is clicked (useful for single-page sites)
  navList.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (navList.classList.contains("active")) {
        toggleMenu(); // Closes the menu
      }
    });
  });
});

