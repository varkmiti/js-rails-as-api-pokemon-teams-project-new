const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`
const mainArea = document.querySelector("main")

fetch(TRAINERS_URL)
.then(res => res.json())
.then(res => showTrainers(res))

function showTrainers(trainersArray) {
    trainersArray.forEach(trainer => showTrainer(trainer))
};

function showTrainer(trainerObj) {
    const trainerCard = document.createElement("div")

    trainerCard.innerHTML= `
    <div class="card" data-id="${trainerObj.id}"><p>${trainerObj.name}</p>
        <button data-trainer-id="${trainerObj.id}">Add Pokemon</button>
    </div>`

    mainArea.append(trainerCard)

    
}
 
function showPokemon(trainerObj) {
    fetch(POKEMONS_URL)
    .then(res => res.json())
    .then(showPokeman)
}
