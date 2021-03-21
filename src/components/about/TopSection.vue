<template>
<section class="container text-center top-section">
  <h2 class="h1 about_heading">About Engy</h2>
  <p class="lead about_sentence">My name is Engy Abdelhaq from cairo,Egypt ,
    I'm 27 years old,  Graduted from Faculty of fine arts, Helwan University,
    Department of painting 2012-2017
Very good with honor,  take the Toefel degree 2018,  and Preparing master degree in Art history.
passionate with teaching to children and the future youth
and help everyone interesting in anything related to Art.
    </p>
    <input type="submit" @click="openCv()" value="Preview CV">
</section>
</template>
<script>
export default {
  name: 'top-section',
  methods: {
    openCv() {
      const cv = 'https://drive.google.com/file/d/1IBweVYcPWvIQXSV7xfGYxiLmaKBr9Q-C/view?usp=sharing';
      window.open(cv);
    },
  },
};
</script>
