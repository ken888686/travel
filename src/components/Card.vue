<template>
  <div class="card my-3">
    <div class="position-relative">
      <img
        src="@/assets/images/card-img.png"
        class="card-img-top"
        alt="Card"
      >
      <button
        type="button"
        class="btn btn-outline-primary btn-like"
      >
        <i class="bi bi-heart" />
      </button>
    </div>
    <div class="card-body">
      <h5 class="card-title">
        {{ props.title }}
      </h5>
      <button
        v-for="(tag, index) in props.tags"
        :key="index"
        class="tag"
      >
        {{ tag }}
      </button>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  score: {
    type: Number,
    default: 0,
  },
  tags: {
    type: Array,
    default: () => [],
  },
});
</script>
