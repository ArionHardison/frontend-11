<template>
  <div>
    
    <Index10header />
    <Nuxt />
    <Index10footer />
  </div>
</template>
<script>
  import Index10header from '~/components/index10header.vue'
  import Index10footer from '~/components/index10footer.vue'
  export default {
    components: {
     
      Index10header,   
      Index10footer
    },
  }
  </script>

