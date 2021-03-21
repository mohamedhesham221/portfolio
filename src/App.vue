<template>
  <div>
    <logo />
    <navbar-vue />
    <div class="copyright">
    <p class="lead">Copyright&copy;&nbsp;Mohamed&nbsp;Hesham&nbsp;</p>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import NavbarVue from '@/components/NavbarVue.vue';
import Logo from '@/components/Logo.vue';

export default {
  components: {
    NavbarVue,
    Logo,
  },
};
</script>
