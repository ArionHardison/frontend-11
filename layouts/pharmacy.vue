<template>
  <div>
    <Pharmacyheader />
    <Nuxt />
    <Footer />
    </div>
</template>
<script>
  
  import Pharmacyheader from '~/components/pharmacyheader.vue'
  import Footer from '~/components/footer.vue'
  export default {
    components: {
     
      Pharmacyheader,   
      Footer
    },
  }
  </script>

