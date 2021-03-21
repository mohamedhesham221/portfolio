<template>
  <div class="paintings_container">
    <div class="row">
      <div class="col-sm-12 col-lg-4">
        <img src="@/assets/imgs/paint1.jpeg" alt="painting1" class="painting">
      </div>
      <div class="col-sm-12 col-md-6 col-lg-4">
        <img src="@/assets/imgs/paint2.jpeg" alt="painting2" class="painting">
      </div>
      <div class="col-sm-12 col-md-6 col-lg-4">
        <img src="@/assets/imgs/paint3.jpeg" alt="painting3" class="painting">
      </div>
      <div class="col-sm-12 col-md-6 col-lg-4">
        <img src="@/assets/imgs/paint5.jpeg" alt="painting4" class="painting">
      </div>
      <div class="col-sm-12 col-md-6 col-lg-4">
        <img src="@/assets/imgs/paint6.jpeg" alt="painting5" class="painting">
      </div>
      <div class="col-sm-12 col-md-6 col-lg-4">
        <img src="@/assets/imgs/paint4.jpeg" alt="painting6" class="painting">
      </div>
      <div class="col-sm-12 col-md-6 col-lg-5">
        <img src="@/assets/imgs/paint7.jpeg" alt="painting7" class="painting">
      </div>
    </div>
    <router-link to="/gallery" class="to_gallery">see my work</router-link>
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'featured-painting',
};
</script>
