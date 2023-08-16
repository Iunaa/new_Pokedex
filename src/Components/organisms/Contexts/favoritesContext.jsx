import React from "react";

const FavoriteContext = React.createContext({
    favoritePokemon: [],
    updateFavoritePokemons: (id) => null   //metodo para atualizar os favoritos
});

export const FavoriteProvider = FavoriteContext.Provider

export default FavoriteContext;