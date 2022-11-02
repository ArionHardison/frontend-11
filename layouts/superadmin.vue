<template>
  <div>
    <Adminsettingheader />
    <Nuxt />
    <Adminsettingsidebar />
  </div>
</template>
<script>
  import Adminsettingheader from '~/components/adminsettingheader.vue'
  import Adminsettingsidebar from '~/components/adminsettingsidebar.vue'
  export default {
    components: {
     Adminsettingheader,   
     Adminsettingsidebar
    },
  }
  </script>

