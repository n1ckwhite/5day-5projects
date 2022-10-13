const slidesStart = (acitveSlide = 0) => {
  const slides = document.querySelectorAll('.slide')
  slides[acitveSlide].classList.add('active')
  slides.forEach(slide => {
      slide.addEventListener('click', () => {
          cliearActiveClasses()
          slide.classList.add('active')
      })
  })

  const cliearActiveClasses = () => slides.forEach(i => i.classList.remove('active'))
}

slidesStart(3)
