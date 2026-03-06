import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './components/Login'
import Inicio from './components/Inicio'
import Inscripcion from './components/Inscripcion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='login' element={<Login />} />
          <Route path='inscripcion' element={<Inscripcion />} />
        </Routes>
        </BrowserRouter>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
