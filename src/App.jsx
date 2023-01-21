import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

import NameTrainer from './components/NameTrainer'
import Pokedex from './components/Pokedex'
import ProtectRoutes from './components/ProtectRoutes'



function App() {


  return (
    <HashRouter>
      <Routes>
        
        <Route path='/' element={<NameTrainer />} />
        <Route element={<ProtectRoutes />}>
          <Route path='/pokedex' element={<Pokedex/>}/>

        </Route>
      </Routes>

    </HashRouter>
  )
}

export default App
