<template>
 <div class="main-wrapper multi-optn">
 <!-- Home Banner -->
 <section class="section-search-3">
    <div class="container">
        <div class="banner-info">
            <div class="row align-items-center">
                <div class="col-lg-4">
                    <div class="header-banner aos" data-aos="fade-up">
                        <h2>Search Doctor, <br> <span class="header-highlight">Make an Appointment</span></h2>
                        <p>Discover the best doctors, clinic & hospital the city nearest to you.</p>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="doctor-search aos" data-aos="fade-up">
                        <div class="doctor-form">
                            <form action="#" class="doctor-search-form trans">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <div class="form-custom">
                                                <input type="text" class="form-control" value="" placeholder="Search Location">
                                                <i class="far fa-compass"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <div class="form-custom">
                                                <input type="text" class="form-control" value="" placeholder="Gender">
                                                <i class="far fa-smile"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-7">
                                        <div class="form-group">
                                            <div class="form-custom">
                                                <input type="text" class="form-control" value="" placeholder="Department">
                                                <i class="fas fa-user-check"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <NuxtLink to="/search" class="btn banner-btn">MAKE APPOINTMENT</NuxtLink>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /Home Banner -->

<!-- category select-->
<section class="doctor-category">
    <div class="container">
        <div class="row">
            <div class="col-md-4 aos" data-aos="fade-up">
                <div class="pop-box">
                    <div class="top-section">
                        <div class="cat-icon">
                            <i class="fas fa-procedures"></i>
                        </div>
                    </div>
                    <div class="body-section">
                        <h3>Visit a Doctor</h3>
                        <p>250 +  Doctors</p>
                        <NuxtLink to="/booking" class="btn book-btn" tabindex="0">Book Now</NuxtLink>
                    </div>
                </div>
            </div>
            <div class="col-md-4 aos" data-aos="fade-up">
                <div class="pop-box">
                    <div class="top-section two">
                        <div class="cat-icon">
                            <i class="fas fa-plus-square"></i>
                        </div>
                    </div>
                    <div class="body-section">
                        <h3>Find a Pharmacy</h3>
                        <p>2560 +  Pharmacy</p>
                        <NuxtLink to="/booking" class="btn book-btn" tabindex="0">Book Now</NuxtLink>
                    </div>
                </div>
            </div>
            <div class="col-md-4 aos" data-aos="fade-up">
                <div class="pop-box">
                    <div class="top-section three">
                        <div class="cat-icon">
                            <i class="fas fa-city"></i>
                        </div>
                    </div>
                    <div class="body-section">
                        <h3>Find a Lab</h3>
                        <p>250 +  Testing Labs</p>
                        <NuxtLink to="/booking" class="btn book-btn" tabindex="0">Book Now</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /category select-->

