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
                    <div class="col-lg-12 p-0">
                        <div class="right-panel-title text-center">
                            <NuxtLink to="/"> <img src="../assets/img/onboard-img/onb-logo.png" alt=""></NuxtLink>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12">
                        <div class="on-board-wizard">
                            <ul>
                                <li>
                                    <NuxtLink to="/onboarding-email">
                                        <div class="onboarding-progress active">
                                            <span>1</span>
                                        </div>
                                        <div class="onboarding-list">
                                            <h6>Registration</h6>
                                            <p>Enter Details for Register </p>
                                        </div>
                                    </NuxtLink>
                                </li>

                                <li>
                                    <NuxtLink to="/onboarding-identity">
                                        <div class="onboarding-progress active">
                                            <span>2</span>
                                        </div>
                                        <div class="onboarding-list">
                                            <h6>Upload Identity</h6>
                                            <p>Upload your Identity for Verification</p>
                                        </div>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/onboarding-personalize">
                                        <div class="onboarding-progress active">
                                            <span>3</span>
                                        </div>
                                        <div class="onboarding-list">
                                            <h6>Personal Details</h6>
                                            <p>Enter your Personal Details</p>
                                        </div>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/onboarding-verification">
                                        <div class="onboarding-progress">
                                            <span>4</span>
                                        </div>
                                        <div class="onboarding-list">
                                            <h6>Doctor Verification</h6>
                                            <p>Upload Documents for the Verification</p>
                                        </div>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/onboarding-payments">
                                        <div class="onboarding-progress ">
                                            <span>5</span>
                                        </div>
                                        <div class="onboarding-list">
                                            <h6>Payment details</h6>
                                            <p>Setup Your Payment Details</p>
                                        </div>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/onboarding-preferences">
                                        <div class="onboarding-progress ">
                                            <span>6</span>
                                        </div>
                                        <div class="onboarding-list">
                                            <h6>Preferences</h6>
                                            <p>Setup Your Preferences for your Account</p>
                                        </div>
                                    </NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-12">
                        <div class="onboarding-content-box">
                            <div class="onboarding-title profile-title">
                                <h2>Personalize Your Profile <span>*</span></h2>
                            </div>
                            <div class="onboarding-content passcode-wrap mail-box">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <div class="upload-pic">
                                                <img src="../assets/img/icons/up-img-1.svg" alt="img" id="blah">
                                                <h6>Upload Photo</h6>
                                                <div class="upload-pics">
                                                    <a class="btn-profile"><img src="../assets/img/icons/edit.svg"
                                                            alt=""></a>
                                                    <input type="file" id="imgInp">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="photo-norms">
                                                <h5>Logo Should be minimum 152 * 152 Supported File format JPG,PNG,SVG
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <label class="onboarding-lable">Legal Name <span>*</span></label>
                                            <input type="text" placeholder="Enter Name"
                                                class="form-control placeholder-style" required="">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label class="onboarding-lable">Gender <span>*</span></label>
                                            <select class="select">
                                                <option disabled selected>Select Gender</option>
                                                <option>male</option>
                                                <option>female</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label class="onboarding-lable">Date of Birth <span>*</span></label>
                                            <input type="text" placeholder="DD/MM/YYYY"
                                                class="form-control placeholder-style datetimepicker" required="">
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <label class="onboarding-lable">Address<span>*</span></label>
                                            <input type="text" placeholder="Enter Address"
                                                class="form-control placeholder-style" required="">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label class="onboarding-lable">City <span>*</span></label>
                                            <input type="text" placeholder="Enter City"
                                                class="placeholder-style form-control" required="">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label class="onboarding-lable">State<span>*</span></label>
                                            <select class="select">
                                                <option disabled selected>Select State</option>
                                                <option>Washington</option>
                                                <option>Florida</option>
                                                <option>Alaska</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <label class="onboarding-lable">About you <span>*</span></label>
                                            <textarea></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="onboarding-btn Personalize-btn">
                                    <NuxtLink to="/onboarding-verification">Continue</NuxtLink>
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
        if ($('.select').length > 0) {
		$('.select').select2({
			minimumResultsForSearch: -1,
			width: '100%'
		});
	}
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