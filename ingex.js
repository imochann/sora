    // Saat halaman dimuat, pasang event listener untuk mengontrol visibilitas tombol
    document.addEventListener('DOMContentLoaded', function() {
      var backToTopButton = document.getElementById('back-to-top');
      window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
          backToTopButton.style.display = 'block';
        } else {
          backToTopButton.style.display = 'none';
        }
      });
      // Saat tombol diklik, animasikan pergerakan scroll ke atas halaman
      backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });