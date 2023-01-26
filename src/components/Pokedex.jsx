import axios from 'axios';
import React from 'react';

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import trainerName from '../store/slice/trainerName.slice'
import PokeCard from './PokeCard';
import pokedex_logo from '../assets/Images/image 11.png'
import pokeball from '../assets/Images/Pokeball.png'
import pikachu from '../assets/Images/Pikachu.png'


const Pokedex = () => {
    const [pokemon, setPokemon] = useState([])
    const [names, setNames] = useState("")
    const [pokemonType, setPokemonType] = useState([])

    const [pokemonForPage, setPokemonForPage] = useState(9)
    const [number, setNumber] = useState("")

    const navigate = useNavigate()
    const name = useSelector((state) => state.trainerName)
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279")
            .then(res => setPokemon(res.data.results))
            .catch(error => console.error(error.response?.data));
    }, [])
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/type/`)
            .then(res => (setPokemonType(res.data.results)))
            .catch(error => console.error(error.response?.data));
    }, [])

    const searchName = () => {
        navigate(`/pokeCard/${names.toLocaleLowerCase()}`)

    }


    const searchTypePokemon = (typeID) => {
        axios.get(`https://pokeapi.co/api/v2/type/${typeID}`)
            .then(res => setPokemon(res.data.pokemon.map(poke => poke.pokemon)))
            .catch(error => console.error(error.response?.data));
       
    }


    const paginatedPokemon = () => {
        setPokemonForPage(number)
    }

    //    Paginated 
    const [page, setPage] = useState(1)

    const lastPokemon = page * pokemonForPage
    const firstPokemon = lastPokemon - pokemonForPage
    const pokemonPagined = pokemon?.slice(firstPokemon, lastPokemon)
    const allpages = Math.ceil(pokemon?.length / pokemonForPage)
    const allNumbers = []
    for (let i = 1; i <= allpages; i++) {
        allNumbers.push(i)
    }
    // paginated buttons
    const [inputPage, setInputPage] = useState('')
    const firstbutton = page - 1
    const lastbutton = firstbutton + 5
    const buttonsFive = allNumbers.slice(firstbutton, lastbutton)



    return (
        <div>
            <div className='footer-pokedex'>
                <img className='logo-index' src={pokedex_logo} alt="" />
                <img className='pokeball-index' src={pokeball} alt="" />
            </div>

            <div className='header-welcome'>
                <h3 className='welcomes'>Bienvenido {name},<span className='sub-header'> aprende de el gran mundo Pokemon</span></h3>

                <div className='search-box'>
                    <input type="text" className='input-search' placeholder='Busca un pokemon' value={names} onChange={e => setNames(e.target.value)}
                    />
                    <button className='search-btn' onClick={() => searchName()}>Buscar</button>
                    <div className='select-box'>
                        <select className='select-btn' name="" id="" onChange={e => { searchTypePokemon(e.target.value) }}>
                            <option className='option'  value={pokemon}>Selecciona el Tipo del pokemon</option>
                            
                            {pokemonType?.map((type) => (
                                <option className='option' value={type.name} key={type.url} >{type.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='paginated-box'>
                    <input type='text' inputMode='numeric' placeholder='Pokemon por página' value={number} className='inputPaginad' onChange={e => setNumber(e.target.value)} />
                    <button className='btn-paginated' onClick={() => paginatedPokemon()}>Paginar</button>
                </div>


                {pokemonPagined?.map((poke) => (
                    <PokeCard
                        url={poke.url}
                        key={poke.url}
                    />
                ))}





            </div>
            <div className='paginatedButton'>
                <button onClick={() => setPage(page - 1)} disabled={page === 1}><i className="fa-solid fa-caret-left"></i></button>
                {buttonsFive?.map(number => (
                    <button key={number} onClick={() => setPage(number)}>{number}</button>
                ))}
                <button onClick={() => setPage(page + 1)} disabled={page === allpages} ><i className="fa-solid fa-caret-right"></i></button>

            </div>
            <div className='input_page_name'>
                
                <input className='input_page' type="text" placeholder={`0-${allpages}`} value={inputPage} onChange={e => setInputPage(e.target.value)} /> <button className='seacrh_input_name' onClick={() => setPage(inputPage)}>Buscar!</button>
                <img className='input_pag_pikachu' src={pikachu} alt="" />
            </div>
            



        </div>
    );
};

export default Pokedex;