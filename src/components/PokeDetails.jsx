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
                    {pokemon.moves?.map(move => (
                        <div key={move.move.url}>
                            <div>{move.move.name}</div>
                        </div>
                    ))}
                </div>
                <button onClick={() => navigate('/pokedex')}>Back!</button>




            </div>
        </div>
    );
};

export default PokeDetails;