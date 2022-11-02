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
    
        <!-- Login Banner -->
        <div class="col-md-6 login-bg">
            <div class="login-banner"></div>
        </div>
        <!-- /Login Banner -->
        
        <div class="col-md-6 login-wrap-bg">		
        
            <!-- Restart Password -->
            <div class="login-wrapper">
                <div class="loginbox">
                    <div class="img-logo">
                        <img src="../../assets/admin_img/logo.png" class="img-fluid" alt="Logo">
                    </div>
                    <h3>Restart Password</h3>
                    <p class="account-subtitle">Enter your email to get a password reset link</p>
                                
                    <form>
                        <div class="form-group form-focus">
                            <input type="email" class="form-control floating">
                            <label class="focus-label">Enter Email</label>
                        </div>
                        <NuxtLink to="/admin/conform-email">
                        <div class="d-grid">
                            <button class="btn btn-primary" type="submit">Restart Password</button>
                        </div>
                    </NuxtLink>
                        <div class="dont-have">Remember your password?  <NuxtLink to="/admin/login">Login</NuxtLink></div>
                    </form>
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
export default {
    mounted() {
    },
    components: {
            MoonIcon,
            SunIcon
        },
    layout: 'nolayout',
	computed: {
       currentPath() {
           return this.$route.name
	   },
	}
}
</script>