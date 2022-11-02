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
                        <li class="breadcrumb-item active" aria-current="page">Favourites</li>
                    </ol>
                </nav>
                <h2 class="breadcrumb-title">Favourites</h2>
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
                                <li class="active">
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
            <div class="col-md-7 col-lg-8 col-xl-9">
                <div class="row row-grid">
                    <div class="col-md-6 col-lg-4 col-xl-3">
                        <div class="profile-widget">
                            <div class="doc-img">
                                <NuxtLink to="/doctor-profile">
                                    <img class="img-fluid" alt="User Image" src="../assets/img/doctors/doctor-01.jpg">
                                </NuxtLink>
                                <a href="javascript:void(0)" class="fav-btn">
                                    <i class="far fa-bookmark"></i>
                                </a>
                            </div>
                            <div class="pro-content">
                                <h3 class="title">
                                    <NuxtLink to="/doctor-profile">Dr. Ruby Perrin</NuxtLink> 
                                    <i class="fas fa-check-circle verified"></i>
                                </h3>
                                <p class="speciality">MDS - Periodontology and Oral Implantology, BDS</p>
                                <div class="rating">
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <span class="d-inline-block average-rating">(17)</span>
                                </div>
                                <ul class="available-info">
                                    <li>
                                        <i class="fas fa-map-marker-alt"></i> Florida, USA
                                    </li>
                                    <li>
                                        <i class="far fa-clock"></i> Available on Fri, 22 Mar
                                    </li>
                                    <li>
                                        <i class="far fa-money-bill-alt"></i> $300 - $1000 <i class="fas fa-info-circle" data-bs-toggle="tooltip" title="Lorem Ipsum"></i>
                                    </li>
                                </ul>
                                <div class="row row-sm">
                                    <div class="col-6">
                                        <NuxtLink to="/doctor-profile" class="btn view-btn">View Profile</NuxtLink>
                                    </div>
                                    <div class="col-6">
                                        <NuxtLink to="/booking" class="btn book-btn">Book Now</NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-6 col-lg-4 col-xl-3">
                        <div class="profile-widget">
                            <div class="doc-img">
                                <NuxtLink to="/doctor-profile">
                                    <img class="img-fluid" alt="User Image" src="../assets/img/doctors/doctor-02.jpg">
                                </NuxtLink>
                                <a href="javascript:void(0)" class="fav-btn">
                                    <i class="far fa-bookmark"></i>
                                </a>
                            </div>
                            <div class="pro-content">
                                <h3 class="title">
                                    <NuxtLink to="/doctor-profile">Dr. Darren Elder</NuxtLink> 
                                    <i class="fas fa-check-circle verified"></i>
                                </h3>
                                <p class="speciality">BDS, MDS - Oral & Maxillofacial Surgery</p>
                                <div class="rating">
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star"></i>
                                    <span class="d-inline-block average-rating">(35)</span>
                                </div>
                                <ul class="available-info">
                                    <li>
                                        <i class="fas fa-map-marker-alt"></i> Newyork, USA
                                    </li>
                                    <li>
                                        <i class="far fa-clock"></i> Available on Fri, 22 Mar
                                    </li>
                                    <li>
                                        <i class="far fa-money-bill-alt"></i> $50 - $300 <i class="fas fa-info-circle" data-bs-toggle="tooltip" title="Lorem Ipsum"></i>
                                    </li>
                                </ul>
                                <div class="row row-sm">
                                    <div class="col-6">
                                        <NuxtLink to="/doctor-profile" class="btn view-btn">View Profile</NuxtLink>
                                    </div>
                                    <div class="col-6">
                                        <NuxtLink to="/booking" class="btn book-btn">Book Now</NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-6 col-lg-4 col-xl-3">
                        <div class="profile-widget">
                            <div class="doc-img">
                                <NuxtLink to="/doctor-profile">
                                    <img class="img-fluid" alt="User Image" src="../assets/img/doctors/doctor-03.jpg">
                                </NuxtLink>
                                <a href="javascript:void(0)" class="fav-btn">
                                    <i class="far fa-bookmark"></i>
                                </a>
                            </div>
                            <div class="pro-content">
                                <h3 class="title">
                                    <NuxtLink to="/doctor-profile">Dr. Deborah Angel</NuxtLink> 
                                    <i class="fas fa-check-circle verified"></i>
                                </h3>
                                <p class="speciality">MBBS, MD - General Medicine, DNB - Cardiology</p>
                                <div class="rating">
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star"></i>
                                    <span class="d-inline-block average-rating">(27)</span>
                                </div>
                                <ul class="available-info">
                                    <li>
                                        <i class="fas fa-map-marker-alt"></i> Georgia, USA
                                    </li>
                                    <li>
                                        <i class="far fa-clock"></i> Available on Fri, 22 Mar
                                    </li>
                                    <li>
                                        <i class="far fa-money-bill-alt"></i> $100 - $400 <i class="fas fa-info-circle" data-bs-toggle="tooltip" title="Lorem Ipsum"></i>
                                    </li>
                                </ul>
                                <div class="row row-sm">
                                    <div class="col-6">
                                        <NuxtLink to="/doctor-profile" class="btn view-btn">View Profile</NuxtLink>
                                    </div>
                                    <div class="col-6">
                                        <NuxtLink to="/booking" class="btn book-btn">Book Now</NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-6 col-lg-4 col-xl-3">
                        <div class="profile-widget">
                            <div class="doc-img">
                                <NuxtLink to="/doctor-profile">
                                    <img class="img-fluid" alt="User Image" src="../assets/img/doctors/doctor-04.jpg">
                                </NuxtLink>
                                <a href="javascript:void(0)" class="fav-btn">
                                    <i class="far fa-bookmark"></i>
                                </a>
                            </div>
                            <div class="pro-content">
                                <h3 class="title">
                                    <NuxtLink to="/doctor-profile">Dr. Sofia Brient</NuxtLink> 
                                    <i class="fas fa-check-circle verified"></i>
                                </h3>
                                <p class="speciality">MBBS, MS - General Surgery, MCh - Urology</p>
                                <div class="rating">
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star"></i>
                                    <span class="d-inline-block average-rating">(4)</span>
                                </div>
                                <ul class="available-info">
                                    <li>
                                        <i class="fas fa-map-marker-alt"></i> Louisiana, USA
                                    </li>
                                    <li>
                                        <i class="far fa-clock"></i> Available on Fri, 22 Mar
                                    </li>
                                    <li>
                                        <i class="far fa-money-bill-alt"></i> $150 - $250 <i class="fas fa-info-circle" data-bs-toggle="tooltip" title="Lorem Ipsum"></i>
                                    </li>
                                </ul>
                                <div class="row row-sm">
                                    <div class="col-6">
                                        <NuxtLink to="/doctor-profile" class="btn view-btn">View Profile</NuxtLink>
                                    </div>
                                    <div class="col-6">
                                        <NuxtLink to="/booking" class="btn book-btn">Book Now</NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-6 col-lg-4 col-xl-3">
                        <div class="profile-widget">
                            <div class="doc-img">
                                <NuxtLink to="/doctor-profile">
                                    <img class="img-fluid" alt="User Image" src="../assets/img/doctors/doctor-05.jpg">
                                </NuxtLink>
                                <a href="javascript:void(0)" class="fav-btn">
                                    <i class="far fa-bookmark"></i>
                                </a>
                            </div>
                            <div class="pro-content">
                                <h3 class="title">
                                    <NuxtLink to="/doctor-profile">Dr. Marvin Campbell</NuxtLink> 
                                    <i class="fas fa-check-circle verified"></i>
                                </h3>
                                <p class="speciality">MBBS, MD - Ophthalmology, DNB - Ophthalmology</p>
                                <div class="rating">
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star"></i>
                                    <span class="d-inline-block average-rating">(66)</span>
                                </div>
                                <ul class="available-info">
                                    <li>
                                        <i class="fas fa-map-marker-alt"></i> Michigan, USA
                                    </li>
                                    <li>
                                        <i class="far fa-clock"></i> Available on Fri, 22 Mar
                                    </li>
                                    <li>
                                        <i class="far fa-money-bill-alt"></i> $50 - $700 
                                        <i class="fas fa-info-circle" data-bs-toggle="tooltip" title="Lorem Ipsum"></i>
                                    </li>
                                </ul>
                                <div class="row row-sm">
                                    <div class="col-6">
                                        <NuxtLink to="/doctor-profile" class="btn view-btn">View Profile</NuxtLink>
                                    </div>
                                    <div class="col-6">
                                        <NuxtLink to="/booking" class="btn book-btn">Book Now</NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-6 col-lg-4 col-xl-3">
                        <div class="profile-widget">
                            <div class="doc-img">
                                <NuxtLink to="/doctor-profile">
                                    <img class="img-fluid" alt="User Image" src="../assets/img/doctors/doctor-06.jpg">
                                </NuxtLink>
                                <a href="javascript:void(0)" class="fav-btn">
                                    <i class="far fa-bookmark"></i>
                                </a>
                            </div>
                            <div class="pro-content">
                                <h3 class="title">
                                    <NuxtLink to="/doctor-profile">Dr. Katharine Berthold</NuxtLink> 
                                    <i class="fas fa-check-circle verified"></i>
                                </h3>
                                <p class="speciality">MS - Orthopaedics, MBBS, M.Ch - Orthopaedics</p>
                                <div class="rating">
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star"></i>
                                    <span class="d-inline-block average-rating">(52)</span>
                                </div>
                                <ul class="available-info">
                                    <li>
                                        <i class="fas fa-map-marker-alt"></i> Texas, USA
                                    </li>
                                    <li>
                                        <i class="far fa-clock"></i> Available on Fri, 22 Mar
                                    </li>
                                    <li>
                                        <i class="far fa-money-bill-alt"></i> $100 - $500 
                                        <i class="fas fa-info-circle" data-bs-toggle="tooltip" title="Lorem Ipsum"></i>
                                    </li>
                                </ul>
                                <div class="row row-sm">
                                    <div class="col-6">
                                        <NuxtLink to="/doctor-profile" class="btn view-btn">View Profile</NuxtLink>
                                    </div>
                                    <div class="col-6">
                                        <NuxtLink to="/booking" class="btn book-btn">Book Now</NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-6 col-lg-4 col-xl-3">
                        <div class="profile-widget">
                            <div class="doc-img">
                                <NuxtLink to="/doctor-profile">
                                    <img class="img-fluid" alt="User Image" src="../assets/img/doctors/doctor-07.jpg">
                                </NuxtLink>
                                <a href="javascript:void(0)" class="fav-btn">
                                    <i class="far fa-bookmark"></i>
                                </a>
                            </div>
                            <div class="pro-content">
                                <h3 class="title">
                                    <NuxtLink to="/doctor-profile">Dr. Linda Tobin</NuxtLink> 
                                    <i class="fas fa-check-circle verified"></i>
                                </h3>
                                <p class="speciality">MBBS, MD - General Medicine, DM - Neurology</p>
                                <div class="rating">
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star"></i>
                                    <span class="d-inline-block average-rating">(43)</span>
                                </div>
                                <ul class="available-info">
                                    <li>
                                        <i class="fas fa-map-marker-alt"></i> Kansas, USA
                                    </li>
                                    <li>
                                        <i class="far fa-clock"></i> Available on Fri, 22 Mar
                                    </li>
                                    <li>
                                        <i class="far fa-money-bill-alt"></i> $100 - $1000 
                                        <i class="fas fa-info-circle" data-bs-toggle="tooltip" title="Lorem Ipsum"></i>
                                    </li>
                                </ul>
                                <div class="row row-sm">
                                    <div class="col-6">
                                        <NuxtLink to="/doctor-profile" class="btn view-btn">View Profile</NuxtLink>
                                    </div>
                                    <div class="col-6">
                                        <NuxtLink to="/booking" class="btn book-btn">Book Now</NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-6 col-lg-4 col-xl-3">
                        <div class="profile-widget">
                            <div class="doc-img">
                                <NuxtLink to="/doctor-profile">
                                    <img class="img-fluid" alt="User Image" src="../assets/img/doctors/doctor-08.jpg">
                                </NuxtLink>
                                <a href="javascript:void(0)" class="fav-btn">
                                    <i class="far fa-bookmark"></i>
                                </a>
                            </div>
                            <div class="pro-content">
                                <h3 class="title">
                                    <NuxtLink to="/doctor-profile">Dr. Paul Richard</NuxtLink> 
                                    <i class="fas fa-check-circle verified"></i>
                                </h3>
                                <p class="speciality">MBBS, MD - Dermatology , Venereology & Lepros</p>
                                <div class="rating">
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star"></i>
                                    <span class="d-inline-block average-rating">(49)</span>
                                </div>
                                <ul class="available-info">
                                    <li>
                                        <i class="fas fa-map-marker-alt"></i> California, USA
                                    </li>
                                    <li>
                                        <i class="far fa-clock"></i> Available on Fri, 22 Mar
                                    </li>
                                    <li>
                                        <i class="far fa-money-bill-alt"></i> $100 - $400 
                                        <i class="fas fa-info-circle" data-bs-toggle="tooltip" title="Lorem Ipsum"></i>
                                    </li>
                                </ul>
                                <div class="row row-sm">
                                    <div class="col-6">
                                        <NuxtLink to="/doctor-profile" class="btn view-btn">View Profile</NuxtLink>
                                    </div>
                                    <div class="col-6">
                                        <NuxtLink to="/booking" class="btn book-btn">Book Now</NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-6 col-lg-4 col-xl-3">
                        <div class="profile-widget">
                            <div class="doc-img">
                                <NuxtLink to="/doctor-profile">
                                    <img class="img-fluid" alt="User Image" src="../assets/img/doctors/doctor-09.jpg">
                                </NuxtLink>
                                <a href="javascript:void(0)" class="fav-btn">
                                    <i class="far fa-bookmark"></i>
                                </a>
                            </div>
                            <div class="pro-content">
                                <h3 class="title">
                                    <NuxtLink to="/doctor-profile">Dr. John Gibbs</NuxtLink> 
                                    <i class="fas fa-check-circle verified"></i>
                                </h3>
                                <p class="speciality">MDS - Periodontology and Oral Implantology, BDS</p>
                                <div class="rating">
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star"></i>
                                    <span class="d-inline-block average-rating">(112)</span>
                                </div>
                                <ul class="available-info">
                                    <li>
                                        <i class="fas fa-map-marker-alt"></i> Oklahoma, USA
                                    </li>
                                    <li>
                                        <i class="far fa-clock"></i> Available on Fri, 22 Mar
                                    </li>
                                    <li>
                                        <i class="far fa-money-bill-alt"></i> $500 - $2500 
                                        <i class="fas fa-info-circle" data-bs-toggle="tooltip" title="Lorem Ipsum"></i>
                                    </li>
                                </ul>
                                <div class="row row-sm">
                                    <div class="col-6">
                                        <NuxtLink to="/doctor-profile" class="btn view-btn">View Profile</NuxtLink>
                                    </div>
                                    <div class="col-6">
                                        <NuxtLink to="/booking" class="btn book-btn">Book Now</NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-6 col-lg-4 col-xl-3">
                        <div class="profile-widget">
                            <div class="doc-img">
                                <NuxtLink to="/doctor-profile">
                                    <img class="img-fluid" alt="User Image" src="../assets/img/doctors/doctor-10.jpg">
                                </NuxtLink>
                                <a href="javascript:void(0)" class="fav-btn">
                                    <i class="far fa-bookmark"></i>
                                </a>
                            </div>
                            <div class="pro-content">
                                <h3 class="title">
                                    <NuxtLink to="/doctor-profile">Dr. Olga Barlow</NuxtLink> 
                                    <i class="fas fa-check-circle verified"></i>
                                </h3>
                                <p class="speciality">MDS - Periodontology and Oral Implantology, BDS</p>
                                <div class="rating">
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star"></i>
                                    <span class="d-inline-block average-rating">(65)</span>
                                </div>
                                <ul class="available-info">
                                    <li>
                                        <i class="fas fa-map-marker-alt"></i> Montana, USA
                                    </li>
                                    <li>
                                        <i class="far fa-clock"></i> Available on Fri, 22 Mar
                                    </li>
                                    <li>
                                        <i class="far fa-money-bill-alt"></i> $75 - $250 
                                        <i class="fas fa-info-circle" data-bs-toggle="tooltip" title="Lorem Ipsum"></i>
                                    </li>
                                </ul>
                                <div class="row row-sm">
                                    <div class="col-6">
                                        <NuxtLink to="/doctor-profile" class="btn view-btn">View Profile</NuxtLink>
                                    </div>
                                    <div class="col-6">
                                        <NuxtLink to="/booking" class="btn book-btn">Book Now</NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-6 col-lg-4 col-xl-3">
                        <div class="profile-widget">
                            <div class="doc-img">
                                <NuxtLink to="/doctor-profile">
                                    <img class="img-fluid" alt="User Image" src="../assets/img/doctors/doctor-11.jpg">
                                </NuxtLink>
                                <a href="javascript:void(0)" class="fav-btn">
                                    <i class="far fa-bookmark"></i>
                                </a>
                            </div>
                            <div class="pro-content">
                                <h3 class="title">
                                    <NuxtLink to="/doctor-profile">Dr. Julia Washington</NuxtLink> 
                                    <i class="fas fa-check-circle verified"></i>
                                </h3>
                                <p class="speciality">MBBS, MD - General Medicine, DM - Endocrinology</p>
                                <div class="rating">
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star"></i>
                                    <span class="d-inline-block average-rating">(5)</span>
                                </div>
                                <ul class="available-info">
                                    <li>
                                        <i class="fas fa-map-marker-alt"></i> Oklahoma, USA
                                    </li>
                                    <li>
                                        <i class="far fa-clock"></i> Available on Fri, 22 Mar
                                    </li>
                                    <li>
                                        <i class="far fa-money-bill-alt"></i> $275 - $450 
                                        <i class="fas fa-info-circle" data-bs-toggle="tooltip" title="Lorem Ipsum"></i>
                                    </li>
                                </ul>
                                <div class="row row-sm">
                                    <div class="col-6">
                                        <NuxtLink to="/doctor-profile" class="btn view-btn">View Profile</NuxtLink>
                                    </div>
                                    <div class="col-6">
                                        <NuxtLink to="/booking" class="btn book-btn">Book Now</NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-6 col-lg-4 col-xl-3">
                        <div class="profile-widget">
                            <div class="doc-img">
                                <NuxtLink to="/doctor-profile">
                                    <img class="img-fluid" alt="User Image" src="../assets/img/doctors/doctor-12.jpg">
                                </NuxtLink>
                                <a href="javascript:void(0)" class="fav-btn">
                                    <i class="far fa-bookmark"></i>
                                </a>
                            </div>
                            <div class="pro-content">
                                <h3 class="title">
                                    <NuxtLink to="/doctor-profile">Dr. Shaun Aponte</NuxtLink> 
                                    <i class="fas fa-check-circle verified"></i>
                                </h3>
                                <p class="speciality">MBBS, MS - ENT, Diploma in Otorhinolaryngology (DLO)</p>
                                <div class="rating">
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star"></i>
                                    <span class="d-inline-block average-rating">(5)</span>
                                </div>
                                <ul class="available-info">
                                    <li>
                                        <i class="fas fa-map-marker-alt"></i> Indiana, USA
                                    </li>
                                    <li>
                                        <i class="far fa-clock"></i> Available on Fri, 22 Mar
                                    </li>
                                    <li>
                                        <i class="far fa-money-bill-alt"></i> $150 - $350 
                                        <i class="fas fa-info-circle" data-bs-toggle="tooltip" title="Lorem Ipsum"></i>
                                    </li>
                                </ul>
                                <div class="row row-sm">
                                    <div class="col-6">
                                        <NuxtLink to="/doctor-profile" class="btn view-btn">View Profile</NuxtLink>
                                    </div>
                                    <div class="col-6">
                                        <NuxtLink to="/booking" class="btn book-btn">Book Now</NuxtLink>
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