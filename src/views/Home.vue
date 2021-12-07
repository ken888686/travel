<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div> -->
  <div class="input-group-custom input-group-custom-sm flex-nowrap">
    <input
      type="text"
      class="form-control"
      :placeholder="placeHolder"
      :aria-label="placeHolder"
      aria-describedby="addon-wrapping"
    />
    <button type="button" class="btn">
      <img src="@/assets/icons/search.svg" alt="search" />
    </button>
  </div>
</template>

<script setup>
// import HelloWorld from '@/components/HelloWorld.vue';
const placeHolder = '想要去哪？';
</script>
