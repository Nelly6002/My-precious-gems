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

function toggleNutrition(element) {
  const card = element.parentElement; // gets the clicked FAQ card
  card.classList.toggle("active");

  // also toggle the content & chevron
  const content = card.querySelector(".nutrition-content");
  const chevron = element.querySelector(".chevron");

  content.classList.toggle("active");
  chevron.classList.toggle("rotate");
}
// Auto-open the current month's newsletter
document.addEventListener("DOMContentLoaded", () => {
  const today = new Date();
  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];
  const currentMonth = monthNames[today.getMonth()] + " " + today.getFullYear();

  // Find all newsletter headers
  const newsletters = document.querySelectorAll(".nutrition-header");

  newsletters.forEach(header => {
    if (header.innerText.includes(currentMonth)) {
      const card = header.parentElement;
      card.classList.add("active");

      const content = card.querySelector(".nutrition-content");
      const chevron = header.querySelector(".chevron");

      content.classList.add("active");
      if (chevron) chevron.classList.add("rotate");
    }
  });
});
// Floating Emojis

document.addEventListener("DOMContentLoaded", () => {
  const emojis = document.querySelectorAll(".floating-emoji");

  emojis.forEach(emoji => {
    // random horizontal position
    const left = Math.random() * 90;
   
    const top = Math.random() * (document.body.scrollHeight - window.innerHeight - 200) + 200;

    emoji.style.left = `${left}%`;
    emoji.style.top = `${top}px`;
    emoji.style.animationDelay = `${Math.random() * 5}s`;
  });
});
// Newsletter Notice
document.addEventListener("DOMContentLoaded", function () {
  const notice = document.getElementById("newsletterNotice");
  const closeBtn = document.getElementById("closeNotice");

  // Get current month + year (example: "2025-09")
  const today = new Date();
  const currentMonth = today.getFullYear() + "-" + (today.getMonth() + 1);

  // Check if the user has seen or closed the newsletter this month
  const seenMonth = localStorage.getItem("newsletterSeenMonth");

  if (seenMonth === currentMonth) {
    if (notice) notice.style.display = "none";
  } else {
    if (notice) notice.style.display = "block";
  }

  // Close button action
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      notice.style.display = "none";
      localStorage.setItem("newsletterSeenMonth", currentMonth);
    });
  }
});
