import React from 'react';
import './App.scss';
import Navbar from './Components/organisms/Navbar/Navbar';
import Searchbar from './Components/organisms/SearchBar/Searchbar';
import { searchPokemon } from './api/index';

function App() {
  const onSearchHandler = async(pokemon) => {
    const result = await searchPokemon(pokemon)
    console.log("pokemon", result)

  }
  return (
    <div>
      <Navbar/>
      <Searchbar
      onSearch={onSearchHandler}
      />
    <div className="App"></div>
    </div>
  );
  }

export default App;
