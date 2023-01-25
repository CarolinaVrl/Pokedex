import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import DarkMode from './components/DarkMode'

import NameTrainer from './components/NameTrainer'
import PokeCard from './components/PokeCard'
import PokeDetails from './components/PokeDetails'
import Pokedex from './components/Pokedex'
import ProtectRoutes from './components/ProtectRoutes'



function App() {


  return (
    <HashRouter>
     <DarkMode/>
      <Routes>
        
        <Route path='/' element={<NameTrainer />} />
        <Route element={<ProtectRoutes />}>
          <Route path='/pokedex' element={<Pokedex/>}/>
          <Route path='/pokeCard' element={<PokeCard/>}/>
          <Route path='/pokeCard/:id' element={<PokeDetails/>}/>

          

        </Route>
      </Routes>

    </HashRouter>
  )
}

export default App
