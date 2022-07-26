const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`
const mainArea = document.querySelector("main")

fetch(POKEMONS_URL)
.then(res => res.json())
.then(pokemonArray => { 
    fetch(TRAINERS_URL)
.then(res => res.json())
.then(res => {
    showTrainers(res, pokemonArray)
})
})

function showPokemons(pokemonArray) {
    pokemonArray.forEach
}


function showTrainers(trainersArray, pokemonArray) {
    trainersArray.forEach(trainer => showTrainer(trainer, pokemonArray))
};

function showTrainer(trainerObj, pokemonArray) {
    const trainerCard = document.createElement("div")
    trainerCard.classList.add("card")
    trainerCard.dataset.id = trainerObj.id

    trainerCard.innerHTML= `
    <p>${trainerObj.name}</p>
    <ul id="poke-list"></ul>
        <button class = "add-button" data-trainer-id="${trainerObj.id}">Add Pokemon</button>`
    // mainArea.append(trainerCard)

    let matching = pokemonArray.filter(poke => poke.trainer_id == trainerObj.id)


    const addButton = trainerCard.querySelector(".add-button")
        addButton.addEventListener("click", event => {
            const pokemon = pokemonArray[Math.floor(Math.random() * 40 ) +1]
            const newItem = document.createElement("li")
            newItem.innerHTML = 
            `${pokemon.nickname} (${pokemon.species})`

            let releaseButton = document.createElement("button")
            releaseButton.classList.add("release")
            releaseButton.innerText = "Release"
            releaseButton.dataset.id = pokemon.id
            newItem.append(releaseButton)
            releaseButton.addEventListener("click", event => event.target.parentNode.remove())
            ul.append(newItem)
    })

    const ul = document.createElement("ul")

    matching.forEach(poke => {
        const newItem = document.createElement("li")
        newItem.innerHTML = 
        `${poke.nickname} (${poke.species})`

            let releaseButton = document.createElement("button")
            releaseButton.classList.add("release")
            releaseButton.innerText = "Release"
            releaseButton.dataset.id = poke.id
            newItem.append(releaseButton)
            releaseButton.addEventListener("click", event => event.target.parentNode.remove())
        ul.append(newItem)
    })

    trainerCard.append(ul)
    mainArea.append(trainerCard)
}
 
function showPokemon(trainerObj) {
    fetch(POKEMONS_URL)
    .then(res => res.json())
    .then(showPokeman)
}




 
