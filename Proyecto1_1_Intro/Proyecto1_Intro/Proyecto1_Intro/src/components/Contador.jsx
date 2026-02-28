import {useState} from 'react';

const Contador = () => {

    const [cantidad, setCantidad] = useState(0);

    const [materiasDisponibles, setMateriasDisponibles] = useState([
        "FP",
        "POO",
        "BD",
        "WEB",
        "DEVOPS",
    ]);

    const [calificaciones, setCalificaciones] = useState([100, 80, 50, 0, 90]);

    const alumno = {
        numControl : '01',
        nombre : 'Luke Skywalker',
        materiaAcreditadas : ['FP', 'POO'],
        promedioGeneral : 78
    }

    const alumnos = [
        {
            numControl : '01',
            nombre : 'Luke Skywalker',
            materiaAcreditadas : ['FP', 'POO'],
            promedioGeneral : 78
        },
        {
            numControl : '02',
            nombre : 'Leia Organa',
            materiaAcreditadas : ['BD', 'FP'],
            promedioGeneral : 97
        },
        {
            numControl : '03',
            nombre : 'Han Solo',
            materiaAcreditadas : ['DEVOPS', 'WEB'],
            promedioGeneral : 92
        }
    ];

    const [materias, agregarMateria] = useState("-");

    const [texto, setTexto] = useState("");

    const cambiarTexto = (event) => {
        setTexto(event.target.value);
    }

    return(
        <div>
            <h3>Evaluaciones</h3>
            <p>Cantidad de evaluaciones: {cantidad}</p>

            <button onClick={() => setCantidad(cantidad + 1)}>Agregar evaluación</button>

            <hr />

            <h3>Materias Disponibles</h3>

            <ul>
                {materiasDisponibles.map((item, index) => (
                    <li key={index}>{index} - {item}</li>
                ))}
            </ul>

            <hr />

            <h3>Materias ACREDITADAS</h3>
            <ul>
                {
                    calificaciones.map((calificacion, index) => {
                        if(calificacion >= 60){
                            return <li key={index}>{calificacion} - Acreditada</li>
                        } 
                    })
                }
            </ul>

            <hr />
            <h3>Listado de Alumnos</h3>
            <h5>Numero de Control: {alumno.numControl}</h5>
            <h5>Nombre: {alumno.nombre}</h5>
            <h5>Materias Acreditadas: {alumno.materiaAcreditadas.join(', ')}</h5>
            <h5>Promedio General: {alumno.promedioGeneral}</h5>

            <hr />
            <h5>Ejercicio 1: Mostrar el listado de materias del alumno</h5>
            <h5>Ejercicio 2: Mostrar el listado de ALUMNOS</h5>
            <h5>Ejercicio 3: Mostrar solo los ALUMNOS con primerdio de 90</h5>
            <h5>Ejercicio 4: Mostrar el listado del ejercicio 2 en una tabla con BOOSTRAP</h5>
            <hr />

            <h3>Ejercicio 1</h3>
            <ul>
                {alumnos.map((alumno, index) => (
                    <li key={index}>{alumno.nombre} - {alumno.materiaAcreditadas.join(', ')}</li>
                ))}
            </ul>

            <hr />

            <h3>Ejercicio 2</h3>
            <ul>
                {alumnos.map((alumno, index) => (
                    <li key={index}>{alumno.nombre}</li>
                ))}
            </ul>

            <hr />

            <h3>Ejercicio 3</h3>
            <ul>
                {alumnos.map((alumno, index) => {
                    if(alumno.promedioGeneral >= 90){
                        return <li key={index}>{alumno.nombre} - {alumno.promedioGeneral}</li>
                    }
                })}
            </ul>

            <hr />

            <h3>Ejercicio 4</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Numero de Control</th>
                        <th>Nombre</th>
                        <th>Materias Acreditadas</th>
                        <th>Promedio General</th>
                    </tr>
                </thead>
                <tbody>
                    {alumnos.map((alumno, index) => (
                        <tr key={index}>
                            <td>{alumno.numControl}</td>
                            <td>{alumno.nombre}</td>
                            <td>{alumno.materiaAcreditadas.join(', ')}</td>
                            <td>{alumno.promedioGeneral}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            <span>Ingresa nombre de ASIGNATURA</span>
            <input type="text" value={texto} onChange={cambiarTexto} />
            <p>Asignatura escrita: {texto} </p>


        </div>
    ); 
}

export default Contador;