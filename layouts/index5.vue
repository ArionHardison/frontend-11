<template>
  <div>
    
    <Index5header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
  import Index5header from '~/components/index5header.vue'
  import Footer from '~/components/footer.vue'
  export default {
    components: {
     
      Index5header,   
      Footer
    },
  }
  </script>

