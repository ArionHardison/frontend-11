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
                        <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                    </ol>
                </nav>
                <h2 class="breadcrumb-title">Dashboard</h2>
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
                                <li class="active">
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
                    <div class="col-lg-4 col-md-12">
                        <div class="card dash-cards">
                            <div class="card-body">
                                <div class="dash-top-content">
                                    <div class="circle-bar circle-bar1">
                                        <div class="circle-graph1" data-percent="75">
                                            <img src="../assets/img/icon-01.png" class="img-fluid" alt="patient">
                                        </div>
                                    </div>
                                    <div class="dash-widget-info">
                                        <h6>Total Patient All time</h6>
                                        <h3>1500</h3>
                                    </div>
                                </div>
                                <div class="dash-bottom-content">
                                    <h6> <span> <i class="fas fa-caret-up"></i> 9.5%</span> last Week</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12">
                        <div class="card dash-cards">
                            <div class="card-body">
                                <div class="dash-top-content">
                                    <div class="circle-bar circle-bar2">
                                        <div class="circle-graph2" data-percent="75">
                                            <img src="../assets/img/icon-03.png" class="img-fluid" alt="patient">
                                        </div>
                                    </div>
                                    <div class="dash-widget-info">
                                        <h6>Total Appointements</h6>
                                        <h3>4587</h3>
                                    </div>
                                </div>
                                <div class="dash-bottom-content">
                                    <h6> <span> <i class="fas fa-caret-up"></i> 5.5%</span> last Week</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12">
                        <div class="card dash-cards">
                            <div class="card-body">
                                <div class="dash-top-content">
                                    <div class="circle-bar circle-bar3">
                                        <div class="circle-graph3" data-percent="50">
                                            <img src="../assets/img/icon-4.png" class="img-fluid" alt="patient">
                                        </div>
                                    </div>
                                    <div class="dash-widget-info">
                                        <h6>Today’s Income</h6>
                                        <h3>€1454</h3>
                                    </div>
                                </div>
                                <div class="dash-bottom-content low-percent">
                                    <h6> <span> <i class="fas fa-caret-down"></i> 5.5%</span> Yesterday</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-8">
                        <div class="card dash-cards">
                            <div class="card-header">
                                <div class="today-appointment-title">
                                    <h5 class="mb-0">Today’s Appointments</h5>
                                    <NuxtLink to="/appointments"><h6 class="mb-0">View All  <arrow-right-icon size="1.4x" class="custom-class"></arrow-right-icon></h6></NuxtLink>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-hover table-center mb-0">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h2 class="table-avatar ">
                                                        <NuxtLink to="/patient-profile" class="avatar avatar-m me-2"><img class="avatar-img" src="../assets/img/patients/patient.jpg" alt="User Image"></NuxtLink>
                                                        <NuxtLink to="/patient-profile">Richard<span>#PT0016</span></NuxtLink>
                                                    </h2>
                                                </td>
                                                <td>
                                                    <div class="consult-type d-flex flex-column">
                                                        <h6 class="mb-0">Online Consultation</h6>
                                                        <p class="mb-0"><img src="../assets/img/icons/video-icon-sm.svg" alt=""> Video Call</p>
                                                    </div>
                                                </td>
                                                <td class="text-center"><NuxtLink class="call-status" to="/video-call">Start&nbsp;Call</NuxtLink></td>
                                                <td class="text-center"><NuxtLink to="/patient-profile"><i class="fas fa-chevron-right"></i></NuxtLink></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <NuxtLink to="/patient-profile" class="avatar avatar-m me-2"><img class="avatar-img" src="../assets/img/patients/patient2.jpg" alt="User Image"></NuxtLink>
                                                        <NuxtLink to="/patient-profile">Wilson <span>#PT0016</span></NuxtLink>
                                                    </h2>
                                                </td>
                                                <td>
                                                    <div class="consult-type d-flex flex-column">
                                                        <h6 class="mb-0">Online Consultation</h6>
                                                        <p class="mb-0"><img src="../assets/img/icons/video-icon-sm.svg" alt=""> Video Call</p>
                                                    </div>
                                                </td>
                                                <td class="text-center"><NuxtLink class="call-status" to="/video-call">Join Call</NuxtLink></td>
                                                <td class="text-center"><NuxtLink to="/patient-profile"><i class="fas fa-chevron-right"></i></NuxtLink></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <NuxtLink to="/patient-profile" class="avatar avatar-m me-2"><img class="avatar-img" src="../assets/img/patients/patient3.jpg" alt="User Image"></NuxtLink>
                                                        <NuxtLink to="/patient-profile">James <span>#PT0016</span></NuxtLink>
                                                    </h2>
                                                </td>
                                                <td>
                                                    <div class="consult-type d-flex flex-column">
                                                        <h6 class="mb-0">Online Consultation</h6>
                                                        <p class="mb-0"><img src="../assets/img/icons/audio-icon-sm.svg" alt="">Audio Call</p>
                                                    </div>
                                                </td>
                                                <td class="text-center"><NuxtLink  class="call-status" to="/voice-call">Join Call</NuxtLink></td>
                                                <td class="text-center"><NuxtLink to="/patient-profile"><i class="fas fa-chevron-right"></i></NuxtLink></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <NuxtLink to="/patient-profile"class="avatar avatar-m me-2"><img class="avatar-img" src="../assets/img/patients/patient4.jpg" alt="User Image"></NuxtLink>
                                                        <NuxtLink to="/patient-profile">Hendry <span>#PT0016</span></NuxtLink>
                                                    </h2>
                                                </td>
                                                <td>
                                                    <div class="consult-type d-flex flex-column">
                                                        <h6 class="mb-0">Online Consultation</h6>
                                                        <p class="mb-0"><img src="../assets/img/icons/chat-sm.svg" alt=""> Chat</p>
                                                    </div>
                                                </td>
                                                <td class="text-center"><NuxtLink class="call-status" to="/chat">Ongoing</NuxtLink></td>
                                                <td class="text-center"><NuxtLink to="/patient-profile"><i class="fas fa-chevron-right"></i></NuxtLink></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card dash-cards">
                            <div class="card-header">
                                <div class="today-appointment-title">
                                    <h5 class="mb-0">Patients</h5>
                                    <NuxtLink to="/my-patients"><h6 class="mb-0">View All<arrow-right-icon size="1.4x" class="custom-class"></arrow-right-icon></h6></NuxtLink>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-hover table-center mb-0">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <NuxtLink to="/patient-profile" class="avatar avatar-m me-2"><img class="avatar-img" src="../assets/img/patients/patient.jpg" alt="User Image"></NuxtLink>
                                                        <NuxtLink to="/patient-profile">Richard<span>#PT0016</span></NuxtLink>
                                                    </h2>
                                                </td>
                                                <td class="text-center"><NuxtLink to="/patient-profile"><i class="fas fa-chevron-right"></i></NuxtLink></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <NuxtLink to="/patient-profile" class="avatar avatar-m me-2"><img class="avatar-img" src="../assets/img/patients/patient2.jpg" alt="User Image"></NuxtLink>
                                                        <NuxtLink to="/patient-profile">Wilson<span>#PT0016</span></NuxtLink>
                                                    </h2>
                                                </td>
                                                <td class="text-center"><NuxtLink to="/patient-profile"><i class="fas fa-chevron-right"></i></NuxtLink></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <NuxtLink to="/patient-profile" class="avatar avatar-m me-2"><img class="avatar-img" src="../assets/img/patients/patient3.jpg" alt="User Image"></NuxtLink>
                                                        <NuxtLink to="/patient-profile">James <span>#PT0016</span></NuxtLink>
                                                    </h2>
                                                </td>
                                                <td class="text-center"><NuxtLink to="/patient-profile"><i class="fas fa-chevron-right"></i></NuxtLink></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <NuxtLink to="/patient-profile" class="avatar avatar-m me-2"><img class="avatar-img" src="../assets/img/patients/patient4.jpg" alt="User Image"></NuxtLink>
                                                        <NuxtLink to="/patient-profile">Hendry<span>#PT0016</span></NuxtLink>
                                                    </h2>
                                                </td>
                                                <td class="text-center"><NuxtLink to="/patient-profile"><i class="fas fa-chevron-right"></i></NuxtLink></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card dash-cards xyz">
                            <div class="card-header">
                                <div class="row align-items-center">
                                    <div class="col">
                                        <h5 class="card-title">Appointments</h5>
                                    </div>
                                    <div class="col-auto chart-select d-flex">
                                        <div class="me-2">
                                            <select class="select">
                                                <option >All Calls</option>
                                                <option>Video</option>
                                                <option>Audio</option>
                                                <option>Chat</option>
                                            </select>
                                        </div>
                                        <select class="select">
                                            <option>2022</option>
                                            <option>2022</option>
                                        </select>
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">			
                                <div id="call-chart"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 d-flex">
                        <div class="card dash-cards flex-fill">
                            <div class="card-header">
                                <div class="today-appointment-title">
                                    <h5 class="mb-0">Recent Prescriptions</h5>
                                    <NuxtLink to="/patient-profile"><h6 class="mb-0">View All <arrow-right-icon size="1.4x" class="custom-class"></arrow-right-icon></h6></NuxtLink>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-hover table-center mb-0">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <NuxtLink to="/patient-profile" class="avatar-m avatar-tablet me-2 d-flex align-items-center justify-content-center">
                                                            <img src="../assets/img/icons/tablets.svg" alt="" >
                                                        </NuxtLink>
                                                        <NuxtLink to="/patient-profile">Abacavir<span class="text-danger">#8995447</span></NuxtLink>
                                                    </h2>
                                                </td>
                                                <td>Type : Onetime</td>
                                                <td class="text-center"><a href="javascript:void(0);"><i class="fas fa-chevron-right"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <NuxtLink to="/patient-profile" class="avatar-m avatar-tablet me-2 d-flex align-items-center justify-content-center">
                                                            <img src="../assets/img/icons/tablets.svg" alt="" >
                                                        </NuxtLink>
                                                        <NuxtLink to="/patient-profile">Calcium<span class="text-danger">#8995447</span></NuxtLink>
                                                    </h2>
                                                </td>
                                                <td>Type : Onetime</td>
                                                <td class="text-center"><a href="javascript:void(0);"><i class="fas fa-chevron-right"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <NuxtLink to="/patient-profile" class="avatar-m avatar-tablet me-2 d-flex align-items-center justify-content-center">
                                                            <img src="../assets/img/icons/tablets.svg" alt="" >
                                                        </NuxtLink>
                                                        <NuxtLink to="/patient-profile">Citrizen<span class="text-danger">#8995447</span></NuxtLink>
                                                    </h2>
                                                </td>
                                                <td>Type : Onetime</td>
                                                <td class="text-center"><a href="javascript:void(0);"><i class="fas fa-chevron-right"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <NuxtLink to="/patient-profile" class="avatar-m avatar-tablet me-2 d-flex align-items-center justify-content-center">
                                                            <img src="../assets/img/icons/tablets.svg" alt="" >
                                                        </NuxtLink>
                                                        <NuxtLink to="/patient-profile">Glabton<span class="text-danger">#8995447</span></NuxtLink>
                                                    </h2>
                                                </td>
                                                <td>Type : Onetime</td>
                                                <td class="text-center"><a href="javascript:void(0);"><i class="fas fa-chevron-right"></i></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 d-flex">
                        <div class="card dash-cards flex-fill">
                            <div class="card-header">
                                <div class="today-appointment-title">
                                    <h5 class="mb-0">Total Earning</h5>
                                </div>
                            </div>
                            <div class="card-body">
                                <div id="earnings-chart"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 d-flex">
                        <div class="card dash-cards flex-fill">
                            <div class="card-header">
                                <div class="today-appointment-title">
                                    <h5 class="mb-0">Recent Consultation</h5>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="owl-carousel report-card-slider owl-theme">
                                    <div class="item">
                                        <div class="paitents-report-card">
                                            <div class="paitents-report-card-head d-flex align-items-center">
                                                <div class="paitent-report-card-photo">
                                                    <NuxtLink to="/patient-profile" class="avatar avatar-m me-2"><img class="avatar-img" src="../assets/img/patients/patient4.jpg" alt="User Image"></NuxtLink>
                                                </div>
                                                <div class="paitent-report-card-detail d-flex flex-column">
                                                    <NuxtLink to="/patient-profile">Hendry</NuxtLink>
                                                    <p class="text-dark mb-0">Female - 40years </p>
                                                </div>
                                            </div>
                                            <div class="paitents-report-card-body">
                                                <div class="paitents-report-card-details d-flex flex-column">
                                                    <h3>Problem</h3>
                                                    <h6 class="mb-0">Fever, Soar throat, Allergy </h6>
                                                </div>
                                                <div class="paitents-report-card-details d-flex flex-column">
                                                    <h3>Last Checked</h3>
                                                    <h6>Dr Kimberly on Fret Hospital in 29/05/2022</h6>
                                                    <p class="text-danger mb-0">Prescription : #566646</p>
                                                </div>
                                                <div class="paitents-report-card-details d-flex flex-column">
                                                    <h3>Observation</h3>
                                                    <h6>Three Sickle cells are sustained at normal hemoglobin Level</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="paitents-report-card">
                                            <div class="paitents-report-card-head d-flex align-items-center">
                                                <div class="paitent-report-card-photo">
                                                    <NuxtLink to="/patient-profile" class="avatar avatar-m me-2"><img class="avatar-img" src="../assets/img/patients/patient2.jpg" alt="User Image"></NuxtLink>
                                                </div>
                                                <div class="paitent-report-card-detail d-flex flex-column">
                                                    <NuxtLink to="/patient-profile">James</NuxtLink>
                                                    <p class="text-dark mb-0">Male - 35years </p>
                                                </div>
                                            </div>
                                            <div class="paitents-report-card-body">
                                                <div class="paitents-report-card-details d-flex flex-column">
                                                    <h3>Problem</h3>
                                                    <h6 class="mb-0">Fever, Soar throat, Allergy </h6>
                                                </div>
                                                <div class="paitents-report-card-details d-flex flex-column">
                                                    <h3>Last Checked</h3>
                                                    <h6>Dr Kimberly on Fret Hospital in 29/05/2022</h6>
                                                    <p class="text-danger mb-0">Prescription : #566646</p>
                                                </div>
                                                <div class="paitents-report-card-details d-flex flex-column">
                                                    <h3>Observation</h3>
                                                    <h6>Three Sickle cells are sustained at normal hemoglobin Level</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="paitents-report-card">
                                            <div class="paitents-report-card-head d-flex align-items-center">
                                                <div class="paitent-report-card-photo">
                                                    <NuxtLink to="/patient-profile" class="avatar avatar-m me-2"><img class="avatar-img" src="../assets/img/patients/patient3.jpg" alt="User Image"></NuxtLink>
                                                </div>
                                                <div class="paitent-report-card-detail d-flex flex-column">
                                                    <NuxtLink to="/patient-profile">Richard</NuxtLink>
                                                    <p class="text-dark mb-0">Male - 30years </p>
                                                </div>
                                            </div>
                                            <div class="paitents-report-card-body">
                                                <div class="paitents-report-card-details d-flex flex-column">
                                                    <h3>Problem</h3>
                                                    <h6 class="mb-0">Fever, Soar throat, Allergy </h6>
                                                </div>
                                                <div class="paitents-report-card-details d-flex flex-column">
                                                    <h3>Last Checked</h3>
                                                    <h6>Dr Kimberly on Fret Hospital in 29/05/2022</h6>
                                                    <p class="text-danger mb-0">Prescription : #566646</p>
                                                </div>
                                                <div class="paitents-report-card-details d-flex flex-column">
                                                    <h3>Observation</h3>
                                                    <h6>Three Sickle cells are sustained at normal hemoglobin Level</h6>
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

