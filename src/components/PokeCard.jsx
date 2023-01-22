import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const PokeCard = ({ url }) => {
    const [pokemon, setPokemon] = useState({})


    useEffect(() => {
        axios.get(`${url}`)
            .then(res => setPokemon(res.data))

    }, [])






    return (
        <div> 
            <img src={pokemon.sprites?.front_default} alt="" />
            <h1>{pokemon.name}</h1>
            <h3>{pokemon.types?.map(type => (
                <ul key = { type.type.url }>
                    <li>{ type.type.name }</li>
                </ul>
                
            ))}</h3>
            <h3>Tipo</h3>
            <ul>
                <li>{pokemon.stats?.[0].stat.name}{pokemon.stats?.[0].base_stat}</li>
                <li>{pokemon.stats?.[1].stat.name}{pokemon.stats?.[1].base_stat}</li>
                <li>{pokemon.stats?.[2].stat.name}{pokemon.stats?.[2].base_stat}</li>
                <li>{pokemon.stats?.[5].stat.name}{pokemon.stats?.[5].base_stat}</li>
            </ul>


        </div>
    );
};

export default PokeCard;