import React, { useState } from 'react';
import hunter from '../assets/Images/Hunter.png'
import ligth from '../assets/Images/ligth.png'

const DarkMode = () => {
    const [isNigth, setIsNigth] = useState(false)
    const body = document.body
    if (isNigth){
        body.classList.add('bodyDark')
    }else{
       body.classList.remove('bodyDark') 
    }
    return (
        <div>
            <div><i onClick={()=>setIsNigth(!isNigth)} className={`fa-solid toggle fa-toggle-${isNigth ? 'on' : 'off'}`}></i>
            <img className={isNigth? 'hide' : 'hunter'} src={hunter} alt="" /></div>
            <img className={isNigth? 'hunter' : 'hide'} src={ligth} alt="" />
            
        </div>
    );
};

export default DarkMode;