document.getElementById("current-year").textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", () => {
  // Hide the loading screen with a fade-out effect
  const loader = document.getElementById("loader");
  if (loader) {
    // Start the fade-out animation
    loader.style.opacity = '0';
    // Immediately disable pointer events so the page is interactive during the fade-out
    loader.style.pointerEvents = 'none';
    
    // When the animation is done, hide the element completely
    loader.addEventListener('transitionend', () => {
        loader.style.display = 'none';
    });
  }

  // Intersection observer for animations
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

  // Hamburger menu
  const hamburger = document.getElementById("hamburger-toggle");
  const navList = document.getElementById("nav-list");

  if (hamburger && navList) {
      const toggleMenu = () => {
        navList.classList.toggle("active");
        hamburger.classList.toggle("active");

        const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
        hamburger.setAttribute("aria-expanded", !isExpanded);
      };

      hamburger.addEventListener("click", toggleMenu);

      navList.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", () => {
          if (navList.classList.contains("active")) {
            toggleMenu();
          }
        });
      });
  }

  // Back to top button
  const backToTopBtn = document.getElementById("back-to-top-btn");

  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});