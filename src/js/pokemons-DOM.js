import { pokemons } from './http-provider';

const $ = (element) => document.querySelector(element);
const sectionPokemons = $('#pokemons');
let pokemonList;

console.log(sectionPokemons);


const createHTML = ({ id, name, types: [type1, type2], sprite }) => {

        const html = `
        <div class="card m-1" style="width: 10rem;">
            <img src="${sprite}" class="card-img-top" alt="${name}">
            <div class="card-body text-center">
                <p class="card-text bold">${id}</p>
                <p class="card-text">${ type1 } ${ type2 ? `- ${ type2 }` : '' }</p>
                <p class="card-text">${name}</p>
            </div>
        </div>`

    const div = document.createElement('div');

    div.innerHTML = html;

    sectionPokemons.append( div.firstElementChild  );
}


async function init () {
    pokemonList = await pokemons( 0, 10);
    pokemonList.forEach( (pokemon) => createHTML( pokemon ) );
}


export {
    init,
}
















export {

}