<!-- Clinic Section -->
<section class="clinic-specialities">
    <div class="container">
        <div class="section-header-three text-center aos" data-aos="fade-up">
            <h2>Clinic & Specialities</h2>
            <p class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="row">
            <div class="col-lg-3 col-md-4 aos" data-aos="fade-up">
                <div class="special-box text-center">
                    <div class="special-body">
                        <img src="../assets/img/shapes/spec.png" alt=""/>
                        <h4>Orthopedic</h4>
                        <NuxtLink to="/booking" class="spc-book">Book now <i class="fas fa-caret-right"></i> </NuxtLink>
                    </div>
                    <div class="row row-sm special-footer">
                        <div class="col-6 text-start">
                            <a href="javascript:void(0);" class="doc-count">124 <span>Doctors</span></a>
                        </div>
                        <div class="col-6 text-end">
                            <a href="javascript:void(0);" class="clin-count">24 <span>Clinics</span></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 aos" data-aos="fade-up">
                <div class="special-box text-center">
                    <div class="special-body">
                        <img src="../assets/img/shapes/spec-01.png" alt=""/>
                        <h4>Laboratry</h4>
                        <NuxtLink to="/booking" class="spc-book">Book now <i class="fas fa-caret-right"></i> </NuxtLink>
                    </div>
                    <div class="row row-sm special-footer">
                        <div class="col-6 text-start">
                            <a href="javascript:void(0);" class="doc-count">124 <span>Doctors</span></a>
                        </div>
                        <div class="col-6 text-end">
                            <a href="javascript:void(0);" class="clin-count">24 <span>Clinics</span></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 aos" data-aos="fade-up">
                <div class="special-box text-center">
                    <div class="special-body">
                        <img src="../assets/img/shapes/spec-02.png" alt=""/>
                        <h4>Neurology</h4>
                        <NuxtLink to="/booking" class="spc-book">Book now <i class="fas fa-caret-right"></i> </NuxtLink>
                    </div>
                    <div class="row row-sm special-footer">
                        <div class="col-6 text-start">
                            <a href="javascript:void(0);" class="doc-count">124 <span>Doctors</span></a>
                        </div>
                        <div class="col-6 text-end">
                            <a href="javascript:void(0);" class="clin-count">24 <span>Clinics</span></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 aos" data-aos="fade-up">
                <div class="special-box text-center">
                    <div class="special-body">
                        <img src="../assets/img/shapes/spec-03.png" alt=""/>
                        <h4>Cardiology</h4>
                        <NuxtLink to="/booking" class="spc-book">Book now <i class="fas fa-caret-right"></i> </NuxtLink>
                    </div>
                    <div class="row row-sm special-footer">
                        <div class="col-6 text-start">
                            <a href="javascript:void(0);" class="doc-count">124 <span>Doctors</span></a>
                        </div>
                        <div class="col-6 text-end">
                            <a href="javascript:void(0);" class="clin-count">24 <span>Clinics</span></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 aos" data-aos="fade-up">
                <div class="special-box text-center">
                    <div class="special-body">
                        <img src="../assets/img/shapes/spec-04.png" alt=""/>
                        <h4>MRI Scans</h4>
                        <NuxtLink to="/booking" class="spc-book">Book now <i class="fas fa-caret-right"></i> </NuxtLink>
                    </div>
                    <div class="row row-sm special-footer">
                        <div class="col-6 text-start">
                            <a href="javascript:void(0);" class="doc-count">124 <span>Doctors</span></a>
                        </div>
                        <div class="col-6 text-end">
                            <a href="javascript:void(0);" class="clin-count">24 <span>Clinics</span></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 aos" data-aos="fade-up">
                <div class="special-box text-center">
                    <div class="special-body">
                        <img src="../assets/img/shapes/spec-05.png" alt=""/>
                        <h4>Primary Checkup</h4>
                        <NuxtLink to="/booking" class="spc-book">Book now <i class="fas fa-caret-right"></i> </NuxtLink>
                    </div>
                    <div class="row row-sm special-footer">
                        <div class="col-6 text-start">
                            <a href="javascript:void(0);" class="doc-count">124 <span>Doctors</span></a>
                        </div>
                        <div class="col-6 text-end">
                            <a href="javascript:void(0);" class="clin-count">24 <span>Clinics</span></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 aos" data-aos="fade-up">
                <div class="special-box text-center">
                    <div class="special-body">
                        <img src="../assets/img/shapes/spec-06.png" alt=""/>
                        <h4>Testing</h4>
                        <NuxtLink to="/booking" class="spc-book">Book now <i class="fas fa-caret-right"></i> </NuxtLink>
                    </div>
                    <div class="row row-sm special-footer">
                        <div class="col-6 text-start">
                            <a href="javascript:void(0);" class="doc-count">124 <span>Doctors</span></a>
                        </div>
                        <div class="col-6 text-end">
                            <a href="javascript:void(0);" class="clin-count">24 <span>Clinics</span></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 aos" data-aos="fade-up">
                <div class="special-box text-center">
                    <div class="special-body">
                        <img src="../assets/img/shapes/spec-07.png" alt=""/>
                        <h4>Dentist</h4>
                        <NuxtLink to="/booking" class="spc-book">Book now <i class="fas fa-caret-right"></i> </NuxtLink>
                    </div>
                    <div class="row row-sm special-footer">
                        <div class="col-6 text-start">
                            <a href="javascript:void(0);" class="doc-count">124 <span>Doctors</span></a>
                        </div>
                        <div class="col-6 text-end">
                            <a href="javascript:void(0);" class="clin-count">24 <span>Clinics</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="view-all-more text-center aos" data-aos="fade-up">	
            <NuxtLink to="/doctor-profile" class="btn btn-primary">View More</NuxtLink>
        </div>
    </div>
