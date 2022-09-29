import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination';
import PokemonCard from './PokemonCard';

const Pokemons = () => {

    const name = useSelector( state => state.userName)

    // console.log(name);
    const [pokemonsList, setPokemonsList] = useState([]);
    const [pokemonsTypes, setPokemonsTypes] = useState([]);
    // const [filteredPokemons, setFilteredPokemons] = useState([]);
    const [background, setBackground] = useState("")
    const [nameInput, setNameInput] = useState("");

    useEffect (() =>{
        // https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1155
// 

        // axios.get('https://pokeapi.co/api/v2/pokemon/')
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1155')
        .then(res => setPokemonsList(res.data.results))

        axios.get('https://pokeapi.co/api/v2/type/')
            .then(res => {
                setPokemonsTypes(res.data.results)
            })    
    },[])

    const navigate = useNavigate();

    // console.log(pokemonsTypes);
    


    // console.log(pokemonsList);
    // console.log(cardBackground);


        //pagination
        const [currentPage, setCurrentPage] = useState(1);
        const [postsPerPage, setPostsPerPage] = useState(16);
    
        //getCurrentPosts
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
                            //deacuerdo a este calculo realizamos un slice de la respuesta del API con Axios
        const currentPokemons = pokemonsList.slice(indexOfFirstPost, indexOfLastPost); 
    
        // console.log(currentPosts);

        //change page
        const paginate = (pageNumber) => {
        //    alert(pageNumber);
            setCurrentPage(pageNumber);
            //probable error con navigate
            // navigate(`/pokemons`);         
        }

        const searchName = () => {
            navigate(`/pokemons/${nameInput}`)
        }

        const returnLastPage = () => {
            navigate(`/`)
        }


        const searchPokemonType = (pokemonType) =>{
            // alert("buscando")
            // alert(pokemonType)
            if(pokemonType !== ""){
                axios.get(`https://pokeapi.co/api/v2/type/${pokemonType}`)
                    // .then(res => setFilteredPokemons(res.data.pokemon.map(pokemon => pokemon.pokemon.url))) 
                    // .then(res => setPokemonsList(res.data.pokemon.map(pokemon => pokemon.pokemon.url))) 
                    //seteamos la estructura a una estructura similar para que pueda consumir nuevamente
                    //la lista de pokemones
                    .then(res => {
                        setPokemonsList(res.data.pokemon.map(pokemon => pokemon.pokemon))
                        setCurrentPage(1);
                    })
                    // .then(res => setPokemonsList(res.data.pokemon))               
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
                        {/* <option value="">Fliying</option>
                        <option value="">Electric</option>
                        <option value="">Water</option> */}
                        <option value="">Select an option</option>
                        {
                            pokemonsTypes.map((pokemonType, index) => (
                                // <option value={index}>{pokemonType.name}</option> 
                                <option key={index} value={pokemonType.name}>{pokemonType.name}</option> 
                            ))
                        }
                    </select>
                </div>
            </div>

            <ul className='pokemonCard-Container'>
                {
                    // pokemonsList.map(pokemon => (
                    currentPokemons.map(pokemon => (
                    // <li>{pokemon.url}</li>
                                <PokemonCard 
                                //solucion propia pero con condicional
                                    // url={pokemon.url ? pokemon.url : pokemon} 
                                    // key={pokemon.url ? pokemon.url : pokemon}

                                //solucion con map en la peticion de filtrado
                                    url={pokemon.url} 
                                    key={pokemon.url}
                                    // cardBackground={cardBackground}
                                    // cardBackground={background}
                                />
                            
                    ))
                }
            </ul>
            
            <Pagination postsPerPage={postsPerPage} totalPosts={pokemonsList.length} paginate={paginate}/>
            {/* <Pagination postsPerPage={postsPerPage} totalPosts={pokemonsList.length}/> */}

        </div>
    );
};

export default Pokemons;