<template>
  <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
  <Navbar />
  <router-view />
</template>

<script setup>
import Navbar from './components/Navbar.vue';
</script>
<style lang="scss"></style>
