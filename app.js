// Vertex Wealth Demo
// Educational simulation only.
// No real money, deposits, withdrawals, or real trading.

function getDemoUser() {
  const saved = localStorage.getItem("vertexDemoUser");
  return saved ? JSON.parse(saved) : null;
}

function isLoggedIn() {
  return localStorage.getItem("vertexDemoLoggedIn") === "true";
}

function requireLogin() {
  if (!isLoggedIn() || !getDemoUser()) {
    window.location.href = "login.html";
  }
}

function logout() {
  localStorage.removeItem("vertexDemoLoggedIn");
  window.location.href = "login.html";
}
