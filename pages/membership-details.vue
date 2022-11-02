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
                        <li class="breadcrumb-item active" aria-current="page">Membership</li>
                    </ol>
                </nav>
                <h2 class="breadcrumb-title">Membership</h2>
            </div>
        </div>
    </div>
</div>
<!-- /Breadcrumb -->

<!-- Page Content -->
<div class="content">
    <div class="container-fluid">

        <div class="row">
            
            <!-- Profile Sidebar -->
            <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                <div class="stickyside">
                <div class="profile-sidebar">
                    <div class="widget-profile pro-widget-content">
                        <div class="profile-info-widget">
                            <a href="javascript:void(0);" class="booking-doc-img">
                                <img src="../assets/img/patients/patient.jpg" alt="User Image">
                            </a>
                            <div class="profile-det-info">
                                <h3>Richard Wilson</h3>
                                <div class="patient-details">
                                    <h5><i class="fas fa-birthday-cake"></i> 24 Jul 1983, 38 years</h5>
                                    <h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> Newyork, USA</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="dashboard-widget">
                        <nav class="dashboard-menu">
                            <ul>
                                <li>
                                    <NuxtLink to="/patient-dashboard">
                                        <i class="fas fa-columns"></i>
                                        <span>Dashboard</span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/favourites">
                                        <i class="fas fa-bookmark"></i>
                                        <span>Favourites</span>
                                    </NuxtLink>
                                </li> 
                                <li>
                                    <NuxtLink to="/dependent">
                                        <i class="fas fa-users"></i>
                                        <span>Dependent</span>
                                    </NuxtLink>
                                </li> 
                                <li>
                                    <NuxtLink to="/chat">
                                        <i class="fas fa-comments"></i>
                                        <span>Message</span>
                                        <small class="unread-msg">23</small>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/patient-accounts">
                                        <i class="fas fa-file-invoice-dollar"></i>
                                        <span>Accounts</span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/orders-list">
                                        <i class="fas fa-list-alt"></i>
                                        <span>Orders</span>
                                        <small class="unread-msg">7</small>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/medical-records">
                                        <i class="fas fa-clipboard"></i>
                                        <span>Add Medical Records</span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/medical-details">
                                        <i class="fas fa-file-medical-alt"></i>
                                        <span>Medical Details</span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/profile-settings">
                                        <i class="fas fa-user-cog"></i>
                                        <span>Profile Settings</span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/change-password">
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
                </div>
            </div>
            <!-- / Profile Sidebar -->
            
            <div class="col-md-7 col-lg-8 col-xl-9">

                <div class="row">
                    <div class="col-sm-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="card card-table mb-0">
                                    <div class="card-body">
                                        <div class="table-responsive">
                                            <table class="table table-hover table-center mb-0">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Plan Name</th>
                                                        <th>Type</th>
                                                        <th class="text-center">Amount</th>
                                                        <th>Start Date</th>
                                                        <th>End Date</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Monthly Plan</td>
                                                        <td>Month</td>
                                                        <td class="text-center">$150</td>
                                                        <td>11 Nov 2019</td>
                                                        <td>11 Dec 2019</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Yearly plan</td>
                                                        <td>Year</td>
                                                        <td class="text-center">$950</td>
                                                        <td>11 Nov 2019</td>
                                                        <td>10 Nov 2020</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>Whole Body Check</td>
                                                        <td>Month</td>
                                                        <td class="text-center">$100</td>
                                                        <td>11 Nov 2019</td>
                                                        <td>11 Dec 2019</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>Child Health Check</td>
                                                        <td>Month</td>
                                                        <td class="text-center">$100</td>
                                                        <td>11 Nov 2019</td>
                                                        <td>11 Dec 2019</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>Senior citizen Health Check</td>
                                                        <td>Month</td>
                                                        <td class="text-center">$105</td>
                                                        <td>11 Nov 2019</td>
                                                        <td>11 Dec 2019</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6</td>
                                                        <td>Personalized Health Check</td>
                                                        <td>Month</td>
                                                        <td class="text-center">$105</td>
                                                        <td>11 Nov 2019</td>
                                                        <td>11 Dec 2019</td>
                                                    </tr>
                                                </tbody>
                                            </table>
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
export default {
	layout: 'withoutanimationpatient',
	mounted() {

	},
	computed: {
       currentPath() {
           return this.$route.name
	   },
	}
}
</script>