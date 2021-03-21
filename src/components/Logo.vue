<template>
  <div id="logo">
    <h1>Engy AbdelhaQ</h1>
    <!-- <img src="@/assets/logo.png" alt="logo"> -->
  </div>
</template>

<script>
export default {
  name: 'logo',
};
</script>

<style lang="scss" scoped>
#logo {
  width: fit-content;
  height: 100px;
  margin-top: 35px;
  margin-left: 10px;
  h1 {
    font-family: 'Miss Fajardose', cursive;
    font-size: 1.5rem;
    color: #d0aa73;
  }
}
@media only screen and (min-width:  768px) {
  #logo {
    display: block;
    text-align: center;
    width: 400px !important;
    margin: 55px auto !important;
    h1 {
      font-size: 5rem !important;
    }
}
}
</style>
