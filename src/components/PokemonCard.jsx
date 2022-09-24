import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changePokemonId } from '../store/slices/pokemonId.slice';
import { getPokemonType } from '../store/slices/pokemonType.slice';

const PokemonCard = ( {url} ) => {

    const [pokemon, setPokemon] = useState({});
    
    //para poder consumir el enlace de cada uno de los pokemons
    // la recibimos por url entonces la consumimos para mostrar todos
    // los atributos de un pokemon independientemente

    useEffect( () => {
        axios.get(url)
            .then(res => {
                setPokemon(res.data)
            })
            
    },[])

    const navigate = useNavigate();

    // const dispatch = useDispatch();


    const dispatchPokemonId = () => {
        //aca importamos en el UseDispatch el reducer del slice

        //genera una variable global inpidiendo el cambio de los parametros en las nuevas renderizaciones
        // dispatch(changePokemonId(pokemon.id))
        
        navigate(`/pokemons/${pokemon.id}`)
        // dispatch(pokemon.types?.[0].type.name)
        // dispatch(getPokemonType())  
    }

    // console.log(pokemon.types?.[0].type.name);
    console.log(pokemon);

    return (


            // <div onClick={() => navigate(`/pokemons/${pokemon.id}`)}>
            <div onClick={dispatchPokemonId}>

                {/* aqui va el background color en flexitem */}

                {/* <div className={`flex-item p-1 ${cardBackground ? cardBackground : pokemon.types?.[0].type.name }`}> */}
                <div className={`flex-item p-1 ${pokemon.types?.[0].type.name}`}>
                {/* <div className={`flex-item p-1 ${cardBackground}`}> */}
                {/* <div className={`flex-item p-1 ${background}`}> */}
                        <h3>{pokemon.name}</h3>
                        <img src={pokemon.sprites?.["front_default"]} alt="" />
                        {pokemon.height}
                </div>
            </div>

            // {/* <h1>pokemon Card</h1> */}
            // {/* {url} */}
    );
};

export default PokemonCard;