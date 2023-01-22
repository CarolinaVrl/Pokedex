import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Outlet, Navigate } from 'react-router-dom';
import Pokedex from './Pokedex';

const ProtectRoutes = () => {
    const trainer = useSelector((state) => state.trainerName)
    
    		// Aquí va la condición. Puede ser una condición de cualquier tipo. Lo que 
		// Importa es que valide si el usuario está loggeado o no
        if(trainer !== ''){
            return   <Outlet /> 
        } else { 
            return <Navigate to='/' />
        }                     // Aquí le debemos decir la ruta a la que queremos llevar
                           // al usuario si no está autenticado
};

export default ProtectRoutes;