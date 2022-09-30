import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPokemonsPerPage} from '../store/slices/pokemonsPerPage.slice';


const Settings = () => {

    const actualPokePerPage = useSelector( state => state.pokemonsPerPage)

    const [pokePerPage, setPokemonsPerPage] = useState(Number(actualPokePerPage));

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const goBack = () =>{
        navigate(-1);
    }

    const dispatchPokemonsPerPage = () =>{
        dispatch(getPokemonsPerPage(pokePerPage))
    }

    return (
        <div className='settings-Container'>
            <div className='config-Container'>
                <h3>Number of pokemons per page</h3>
                <p>Actual Pokemon per Page Set: {actualPokePerPage}</p>
                <div>
                    <input
                        type="number"
                        placeholder='Insert a Number'
                        value={pokePerPage}
                        onChange={e => setPokemonsPerPage(e.target.value)}
                    />
                    <button className='btn btn-danger' onClick={dispatchPokemonsPerPage}>Set</button>
                </div>
                <div>
                    <button className='btn btn-primary' onClick={goBack}>Go Back</button>
                </div>
            </div>
        </div>
    );
};

export default Settings;