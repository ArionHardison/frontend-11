<template>
  <div>
    <Doctorheader />
    <Nuxt />
    <Footer />
    </div>
</template>
<script>
  
  import Doctorheader from '~/components/doctorheader.vue'
  import Footer from '~/components/footer.vue'
  export default {
    components: {
     
      Doctorheader,   
      Footer
    },
  }
  </script>

