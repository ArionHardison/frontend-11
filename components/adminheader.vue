<template>
<div>

    <div class="header">
			
        <!-- Logo -->
        <div class="header-left">
            <NuxtLink to="/admin/admin_index" class="logo">
                <img src="../assets/admin_img/logo.png" alt="Logo">
            </NuxtLink>
            <NuxtLink to="/admin/admin_index" class="logo logo-small">
                <img src="../assets/admin_img/logo-small.png" alt="Logo" width="30" height="30">
            </NuxtLink>
            <a href="javascript:void(0);" id="toggle_btn">
                <chevrons-left-icon size="1.4x" class="custom-class"></chevrons-left-icon>
            </a>
        </div>
        <!-- /Logo -->
        
        <!-- Search -->
        <div class="top-nav-search">
            <div class="main">
                <form class="search" >
                    <NuxtLink to="/admin/admin_index">
                    <div class="s-icon"><i class="fas fa-search"></i></div>
                    <input type="text" class="form-control" placeholder="Start typing your Search..." />
                    </NuxtLink>
                    <ul class="results">
                        <li>
                            <h6><calendar-icon size="1.4x" class="custom-class me-1"></calendar-icon> Appointments</h6>
                            <p>No matched Appointment found. <NuxtLink to="/admin/upcoming-appointments"><span>View all</span></NuxtLink></p>
                        </li>
                        <li>
                            <h6><calendar-icon size="1.4x" class="custom-class me-1"></calendar-icon> Specialities</h6>
                            <p>No matched Appointment found. <NuxtLink to="/admin/specialities"><span>View all</span></NuxtLink></p>
                        </li>
                        <li>
                            <h6><user-icon size="1.4x" class="custom-class me-1"></user-icon> Doctors</h6>
                            <p>No matched Appointment found. <NuxtLink to="/admin/doctor-list"><span>View all</span></NuxtLink></p>
                        </li>
                        <li>
                            <h6><users-icon size="1.4x" class="custom-class me-1"></users-icon> Patients</h6>
                            <p>No matched Appointment found. <NuxtLink to="/admin/patient-list"><span>View all</span></NuxtLink></p>
                        </li>
                    </ul>
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
                        <a href="javascript:void(0)" class="clear-noti"><more-vertical-icon size="1.4x" class="custom-class"></more-vertical-icon></a>
                    </div>
                    <div class="noti-content">
                        <ul class="notification-list">
                            <li class="notification-message">
                                <a href="javascript:void(0);">
                                    <div class="media d-flex">
                                        <span class="avatar">
                                            <img class="avatar-img" alt="" src="../assets/admin_img/profiles/avatar-02.jpg">
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
                                            <img class="avatar-img" alt="" src="../assets/admin_img/profiles/avatar-05.jpg">
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
                                            <img class="avatar-img" alt="" src="../assets/admin_img/profiles/avatar-03.jpg">
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
                                            <img class="avatar-img" alt="" src="../assets/admin_img/profiles/avatar-06.jpg">
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
                </div>
            </li>
            <!-- /Notifications -->
            
            <!-- User Menu -->
            <li class="nav-item dropdown main-drop">
                <a href="javascript:void(0);" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                    <span class="user-img">
                        <img src="../assets/admin_img/profiles/avatar-01.jpg" alt="">
                        <span class="status online"></span>
                    </span>
                </a>
                <div class="dropdown-menu">
                    <div class="user-header">
                        <div class="avatar avatar-sm">
                            <img src="../assets/admin_img/profiles/avatar-01.jpg" alt="User Image" class="avatar-img rounded-circle">
                        </div>
                        <div class="user-text">
                            <h6>Robert Haddin</h6>
                            <p class="text-muted mb-0">Administrator</p>
                        </div>
                    </div>
                    <NuxtLink class="dropdown-item" to="/admin/profile"><user-icon size="1.4x" class="custom-class me-1"></user-icon> My Profile</NuxtLink>
                    <NuxtLink class="dropdown-item" to="/admin/profile"><edit-icon size="1.4x" class="custom-class me-1"></edit-icon> Edit Profile</NuxtLink>
                    <NuxtLink class="dropdown-item" to="/admin/account-settings"><sliders-icon size="1.4x" class="custom-class me-1"></sliders-icon> Account Settings</NuxtLink>
                    <hr class="my-0 ms-2 me-2">
                    <NuxtLink class="dropdown-item" to="/admin/login"><log-out-icon size="1.4x" class="custom-class me-1"></log-out-icon> Logout</NuxtLink>
                </div>
            </li>
            <!-- /User Menu -->
            
        </ul>
        <!-- /Header Menu -->
        
    </div>

</div>
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
$('body').append('<div class="sidebar-overlay"></div>');
$(document).on('click', '#mobile_btn', function() {
$wrapper.toggleClass('slide-nav');
$('.sidebar-overlay').toggleClass('opened');
$('html').addClass('menu-opened');
$('#task_window').removeClass('opened');
return false;
});
// Sidebar overlay
$(document).on('click', '.top-nav-search .responsive-search', function() {
$('.top-nav-search').toggleClass('active');
});
$('.sidebar-menu ul li:not(.submenu) a').click(function () {
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
	}
</script>