import {Link} from "react-router-dom";

export default function Inicio(){
    return(
        <div>
            <h2>Menu principal</h2>
            <Link to="login" className="btn btn-outline-success">Iniciar Sesion</Link>
            <Link to="inscripcion" className="btn btn-outline-primary">Registrar Tus Materias</Link>
        </div>
    )
    
}