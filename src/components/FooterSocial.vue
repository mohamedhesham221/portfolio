<template>
      <footer class="social_footer">
      <a href="https://www.instagram.com/enjiabdelhak/?hl=en" target="_blank" class="social_item">
      <b-icon-instagram />
      </a>
      <a href="https://www.linkedin.com/in/engy-abd-elhaaq-21373a1b5/" target="_blank" class="social_item">
      <b-icon-linkedin />
      </a>
      <a href="mailto:Engy.abdelhak2018@gmail.com" target="_blank" class="social_item">
      <b-icon-envelope />
      </a>
      <a href="tel:+0201148778720" class="social_item">
      <b-icon-telephone-forward />
      </a>
      <a href="tel:+0201148778720" class="social_item">
      <b-icon-whatsapp />
      </a>
    </footer>
</template>
<script>
import {
  BIconInstagram,
  BIconLinkedin,
  BIconEnvelope,
  BIconTelephoneForward,
}
  from 'bootstrap-vue';
import BIconWhatsapp from '@/components/WhatsappIcon.vue';

export default {
  components: {
    BIconInstagram,
    BIconLinkedin,
    BIconEnvelope,
    BIconTelephoneForward,
    BIconWhatsapp,
  },
};
</script>
