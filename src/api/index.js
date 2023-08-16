export const searchPokemon = async (pokemon) => {
    
    try{
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(url)     //o que recebemos da chamada da api
        console.log(response)
        return await response.json()


    } catch{
        console.log("error:")
    }

}
export const getPokemons= async (limit = 50, offset = 0) => {    
    try{
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`   //parametros que passamos na chamada que é um limite de 50
        const response = await fetch(url)     //o que recebemos da chamada da api
        return await response.json()                     

    } catch{
        console.log("error:")
    }

}

export const getPokemonData= async (url) => {    
    try{
        
        const response = await fetch(url)     //o que recebemos da chamada da api
        return await response.json()                     

    } catch{
        console.log("error:")
    }

}


 