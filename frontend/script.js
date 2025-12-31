document.addEventListener("DOMContentLoaded", () => {
    const root = document.documentElement;
    const toggleBtn = document.getElementById("themeToggle");
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        root.setAttribute("data-theme", "dark");
    } else {
        root.removeAttribute("data-theme");
    }
    toggleBtn?.addEventListener("click", () => {
        const isDark = root.getAttribute("data-theme") === "dark";
        if (isDark) {
            root.removeAttribute("data-theme");
            localStorage.setItem("theme", "light");
        } else {
            root.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        }
    });
    const revealElements = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        revealElements.forEach(el => observer.observe(el));
    }
});
