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
    // console.log(pokemon);

    return (


            // <div onClick={() => navigate(`/pokemons/${pokemon.id}`)}>
            <li onClick={dispatchPokemonId} className='pokemon-item'>
                    {/* aqui va el background color en flexitem */}

                    {/* <div className={`flex-item p-1 ${cardBackground ? cardBackground : pokemon.types?.[0].type.name }`}> */}
                    {/* <div className={`flex-item p-1 ${pokemon.types?.[0].type.name}`}> */}
                    <div className={`pokemon-card ${pokemon.types?.[0].type.name}`}>
                    {/* <div className={`flex-item p-1 ${cardBackground}`}> */}
                    {/* <div className={`flex-item p-1 ${background}`}> */}
                     {/* <img src={pokemon.sprites?.["front_default"]} alt="" /> */}
                     <img src={pokemon.sprites?.other["official-artwork"]["front_default"]} alt="" />
                        <div className={`whiteContainer`}>
                            <h3 className={`${pokemon.types?.[0].type.name}`}>{pokemon.name}</h3>
                            <p>{pokemon.types?.[0]?.type.name}/{pokemon.types?.[1]?.type.name ? pokemon.types?.[1]?.type.name : "none"}</p>
                            <p className='whiteContainer-type'>type</p>
                            <hr />
                            <div className='pokemonCard-stats'>
                                <div>
                                    <p>HP</p>
                                    {/* <small className={`${pokemon.types?.[0].type.name}`}>{pokemon.stats?.[0]["base_stat"]}</small> */}
                                    <small>{pokemon.stats?.[0]["base_stat"]}</small>
                                    <p>ATTACK</p>
                                    {/* <small className={`${pokemon.types?.[0].type.name}`}>{pokemon.stats?.[1]["base_stat"]}</small> */}
                                    <small>{pokemon.stats?.[1]["base_stat"]}</small>
                                </div>
                                <div>
                                    <p>DEFENSE</p>
                                    {/* <small className={`${pokemon.types?.[0].type.name}`}>{pokemon.stats?.[2]["base_stat"]}</small> */}
                                    <small>{pokemon.stats?.[2]["base_stat"]}</small>
                                    <p>SPEED</p>
                                    {/* <small className={`${pokemon.types?.[0].type.name}`}>{pokemon.stats?.[5]["base_stat"]}</small> */}
                                    <small>{pokemon.stats?.[5]["base_stat"]}</small>
                                </div>
                            </div>
                        </div>    
                    </div>
            </li>

            // {/* <h1>pokemon Card</h1> */}
            // {/* {url} */}
    );
};

export default PokemonCard;