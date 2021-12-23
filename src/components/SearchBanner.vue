<template>
  <div
    class="bg-cover"
    :style="{ backgroundImage: `url(${imgSrc})` }"
  >
    <div class="container py-5">
      <h1 class="text-light fw-bold">
        景點列表
      </h1>
      <ul class="list-unstyled row my-0">
        <li class="col-3 d-grid">
          <button
            type="button"
            class="btn btn-outline-primary text-start"
          >
            選擇地區
          </button>
        </li>
        <li class="col-3 d-grid">
          <button
            type="button"
            class="btn btn-outline-primary text-start"
          >
            選擇參觀日期
          </button>
        </li>
        <li class="col-auto ms-auto pe-0">
          <button
            type="button"
            class="btn btn-primary text-start d-flex justify-content-between align-items-center"
          >
            排序
            <img
              class="ms-2"
              src="@/assets/icons/sort.svg"
              alt="sort"
            >
          </button>
        </li>
        <li class="col-auto pe-0">
          <button
            type="button"
            class="btn btn-primary text-start d-flex justify-content-between align-items-center"
          >
            篩選
            <img
              class="ms-2"
              src="@/assets/icons/filter.svg"
              alt="sort"
            >
          </button>
        </li>
        <li class="col-auto pe-0">
          <button
            type="button"
            class="btn btn-primary h-100"
          >
            <img
              src="@/assets/icons/list.svg"
              alt="sort"
            >
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
  imgSrc: {
    type: String,
    default: '',
  },
});

const imgSrc = ref(props.imgSrc);
</script>
<style lang="scss" scoped>
.bg-cover {
  background-size: cover;
  background-position: center 70%;
  background-repeat: no-repeat;
  position: relative;
  z-index: 0;

  &::before {
    content: '';
    z-index: -1;
    height: 100%;
    width: 100%;
    position: absolute;
    background: #616161;
    mix-blend-mode: multiply;
    opacity: 0.4;
    backdrop-filter: blur(21px);
  }
}
</style>
