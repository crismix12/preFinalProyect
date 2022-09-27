import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const PokemonsDetail = () => {

    //opcion alternativa utilizar useParams() resulta mas sencillo 
    const { id } = useParams();
    
    // const id = useSelector(state => state.pokemonId)

    // console.log(id);

    const [pokemonDetails, setPokemonDetails] = useState("");

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setPokemonDetails(res.data))
    }, [id])

    // console.log(pokemonDetails);

    return (
        <div>
            <h1>Pokemon con ID: {id}</h1>
            {pokemonDetails.name}
            <hr />
            <img src={pokemonDetails.sprites?.other["official-artwork"]["front_default"]} alt="" />
        </div>
    );
};

export default PokemonsDetail;