
  const music = document.getElementById("bg-music");

  // Aktifkan musik saat pertama kali user klik
  document.addEventListener("click", function () {
    if (music.paused) {
      music.muted = false;
      music.play();
    }
  });

  const isLoggedIn = sessionStorage.getItem('isLoggedIn');
  const username = sessionStorage.getItem('username');

  // Kalau belum login, arahkan ke index.html
  if (!isLoggedIn || !username) {
    window.location.href = 'index.html';
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      const userInfo = document.getElementById('user-info');
      if (userInfo) userInfo.textContent = `👋 Selamat Datang, ${username}`;

      // Pastikan tombol logout terhubung ke fungsi
      const logoutBtn = document.getElementById('logout-btn');
      if (logoutBtn) {
        logoutBtn.addEventListener('click', function () {
          sessionStorage.clear();
          window.location.href = 'index.html';
        });
      }

      // Logika animasi scroll
      const scroll = document.getElementById("scroll");
      if (scroll) {
        let isOpen = false;
        scroll.addEventListener("click", function () {
          scroll.classList.toggle("scroll-open");
          scroll.classList.toggle("scroll-closed");
          isOpen = !isOpen;
        });
      }
    });
  }

