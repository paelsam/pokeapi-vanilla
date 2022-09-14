import { capitalize } from "./edit-information";

const url = `https://pokeapi.co/api/v2/pokemon`


const getPokemons = async ( url, offset, limit ) => {
    try {
        const res = await fetch(`${ url }/?offset=${ offset }&limit=${ limit }`);
        const { results } = await res.json();
    
        if ( res.ok ) {
            return results;
        } else {
            throw res;
        }
    } catch ( error ) {
        throw error;
    }

}

const getPokemonInformation = async ({ url }) => {
    const data = await (await fetch( url )).json();
    const {id, name, types, sprites} = data;

    
    return {
        id,
        name: capitalize(name), 
        types: types.map( ({ type }) => capitalize(type.name) ),
        sprite: sprites.front_default
    }
    
}


const pokemons = async ( offset, limit ) => {
    const pokemonsFetch = await getPokemons(url, offset , limit);
    return await Promise.all( pokemonsFetch.map( getPokemonInformation ) );
}


export {
    pokemons
}