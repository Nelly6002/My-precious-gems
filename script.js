 const toTop = document.getElementById("toTop");
    window.onscroll = () => {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        toTop.style.display = "block";
      } else {
        toTop.style.display = "none";
      }
    };
    toTop.onclick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    // Scroll reveal
const revealElements = document.querySelectorAll('.scroll-reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 150; // Distance from bottom before revealing
    if(elementTop < windowHeight - revealPoint){
      el.classList.add('active');
    }
  });
}

// Run on scroll
window.addEventListener('scroll', revealOnScroll);

// Run on page load
revealOnScroll();

function toggleNutrition() {
  const card = document.querySelector('.nutrition-card');
  card.classList.toggle('active');
}
