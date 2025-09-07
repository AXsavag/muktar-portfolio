// Dark/Light mode toggle
const toggleBtn = document.getElementById("mode-toggle");
const body = document.body;

// Load saved mode
if (localStorage.getItem("mode") === "dark") {
  body.classList.replace("light", "dark");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  if (body.classList.contains("light")) {
    body.classList.replace("light", "dark");
    toggleBtn.textContent = "☀️";
    localStorage.setItem("mode", "dark");
  } else {
    body.classList.replace("dark", "light");
    toggleBtn.textContent = "🌙";
    localStorage.setItem("mode", "light");
  }
});