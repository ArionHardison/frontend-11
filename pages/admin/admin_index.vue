<template>
<div>
<!-- Page Wrapper -->
<div class="page-wrapper">
    <div class="content container-fluid pb-0">
        
        <h4 class="mb-3">Overview</h4>
        
        <div class="row">
            <div class="col-xl-3 col-sm-6 col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="dash-widget-header">
                            <span class="dash-widget-icon bg-primary">
                                <user-plus-icon size="1.4x" class="custom-class"></user-plus-icon>
                            </span>
                            <div class="dash-count">
                                <h5 class="dash-title">Doctors</h5>
                                <div class="dash-counts">
                                    <p>4505</p>
                                </div>
                            </div>
                        </div>
                        <p class="trade-level mb-0"><span class="text-danger me-1"><i class="fas fa-caret-down me-1"></i>1.15%</span> last week</p>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="dash-widget-header">
                            <span class="dash-widget-icon bg-blue">
                                <user-icon size="1.4x" class="custom-class"></user-icon>
                            </span>
                            <div class="dash-count">
                                <h5 class="dash-title">Patients</h5>
                                <div class="dash-counts">
                                    <p>2000</p>
                                </div>
                            </div>
                        </div>
                        <p class="trade-level mb-0"><span class="text-success me-1"><i class="fas fa-caret-up me-1"></i>4.5%</span> last week</p>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="dash-widget-header">
                            <span class="dash-widget-icon bg-warning">
                                <img src="../../assets/admin_img/icon/calendar.png" alt="User Image">
                            </span>
                            <div class="dash-count">
                                <h5 class="dash-title">Appointment</h5>
                                <div class="dash-counts">
                                    <p>4500</p>
                                </div>
                            </div>
                        </div>
                        <p class="trade-level mb-0"><span class="text-success me-1"><i class="fas fa-caret-up me-1"></i>9.65%</span> last week</p>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="dash-widget-header">
                            <span class="dash-widget-icon bg-danger">
                                <img src="../../assets/admin_img/icon/chart.png" alt="User Image">
                            </span> 
                            <div class="dash-count">
                                <h5 class="dash-title">Revenue</h5>
                                <div class="dash-counts">
                                    <p>$62523</p>
                                </div>
                            </div>
                        </div>
                        <p class="trade-level mb-0"><span class="text-danger me-1"><i class="fas fa-caret-up me-1"></i>40.5%</span> last week</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="row">
            <!-- Appointments -->
            <div class="col-xl-7 d-flex">
                <div class="card flex-fill">
                    <div class="card-header">
                        <div class="row align-items-center">
                            <div class="col">
                                <h5 class="card-title">Appointments</h5>
                            </div>
                            <div class="col-auto d-flex">
                                <select class="select">
                                    <option>2022</option>
                                    <option>2022</option>
                                </select>
                                <div class="ms-2">
                                    <select class="select">
                                        <option>Select Type</option>
                                        <option>Video</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">			
                        <div id="sales_chart"></div>
                    </div>
                </div>
            </div>
            <!-- /Appointments -->
            
            <!-- Income Report -->
            <div class="col-xl-5 d-flex">
                <div class="card flex-fill">
                    <div class="card-header">
                        <div class="row align-items-center">
                            <div class="col">
                                <h5 class="card-title">Income Report</h5>
                            </div>
                            <div class="col-auto d-flex">
                                <select class="select">
                                    <option>Monthly</option>
                                    <option>Weekly</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="text-end w-100">
                            <div class="income-rev">Total Revenue : <span>$451254K</span></div>
                        </div>
                        <div id="income-report"></div>
                    </div>
                </div>
            </div>
            <!-- /Income Report -->
        </div>
        
        <!-- Today’s  Appointment -->
        <div class="row">
            <div class="col-md-6">
                <div class="section-heading">
                    <h5 class="mb-0">Today’s  Appointment <span class="num-circle">12</span></h5>
                </div>
            </div>
            <div class="col-md-6 text-end">
                <div class="owl-nav slide-nav-3 text-end nav-control"></div>
            </div>
            <div class="col-md-12">
                <hr class="mt-0">
                <div class="owl-carousel appointment-slider owl-theme">
                    <div class="item">
                        <div class="appointment-item">
                            <div class="app-head">
                                <p>Consultation ID : #4544478 </p>
                                <div class="con-time">50 Min</div>
                            </div>
                            <div class="app-user">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="app-img">
                                            <img src="../../assets/admin_img/profiles/avatar-02.jpg" alt="" class="img-fluid">
                                            <div class="app-name">
                                                <h6>Dr. Lester </h6>
                                                <p>Orthopaedics</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="app-img justify-content-sm-end">
                                            <img src="../../assets/admin_img/profiles/avatar-05.jpg" alt="" class="img-fluid">
                                            <div class="app-name">
                                                <h6>Chris Harris</h6>
                                                <p>ID : 781212, M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>										
                            <div class="app-info">
                                <div>
                                    <p>Today</p>
                                    <h6>08:00am - 08:50pm</h6>
                                </div>
                                <div>
                                    <p>Booked on</p>
                                    <h6 class="fw-normal">12/11/2022, 05:30PM</h6>
                                </div>
                            </div>
                            <div class="app-footer">
                                <div class="app-mode">
                                    <p>Mode of Consultation</p>
                                    <a href="javascript:void(0);" class="mode-box text-danger"><video-icon size="1.4x" class="custom-class"></video-icon></a>
                                </div>
                                <h6>$30.00K</h6>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="appointment-item">
                            <div class="app-head">
                                <p>Consultation ID : #9789845 </p>
                                <div class="con-time">20 Min</div>
                            </div>
                            <div class="app-user">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="app-img">
                                            <img src="../../assets/admin_img/profiles/avatar-06.jpg" alt="" class="img-fluid">
                                            <div class="app-name">
                                                <h6>Dr. Monroe</h6>
                                                <p>Hair Specialities</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="app-img justify-content-sm-end">
                                            <img src="../../assets/admin_img/profiles/avatar-07.jpg" alt="" class="img-fluid">
                                            <div class="app-name">
                                                <h6>Bess Twishes</h6>
                                                <p>ID : 787787, M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>										
                            <div class="app-info">
                                <div>
                                    <p>Today</p>
                                    <h6>06:00pm - 06:20pm</h6>
                                </div>
                                <div>
                                    <p>Booked on</p>
                                    <h6 class="fw-normal">06/11/2022, 04:30PM</h6>
                                </div>
                            </div>
                            <div class="app-footer">
                                <div class="app-mode">
                                    <p>Mode of Consultation</p>
                                    <a href="javascript:void(0);" class="mode-box text-yellow"><mic-icon size="1.4x" class="custom-class"></mic-icon></a>
                                </div>
                                <h6>$30.00K</h6>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="appointment-item">
                            <div class="app-head">
                                <p>Consultation ID : #9795754</p>
                                <div class="con-time">40 Min</div>
                            </div>
                            <div class="app-user">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="app-img">
                                            <img src="../../assets/admin_img/profiles/avatar-02.jpg" alt="" class="img-fluid">
                                            <div class="app-name">
                                                <h6>Dr. Clint </h6>
                                                <p>Neurology</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="app-img justify-content-sm-end">
                                            <img src="../../assets/admin_img/profiles/avatar-08.jpg" alt="" class="img-fluid">
                                            <div class="app-name">
                                                <h6>James Aaron</h6>
                                                <p>ID : 781212, M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>										
                            <div class="app-info">
                                <div>
                                    <p>Today</p>
                                    <h6>12:00pm - 12:40pm</h6>
                                </div>
                                <div>
                                    <p>Booked on</p>
                                    <h6 class="fw-normal">12/11/2022, 04:30PM</h6>
                                </div>
                            </div>
                            <div class="app-footer">
                                <div class="app-mode">
                                    <p>Mode of Consultation</p>
                                    <a href="javascript:void(0);"  class="mode-box text-primary"><message-square-icon size="1.4x" class="custom-class"></message-square-icon></a>
                                </div>
                                <h6>$30.00K</h6>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="appointment-item">
                            <div class="app-head">
                                <p>Consultation ID : #4544478 </p>
                                <div class="con-time">50 Min</div>
                            </div>
                            <div class="app-user">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="app-img">
                                            <img src="../../assets/admin_img/profiles/avatar-02.jpg" alt="" class="img-fluid">
                                            <div class="app-name">
                                                <h6>Dr. Lester </h6>
                                                <p>Orthopaedics</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="app-img justify-content-sm-end">
                                            <img src="../../assets/admin_img/profiles/avatar-05.jpg" alt="" class="img-fluid">
                                            <div class="app-name">
                                                <h6>Chris Harris</h6>
                                                <p>ID : 781212, M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>										
                            <div class="app-info">
                                <div>
                                    <p>Today</p>
                                    <h6>08:00am - 08:50pm</h6>
                                </div>
                                <div>
                                    <p>Booked on</p>
                                    <h6 class="fw-normal">12/11/2022, 05:30PM</h6>
                                </div>
                            </div>
                            <div class="app-footer">
                                <div class="app-mode">
                                    <p>Mode of Consultation</p>
                                    <a href="javascript:void(0);" class="mode-box text-danger"><video-icon size="1.4x" class="custom-class"></video-icon>
                                    </a>
                                </div>
                                <h6>$30.00K</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Today’s  Appointment -->
        
        <div class="row">
            <!-- Recent Activities -->
            <div class="col-lg-8">
                <div class="card">
                    <div class="card-header border-bottom-0">
                        <div class="row align-items-center">
                            <div class="col">
                                <h5 class="card-title">Recent Patient Activity</h5>
                            </div>
                            <div class="col-auto d-flex">
                                <div class="bookingrange btn btn-white btn-sm">
                                    <div class="cal-ico">
                                        <span>Select Date</span>
                                        <chevron-down-icon size="1.4x" class="custom-class ms-1"></chevron-down-icon>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body p-0">				
                        <div class="table-responsive">									
                            <table class="table table-borderless hover-table">
                                <thead class="thead-light">
                                    <tr>
                                       <th>ID</th>
                                       <th>Patient</th>
                                       <th>Disease</th>
                                       <th>Member since </th>
                                       <th>Status</th>
                                       <th class="text-right"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>#4546</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink to="/admin/profile"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-07.jpg" alt="User Image"></NuxtLink>
                                                <a href="javascript:void(0);" class="user-name">Bess Twishes <span class="text-muted">Male, 40 Years Old</span></a>
                                            </h2>
                                        </td>
                                        <td><span class="disease-name">Allergies & Asthma</span></td>
                                        <td>
                                            <span class="text-yellow user-name">New Patient</span>
                                            <span class="d-block">23 Nov 2020</span>
                                        </td>
                                        <td><span class="badge bg-badge-grey text-success"><i class="fas fa-circle me-1"></i> Enabled</span></td>
                                        <td class="text-right">
                                            <chevron-right-icon size="1.4x" class="custom-class"></chevron-right-icon>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>#8774</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink to="/admin/profile"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-04.jpg" alt="User Image"></NuxtLink>
                                                <a href="javascript:void(0);" class="user-name">Bess Twishes <span class="text-muted">Female,30 Years Old</span></a>
                                            </h2>
                                        </td>
                                        <td><span class="disease-name">Sleep Problem</span></td>
                                        <td>
                                            <span class="text-danger user-name">Old Patient</span>
                                            <span class="d-block">23 Nov 2020</span>
                                        </td>
                                        <td><span class="badge bg-badge-grey text-danger"><i class="fas fa-circle me-1"></i> Disabled</span></td>
                                        <td class="text-right">
                                            <chevron-right-icon size="1.4x" class="custom-class"></chevron-right-icon>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>#4546</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink to="/admin/profile"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-02.jpg" alt="User Image"></NuxtLink>
                                                <a href="javascript:void(0);" class="user-name">Abdul Aziz Lazis <span class="text-muted">Male, 25 Years Old</span></a>
                                            </h2>
                                        </td>
                                        <td><span class="disease-name">Tooth Pain</span></td>
                                        <td>
                                            <span class="text-danger user-name">Old Patient</span>
                                            <span class="d-block">23 Nov 2020</span>
                                        </td>
                                        <td><span class="badge bg-badge-grey text-success"><i class="fas fa-circle me-1"></i> Enabled</span></td>
                                        <td class="text-right">
                                            <chevron-right-icon size="1.4x" class="custom-class"></chevron-right-icon>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>#4546</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink to="/admin/profile"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-05.jpg" alt="User Image"></NuxtLink>
                                                <a href="javascript:void(0);" class="user-name">Alex Siauw <span class="text-muted">Male, 29 Years Old</span></a>
                                            </h2>
                                        </td>
                                        <td><span class="disease-name">Pain  on knee</span></td>
                                        <td>
                                            <span class="text-yellow user-name">New Patient</span>
                                            <span class="d-block">23 Nov 2020</span>
                                        </td>
                                        <td><span class="badge bg-badge-grey text-success"><i class="fas fa-circle me-1"></i> Enabled</span></td>
                                        <td class="text-right">
                                            <chevron-right-icon size="1.4x" class="custom-class"></chevron-right-icon>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Recent Activities -->
            
            <!-- Top Doctors -->
            <div class="col-lg-4">
                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <div class="col">
                                <h5 class="card-title">Top Doctors</h5>
                            </div>
                        </div>
                    </div>
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table doc-table">
                                <tbody>
                                    <tr>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink class="avatar-pos avatar-online" to="/admin/profile"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-05.jpg" alt="User Image"></NuxtLink>
                                                <a href="javascript:void(0);" class="user-name"><span class="text-muted">Dr. Rayan</span> <span class="tab-subtext">Gyanoclogist</span></a>
                                            </h2>
                                        </td>
                                        <td><span class="table-rating"><i class="fas fa-star me-2"></i> 4.5</span></td>
                                        <td class="text-right"><span class="text-muted">200 Patients</span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink class="avatar-pos avatar-online" to="/admin/profile"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-10.jpg" alt="User Image"></NuxtLink>
                                                <a href="javascript:void(0);" class="user-name"><span class="text-muted">Dr. Bea</span> <span class="tab-subtext">Dentist</span></a>
                                            </h2>
                                        </td>
                                        <td><span class="table-rating"><i class="fas fa-star me-2"></i> 4.9</span></td>
                                        <td class="text-right"><span class="text-muted">180 Patients</span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink class="avatar-pos avatar-offline" to="/admin/profile"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-11.jpg" alt="User Image"></NuxtLink>
                                                <a href="javascript:void(0);" class="user-name"><span class="text-muted">Dr. Monroe</span> <span class="tab-subtext">Hair Specialities</span></a>
                                            </h2>
                                        </td>
                                        <td><span class="table-rating"><i class="fas fa-star me-2"></i> 4.8</span></td>
                                        <td class="text-right"><span class="text-muted">160 Patients</span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink class="avatar-pos avatar-offline" to="/admin/profile"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-13.jpg" alt="User Image"></NuxtLink>
                                                <a href="javascript:void(0);" class="user-name"><span class="text-muted">Dr. Lester</span> <span class="tab-subtext">Orthopaedics</span></a>
                                            </h2>
                                        </td>
                                        <td><span class="table-rating"><i class="fas fa-star me-2"></i> 4.7</span></td>
                                        <td class="text-right"><span class="text-muted">140 Patients</span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink class="empty-user" to="/admin/profile"> <user-icon size="1.4x" class="custom-class"></user-icon> </NuxtLink>
                                                <a href="javascript:void(0);" class="user-name"><span class="text-muted">Dr. Clint</span> <span class="tab-subtext">Neurology</span></a>
                                            </h2>
                                        </td>
                                        <td><span class="table-rating"><i class="fas fa-star me-2"></i> 4.6</span></td>
                                        <td class="text-right"><span class="text-muted">120 Patients</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Top Doctors -->
        </div>
        
        <div class="row">
            <!-- Popular by Speciality -->
            <div class="col-xl-4 col-md-6">
                <div class="card">
                    <div class="card-header">
                        <div class="row align-items-center">
                            <div class="col">
                                <h5 class="card-title">Popular by Speciality </h5>
                            </div>
                            <div class="col-auto">
                                <select class="select">
                                    <option>This Week</option>
                                    <option>This Month</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="card-body p-0">	
                        <div class="table-responsive">	
                            <table class="table table-borderless">
                                <tbody>									
                                    <tr class="speciality-item">	
                                        <td class="spl-name">
                                            <div class="spl-box">
                                                <img src="../../assets/admin_img/icon/urology.png" alt="User Image">
                                            </div>
                                            <div class="spl-count">
                                                <h6>Urology</h6> 
                                                <p>Patients : 400</p>
                                            </div>
                                        </td>
                                        <td class="con-revenue">
                                            <p class="text-muted">Revenue</p>
                                            <h6>$6000K</h6>
                                        </td>
                                        <td class="spl-consult">
                                            <p class="text-muted">Consultations</p>
                                            <h6>200</h6>
                                        </td>
                                    </tr>											
                                    <tr class="speciality-item">	
                                        <td class="spl-name">
                                            <div class="spl-box">
                                                <img src="../../assets/admin_img/icon/neurology.png" alt="User Image">
                                            </div>
                                            <div class="spl-count">
                                                <h6>Neurology</h6> 
                                                <p>Patients : 980 </p>
                                            </div>
                                        </td>
                                        <td class="con-revenue">
                                            <p class="text-muted">Revenue</p>
                                            <h6>$6000K</h6>
                                        </td>
                                        <td class="spl-consult">
                                            <p class="text-muted">Consultations</p>
                                            <h6>98</h6>
                                        </td>
                                    </tr>
                                    <tr class="speciality-item">	
                                        <td class="spl-name">
                                            <div class="spl-box">
                                                <img src="../../assets/admin_img/icon/ortho.png" alt="User Image">
                                            </div>
                                            <div class="spl-count">
                                                <h6>Orthopedic</h6> 
                                                <p>Patients : 600</p>
                                            </div>
                                        </td>
                                        <td class="con-revenue">
                                            <p class="text-muted">Revenue</p>
                                            <h6>$6000K</h6>
                                        </td>
                                        <td class="spl-consult">
                                            <p class="text-muted">Consultations</p>
                                            <h6>78</h6>
                                        </td>
                                    </tr>
                                    <tr class="speciality-item">	
                                        <td class="spl-name">
                                            <div class="spl-box">
                                                <img src="../../assets/admin_img/icon/cardio.png" alt="User Image">
                                            </div>
                                            <div class="spl-count">
                                                <h6>Urology</h6> 
                                                <p>Patients : 400</p>
                                            </div>
                                        </td>
                                        <td class="con-revenue">
                                            <p class="text-muted">Revenue</p>
                                            <h6>$6000K</h6>
                                        </td>
                                        <td class="spl-consult">
                                            <p class="text-muted">Consultations</p>
                                            <h6>65</h6>
                                        </td>
                                    </tr>
                                    <tr class="speciality-item">	
                                        <td class="spl-name">
                                            <div class="spl-box">
                                                <img src="../../assets/admin_img/icon/dental.png" alt="User Image">
                                            </div>
                                            <div class="spl-count">
                                                <h6>Urology</h6> 
                                                <p>Patients : 400</p>
                                            </div>
                                        </td>
                                        <td class="con-revenue">
                                            <p class="text-muted">Revenue</p>
                                            <h6>$6000K</h6>
                                        </td>
                                        <td class="spl-consult">
                                            <p class="text-muted">Consultations</p>
                                            <h6>59</h6>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Popular by Speciality -->
            
            <!-- Consultaion Today -->
            <div class="col-xl-4 col-md-6">
                <div class="row">
                    <div class="col-md-6 pe-md-0">
                        <div class="card cons-card mb-3">
                            <h6>Consultaion Today</h6>
                            <div id="income-month"></div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card pat-card mb-1">
                            <div class="card-body">
                                <p>New Patients</p>
                                <h3>45</h3>
                                <p class="trade-level mb-0"><span class="text-danger me-1"><i class="fas fa-caret-down me-1"></i>1.15%</span> last week</p>
                            </div>
                        </div>
                        <div class="card pat-card mb-3">
                            <div class="card-body">
                                <p>Old Patients</p>
                                <h3>45</h3>
                                <p class="trade-level mb-0"><span class="text-success me-1"><i class="fas fa-caret-up me-1"></i>9.5%</span> last week</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <div class="row align-items-center">
                                    <div class="col">
                                        <h5 class="card-title">Appointment Status</h5>
                                    </div>
                                    <div class="col-auto">
                                        <select class="select">
                                            <option>This Week</option>
                                            <option>This Month</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">	
                                <div class="row">
                                    <div class="col-md-6">
                                        <div id="status_chart"></div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="app-status">
                                            <p>Completed Appointment</p>
                                            <h6 class="text-primary">650</h6>
                                            <p>Cancelled Appointment</p>
                                            <h6>250</h6>												
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Consultaion Today -->
            
            <!-- Upcoming Appointments -->
            <div class="col-xl-4">
                <div class="card">			
                    <div class="card-header">			
                        <div class="row">
                            <div class="col">
                                <h5 class="card-title">Upcoming Appointments</h5>
                            </div>
                        </div>
                    </div>
                    <div class="card-body up-content">
                        <div class="nav nav-tabs">			
                            <div class="nav nav-tabs upcomimg-app">
                                <div class="pricing-carousel owl-carousel owl-theme">
                                    <div class="item">
                                        <div class="price-list active">
                                            <a class="active" data-bs-toggle="tab" href="#home">
                                                Sun
                                                <span>28th</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="nav-item price-list">
                                            <a data-bs-toggle="tab" href="#menu1">
                                                Mon
                                                <span>28th</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="price-list">
                                            <a data-bs-toggle="tab" href="#menu2">
                                                 Tue
                                                <span>November 30</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="price-list">
                                            <a data-bs-toggle="tab" href="#menu3">
                                                Wed
                                                <span>1st</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="price-list">
                                            <a data-bs-toggle="tab" href="#menu4">
                                                Thu
                                                <span>2nd</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="price-list">
                                            <a data-bs-toggle="tab" href="#menu4">
                                                Fri
                                                <span>2nd</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-content upcoming-content">
                            <div id="home" class="tab-pane in active">
                                <div class="appointment-items">
                                    <div class="app-user">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-02.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Dr. Lester </h6>
                                                        <p>Orthopaedics</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-05.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Chris Harris</h6>
                                                        <p>ID : 781212, M</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	
                                    <div class="app-time">
                                        <p><clock-icon size="1.4x" class="custom-class me-1"></clock-icon> 06:00pm - 06:20pm</p>
                                    </div>									
                                    <div class="app-infos">
                                        <div class="row align-items-center">
                                            <div class="col-4 col-sm-4">
                                                <p>Duration</p>
                                                <p class="mb-0">20 Min</p>
                                            </div>
                                            <div class="col-8 col-sm-4">
                                                <p>Consultation Fee</p>
                                                <h6>$30.00K</h6>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="float-sm-end">
                                                    <div class="mode-app text-yellow">
                                                        <video-icon size="1.4x" class="custom-class"></video-icon>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="appointment-items">
                                    <div class="app-user">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-09.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Dr. Rayan </h6>
                                                        <p>Orthopaedics</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-13.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Chris Harris</h6>
                                                        <p>ID : 781212, M</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	
                                    <div class="app-time">
                                        <p><clock-icon size="1.4x" class="custom-class me-1"></clock-icon> 06:00pm - 06:20pm</p>
                                    </div>									
                                    <div class="app-infos">
                                        <div class="row align-items-center">
                                            <div class="col-4 col-sm-4">
                                                <p>Duration</p>
                                                <p class="mb-0">20 Min</p>
                                            </div>
                                            <div class="col-8 col-sm-4">
                                                <p>Consultation Fee</p>
                                                <h6>$30.00K</h6>
                                            </div>
                                            <div class="col-sm-4">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="appointment-items">
                                    <div class="app-user">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-08.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Dr. Leo </h6>
                                                        <p>Orthopaedics</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-02.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Harris</h6>
                                                        <p>ID : 781212, M</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	
                                    <div class="app-time">
                                        <p><clock-icon size="1.4x" class="custom-class me-1"></clock-icon> 06:00pm - 06:20pm</p>
                                    </div>									
                                    <div class="app-infos">
                                        <div class="row align-items-center">
                                            <div class="col-4 col-sm-4">
                                                <p>Duration</p>
                                                <p class="mb-0">20 Min</p>
                                            </div>
                                            <div class="col-8 col-sm-4">
                                                <p>Consultation Fee</p>
                                                <h6>$30.00K</h6>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="float-sm-end">
                                                    <div class="mode-app text-yellow">
                                                        <video-icon size="1.4x" class="custom-class"></video-icon>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="menu1" class="tab-pane">
                                <div class="appointment-items">
                                    <div class="app-user">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-07.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Dr. Rayan </h6>
                                                        <p>Orthopaedics</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-08.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Harris</h6>
                                                        <p>ID : 781212, M</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	
                                    <div class="app-time">
                                        <p><clock-icon size="1.4x" class="custom-class me-1"></clock-icon> 06:00pm - 06:20pm</p>
                                    </div>									
                                    <div class="app-infos">
                                        <div class="row align-items-center">
                                            <div class="col-4 col-sm-4">
                                                <p>Duration</p>
                                                <p class="mb-0">20 Min</p>
                                            </div>
                                            <div class="col-8 col-sm-4">
                                                <p>Consultation Fee</p>
                                                <h6>$30.00K</h6>
                                            </div>
                                            <div class="col-6 col-sm-4">
                                                <div class="float-sm-end">
                                                    <div class="mode-app text-yellow">
                                                        <video-icon size="1.4x" class="custom-class"></video-icon>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="appointment-items">
                                    <div class="app-user">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-02.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Dr. Lester </h6>
                                                        <p>Orthopaedics</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-05.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Chris Harris</h6>
                                                        <p>ID : 781212, M</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	
                                    <div class="app-time">
                                        <p><clock-icon size="1.4x" class="custom-class me-1"></clock-icon> 06:00pm - 06:20pm</p>
                                    </div>									
                                    <div class="app-infos">
                                        <div class="row align-items-center">
                                            <div class="col-4 col-sm-4">
                                                <p>Duration</p>
                                                <p class="mb-0">20 Min</p>
                                            </div>
                                            <div class="col-8 col-sm-4">
                                                <p>Consultation Fee</p>
                                                <h6>$30.00K</h6>
                                            </div>
                                            <div class="col-6 col-sm-4">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="appointment-items">
                                    <div class="app-user">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-02.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Dr. Lester </h6>
                                                        <p>Orthopaedics</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-05.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Chris Harris</h6>
                                                        <p>ID : 781212, M</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	
                                    <div class="app-time">
                                        <p><clock-icon size="1.4x" class="custom-class me-1"></clock-icon> 06:00pm - 06:20pm</p>
                                    </div>									
                                    <div class="app-infos">
                                        <div class="row align-items-center">
                                            <div class="col-4 col-sm-4">
                                                <p>Duration</p>
                                                <p class="mb-0">20 Min</p>
                                            </div>
                                            <div class="col-8 col-sm-4">
                                                <p>Consultation Fee</p>
                                                <h6>$30.00K</h6>
                                            </div>
                                            <div class="col-6 col-sm-4">
                                                <div class="float-sm-end">
                                                    <div class="mode-app text-yellow">
                                                        <video-icon size="1.4x" class="custom-class"></video-icon>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="menu2" class="tab-pane">
                                <div class="appointment-items">
                                    <div class="app-user">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-02.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Dr. Lester </h6>
                                                        <p>Orthopaedics</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-05.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Chris Harris</h6>
                                                        <p>ID : 781212, M</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	
                                    <div class="app-time">
                                        <p><clock-icon size="1.4x" class="custom-class me-1"></clock-icon> 06:00pm - 06:20pm</p>
                                    </div>									
                                    <div class="app-infos">
                                        <div class="row align-items-center">
                                            <div class="col-4 col-sm-4">
                                                <p>Duration</p>
                                                <p class="mb-0">20 Min</p>
                                            </div>
                                            <div class="col-8 col-sm-4">
                                                <p>Consultation Fee</p>
                                                <h6>$30.00K</h6>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="float-sm-end">
                                                    <div class="mode-app text-yellow">
                                                        <video-icon size="1.4x" class="custom-class"></video-icon>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="appointment-items">
                                    <div class="app-user">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-02.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Dr. Lester </h6>
                                                        <p>Orthopaedics</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-05.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Chris Harris</h6>
                                                        <p>ID : 781212, M</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	
                                    <div class="app-time">
                                        <p><clock-icon size="1.4x" class="custom-class me-1"></clock-icon> 06:00pm - 06:20pm</p>
                                    </div>									
                                    <div class="app-infos">
                                        <div class="row align-items-center">
                                            <div class="col-4 col-sm-4">
                                                <p>Duration</p>
                                                <p class="mb-0">20 Min</p>
                                            </div>
                                            <div class="col-8 col-sm-4">
                                                <p>Consultation Fee</p>
                                                <h6>$30.00K</h6>
                                            </div>
                                            <div class="col-sm-4">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="appointment-items">
                                    <div class="app-user">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-02.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Dr. Lester </h6>
                                                        <p>Orthopaedics</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-05.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Chris Harris</h6>
                                                        <p>ID : 781212, M</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	
                                    <div class="app-time">
                                        <p><clock-icon size="1.4x" class="custom-class me-1"></clock-icon> 06:00pm - 06:20pm</p>
                                    </div>									
                                    <div class="app-infos">
                                        <div class="row align-items-center">
                                            <div class="col-4 col-sm-4">
                                                <p>Duration</p>
                                                <p class="mb-0">20 Min</p>
                                            </div>
                                            <div class="col-8 col-sm-4">
                                                <p>Consultation Fee</p>
                                                <h6>$30.00K</h6>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="float-sm-end">
                                                    <div class="mode-app text-yellow">
                                                        <video-icon size="1.4x" class="custom-class"></video-icon>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="menu3" class="tab-pane">
                                <div class="appointment-items">
                                    <div class="app-user">
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-12.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Dr. Alex </h6>
                                                        <p>Orthopaedics</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-13.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Abdul Harris</h6>
                                                        <p>ID : 781212, M</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	
                                    <div class="app-time">
                                        <p><clock-icon size="1.4x" class="custom-class me-1"></clock-icon> 06:00pm - 06:20pm</p>
                                    </div>									
                                    <div class="app-infos">
                                        <div class="row align-items-center">
                                            <div class="col-4 col-sm-4">
                                                <p>Duration</p>
                                                <p class="mb-0">20 Min</p>
                                            </div>
                                            <div class="col-8 col-sm-4">
                                                <p>Consultation Fee</p>
                                                <h6>$30.00K</h6>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="float-sm-end">
                                                    <div class="mode-app text-yellow">
                                                        <video-icon size="1.4x" class="custom-class"></video-icon>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="appointment-items">
                                    <div class="app-user">
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-02.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Dr. Lester </h6>
                                                        <p>Orthopaedics</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-05.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Chris Harris</h6>
                                                        <p>ID : 781212, M</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	
                                    <div class="app-time">
                                        <p><clock-icon size="1.4x" class="custom-class me-1"></clock-icon> 06:00pm - 06:20pm</p>
                                    </div>									
                                    <div class="app-infos">
                                        <div class="row align-items-center">
                                            <div class="col-4 col-sm-4">
                                                <p>Duration</p>
                                                <p class="mb-0">20 Min</p>
                                            </div>
                                            <div class="col-8 col-sm-4">
                                                <p>Consultation Fee</p>
                                                <h6>$30.00K</h6>
                                            </div>
                                            <div class="col-sm-4">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="appointment-items">
                                    <div class="app-user">
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-02.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Dr. Lester </h6>
                                                        <p>Orthopaedics</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-05.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Chris Harris</h6>
                                                        <p>ID : 781212, M</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	
                                    <div class="app-time">
                                        <p><clock-icon size="1.4x" class="custom-class me-1"></clock-icon> 06:00pm - 06:20pm</p>
                                    </div>									
                                    <div class="app-infos">
                                        <div class="row align-items-center">
                                            <div class="col-4 col-sm-4">
                                                <p>Duration</p>
                                                <p class="mb-0">20 Min</p>
                                            </div>
                                            <div class="col-8 col-sm-4">
                                                <p>Consultation Fee</p>
                                                <h6>$30.00K</h6>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="float-sm-end">
                                                    <div class="mode-app text-yellow">
                                                        <video-icon size="1.4x" class="custom-class"></video-icon>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="menu4" class="tab-pane">
                                <div class="appointment-items">
                                    <div class="app-user">
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-02.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Dr. Lester </h6>
                                                        <p>Orthopaedics</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-05.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Chris Harris</h6>
                                                        <p>ID : 781212, M</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	
                                    <div class="app-time">
                                        <p><clock-icon size="1.4x" class="custom-class me-1"></clock-icon> 06:00pm - 06:20pm</p>
                                    </div>									
                                    <div class="app-infos">
                                        <div class="row align-items-center">
                                            <div class="col-4 col-sm-4">
                                                <p>Duration</p>
                                                <p class="mb-0">20 Min</p>
                                            </div>
                                            <div class="col-8 col-sm-4">
                                                <p>Consultation Fee</p>
                                                <h6>$30.00K</h6>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="float-sm-end">
                                                    <div class="mode-app text-yellow">
                                                        <video-icon size="1.4x" class="custom-class"></video-icon>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="appointment-items">
                                    <div class="app-user">
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-02.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Dr. Lester </h6>
                                                        <p>Orthopaedics</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-05.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Chris Harris</h6>
                                                        <p>ID : 781212, M</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	
                                    <div class="app-time">
                                        <p><clock-icon size="1.4x" class="custom-class me-1"></clock-icon> 06:00pm - 06:20pm</p>
                                    </div>									
                                    <div class="app-infos">
                                        <div class="row align-items-center">
                                            <div class="col-4 col-sm-4">
                                                <p>Duration</p>
                                                <p class="mb-0">20 Min</p>
                                            </div>
                                            <div class="col-8 col-sm-4">
                                                <p>Consultation Fee</p>
                                                <h6>$30.00K</h6>
                                            </div>
                                            <div class="col-sm-4">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="appointment-items">
                                    <div class="app-user">
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-02.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Dr. Lester </h6>
                                                        <p>Orthopaedics</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-05.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Chris Harris</h6>
                                                        <p>ID : 781212, M</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	
                                    <div class="app-time">
                                        <p><clock-icon size="1.4x" class="custom-class me-1"></clock-icon> 06:00pm - 06:20pm</p>
                                    </div>									
                                    <div class="app-infos">
                                        <div class="row align-items-center">
                                            <div class="col-4 col-sm-4">
                                                <p>Duration</p>
                                                <p class="mb-0">20 Min</p>
                                            </div>
                                            <div class="col-8 col-sm-4">
                                                <p>Consultation Fee</p>
                                                <h6>$30.00K</h6>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="float-sm-end">
                                                    <div class="mode-app text-yellow">
                                                        <video-icon size="1.4x" class="custom-class"></video-icon>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>					
                            </div>
                            <div id="menu5" class="tab-pane">
                                <div class="appointment-items">
                                    <div class="app-user">
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-03.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Dr. Shofia </h6>
                                                        <p>Orthopaedics</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-10.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Harris Chris</h6>
                                                        <p>ID : 781212, M</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	
                                    <div class="app-time">
                                        <p><clock-icon size="1.4x" class="custom-class me-1"></clock-icon> 06:00pm - 06:20pm</p>
                                    </div>									
                                    <div class="app-infos">
                                        <div class="row align-items-center">
                                            <div class="col-4 col-sm-6">
                                                <p>Duration</p>
                                                <p class="mb-0">20 Min</p>
                                            </div>
                                            <div class="col-8 col-sm-6">
                                                <p>Consultation Fee</p>
                                                <h6>$30.00K</h6>
                                            </div>
                                            <div class="col-4">
                                                <div class="float-end">
                                                    <div class="mode-app text-yellow">
                                                        <video-icon size="1.4x" class="custom-class"></video-icon>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="appointment-items">
                                    <div class="app-user">
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-02.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Dr. Lester </h6>
                                                        <p>Orthopaedics</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-05.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Chris Harris</h6>
                                                        <p>ID : 781212, M</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	
                                    <div class="app-time">
                                        <p><clock-icon size="1.4x" class="custom-class me-1"></clock-icon> 06:00pm - 06:20pm</p>
                                    </div>									
                                    <div class="app-infos">
                                        <div class="row align-items-center">
                                            <div class="col-4 col-sm-4">
                                                <p>Duration</p>
                                                <p class="mb-0">20 Min</p>
                                            </div>
                                            <div class="col-8 col-sm-4">
                                                <p>Consultation Fee</p>
                                                <h6>$30.00K</h6>
                                            </div>
                                            <div class="col-sm-4">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="appointment-items">
                                    <div class="app-user">
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-02.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Dr. Lester </h6>
                                                        <p>Orthopaedics</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-05.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Chris Harris</h6>
                                                        <p>ID : 781212, M</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	
                                    <div class="app-time">
                                        <p><clock-icon size="1.4x" class="custom-class me-1"></clock-icon> 06:00pm - 06:20pm</p>
                                    </div>									
                                    <div class="app-infos">
                                        <div class="row align-items-center">
                                            <div class="col-4 col-sm-4">
                                                <p>Duration</p>
                                                <p class="mb-0">20 Min</p>
                                            </div>
                                            <div class="col-8 col-sm-4">
                                                <p>Consultation Fee</p>
                                                <h6>$30.00K</h6>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="float-sm-end">
                                                    <div class="mode-app text-yellow">
                                                        <video-icon size="1.4x" class="custom-class"></video-icon>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="menu6" class="tab-pane">
                                <div class="appointment-items">
                                    <div class="app-user">
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-02.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Dr. Lester </h6>
                                                        <p>Orthopaedics</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-05.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Chris Harris</h6>
                                                        <p>ID : 781212, M</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	
                                    <div class="app-time">
                                        <p><clock-icon size="1.4x" class="custom-class me-1"></clock-icon> 06:00pm - 06:20pm</p>
                                    </div>									
                                    <div class="app-infos">
                                        <div class="row align-items-center">
                                            <div class="col-4 col-sm-4">
                                                <p>Duration</p>
                                                <p class="mb-0">20 Min</p>
                                            </div>
                                            <div class="col-8 col-sm-4">
                                                <p>Consultation Fee</p>
                                                <h6>$30.00K</h6>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="float-end">
                                                    <div class="mode-app text-yellow">
                                                        <video-icon size="1.4x" class="custom-class"></video-icon>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="appointment-items">
                                    <div class="app-user">
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-02.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Dr. Lester </h6>
                                                        <p>Orthopaedics</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-05.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Chris Harris</h6>
                                                        <p>ID : 781212, M</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	
                                    <div class="app-time">
                                        <p><clock-icon size="1.4x" class="custom-class me-1"></clock-icon> 06:00pm - 06:20pm</p>
                                    </div>									
                                    <div class="app-infos">
                                        <div class="row align-items-center">
                                            <div class="col-4 col-sm-4">
                                                <p>Duration</p>
                                                <p class="mb-0">20 Min</p>
                                            </div>
                                            <div class="col-8 col-sm-4">
                                                <p>Consultation Fee</p>
                                                <h6>$30.00K</h6>
                                            </div>
                                            <div class="col-sm-4">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="appointment-items">
                                    <div class="app-user">
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-02.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Dr. Lester </h6>
                                                        <p>Orthopaedics</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-05.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Chris Harris</h6>
                                                        <p>ID : 781212, M</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	
                                    <div class="app-time">
                                        <p><clock-icon size="1.4x" class="custom-class me-1"></clock-icon> 06:00pm - 06:20pm</p>
                                    </div>									
                                    <div class="app-infos">
                                        <div class="row align-items-center">
                                            <div class="col-4 col-sm-4">
                                                <p>Duration</p>
                                                <p class="mb-0">20 Min</p>
                                            </div>
                                            <div class="col-8 col-sm-4">
                                                <p>Consultation Fee</p>
                                                <h6>$30.00K</h6>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="float-sm-end">
                                                    <div class="mode-app text-yellow">
                                                        <video-icon size="1.4x" class="custom-class"></video-icon>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>						
                            </div>
                            <div id="menu7" class="tab-pane">
                                <div class="appointment-items">
                                    <div class="app-user">
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-02.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Dr. Lester </h6>
                                                        <p>Orthopaedics</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-05.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Chris Harris</h6>
                                                        <p>ID : 781212, M</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	
                                    <div class="app-time">
                                        <p><clock-icon size="1.4x" class="custom-class me-1"></clock-icon> 06:00pm - 06:20pm</p>
                                    </div>									
                                    <div class="app-infos">
                                        <div class="row align-items-center">
                                            <div class="col-4 col-sm-4">
                                                <p>Duration</p>
                                                <p class="mb-0">20 Min</p>
                                            </div>
                                            <div class="col-8 col-sm-4">
                                                <p>Consultation Fee</p>
                                                <h6>$30.00K</h6>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="float-end">
                                                    <div class="mode-app text-yellow">
                                                        <video-icon size="1.4x" class="custom-class"></video-icon>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="appointment-items">
                                    <div class="app-user">
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-02.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Dr. Lester </h6>
                                                        <p>Orthopaedics</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-05.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Chris Harris</h6>
                                                        <p>ID : 781212, M</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	
                                    <div class="app-time">
                                        <p><clock-icon size="1.4x" class="custom-class me-1"></clock-icon> 06:00pm - 06:20pm</p>
                                    </div>									
                                    <div class="app-infos">
                                        <div class="row align-items-center">
                                            <div class="col-4 col-sm-4">
                                                <p>Duration</p>
                                                <p class="mb-0">20 Min</p>
                                            </div>
                                            <div class="col-8 col-sm-4">
                                                <p>Consultation Fee</p>
                                                <h6>$30.00K</h6>
                                            </div>
                                            <div class="col-sm-4">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="appointment-items">
                                    <div class="app-user">
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-02.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Dr. Lester </h6>
                                                        <p>Orthopaedics</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="app-img">
                                                    <img src="../../assets/admin_img/profiles/avatar-05.jpg" alt="" class="img-fluid">
                                                    <div class="app-name">
                                                        <h6>Chris Harris</h6>
                                                        <p>ID : 781212, M</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	
                                    <div class="app-time">
                                        <p><clock-icon size="1.4x" class="custom-class me-1"></clock-icon> 06:00pm - 06:20pm</p>
                                    </div>									
                                    <div class="app-infos">
                                        <div class="row align-items-center">
                                            <div class="col-4 col-sm-4">
                                                <p>Duration</p>
                                                <p class="mb-0">20 Min</p>
                                            </div>
                                            <div class="col-8 col-sm-4">
                                                <p>Consultation Fee</p>
                                                <h6>$30.00K</h6>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="float-end">
                                                    <div class="mode-app text-yellow">
                                                        <video-icon size="1.4x" class="custom-class"></video-icon>
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
            <!-- /Upcoming Appointments -->
        </div>
        
        <div class="row">
        
            <!-- Recent Prescriptions -->
            <div class="col-xl-4 col-md-6">
                <div class="card recent-card">
                    <div class="card-header">
                        <div class="row">
                            <div class="col">
                                <h5 class="card-title">Recent Prescriptions</h5>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">	
                        <div class="table-responsive recent-tab">	
                            <table class="table table-borderless">
                                <tbody>	
                                    <tr>
                                        <td>
                                            <div class="pres-list">
                                                <div class="pres-head">
                                                    <h6>Abacavir</h6>
                                                    <p>#8995447</p>
                                                </div>
                                                <div class="pres-body">
                                                    <div>
                                                        <p>Prescribed By </p>
                                                        <h6>Dr. Cullin Drew</h6>
                                                    </div>
                                                    <div>
                                                        <p>Prescribed For</p>
                                                        <h6>Amanda</h6>
                                                    </div>
                                                    <div>
                                                        <p>Type </p>
                                                        <h6 class="text-muted">One time</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="pres-list">
                                                <div class="pres-head">
                                                    <h6>Calcium</h6>
                                                    <p>#8799488</p>
                                                </div>
                                                <div class="pres-body">
                                                    <div>
                                                        <p>Prescribed By </p>
                                                        <h6>Dr. Mark Briffa</h6>
                                                    </div>
                                                    <div>
                                                        <p>Prescribed For</p>
                                                        <h6>Theiry</h6>
                                                    </div>
                                                    <div>
                                                        <p>Type </p>
                                                        <h6 class="text-muted">One time</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="pres-list mb-0">
                                                <div class="pres-head">
                                                    <h6>Abacavir</h6>
                                                    <p>#8995447</p>
                                                </div>
                                                <div class="pres-body">
                                                    <div>
                                                        <p>Prescribed By </p>
                                                        <h6>Dr. Linda</h6>
                                                    </div>
                                                    <div>
                                                        <p>Prescribed For</p>
                                                        <h6>Hendry</h6>
                                                    </div>
                                                    <div>
                                                        <p>Type </p>
                                                        <h6 class="text-muted">One time</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Recent Prescriptions -->
            
            <!-- Top Countries -->
            <div class="col-xl-4 col-md-6">
                <div class="card">
                    <div class="card-header">
                        <div class="row align-items-center">
                            <div class="col">
                                <h5 class="card-title">Top Countries</h5>
                            </div>
                            <div class="col-auto">
                                <select class="select">
                                    <option>Patients</option>
                                    <option>Doctors</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">	
                        <div class="country-item">	
                            <div class="con-name">
                                <div class="flag-box">
                                    <img class="rounded-circle" src="../../assets/admin_img/flags/flag-01.png" alt="User Image">
                                </div>
                                <div class="flag-name">
                                    <p class="user-name"><span>United States</span> <span class="d-block text-muted">800 Patients</span></p>
                                </div>
                            </div>
                            <div class="con-revenue">
                                <p class="text-muted">Revenue</p>
                                <h6>$6000K</h6>
                            </div>
                        </div>
                        <div class="country-item">	
                            <div class="con-name">
                                <div class="flag-box">
                                    <img class="rounded-circle" src="../../assets/admin_img/flags/flag-02.png" alt="User Image">
                                </div>
                                <div class="flag-name">
                                    <p class="user-name"><span>United Kingdom</span> <span class="d-block text-muted">450 Patients</span></p>
                                </div>
                            </div>
                            <div class="con-revenue">
                                <p class="text-muted">Revenue</p>
                                <h6>$4000K</h6>
                            </div>
                        </div>
                        <div class="country-item">	
                            <div class="con-name">
                                <div class="flag-box">
                                    <img class="rounded-circle" src="../../assets/admin_img/flags/flag-03.png" alt="User Image">
                                </div>
                                <div class="flag-name">
                                    <p class="user-name"><span>UAE</span> <span class="d-block text-muted">300 Patients</span></p>
                                </div>
                            </div>
                            <div class="con-revenue">
                                <p class="text-muted">Revenue</p>
                                <h6>$3000K</h6>
                            </div>
                        </div>
                        <div class="country-item">	
                            <div class="con-name">
                                <div class="flag-box">
                                    <img class="rounded-circle" src="../../assets/admin_img/flags/flag-04.png" alt="User Image">
                                </div>
                                <div class="flag-name">
                                    <p class="user-name"><span>India</span> <span class="d-block text-muted">300 Patients</span></p>
                                </div>
                            </div>
                            <div class="con-revenue">
                                <p class="text-muted">Revenue</p>
                                <h6>$3000K</h6>
                            </div>
                        </div>
                        <div class="country-item">	
                            <div class="con-name">
                                <div class="flag-box">
                                    <img class="rounded-circle" src="../../assets/admin_img/flags/flag-05.png" alt="User Image">
                                </div>
                                <div class="flag-name">
                                    <p class="user-name"><span>UAE</span> <span class="d-block text-muted">300 Patients</span></p>
                                </div>
                            </div>
                            <div class="con-revenue">
                                <p class="text-muted">Revenue</p>
                                <h6>$3000K</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Top Countries -->
            
            <!-- Doctor Ratings -->
            <div class="col-xl-4">
                <div class="row">
                    <div class="col-sm-6 d-flex">									
                        <div class="spl-items flex-fill">
                            <NuxtLink to="/admin/ratings">
                                <star-icon size="1.4x" class="custom-class"></star-icon>
                                <h6>Doctor Ratings</h6>
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="col-sm-6 d-flex">									
                        <div class="spl-items flex-fill">
                            <NuxtLink to="/admin/transaction">
                                <credit-card-icon size="1.4x" class="custom-class"></credit-card-icon>
                                <h6>Transactions</h6>
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="col-sm-6 d-flex">
                        <div class="spl-items flex-fill">
                            <NuxtLink to="/admin/settings">
                                <sliders-icon size="1.4x" class="custom-class"></sliders-icon>
                                <h6>Settings</h6>
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="col-sm-6 d-flex">
                        <div class="spl-items flex-fill">
                            <NuxtLink to="/admin/upcoming-appointments">
                                <calendar-icon size="1.4x" class="custom-class"></calendar-icon>
                                <h6>Appointments</h6>
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="col-sm-6 d-flex">
                        <div class="spl-items flex-fill">
                            <NuxtLink to="/admin/specialities">
                                <package-icon size="1.4x" class="custom-class"></package-icon>
                                <h6>Specialities</h6>
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="col-sm-6 d-flex">
                        <div class="spl-items flex-fill">
                            <NuxtLink to="/admin/patient-list">
                                <users-icon size="1.4x" class="custom-class"></users-icon>
                                <h6>Patients</h6>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Doctor Ratings -->
        </div>
        
    </div>
