const grid = document.querySelector('.grid')
const spawnPlayer = document.querySelector('.player')
const timer = document.querySelector('.timer')

const personagens = [
    'mordecai',
    'rigby',
    'berson',
    'musculoso',
    'pirulito',
    'fantasmao',
    'magarent',
    'saltitao',
    'thomas',
    'cj',
]

const createElement = (tag, className) => {
    const element = document.createElement(tag)
    element.className = className
    return element
}

let primeiraCard = ''
let segundoCard = ''

const checkEndgame = () => {
    const disableCards = document.querySelectorAll('.disable-card')

    if(disableCards.length == 20) {
        clearInterval(this.loop)
        alert(`Parabens ${spawnPlayer.innerHTML} seu tempo foi de ${timer.innerHTML} segundos`)
    }
}

const checkCard = () => {
    const primeiroPersonagen = primeiraCard.getAttribute('data-character')
    const segundoPersonagen = segundoCard.getAttribute('data-character')

    if(primeiroPersonagen == segundoPersonagen) {
        primeiraCard.firstChild.classList.add('disable-card')
        segundoCard.firstChild.classList.add('disable-card')

        primeiraCard = ''
        segundoCard = ''

        checkEndgame()

    } else {
        setTimeout(() => {
            primeiraCard.classList.remove('reveal-card')
            segundoCard.classList.remove('reveal-card')

            primeiraCard = ''
            segundoCard = ''

        }, 1000)
    }
}

const revealCard = ({ target }) => {

    if(target.parentNode.className.includes('reveal-card')) {
        return
    }

    if(primeiraCard == '') {
        target.parentNode.classList.add('reveal-card')
        primeiraCard = target.parentNode
    } else if (segundoCard == '') {
        target.parentNode.classList.add('reveal-card')
        segundoCard = target.parentNode

        checkCard()
    }
}

const createCard = (personagens) => {
    const card = createElement('div', 'card')
    const front = createElement('div', 'face front')
    const back = createElement('div', 'face back')

    front.style.backgroundImage = `url('../img/${personagens}.png')`

    card.appendChild(front)
    card.appendChild(back)

    card.addEventListener('click', revealCard)
    card.setAttribute('data-character', personagens)

    return card
}

const loadgame = () => {

    const duplicaPersonagens = [ ...personagens, ...personagens ]
    const aleatorio = duplicaPersonagens.sort(() => Math.random() -0.5)

    duplicaPersonagens.forEach((personagens) => {
        const card = createCard(personagens)
        grid.appendChild(card)
    })
}

const startTime = () => {
    this.loop = setInterval(() => {

        const segundos = +timer.innerHTML
        timer.innerHTML = segundos + 1

    }, 1000)
}

window.onload = () => {

    spawnPlayer.innerHTML = localStorage.getItem('player')
    startTime()
    loadgame()
}