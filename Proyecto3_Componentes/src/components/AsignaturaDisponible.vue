<script setup>
defineProps({
    nombre: String,
    id: Number,
    creditos: Number,
    especialidad: {tipo: String, default: 'Especialidad'}
})
</script>

<template>
    <div class="card">
        <div class="card-body">
            <h2 class="card-title">
                {{ nombre }} - {{ creditos }}
            </h2>
            <p>{{ especialidad }}</p>
        </div>

    <!-- <button @click="$emit('agregarMateria', id)" class="btn btn-sm btn-success">
            Agregar
        </button>
    -->
        <button @click="$emit('agregarLista', nombre)" class="btn btn-sm btn-success">
            Agregar a Lista
        </button>

    </div>
</template>

<style>
</style>