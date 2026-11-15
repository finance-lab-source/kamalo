// Dynamic copyright year
document.getElementById("year").textContent = new Date().getFullYear();

// Animate images as they scroll into view
const imgs = document.querySelectorAll("main img:not(.p)");
if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: 0.15 });
  imgs.forEach((el, i) => { el.classList.add("reveal"); el.style.transitionDelay = (i % 3) * 90 + "ms"; io.observe(el); });
}
