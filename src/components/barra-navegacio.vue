<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="navbar">
    <div class="logo">🎵 VinylVault</div>
    <nav class="nav-links">
      <RouterLink to="/">Inici</RouterLink>
      <RouterLink to="/cataleg">Catàleg</RouterLink>
      <RouterLink to="/sobre">Sobre el projecte</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  background-color: #1e1b18;
  color: #ffffff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}

.logo {
  font-size: 1.3rem;
  font-weight: 700;
  color: #e6c29f;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  color: #d6d1cd;
  text-decoration: none;
  font-weight: 500;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.nav-links a:hover {
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-links a.router-link-active {
  color: #1e1b18;
  background-color: #e6c29f;
  font-weight: 600;
}
</style>