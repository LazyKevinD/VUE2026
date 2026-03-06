/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function Materia({materia, quitarMateria}) {
    const {nombre_materia, descripcion_materia, estado_materia, check_especialidad, id} = materia;
  return (
    <li className='list-group-item'>
        <div className='d-flex justify-content-between align-items-start'>
            <div>
                <h3>
                    {nombre_materia}
                </h3>
                <p>
                    {descripcion_materia}
                </p>
                <div className='d-flex gap-2'>
                <button
                            onClick={ () => quitarMateria(id) }
                       
                            className="btn btn-sm btn-danger"
                        >
                            Eliminar
                        </button>
                </div>
            </div>

            <span className='badge bg-primary rounden-pill'>
                {check_especialidad && "Especialidad"}
            </span>

        </div>
    </li>
  )
}
