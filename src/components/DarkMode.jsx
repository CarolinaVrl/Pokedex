import React, { useState } from 'react';

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
            <div><i style={{fontSize:`20px`}} onClick={()=>setIsNigth(!isNigth)} className={`fa-solid fa-toggle-${isNigth ? 'on' : 'off'}`}></i></div>
            
        </div>
    );
};

export default DarkMode;