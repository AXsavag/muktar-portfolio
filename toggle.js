const btn = document.getElementById("toggle-btn");
const html = document.documentElement;

// Start in dark mode
html.setAttribute("data-theme", "dark");

btn.addEventListener("click", () => {
  const current = html.getAttribute("data-theme");
  html.setAttribute("data-theme", current === "dark" ? "light" : "dark");
});