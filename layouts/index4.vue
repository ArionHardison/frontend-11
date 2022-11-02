<template>
  <div>
    
    <Index4header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
  import Index4header from '~/components/index4header.vue'
  import Footer from '~/components/footer.vue'
  export default {
    components: {
     
      Index4header,   
      Footer
    },
  }
  </script>

