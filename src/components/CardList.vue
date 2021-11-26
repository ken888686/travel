<template>
  <div class="w-100">
    <div class="container d-flex justify-content-between">
      <h3 class="fw-bold">{{ title }}</h3>
      <button type="button" class="btn btn-primary">查看更多</button>
    </div>
    <swiper
      :slides-per-view="4"
      :space-between="10"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide>
        <Card
          title="新北歡樂耶誕城"
          content="每年一到12月，歡樂耶誕城都會舉辦盛大的耶誕活動與美麗的裝置藝術，讓整個板橋也有濃濃的耶誕過節氣氛！"
          :tags="[
            { id: 0, title: '文化活動' },
            { id: 1, title: '熱鬧' },
            { id: 2, title: '一年一度' },
          ]"
        />
      </swiper-slide>
      <swiper-slide>
        <Card
          title="新北歡樂耶誕城"
          content="每年一到12月，歡樂耶誕城都會舉辦盛大的耶誕活動與美麗的裝置藝術，讓整個板橋也有濃濃的耶誕過節氣氛！"
          :tags="[
            { id: 0, title: '文化活動' },
            { id: 1, title: '熱鬧' },
            { id: 2, title: '一年一度' },
          ]"
        />
      </swiper-slide>
      <swiper-slide>
        <Card
          title="新北歡樂耶誕城"
          content="每年一到12月，歡樂耶誕城都會舉辦盛大的耶誕活動與美麗的裝置藝術，讓整個板橋也有濃濃的耶誕過節氣氛！"
          :tags="[
            { id: 0, title: '文化活動' },
            { id: 1, title: '熱鬧' },
            { id: 2, title: '一年一度' },
          ]"
        />
      </swiper-slide>
      <swiper-slide>
        <Card
          title="新北歡樂耶誕城"
          content="每年一到12月，歡樂耶誕城都會舉辦盛大的耶誕活動與美麗的裝置藝術，讓整個板橋也有濃濃的耶誕過節氣氛！"
          :tags="[
            { id: 0, title: '文化活動' },
            { id: 1, title: '熱鬧' },
            { id: 2, title: '一年一度' },
          ]"
        />
      </swiper-slide>
      <swiper-slide>
        <Card
          title="新北歡樂耶誕城"
          content="每年一到12月，歡樂耶誕城都會舉辦盛大的耶誕活動與美麗的裝置藝術，讓整個板橋也有濃濃的耶誕過節氣氛！"
          :tags="[
            { id: 0, title: '文化活動' },
            { id: 1, title: '熱鬧' },
            { id: 2, title: '一年一度' },
          ]"
        />
      </swiper-slide>
      <swiper-slide>
        <Card
          title="新北歡樂耶誕城"
          content="每年一到12月，歡樂耶誕城都會舉辦盛大的耶誕活動與美麗的裝置藝術，讓整個板橋也有濃濃的耶誕過節氣氛！"
          :tags="[
            { id: 0, title: '文化活動' },
            { id: 1, title: '熱鬧' },
            { id: 2, title: '一年一度' },
          ]"
        />
      </swiper-slide>
      <swiper-slide>
        <Card
          title="新北歡樂耶誕城"
          content="每年一到12月，歡樂耶誕城都會舉辦盛大的耶誕活動與美麗的裝置藝術，讓整個板橋也有濃濃的耶誕過節氣氛！"
          :tags="[
            { id: 0, title: '文化活動' },
            { id: 1, title: '熱鬧' },
            { id: 2, title: '一年一度' },
          ]"
        />
      </swiper-slide>
      <swiper-slide>
        <Card
          title="新北歡樂耶誕城"
          content="每年一到12月，歡樂耶誕城都會舉辦盛大的耶誕活動與美麗的裝置藝術，讓整個板橋也有濃濃的耶誕過節氣氛！"
          :tags="[
            { id: 0, title: '文化活動' },
            { id: 1, title: '熱鬧' },
            { id: 2, title: '一年一度' },
          ]"
        />
      </swiper-slide>
      <swiper-slide>
        <Card
          title="新北歡樂耶誕城"
          content="每年一到12月，歡樂耶誕城都會舉辦盛大的耶誕活動與美麗的裝置藝術，讓整個板橋也有濃濃的耶誕過節氣氛！"
          :tags="[
            { id: 0, title: '文化活動' },
            { id: 1, title: '熱鬧' },
            { id: 2, title: '一年一度' },
          ]"
        />
      </swiper-slide>
      <swiper-slide>
        <Card
          title="新北歡樂耶誕城"
          content="每年一到12月，歡樂耶誕城都會舉辦盛大的耶誕活動與美麗的裝置藝術，讓整個板橋也有濃濃的耶誕過節氣氛！"
          :tags="[
            { id: 0, title: '文化活動' },
            { id: 1, title: '熱鬧' },
            { id: 2, title: '一年一度' },
          ]"
        />
      </swiper-slide>
      <swiper-slide>
        <Card
          title="新北歡樂耶誕城"
          content="每年一到12月，歡樂耶誕城都會舉辦盛大的耶誕活動與美麗的裝置藝術，讓整個板橋也有濃濃的耶誕過節氣氛！"
          :tags="[
            { id: 0, title: '文化活動' },
            { id: 1, title: '熱鬧' },
            { id: 2, title: '一年一度' },
          ]"
        />
      </swiper-slide>
      <swiper-slide>
        <Card
          title="新北歡樂耶誕城"
          content="每年一到12月，歡樂耶誕城都會舉辦盛大的耶誕活動與美麗的裝置藝術，讓整個板橋也有濃濃的耶誕過節氣氛！"
          :tags="[
            { id: 0, title: '文化活動' },
            { id: 1, title: '熱鬧' },
            { id: 2, title: '一年一度' },
          ]"
        />
      </swiper-slide>
      <swiper-slide>
        <Card
          title="新北歡樂耶誕城"
          content="每年一到12月，歡樂耶誕城都會舉辦盛大的耶誕活動與美麗的裝置藝術，讓整個板橋也有濃濃的耶誕過節氣氛！"
          :tags="[
            { id: 0, title: '文化活動' },
            { id: 1, title: '熱鬧' },
            { id: 2, title: '一年一度' },
          ]"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';
import 'swiper/swiper.scss';

import Card from './Card.vue';

export default {
  data() {
    return { title: '熱門打卡景點' };
  },
  components: {
    Card,
    Swiper,
    SwiperSlide,
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log('slide change');
    },
  },
};
</script>
<style lang="scss" scoped></style>
