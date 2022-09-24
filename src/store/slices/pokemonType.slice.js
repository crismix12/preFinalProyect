import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const PokemonTypeSlice = createSlice({
	name: 'pokemonType',
    initialState: [],
    reducers: {
        getPokemonType: (state, action) => {
            const pokemonType = action.payload;
            return pokemonType
        } 
    }
})

export const { getPokemonType } = PokemonTypeSlice.actions;

export default PokemonTypeSlice.reducer;