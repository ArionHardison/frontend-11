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
                        <li class="breadcrumb-item active" aria-current="page">Invoices</li>
                    </ol>
                </nav>
                <h2 class="breadcrumb-title">Invoices</h2>
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
                                <li class="active">
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
                <div class="card card-table">
                    <div class="card-body">
                    
                        <!-- Invoice Table -->
                        <div class="table-responsive">
                            <table class="table table-hover table-center mb-0">
                                <thead>
                                    <tr>
                                        <th>Invoice No</th>
                                        <th>Patient</th>
                                        <th>Amount</th>
                                        <th>Paid On</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <NuxtLink to="/invoice-view">#INV-0010</NuxtLink>
                                        </td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink to="/patient-profile" class="avatar avatar-sm me-2">
                                                    <img class="avatar-img rounded-circle" src="../assets/img/patients/patient.jpg" alt="User Image">
                                                </NuxtLink>
                                                <NuxtLink to="/patient-profile">Richard Wilson <span>#PT0016</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td>$450</td>
                                        <td>14 Nov 2019</td>
                                        <td class="text-end">
                                            <div class="table-action">
                                                <NuxtLink to="/invoice-view" class="btn btn-sm bg-info-light">
                                                    <i class="far fa-eye"></i> View
                                                </NuxtLink>
                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                    <i class="fas fa-print"></i> Print
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <NuxtLink to="/invoice-view">#INV-0009</NuxtLink>
                                        </td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink to="/patient-profile" class="avatar avatar-sm me-2">
                                                    <img class="avatar-img rounded-circle" src="../assets/img/patients/patient1.jpg" alt="User Image">
                                                </NuxtLink>
                                                <NuxtLink to="/patient-profile">Charlene Reed <span>#PT0001</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td>$200</td>
                                        <td>13 Nov 2019</td>
                                        <td class="text-end">
                                            <div class="table-action">
                                                <NuxtLink to="/invoice-view" class="btn btn-sm bg-info-light">
                                                    <i class="far fa-eye"></i> View
                                                </NuxtLink>
                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                    <i class="fas fa-print"></i> Print
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <NuxtLink to="/invoice-view">#INV-0008</NuxtLink>
                                        </td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink to="/patient-profile" class="avatar avatar-sm me-2">
                                                    <img class="avatar-img rounded-circle" src="../assets/img/patients/patient2.jpg" alt="User Image">
                                                </NuxtLink>
                                                <NuxtLink to="/patient-profile">Travis Trimble <span>#PT0002</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td>$100</td>
                                        <td>12 Nov 2019</td>
                                        <td class="text-end">
                                            <div class="table-action">
                                                <NuxtLink to="/invoice-view" class="btn btn-sm bg-info-light">
                                                    <i class="far fa-eye"></i> View
                                                </NuxtLink>
                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                    <i class="fas fa-print"></i> Print
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <NuxtLink to="/invoice-view">#INV-0007</NuxtLink>
                                        </td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink to="/patient-profile" class="avatar avatar-sm me-2">
                                                    <img class="avatar-img rounded-circle" src="../assets/img/patients/patient3.jpg" alt="User Image">
                                                </NuxtLink>
                                                <NuxtLink to="/patient-profile">Carl Kelly <span>#PT0003</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td>$350</td>
                                        <td>11 Nov 2019</td>
                                        <td class="text-end">
                                            <div class="table-action">
                                                <NuxtLink to="/invoice-view" class="btn btn-sm bg-info-light">
                                                    <i class="far fa-eye"></i> View
                                                </NuxtLink>
                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                    <i class="fas fa-print"></i> Print
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <NuxtLink to="/invoice-view">#INV-0006</NuxtLink>
                                        </td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink to="/patient-profile" class="avatar avatar-sm me-2">
                                                    <img class="avatar-img rounded-circle" src="../assets/img/patients/patient4.jpg" alt="User Image">
                                                </NuxtLink>
                                                <NuxtLink to="/patient-profile">Michelle Fairfax <span>#PT0004</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td>$275</td>
                                        <td>10 Nov 2019</td>
                                        <td class="text-end">
                                            <div class="table-action">
                                                <NuxtLink to="/invoice-view" class="btn btn-sm bg-info-light">
                                                    <i class="far fa-eye"></i> View
                                                </NuxtLink>
                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                    <i class="fas fa-print"></i> Print
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <NuxtLink to="/invoice-view">#INV-0005</NuxtLink>
                                        </td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink to="/patient-profile" class="avatar avatar-sm me-2">
                                                    <img class="avatar-img rounded-circle" src="../assets/img/patients/patient5.jpg" alt="User Image">
                                                </NuxtLink>
                                                <NuxtLink to="/patient-profile">Gina Moore <span>#PT0005</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td>$600</td>
                                        <td>9 Nov 2019</td>
                                        <td class="text-end">
                                            <div class="table-action">
                                                <NuxtLink to="/invoice-view" class="btn btn-sm bg-info-light">
                                                    <i class="far fa-eye"></i> View
                                                </NuxtLink>
                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                    <i class="fas fa-print"></i> Print
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <NuxtLink to="/invoice-view">#INV-0004</NuxtLink>
                                        </td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink to="/patient-profile" class="avatar avatar-sm me-2">
                                                    <img class="avatar-img rounded-circle" src="../assets/img/patients/patient6.jpg" alt="User Image">
                                                </NuxtLink>
                                                <NuxtLink to="/patient-profile">Elsie Gilley <span>#PT0006</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td>$50</td>
                                        <td>8 Nov 2019</td>
                                        <td class="text-end">
                                            <div class="table-action">
                                                <NuxtLink to="/invoice-view" class="btn btn-sm bg-info-light">
                                                    <i class="far fa-eye"></i> View
                                                </NuxtLink>
                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                    <i class="fas fa-print"></i> Print
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <NuxtLink to="/invoice-view">#INV-0003</NuxtLink>
                                        </td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink to="/patient-profile" class="avatar avatar-sm me-2">
                                                    <img class="avatar-img rounded-circle" src="../assets/img/patients/patient7.jpg" alt="User Image">
                                                </NuxtLink>
                                                <NuxtLink to="/patient-profile">Joan Gardner <span>#PT0007</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td>$400</td>
                                        <td>7 Nov 2019</td>
                                        <td class="text-end">
                                            <div class="table-action">
                                                <NuxtLink to="/invoice-view" class="btn btn-sm bg-info-light">
                                                    <i class="far fa-eye"></i> View
                                                </NuxtLink>
                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                    <i class="fas fa-print"></i> Print
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <NuxtLink to="/invoice-view">#INV-0002</NuxtLink>
                                        </td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink to="/patient-profile" class="avatar avatar-sm me-2">
                                                    <img class="avatar-img rounded-circle" src="../assets/img/patients/patient8.jpg" alt="User Image">
                                                </NuxtLink>
                                                <NuxtLink to="/patient-profile">Daniel Griffing <span>#PT0008</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td>$550</td>
                                        <td>6 Nov 2019</td>
                                        <td class="text-end">
                                            <div class="table-action">
                                                <NuxtLink to="/invoice-view" class="btn btn-sm bg-info-light">
                                                    <i class="far fa-eye"></i> View
                                                </NuxtLink>
                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                    <i class="fas fa-print"></i> Print
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <NuxtLink to="/invoice-view">#INV-0001</NuxtLink>
                                        </td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink to="/patient-profile" class="avatar avatar-sm me-2">
                                                    <img class="avatar-img rounded-circle" src="../assets/img/patients/patient9.jpg" alt="User Image">
                                                </NuxtLink>
                                                <NuxtLink to="/patient-profile">Walter Roberson <span>#PT0009</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td>$100</td>
                                        <td>5 Nov 2019</td>
                                        <td class="text-end">
                                            <div class="table-action">
                                                <NuxtLink to="/invoice-view" class="btn btn-sm bg-info-light">
                                                    <i class="far fa-eye"></i> View
                                                </NuxtLink>
                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                    <i class="fas fa-print"></i> Print
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- /Invoice Table -->
                        
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