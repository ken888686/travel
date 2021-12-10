<template>
  <div>
    <SearchBanner />
    <CardList
      category="熱門打卡景點"
      :cards="cards"
    />
    <Banner />
    <CardList
      category="Rainbow Life!"
      :cards="rainbowCards"
    />
    <Footer />
  </div>
</template>

<script setup>
import SearchBanner from '@/components/SearchBanner.vue';
import Banner from '@/components/Banner.vue';
import CardList from '@/components/CardList.vue';
import Footer from '@/components/Footer.vue';

const cards = [];
for (let i = 0; i < 10; i += 1) {
  cards.push({
    title: '新北歡樂耶誕城',
    score: 4.6,
    tags: ['文化活動', '熱鬧', '新北板橋'],
  });
}

const rainbowCards = [];
for (let i = 0; i < 10; i += 1) {
  rainbowCards.push({
    title: '台北大稻埕',
    score: 4.6,
    tags: ['文化活動', '熱鬧'],
  });
}
</script>
