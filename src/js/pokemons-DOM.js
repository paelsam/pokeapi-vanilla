import { pokemons } from './http-provider';
// CSS
import '../css/componets.css';

const $ = (element) => document.querySelector(element);
const sectionPokemons = $('#pokemons');
const btnAntes = $('#antes');
const btnDespues = $('#despues');
let pokemonList;
let offset = 0;



const createHTML = ({ id, name, types: [type1, type2], sprite }) => {

        // Previous disabled if offset is equal to 0
        btnAntes.disabled = offset === 0 ? true : false;

        const html = `
        <div class="card m-1" style="width: 10rem;">
            <img src="${sprite}" class="${type1.toLowerCase()}" loading="lazy" alt="${name}">
            <div class="card-body text-center">
                <p class="card-text bold">${id}: ${name}</p>
                <p class="card-text">
                    <span class="${type1.toLowerCase()} bold">${type1}</span>  
                    <span class="${type2 ? type2.toLowerCase() : ''} bold"> ${type2 ? `${type2}` : ''}</span>  
                </p>
            </div>
        </div>`

    const div = document.createElement('div');

    div.innerHTML = html;

    sectionPokemons.append(div.firstElementChild);
}

const events = () => {


    btnAntes.addEventListener("click", () => {
        sectionPokemons.innerHTML = ``;
        offset -= 10;
        displayPokemons(offset);
    })

    btnDespues.addEventListener("click", () => {
        sectionPokemons.innerHTML = ``;
        offset += 10;
        displayPokemons(offset);
    })

}

const displayPokemons = async (offset) => {
    pokemonList = await pokemons(offset, 10);
    pokemonList.forEach((pokemon) => createHTML(pokemon));
}

function init() {
    displayPokemons(offset);
    events();
}


export {
    init,
}
















export {

}