import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import pokebola from '../assets/Images/pokebola.gif';
import imagenes from '../assets/Images/Images'
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeName } from '../store/slice/trainerName.slice';
import pokedex_logo from '../assets/Images/image 11.png'
import pokeball from '../assets/Images/Pokeball.png'

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
        <div className='login-container'>
            {/*<div className={change ? 'charge' : 'hide'} >    
            </div>*/}       

            <img className='logo' src={pokedex_logo} alt="" />

            

            <h1 className='welcome'>¡Hola Entrenador!</h1>
            <label className='sub-title' htmlFor="name">Para poder comezar dame tu nombre</label>
            <div className='button-section'>
            <input type="text" id='name' placeholder='Tu nombre...' value={text} onChange={e => setText(e.target.value)} />
            {/*<select name="" id="">
                <option value="" >Hombre</option>
                <option value="">Mujer</option>
        </select>*/}
            <button className='submit-button' onClick={() => confirm()}>Comenzar</button>
            </div>

        
            <div className='footer-red'> 
            <img className='pokeball' src={pokeball} alt="" />
            </div>
        

        </div>
    );
};

export default NameTrainer;