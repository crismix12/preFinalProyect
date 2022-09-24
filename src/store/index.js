import { configureStore } from '@reduxjs/toolkit'
import pokemonIdSlice from './slices/pokemonId.slice'
import pokemonTypeSlice from './slices/pokemonType.slice'
import userNameSlice from './slices/userName.slice'

export default configureStore({
  reducer: {
//Este nombre puede ser cualquiera menos la referencia al slice "userNameSlice"
        userName: userNameSlice,
        pokemonId: pokemonIdSlice,
        pokemonType: pokemonTypeSlice
	}
})