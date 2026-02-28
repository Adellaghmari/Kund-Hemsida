const navButtons = Array.from(
  document.querySelectorAll(".timeline-nav__button")
);
const yearSections = Array.from(document.querySelectorAll(".year"));

const setActiveButton = (targetId) => {
  navButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.target === targetId);
  });
};

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.getElementById(button.dataset.target);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveButton(button.dataset.target);
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveButton(entry.target.id);
      }
    });
  },
  {
    rootMargin: "-35% 0px -55% 0px",
    threshold: 0.1,
  }
);

yearSections.forEach((section) => observer.observe(section));
