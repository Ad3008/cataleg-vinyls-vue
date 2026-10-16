<script setup>
import { RouterView } from 'vue-router'
import BarraNavegacio from './components/barra-navegacio.vue'
import PeuPagina from './components/peu-pagina.vue'
</script>

<template>
  <div class="app-layout">
    <!-- Component propi 1: Barra de navegació -->
    <BarraNavegacio />

    <main class="contingut-principal">
      <RouterView />
    </main>

    <!-- Component propi 2: Peu de pàgina rebent la prop "autor" des d'App.vue -->
    <PeuPagina autor="Adria" />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  background-color: #f8f6f4;
  color: #2c2523;
  line-height: 1.6;
}

.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.contingut-principal {
  max-width: 1000px;
  width: 100%;
  margin: 2.5rem auto;
  padding: 0 1.5rem;
  flex: 1;
}

.vista {
  background: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.vista h1 {
  margin-bottom: 1rem;
  color: #1e1b18;
}

.destacat-box {
  margin-top: 1.5rem;
  padding: 1rem 1.2rem;
  background-color: #fdf6ef;
  border-left: 4px solid #d49a6a;
  border-radius: 4px;
}
</style>