import { configureStore } from '@reduxjs/toolkit'
import pokemonsPerPageSlice from './slices/pokemonsPerPage.slice'
import userNameSlice from './slices/userName.slice'

export default configureStore({
  reducer: {
//Este nombre puede ser cualquiera menos la referencia al slice "userNameSlice"
        userName: userNameSlice,
        pokemonsPerPage: pokemonsPerPageSlice
	}
})