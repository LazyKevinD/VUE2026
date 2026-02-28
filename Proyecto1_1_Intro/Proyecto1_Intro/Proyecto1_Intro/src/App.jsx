import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contador from "./components/Contador.jsx"//Importamos el contador que creamos en la carpeta 
import CargaAcademica from "./components/CargaAcademica.jsx"//Importamos el componente de carga academica que creamos en la carpeta

function App() {
  const [count, setCount] = useState(0)
  //

  return (
    <>
      <Contador />

      <CargaAcademica />
    </>
  )
}

export default App
