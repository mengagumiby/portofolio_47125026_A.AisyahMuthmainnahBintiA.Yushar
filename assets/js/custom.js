// ==========================================
// INTERAKSI 1: Tombol Welcome (Alert)
// ==========================================
function showWelcome() {
  alert("Welcome to My Portfolio!\n\nTerima kasih sudah berkunjung ke website portfolio A. Aisyah Muthmainnah.");
}

// ==========================================
// INTERAKSI 2: Dark Mode Toggle
// ==========================================
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  const btn = document.getElementById("darkModeBtn");
  if (btn) {
    btn.innerHTML = isDark
      ? '<i class="fas fa-sun"></i> Light Mode'
      : '<i class="fas fa-moon"></i> Dark Mode';
  }
}

// Cek tema tersimpan saat halaman dimuat
window.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  // Auto-update tahun di footer
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

// ==========================================
// INTERAKSI 3: Scroll to Top Button
// ==========================================
window.addEventListener("scroll", function () {
  const btn = document.getElementById("scrollTopBtn");
  if (!btn) return;

  if (window.scrollY > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ==========================================
// INTERAKSI 4: Konfirmasi Logout
// ==========================================
function confirmLogout() {
  const yakin = confirm("Yakin ingin keluar dari dashboard?");
  if (yakin) {
    window.location.href = "../index.html";
  }
  return false;
}