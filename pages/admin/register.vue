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
        
            <!-- Login -->
            <div class="login-wrapper">
                <div class="loginbox">
                    <div class="img-logo">
                        <img src="../../assets/admin_img/logo.png" class="img-fluid" alt="Logo">
                    </div>
                    <h3>Getting Started</h3>
                    <p class="account-subtitle">Register with email</p>
                                
                    <form>
                        <div class="form-group form-focus">
                            <input type="text" class="form-control floating">
                            <label class="focus-label"> Email</label>
                        </div>
                        <div class="form-group form-focus">
                            <input type="password" class="form-control floating">
                            <label class="focus-label">Enter Password</label>
                        </div>
                        <div class="form-group form-focus">
                            <input type="password" class="form-control floating">
                            <label class="focus-label">Confirm Password</label>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-12">
                                    <label class="custom_check mr-2 mb-0"> I agree to the <a href="javascript:void(0);" class="text-primary"> terms of service</a> and <a href="javascript:void(0);" class="text-primary">privacy policy</a>
                                        <input type="checkbox" name="radio">
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <NuxtLink to="/admin/login">
                        <div class="d-grid">
                            <button class="btn btn-primary" type="submit">Register</button>
                        </div>
                        </NuxtLink>
                        <div class="dont-have">Already have an account? <NuxtLink to="/admin/login">Login</NuxtLink></div>
                        <div class="login-or">
                            <span class="or-line"></span>
                            <p class="span-or">or login with </p>
                        </div>
                        <!-- Social Login -->
                        <div class="social-login">
                            <a href="javascript:void(0);"><img src="../../assets/admin_img/icon/google.png" class="img-fluid" alt="Logo"></a>
                            <a href="javascript:void(0);"><img src="../../assets/admin_img/icon/facebook.png" class="img-fluid" alt="Logo"></a>
                            <a href="javascript:void(0);"><img src="../../assets/admin_img/icon/twitter.png" class="img-fluid" alt="Logo"></a>
                        </div>
                        <!-- /Social Login -->
                    </form>
                </div>
            </div>
            <!-- /Login -->
            
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