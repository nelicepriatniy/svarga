const swiper = new Swiper('.nagradi-slider', {
  speed: 400,
  navigation: {
    nextEl: '.nagrady-arrow.next',
    prevEl: '.nagrady-arrow.prev'
  },
  breackpoints: {
    320: {
      spaceBetween: 10,
      slidesPerView: 1.2,
    },
    1024: {
      spaceBetween: 70,
      slidesPerView: 2,

    }
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

//вопросы

const questions = document.querySelectorAll('.faq-wrapper .item')

if(questions.length > 0) {
  questions.forEach((el)=>{
    el.onclick = ()=>{
      el.classList.toggle('active')
    }
  })
}

//mob menu

if(window.innerWidth < 1024) {
  const mobMenu = document.querySelector('.mob-head-menu')
  if(mobMenu) {
    const mobMenuOpen = document.querySelectorAll('.headerMenuOpen');
    const mobMenuClose = document.querySelectorAll('.headerMenuClose');

    mobMenuOpen.forEach((el)=>{
      el.onclick = ()=>{
        mobMenu.classList.add('active')
      }
    })
    mobMenuClose.forEach((el)=>{
      el.onclick = ()=>{
        mobMenu.classList.remove('active')
      }
    })
  }
}

//video 

const video = document.querySelector('.video');

if(video) {
  const playBtn = video.querySelector('svg');
  const videoitself = video.querySelector('video');
  video.onclick = ()=>{
    playBtn.style.display = 'none';
    videoitself.play();
    videoitself.setAttribute('controls', true)
  }
}