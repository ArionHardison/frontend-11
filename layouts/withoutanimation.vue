<template>
  <div>
    <Header />
    <Nuxt />
    <Noanimationfooter />
  </div>
</template>
<script>
  import Header from '~/components/header.vue'
  import Noanimationfooter from '~/components/noanimationfooter.vue'
  export default {
    components: {
     
      Header,   
      Noanimationfooter
    },
  }
  </script>

