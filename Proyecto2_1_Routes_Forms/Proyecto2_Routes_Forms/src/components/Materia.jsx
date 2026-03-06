
export default function Materia({materia}){

    const {id, nombre_materia, descripcion_materia, estado_materia, check_especialidad} = materia;

    return(
        <>
            <li className="list-group-item">
                <div className="d-flex" justify-content-between aling-items-start>
                    <div>
                        <h2>{nombre_materia}</h2>
                        <p>{descripcion_materia}</p>
                        <div className="d-flex gap-2">
                            <button
                                className="btn btn-sm btn-danger"
                                onClick={() => quitarMateria(id)}
                            > X </button>
                        </div>
                        <div
                            className="d-flex gap-2">
                                <span className="badge bg-primary rounded-pill">
                                    {check_especialidad && "Especialidad"}
                                </span> 
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}