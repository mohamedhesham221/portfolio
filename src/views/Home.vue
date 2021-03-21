<template>
  <div class="home">
    <div class="container">
    <intro-paragraph />
    <featured-painting />
    <home-footer />
    </div>
  </div>
</template>

<script>
import IntroParagraph from '@/components/home/IntroParagraph.vue';
import FeaturedPainting from '@/components/home/FeaturedPainting.vue';
import HomeFooter from '@/components/home/HomeFooter.vue';

export default {
  name: 'Home',
  components: {
    IntroParagraph,
    FeaturedPainting,
    HomeFooter,
  },
};
</script>
<style lang="scss">
.copyright {
  width: 100%;
  height: 70px;
      margin-top: 15px;
    text-align: center;
    .lead {
      font: bold .6rem Arial, Helvetica, sans-serif;
    }
}
</style>