</div>		
<!-- /Page Content -->
<Nuxt />
 </div>
</template>

<script>
import { ArrowRightIcon } from 'vue-feather-icons'
export default {
    components: {
    ArrowRightIcon
  },
	layout: 'withoutanimationdoctor',
	mounted() {
    if ($('.select').length > 0) {
		$('.select').select2({
			minimumResultsForSearch: -1,
			width: '100%'
		});
	}
    $('.circle-bar1').each(function () {
			var elementPos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			var percent = $(this).find('.circle-graph1').attr('data-percent');
			var animate = $(this).data('animate');
			if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
				$(this).data('animate', true);
				$(this).find('.circle-graph1').circleProgress({
					value: percent / 100,
					size : 400,
					thickness: 30,
					fill: {
						color: '#da3f81'
					}
				});
			}
		});
		$('.circle-bar2').each(function () {
			var elementPos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			var percent = $(this).find('.circle-graph2').attr('data-percent');
			var animate = $(this).data('animate');
			if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
				$(this).data('animate', true);
				$(this).find('.circle-graph2').circleProgress({
					value: percent / 100,
					size : 400,
					thickness: 30,
					fill: {
						color: '#68dda9'
					}
				});
			}
		});
		$('.circle-bar3').each(function () {
			var elementPos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			var percent = $(this).find('.circle-graph3').attr('data-percent');
			var animate = $(this).data('animate');
			if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
				$(this).data('animate', true);
				$(this).find('.circle-graph3').circleProgress({
					value: percent / 100,
					size : 400,
					thickness: 30,
					fill: {
						color: '#1b5a90'
					}
				});
			}
		});
        if($('#call-chart').length > 0) {
		var options = {
			series: [{
			name: 'Video Call',
			data: [20,50,20,60,20,50,45,40,20,60,20,80]
		  }, {
			name: 'Audio Call',
			data: [30,60,30,80,40,70,20,60,50,80,20,90]
		  }],
			chart: {
			height: 350,
			type: 'area'
		  },
		  dataLabels: {
			enabled: false
		  },
		  colors: ['#0CE0FF', '#0C4F8A'],
		  stroke: {
			curve: 'smooth'
		  },
		  legend: {
			position: 'top',
			horizontalAlign: 'right',
		  },
		 
		  xaxis: {
			type: 'datetime',
			categories: ["Jan 2022", "Feb 2022","Mar 2022","April 2022" ,"May 2022","June 2022" , "July 2022","Aug 2022","Sep 2022","Oct 2022","Nov 2022","Dec 2022"]
		  },
		  yaxis: {
			title: {
				text: 'No of Appointmment',
			  },
			axisBorder: {
				show: true,
			},
		},
		  tooltip: {
			x: {
			  format: 'dd/MM/yy HH:mm'
			},
		  },
		  };
  
		  var chart = new ApexCharts(document.querySelector("#call-chart"), options);
		  chart.render();
	}
    if($('#earnings-chart').length > 0) {
		var options = {
			series: [{
			name: 'Total Earnings',
			data: [88,88.1,88.5,88.6,88.8,89,90]
		  }],
			chart: {
			height: 315,
			type: 'area'
		  },
		  dataLabels: {
			enabled: false
		  },
		  colors: ['#0C4F8A'],
		  stroke: {
			curve: 'smooth'
		  },
		  xaxis: {
			type: 'month',
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
		  },
		  yaxis:{
			labels: {
				formatter: function (val) {
					return val + "k"
				}
			},
		  },
		  tooltip: {
			x: {
			  format: 'dd/MM/yy HH:mm'
			},
			y: {
				formatter: function (val) {
					return "$" + val + "k"
				}
			}
		  },
		  };
  
		  var chart = new ApexCharts(document.querySelector("#earnings-chart"), options);
		  chart.render();
		  
	}
    if($('.owl-carousel.report-card-slider').length > 0) {
	$('.owl-carousel.report-card-slider').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})
}
	},
	computed: {
       currentPath() {
           return this.$route.name
	   },
	}
}
</script>