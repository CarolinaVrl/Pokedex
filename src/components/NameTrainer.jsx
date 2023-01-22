import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import pokebola from '../assets/Images/pokebola.gif';
import imagenes from '../assets/Images/Images'
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeName } from '../store/slice/trainerName.slice';


const NameTrainer = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [text, setText] = useState('')
    const [change, setChange] = useState(true)


    const time = setTimeout(() => {
        setChange(false)
        console.log('5segundos')

    }, 5000)

    const confirm = () => {
        dispatch(changeName(text))
        navigate('/pokedex')
    }
    return (
        <div>
            <div className={change ? 'charge' : 'hide'} >    
            </div>          



            

            <h1>Welcome Trainer</h1>
            <label htmlFor="name">Tu Nombre Entrenador</label>
            <input type="text" id='name' value={text} onChange={e => setText(e.target.value)} />
            <select name="" id="">
                <option value="" >Hombre</option>
                <option value="">Mujer</option>
            </select>
            <button onClick={() => confirm()}>Login!</button>




        </div>
    );
};

export default NameTrainer;