</section>
<!-- /Clinic Section -->

<!-- browse speciality-->
<section class="browse-section">
    <div class="container">
        <div class="section-header-three text-center aos" data-aos="fade-up">
            <h2>Browse by Specialities</h2>
            <p class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="row">
            <div class="col-lg-2 col-md-3 aos" data-aos="fade-up">
                <div class="brower-box">
                    <div>
                        <div class="brower-img">
                            <img src="../assets/img/shapes/bro-01.png" alt=""/>
                        </div>
                        <h4>Urology</h4>
                        <p>124 <span>Doctors</span></p>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-3 aos" data-aos="fade-up">
                <div class="brower-box">
                    <div>
                        <div class="brower-img">
                            <img src="../assets/img/shapes/bro-02.png" alt=""/>
                        </div>
                        <h4>Neurology</h4>
                        <p>124 <span>Doctors</span></p>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-3 aos" data-aos="fade-up">
                <div class="brower-box">
                    <div>
                        <div class="brower-img">
                            <img src="../assets/img/shapes/bro-03.png" alt=""/>
                        </div>
                        <h4>Orthopedic</h4>
                        <p>124 <span>Doctors</span></p>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-3 aos" data-aos="fade-up">
                <div class="brower-box">
                    <div>
                        <div class="brower-img">
                            <img src="../assets/img/shapes/bro-04.png" alt=""/>
                        </div>
                        <h4>Cardiologist</h4>
                        <p>124 <span>Doctors</span></p>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-3 aos" data-aos="fade-up">
                <div class="brower-box">
                    <div>
                        <div class="brower-img">
                            <img src="../assets/img/shapes/bro-01.png" alt=""/>
                        </div>
                        <h4>Dentist</h4>
                        <p>124 <span>Doctors</span></p>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-3 aos" data-aos="fade-up">
                <div class="brower-box">
                    <div>
                        <div class="brower-img">
                            <img src="../assets/img/shapes/bro-05.png" alt=""/>
                        </div>
                        <h4>Heart surgery</h4>
                        <p>124 <span>Doctors</span></p>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-3 aos" data-aos="fade-up">
                <div class="brower-box">
                    <div>
                        <div class="brower-img">
                            <img src="../assets/img/shapes/bro-01.png" alt=""/>
                        </div>
                        <h4>Urology</h4>
                        <p>124 <span>Doctors</span></p>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-3 aos" data-aos="fade-up">
                <div class="brower-box">
                    <div>
                        <div class="brower-img">
                            <img src="../assets/img/shapes/bro-02.png" alt=""/>
                        </div>
                        <h4>Neurology</h4>
                        <p>124 <span>Doctors</span></p>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-3 aos" data-aos="fade-up">
                <div class="brower-box">
                    <div>
                        <div class="brower-img">
                            <img src="../assets/img/shapes/bro-03.png" alt=""/>
                        </div>
                        <h4>Orthopedic</h4>
                        <p>124 <span>Doctors</span></p>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-3 aos" data-aos="fade-up">
                <div class="brower-box">
                    <div>
                        <div class="brower-img">
                            <img src="../assets/img/shapes/bro-04.png" alt=""/>
                        </div>
                        <h4>Cardiologist</h4>
                        <p>124 <span>Doctors</span></p>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-3 aos" data-aos="fade-up">
                <div class="brower-box">
                    <div>
                        <div class="brower-img">
                            <img src="../assets/img/shapes/bro-01.png" alt=""/>
                        </div>
                        <h4>Dentist</h4>
                        <p>124 <span>Doctors</span></p>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-3 aos" data-aos="fade-up">
                <div class="brower-box">
                    <div>
                        <div class="brower-img">
                            <img src="../assets/img/shapes/bro-05.png" alt=""/>
                        </div>
                        <h4>Heart surgery</h4>
                        <p>124 <span>Doctors</span></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="view-all-more text-center aos" data-aos="fade-up">	
            <NuxtLink to="/doctor-profile" class="btn btn-primary">View More</NuxtLink>
        </div>
    </div>
