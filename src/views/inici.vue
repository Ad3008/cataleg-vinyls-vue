<script setup>
import TargetaVinyl from '../components/targeta-vinyl.vue'
</script>

<template>
  <section class="vista">
    <h1>Benvinguts al meu Catàleg de Vinils 🎶</h1>
    <p>Explora la meva col·lecció personal d'edicions especials, LP i discos preferits.</p>
    
    <div class="destacat-box">
      <p>Fes servir el menú superior per navegar pel catàleg connectat a Cloud Firestore o conèixer més detalls sobre l'equip de música.</p>
    </div>

    <h2 style="margin-top: 2rem; margin-bottom: 1rem;">✨ Vinil Destacat</h2>
    <div style="max-width: 280px;">
      <TargetaVinyl 
        titol="Eternal Sunshine" 
        artista="Ariana Grande" 
        :any="2024" 
        edicio="Ruby Red LP" 
      />
    </div>
  </section>
</template>