const tabs = document.querySelectorAll(".tab");
const pages = document.querySelectorAll(".page");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // Remove active states
    tabs.forEach(t => t.classList.remove("active"));
    pages.forEach(p => p.classList.remove("active"));

    // Activate clicked tab
    tab.classList.add("active");
    document.getElementById(tab.dataset.target).classList.add("active");
  });
});
