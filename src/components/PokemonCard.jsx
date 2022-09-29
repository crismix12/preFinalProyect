import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const PokemonCard = ( {url} ) => {

    const [pokemon, setPokemon] = useState({});

    useEffect( () => {
        axios.get(url)
            .then(res => {
                setPokemon(res.data)
            })
            
    },[])

    const navigate = useNavigate();

    const goToPokemonDetail = () => {
        navigate(`/pokemons/${pokemon.id}`)
    }

    return (

            <li onClick={goToPokemonDetail} className='pokemon-item'>
                    <div className={`pokemon-card ${pokemon.types?.[0].type.name} hovercard`}>
                     <img src={pokemon.sprites?.other["official-artwork"]["front_default"]} alt="" />
                        <div className={`whiteContainer`}>
                            <h3 className={`${pokemon.types?.[0].type.name}`}>{pokemon.name}</h3>
                            <p>{pokemon.types?.[0]?.type.name}/{pokemon.types?.[1]?.type.name ? pokemon.types?.[1]?.type.name : "none"}</p>
                            <p className='whiteContainer-type'>type</p>
                            <hr />
                            <div className='pokemonCard-stats'>
                                <div>
                                    <p>HP</p>
                                    <small>{pokemon.stats?.[0]["base_stat"]}</small>
                                    <p>ATTACK</p>
                                    <small>{pokemon.stats?.[1]["base_stat"]}</small>
                                </div>
                                <div>
                                    <p>DEFENSE</p>
                                    <small>{pokemon.stats?.[2]["base_stat"]}</small>
                                    <p>SPEED</p>    
                                    <small>{pokemon.stats?.[5]["base_stat"]}</small>
                                </div>
                            </div>
                        </div>    
                    </div>
            </li>
    );
};

export default PokemonCard;