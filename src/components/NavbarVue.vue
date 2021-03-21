<template>
  <div>
  <b-icon-border-width id="nav-toggle" @click="toggleNavbar()"/>
    <transition name="fade">
      <div id="nav" v-if="showNav">
      <b-icon-x-square id="x-toggle" @click="toggleNavbar()" />
      <router-link to="/" @click.native="toggleNavbar()">Home</router-link>
      <router-link to="/about" @click.native="toggleNavbar()">About</router-link>
      <router-link to="/gallery" @click.native="toggleNavbar()">Gallery</router-link>
      <router-link to="/contact" @click.native="toggleNavbar()">Contact</router-link>
    </div>
    </transition>
    <div id="nav_XL_screen">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/gallery">Gallery</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { BIconBorderWidth, BIconXSquare } from 'bootstrap-vue';

export default {
  name: 'navbar-vue',
  data() {
    return {
      showNav: false,
    };
  },
  components: {
    BIconBorderWidth,
    BIconXSquare,
  },
  methods: {
    toggleNavbar() {
      this.showNav = !this.showNav;
    },
  },
};
</script>
