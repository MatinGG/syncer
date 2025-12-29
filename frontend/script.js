// Wait until the DOM is fully loaded
window.addEventListener("DOMContentLoaded", () => {

    // ======= THEME TOGGLE =======
    const root = document.documentElement;
    const toggleBtn = document.getElementById("themeToggle");

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        root.setAttribute("data-theme", "dark");
        if (toggleBtn) toggleBtn.textContent = "☀️";
    } else {
        if (toggleBtn) toggleBtn.textContent = "🌙";
    }

    // Toggle click
    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            const isDark = root.getAttribute("data-theme") === "dark";
            if (isDark) {
                root.removeAttribute("data-theme");
                localStorage.setItem("theme", "light");
                toggleBtn.textContent = "🌙";
            } else {
                root.setAttribute("data-theme", "dark");
                localStorage.setItem("theme", "dark");
                toggleBtn.textContent = "☀️";
            }
        });
    }

    // ======= SCROLL REVEAL =======
    const revealElements = document.querySelectorAll(".reveal");

    if (revealElements.length && "IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    obs.unobserve(entry.target); // stop observing once visible
                }
            });
        }, { threshold: 0.15 });

        revealElements.forEach(el => observer.observe(el));
    }

});
