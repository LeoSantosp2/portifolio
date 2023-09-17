const elements = document.querySelectorAll('.hidden')
const divFormation = document.querySelector('.hidden-right')

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show')
    }
  })
})

elements.forEach(element => observer.observe(element))

observer.observe(divFormation)
