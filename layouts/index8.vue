<template>
  <div>
    
    <Index8header />
    <Nuxt />
    <Index8footer />
  </div>
</template>
<script>
  import Index8header from '~/components/index8header.vue'
  import Index8footer from '~/components/index8footer.vue'
  export default {
    components: {
     
      Index8header,   
      Index8footer
    },
  }
  </script>

