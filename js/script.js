const sideMenu = document.querySelector('aside')
const menuBtn = document.querySelector('#menu-btn')
const closeBtn = document.querySelector('#close-btn')
const themeToggler = document.querySelector('.theme-toggler')

//Show Sidebar
menuBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'block'
})

//Close Sidebar 
closeBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'none'
})

//Change theme

themeToggler.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme-variables')

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')

})


//SWIPER SLIDE CODE

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });
  
  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  


