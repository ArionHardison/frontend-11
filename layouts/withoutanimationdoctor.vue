<template>
  <div>
    <Doctorheader />
    <Nuxt />
    <Noanimationfooter />
  </div>
</template>
<script>
  import Doctorheader from '~/components/doctorheader.vue'
  import Noanimationfooter from '~/components/noanimationfooter.vue'
  export default {
    components: {
      Doctorheader,   
      Noanimationfooter
    },
  }
  </script>

