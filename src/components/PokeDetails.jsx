import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const PokeDetails = () => {
    const { id } = useParams()
    const [pokemon, setPokemon] = useState({})
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setPokemon(res.data))
    }, [id])
    return (
        <div>
            <img src={pokemon?.sprites?.other['official-artwork']?.front_default} alt="" />
            <h4>{pokemon.id}</h4>
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




        </div>
    );
};

export default PokeDetails;