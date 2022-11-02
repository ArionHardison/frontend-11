<template>
  <div>
    
    <Index11header />
    <Nuxt />
    <Index11footer />
  </div>
</template>

<script>
  import Index11header from '~/components/index11header.vue'
  import Index11footer from '~/components/index11footer.vue'
  export default {
    components: {
     
      Index11header,   
      Index11footer
    },
  }
  </script>

