import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import pokedex_logo from '../assets/Images/image 11.png'
import pokeball from '../assets/Images/Pokeball.png'

const PokeDetails = () => {
    const { id } = useParams()
    const [pokemon, setPokemon] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setPokemon(res.data))
    }, [id])
    return (
        <div>
            <div className='footer-pokedex' >
            <img className='logo-index' src={pokedex_logo} alt="" />
            <img className='pokeball-index' src={pokeball} alt="" />
            </div>
            <div className='bg-poke'>
            <img className='sprite-detail' src={pokemon?.sprites?.other['official-artwork']?.front_default} alt="" />
            </div>
            <div className='id-container'>
            <h4 className='poke-id'># {pokemon.id}</h4>
           
            </div>
            <h4>Peso <span>{pokemon.weight}</span></h4>
            <h4>Altura <span>{pokemon.height}</span></h4>
            <h1>{pokemon.name}</h1>
            <div> Tipos
                {pokemon.types?.map(type => (
                    <div key={type.type.url} >
                        <div>{type.type.name}</div></div>
                ))}

            </div>
            <div>Habilidades
                {pokemon.abilities?.map(type => (
                    <div key={type.ability.url}>
                        <div>{type.ability.name}</div>
                    </div>
                ))}
            </div>
            <hr />
            <h2>Estadisticas <span><hr /></span></h2>
            <div>
                <ul>
                    <li>{pokemon.stats?.[0].stat.name}{pokemon.stats?.[0].base_stat}/150</li>
                    <li>{pokemon.stats?.[1].stat.name}{pokemon.stats?.[1].base_stat}/150</li>
                    <li>{pokemon.stats?.[2].stat.name}{pokemon.stats?.[2].base_stat}/150</li>
                    <li>{pokemon.stats?.[5].stat.name}{pokemon.stats?.[5].base_stat}/150</li>
                </ul>

            </div>
            <div>
                <h2>Movimientos <span><hr /></span>
                </h2>
                {pokemon.moves?.map(move=>(
                    <div key={move.move.url}>
                        <div>{move.move.name}</div>
                    </div>
                ))}
            </div>
            <button onClick={()=>navigate('/pokedex')}>Back!</button>




        </div>
    );
};

export default PokeDetails;