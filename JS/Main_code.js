// Q&A Funct
const faqs = document.querySelectorAll('.faq');

function toggleAnswer() {
  const answer = this.nextElementSibling;
  if (answer.style.maxHeight) {
    answer.style.padding = '0px 10px 0px 20px'; // Menghapus padding saat elemen tertutup
    answer.style.maxHeight = null;
  } else {
    answer.style.padding = '10px 10px 30px 20px'; // Menambahkan padding saat elemen terbuka
    answer.style.maxHeight = answer.scrollHeight + 'px';
  }
}

faqs.forEach(faq => {
  const question = faq.querySelector('.question');
  question.addEventListener('click', toggleAnswer);
});

// Slider Funct
const slides1 = document.querySelectorAll('.slides');

function toggleSlidviewer() {
  const slidviewer = this.nextElementSibling;
  if (slidviewer.style.maxHeight) {
    slidviewer.style.padding = '0px 10px 0px 20px'; // Menghapus padding saat elemen tertutup
    slidviewer.style.maxHeight = null;
    document.getElementById('slidbtntext').textContent = "詳しくはこちら"; // Perbarui teks button
    document.getElementById('slidarrow').textContent = "▼"; // Perbarui teks button dengan karakter Unicode
  } else {
    slidviewer.style.padding = '10px 10px 30px 20px'; // Menambahkan padding saat elemen terbuka
    slidviewer.style.maxHeight = slidviewer.scrollHeight + 'px';
    document.getElementById('slidbtntext').textContent = "閉じる ❌"; // Perbarui teks button
    document.getElementById('slidarrow').textContent = ""; // Perbarui teks button dengan karakter Unicode
  }
}

slides1.forEach(slides => {
  const slidbtn = slides.querySelector('.slidbtn');
  slidbtn.addEventListener('click', toggleSlidviewer);
});


////////Slider Nav Func////////////////
$(document).ready(function () {
  var currentSlider = 2;

  // Inisialisasi semua slider saat halaman dimuat
  $('.slider').slick({
      arrows: true,
      dots: true,
      autoplay: true,
      autoplayspeed: 10000,
      fade:true, 
      cssEase:'linear',
  });

  // Sembunyikan semua slider kecuali yang pertama saat halaman dimuat
  $('.slider:not(.slider2)').hide();

  // Fungsi untuk menampilkan slider yang dipilih
  function showSlider(sliderNumber) {
      $('.slider').hide(); // Sembunyikan semua slider
      $('.slider' + sliderNumber).show();
      currentSlider = sliderNumber;
      $('#slider-number').text('令和５年 ' + currentSlider + '月'); // Perbarui teks slider-number
      $('#prev-month').text((currentSlider - 1) + "月"); // Perbarui teks　month
      $('#next-month').text((currentSlider + 1) + "月"); // Perbarui teks　month
  }

  // Tampilkan slider pertama saat halaman dimuat
  showSlider(1);

  // Fungsi untuk navigasi ke slider selanjutnya
  $('.next-sliders').click(function () {
      currentSlider++;
      if (currentSlider > 6) {
          currentSlider = 1;
      }
      showSlider(currentSlider);
  });

  // Fungsi untuk navigasi ke slider sebelumnya
  $('.prev-sliders').click(function () {
      currentSlider--;
      if (currentSlider < 1) {
          currentSlider = 6;
      }
      showSlider(currentSlider);
  });
});

////////Slider Nav Func////////////////


// backToTopButton Function
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