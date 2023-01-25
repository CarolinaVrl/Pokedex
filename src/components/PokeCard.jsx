import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import colours from '../assets/Images/colours'
import borderColor from '../assets/Images/borderColor';

const PokeCard = ({ url }) => {
    const [pokemon, setPokemon] = useState({})
    const navigate = useNavigate()



    useEffect(() => {
        axios.get(`${url}`)
            .then(res => setPokemon(res.data))

    }, [])

    const backgroundSelect = colours[pokemon.types?.[0].type.name]
    const bordercolor = borderColor[pokemon.types?.[0].type.name]
    
   








    return (
        <div className='cards' >
            <div className='content-card' style={{ border: `5px solid ${bordercolor}` }}  >
                <div onClick={() => navigate(`/pokeCard/${pokemon.id}`)}>
                    <div className='header-card' style={{ background: backgroundSelect }}>

                        <img className='img-pokecard' src={pokemon.sprites?.other['official-artwork']?.front_default} alt="" />
                    </div>
                    <div className='card_text'>
                        <h1 className='name-card' style={{color: bordercolor}}>{pokemon.name?.[0].toUpperCase()+pokemon.name?.substring(1)}</h1>
                        <h3 className='text'>{pokemon.types?.map(type => (
                            <ul className='list-pokemons' key={type.type.url}>
                                <li>{type.type.name}</li>
                            </ul>

                        ))}</h3>
                        <h3 className='type'  >Tipo</h3>
                        <hr className='line-stats' />
                        <ul className='list-pokemon'>
                            <li>{pokemon.stats?.[0].stat.name.toUpperCase()}  <b style={{color:bordercolor}}>   {pokemon.stats?.[0].base_stat} </b> </li>
                            <li>{pokemon.stats?.[1].stat.name.toUpperCase()} <b style={{color:bordercolor}}> {pokemon.stats?.[1].base_stat} </b> </li>
                            <li>{pokemon.stats?.[2].stat.name.toUpperCase()} <b style={{color:bordercolor}}>{pokemon.stats?.[2].base_stat} </b> </li>
                            <li>{pokemon.stats?.[5].stat.name.toUpperCase()}  <b style={{color:bordercolor}}>  {pokemon.stats?.[5].base_stat} </b>  </li>
                        </ul>
                    </div>


                </div>


            </div>

        </div>


    );
};

export default PokeCard;