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
                            <img src="../../assets/pharmacy_img/logo.png" class="img-fluid" alt="Logo">
                        </div>
                        <h3>Login</h3>
                        <p class="account-subtitle">login to your account to continue</p>
                                    
                        <form>
                            <div class="form-group form-focus">
                                <input type="text" class="form-control floating" value="admin@example.com">
                                <label class="focus-label">Enter Email</label>
                            </div>
                            <div class="form-group form-focus">
                                <input type="password" class="form-control floating pass-input" value="123456"><span class="fa fa-eye-slash toggle-password pt-4"></span>
                                <label class="focus-label">Enter Password</label>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-6">
                                        <label class="custom_check mr-2 mb-0 d-inline-flex"> Remember me  
                                            <input type="checkbox" name="radio">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div class="col-6 text-end">
                                        <NuxtLink class="forgot-link" to="/superadmin/forgot-password">Forgot Password ?</NuxtLink>
                                    </div>
                                </div>
                            </div>
                            
                            <NuxtLink to="/superadmin/superadmin_index">
                            <div class="d-grid">
                                <button class="btn btn-primary" type="submit">Login</button>
                            </div>
                        </NuxtLink>
                            <div class="dont-have">Don't have an account? <NuxtLink to="/superadmin/register">Sign up</NuxtLink></div>
                            <div class="login-or">
                                <span class="or-line"></span>
                                <p class="span-or">or login with </p>
                            </div>
                            <!-- Social Login -->
                            <div class="social-login">
                                <a href="javascript:void(0);"><img src="../../assets/pharmacy_img/icon/google.png" class="img-fluid" alt="Logo"></a>
                                <a href="javascript:void(0);"><img src="../../assets/pharmacy_img/icon/facebook.png" class="img-fluid" alt="Logo"></a>
                                <a href="javascript:void(0);"><img src="../../assets/pharmacy_img/icon/twitter.png" class="img-fluid" alt="Logo"></a>
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
           if($('.floating').length > 0 ){
		$('.floating').on('focus blur', function (e) {
		$(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
		}).trigger('blur');
	}
    if($('.toggle-password').length > 0) {
		$(document).on('click', '.toggle-password', function() {
		  $(this).toggleClass("fa-eye fa-eye-slash");
		  var input = $(".pass-input");
		  if (input.attr("type") == "password") {
			input.attr("type", "text");
		  } else {
			input.attr("type", "password");
		  }
		});
	  }
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