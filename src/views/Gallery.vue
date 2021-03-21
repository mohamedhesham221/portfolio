<template>
  <div class="container">
        <CoolLightBox
      :items="items"
      :index="index"
      @close="index = null">
    </CoolLightBox>
  <div class="images-wrapper row text-center">
      <img
        class="image col-sm-12 col-md-6 col-lg-4"
        v-for="(image, imageIndex) in items"
        :key="imageIndex"
        @click="index = imageIndex"
        :src="require('../assets/paintings/' + image.src)"
      />
    </div>
    <div class="footer footer_gallery">
    <footer-social />
    </div>
  </div>
</template>
<script>
import FooterSocial from '@/components/FooterSocial.vue';

export default {
  name: 'gallery',
  components: {
    FooterSocial,
  },
  data() {
    return {
      items: [
        {
          title: 'Colors oxides on woods',
          src: 'paint-1.jpeg',
        },
        {
          title: 'Birds .. oil on canvas',
          src: 'paint-2.jpeg',
        },
        {
          title: 'Oil on canvas',
          src: 'paint-3.jpeg',
        },
        {
          title: 'Charcoal on paper',
          src: 'paint-4.jpeg',
        },
        {
          title: 'Acrylic on paper',
          src: 'paint-5.jpeg',
        },
        {
          title: 'Egyptian bird .. Gold paper, oil on wood',
          src: 'paint-6.jpeg',
        },
        {
          title: 'Oil and gold paper on wood',
          src: 'paint-8.jpeg',
        },
        {
          title: 'Bird .. oil on canvas',
          src: 'paint-7.jpeg',
        },
        {
          title: 'Black ink on paper',
          src: 'paint-9.jpeg',
        },
        {
          title: 'Charcoal on paper',
          src: 'paint-10.jpeg',
        },
        {
          title: 'Charcoal on paper',
          src: 'paint-11.jpeg',
        },
        {
          title: 'Charcoal on paper',
          src: 'paint-12.jpeg',
        },
        {
          title: 'Oil on canvas',
          src: 'paint-13.jpeg',
        },
        {
          title: 'Oil and charcoal on canvas',
          src: 'paint-16.jpeg',
        },
        {
          title: 'Oil on canvas',
          src: 'paint-14.jpeg',
        },
        {
          title: 'Oil and charcoal on canvas',
          src: 'paint-15.jpeg',
        },
        {
          title: 'Oil and charcoal on canvas',
          src: 'paint-17.jpeg',
        },
        {
          title: 'Watercolor on paper',
          src: 'paint-18.jpeg',
        },
        {
          title: 'Oil on canvas',
          src: 'paint-19.jpeg',
        },
        {
          title: 'Brown ink on paper',
          src: 'paint-21.jpeg',
        },
        {
          title: 'oil on canvas',
          src: 'paint-22.jpeg',
        },
        {
          title: 'oil on canvas',
          src: 'paint-23.jpeg',
        },
        {
          title: 'oil on canvas',
          src: 'paint-24.jpeg',
        },
        {
          title: 'oil on canvas',
          src: 'paint-25.jpeg',
        },
        {
          title: 'ink on canvas',
          src: 'paint-26.jpeg',
        },
      ],
      index: null,
    };
  },
};
</script>
<style lang="scss" scoped>
.images-wrapper {
  gap: 15px;
  .image {
  width: 100%;
  cursor: pointer;
}
}
.footer_gallery {
  min-height: 0;
}
</style>
