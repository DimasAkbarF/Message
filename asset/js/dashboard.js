
  const music = document.getElementById("bg-music");

  // Pastikan audio siap
  music.addEventListener("canplaythrough", () => {
    console.log("Audio siap dimainkan");
  });

  // Aktifkan musik setelah interaksi pertama user
  function enableMusic() {
    if (music.paused) {
      music.muted = false;
      music.play()
        .then(() => {
          console.log("Musik diputar");
          document.removeEventListener("click", enableMusic);
          document.removeEventListener("touchstart", enableMusic);
        })
        .catch(err => {
          console.warn("Autoplay diblokir:", err);
        });
    }
  }

  document.addEventListener("click", enableMusic);
  document.addEventListener("touchstart", enableMusic);

//   function ensureAudioOnUserGesture() {
//       if(firstGestureHandled) return;
//       firstGestureHandled = true;
//       try {
//         bgMusic.muted = false;
//         const playPromise = bgMusic.play();
//         if (playPromise && playPromise.then) {
//           playPromise.catch(()=>{ /* ignore autoplay rejection */ });
//         }
//       } catch(err){
//         // ignore
//       }
//     }

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

