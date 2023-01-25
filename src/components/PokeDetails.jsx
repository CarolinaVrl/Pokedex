import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import pokedex_logo from '../assets/Images/image 11.png'
import pokeball from '../assets/Images/Pokeball.png'
import pokedibujo from '../assets/Images/pokedibujos.png'

const PokeDetails = () => {
    const { id } = useParams()
    const [pokemon, setPokemon] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setPokemon(res.data))
    }, [id])

    const movimientsPokemon =  pokemon.moves?.slice(0,20)
    
    return (
        <div>
            <div className='footer-pokedex' >
                <img className='logo-index' src={pokedex_logo} alt="" />
                <img className='pokeball-index' src={pokeball} alt="" />
            </div>
            <div className='content-detail'>

                <div className='bg-poke'>
                    <img className='sprite-detail' src={pokemon?.sprites?.other['official-artwork']?.front_default} alt="" />
                </div>
                <div className='id-container'>
                    <h4 className='poke-id'># {pokemon.id}</h4>

                </div>
                <div className='hr-container'>
                    <hr />
                    <h1>{pokemon.name}</h1>
                    <hr />
                </div>
                <div className='weight'>
                    <h4>Peso</h4>
                    <h4>Altura </h4>
                </div>
                <div className='weight-detail'>
                    <span>{pokemon.weight}</span>
                    <span>{pokemon.height}</span>
                </div>
                <div className='type-habilities'>
                    <h4>Tipo</h4>
                    <h4>Habilidades</h4>
                </div>
                <div className='content-type'>
                    {pokemon.types?.map(type => (
                        <div key={type.type.url} >
                            <div className='type-name'>{type.type.name}</div></div>
                    ))}
                    {pokemon.abilities?.map(type => (
                        <div key={type.ability.url}>
                            <div className='type-name'>{type.ability.name}</div>
                        </div>
                    ))}
                </div>
                <div className='hr-stats'>
                    <h4>Stats</h4>
                    <hr />
                    <img className='poke-fill' src={pokedibujo} alt="" />
                </div>
                

                <div className="stats">
                    
                    <div className="bars-containers">
                        {pokemon.stats?.map((pokemonStats) => (
                            <div key={pokemonStats.stat.name} className="bar-stat">
                                <h3>{pokemonStats.stat.name}</h3>
                                <div className="progress-bar-container">
                                    <div
                                        className="progress-bar-status"
                                        style={{ width: `${pokemonStats.base_stat * 0.5}%` }}
                                    ></div>
                                </div>
                                <p>{pokemonStats.base_stat}</p>
                            </div>
                        ))}
                    </div>
                </div>
               
                




            </div>
            <div className='movements'>
                    <div className='hr-footer'>
                    <h2>Movements </h2>
                    <hr />
                    <img className='poke-fill' src={pokedibujo} alt="" />
                    </div>
                    {movimientsPokemon?.map(move => (
                        <div className='move-box' key={move.move.url}>
                            <div className='move-content'>{move.move.name}</div>
                        </div>
                    ))}
                </div>
                <button className='btn-back' onClick={() => navigate('/pokedex')}>Back!</button>
        </div>
    );
};

export default PokeDetails;