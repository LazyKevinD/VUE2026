import { useState } from "react"

export default function Inscripcion(agregarMateria){

    /*agregarMateria({
        id: Date.now(),
        ...materia,
        estado_materia: estado_materia === "Acreditada"
    })*/

    const [materia, setMateria] = useState({
        id : "",
        nombre_materia : "",
        descripcion_materia : "",
        estado_materia : "",
        check_especialidad : false,
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("enviando datos del formulario");
        console.log(materia);
    }

    const handleChange = (e) => {

        const {name, value, checked, type} = e.target;

        setMateria({
            ...materia, [name] : type === checked ? checked : value
        });

    }

    return(
        <>
        
            <div>
                Registro de materias para Carga Academica
            </div>

            <div className="container mt-2">
                <form onSubmit={handleSubmit}>
                    <input
                        className="form-control mb-2"
                        type="text"
                        placeholder="Ingrese nombre de materia"
                        name="nombre_materia"
                        value={materia.nombre_materia}
                        onChange={handleChange}
                    />

                    <textarea 
                    className="form-control mb-2"
                    type="text"
                    placeholder="ingresa clave de materia y creditos"
                    name="descripcion_materia"
                    value={materia.descripcion_materia}
                    onChange={handleChange}
                    >
                    </textarea>

                    <select
                    className="form-control mb2"
                    name="estado_materia"
                    value={materia.estado_materia}
                    onChange={handleChange}
                    >
                        <option value="acreditada">Acreditada</option>
                        <option value="pendiente">Pendiente</option>

                    </select>

                    <input 
                        type="checkbox" 
                        id="inputCheck"
                        name="check_especialidad"
                        checked={materia.check_especialidad}
                        onChange={handleChange}    
                    />

                    <label htmlFor="inputCheck">&nbsp; Especialidad</label>

                    <button
                        className="btn btn-success form-control mb-2"
                        type="submit"
                    
                    >Agregar</button>
                    
                </form>
            </div>  

        </>
        
    )
}