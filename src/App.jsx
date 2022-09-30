import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import UserInput from './components/UserInput'
import PokemonsDetail from './components/PokemonsDetail'
import Pokemons from './components/Pokemons'
import ProtectedRoutes from './components/ProtectedRoutes'
import Settings from './components/Settings'

function App() {

  return (
    <HashRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<UserInput/>} />
          <Route path='/settings' element={<Settings/>} />
          <Route element={<ProtectedRoutes/>}>
              <Route path='/pokemons' element={<Pokemons/>} />
              <Route path='/pokemons/:id' element={<PokemonsDetail/>} />
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App
