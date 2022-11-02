<template>
  <div>
    
    <Index13header />
    <Nuxt />
    <Index13footer />
  </div>
</template>
<script>
  import Index13header from '~/components/index13header.vue'
  import Index13footer from '~/components/index13footer.vue'
  export default {
    components: {
     
      Index13header,   
      Index13footer
    },
  }
  </script>

