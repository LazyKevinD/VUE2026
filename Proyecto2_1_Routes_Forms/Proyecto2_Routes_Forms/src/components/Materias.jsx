import Materia from "./Materia";

export default function Materias(materia){
    
    return(
        <>
        
            <div className="mt-5">

                <h3 className="text-center mb-5">Listado de materias agregada</h3>
                <ul className="list-group">
                    {
                        materias.materias.map( (materia) => {

                            <Materia 
                                key={materia.id}
                                materia={materia}
                            />

                        })
                    }
                </ul>

            </div>
        
        </>
    )
}