</section>
<!-- /browse speciality-->

<!-- Doctor Section-->
<section class="doctor-divison">
    <div class="d-flex">
        <div class="doc-background aos" data-aos="fade-up">
            <h3>ARE YOU A DOCTOR?</h3>
            <p>The service allows you to get maximum visibility online and to manage appointments and contacts coming from the site, in a simple and fast way.</p>
            <NuxtLink to="/booking" class="doc-bok-btn">Book Now</NuxtLink>
        </div>
        <div class="pat-background aos" data-aos="fade-up">
            <h3>ARE YOU A PATIENT?</h3>
            <p>The service allows you to get maximum visibility online and to manage appointments and contacts coming from the site, in a simple and fast way.</p>
            <NuxtLink to="/booking" class="doc-bok-btn">Book Now</NuxtLink>
        </div>
    </div>
</section>
<!-- /Doctor Section-->

<!-- Book Doctors-->
<section class="book-section">
    <div class="container">
        <div class="section-header-three text-center aos" data-aos="fade-up">
            <h2>Book Our Best Doctor</h2>
            <p class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="row">
            <div class="col-lg-3 col-md-6 aos" data-aos="fade-up">
                <div class="book-best-doctors">
                    <div class="book-header">
                        <NuxtLink to="/doctor-profile"><img src="../assets/img/doctors/doctor-01.jpg" alt="" class="img-fluid"></NuxtLink>
                        <div class="img-overlay">
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    <div class="doctors-body">
                        <div class="inner-section">
                            <span class="float-start">PSICOLOGIST</span>
                            <div class="rating text-end">
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star"></i>
                                <span class="d-inline-block average-ratings">3.5</span>
                            </div>
                            <NuxtLink to="/doctor-profile"><h4>Dr. Ruby Perrin</h4></NuxtLink>
                            <p>MBBS, MD - General Medicine, DNB - Cardiology</p>
                        </div>
                        <div class="row row-sm loc-details">
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);">
                                        <img src="../assets/img/shapes/map-plus.png" alt="" />
                                    </a> 
                                    <a href="javascript:void(0);">
                                        <span class="available-info">Location</span>
                                        <span class="data-info">Newyork, USA</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);">
                                        <img src="../assets/img/shapes/alarm.png" alt="" />
                                    </a> 
                                    <a href="javascript:void(0);">
                                        <span class="available-info">Available on</span>
                                        <span class="data-info">Fri, 22 March</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);">
                                        <img src="../assets/img/shapes/consult.png" alt="" />
                                    </a> 
                                    <a href="javascript:void(0);">
                                        <span class="available-info">Consulting</span>
                                        <span class="data-info">500+ Patients</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);">
                                        <img src="../assets/img/shapes/exper.png" alt="" />
                                    </a> 
                                    <a href="javascript:void(0);">
                                        <span class="available-info">EXPERIENCE</span>
                                        <span class="data-info">25+ Years</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="row row-sm align-items-center p-3">
                            <div class="col-6">
                                <NuxtLink to="/doctor-profile" class="amt-txt" tabindex="0">$50 - $100</NuxtLink>
                            </div>
                            <div class="col-6">
                                <NuxtLink to="/booking" class="btn book-btn" tabindex="0">Book Now</NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 aos" data-aos="fade-up">
                <div class="book-best-doctors">
                    <div class="book-header">
                        <NuxtLink to="/doctor-profile"><img src="../assets/img/doctors/doctor-02.jpg" alt="" class="img-fluid"></NuxtLink>
                        <div class="img-overlay">
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    <div class="doctors-body">
                        <div class="inner-section">
                            <span class="float-start">PSICOLOGIST</span>
                            <div class="rating text-end">
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star"></i>
                                <span class="d-inline-block average-ratings">3.5</span>
                            </div>
                            <NuxtLink to="/doctor-profile"><h4>Dr. Darren Elder</h4></NuxtLink>
                            <p>MBBS, MD - General Medicine, DNB - Cardiology</p>
                        </div>
                        <div class="row row-sm loc-details">
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);">
                                        <img src="../assets/img/shapes/map-plus.png" alt="" />
                                    </a> 
                                    <a href="javascript:void(0);">
                                        <span class="available-info">Location</span>
                                        <span class="data-info">Newyork, USA</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);">
                                        <img src="../assets/img/shapes/alarm.png" alt="" />
                                    </a> 
                                    <a href="javascript:void(0);">
                                        <span class="available-info">Available on</span>
                                        <span class="data-info">Fri, 22 March</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);">
                                        <img src="../assets/img/shapes/consult.png" alt="" />
                                    </a> 
                                    <a href="javascript:void(0);">
                                        <span class="available-info">Consulting</span>
                                        <span class="data-info">500+ Patients</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);">
                                        <img src="../assets/img/shapes/exper.png" alt="" />
                                    </a> 
                                    <a href="javascript:void(0);">
                                        <span class="available-info">EXPERIENCE</span>
                                        <span class="data-info">25+ Years</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="row row-sm align-items-center p-3">
                            <div class="col-6">
                                <NuxtLink to="/doctor-profile" class="amt-txt" tabindex="0">$50 - $100</NuxtLink>
                            </div>
                            <div class="col-6">
                                <NuxtLink to="/booking" class="btn book-btn" tabindex="0">Book Now</NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 aos" data-aos="fade-up">
                <div class="book-best-doctors">
                    <div class="book-header">
                        <NuxtLink to="/doctor-profile"><img src="../assets/img/doctors/doctor-03.jpg" alt="" class="img-fluid"></NuxtLink>
                        <div class="img-overlay">
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    <div class="doctors-body">
                        <div class="inner-section">
                            <span class="float-start">PSICOLOGIST</span>
                            <div class="rating text-end">
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star"></i>
                                <span class="d-inline-block average-ratings">3.5</span>
                            </div>
                            <NuxtLink to="/doctor-profile"><h4>Dr. Deborah Angel</h4></NuxtLink>
                            <p>MBBS, MD - General Medicine, DNB - Cardiology</p>
                        </div>
                        <div class="row row-sm loc-details">
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);">
                                        <img src="../assets/img/shapes/map-plus.png" alt="" />
                                    </a> 
                                    <a href="javascript:void(0);">
                                        <span class="available-info">Location</span>
                                        <span class="data-info">Newyork, USA</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);">
                                        <img src="../assets/img/shapes/alarm.png" alt="" />
                                    </a> 
                                    <a href="javascript:void(0);">
                                        <span class="available-info">Available on</span>
                                        <span class="data-info">Fri, 22 March</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);">
                                        <img src="../assets/img/shapes/consult.png" alt="" />
                                    </a> 
                                    <a href="javascript:void(0);">
                                        <span class="available-info">Consulting</span>
                                        <span class="data-info">500+ Patients</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);">
                                        <img src="../assets/img/shapes/exper.png" alt="" />
                                    </a> 
                                    <a href="javascript:void(0);">
                                        <span class="available-info">EXPERIENCE</span>
                                        <span class="data-info">25+ Years</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="row row-sm align-items-center p-3">
                            <div class="col-6">
                                <NuxtLink to="/doctor-profile" class="amt-txt" tabindex="0">$50 - $100</NuxtLink>
                            </div>
                            <div class="col-6">
                                <NuxtLink to="/booking" class="btn book-btn" tabindex="0">Book Now</NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 aos" data-aos="fade-up">
                <div class="book-best-doctors">
                    <div class="book-header">
                        <NuxtLink to="/doctor-profile"><img src="../assets/img/doctors/doctor-04.jpg" alt="" class="img-fluid"></NuxtLink>
                        <div class="img-overlay">
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    <div class="doctors-body">
                        <div class="inner-section">
                            <span class="float-start">PSICOLOGIST</span>
                            <div class="rating text-end">
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star"></i>
                                <span class="d-inline-block average-ratings">3.5</span>
                            </div>
                            <NuxtLink to="/doctor-profile"><h4>Dr. Sofia Brient</h4></NuxtLink>
                            <p>MBBS, MD - General Medicine, DNB - Cardiology</p>
                        </div>
                        <div class="row row-sm loc-details">
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);">
                                        <img src="../assets/img/shapes/map-plus.png" alt="" />
                                    </a> 
                                    <a href="javascript:void(0);">
                                        <span class="available-info">Location</span>
                                        <span class="data-info">Newyork, USA</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);">
                                        <img src="../assets/img/shapes/alarm.png" alt="" />
                                    </a> 
                                    <a href="javascript:void(0);">
                                        <span class="available-info">Available on</span>
                                        <span class="data-info">Fri, 22 March</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);">
                                        <img src="../assets/img/shapes/consult.png" alt="" />
                                    </a> 
                                    <a href="javascript:void(0);">
                                        <span class="available-info">Consulting</span>
                                        <span class="data-info">500+ Patients</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);">
                                        <img src="../assets/img/shapes/exper.png" alt="" />
                                    </a> 
                                    <a href="javascript:void(0);">
                                        <span class="available-info">EXPERIENCE</span>
                                        <span class="data-info">25+ Years</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="row row-sm align-items-center p-3">
                            <div class="col-6">
                                <NuxtLink to="/doctor-profile" class="amt-txt" tabindex="0">$50 - $100</NuxtLink>
                            </div>
                            <div class="col-6">
                                <NuxtLink to="/booking" class="btn book-btn" tabindex="0">Book Now</NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="view-all-more text-center aos" data-aos="fade-up">	
            <NuxtLink to="/doctor-profile" class="btn btn-primary">View More</NuxtLink>
        </div>
    </div>
