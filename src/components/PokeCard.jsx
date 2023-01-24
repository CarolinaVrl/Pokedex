import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import colours from '../assets/Images/colours'

const PokeCard = ({ url }) => {
    const [pokemon, setPokemon] = useState({})
    const navigate = useNavigate()
    const [colorPokemon, setColorPokemon] = useState('')


    useEffect(() => {
        axios.get(`${url}`)
            .then(res => setPokemon(res.data))

    }, [])

    







    return (

        <div className='content-card'>
            <div className='pokecard' onClick={() => navigate(`/pokeCard/${pokemon.id}`)}>
                <div className='header-card' style={{background:{colorPokemon}}}>
                    <img src={pokemon.sprites?.other['official-artwork']?.front_default} alt="" />
                </div>
                <h1>{pokemon.name}</h1>
                <h3 className='text'>{pokemon.types?.map(type => (
                    <ul className='list-pokemons' key={type.type.url}>
                        <li>{type.type.name}</li>
                    </ul>

                ))}</h3>
                <h3 className='type'>Tipo</h3>
                <hr />
                <ul className='list-pokemon'>
                    <li>{pokemon.stats?.[0].stat.name} <br />  {pokemon.stats?.[0].base_stat}</li>
                    <li>{pokemon.stats?.[1].stat.name} <br /> {pokemon.stats?.[1].base_stat}</li>
                    <li>{pokemon.stats?.[2].stat.name} <br /> {pokemon.stats?.[2].base_stat}</li>
                    <li>{pokemon.stats?.[5].stat.name} <br /> {pokemon.stats?.[5].base_stat}</li>
                </ul>

            </div>


        </div>

    );
};

export default PokeCard;