<template>
  <SearchBanner :imgSrc="imgSrc" />
  <Footer />
</template>
<script setup>
import SearchBanner from '@/components/SearchBanner.vue';
import Footer from '@/components/Footer.vue';

const imgSrc = 'https://images.unsplash.com/photo-1508248467877-aec1b08de376?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1440&q=80';
</script>
