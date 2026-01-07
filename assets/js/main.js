document.addEventListener("DOMContentLoaded", () => {

  // HAMBURGER MENU
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();

        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }

        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
      });
    });
  }

  // BACK TO TOP
  const backToTop = document.getElementById("backToTop");

  if (backToTop) {
    window.addEventListener("scroll", () => {
      backToTop.style.display = window.scrollY > 200 ? "flex" : "none";
    });

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // TYPE EFFECT
  const typingElement = document.getElementById("typing-text");
  if (typingElement) {
    const text = "Ashok Teli";
    let index = 0;

    function typeEffect() {
      if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 200);
      }
    }
    typeEffect();
  }

  // FORM TOAST
  const contactForm = document.getElementById("contactForm");
  const toast = document.getElementById("successToast");

  if (contactForm && toast) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 3000);
      contactForm.reset();
    });
  }

  // STATS SCROLL ANIMATION
  const statCards = document.querySelectorAll(".stat-card");

  if (statCards.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    statCards.forEach(card => observer.observe(card));
  }

});
