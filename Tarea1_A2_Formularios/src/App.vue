<script setup>
import { ref } from 'vue'

// Lista donde se guardarán los alumnos registrados
const alumnos = ref([])

// Modelo del formulario
const nuevoAlumno = ref({
  numeroControl: '',
  nombre: '',
  edad: '',
  semestre: '',
  carrera: '',
  materias: [],
  especialidad: '',
  actividades: [],
  correo: '',
  telefono: ''
})

// Opciones
const materiasDisponibles = [
  'Topicos Web',
  'POO',
  'DEVOPS',
  'Base de Datos'
]

const actividadesDisponibles = [
  'Futbol',
  'Basquetbol',
  'Danza',
  'Musica'
]

// Función para registrar alumno
const registrarAlumno = () => {

  alumnos.value.push({ ...nuevoAlumno.value })

  // Limpiar formulario
  nuevoAlumno.value = {
    numeroControl: '',
    nombre: '',
    edad: '',
    semestre: '',
    carrera: '',
    materias: [],
    especialidad: '',
    actividades: [],
    correo: '',
    telefono: ''
  }
}
</script>

<template>
<div class="container mt-5">
  <div class="card shadow p-4 mb-5 bg-white rounded">
    <h2 class="text-center mb-4">Formulario de Inscripción</h2>

    <form @submit.prevent="registrarAlumno">

      <div class="row mb-3">
        <div class="col-md-6">
          <input v-model="nuevoAlumno.numeroControl" 
                 class="form-control"
                 placeholder="Número de Control" required>
        </div>

        <div class="col-md-6">
          <input v-model="nuevoAlumno.nombre" 
                 class="form-control"
                 placeholder="Nombre Completo" required>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-md-4">
          <input v-model="nuevoAlumno.edad" 
                 type="number" 
                 class="form-control"
                 placeholder="Edad" required>
        </div>

        <div class="col-md-4">
          <input v-model="nuevoAlumno.semestre" 
                 class="form-control"
                 placeholder="Semestre" required>
        </div>

        <div class="col-md-4">
          <input v-model="nuevoAlumno.carrera" 
                 class="form-control"
                 placeholder="Carrera" required>
        </div>
      </div>

      <!-- Materias -->
      <div class="mb-3">
        <label class="form-label fw-bold">Materias</label>
        <div class="form-check" 
             v-for="materia in materiasDisponibles" 
             :key="materia">
          <input class="form-check-input"
                 type="checkbox"
                 :value="materia"
                 v-model="nuevoAlumno.materias">
          <label class="form-check-label">
            {{ materia }}
          </label>
        </div>
      </div>

      <!-- Especialidad -->
      <div class="mb-3">
        <label class="form-label fw-bold">Especialidad</label>
        <select v-model="nuevoAlumno.especialidad"
                class="form-select">
          <option disabled value="">Seleccione especialidad</option>
          <option>Tecnologias WEB</option>
          <option>Redes</option>
          <option>Software</option>
        </select>
      </div>

      <!-- Actividades -->
      <div class="mb-3">
        <label class="form-label fw-bold">Actividades Extraescolares</label>
        <div class="form-check"
             v-for="actividad in actividadesDisponibles"
             :key="actividad">
          <input class="form-check-input"
                 type="checkbox"
                 :value="actividad"
                 v-model="nuevoAlumno.actividades">
          <label class="form-check-label">
            {{ actividad }}
          </label>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-md-6">
          <input v-model="nuevoAlumno.correo" 
                 type="email" 
                 class="form-control"
                 placeholder="Correo">
        </div>

        <div class="col-md-6">
          <input v-model="nuevoAlumno.telefono" 
                 class="form-control"
                 placeholder="Teléfono">
        </div>
      </div>

      <div class="text-center">
        <button type="submit" class="btn btn-primary">
          Registrar Alumno
        </button>
      </div>

    </form>
  </div>


  <!-- TABLA -->
  <div class="card shadow p-4 bg-white rounded">
    <h2 class="text-center mb-4">Listado de Alumnos</h2>

    <table class="table table-striped table-hover table-bordered">
      <thead class="table-dark text-center">
        <tr>
          <th>No. Control</th>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Semestre</th>
          <th>Carrera</th>
          <th>Materias</th>
          <th>Especialidad</th>
          <th>Actividades</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(alumno, index) in alumnos" :key="index">
          <td>{{ alumno.numeroControl }}</td>
          <td>{{ alumno.nombre }}</td>
          <td>{{ alumno.edad }}</td>
          <td>{{ alumno.semestre }}</td>
          <td>{{ alumno.carrera }}</td>
          <td>{{ alumno.materias.join(', ') }}</td>
          <td>{{ alumno.especialidad }}</td>
          <td>{{ alumno.actividades.join(', ') }}</td>
        </tr>
      </tbody>
    </table>

    <div class="text-end mt-3">
      <span class="badge bg-success">
        Total de alumnos: {{ alumnos.length }}
      </span>
    </div>

  </div>

</div>

</template>
