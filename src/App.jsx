import React, {useEffect, useState} from 'react';
import './App.scss';
import Navbar from './Components/organisms/Navbar/Navbar';
import Searchbar from './Components/organisms/SearchBar/Searchbar';
import Pokedex from './Components/organisms/Pokedex/Pokedex';
import { getPokemonData, getPokemons } from './api';
import { FavoriteProvider } from './Components/organisms/Contexts/favoritesContext';



function App() {
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0);
    
  const [totalPages, setTotalPages] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);    //lista de favoritos que temos
  const itensPerPage = 26   // a quantidade que cada array tras

  const fetchPokemons = async () => {
    try{
      setLoading(true)
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      });

      const results = await Promise.all(promises); //busca uma lista de promessas
      const result = await getPokemons();
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count/ itensPerPage)) //O count diz quantos pokemons existem 

    
  }catch (error){
    console.log("fetchPokemons error:", error)

  }
}

  useEffect (() => {
  console.log("carregou")
  fetchPokemons();


    
  }, [page])  // como o page vai alterar o componente vai renderizar novamente e vai chamar os pokemons

  const updateFavoritePokemons = (name) => {
    const updatedFavorites= [...favorites]   //clonando os favoritos para outra variável que iremos mexer
    const favoriteIndex = favorites.indexOf(name)     //ver nos favoritos se ele ja tem o pokemon, se ele tiver, quer dizer que tenho que remover
    if(favoriteIndex >= 0){
      updatedFavorites.slice(favoriteIndex, 1)    //removo o indice
    }else{
      updatedFavorites.push(name);       //fazer um push para adicionar a nossa lista
      setFavorites(updatedFavorites);     //podemos dizer que nossos favoritos sao essa lista atualizada

    }

    }
  
 

 
  return (
   <FavoriteProvider
   value={{
    favoritePokemons: favorites,
    updateFavoritePokemons: updateFavoritePokemons,
   }}
   >
    <div>
      <Navbar/>
      <Searchbar/>
      <Pokedex pokemons={pokemons} loading={loading} page={page} totalPages={totalPages} setPage={setPage}/>
      </div>
    </FavoriteProvider>
  
  );
}

export default App;
