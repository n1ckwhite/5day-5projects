const slides = document.querySelectorAll('.slide')

slides.forEach(slide => {
    slide.addEventListener('click', () => {
        cliearActiveClasses()
        slide.classList.add('active')
    })
})

const cliearActiveClasses = () => slides.forEach(i => i.classList.remove('active'))