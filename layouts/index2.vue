<template>
  <div>
    
    <Index2header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
  import Index2header from '~/components/index2header.vue'
  import Footer from '~/components/footer.vue'
  export default {
    components: {
     
      Index2header,   
      Footer
    },
  }
  </script>

