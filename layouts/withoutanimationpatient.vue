<template>
  <div>
    <Patientheader />
    <Nuxt />
    <Noanimationfooter />
  </div>
</template>
<script>
  import Patientheader from '~/components/patientheader.vue'
  import Noanimationfooter from '~/components/noanimationfooter.vue'
  export default {
    components: {
      Patientheader,   
      Noanimationfooter
    },
  }
  </script>

