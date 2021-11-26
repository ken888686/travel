<template>
  <Header />
  <Banner />
  <CardList />
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue';
import Banner from '@/components/Banner.vue';
import CardList from '@/components/CardList.vue';
import Footer from '@/components/Footer.vue';

export default {
  data() {
    return {};
  },
  components: {
    Header,
    Banner,
    CardList,
    Footer,
  },
};
</script>
