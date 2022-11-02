export default {
  router: {
    base: '/template/'
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Doccure',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/template/favicon.png' },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/css/bootstrap.min.css",        
      },
      {
        rel: "stylesheet",
        href:
          "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",        
      },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css",        
      },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/Swiper/5.3.6/css/swiper.min.css",        
      },
      {
        rel: "stylesheet",
        href:
          " https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.47/css/bootstrap-datetimepicker.min.css",        
      },
      {
        rel: "stylesheet",
        href:
          " https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/css/select2.min.css",        
      } ,
      {
        rel: "stylesheet",
        href:
          "/template/datatables/bootstrap4.min.css",        
      },
      {
        rel: "stylesheet",
        href:
          "/template/datatables/dataTables.bootstrap4.min.css",        
      },
      {
        rel: "stylesheet",
        href:
          "/template/fullcalendar/fullcalendar.min.css",        
      },
      {
        rel: "stylesheet",
        href:
          "/template/morris/morris.css",        
      },
      {
        rel: "stylesheet",
        href:
          "/template/owl.carousel.min.css",        
      },
      {
        rel: "stylesheet",
        href:
          "/template/apex/apexcharts.css",        
      },
      {
        rel: "stylesheet",
        href:
          "/template/daterangepicker/daterangepicker.css",        
      },
      {
        rel: "stylesheet",
        href:
          "/template/fancybox/jquery.fancybox.min.css",        
      },
      {
        rel: "stylesheet",
        href:
          "/template/bootstrap-tagsinput.css",        
      },
      {
        rel: "stylesheet",
        href:
          "/template/dropzone/dropzone.min.css",        
      },
      {
        rel: "stylesheet",
        href:
          "/template/aos.css",        
      }        
    ],
    script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/js/bootstrap.bundle.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://unpkg.com/slick-carousel@1.8.0/slick/slick.js",
        type: "text/javascript"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/Swiper/5.3.6/js/swiper.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/jquery-circle-progress/1.2.2/circle-progress.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.min.js ",
        type: "text/javascript"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.47/js/bootstrap-datetimepicker.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyD6adZVdzTvBpE2yBRK8cDfsss8QXChK0I",
        type: "text/javascript"
      },
      {
        src:
          "/template/datatables/jquery.dataTables.min.js",
        type: "text/javascript"
      },
      {
        src:
          "/template/datatables/dataTables.bootstrap4.min.js",
        type: "text/javascript"
      },
      {
        src:
          "/template/fullcalendar/jquery-ui.min.js",
        type: "text/javascript"
      },
      {
        src:
          "/template/fullcalendar/fullcalendar.min.js",
        type: "text/javascript"
      },
      {
        src:
          "/template/fullcalendar/jquery.fullcalendar.js",
        type: "text/javascript"
      },
      {
        src:
          "/template/raphael/raphael.min.js",
        type: "text/javascript"
      },
      {
        src:
          "/template/morris/morris.min.js",
        type: "text/javascript"
      },
      {
        src:
          "/template/owl.carousel.min.js",
        type: "text/javascript"
      },
      {
        src:
          "/template/apex/apexcharts.min.js",
        type: "text/javascript"
      },
      {
        src:
          "/template/daterangepicker/daterangepicker.js",
        type: "text/javascript"
      },
      {
        src:
          "/template/fancybox/jquery.fancybox.min.js",
        type: "text/javascript"
      },
      {
        src:
          "/template/dropzone/dropzone.min.js",
        type: "text/javascript"
      },
      {
        src:
          "/template/aos.js",
        type: "text/javascript"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/condition', ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
