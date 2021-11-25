<template>
  <Header />
  <Banner />
  <Card
    title="新北歡樂耶誕城"
    content="每年一到12月，歡樂耶誕城都會舉辦盛大的耶誕活動與美麗的裝置藝術，讓整個板橋也有濃濃的耶誕過節氣氛！"
    :tags="[
      { id: 0, title: '文化活動' },
      { id: 1, title: '熱鬧' },
      { id: 2, title: '一年一度' },
    ]"
  />
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue';
import Banner from '@/components/Banner.vue';
import Card from '@/components/Card.vue';
import Footer from '@/components/Footer.vue';

export default {
  data() {
    return {};
  },
  components: {
    Header,
    Banner,
    Card,
    Footer,
  },
};
</script>
