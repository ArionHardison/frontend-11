<template>
<div class="error-page">
<!-- Main Wrapper -->
<div class="main-wrapper" style="min-height: 100vh;align-items: center;">
			
    <div class="header d-none">
        <!-- Header Menu -->
        <ul class="nav nav-tabs user-menu">
            <!-- Flag -->
            <li class="nav-item">
                <a href="javascript:void(0);" id="dark-mode-toggle" class="dark-mode-toggle">
                <sun-icon size="1.4x" class="custom-class light-mode"></sun-icon><moon-icon size="1.4x" class="custom-class dark-mode"></moon-icon>
                </a>
            </li>
            <!-- /Flag -->
        </ul>
        <!-- Header Menu -->
    </div>
    
    <!-- Error 505 -->
    <div class="error-box">
        <img src="../../assets/admin_img/505.png" class="img-fluid" alt="505">
        <h2>Oops! This Page is Not Found.</h2>
        <p>The requested page dose not exist.</p>
        <NuxtLink to="/admin/admin_index" class="btn btn-primary"><home-icon size="1.4x" class="custom-class me-2"></home-icon>Back to Home</NuxtLink>
    </div>
    <!-- /Error 505 -->
        
</div>
<!-- /Main Wrapper -->
<Nuxt />
</div>
</template>

<script>
import { MoonIcon } from 'vue-feather-icons'
import { SunIcon } from 'vue-feather-icons'
import { HomeIcon } from 'vue-feather-icons'
export default {
    mounted() {
    },
     components: {
            MoonIcon,
            SunIcon,
            HomeIcon
        },
    layout: 'nolayout',
	computed: {
       currentPath() {
           return this.$route.name
	   },
	}
}
</script>