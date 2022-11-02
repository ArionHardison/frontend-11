<template>
<div>
<!-- Main Wrapper -->
<div class="main-wrapper">
			
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
    
    <div class="row">
        
        <div class="col-md-12 login-wrap-bg">		
        
            <!-- Restart Password -->
            <div class="login-wrapper">
                <div class="loginbox email-confirm">
                    <div class="success-icon">
                        <x-circle-icon size="1.4x" class="custom-class"></x-circle-icon>
                    </div>
                    <h3>Success !</h3>
                    <p class="account-subtitle">A email has been send to youremail@domain.com. Please check for an email from company and click on the included link to reset your password.</p>		
                    <NuxtLink to="/superadmin/forgot-password" class="btn btn-primary"> <home-icon size="1.4x" class="custom-class"></home-icon> Back to Home</NuxtLink>
                </div>
            </div>
            <!-- /Restart Password -->
            
        </div>
        
    </div>
</div>
<!-- /Main Wrapper -->
<Nuxt />
</div>
</template>

<script>
import { MoonIcon } from 'vue-feather-icons'
import { SunIcon } from 'vue-feather-icons'
import { XCircleIcon } from 'vue-feather-icons'
import { HomeIcon } from 'vue-feather-icons'
export default {
    mounted() {

    },
    components: {
            MoonIcon,
            SunIcon,
            XCircleIcon,
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