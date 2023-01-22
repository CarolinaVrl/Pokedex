import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const PokeDetails = () => {
    const {id} = useParams()
    const [pokemon, setPokemon] = useState({})
    useEffect(()=>{},[])
    return (
        <div>
            
        </div>
    );
};

export default PokeDetails;