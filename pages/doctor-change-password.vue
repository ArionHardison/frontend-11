<template>
<div>
<!-- Breadcrumb -->
<div class="breadcrumb-bar">
    <div class="container-fluid">
        <div class="row align-items-center">
            <div class="col-md-12 col-12">
                <nav aria-label="breadcrumb" class="page-breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><NuxtLink to="/">Home</NuxtLink></li>
                        <li class="breadcrumb-item active" aria-current="page">Change Password</li>
                    </ol>
                </nav>
                <h2 class="breadcrumb-title">Change Password</h2>
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
                                <li>
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
                                <li class="active">
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
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-12 col-lg-6">
                            
                                <!-- Change Password Form -->
                                <form>
                                    <div class="form-group">
                                        <label>Old Password</label>
                                        <input type="password" class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label>New Password</label>
                                        <input type="password" class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label>Confirm Password</label>
                                        <input type="password" class="form-control">
                                    </div>
                                    <div class="submit-section">
                                        <button type="submit" class="btn btn-primary submit-btn">Save Changes</button>
                                    </div>
                                </form>
                                <!-- /Change Password Form -->
                                
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

	},
	computed: {
       currentPath() {
           return this.$route.name
	   },
	}
}
</script>