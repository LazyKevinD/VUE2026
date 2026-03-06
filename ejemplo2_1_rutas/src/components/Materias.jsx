import  'react'
import Materia from './Materia'

export default function Materias(materias, quitarMateria) {
  return (
    <div className="mt-5">
        <h2 className='text-center mb-5'> Materias </h2>
        <ul className='list-group'>
            {
                materias.materias.map( (materia) => (
                    <Materia 
                        key={materia.id}
                        materia={materia}
                        quitarMateria={quitarMateria}
                     />
                ) )
            }
            {materias.length===0 && (
                <li className='list-group-item text-center'>
                    No existen materias agregadas
                </li>
            )}
        </ul>
    </div>
  )
}
