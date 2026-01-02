document.addEventListener("DOMContentLoaded", () => {
  const user = localStorage.getItem("user");
  if (!user) return;

  const userData = JSON.parse(user);

  document.getElementById("welcome").innerText =
    `خوش آمدی ${userData.name} 👋`;

  document.getElementById("email").innerText =
    userData.email || "ثبت نشده";

  document.getElementById("github").innerText =
    userData.github || "ثبت نشده";
});
