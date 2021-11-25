<template>
  <div class="card" style="width: 18rem">
    <img src="@/assets/img/card-img.png" class="card-img-top" alt="card-img" />
    <div class="card-body p-0">
      <h5 class="card-title my-2">{{ title }}</h5>
      <Tag :title="item.title" v-for="item in tags" :key="item.id" />
      <p class="card-text mb-0">
        {{ content }}
      </p>
      <a href="#" class="stretched-link"></a>
    </div>
  </div>
</template>
<script>
import Tag from '@/components/Tag.vue';

export default {
  data() {
    return {};
  },
  props: {
    title: String,
    content: String,
    tags: Array,
  },
  components: {
    Tag,
  },
  mounted() {},
};
</script>
<style lang="scss" scoped></style>
