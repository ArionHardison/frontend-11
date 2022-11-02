<template>
<!-- Header -->
<header class="header header-trans custom">
    <nav class="navbar navbar-expand-lg header-nav no-border">
        <div class="navbar-header">
            <a id="mobile_btn" href="javascript:void(0);">
                <span class="bar-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </a>
            <NuxtLink to="/" class="navbar-brand logo">
                <img src="../assets/img/footer-logo.png" class="img-fluid" alt="Logo">
            </NuxtLink>
        </div>
        <div class="main-menu-wrapper">
            <div class="menu-header">
                <NuxtLink to="/" class="menu-logo">
                    <img src="../assets/img/logo.png" class="img-fluid" alt="Logo">
                </NuxtLink>
                <a id="menu_close" class="menu-close" href="javascript:void(0);">
                    <i class="fas fa-times"></i>
                </a>
            </div>
            <ul class="main-nav white-font">
                <li class="has-submenu active">
                    <a href="">Home <i class="fas fa-chevron-down"></i></a>
                    <ul class="submenu">
                        <li><NuxtLink to="/">Home</NuxtLink></li>
                        <li><NuxtLink to="/index-two">Home 2</NuxtLink></li>
                        <li><NuxtLink to="/index-three">Home 3</NuxtLink></li>
                        <li><NuxtLink to="/index-four">Home 4</NuxtLink></li>
                        <li><NuxtLink to="/index-five">Home 5</NuxtLink></li>
                        <li><NuxtLink to="/index-six">Home 6</NuxtLink></li>
                        <li><NuxtLink to="/index-seven">Home 7</NuxtLink></li>
                        <li class="active"><NuxtLink to="/index-eight">Home 8</NuxtLink></li>
                        <li><NuxtLink to="/index-nine">Home 9</NuxtLink></li>
                        <li><NuxtLink to="/index-ten">Home 10</NuxtLink></li>
                        <li><NuxtLink to="/index-leven">Home 11</NuxtLink></li>
                        <li><NuxtLink to="/index-twelve">Home 12</NuxtLink></li>
                        <li><NuxtLink to="/index-thirteen">Home 13</NuxtLink></li>
                        <li><NuxtLink to="/index-fourteen">Home 14</NuxtLink></li>
                    </ul>
                </li>
                <li class="has-submenu" :class="doctorMenu ? 'active' : 'notactive'">
                    <a href="">Doctors <i class="fas fa-chevron-down"></i></a>
                    <ul class="submenu">
                        <li :class="currentPath == 'doctor-dashboard' ? 'active' : 'notactive'"><NuxtLink to="/doctor-dashboard">Doctor Dashboard</NuxtLink></li>
                        <li :class="currentPath == 'appointments' ? 'active' : 'notactive'"><NuxtLink to="/appointments">Appointments</NuxtLink></li>
                        <li :class="currentPath == 'schedule-timings' ? 'active' : 'notactive'"><NuxtLink to="/schedule-timings">Schedule Timing</NuxtLink></li>
                        <li :class="currentPath == 'my-patients' ? 'active' : 'notactive'"><NuxtLink to="/my-patients">Patients List</NuxtLink></li>
                        <li :class="currentPath == 'patient-profile' ? 'active' : 'notactive'"><NuxtLink to="/patient-profile">Patients Profile</NuxtLink></li>
                        <li :class="currentPath == 'chat-doctor' ? 'active' : 'notactive'"><NuxtLink to="/chat-doctor">Chat</NuxtLink></li>
                        <li :class="currentPath == 'invoices' ? 'active' : 'notactive'"><NuxtLink to="/invoices">Invoices</NuxtLink></li>
                        <li :class="currentPath == 'doctor-profile-settings' ? 'active' : 'notactive'"><NuxtLink to="/doctor-profile-settings">Profile Settings</NuxtLink></li>
                        <li :class="currentPath == 'reviews' ? 'active' : 'notactive'"><NuxtLink to="/reviews">Reviews</NuxtLink></li>
                        <li :class="currentPath == 'doctor-register' ? 'active' : 'notactive'"><NuxtLink to="/doctor-register">Doctor Register</NuxtLink></li>
                        <li class="has-submenu" :class="currentPath == 'doctor-blog' || currentPath == 'blog-details' || currentPath == 'doctor-add-blog'  ? 'has-submenu active' : 'has-submenu notactive'">
                            <NuxtLink to="/doctor-blog">Blog</NuxtLink>
                            <ul class="submenu">
                                <li :class="currentPath == 'doctor-blog' ? 'active' : 'notactive'"><NuxtLink to="/doctor-blog">Blog</NuxtLink></li>
                                <li><NuxtLink to="/blog-details">Blog view</NuxtLink></li>
                                <li :class="currentPath == 'doctor-add-blog' ? 'active' : 'notactive'"><NuxtLink to="/doctor-add-blog">Add Blog</NuxtLink></li>
                            </ul>
                        </li>
                    </ul>
                </li>	
                <li class="has-submenu" :class="patientsMenu ? 'active' : 'notactive'">
                    <a href="">Patients <i class="fas fa-chevron-down"></i></a>
                    <ul class="submenu">
                        <li class="has-submenu" :class="currentPath == 'map-list-1' || currentPath == 'map-grid' || currentPath == 'map-list'  ? 'has-submenu active' : 'has-submenu notactive'">
                            <a href="javascript:void(0);">Doctors</a>
                            <ul class="submenu">
                                <li :class="currentPath == 'map-grid' ? 'active' : 'notactive'"><NuxtLink to="/map-grid">Map Grid</NuxtLink></li>
                                <li :class="currentPath == 'map-list' ? 'active' : 'notactive'"><NuxtLink to="/map-list">Map List</NuxtLink></li>
                                <li :class="currentPath == 'map-list-1' ? 'active' : 'notactive'"><NuxtLink to="/map-list-1">Map List 1</NuxtLink></li>
                            </ul>
                        </li>
                        <li :class="currentPath == 'search' ? 'active' : 'notactive'"><NuxtLink to="/search">Search Doctor</NuxtLink></li>
                        <li :class="currentPath == 'doctor-profile' ? 'active' : 'notactive'"><NuxtLink to="/doctor-profile">Doctor Profile</NuxtLink></li>
                        <li :class="currentPath == 'booking' ? 'active' : 'notactive'"><NuxtLink to="/booking">Booking</NuxtLink></li>
                        <li :class="currentPath == 'checkout' ? 'active' : 'notactive'"><NuxtLink to="/checkout">Checkout</NuxtLink></li>
                        <li :class="currentPath == 'booking-success' ? 'active' : 'notactive'"><NuxtLink to="/booking-success">Booking Success</NuxtLink></li>
                        <li :class="currentPath == 'patient-dashboard' ? 'active' : 'notactive'"><NuxtLink to="/patient-dashboard">Patient Dashboard</NuxtLink></li>
                        <li :class="currentPath == 'favourites' ? 'active' : 'notactive'"><NuxtLink to="/favourites">Favourites</NuxtLink></li>
                        <li :class="currentPath == 'chat' ? 'active' : 'notactive'"><NuxtLink to="/chat">Chat</NuxtLink></li>
                        <li :class="currentPath == 'profile-settings' ? 'active' : 'notactive'"><NuxtLink to="/profile-settings">Profile Settings</NuxtLink></li>
                        <li :class="currentPath == 'change-password' ? 'active' : 'notactive'"><NuxtLink to="/change-password">Change Password</NuxtLink></li>
                    </ul>
                </li>
                <li class="has-submenu" :class="pharmacyMenu ? 'active' : 'notactive'">
                    <a href="">Pharmacy <i class="fas fa-chevron-down"></i></a>
                    <ul class="submenu">
                        <li :class="currentPath == 'pharmacy-index' ? 'active' : 'notactive'"><NuxtLink to="/pharmacy-index">Pharmacy</NuxtLink></li>
                        <li :class="currentPath == 'pharmacy-details' ? 'active' : 'notactive'"><NuxtLink to="/pharmacy-details">Pharmacy Details</NuxtLink></li>
                        <li :class="currentPath == 'pharmacy-search' ? 'active' : 'notactive'"><NuxtLink to="/pharmacy-search">Pharmacy Search</NuxtLink></li>
                        <li :class="currentPath == 'product-all' ? 'active' : 'notactive'"><NuxtLink to="/product-all">Product</NuxtLink></li>
                        <li :class="currentPath == 'product-description' ? 'active' : 'notactive'"><NuxtLink to="/product-description">Product Description</NuxtLink></li>
                        <li :class="currentPath == 'cart' ? 'active' : 'notactive'"><NuxtLink to="/cart">Cart</NuxtLink></li>
                        <li :class="currentPath == 'product-checkout' ? 'active' : 'notactive'"><NuxtLink to="/product-checkout">Product Checkout</NuxtLink></li>
                        <li :class="currentPath == 'payment-success' ? 'active' : 'notactive'"><NuxtLink to="/payment-success">Payment Success</NuxtLink></li>
                        <li :class="currentPath == 'pharmacy-register' ? 'active' : 'notactive'"><NuxtLink to="/pharmacy-register">Pharmacy Register</NuxtLink></li>
                    </ul>
                </li>
                <li class="has-submenu" :class="localMenu ? 'active' : 'notactive'">
						<a href="javascript:void(0);">Pages <i class="fas fa-chevron-down"></i></a>
						
						<ul class="submenu" :class="currentPath == 'invoices' || currentPath == 'invoice-view'   ? 'has-submenu active' : 'has-submenu notactive'">
							<li :class="currentPath == 'voice-call' ? 'active' : 'notactive'"><NuxtLink to="/voice-call">Voice Call</NuxtLink></li>
							<li :class="currentPath == 'video-call' ? 'active' : 'notactive'"><NuxtLink to="/video-call">Video Call</NuxtLink></li>
							<li><NuxtLink to="/search">Search Doctors</NuxtLink></li>
							<li :class="currentPath == 'calendar' ? 'active' : 'notactive'"><NuxtLink to="/calendar">Calendar</NuxtLink></li>
							<li :class="currentPath == 'components' ? 'active' : 'notactive'"><NuxtLink to="/components">Components</NuxtLink></li>
							<li class="has-submenu subdrop-menu" :class="currentPath == 'invoices' || currentPath == 'invoice-view' ? 'active' : 'notactive'">
								<!-- <router-link to="/doctor/invoices">Invoices</router-link> -->
								<a href="javascript:void(0);">Invoices</a>
								<ul class="submenu">
									<li :class="currentPath == 'invoices' ? 'active' : 'notactive'"><NuxtLink to="/invoices">Invoices</NuxtLink></li>
									<li :class="currentPath == 'invoice-view' ? 'active' : 'notactive'"><NuxtLink to="/invoice-view">Invoice View</NuxtLink></li>
								</ul>
							</li>
							<li :class="currentPath == 'blank-page' ? 'active' : 'notactive'"><NuxtLink to="/blank-page">Starter Page</NuxtLink></li>
							<li :class="currentPath == 'about-us' ? 'active' : 'notactive'"><NuxtLink to="/about-us">About Us</NuxtLink></li>
							<li :class="currentPath == 'contact-us' ? 'active' : 'notactive'"><NuxtLink to="/contact-us">Contact Us</NuxtLink></li>
							<li :class="currentPath == 'login' ? 'active' : 'notactive'"><NuxtLink to="/login">Login</NuxtLink></li>
							<li :class="currentPath == 'register' ? 'active' : 'notactive'"><NuxtLink to="/register">Register</NuxtLink></li>
							<li :class="currentPath == 'forgot-password' ? 'active' : 'notactive'"><NuxtLink to="/forgot-password">Forgot Password</NuxtLink></li>
						</ul>
					</li>
                <li class="has-submenu" :class="blogMenu ? 'active' : 'notactive'">
                    <a href="">Blog <i class="fas fa-chevron-down"></i></a>
                    <ul class="submenu">
                        <li :class="currentPath == 'blog-list' ? 'active' : 'notactive'"><NuxtLink to="/blog-list">Blog List</NuxtLink></li>
                        <li :class="currentPath == 'blog-grid' ? 'active' : 'notactive'"><NuxtLink to="/blog-grid">Blog Grid</NuxtLink></li>
                        <li :class="currentPath == 'blog-details' ? 'active' : 'notactive'"><NuxtLink to="/blog-details">Blog Details</NuxtLink></li>
                    </ul>
                </li>
                <li class="has-submenu">
                    <a href="javascript:void(0);" target="_blank">Admin <i class="fas fa-chevron-down"></i></a>
                    <ul class="submenu">
                        <li><NuxtLink to="/admin/login" target="_blank">Admin</NuxtLink></li>
						<li><NuxtLink to="/superadmin/login" target="_blank">Pharmacy Admin</NuxtLink></li>
                    </ul>
                </li>
                <li class="login-link">
                    <NuxtLink to="/login">Login / Signup</NuxtLink>
                </li>
            </ul>
        </div>
        <ul class="nav header-navbar-rht right-menu">
            <li class="nav-item contact-item">
                <div class="header-contact-img">
                    <i class="fas fa-phone-alt"></i>					
                </div>
                <div class="header-contact-detail">
                    <p class="contact-info-header">+1 315 369 5943</p>
                </div>
            </li>
            <li class="nav-item">
                <NuxtLink class="nav-link header-login white-bg" to="/login"><i class="fas fa-user-circle me-2"></i>login</NuxtLink>
            </li>
            <li class="nav-item">
                <NuxtLink class="nav-link header-login" to="/login"><i class="fas fa-lock me-2"></i>Sign up</NuxtLink>
            </li>
        </ul>
    </nav>
