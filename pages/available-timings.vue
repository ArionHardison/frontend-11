<template>
<div class="main-wrapper">

<!-- Breadcrumb -->
<div class="breadcrumb-bar">
    <div class="container-fluid">
        <div class="row align-items-center">
            <div class="col-md-12 col-12">
                <nav aria-label="breadcrumb" class="page-breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><NuxtLink to="/">Home</NuxtLink></li>
                        <li class="breadcrumb-item active" aria-current="page">Available Timings</li>
                    </ol>
                </nav>
                <h2 class="breadcrumb-title">Available Timings</h2>
            </div>
        </div>
    </div>
</div>
<!-- /Breadcrumb -->

<!-- Page Content -->
<div class="content">
    <div class="container-fluid">

        <div class="row">
            <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
            <div class="stickyside">
                <!-- Profile Sidebar -->
                <div class="profile-sidebar">
                    <div class="widget-profile pro-widget-content">
                        <div class="profile-info-widget">
                            <a href="javascript:void(0);" class="booking-doc-img">
                                <img src="../assets/img/doctors/doctor-thumb-02.jpg" alt="User Image">
                            </a>
                            <div class="profile-det-info">
                                <h3>Dr. Darren Elder</h3>
                                
                                <div class="patient-details">
                                    <h5 class="mb-0">BDS, MDS - Oral & Maxillofacial Surgery</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="dashboard-widget">
                        <nav class="dashboard-menu">
                            <ul>
                                <li>
                                    <NuxtLink to="/doctor-dashboard">
                                        <i class="fas fa-columns"></i>
                                        <span>Dashboard</span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/appointments">
                                        <i class="fas fa-calendar-check"></i>
                                        <span>Appointments</span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/my-patients">
                                        <i class="fas fa-user-injured"></i>
                                        <span>My Patients</span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/schedule-timings">
                                        <i class="fas fa-hourglass-start"></i>
                                        <span>Schedule Timings</span>
                                    </NuxtLink>
                                </li>
                                <li class="active">
                                    <NuxtLink to="/available-timings">
                                        <i class="fas fa-clock"></i>
                                        <span>Available Timings</span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/invoices">
                                        <i class="fas fa-file-invoice"></i>
                                        <span>Invoices</span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/accounts">
                                        <i class="fas fa-file-invoice-dollar"></i>
                                        <span>Accounts</span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/reviews">
                                        <i class="fas fa-star"></i>
                                        <span>Reviews</span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/chat-doctor">
                                        <i class="fas fa-comments"></i>
                                        <span>Message</span>
                                        <small class="unread-msg">23</small>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/doctor-profile-settings">
                                        <i class="fas fa-user-cog"></i>
                                        <span>Profile Settings</span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/social-media">
                                        <i class="fas fa-share-alt"></i>
                                        <span>Social Media</span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/doctor-change-password">
                                        <i class="fas fa-lock"></i>
                                        <span>Change Password</span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/">
                                        <i class="fas fa-sign-out-alt"></i>
                                        <span>Logout</span>
                                    </NuxtLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <!-- /Profile Sidebar -->
            </div>    
            </div>
            
            <div class="col-md-7 col-lg-8 col-xl-9">
             
                <div class="row">
                    <div class="col-sm-12">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Schedule Timings</h4>
                                <div class="profile-box">
                                    <div class="row">
                                        <div class="col-sm-6 col-12 avail-time">
                                            <div class="mb-3">
                                                <div class="schedule-calendar-col justify-content-start">
                                                    <form class="d-flex flex-wrap">
                                                        <span class="input-group-text">Date:</span> 
                                                        <div class="me-3">
                                                            <input type="date" class="form-control" name="schedule_date" id="schedule_date" value="2021-05-21" min="2021-05-21">
                                                        </div>
                                                        <div class="search-time-mobile">
                                                            <input type="submit" name="submit" value="Search" class="btn btn-primary h-100">
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <h3 class="h3 text-center book-btn2 mt-3 px-5 py-1 mx-3 rounded">1<sup>st</sup> Session </h3>
                                            <div class="text-center mt-3">
                                                <h4 class="h4 mb-2">Start Time </h4>
                                                <span class="h4 btn btn-outline-primary"><b> 09:00 AM</b></span>
                                            </div>
                                            <div class="token-slot mt-2">
                                                <div class="form-check-inline visits me-0">
                                                    <label class="visit-btns">
                                                        <input type="checkbox" class="form-check-input"  value="18">
                                                        <span class="visit-rsn" data-bs-toggle="tooltip" title="02:40 PM">02:40 PM</span>
                                                    </label>
                                                </div>
                                                <div class="form-check-inline visits me-0">
                                                    <label class="visit-btns">
                                                        <input type="checkbox" class="form-check-input" data-date="2021-05-21" data-timezone="Asia/Calcutta" data-start-time="15:00:00" data-end-time="15:20:00" data-session="1" name="token[]" value="19">
                                                        <span class="visit-rsn" data-bs-toggle="tooltip" title="03:00 PM">03:00 PM</span>
                                                    </label>
                                                </div>
                                                <div class="form-check-inline visits me-0">
                                                    <label class="visit-btns">
                                                        <input type="checkbox" class="form-check-input" data-date="2021-05-21" data-timezone="Asia/Calcutta" data-start-time="15:20:00" data-end-time="15:40:00" data-session="1" name="token[]" value="20">
                                                        <span class="visit-rsn" data-bs-toggle="tooltip" title="03:20 PM">03:20 PM</span>
                                                    </label>
                                                </div>
                                                <div class="form-check-inline visits me-0">
                                                    <label class="visit-btns">
                                                        <input type="checkbox" class="form-check-input" data-date="2021-05-21" data-timezone="Asia/Calcutta" data-start-time="15:40:00" data-end-time="16:00:00" data-session="1" name="token[]" value="21">
                                                        <span class="visit-rsn" data-bs-toggle="tooltip" title="03:40 PM">03:40 PM</span>
                                                    </label>
                                                </div>
                                                <div class="form-check-inline visits me-0">
                                                    <label class="visit-btns">
                                                        <input type="checkbox" class="form-check-input" data-date="2021-05-21" data-timezone="Asia/Calcutta" data-start-time="16:00:00" data-end-time="16:20:00" data-session="1" name="token[]" value="22">
                                                        <span class="visit-rsn" data-bs-toggle="tooltip" title="04:00 PM">04:00 PM</span>
                                                    </label>
                                                </div>
                                                <div class="form-check-inline visits me-0">
                                                    <label class="visit-btns">
                                                        <input type="checkbox" class="form-check-input" data-date="2021-05-21" data-timezone="Asia/Calcutta" data-start-time="16:20:00" data-end-time="16:40:00" data-session="1" name="token[]" value="23">
                                                        <span class="visit-rsn" data-bs-toggle="tooltip" title="04:20 PM">04:20 PM</span>
                                                    </label>
                                                </div>
                                                <div class="form-check-inline visits me-0">
                                                    <label class="visit-btns">
                                                        <input type="checkbox" class="form-check-input" data-date="2021-05-21" data-timezone="Asia/Calcutta" data-start-time="16:40:00" data-end-time="17:00:00" data-session="1" name="token[]" value="24">
                                                        <span class="visit-rsn" data-bs-toggle="tooltip" title="04:40 PM">04:40 PM</span>
                                                    </label>
                                                </div>
                                                <div class="form-check-inline visits me-0">
                                                    <label class="visit-btns">
                                                        <input type="checkbox" class="form-check-input" data-date="2021-05-21" data-timezone="Asia/Calcutta" data-start-time="17:00:00" data-end-time="17:20:00" data-session="1" name="token[]" value="25">
                                                        <span class="visit-rsn" data-bs-toggle="tooltip" title="05:00 PM">05:00 PM</span>
                                                    </label>
                                                </div>
                                                <div class="form-check-inline visits me-0">
                                                    <label class="visit-btns">
                                                        <input type="checkbox" class="form-check-input" data-date="2021-05-21" data-timezone="Asia/Calcutta" data-start-time="17:20:00" data-end-time="17:40:00" data-session="1" name="token[]" value="26">
                                                        <span class="visit-rsn" data-bs-toggle="tooltip" title="05:20 PM">05:20 PM</span>
                                                    </label>
                                                </div>
                                                <div class="form-check-inline visits me-0">
                                                    <label class="visit-btns">
                                                        <input type="checkbox" class="form-check-input" data-date="2021-05-21" data-timezone="Asia/Calcutta" data-start-time="17:40:00" data-end-time="18:00:00" data-session="1" name="token[]" value="27">
                                                        <span class="visit-rsn" data-bs-toggle="tooltip" title="05:40 PM">05:40 PM</span>
                                                    </label>
                                                </div>
                                                <div class="form-check-inline visits me-0">
                                                    <label class="visit-btns">
                                                        <input type="checkbox" class="form-check-input" data-date="2021-05-21" data-timezone="Asia/Calcutta" data-start-time="18:00:00" data-end-time="18:20:00" data-session="1" name="token[]" value="28">
                                                        <span class="visit-rsn" data-bs-toggle="tooltip" title="06:00 PM">06:00 PM</span>
                                                    </label>
                                                </div>
                                                <div class="form-check-inline visits me-0">
                                                    <label class="visit-btns">
                                                        <input type="checkbox" class="form-check-input" data-date="2021-05-21" data-timezone="Asia/Calcutta" data-start-time="18:20:00" data-end-time="18:40:00" data-session="1" name="token[]" value="29">
                                                        <span class="visit-rsn" data-bs-toggle="tooltip" title="06:20 PM">06:20 PM</span>
                                                    </label>
                                                </div>
                                                <div class="form-check-inline visits me-0">
                                                    <label class="visit-btns">
                                                        <input type="checkbox" class="form-check-input" data-date="2021-05-21" data-timezone="Asia/Calcutta" data-start-time="18:40:00" data-end-time="19:00:00" data-session="1" name="token[]" value="30">
                                                        <span class="visit-rsn" data-bs-toggle="tooltip" title="06:40 PM">06:40 PM</span>
                                                    </label>
                                                </div>
                                                <div class="form-check-inline visits me-0">
                                                    <label class="visit-btns">
                                                        <input type="checkbox" class="form-check-input" data-date="2021-05-21" data-timezone="Asia/Calcutta" data-start-time="19:00:00" data-end-time="19:20:00" data-session="1" name="token[]" value="31">
                                                        <span class="visit-rsn" data-bs-toggle="tooltip" title="07:00 PM">07:00 PM</span>
                                                    </label>
                                                </div>
                                                <div class="form-check-inline visits me-0">
                                                    <label class="visit-btns">
                                                        <input type="checkbox" class="form-check-input" data-date="2021-05-21" data-timezone="Asia/Calcutta" data-start-time="19:20:00" data-end-time="19:40:00" data-session="1" name="token[]" value="32">
                                                        <span class="visit-rsn" data-bs-toggle="tooltip" title="07:20 PM">07:20 PM</span>
                                                    </label>
                                                </div>
                                                <div class="form-check-inline visits me-0">
                                                    <label class="visit-btns">
                                                        <input type="checkbox" class="form-check-input" data-date="2021-05-21" data-timezone="Asia/Calcutta" data-start-time="19:40:00" data-end-time="20:00:00" data-session="1" name="token[]" value="33">
                                                        <span class="visit-rsn" data-bs-toggle="tooltip" title="07:40 PM">07:40 PM</span>
                                                    </label>
                                                </div>
                                                <div class="form-check-inline visits me-0">
                                                    <label class="visit-btns">
                                                        <input type="checkbox" class="form-check-input" data-date="2021-05-21" data-timezone="Asia/Calcutta" data-start-time="20:00:00" data-end-time="20:20:00" data-session="1" name="token[]" value="34">
                                                        <span class="visit-rsn" data-bs-toggle="tooltip" title="08:00 PM">08:00 PM</span>
                                                    </label>
                                                </div>
                                                <div class="form-check-inline visits me-0">
                                                    <label class="visit-btns">
                                                        <input type="checkbox" class="form-check-input" data-date="2021-05-21" data-timezone="Asia/Calcutta" data-start-time="20:20:00" data-end-time="20:40:00" data-session="1" name="token[]" value="35">
                                                        <span class="visit-rsn" data-bs-toggle="tooltip" title="08:20 PM">08:20 PM</span>
                                                    </label>
                                                </div>
                                                <div class="form-check-inline visits me-0">
                                                    <label class="visit-btns">
                                                        <input type="checkbox" class="form-check-input" data-date="2021-05-21" data-timezone="Asia/Calcutta" data-start-time="20:40:00" data-end-time="21:00:00" data-session="1" name="token[]" value="36">
                                                        <span class="visit-rsn" data-bs-toggle="tooltip" title="08:40 PM">08:40 PM</span>
                                                    </label>
                                                </div>
                                                <div class="form-check-inline visits me-0">
                                                    <label class="visit-btns">
                                                        <input type="checkbox" class="form-check-input" data-date="2021-05-21" data-timezone="Asia/Calcutta" data-start-time="21:00:00" data-end-time="21:20:00" data-session="1" name="token[]" value="37">
                                                        <span class="visit-rsn" data-bs-toggle="tooltip" title="09:00 PM">09:00 PM</span>
                                                    </label>
                                                </div>
                                                <div class="form-check-inline visits me-0">
                                                    <label class="visit-btns">
                                                        <input type="checkbox" class="form-check-input" data-date="2021-05-21" data-timezone="Asia/Calcutta" data-start-time="21:20:00" data-end-time="21:40:00" data-session="1" name="token[]" value="38">
                                                        <span class="visit-rsn" data-bs-toggle="tooltip" title="09:20 PM">09:20 PM</span>
                                                    </label>
                                                </div>
                                                <div class="form-check-inline visits me-0">
                                                    <label class="visit-btns">
                                                        <input type="checkbox" class="form-check-input" data-date="2021-05-21" data-timezone="Asia/Calcutta" data-start-time="21:40:00" data-end-time="22:00:00" data-session="1" name="token[]" value="39">
                                                        <span class="visit-rsn" data-bs-toggle="tooltip" title="09:40 PM">09:40 PM</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <button class="btn btn-primary">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    
            </div>
        </div>

    </div>

</div>		
<!-- /Page Content -->

<Nuxt />
  
 </div>

</template>

<script>
export default {
	layout: 'withoutanimationdoctor',
	mounted() {
    if ($('.select').length > 0) {
		$('.select').select2({
			minimumResultsForSearch: -1,
			width: '100%'
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