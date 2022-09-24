import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const pokemonIdSlice = createSlice({
	name: 'pokemonId',
    initialState: "",
    reducers: {
        changePokemonId: (state, action) => {
            const id = action.payload;
            return id
        } 
    }
})

export const { changePokemonId } = pokemonIdSlice.actions;

export default pokemonIdSlice.reducer;
