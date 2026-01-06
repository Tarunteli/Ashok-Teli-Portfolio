const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

/* Close menu on link click */
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});


document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault(); 

    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: "smooth"
    });

    
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  });
});




const backToTop = document.getElementById("backToTop");


window.addEventListener("scroll", () => {
  if (window.scrollY > 200) { 
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }
});

/* Scroll to top on click */
backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});



/* text type */
document.addEventListener("DOMContentLoaded", () => {
  const text = "Ashok Teli";
  const typingElement = document.getElementById("typing-text");

  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, 200); // typing speed
    }
  }

  typeEffect();
});



// form data preview

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // page reload stop

  // 🔔 show toast
  const toast = document.getElementById("successToast");
  toast.classList.add("show");

  // hide after 3 sec
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);

  // clear form
  this.reset();
});




document.addEventListener("DOMContentLoaded", () => {
  const statCards = document.querySelectorAll(".stat-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); 
        }
      });
    },
    {
      threshold: 0.2 
    }
  );

  statCards.forEach(card => {
    observer.observe(card);
  });
});
