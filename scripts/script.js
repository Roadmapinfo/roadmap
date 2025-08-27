document.getElementById('current-year').textContent = new Date().getFullYear();   
   
document.addEventListener('DOMContentLoaded', () => {
       const observer = new IntersectionObserver((entries) => {
           entries.forEach(entry => {
               if (entry.isIntersecting) {
                   entry.target.classList.add('visible');
                   observer.unobserve(entry.target);
               }
           });
       }, {
           threshold: 0.1
       });

       document.querySelectorAll('.animate-on-scroll, .fade-in-up, .animate-fade').forEach(el => {
           observer.observe(el);
       });
   });

   /* Loading screen */
   window.addEventListener('load', () => {
         const loader = document.getElementById('loader');
         if (loader) {
              loader.style.display = 'none';
         }
    });
    
/* hamburger menu */
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.querySelector('.hamburger-menu');
    const navList = document.getElementById('nav-list'); 

    if (hamburgerBtn && navList) {
        hamburgerBtn.addEventListener('click', () => {
            navList.classList.toggle('active');
            hamburgerBtn.classList.toggle('active');

            const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
            hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
        });
    }
});