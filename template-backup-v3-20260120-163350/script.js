const yearSections = Array.from(document.querySelectorAll(".year"));
const navButtons = Array.from(
  document.querySelectorAll(".timeline-nav__button")
);

let currentIndex = yearSections.findIndex((section) =>
  section.classList.contains("is-active")
);
if (currentIndex === -1) currentIndex = 0;

const revealYear = (index) => {
  if (index < 0 || index >= yearSections.length) return;
  yearSections.forEach((section, idx) => {
    section.classList.toggle("is-active", idx === index);
    section.classList.toggle("is-revealed", idx <= index);
  });
  currentIndex = index;
  const activeId = yearSections[index].id;
  navButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.target === activeId);
  });
};

const getMaxTransitionMs = (element) => {
  const durations = getComputedStyle(element).transitionDuration.split(",");
  const delays = getComputedStyle(element).transitionDelay.split(",");
  const toMs = (value) =>
    value.includes("ms") ? parseFloat(value) : parseFloat(value) * 1000;
  const maxDuration = Math.max(...durations.map(toMs));
  const maxDelay = Math.max(...delays.map(toMs));
  return maxDuration + maxDelay;
};

const scrollToYear = (index) => {
  const target = yearSections[index];
  if (!target) return;
  const waitMs = getMaxTransitionMs(target);
  requestAnimationFrame(() => {
    if (waitMs > 0) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }, waitMs);
    } else {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
};

let isScrollTicking = false;
const triggerRatio = 0.55;
const minDelayMs = 450;
let lastTriggerAt = 0;
let lastRevealScrollY = window.scrollY;

const handleScroll = () => {
  if (isScrollTicking) return;
  isScrollTicking = true;
  requestAnimationFrame(() => {
    isScrollTicking = false;
    const current = yearSections[currentIndex];
    if (!current) return;
    const rect = current.getBoundingClientRect();
    const scrollDelta = Math.abs(window.scrollY - lastRevealScrollY);
    const now = Date.now();
    const canTrigger =
      scrollDelta >= 260 && now - lastTriggerAt >= minDelayMs;
    if (rect.bottom <= window.innerHeight * triggerRatio && canTrigger) {
      revealYear(Math.min(currentIndex + 1, yearSections.length - 1));
      lastTriggerAt = now;
      lastRevealScrollY = window.scrollY;
      return;
    }
  });
};

window.addEventListener("scroll", handleScroll, { passive: true });

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.target;
    const targetIndex = yearSections.findIndex(
      (section) => section.id === targetId
    );
    if (targetIndex === -1) return;
    document.body.classList.add("is-jumping");
    revealYear(targetIndex);
    // Force layout so expanded sections take effect immediately.
    void document.body.offsetHeight;
    scrollToYear(targetIndex);
    lastTriggerAt = Date.now();
    lastRevealScrollY = window.scrollY;
    setTimeout(() => {
      document.body.classList.remove("is-jumping");
    }, 50);
  });
});

revealYear(currentIndex);
handleScroll();

let isWheelThrottled = false;
const scrollSlowdown = 0.8;

window.addEventListener(
  "wheel",
  (event) => {
    event.preventDefault();
    if (isWheelThrottled) return;
    isWheelThrottled = true;

    const delta = event.deltaY * scrollSlowdown;
    window.scrollBy({ top: delta, left: 0, behavior: "auto" });
    handleScroll();

    setTimeout(() => {
      isWheelThrottled = false;
    }, 16);
  },
  { passive: false }
);
