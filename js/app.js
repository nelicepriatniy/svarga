const swiper = new Swiper('.nagradi-slider', {
  speed: 400,
  spaceBetween: 70,
  slidesPerView: 2,
  navigation: {
    nextEl: '.nagrady-arrow.next',
    prevEl: '.nagrady-arrow.prev'
  }
});


//курсы 

const curses = document.querySelectorAll('.main-curses .item')

if(curses.length > 0) {
  curses.forEach((el)=>{
    const openBtn = el.querySelector('.top .more')
    const closeBtn = el.querySelector('.bottom .back')
    openBtn.onclick = ()=>{
      el.classList.add('active')
    }
    closeBtn.onclick = ()=>{
      el.classList.remove('active')
    }
  })
}

