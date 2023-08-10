export const searchPokemon = async (pokemon) => {
    try{
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(url)     //o que recebemos da chamada da api
        return await response.json                     

    } catch{
        console.log("error:")
    }

}