</section>
<!-- /Book Doctors-->

<!-- Blogs -->
<section class="latest-blog">
    <div class="container">
        <div class="section-header-three text-center aos" data-aos="fade-up">
            <h2>Our Latest Blogs</h2>
            <p class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="row">
            <div class="col-md-6 col-lg-4 aos" data-aos="fade-up">
                <div class="blog-wrap">
                    <div class="image-holder">
                        <NuxtLink to="/blog-details">
                            <img class="img-fluid" src="../assets/img/shapes/blog-img01.jpg" alt="Post Image">
                        </NuxtLink>
                    </div>
                    <div class="blog-wrap-body">
                        <h3><NuxtLink to="/blog-details">In this hospital there are special surgeons</NuxtLink></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et..</p>
                        <div class="blog-footer">
                            <div class="row row-sm align-items-center">
                                <div class="col-6 text-start">
                                    <NuxtLink to="/blog-details" class="read-txt" tabindex="0">Read More <i class="fas fa-long-arrow-alt-right"></i></NuxtLink>
                                </div>
                                <div class="col-6 text-end">
                                    <a href="javascript:void(0);" class="cal-txt" tabindex="0"><i class="far fa-calendar-alt"></i> Jan 03, 2020</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 aos" data-aos="fade-up">
                <div class="blog-wrap">
                    <div class="image-holder">
                        <NuxtLink to="/blog-details">
                            <img class="img-fluid" src="../assets/img/shapes/blog-img02.jpg" alt="Post Image">
                        </NuxtLink>
                    </div>
                    <div class="blog-wrap-body">
                        <h3><NuxtLink to="/blog-details">World AIDS Day, designated on 1 December</NuxtLink></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et..</p>
                        <div class="blog-footer">
                            <div class="row row-sm align-items-center">
                                <div class="col-6 text-start">
                                    <NuxtLink to="/blog-details" class="read-txt" tabindex="0">Read More <i class="fas fa-long-arrow-alt-right"></i></NuxtLink>
                                </div>
                                <div class="col-6 text-end">
                                    <a href="javascript:void(0);" class="cal-txt" tabindex="0"><i class="far fa-calendar-alt"></i> Jan 03, 2020</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 aos" data-aos="fade-up">
                <div class="blog-wrap">
                    <div class="image-holder">
                        <NuxtLink to="/blog-details">
                            <img class="img-fluid" src="../assets/img/shapes/blog-img03.jpg" alt="Post Image">
                        </NuxtLink>
                    </div>
                    <div class="blog-wrap-body">
                        <h3><NuxtLink to="/blog-details">More then 80 clinical trials launch to test coronavirus</NuxtLink></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et..</p>
                        <div class="blog-footer">
                            <div class="row row-sm align-items-center">
                                <div class="col-6 text-start">
                                    <NuxtLink to="/blog-details" class="read-txt" tabindex="0">Read More <i class="fas fa-long-arrow-alt-right"></i></NuxtLink>
                                </div>
                                <div class="col-6 text-end">
                                    <a href="javascript:void(0);" class="cal-txt" tabindex="0"><i class="far fa-calendar-alt"></i> Jan 03, 2020</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /Blogs -->
  <Nuxt />
 </div>
