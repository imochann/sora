// TABS AREA Function
function openTab(evt, tabName) {
  var i, tabContent, tabButtons;
  
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
  }
  
  tabButtons = document.getElementsByClassName("tab-button");
  for (i = 0; i < tabButtons.length; i++) {
      tabButtons[i].classList.remove("active");
  }
  
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}

document.getElementById("tab1").style.display = "block";
document.getElementsByClassName("tab-button")[0].classList.add("active");

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