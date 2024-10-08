// Scroll to next section
document.querySelectorAll(".scroll").forEach(function(element) {
  element.addEventListener("click", function(event) {
      event.preventDefault();
      var targetSelector = this.getAttribute("data-target");
      var targetElement = document.querySelector(targetSelector);

      if (targetElement) {
          targetElement.scrollIntoView({
              behavior: "smooth",
              block: "start"
          });
      } else {
          console.error("Erreur : l'élément " + targetSelector + " est introuvable.");
      }

  });
});


// Scroll to top button show/hide
document.addEventListener("DOMContentLoaded", function() {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
  };

  scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

});



// Scroll to section via nav
let links = document.querySelectorAll(".ul_nav a");

for (i of links) {
  i.addEventListener("click", function(event) {
      event.preventDefault();
      targetElement = document.querySelector("#section_" + this.id);

      if(targetElement){
          targetElement.scrollIntoView({
              behavior: "smooth",
              block: "start"
          });
      }
      else{
          console.error("Erreur scrollIntoView sur l'élément : " + targetElement);
      }
  });
}


// Show timeline animation while scrolling
document.addEventListener("DOMContentLoaded", function() {
  const components = document.querySelectorAll(".timeline_component");

  const observerOptions = {
    threshold: 0.1
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  components.forEach(component => {
    observer.observe(component);
  });
});


// Show main section animation
document.addEventListener("DOMContentLoaded", function() {
const mainText = document.querySelector(".sub_container_main1");
mainText.classList.add("visible");
});


// Hover skill card text infos
const skillCards = document.querySelectorAll('.skill_card');

skillCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
      const tooltip = this.querySelector('.hovertext');
      if (tooltip) {
          tooltip.style.visibility = 'visible';
          tooltip.style.opacity = '1';
      }
  });

  card.addEventListener('mouseleave', function() {
      const tooltip = this.querySelector('.hovertext');
      if (tooltip) {
          tooltip.style.visibility = 'hidden';
          tooltip.style.opacity = '0';
      }
  });
});


// Open nav menu on mobile
const menuToggle = document.querySelector('.header_menu');
const navList = document.querySelector('.ul_nav');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.ul_nav li a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
    });
});


