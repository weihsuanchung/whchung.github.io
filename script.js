const toggleButton = document.getElementById("toggle-mode");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const current = localStorage.getItem("theme");
  if (current === "dark") {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
});

// 初始化根據記憶主題
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}
