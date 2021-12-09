<template>
  <div class="container-fluid my-4">
    <div class="container d-flex justify-content-between align-items-center">
      <h3>熱門打卡景點</h3>
      <button
        type="button"
        class="btn btn-primary"
      >
        查看更多
      </button>
    </div>
    <div class="row">
      <div
        v-for="(item, index) in cardInfo"
        :key="index"
        class="col"
      >
        <Card
          :title="item.title"
          :tags="item.tags"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import Card from '@/components/Card.vue';

const cardInfo = [
  {
    title: '新北歡樂耶誕城',
    score: 3,
    tags: ['文化活動', '熱鬧', '新北板橋'],
  },
];
</script>
<style lang="scss"></style>
