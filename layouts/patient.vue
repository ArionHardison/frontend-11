<template>
  <div>
    <Patientheader />
    <Nuxt />
    <Footer />
    </div>
</template>
<script>
  
  import Patientheader from '~/components/patientheader.vue'
  import Footer from '~/components/footer.vue'
  export default {
    components: {
     
      Patientheader,   
      Footer
    },
  }
  </script>

