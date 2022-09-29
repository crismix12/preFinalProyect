import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination';
import PokemonCard from './PokemonCard';

const Pokemons = () => {

    const name = useSelector( state => state.userName)

    const [pokemonsList, setPokemonsList] = useState([]);
    const [pokemonsTypes, setPokemonsTypes] = useState([]);
    const [nameInput, setNameInput] = useState("");

    useEffect (() =>{
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1155')
        .then(res => setPokemonsList(res.data.results))

        axios.get('https://pokeapi.co/api/v2/type/')
            .then(res => {
                setPokemonsTypes(res.data.results)
            })    
    },[])

    const navigate = useNavigate();

        //pagination
        const [currentPage, setCurrentPage] = useState(1);
        const [postsPerPage, setPostsPerPage] = useState(16);
    
        //getCurrentPosts
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
                            //deacuerdo a este calculo realizamos un slice de la respuesta del API con Axios
        const currentPokemons = pokemonsList.slice(indexOfFirstPost, indexOfLastPost); 
    
        //change page
        const paginate = (pageNumber) => {
            setCurrentPage(pageNumber);       
        }

        const searchName = () => {
            navigate(`/pokemons/${nameInput}`)
        }

        const returnLastPage = () => {
            navigate(`/`)
        }


        const searchPokemonType = (pokemonType) =>{
            if(pokemonType !== ""){
                axios.get(`https://pokeapi.co/api/v2/type/${pokemonType}`)
                    .then(res => {
                        setPokemonsList(res.data.pokemon.map(pokemon => pokemon.pokemon))
                        setCurrentPage(1);
                    })             
            }else{
                axios.get('https://pokeapi.co/api/v2/pokemon/')
                    .then(res => setPokemonsList(res.data.results))            
            }
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

            <div className='welcomeContainer'>
                <p>Welcome {name}, <span>here you can find your favorite pokemon</span></p>
                <button onClick={returnLastPage}> Back <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png" alt="" /></button>
            </div>
            <div className='container d-flex flex-content justify-content-evenly'>
                <div>
                    {/* para detectar el enter entonces podemos utilizar onKeyDown */}
                    <input 
                        type="text" 
                        placeholder='Search by name'
                        value={nameInput}
                        onChange={e => setNameInput(e.target.value)}
                    />
                    <button onClick={searchName}>Search</button>
                </div>

                <div>
                    <select onChange={e => searchPokemonType(e.target.value)}>
                        <option value="">Select an option</option>
                        {
                            pokemonsTypes.map((pokemonType, index) => (
                                <option key={index} value={pokemonType.name}>{pokemonType.name}</option> 
                            ))
                        }
                    </select>
                </div>
            </div>

            <ul className='pokemonCard-Container'>
                {
                    currentPokemons.map(pokemon => (
                                <PokemonCard 
                                    url={pokemon.url} 
                                    key={pokemon.url}
                                />
                            
                    ))
                }
            </ul>
            
            <Pagination postsPerPage={postsPerPage} totalPosts={pokemonsList.length} paginate={paginate}/>
        </div>
    );
};

export default Pokemons;