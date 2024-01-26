$(document).ready(function () {
    $('.custom-dropdown .dropdown-item').click(function () {
      var selectedOption = $(this).text();
      $('.custom-dropdown .btn-secondary').text(selectedOption);
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    generateDropdownItems("dropdown-menu-1", 21);
    generateDropdownItems("dropdown-menu-2", 21);
  });

  function generateDropdownItems(menuId, startValue) {
    var dropdownMenu = document.getElementById(menuId);

    for (var i = startValue; i <= startValue + 9; i++) {
      var listItem = document.createElement("li");
      var anchor = document.createElement("a");
      anchor.setAttribute("class", "dropdown-item");
      anchor.setAttribute("href", "#");
      anchor.textContent = i;

      listItem.appendChild(anchor);
      dropdownMenu.appendChild(listItem);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const cardsContainer = document.querySelector('.flex');
    const prevButton = document.querySelector('.button-left');
    const nextButton = document.querySelector('.button-right');
    const card = document.querySelectorAll('.f1')
    let currentIndex = 0;

    prevButton.addEventListener('click', () => preFunc());
    nextButton.addEventListener('click', () => nextFunc());

    function nextFunc() {
        card.forEach((e)=>{
            e.style.transform="translateX(-610px)"
        })
    }
    function preFunc() {
       
        card.forEach((e)=>{
            e.style.transform="translateX(0px)"
        })
    }
})

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide:'true',
  fade:'true',
  grabCursor:'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets:true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
        0:{
          slidesPerView:1,
        },
        520:{
          slidesPerView:2,
        },
        950:{
          slidesPerView:3,
        }
  }
});