</header>
<!-- /Header -->
</template>
   
   <script>
   
   export default {
	  mounted() {
        
		  var $wrapper = $('.main-wrapper');
		  $('.main-nav a').on('click', function(e) {
			   if($(this).parent().hasClass('has-submenu')) {
				   e.preventDefault();
			   }
			   if(!$(this).hasClass('submenu')) {
				   $('ul', $(this).parents('ul:first')).slideUp(350);
				   $('a', $(this).parents('ul:first')).removeClass('submenu');
				   $(this).next('ul').slideDown(350);
				   $(this).addClass('submenu');
			   } else if($(this).hasClass('submenu')) {
				   $(this).removeClass('submenu');
				   $(this).next('ul').slideUp(350);
			   }
		   });
		  $('body').append('<div class="sidebar-overlay"></div>');
		  $(document).on('click', '#mobile_btn', function() {
			  $wrapper.toggleClass('slide-nav');
			  $('.sidebar-overlay').toggleClass('opened');
			  $('html').addClass('menu-opened');
			  $('#task_window').removeClass('opened');
			  return false;
		  });
		  
	   $(document).on('click', '#menu_close', function() {
		   $('html').removeClass('menu-opened');
		   $('.sidebar-overlay').removeClass('opened');
		   $('main-wrapper').removeClass('slide-nav');
	   });
	   $('.main-nav ul li:not(.submenu) a').click(function(){
			   $("html").removeClass('menu-opened');         
			   $(".sidebar-overlay").removeClass('opened');
		   });
   
	  },
	  computed: {
		currentPath() {
           return this.$route.name
       },
       homeMenu() {
           return this.$route.name == 'index' || this.$route.name == 'index-three' || this.$route.name == 'index-four' || this.$route.name == 'index-six';
       },
       doctorMenu() {
          return this.$route.name == 'doctor-index' || this.$route.name == 'doctor-appointments' || this.$route.name == 'schedule-timings' ||  this.$route.name == 'my-patients' ||  this.$route.name == 'messages' ||  this.$route.name == 'invoices' ||  this.$route.name == 'profile-settings' ||  this.$route.name == 'doctor-reviews' ||  this.$route.name == 'doctor-register' ||  this.$route.name == 'doctor-blogs' ||  this.$route.name == 'add-blog' ||  this.$route.name == 'edit-blog' ||  this.$route.name == 'add-prescription' ||  this.$route.name == 'edit-prescription' ||  this.$route.name == 'add-billing' ||  this.$route.name == 'edit-billing';
       },
       patientsMenu() {
           return this.$route.name == 'map-list-1' ||  this.$route.name == 'search' ||  this.$route.name == 'map-grid' || this.$route.name == 'map-list' || this.$route.name == 'doctor-profile' || this.$route.name == 'search-doctor' ||  this.$route.name == 'booking' ||  this.$route.name == 'booking-success' ||  this.$route.name == 'checkout' ||  this.$route.name == 'patient-dashboard' ||  this.$route.name == 'favourites' ||  this.$route.name == 'chat' ||  this.$route.name == 'patient-profile-settings' ||  this.$route.name == 'patient-change-password';
       },
	   
       pharmacyMenu() {
           return this.$route.name == 'pharmacy-index' ||  this.$route.name == 'product-description' ||   this.$route.name == 'product-all' ||  this.$route.name == 'pharmacy-details' || this.$route.name == 'pharmacy-search' ||  this.$route.name == 'product-checkout' ||  this.$route.name == 'payment-success' ||  this.$route.name == 'pharmacy-register';
       },
       localMenu() {
           return this.$route.name == 'register' ||   this.$route.name == 'contact-us' ||  this.$route.name == 'about-us' || this.$route.name == 'voice-call' || this.$route.name == 'video-call' || this.$route.name == 'calendar' || this.$route.name == 'components' || this.$route.name == 'invoice-view' || this.$route.name == 'login' || this.$route.name == 'blank-page' || this.$route.name == 'invoices' || this.$route.name == 'forgot-password';
       },
       blogMenu() {
           return this.$route.name == 'blog-list' || this.$route.name == 'blog-grid' || this.$route.name == 'blog-details';
       }
	  },
   }
   </script>