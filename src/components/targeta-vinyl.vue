<script setup>
// Declarem les props que rep el component fill des del component pare
defineProps({
  titol: {
    type: String,
    required: true
  },
  artista: {
    type: String,
    required: true
  },
  any: {
    type: Number,
    required: true
  },
  edicio: {
    type: String,
    default: 'Edició Estàndard'
  },
  portada: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <article class="vinil-card">
    <div class="portada-wrapper">
      <img v-if="portada" :src="portada" :alt="titol" class="portada-img" />
      <div v-else class="portada-placeholder">💿</div>
    </div>
    <div class="vinil-info">
      <span class="badge-edicio">{{ edicio }}</span>
      <h3>{{ titol }}</h3>
      <p class="artista">{{ artista }}</p>
      <p class="any">Any de llançament: {{ any }}</p>
    </div>
  </article>
</template>

<style scoped>
.vinil-card {
  background: #ffffff;
  border: 1px solid #ece6e0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;
  display: flex;
  flex-direction: column;
}

.vinil-card:hover {
  transform: translateY(-4px);
}

.portada-wrapper {
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: #2c2523;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.portada-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.portada-placeholder {
  font-size: 4rem;
}

.vinil-info {
  padding: 1.2rem;
}

.badge-edicio {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  background-color: #fdf6ef;
  color: #b57c4a;
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
  margin-bottom: 0.5rem;
  border: 1px solid #f0decb;
}

h3 {
  font-size: 1.15rem;
  color: #1e1b18;
  margin-bottom: 0.2rem;
}

.artista {
  font-weight: 600;
  color: #5c534e;
  margin-bottom: 0.4rem;
}

.any {
  font-size: 0.85rem;
  color: #8c827c;
}
</style>