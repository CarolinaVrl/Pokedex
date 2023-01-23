import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import trainerName from '../store/slice/trainerName.slice'
import PokeCard from './PokeCard';
import pokedex_logo from '../assets/Images/image 11.png'
import pokeball from '../assets/Images/Pokeball.png'

const Pokedex = () => {
    const [pokemon, setPokemon] = useState([])
    const [names, setNames] = useState("")
    const [pokemonType, setPokemonType] = useState([])
    
    const navigate = useNavigate()
    const name = useSelector((state)=> state.trainerName)
    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279")
        .then(res=> setPokemon(res.data.results))

        axios.get('https://pokeapi.co/api/v2/type/')
        .then(res => setPokemonType(res.data.results))
        
            
    },[])

    const searchName = ()=>{
        navigate(`/pokeCard/%${names}`)

    }

    const searchLocation = (url) =>{
        axios.get(url).then.res((res)=>{setPokemon(res.data)})
    }

    const [page, setPage] = useState(1)
    const pokemonForPage = 9
    const lastPokemon = page * pokemonForPage
    const firstPokemon = lastPokemon - pokemonForPage
    const pokemonPagined = pokemon.slice(firstPokemon,lastPokemon)
    const allpages = Math.ceil(pokemon.length / pokemonForPage)
    const allNumbers = []
    for (let i=1; i<=allpages;i++){
        allNumbers.push(i)
    }

    return (
        <div>
            <div className='footer-pokedex'> 
            <img className='logo-index' src={pokedex_logo} alt="" />
            <img className='pokeball-index' src={pokeball} alt="" />
            </div>

            <div className='header-welcome'>
            <h3 className='welcomes'>Bienvenido {name},<span className='sub-header'> aprende de el gran mundo Pokemon</span></h3>
            
            <div className='search-box'>
            <input type="text" className='input-search'placeholder='Busca un pokemon' value={names} onChange={e=>setNames(e.target.value)}
             />
             <button className='search-btn' onClick={()=>refresh()}>Buscar</button>
             
            </div>
            {/*<select name="" id="">
                {}
    </select>*/}
            
            {pokemonPagined.map(poke=>(
                <PokeCard
                url={poke.url}
                key={poke.url}
                />
            ))}
            <button onClick={()=>setPage(page-1)} disabled={page===1}>Anterior</button>
            {allNumbers.map(number=>(
                <button onClick={()=>setPage(number)}>{number}</button>
            ))}
            <button onClick={()=>setPage(page+1)} disabled={page === allpages} >Siguiente</button>
            
            </div>
        </div>
    );
};

export default Pokedex;