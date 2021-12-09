<template>
  <div class="container-fluid my-4">
    <div class="container d-flex justify-content-between align-items-center my-3">
      <h3 class="m-0">
        熱門打卡景點
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
        v-for="(item, index) in cardInfo"
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
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';
import SwiperCore, { FreeMode } from 'swiper/swiper-bundle.esm';
import Card from '@/components/Card.vue';
import 'swiper/swiper.min.css';
import 'swiper/modules/free-mode/free-mode.scss';

SwiperCore.use([FreeMode]);

const card = {
  title: '新北歡樂耶誕城',
  score: 4.6,
  tags: ['文化活動', '熱鬧', '新北板橋'],
};
const cardInfo = [];
for (let i = 0; i < 10; i += 1) {
  cardInfo.push(card);
}
</script>
<style lang="scss"></style>
