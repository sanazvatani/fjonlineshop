/*=======Change background header===========*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=======================Swiper products =========================*/
let swiperProducts = new Swiper(".products--container", {
    
        spaceBetween: 32,
        grabCoursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,

        navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        1024: {
          spaceBetween: 72,
        },
      },
  });



  /*=================scroll sections active link==========================*/
  const sections = document.querySelectorAll('section[id]')

  const scrollActive = () =>{
    const scrollY = window.pageYOffset

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav--menu a[href*=' + sectionId + ']')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        sectionsClass.ClassList.add('active-link')
      }else{
        sectionsClass.ClassList.remove('active-link')
      }
    })
  }
window.addEventListener('scroll' , scrollActive)

/*===============scrollup====================*/

const scrollUp = () =>{
  const scrollUp = document.getElementById('scroll-up')
  //when the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                                          :scrollUp.classList.remove('show-scroll')
  .window.addEventListener('scroll', scrollUp)
}


/*================Dark light theme===================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

//previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//we obtain the current theme that the interfrace has by validating the dark theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

//we validate if the user previously close a topic
if (selectedTheme) {
  //If the validatiion is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

//Activate / deactivate the theme manually with the botton
themeButton.addEventListener('click' , () => {
  //Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  //we save theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})


/*==============scroll reveal antmation========================*/
const sr =ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  //reset:true
})

sr.reveal(`.home--data, .products--container, .footer--container, .footer--container, .footer--info`)
sr.reveal(`.home--images`, {delay: 600, origin: 'bottom'})
sr.reveal(`.new--card, .brand--img`, {interval: 100})
sr.reveal(`.collection--explore:nth-child(1)`, {origin: 'right'})
sr.reveal(`.collection--explore:nth-child(2)`, {origin: 'left'})