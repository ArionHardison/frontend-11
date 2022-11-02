<template>
<div class="onboard-page">
    <div class="onboard-wrapper">
        <div class="left-panel">
            <div class="onboarding-logo text-center">
                <NuxtLink to="/"><img src="../assets/img/onboard-img/onb-logo.png" class="img-fluid" alt=""></NuxtLink>
            </div>
            <div class="onboard-img">
                <img src="../assets/img/onboard-img/onb-slide-img.png" class="img-fluid" alt="">
            </div>
            <div class="onboarding-slider">
                <!-- Slider -->
                <div id="onboard-slider" class="owl-carousel owl-theme onboard-slider slider">
                    <!-- Slider Item -->
                    <div class="onboard-item text-center">
                        <div class="onboard-content">
                            <h3>Welcome to Doccure</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </p>
                        </div>
                    </div>
                    <!-- /Slider Item -->
                    <!-- Slider Item -->
                    <div class="onboard-item text-center">
                        <div class="onboard-content">
                            <h3>Welcome to Doccure</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </p>
                        </div>
                    </div>
                    <!-- /Slider Item -->
                    <!-- Slider Item -->
                    <div class="onboard-item text-center">
                        <div class="onboard-content">
                            <h3>Welcome to Doccure</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </p>
                        </div>
                    </div>
                    <!-- /Slider Item -->

                </div>
                <!-- /Slider -->
            </div>
        </div>
        <div class="right-panel">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="set-path">
                            <div class="onboarding-content-box lock-box">
                                <div class="lock-content text-center">
                                    <img src="../assets/img/icons/lock.svg" alt="">
                                    <h2>Your account is temporarily <br> disabled.</h2>
                                    <h6>Kindly wait a few seconds</h6>
                                    <a href="javascript:void(0);">Continue</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<Nuxt />
 </div>
</template>

<script>
export default {
	layout: 'nolayout',
	mounted() {
        if($('.onboard-slider').length > 0) {
        $('#onboard-slider').owlCarousel({
			items: 1,
	        margin: 30,
	        dots : true,
			nav: true,
			navText: false,
			loop: true,
			smartSpeed:450,
			autoplay:true,
			autoplayTimeout:5000,
			autoplayHoverPause:true,
			responsiveClass:true,
	        responsive: {
	          	0: {
	            	items: 1
	          	},
	          	768 : {
	            	items: 1
	          	},
	          	1170: {
	            	items: 1
	          	}
	        }
	    });
    }
	},
	computed: {
       currentPath() {
           return this.$route.name
	   },
	}
}
</script>