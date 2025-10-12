const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");

if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const username = (document.getElementById("username").value || "").trim();
    const password = (document.getElementById("password").value || "").trim();

    if (username.length === 0 || password.length === 0) {
      loginError.textContent = "⚠️ Please enter both username and password.";
      return;
    }

    sessionStorage.setItem("loggedIn", "true");
    sessionStorage.setItem("loggedUser", username);

    window.location.href = "index.html";
  });
}