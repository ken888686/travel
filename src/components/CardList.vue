<template>
  <div class="container-fluid my-4">
    <div class="container d-flex justify-content-between align-items-center my-3">
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
      :slidesPerView="3"
      :freeMode="true"
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
import SwiperCore, { FreeMode } from 'swiper/swiper-bundle.esm';
import Card from '@/components/Card.vue';
import 'swiper/swiper.min.css';
import 'swiper/modules/free-mode/free-mode.scss';

SwiperCore.use([FreeMode]);

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
