<script setup>

import { ref, computed } from 'vue'; 

let nombredeUsuario = 'Jorge'
const colorSesion = 'color:blue; font-size: 25px; font-weight: bold;'
let tiempoSesion = 10
let tiempo = 2
let alumnos = ['Jorge', 'Maria', 'Pedro', 'Ana']
let materias = [
  {
    nombre: 'POO',
    semestre: 2,
    especialidad: true,
  },
  {
    nombre: 'WEB',
    semestre: 3,
    especialidad: true,
  },
  {
    nombre: 'REDES',
    semestre: 4,
    especialidad: false,
  },
]

let actividadExtaescolar = {
  nombre: 'Deportes',
  creditos: 3,
  semestre: 4,
}

//-------- EVENTOS -----------
const agregarMateria = () => {
  alert('Materia agregada con exito')
  console.log('Materia agregada con exito')
}

const agregarMateria2 = (nombre) => {
  //alert("Materia agregada con exito");
  console.log('Materia ' + nombre + ' agregada con exito')
}

//--------------------------------- VARIABLES REACTIVAS -------------------------------
//let contadorEvaluaciones = 0;//ESTO NO ES UNA VARIABLE REACTIVA

let contadorEvaluaciones = ref(0);

const agregarEvaluacion = () =>{
  //contadorEvaluaciones++;
  contadorEvaluaciones.value++;
  console.log(contadorEvaluaciones);
}

const eliminarEvaluacion = () =>{
  //contadorEvaluaciones++;
  contadorEvaluaciones.value--;
  console.log(contadorEvaluaciones);
}

const restablecerEvaluacion = () =>{
  //contadorEvaluaciones++;
  contadorEvaluaciones.value = 0;
  console.log(contadorEvaluaciones);
}

//------------------------------ PROPIEDADES COMPUTADAS O CALCULADAS ------------------------------
/*
  NEGRO --> 0 o menos
  VERDE --> entre 1 y 10
  ROJO --> 11 o mas
*/

const estiloContadoresEvaluaciones = computed(() => {
  if (contadorEvaluaciones.value == 0) 
  return 'negro'
  return contadorEvaluaciones.value < 10 ? 'verde' : 'rojo';
});

</script>

<template>
  <h1>Practicas VUE</h1>
  <hr />
  <h3>Interpolacion de valores</h3>

  <p>Bienvenido {{ nombredeUsuario }}</p>

  <h3>Atributos Enlazados - UTILIZANDO LA DIRECTICA</h3>
  <p v-bind:style="colorSesion">Inicio de sesion: Miercoles 11 de febrero de 2026</p>
  <p :style="colorSesion">Inicio de sesion: Miercoles 11 de febrero de 2026</p>
  <p>{{ tiempoSesion > 5 ? 'Tiempo de sesion por terminar' : 'Sesion vigente' }}</p>

  <h3>DIRECTIVAS DE CONTROL</h3>
  <h3>DIRECTIVA IF-THEN-ELSE v-if</h3>

  <h4 v-if="tiempo > 10">Tiempo de sesion actual: Excedido</h4>
  <h4 v-else-if="tiempo <= 0">NO se ha iniciado sesion</h4>
  <h4 v-else>Tiempo de sesion: Normal</h4>

  <h3>DIRECTIVA FOR v-for</h3>

  <span>Listado de Alumnos</span>
  <ol>
    <li v-for="(alumno, indice) in alumnos" :key="indice">{{ alumno }}</li>
  </ol>

  <span>Listado de Materias</span>
  <ol>
    <li v-for="(materia, indice) in materias" :key="indice">
      {{ materia.nombre }} - Semestre: {{ materia.semestre }} - Especialidad:
      {{ materia.especialidad ? 'Sí' : 'No' }}
    </li>
  </ol>

  <span>Actividad Extraescolar</span>
  <p>Nombre: {{ actividadExtaescolar }}</p>
  <ul>
    <li v-for="(valor, clave) in actividadExtaescolar">{{ clave }} - {{ valor }}</li>
  </ul>

  <span>Solo materias de especialidad</span>

  <li v-for="(materia, indice) in materias" :key="indice">
    <p v-if="materia.especialidad">{{ materia.nombre }} - Semestre: {{ materia.semestre }}</p>
  </li>

  <template v-for="materia in materias" :key="materia.especialidad">
    <li v-if="materia.especialidad">{{ materia.nombre }} - Semestre: {{ materia.semestre }}</li>
  </template>

  <h3>DIRECTICA EVENTOS v-on</h3>
  <hr>
  <button v-on:click="agregarMateria" class="boton">AGREGAR</button>

  <button v-on:click="agregarMateria2('DEVOPS')">AGREGAR</button>
  <button @:click="agregarMateria2('DEVOPS')">AGREGAR</button>

  <hr>

  <h3>VARIABLES REACTIVAS</h3>
  <h2>Cantidad EVALUACIONES: {{contadorEvaluaciones}} </h2>
  <button @:click="agregarEvaluacion">Agregar Evaluacion</button>
  
  <button @:click="eliminarEvaluacion">Eliminar Evaluacion</button>
  
  <button @:click="restablecerEvaluacion">Restablecer Evaluacion</button>

  <hr>

  <h3>PROPIEDADES COMPUTADAS O CALCULADAS</h3>
  <h2>Cantidad de EVALUACIONES:
    <span :class="estiloContadoresEvaluaciones">{{ contadorEvaluaciones }}</span>
  </h2>

  <button @:click="agregarEvaluacion" class="btn btn-success"> + </button>
  <button @:click="eliminarEvaluacion" class="btn btn-danger"> - </button>
  <button @:click="restablecerEvaluacion" class="btn btn-warning"> 0 </button>

</template>

<style scoped>
.boton {
  color: purple;
}

.negro{color: black;}
.verde{color: green;}
.rojo{color: red;}
</style>