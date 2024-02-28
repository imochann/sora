/////Declaration AutoScroll dan Cek Mobile/////
let tegamiblok = 0, soradayoriblok = 0, kancostblok = 0, ghcostblok = 0; ///var ketika blok viewer dibuka untuk Fix AutoScroll
const isMobile = window.matchMedia("(max-width: 768px)").matches; // Ganti dengan breakpoint yang sesuai
/////Declaration AutoScroll dan Cek Mobile/////

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
// Q&A Funct



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

  $(".sliderteg").slick({
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



//手紙 Func
const teg1=document.querySelectorAll('.teg2');

let tegscrollOffset = 2100; // Offset default untuk desktop
// Periksa apakah tampilan saat ini adalah versi mobile
if (isMobile) {
  tegscrollOffset = 900; // Ganti offset untuk mobile
}

function toggletegviewer() {
  const tegviewer = this.nextElementSibling;
  if (tegviewer.style.maxHeight) {
    tegviewer.style.padding = '0px'; // Menghapus padding saat elemen tertutup
    tegviewer.style.maxHeight = null;
    document.getElementById('tegbtntext').textContent = "詳しくはこちら"; // Perbarui teks button
    document.getElementById('tegarrow').textContent = "▼"; // Perbarui teks button dengan karakter Unicode
    tegamiblok = 0;
  } else {
    tegviewer.style.padding = '30px 10px 30px 10px'; // Menambahkan padding saat elemen terbuka
    tegviewer.style.maxHeight = tegviewer.scrollHeight + 'px';
    document.getElementById('tegbtntext').textContent = "閉じる"; // Perbarui teks button
    document.getElementById('tegarrow').textContent = ""; // Perbarui teks button dengan karakter Unicode
    tegamiblok = 1300; //Set AutoSlidTambahan
    if (isMobile) {
      tegamiblok = 500; // Ganti offset untuk mobile
    }
    
    // Scroll ke bawah elemen terbuka dengan offset yang sesuai
    const offsetTop = tegviewer.offsetTop;
    window.scroll({
      top: offsetTop + tegscrollOffset, // Gunakan offset yang sesuai
      behavior: 'smooth', // Untuk efek scrolling yang mulus
    }); 

  }
}

teg1.forEach(teg2 => {
  const tegbtn = teg2.querySelector('.tegbtn');
  tegbtn.addEventListener('click', toggletegviewer);
});



//手紙 Func

// GH cost Funct
const ghcost1 = document.querySelectorAll('.ghcost');

let ghscrollOffset = 2200; // Offset default untuk desktop
// Periksa apakah tampilan saat ini adalah versi mobile
if (isMobile) {
  ghscrollOffset = 1200; // Ganti offset untuk mobile
}

function toggleghcostviewer() {
  const ghcostviewer = this.nextElementSibling;
  if (ghcostviewer.style.maxHeight) {
    ghcostviewer.style.padding = '0px'; // Menghapus padding saat elemen tertutup
    ghcostviewer.style.maxHeight = null;
    document.getElementById('ghbtntext').textContent = "詳しくはこちら"; // Perbarui teks button
    document.getElementById('gharrow').textContent = "▼"; // Perbarui teks button dengan karakter Unicode
    ghcostblok = 0;
  } else {
    ghcostviewer.style.padding = '30px 10px 30px 10px'; // Menambahkan padding saat elemen terbuka
    ghcostviewer.style.maxHeight = ghcostviewer.scrollHeight + 'px';
    document.getElementById('ghbtntext').textContent = "閉じる"; // Perbarui teks button
    document.getElementById('gharrow').textContent = ""; // Perbarui teks button dengan karakter Unicode
    ghcostblok = 400;
    if (isMobile) {
      ghcostblok = 250; // Ganti offset untuk mobile
    }
    
     // Scroll ke bawah elemen terbuka dengan offset yang sesuai
     const offsetTop = ghcostviewer.offsetTop;
     window.scroll({
       top: offsetTop + ghscrollOffset + tegamiblok, // Gunakan offset yang sesuai
       behavior: 'smooth', // Untuk efek scrolling yang mulus
     });

  }
}

ghcost1.forEach(ghcost => {
  const ghcostbtn = ghcost.querySelector('.ghcostbtn');
  ghcostbtn.addEventListener('click', toggleghcostviewer);
});
//ghcost Func

// kan cost Funct
const kancost1 = document.querySelectorAll('.kancost2');

let kanscrollOffset = 2200; // Offset default untuk desktop
// Periksa apakah tampilan saat ini adalah versi mobile
if (isMobile) {
  kanscrollOffset = 1200; // Ganti offset untuk mobile
}

function togglekancostviewer() {
  const kancostviewer = this.nextElementSibling;
  if (kancostviewer.style.maxHeight) {
    kancostviewer.style.padding = '0px'; // Menghapus padding saat elemen tertutup
    kancostviewer.style.maxHeight = null;
    document.getElementById('kanbtntext').textContent = "詳しくはこちら"; // Perbarui teks button
    document.getElementById('kanarrow').textContent = "▼"; // Perbarui teks button dengan karakter Unicode
    kancostblok = 0;
  } else {
    kancostviewer.style.padding = '30px 10px 30px 10px'; // Menambahkan padding saat elemen terbuka
    kancostviewer.style.maxHeight = kancostviewer.scrollHeight + 'px';
    document.getElementById('kanbtntext').textContent = "閉じる"; // Perbarui teks button
    document.getElementById('kanarrow').textContent = ""; // Perbarui teks button dengan karakter Unicode
    kancostblok = 500; 
    if (isMobile) {
      kancostblok = 250; // Ganti offset untuk mobile
    }

     // Scroll ke bawah elemen terbuka dengan offset yang sesuai
     const offsetTop = kancostviewer.offsetTop;
     window.scroll({
       top: offsetTop + kanscrollOffset + tegamiblok, // Gunakan offset yang sesuai
       behavior: 'smooth', // Untuk efek scrolling yang mulus
     });

  }
}

kancost1.forEach(kancost2 => {
  const kancostbtn = kancost2.querySelector('.kancostbtn');
  kancostbtn.addEventListener('click', togglekancostviewer);
});
//kancost Func

///////SoraDayori Slider Funct//////
const slides1 = document.querySelectorAll('.slides');
let isSliderInitialized = false;
let slidscrollOffset = 6450; // Offset default untuk desktop

// Periksa apakah tampilan saat ini adalah versi mobile
if (isMobile) {
  slidscrollOffset = 4000; // Ganti offset untuk mobile
}

function toggleSlidviewer() {
  const slidviewer = this.nextElementSibling;
  const offsetTopslid = slidviewer.offsetTop;
  if (slidviewer.style.maxHeight) {
    slidviewer.style.padding = '0px'; // Menghapus padding saat elemen tertutup
    slidviewer.style.maxHeight = null;
    document.getElementById('slidbtntext').textContent = "詳しくはこちら"; // Perbarui teks button
    document.getElementById('slidarrow').textContent = "▼"; // Perbarui teks button dengan karakter Unicode
    soradayoriblok = 0;
  } else {
    if (!isSliderInitialized) {
      // Inisialisasi slider hanya jika belum diinisiasi
      const slider1 = slidviewer.querySelector('.slider1');

        if (isMobile) {
          // Ubah Url Image Slider1 Agar tidak di download
          const slider1Images = slidviewer.querySelectorAll('.slider1 img');
            slider1Images.forEach((image) => {
              image.src = ''; // Atur src gambar menjadi kosong
            });
          // Inisialisasi slider untuk layar mobile
          var swiper = new Swiper(".mySwiper", {
            spaceBetween: 20,
            cssMode: true,
            mousewheel: true,
            keyboard: true,
            loop: true,
            autoplay: {
              delay: 4000,
              disableOnInteraction: false,
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
          });
          

        } else {
          // Ubah Url Image Swiper Agar tidak di download
          const swiperImages = slidviewer.querySelectorAll('.swiper-wrapper img');
          swiperImages.forEach((image) => {
              image.src = ''; // Atur src gambar menjadi kosong
            });
          // Inisialisasi slider1 untuk layar desktop
          $(slider1).slick({
            arrows: true,
            dots: true,
            autoplay: true,
            autoplaySpeed: 6000,
            fade: true,
            cssEase: 'linear'
          });
          
        }

      isSliderInitialized = true; // Setel penanda bahwa slider sudah diinisiasi
    }
    slidviewer.style.padding = '30px 10px 30px 10px'; // Menambahkan padding saat elemen terbuka
    slidviewer.style.maxHeight = slidviewer.scrollHeight + 'px';
    document.getElementById('slidbtntext').textContent = "閉じる"; // Perbarui teks button
    document.getElementById('slidarrow').textContent = ""; // Perbarui teks button dengan karakter Unicode
    soradayoriblok = 2000; //nilaoi gk tau soalnya gk ada autoscrooll dibawah soradayori

    // Scroll ke bawah elemen terbuka dengan offset yang sesuai
    window.scroll({
      top: offsetTopslid + slidscrollOffset + tegamiblok + ghcostblok + kancostblok, // Total Offset px
      behavior: 'smooth', // Untuk efek scrolling yang mulus
    });
  }
}

slides1.forEach(slides => {
  const slidbtn = slides.querySelector('.slidbtn');
  slidbtn.addEventListener('click', toggleSlidviewer);
});
///////SoraDayori Slider Funct//////



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
