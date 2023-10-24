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



//Document Initialize Slider , Mobile Menu
$(document).on('ready', function(){

  //Slider Initializer
  $(".slider2").slick({
      arrows:false,
      dots: true,
      autoplay: true,
      autoplayspeed: 10000,
      fade:true, 
      cssEase:'linear'
  });
  //Slider Initializer

  //Mobile Menu Initializer
  $("#menu-toggle").click(function () {
      $(this).toggleClass("active");
    });
    // event listener untuk klik di luar menu
  $(document).on("click", function (e) {
    if (!$(e.target).closest("#nav-menu").length && !$(e.target).is("#menu-toggle")) {
    // Klik di luar menu atau bukan pada tombol toggle
      $("#menu-toggle").removeClass("active");
      }
    });
    //event listener untuk peristiwa scroll
  $(window).scroll(function () {
      $("#menu-toggle").removeClass("active");
    });
  //Mobile Menu Initializer

  });
//Slider Initialize

///////SoraDayori Slider Funct//////
const slides1 = document.querySelectorAll('.slides');
let isSliderInitialized = false;

function toggleSlidviewer() {
  const slidviewer = this.nextElementSibling;
  if (slidviewer.style.maxHeight) {
    slidviewer.style.padding = '0px'; // Menghapus padding saat elemen tertutup
    slidviewer.style.maxHeight = null;
    document.getElementById('slidbtntext').textContent = "詳しくはこちら"; // Perbarui teks button
    document.getElementById('slidarrow').textContent = "▼"; // Perbarui teks button dengan karakter Unicode
  } else {
    if (!isSliderInitialized) {
      // Inisialisasi slider hanya jika belum diinisiasi
      const slider1 = slidviewer.querySelector('.slider1');
      $(slider1).slick({
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 10000,
        fade: true,
        cssEase: 'linear'
      });
      isSliderInitialized = true; // Setel penanda bahwa slider sudah diinisiasi
    }
    slidviewer.style.padding = '30px 10px 30px 10px'; // Menambahkan padding saat elemen terbuka
    slidviewer.style.maxHeight = slidviewer.scrollHeight + 'px';
    document.getElementById('slidbtntext').textContent = "閉じる"; // Perbarui teks button
    document.getElementById('slidarrow').textContent = ""; // Perbarui teks button dengan karakter Unicode
  }
}

slides1.forEach(slides => {
  const slidbtn = slides.querySelector('.slidbtn');
  slidbtn.addEventListener('click', toggleSlidviewer);
});
///////SoraDayori Slider Funct//////

// GH cost Funct
const ghcost1 = document.querySelectorAll('.ghcost');

function toggleghcostviewer() {
  const ghcostviewer = this.nextElementSibling;
  if (ghcostviewer.style.maxHeight) {
    ghcostviewer.style.padding = '0px'; // Menghapus padding saat elemen tertutup
    ghcostviewer.style.maxHeight = null;
    document.getElementById('ghbtntext').textContent = "詳しくはこちら"; // Perbarui teks button
    document.getElementById('gharrow').textContent = "▼"; // Perbarui teks button dengan karakter Unicode
  } else {
    ghcostviewer.style.padding = '30px 10px 30px 10px'; // Menambahkan padding saat elemen terbuka
    ghcostviewer.style.maxHeight = ghcostviewer.scrollHeight + 'px';
    document.getElementById('ghbtntext').textContent = "閉じる"; // Perbarui teks button
    document.getElementById('gharrow').textContent = ""; // Perbarui teks button dengan karakter Unicode
  }
}

ghcost1.forEach(ghcost => {
  const ghcostbtn = ghcost.querySelector('.ghcostbtn');
  ghcostbtn.addEventListener('click', toggleghcostviewer);
});
//ghcost Func

// kan cost Funct
const kancost1 = document.querySelectorAll('.kancost2');

function togglekancostviewer() {
  const kancostviewer = this.nextElementSibling;
  if (kancostviewer.style.maxHeight) {
    kancostviewer.style.padding = '0px'; // Menghapus padding saat elemen tertutup
    kancostviewer.style.maxHeight = null;
    document.getElementById('kanbtntext').textContent = "詳しくはこちら"; // Perbarui teks button
    document.getElementById('kanarrow').textContent = "▼"; // Perbarui teks button dengan karakter Unicode
  } else {
    kancostviewer.style.padding = '30px 10px 30px 10px'; // Menambahkan padding saat elemen terbuka
    kancostviewer.style.maxHeight = kancostviewer.scrollHeight + 'px';
    document.getElementById('kanbtntext').textContent = "閉じる"; // Perbarui teks button
    document.getElementById('kanarrow').textContent = ""; // Perbarui teks button dengan karakter Unicode
  }
}

kancost1.forEach(kancost2 => {
  const kancostbtn = kancost2.querySelector('.kancostbtn');
  kancostbtn.addEventListener('click', togglekancostviewer);
});
//kancost Func


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