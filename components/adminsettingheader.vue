<template>
	<!-- Header -->
	<div class="header">
			
        <!-- Logo -->
        <div class="header-left">
            <NuxtLink to="/superadmin/superadmin_index" class="logo">
                <img src="../assets/pharmacy_img/logo.png" alt="Logo">
            </NuxtLink>
            <NuxtLink to="/superadmin/superadmin_index" class="logo logo-small">
                <img src="../assets/pharmacy_img/logo-small.png" alt="Logo" width="30" height="30">
            </NuxtLink>
            <a href="javascript:void(0);" id="toggle_btn">
                <chevrons-left-icon size="1.4x" class="custom-class"></chevrons-left-icon>
            </a>
        </div>
        <!-- /Logo -->
        
        <!-- Search -->
        <div class="top-nav-search">
            <div class="main">
                <form class="search" method="post">
                    <NuxtLink to="/superadmin/superadmin_index">
                    <button class="btn" type="submit"><i class="fa fa-search"></i></button>
                    <input type="text" class="form-control" placeholder="Search here...">
                    </NuxtLink>
                </form>
            </div>
        </div>
        <!-- /Search -->
        
        <!-- Mobile Menu Toggle -->
        <a class="mobile_btn" id="mobile_btn">
            <i class="fas fa-bars"></i>
        </a>
        <!-- /Mobile Menu Toggle -->
        
        <!-- Header Menu -->
        <ul class="nav nav-tabs user-menu">
            <!-- Flag -->
            <li class="nav-item">
                
                <a href="javascript:void(0);" id="dark-mode-toggle" class="dark-mode-toggle">
                    <sun-icon size="1.4x" class="custom-class light-mode ms-1"></sun-icon><moon-icon size="1.4x" class="custom-class dark-mode ms-2"></moon-icon>
                </a>
            </li>
            <!-- /Flag -->
            
            <!-- Notifications -->
            <li class="nav-item dropdown noti-nav">
                <a href="javascript:void(0);" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                    <bell-icon size="1.4x" class="custom-class"></bell-icon> <span class="badge"></span>
                </a>
                <div class="dropdown-menu notifications">
                    <div class="topnav-dropdown-header">
                        <span class="notification-title">Notifications</span>
                        <a href="javascript:void(0)" class="clear-noti"> Clear All </a>
                    </div>
                    <div class="noti-content">
                        <ul class="notification-list">
                            <li class="notification-message">
                                <a href="javascript:void(0);">
                                    <div class="media d-flex">
                                        <span class="avatar">
                                            <img class="avatar-img" alt="" src="../assets/pharmacy_img/profiles/avatar-02.jpg">
                                        </span>
                                        <div class="media-body">
                                            <h6>Travis Tremble <span class="notification-time">18.30 PM</span></h6>
                                            <p class="noti-details">Sent a amount of $210 for his Appointment  <span class="noti-title">Dr.Ruby perin </span></p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="notification-message">
                                <a href="javascript:void(0);">
                                    <div class="media d-flex">
                                        <span class="avatar">
                                            <img class="avatar-img" alt="" src="../assets/pharmacy_img/profiles/avatar-05.jpg">
                                        </span>
                                        <div class="media-body">
                                            <h6>Travis Tremble <span class="notification-time">12 Min Ago</span></h6>
                                            <p class="noti-details"> has booked her appointment to  <span class="noti-title">Dr. Hendry Watt</span></p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="notification-message">
                                <a href="javascript:void(0);">
                                    <div class="media d-flex">
                                        <div class="avatar">
                                            <img class="avatar-img" alt="" src="../assets/pharmacy_img/profiles/avatar-03.jpg">
                                        </div>
                                        <div class="media-body">
                                            <h6>Travis Tremble <span class="notification-time">6 Min Ago</span></h6>
                                            <p class="noti-details"> Sent a amount  $210 for his Appointment   <span class="noti-title">Dr.Maria Dyen</span></p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="notification-message">
                                <a href="javascript:void(0);">
                                    <div class="media d-flex">
                                        <div class="avatar avatar-sm">
                                            <img class="avatar-img" alt="" src="../assets/pharmacy_img/profiles/avatar-06.jpg">
                                        </div>
                                        <div class="media-body">
                                            <h6>Travis Tremble <span class="notification-time">8.30 AM</span></h6>
                                            <p class="noti-details"> Send a message to his doctor</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="topnav-dropdown-footer">
                        <a href="javascript:void(0);">View all Notifications</a>
                    </div>
                </div>
            </li>
            <!-- /Notifications -->
            
            <!-- User Menu -->
            <li class="nav-item dropdown main-drop">
                <a href="javascript:void(0);" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                    <span class="user-img">
                        <img src="../assets/pharmacy_img/profiles/avatar-01.jpg" alt="">
                        <span class="status online"></span>
                    </span>
                </a>
                <div class="dropdown-menu">
                    <div class="user-header">
                        <div class="avatar avatar-sm">
                            <img src="../assets/pharmacy_img/profiles/avatar-01.jpg" alt="User Image" class="avatar-img rounded-circle">
                        </div>
                        <div class="user-text">
                            <h6>Robert Haddin</h6>
                            <p class="text-muted mb-0">Administrator</p>
                        </div>
                    </div>
                    <NuxtLink class="dropdown-item" to="/superadmin/profile"><user-icon size="1.4x" class="custom-class me-1"></user-icon> My Profile</NuxtLink>
                    <NuxtLink class="dropdown-item" to="/superadmin/settings"><sliders-icon size="1.4x" class="custom-class me-1"></sliders-icon>Settings</NuxtLink>
                    <hr class="my-0 ms-2 me-2">
                    <NuxtLink class="dropdown-item" to="/superadmin/login"><log-out-icon size="1.4x" class="custom-class me-1"></log-out-icon> Logout</NuxtLink>
                </div>
            </li>
            <!-- /User Menu -->
            
        </ul>
        <!-- /Header Menu -->
        
    </div>
   <!-- /Header -->
   </template>
   
   <script>
