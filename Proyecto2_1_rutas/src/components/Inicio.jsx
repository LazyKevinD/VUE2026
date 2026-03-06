/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

export default function Inicio() {
  return (
    <div>
        <h3>Dashboard Principal</h3>
        <Link to="login" className='btn btn-outline-success'>Iniciar Sesion</Link>
        <Link to="formulario_registro" className='btn btn-outline-primary'> Registrate</Link>

    </div>
  )
}
