<template>
  <div>
    
    <Index9header />
    <Nuxt />
    <Index9footer />
  </div>
</template>
<script>
  import Index9header from '~/components/index9header.vue'
  import Index9footer from '~/components/index9footer.vue'
  export default {
    components: {
     
      Index9header,   
      Index9footer
    },
  }
  </script>

