import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import pokebola from '../assets/Images/pokebola.gif';


const NameTrainer = () => {
    const [trainer, setTrainer] = useState('')
    const [change, setChange] = useState(true)

    const time = setTimeout(()=>{
        setChange(false)

    },5000)
    return (
        <div>
            <div className={change ? 'charge' : 'hide'} >



            </div>
            <h1>Welcome Trainer</h1>
            <input type="text" value={trainer} onChange={e => setTrainer(e.target.value)} />
        </div>
    );
};

export default NameTrainer;