import { ChevronsLeftIcon } from 'vue-feather-icons'
import { UserIcon } from 'vue-feather-icons'
import { UsersIcon } from 'vue-feather-icons'
import { MoonIcon } from 'vue-feather-icons'
import { SunIcon } from 'vue-feather-icons'
import { CalendarIcon } from 'vue-feather-icons'
import { BellIcon } from 'vue-feather-icons'
import { MoreVerticalIcon } from 'vue-feather-icons'
import { EditIcon } from 'vue-feather-icons'
import { SlidersIcon } from 'vue-feather-icons'
import { LogOutIcon } from 'vue-feather-icons'
   export default {
    components: {
            ChevronsLeftIcon,
            UserIcon,
            UsersIcon,
            MoonIcon,
            SunIcon,
            CalendarIcon,
            BellIcon,
            MoreVerticalIcon,
            UserIcon,
            EditIcon,
            SlidersIcon,
            LogOutIcon
        },
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
           $(document).on('click', '#toggle_btn', function() {
		if($('body').hasClass('mini-sidebar')) {
			$('body').removeClass('mini-sidebar');
			$('.subdrop + ul').slideDown();
		} else {
			$('body').addClass('mini-sidebar');
			$('.subdrop + ul').slideUp();
		}
		return false;
	});
	$(document).on('mouseover', function(e) {
		e.stopPropagation();
		if($('body').hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
			var targ = $(e.target).closest('.sidebar').length;
			if(targ) {
				$('body').addClass('expand-menu');
				$('.subdrop + ul').slideDown();
			} else {
				$('body').removeClass('expand-menu');
				$('.subdrop + ul').slideUp();
			}
			return false;
		}
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