import { useState } from "react";
import Materias from "./Materias";

const initialStateMaterias = [
  {
    id: 1,
    nombre_materia: "FP",
    descripcion_materia: "Fundamentos de Programación",
    estado_materia: "Acreditada",
    check_especialidad: false,
  },
  {
    id: 2,
    nombre_materia: "DEVOPS",
    descripcion_materia: "DevOps",
    estado_materia: "Pendiente",
    check_especialidad: true,
  },
];

function Formulario() {
  const [materias, setMaterias] = useState(initialStateMaterias);
  const [materia, setMateria] = useState({
    nombre_materia: "",
    descripcion_materia: "",
    estado_materia: "Pendiente",
    check_especialidad: false,
  });
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!materia.nombre_materia.trim() || !materia.descripcion_materia.trim()) {
      setError(true);
      return;
    }

    const nuevaMateria = {
      id: Date.now(),
      ...materia,
    };

    setMaterias([...materias, nuevaMateria]);
    setMateria({
      nombre_materia: "",
      descripcion_materia: "",
      estado_materia: "Pendiente",
      check_especialidad: false,
    });
    setError(false);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setMateria({
      ...materia,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const quitarMateria = (id) => {
    const newArray = materias.filter((materia) => materia.id !== id);
    setMaterias(newArray);
  };

  return (
    <div className="container mt-4">
      <h2>Formulario de Inscripción</h2>
      {error && <div className="alert alert-danger">Falta información</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre de la materia</label>
          <input
            type="text"
            className="form-control"
            name="nombre_materia"
            value={materia.nombre_materia}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <textarea
            className="form-control"
            name="descripcion_materia"
            value={materia.descripcion_materia}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Estado</label>
          <select
            className="form-control"
            name="estado_materia"
            value={materia.estado_materia}
            onChange={handleChange}
          >
            <option value="Pendiente">Pendiente</option>
            <option value="Acreditada">Acreditada</option>
          </select>
        </div>

        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            name="check_especialidad"
            checked={materia.check_especialidad}
            onChange={handleChange}
          />
          <label className="form-check-label"> Especialidad</label>
        </div>

        <button className="btn btn-primary" type="submit">
          Agregar Materia
        </button>
      </form>

      {/* Lista de materias después del formulario */}
      <Materias materias={materias} quitarMateria={quitarMateria} />
    </div>
  );
}

export default Formulario;
