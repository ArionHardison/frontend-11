<template>
<div>
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
                                        <div class="onboarding-progress active">
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
                                        <div class="onboarding-progress active">
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
                                        <div class="onboarding-progress active">
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
                        <div class="onboarding-content-box position-relative">
                            <div class="onboarding-title">
                                <h2>Add availability<span>*</span></h2>
                                <h6>Visitors will only be able to schedule appointments during available hours.</h6>
                            </div>
                            <div class="onboarding-content passcode-wrap mail-box">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <label class="onboarding-lable">Date</label>
                                            <input type="text" placeholder="Select Date"
                                                class="form-control placeholder-style datetimepicker" required="">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label class="onboarding-lable">Time will you be available?</label>
                                            <select class="select">
                                                <option disabled selected>Start Time</option>
                                                <option>12:00 a.m</option>
                                                <option>1:00 a.m</option>
                                                <option>2:00 a.m</option>
                                                <option>3:00 a.m</option>
                                                <option>4:00 a.m</option>
                                                <option>5:00 a.m</option>
                                                <option>6:00 a.m</option>
                                                <option>7:00 a.m</option>
                                                <option>8:00 a.m</option>
                                                <option>9:00 a.m</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label class="onboarding-lable">&nbsp;</label>
                                            <select class="select">
                                                <option disabled selected>End Time</option>
                                                <option>12:00 a.m</option>
                                                <option>1:00 a.m</option>
                                                <option>2:00 a.m</option>
                                                <option>3:00 a.m</option>
                                                <option>4:00 a.m</option>
                                                <option>5:00 a.m</option>
                                                <option>6:00 a.m</option>
                                                <option>7:00 a.m</option>
                                                <option>8:00 a.m</option>
                                                <option>9:00 a.m</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <div class="repeat-avail d-flex ">
                                                <div class="tog-button">
                                                    <label class="switch">
                                                        <input type="checkbox">
                                                        <span class="tog-slider round"></span>
                                                    </label>
                                                </div>
                                                <div class="avail-content d-flex ">
                                                    <a href="javascript:void(0);">
                                                        <h6><img src="../assets/img/icons/repeat.svg" alt=""> Repeat
                                                            Availability</h6>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <label class="onboarding-lable">Choose any day of the week to repeat this
                                                availability.</label>
                                            <div class="weekDays-selector">
                                                <input type="checkbox" id="weekday-mon" class="weekday" />
                                                <label for="weekday-mon">M</label>
                                                <input type="checkbox" id="weekday-tue" class="weekday" />
                                                <label for="weekday-tue">T</label>
                                                <input type="checkbox" id="weekday-wed" class="weekday" />
                                                <label for="weekday-wed">W</label>
                                                <input type="checkbox" id="weekday-thu" class="weekday" />
                                                <label for="weekday-thu">T</label>
                                                <input type="checkbox" id="weekday-fri" class="weekday" />
                                                <label for="weekday-fri">F</label>
                                                <input type="checkbox" id="weekday-sat" class="weekday" />
                                                <label for="weekday-sat">S</label>
                                                <input type="checkbox" id="weekday-sun" class="weekday" />
                                                <label for="weekday-sun">S</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <label class="onboarding-lable">Repeat this schedule until</label>
                                            <input type="text" placeholder="Select Date"
                                                class="form-control placeholder-style datetimepicker" required="">
                                        </div>
                                    </div>
                                </div>
                                <div class="onboarding-btn Personalize-btn">
                                    <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#id-verified">Save & Next</a>
                                </div>
                                <!-- Modal -->
                                <div class="modal fade fade-custom" id="id-verified" tabindex="-1"
                                    aria-labelledby="id-verification" aria-hidden="true">
                                    <div class="modal-dialog id-upload modal-dialog-centered">
                                        <div class="modal-content id-pop-content">
                                            <div class="modal-header id-pop-header justify-content-center">
                                                <img src="../assets/img/icons/success-tick.svg" alt="">
                                            </div>
                                            <div class="modal-body id-pop-body text-center">
                                                <h2>Doctor’s profile has been verified</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </div>
                                            <div class="modal-footer id-pop-footer text-center">
                                                <div class="onboarding-btn pop-btn ">
                                                    <a href="javascript:void(0);" data-bs-dismiss="modal">Continue</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
