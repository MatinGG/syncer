document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const userData = {
      name: document.getElementById("displayName").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value, // demo only
      github: document.getElementById("github").value
    };

    localStorage.setItem("user", JSON.stringify(userData));

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 600);
  });
});
