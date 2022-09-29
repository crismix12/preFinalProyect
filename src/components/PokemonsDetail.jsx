import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';

const PokemonsDetail = () => {

    //opcion alternativa utilizar useParams() resulta mas sencillo 
    const { id } = useParams();

    // const id = useSelector(state => state.pokemonId)

    // console.log(id);

    const navigate = useNavigate();

    const [pokemonDetails, setPokemonDetails] = useState("");

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setPokemonDetails(res.data))
    }, [id])

    // console.log(pokemonDetails);

    const goBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <header>
                <section className='header-redSection'>
                    <img src="https://i.pinimg.com/originals/bd/cd/20/bdcd20f5411ee5785889542d303ad4cb.png" alt="" />
                </section>
                <section className='header-blackSection'>
                    <p>a</p>
                </section>
            </header>
            <nav className='pokemonDetails-nav'>
                <button onClick={goBack}> Back <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png" alt="" /></button>
            </nav>
            <div className={`pokemonDetails-backgroundContainer ${pokemonDetails.types?.[0].type.name}`}>
                <img src={pokemonDetails.sprites?.other["official-artwork"]["front_default"]} alt="" />
            </div>
            <div className='pokemonDetails-IdContainer'>
                <h1>#{pokemonDetails.id}</h1>
            </div>

            <div className="mytextdiv">
                <div className="divider"></div>
                <div className={`mytexttitle ${pokemonDetails.types?.[0].type.name}`}>
                    {pokemonDetails.name}
                </div>
                <div className="divider"></div>
            </div>

            <div className="innerPokemonDetailsContainer">
                <div className='pokemonDetails-statsContainer' >
                    <div>
                        <p>weight</p>
                        <small>{pokemonDetails.weight}</small>
                    </div>
                    <div>
                        <p>height</p>
                        <small>{pokemonDetails.height}</small>
                    </div>
                </div>

                <div className="pokemonDetails-typeHabilitiesContainer">
                    <div>
                        <p>Type</p>
                        <div className='pokemonDetails-typeContainer'>
                            <p className={`${pokemonDetails.types?.[0].type.name}`}>
                                {pokemonDetails.types?.[0].type.name}
                            </p>
                            <p className={`${pokemonDetails.types?.[1]?.type.name ? pokemonDetails.types?.[1]?.type.name : "none"}`}>
                                {pokemonDetails.types?.[1]?.type.name ? pokemonDetails.types?.[1]?.type.name : "none"}
                            </p>
                        </div>
                    </div>
                    <div>
                        <p>Habilities</p>
                        <div className='pokemonDetails-habilitiesContainer'>
                            <p>
                                {pokemonDetails.abilities?.[0].ability.name}
                            </p>
                            <p>
                                {pokemonDetails.abilities?.[1]?.ability.name ? pokemonDetails.abilities?.[1]?.ability.name : "none"}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mytextdiv">
                    <h3><b>Stats</b></h3>
                    <div className="divider"></div>
                    <div className='stats-PokeballDivider'>
                        <img src="https://www.seekpng.com/png/full/20-207845_pokeball-logo-png-download-pokeball-png.png" alt="" />
                    </div>
                </div>

                <div className='progressBar-Container'>
                    <div className='progressBar-statsContainer'>
                        <p>HP:</p>
                        <p>{pokemonDetails.stats?.[0]["base_stat"]}/150</p>
                    </div>
                    <ProgressBar variant="success" now={pokemonDetails.stats?.[0]["base_stat"]} max={150} />
                    <div className='progressBar-statsContainer'>
                        <p>Attack:</p>
                        <p>{pokemonDetails.stats?.[1]["base_stat"]}/150</p>
                    </div>
                    <ProgressBar variant="danger" now={pokemonDetails.stats?.[1]["base_stat"]} max={150} />
                    <div className='progressBar-statsContainer'>
                        <p>Defense:</p>
                        <p>{pokemonDetails.stats?.[2]["base_stat"]}/150</p>
                    </div>
                    <ProgressBar variant="info" now={pokemonDetails.stats?.[2]["base_stat"]} max={150} />
                    <div className='progressBar-statsContainer'>
                        <p>Speed:</p>
                        <p>{pokemonDetails.stats?.[5]["base_stat"]}/150</p>
                    </div>
                    <ProgressBar variant="warning" now={pokemonDetails.stats?.[5]["base_stat"]} max={150} />
                </div>

                <div className="mytextdiv">
                    <h3><b>Movements</b></h3>
                    <div className="divider"></div>
                    <div className='stats-PokeballDivider'>
                        <img src="https://www.seekpng.com/png/full/20-207845_pokeball-logo-png-download-pokeball-png.png" alt="" />
                    </div>
                </div>

                <div className='movementsContainer'>
                    <ul className='btn-movementsContainer'>
                        {
                            pokemonDetails.moves?.map(move => (
                                <button key={move.move?.name} className='movementBtn'>{move.move?.name}</button>
                            ))
                        }
                    </ul>

                </div>

            </div>
        </div>
    );
};

export default PokemonsDetail;