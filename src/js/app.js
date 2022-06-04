import * as flsFunctions from './modules/functions.js'
flsFunctions.isWebp()

for (let i of document.querySelectorAll('.achieve__number')) {
  let numberTop = i.getBoundingClientRect().top,
    start = +i.innerHTML,
    end = +i.dataset.max

  window.addEventListener('scroll', function onScroll () {
    if (window.pageYOffset > numberTop - window.innerHeight / 2) {
      this.removeEventListener('scroll', onScroll)
      let interval = this.setInterval(function () {
        i.innerHTML = ++start
        if (start == end) {
          clearInterval(interval)
        }
      }, 2)
    }
  })
}

new Swiper('.block-slider', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})

const burgerMenu = document.getElementById('burger')
burgerMenu.addEventListener('click', function () {
  let nav = document.getElementById('nav')
  nav.classList.toggle('header__nav')
})