</div>
<!-- /Page Wrapper -->
<Nuxt />
</div>
</template>

<script>
import { UserPlusIcon } from 'vue-feather-icons'
import { UserIcon } from 'vue-feather-icons'
import { VideoIcon } from 'vue-feather-icons'
import { MicIcon } from 'vue-feather-icons'
import { MessageSquareIcon } from 'vue-feather-icons'
import { ChevronDownIcon } from 'vue-feather-icons'
import { ChevronRightIcon } from 'vue-feather-icons'
import { ClockIcon } from 'vue-feather-icons'
import { StarIcon } from 'vue-feather-icons'
import { CreditCardIcon } from 'vue-feather-icons'
import { SlidersIcon } from 'vue-feather-icons'
import { CalendarIcon } from 'vue-feather-icons'
import { PackageIcon } from 'vue-feather-icons'
import { UsersIcon } from 'vue-feather-icons'
export default {
    components: {
    UserPlusIcon,
    UserIcon,
    VideoIcon,
    MicIcon,
    MessageSquareIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    ClockIcon,
    StarIcon,
    CreditCardIcon,
    SlidersIcon,
    CalendarIcon,
    PackageIcon,
    UsersIcon
  },
    mounted() {
        if ($('.select').length > 0) {
		$('.select').select2({
			minimumResultsForSearch: -1,
			width: '100%'
		});
	}
        $(function(){
            if($('#sales_chart').length > 0) {
		var columnCtx = document.getElementById("sales_chart"),
		columnConfig = {
			colors: ['#0CE0FF', '#1B5A90', '#DFE5FC'],
			series: [
				{
				name: "Video Call",
				type: "column",
				data: [4, 2.8, 5, 2, 3.2, 1.2, 2, 3, 2, 3.5, 5, 2]
				},
				{
				name: "Audio call",
				type: "column",
				data: [3, 3, 2, 3, 1.5, 1, 3, 2, 3, 1.5, 2, 3]
				},
				{
					name: "Chat",
					type: "column",
					data: [4.5, 3.8, 2.5, 3, 4.5, 3, 4.5, 3, 4, 5, 1.5, 2]
				}
			],
			chart: {
				type: 'bar',
				fontFamily: 'Poppins, sans-serif',
				height: 350,
				toolbar: {
					show: false
				}
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: '60%',
				},
			},
			dataLabels: {
				enabled: false
			},
			grid: {
				show: false,
			},
			legend: {
				position: 'top',
				horizontalAlign: 'right',
			 },
			stroke: {
				show: true,
				width: 2,
				colors: ['transparent']
			},
			xaxis: {
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			},
			yaxis: {
				labels: {
					formatter: function (val) {
						return val + "k"
					}
				},
				axisBorder: {
					show: true,
				},
			},
			fill: {
				opacity: 1
			},
			tooltip: {
				y: {
					formatter: function (val) {
						return val + "k"
					}
				}
			}
		};
		var columnChart = new ApexCharts(columnCtx, columnConfig);
		columnChart.render();
	}
    if($('#income-report').length > 0) {
		var options = {
				series: [{
					name: "Video Call",
					data: [0, 1, 1.5, 3.5, 2]
				},
				{
					name: "Audio Call",
					data: [0, 3, 3.5, 2.5, 3.5]
				},
				{
					name: "Chat",
					data: [0, 4, 4.5, 3.8, 4]
				}
			],
			colors: ['#0CE0FF', '#1B5A90', '#DFE5FC'],
			  chart: {
			  height: 300,
			  type: 'area',
			  toolbar: {
					show: false
				},
			  zoom: {
				enabled: false
			  }
			},
			dataLabels: {
			  enabled: false
			},
			stroke: {
			  curve: 'straight',
			  width: 1,
			},
			markers: {
				size: 3,
			},
			legend: {
				position: 'top',
				horizontalAlign: 'right',
			 },
			grid: {
			  show: false,
			},
			yaxis: {
				labels: {
					formatter: function (val) {
						return val + "k"
					}
				},
				axisBorder: {
					show: true,
				},
			},
			xaxis: {
			  categories: ['', '22/11/2021', '23/11/2021', '24/11/2021', '25/11/2021'],
				}
		};

		var chart = new ApexCharts(document.querySelector("#income-report"), options);
		chart.render();
	}
    if($('.owl-carousel.appointment-slider').length > 0) {
		$('.owl-carousel.appointment-slider').owlCarousel({
			loop:true,
			margin:15,
			dots: false,
			nav:true,
			navContainer: '.slide-nav-3',
			navText: [ '<i class="fas fa-chevron-left custom-arrow"></i>', '<i class="fas fa-chevron-right custom-arrow"></i>' ], 
			responsive:{
				0:{
					items:1
				},
				500:{
					items:1
				},
				768:{
					items:2
				},
				1350:{
					items:3
				}
			}
		})	
	}
    if($('#income-month').length > 0) {
	var sColStacked = {
		chart: {
			height: 165,
			type: 'bar',
			stacked: true,
			toolbar: {
			  show: false,
			}
		},
		colors: ['#0CE0FF', '#1B5A90', '#EEF1FE'],
		responsive: [{
			breakpoint: 480,
			options: {
				legend: {
					position: 'bottom',
					offsetX: -10,
					offsetY: 0
				}
			}
		}],
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '30px',			
			},
		},
		grid: {
			padding: {
				left: -15,
				right: 0
			  },
			 show: false,
		},
		dataLabels: {
			enabled: false,
		},
		series: [{
			name: 'Scheduled Appointment',
			data: [1.6, 1.6, 1.5]
		},{
			name: 'Doctors Available Now',
			data: [4, 2, 1.8]
		},{
			name: 'Home Visits',
			data: [9, 4, 6]
		}],
		xaxis: {
			categories: ['09:00', '10:00', '11:00'],
			axisBorder: {
				show: true,
			},
		}, 
		legend: {
			show: false,
		},
		fill: {
			opacity: 1
		},
		yaxis: {
			show: false,
			labels: {
      offsetX: 0,
			}
		},
		tooltip: {
			y: {
				formatter: function (val) {
					return "€ " + val + "k"
				}
			}
		}
	}

	var chart = new ApexCharts(
		document.querySelector("#income-month"),
		sColStacked
	);

	chart.render();
	
	}
    if($('#status_chart').length > 0) {
		var pieCtx = document.getElementById("status_chart"),
		pieConfig = {
			colors: ['#0CE0FF', '#1B5A90'],
			series: [650, 250],
			 plotOptions: {
				pie: {
				  donut: {
						  size: '60%',
					labels: {
					  show: true,
					   total: {
			  show: false,
					   },
					},
				  },
				},
			 },
			  stroke: {
				lineCap: "round",
			  },
			chart: {
				fontFamily: 'Poppins, sans-serif',
				height: 194,
				type: 'donut',
			},
			labels: ['Completed', 'Cancelled'],
			legend: {show: true,
			position: 'bottom',
				horizontalAlign: 'left',},
			responsive: [{
				breakpoint: 480,
				options: {
					chart: {
						width: 200
					},
					legend: {
						position: 'bottom'
					}
				}
			}]
		};
		var pieChart = new ApexCharts(pieCtx, pieConfig);
		pieChart.render();
	}
    if($('.pricing-carousel').length > 0 ){
		$('.pricing-carousel').owlCarousel({
	        loop:true,
			margin:10,
			dots: false,
			nav:true,
			navText: [
				'<i class="fas fa-chevron-left"></i>',
				'<i class="fas fa-chevron-right"></i>'
			],
	        responsive: {
	          	0: {
	            	items: 1
	          	},
	          	480 : {
	            	items: 2,
					margin: 10
	          	},
	          	576 : {
	            	items: 2,
					margin: 15
	          	},
	          	768 : {
	            	items: 2,
					margin: 15
	          	},
	          	992 : {
	            	items: 2,
					margin: 15
	          	},
	          	1170: {
	            	items: 2,
					margin: 15
	          	},
	          	1550: {
	            	items: 5
	          	}
	        }
	    });
    }
    if($('.bookingrange').length > 0) {
		var start = moment().subtract(6, 'days');
		var end = moment();

		function booking_range(start, end) {
			$('.bookingrange span').html(start.format('M/D/YYYY') + ' - ' + end.format('M/D/YYYY'));
		}

		$('.bookingrange').daterangepicker({
			startDate: start,
			endDate: end,
			ranges: {
				'Today': [moment(), moment()],
				'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
				'Last 7 Days': [moment().subtract(6, 'days'), moment()],
				'Last 30 Days': [moment().subtract(29, 'days'), moment()],
				'This Month': [moment().startOf('month'), moment().endOf('month')],
				'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
			}
		}, booking_range);

		booking_range(start, end);
	}
});
    },
    head: {
    title: 'Doccure - Dashboard'
  },
    layout: 'admin',
	computed: {
       currentPath() {
           return this.$route.name
	   },
	}
}
</script>
<style>
    .fa-users {
        font-size: 20px;
    }
    .fa-credit-card {
        font-size: 20px;
    }
    .fa-folder {
        font-size: 20px;
    }
    .fa-money {
        font-size: 20px;
    }
    .fa-star {
        font-size: 12px;
    }
    </style>