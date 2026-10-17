<script setup>
import { ref, onMounted } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase.js'
import TargetaVinyl from '../components/targeta-vinyl.vue'

const vinils = ref([])
const carregant = ref(true)
const errorLectura = ref(null)

onMounted(async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'vinyls'))
    vinils.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
  } catch (err) {
    console.error('Error llegint Firestore:', err)
    errorLectura.value = 'Hi ha hagut un error en carregar els vinils des de Cloud Firestore.'
  } finally {
    carregant.value = false
  }
})
</script>

<template>
  <section class="vista">
    <h1>Col·lecció de Vinils 💿</h1>
    <p class="subtitol">Catàleg carregat en temps real des de Cloud Firestore.</p>

    <!-- 1. Estat de càrrega -->
    <div v-if="carregant" class="estat-box carregant">
      <p>⏳ Carregant la col·lecció de vinils...</p>
    </div>

    <!-- 2. Missatge si la lectura falla -->
    <div v-else-if="errorLectura" class="estat-box error">
      <p>❌ {{ errorLectura }}</p>
    </div>

    <!-- 3. Missatge quan no hi hagi dades -->
    <div v-else-if="vinils.length === 0" class="estat-box buit">
      <p>📭 Encara no hi ha cap vinil registrat a la base de dades.</p>
    </div>

    <!-- 4. Graella de vinils passant les dades per props al component fill -->
    <div v-else class="graella-vinils">
      <TargetaVinyl
        v-for="item in vinils"
        :key="item.id"
        :titol="item['Album name'] || item.titol || 'Sense títol'"
        :artista="item.Artist || item.artista || 'Artista desconegut'"
        :any="Number(item.Year || item.any || 2024)"
        :edicio="item.Edition || item.edicio || 'Edició Estàndard'"
        :portada="item.Cover || item.portada || ''"
      />
    </div>
  </section>
</template>

<style scoped>
.subtitol {
  color: #6e655f;
  margin-bottom: 1.5rem;
}

.estat-box {
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
  margin-top: 1rem;
}

.carregant {
  background-color: #fdf6ef;
  color: #b57c4a;
}

.error {
  background-color: #fdeaea;
  color: #c93b3b;
}

.buit {
  background-color: #f4f1ee;
  color: #6e655f;
}

.graella-vinils {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}
</style>