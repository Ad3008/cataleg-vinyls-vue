<script setup>
defineProps({
  autor: {
    type: String,
    required: true
  }
})
</script>

<template>
  <footer class="footer">
    <p>💿 VinylVault — Desenvolupat per <strong>{{ autor }}</strong> · Grau en Disseny Digital i Tecnologies Creatives (2026)</p>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #1e1b18;
  color: #a8a09a;
  text-align: center;
  padding: 1.2rem;
  font-size: 0.9rem;
  margin-top: auto;
}

.footer strong {
  color: #e6c29f;
}
</style>