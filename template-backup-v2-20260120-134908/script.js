const yearSections = Array.from(document.querySelectorAll(".year"));
const actionButtons = Array.from(document.querySelectorAll(".year__action"));

let currentIndex = yearSections.findIndex((section) =>
  section.classList.contains("is-active")
);
if (currentIndex === -1) currentIndex = 0;

const setActiveYear = (index) => {
  if (index < 0 || index >= yearSections.length) return;
  yearSections.forEach((section, idx) => {
    section.classList.toggle("is-active", idx === index);
    section.classList.toggle("is-revealed", idx <= index);
  });
  currentIndex = index;
  const target = yearSections[index];
  target.scrollIntoView({ behavior: "smooth", block: "start" });
};

actionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.action;
    if (action === "next") {
      setActiveYear(currentIndex + 1);
    } else if (action === "prev") {
      setActiveYear(currentIndex - 1);
    }
  });
});

setActiveYear(currentIndex);
