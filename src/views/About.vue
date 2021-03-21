<template>
  <div class="about">
          <top-section />
          <bottom-section />
    <div class="footer footer_about">
    <footer-social />
    </div>
  </div>
</template>
<script>
import TopSection from '@/components/about/TopSection.vue';
import BottomSection from '@/components/about/BottomSection.vue';
import FooterSocial from '@/components/FooterSocial.vue';

export default {
  name: 'about',
  components: {
    TopSection,
    BottomSection,
    FooterSocial,
  },
};
</script>
