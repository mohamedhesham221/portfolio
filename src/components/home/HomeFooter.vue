<template>
  <section class="footer">
    <div class="footer_touch_in container">
      <h6 class="head_paragraph">Goals and Objectives</h6>
      <p class="lead touch_in_paragraph">I'm interesting to anything related to Art.
      Art teacher at school or teach in Art course,
      And I love participating in any Art gallery.</p>
        <router-link to="/contact" class="to_contact">Get in touch</router-link>
        <router-view />
    </div>
    <footer-social />
  </section>
</template>
<script>
import FooterSocial from '@/components/FooterSocial.vue';

export default {
  name: 'home-footer',
  components: {
    FooterSocial,
  },
};
</script>
