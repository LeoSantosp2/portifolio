class Slides{
  constructor(){
    this.slides = document.querySelectorAll('.slide')
    this.nav = document.querySelector('.nav')
    this.divAtual = document.getElementById('about-me')
    this.atual = 0
    this.createDiv()
    this.cont()
    this.clickBtn()
  }

  createDiv(){
    for(let i = 0; i < this.slides.length; i++){
			const div = document.createElement('div')

			div.id = i

			this.nav.appendChild(div)
    }

    document.getElementById('0').classList.add('actual')
  }

  cont(){
		const cont = document.querySelectorAll('.nav div')

		for(let i = 0; i < cont.length; i++){
			cont[i].addEventListener('click', ()=>{
				this.atual = cont[i].id
				this.transition()
			})
		}
  }

  clickBtn(){
		document.addEventListener('click', e =>{
			const event = e.target

			if(event.classList.contains('btnLeft')){
				this.atual--
				this.transition()
			}
			if(event.classList.contains('btnRight')){
				this.atual++
				this.transition()
			}
		})
  }

  transition(){
		if(this.atual >= this.slides.length){
			this.atual = 0
		}
		else if(this.atual < 0){
			this.atual = this.slides.length - 1
		}

		document.querySelector('.actual').classList.remove('actual')
		this.divAtual.style.marginLeft = -25 * this.atual + '%'
		document.getElementById(this.atual).classList.add('actual')
  }
}

const slide = new Slides()