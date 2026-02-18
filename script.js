const revealTargets = document.querySelectorAll(
  ".hero, .section-heading, .service-card, .about-layout, .testimonial, .site-footer"
);

revealTargets.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealTargets.forEach((el) => observer.observe(el));
