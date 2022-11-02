<template>
  <div>
    
    <Index7header />
    <Nuxt />
    <Index7footer />
  </div>
</template>
<script>
  import Index7header from '~/components/index7header.vue'
  import Index7footer from '~/components/index7footer.vue'
  export default {
    components: {
     
      Index7header,   
      Index7footer
    },
  }
  </script>

