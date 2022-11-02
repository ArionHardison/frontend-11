<template>
  <div>
    <Adminheader />
    <Nuxt />
    <Adminsidebar />
  </div>
</template>
<script>
  import Adminheader from '~/components/adminheader.vue'
  import Adminsidebar from '~/components/adminsidebar.vue'
  export default {
    components: {
     Adminheader,   
     Adminsidebar
    },
  }
  </script>

