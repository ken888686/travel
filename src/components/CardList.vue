<template>
  <div class="container-fluid mt-4">
    <div class="container d-flex justify-content-between align-items-center mt-3">
      <h3 class="m-0 fw-bold">
        {{ props.category }}
      </h3>
      <button
        type="button"
        class="btn btn-primary"
      >
        查看更多
      </button>
    </div>
    <swiper
      :slidesPerView="1"
      :freeMode="true"
      :mousewheel="true"
      :breakpoints="{
        '768': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '992': {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        '1400': {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        '1920': {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      }"
    >
      <swiper-slide
        v-for="(item, index) in cards"
        :key="index"
      >
        <Card
          :title="`${item.title} ${index + 1}`"
          :tags="item.tags"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup>
import { defineProps } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';
import FreeMode from 'swiper/modules/free-mode/free-mode';
import Mousewheel from 'swiper/modules/mousewheel/mousewheel';
import SwiperCore from 'swiper/swiper-bundle.esm';
import Card from '@/components/Card.vue';
import 'swiper/swiper.min.css';
import 'swiper/modules/free-mode/free-mode.min.css';

SwiperCore.use([FreeMode, Mousewheel]);

const props = defineProps({
  category: {
    type: String,
    default: 'Title',
  },
  cards: {
    type: Array,
    default: () => [],
  },
});
</script>
<style lang="scss"></style>