</template>

<script>
import AOS from 'aos';
export default {
	layout: 'index8',
	mounted() {
		if($('.main-wrapper .aos').length > 0) {
	    AOS.init({
		  duration: 1200,
		  once: true,
		});
	}
	if($('.header-trans.custom').length > 0) {
		$(document).ready(function(){
		  $(window).scroll(function(){
			var scroll = $(window).scrollTop();
			  if (scroll > 95) {
				$(".header-trans").css("background" , "#2b6ccb");
			  }

			  else{
				  $(".header-trans").css("background" , "transparent");  	
			  }
		  })
		})
	}
    if($('.owl-carousel.clinics').length > 0) {
		$('.owl-carousel.clinics').owlCarousel({
			loop:true,
			margin:15,
			dots: false,
			nav:true,
			navContainer: '.slide-nav-1',
			navText: [ '<i class="fas fa-chevron-left custom-arrow"></i>', '<i class="fas fa-chevron-right custom-arrow"></i>' ], 
			responsive:{
				0:{
					items:1
				},
				500:{
					items:1
				},
				768:{
					items:3
				},
				1000:{
					items:4
				},
				1300:{
					items:6
				}
			}
		})	
	}
    if($('.owl-carousel.our-doctors').length > 0) {
		$('.owl-carousel.our-doctors').owlCarousel({
			loop:true,
			margin:15,
			dots: false,
			nav:true,
			navContainer: '.slide-nav-2',
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
				1000:{
					items:3
				},
				1300:{
					items:4
				}
			}
		})	
	}
    if($('.owl-carousel.clinic-feature').length > 0) {
		$('.owl-carousel.clinic-feature').owlCarousel({
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
					items:3
				},
				1000:{
					items:4
				},
				1300:{
					items:5
				}
			}
		})	
	}
    if($('.owl-carousel.blogs').length > 0) {
		$('.owl-carousel.blogs').owlCarousel({
			loop:true,
			margin:15,
			dots: false,
			nav:true,
			navContainer: '.slide-nav-4',
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
				1000:{
					items:3
				},
				1300:{
					items:4
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