/* eslint-disable no-unused-vars */
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Formulario from './components/Formulario';
import Login from './components/Login';
import Inicio from './components/Inicio';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
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

      <div className="container mb-2">
        <h1 className="my-5">Formulario de Inscripción</h1>
      </div>

      <div className="card">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="login" element={<Login />} />
          <Route path="formulario_registro" element={<Formulario />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
