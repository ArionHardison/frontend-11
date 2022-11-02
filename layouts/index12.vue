<template>
  <div>
    
    <Index12header />
    <Nuxt />
    <Index12footer />
  </div>
</template>
<script>
  import Index12header from '~/components/index12header.vue'
  import Index12footer from '~/components/index12footer.vue'
  export default {
    components: {
     
      Index12header,   
      Index12footer
    },
  }
  </script>

