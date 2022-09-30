import { createSlice } from '@reduxjs/toolkit';

export const pokemonsPerPageSlice = createSlice({
    name: 'pokemonsPerPage',
    initialState: 16,
    reducers: {
        getPokemonsPerPage: (state, action) =>{
            return action.payload
        }
    }
})

export const { getPokemonsPerPage } = pokemonsPerPageSlice.actions;

export default pokemonsPerPageSlice.reducer;
