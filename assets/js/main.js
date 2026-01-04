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


