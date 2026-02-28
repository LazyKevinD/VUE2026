<script setup>
import ButtonCounter from './components/ButtonCounter.vue';
import AsignaturaDisponible from './components/AsignaturaDisponible.vue';
import { ref } from 'vue';

const materias = [
  { id: 1, nombre: 'Topicos Web', creditos: 5, especialidad: 'Tecnologias WEB' },
  { id: 2, nombre: 'POO', creditos: 6, especialidad: 'Comun' },
  { id: 3, nombre: 'DEVOPS', creditos: 4, especialidad: 'Tecnologias WEB' }
];

let materias2 = ref([]);

let cargaActual = ref(0);
const agregarMateria = (nombre) => {
  cargaActual.value++;
  materias2.push(nombre);
  console.log(`Se ha agregado la materia: ${nombre}`);
};
</script>

<template>
  <h3>COMPONENTES</h3>
  <ButtonCounter />
  <ButtonCounter />
  <ButtonCounter />
  <ButtonCounter />
  <hr> 

  <AsignaturaDisponible 
    style="display: inline-block;"
    v-for="materia in materias"
    :key="materia.id"
    :nombre="materia.nombre"
    :creditos="materia.creditos"
    :especialidad="materia.especialidad"
    @agregarLista="agregarMateria(materia.nombre)"
  />

  <hr>
  <h2>Total de Asignaturas Cargadas: {{ cargaActual }}</h2>
  <hr>
  <h2>Materias:</h2>

  <ul>
    <li v-for="(materia, index) in materias2" :key="index">
      {{ materia }}
    </li>
  </ul>

  <hr>




</template>

<style scoped></style>


