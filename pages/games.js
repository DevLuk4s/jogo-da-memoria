const grid = document.querySelector('.grid')

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

const revealCard = ({target}) => {
    target.parentNode.classList.add('reveal-card')
}

const createCard = (personagens) => {
    const card = createElement('div', 'card')
    const front = createElement('div', 'face front')
    const back = createElement('div', 'face back')

    front.style.backgroundImage = `url('../img/${personagens}.png')`

    card.appendChild(front)
    card.appendChild(back)

    card.addEventListener('click', revealCard)

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

loadgame()