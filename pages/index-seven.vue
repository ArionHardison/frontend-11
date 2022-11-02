<template>
 <div class="main-wrapper">
 <!-- Home Banner -->
 <section class="doctor-search-section">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="doctor-search">
                    <div class="banner-header aos" data-aos="fade-up">
                        <h2>Search Doctor, <br> Make an Appointment</h2>
                    </div>
                    <div class="doctor-form aos" data-aos="fade-up">
                        <form action="#" class="doctor-search-form">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label>Location</label>
                                        <div class="form-custom">
                                            <input type="text" class="form-control" value="">
                                            <i class="far fa-compass"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Gender</label>
                                        <div class="form-custom">
                                            <input type="text" class="form-control" value="">
                                            <i class="far fa-smile"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Department</label>
                                        <div class="form-custom">
                                            <input type="text" class="form-control" value="">
                                            <i class="fas fa-user-check"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <NuxtLink to="/search" class="btn banner-btn mt-3">MAKE APPOINTMENT</NuxtLink>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <img src="../assets/img/doctor-banner.png" class="img-fluid dr-img" alt="" >
            </div>
        </div>
    </div>
</section>
<!-- /Home Banner -->

<!-- Clinic Section -->
<section class="clinics-section">
    <div class="shapes">
        <img src="../assets/img/shapes/shape-1.png" alt="" class="img-fluid shape-1">
        <img src="../assets/img/shapes/shape-2.png" alt="" class="img-fluid shape-2">
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="section-heading aos" data-aos="fade-up">
                    <h2>Clinic & Specialities</h2>
                    <p>Access to expert physicians and surgeons, advanced technologies and top-quality surgery facilities right here.</p>
                </div>
            </div>
            <div class="col-md-6 text-end aos" data-aos="fade-up">
                <div class="owl-nav slide-nav-1 text-end nav-control"></div>
            </div>
        </div>
        <div class="owl-carousel clinics owl-theme aos" data-aos="fade-up">
            <div class="item">
                <div class="clinic-item">
                    <div class="clinics-card">
                        <div class="clinics-img">
                            <img src="../assets/img/clinic/clinic-1.jpg" alt="" class="img-fluid">
                        </div>
                        <div class="clinics-info">
                            <img src="../assets/img/category/1.png" alt="" class="img-fluid">
                            <a href="javascript:void(0);"><span>UROLOGY</span></a>
                        </div>
                    </div>
                    <div class="clinics-icon">
                        <a href="javascript:void(0);"><i class="fas fa-long-arrow-alt-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="clinic-item">
                    <div class="clinics-card">
                        <div class="clinics-img">
                            <img src="../assets/img/clinic/clinic-2.jpg" alt="" class="img-fluid">
                        </div>
                        <div class="clinics-info">
                            <img src="../assets/img/category/2.png" alt="" class="img-fluid">
                            <a href="javascript:void(0);"><span>Orthopedic</span></a>
                        </div>
                    </div>
                    <div class="clinics-icon">
                        <a href="javascript:void(0);"><i class="fas fa-long-arrow-alt-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="clinic-item">
                    <div class="clinics-card">
                        <div class="clinics-img">
                            <img src="../assets/img/clinic/clinic-4.jpg" alt="" class="img-fluid">
                        </div>
                        <div class="clinics-info">
                            <img src="../assets/img/category/4.png" alt="" class="img-fluid">
                            <a href="javascript:void(0);"><span>Cardiologist</span></a>
                        </div>
                    </div>
                    <div class="clinics-icon">
                        <a href="javascript:void(0);"><i class="fas fa-long-arrow-alt-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="clinic-item">
                    <div class="clinics-card">
                        <div class="clinics-img">
                            <img src="../assets/img/clinic/clinic-3.jpg" alt="" class="img-fluid">
                        </div>
                        <div class="clinics-info">
                            <img src="../assets/img/category/5.png" alt="" class="img-fluid">
                            <a href="javascript:void(0);"><span>Dentist</span></a>
                        </div>
                    </div>
                    <div class="clinics-icon">
                        <a href="javascript:void(0);"><i class="fas fa-long-arrow-alt-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="clinic-item">
                    <div class="clinics-card">
                        <div class="clinics-img">
                            <img src="../assets/img/clinic/clinic-5.jpg" alt="" class="img-fluid">
                        </div>
                        <div class="clinics-info">
                            <img src="../assets/img/category/3.png" alt="" class="img-fluid">
                            <a href="javascript:void(0);"><span>Neurology</span></a>
                        </div>
                    </div>
                    <div class="clinics-icon">
                        <a href="javascript:void(0);"><i class="fas fa-long-arrow-alt-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="clinic-item">
                    <div class="clinics-card">
                        <div class="clinics-img">
                            <img src="../assets/img/clinic/clinic-1.jpg" alt="" class="img-fluid">
                        </div>
                        <div class="clinics-info">
                            <img src="../assets/img/category/4.png" alt="" class="img-fluid">
                            <a href="javascript:void(0);"><span>Cardiologist</span></a>
                        </div>
                    </div>
                    <div class="clinics-icon">
                        <a href="javascript:void(0);"><i class="fas fa-long-arrow-alt-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /Clinic Section -->

<!-- Specialities Section -->
<section class="specialities-section">
    <div class="shapes">
        <img src="../assets/img/shapes/shape-3.png" alt="" class="img-fluid shape-3">
        <img src="../assets/img/shapes/shape-4.png" alt="" class="img-fluid shape-4">
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="section-heading bg-area aos" data-aos="fade-up">
                    <h2>Browse by Specialities</h2>
                    <p>Find experienced doctors across all specialties</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-3 col-md-6 aos" data-aos="fade-up">
                <div class="specialist-card d-flex">
                    <div class="specialist-img">
                        <img src="../assets/img/category/1.png" alt="" class="img-fluid">
                    </div>
                    <div class="specialist-info">
                        <a href="javascript:void(0);"><h4>Urology</h4></a>
                        <p>21 Doctors</p>
                    </div>
                    <div class="specialist-nav ms-auto">
                        <a href="javascript:void(0);"><i class="fas fa-long-arrow-alt-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 aos" data-aos="fade-up">
                <div class="specialist-card d-flex">
                    <div class="specialist-img">
                        <img src="../assets/img/category/3.png" alt="" class="img-fluid">
                    </div>
                    <div class="specialist-info">
                        <a href="javascript:void(0);"><h4>Neurology</h4></a>
                        <p>21 Doctors</p>
                    </div>
                    <div class="specialist-nav ms-auto">
                        <a href="javascript:void(0);"><i class="fas fa-long-arrow-alt-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 aos" data-aos="fade-up">
                <div class="specialist-card d-flex">
                    <div class="specialist-img">
                        <img src="../assets/img/category/2.png" alt="" class="img-fluid">
                    </div>
                    <div class="specialist-info">
                        <a href="javascript:void(0);"><h4>Orthopedic</h4></a>
                        <p>21 Doctors</p>
                    </div>
                    <div class="specialist-nav ms-auto">
                        <a href="javascript:void(0);"><i class="fas fa-long-arrow-alt-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 aos" data-aos="fade-up">
                <div class="specialist-card d-flex">
                    <div class="specialist-img">
                        <img src="../assets/img/category/4.png" alt="" class="img-fluid">
                    </div>
                    <div class="specialist-info">
                        <a href="javascript:void(0);"><h4>Cardiologist</h4></a>
                        <p>21 Doctors</p>
                    </div>
                    <div class="specialist-nav ms-auto">
                        <a href="javascript:void(0);"><i class="fas fa-long-arrow-alt-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 aos" data-aos="fade-up">
                <div class="specialist-card d-flex">
                    <div class="specialist-img">
                        <img src="../assets/img/category/1.png" alt="" class="img-fluid">
                    </div>
                    <div class="specialist-info">
                        <a href="javascript:void(0);"><h4>Urology</h4></a>
                        <p>21 Doctors</p>
                    </div>
                    <div class="specialist-nav ms-auto">
                        <a href="javascript:void(0);"><i class="fas fa-long-arrow-alt-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 aos" data-aos="fade-up">
                <div class="specialist-card d-flex">
                    <div class="specialist-img">
                        <img src="../assets/img/category/3.png" alt="" class="img-fluid">
                    </div>
                    <div class="specialist-info">
                        <a href="javascript:void(0);"><h4>Neurology</h4></a>
                        <p>21 Doctors</p>
                    </div>
                    <div class="specialist-nav ms-auto">
                        <a href="javascript:void(0);"><i class="fas fa-long-arrow-alt-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 aos" data-aos="fade-up">
                <div class="specialist-card d-flex">
                    <div class="specialist-img">
                        <img src="../assets/img/category/2.png" alt="" class="img-fluid">
                    </div>
                    <div class="specialist-info">
                        <a href="javascript:void(0);"><h4>Orthopedic</h4></a>
                        <p>21 Doctors</p>
                    </div>
                    <div class="specialist-nav ms-auto">
                        <a href="javascript:void(0);"><i class="fas fa-long-arrow-alt-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 aos" data-aos="fade-up">
                <div class="specialist-card d-flex">
                    <div class="specialist-img">
                        <img src="../assets/img/category/4.png" alt="" class="img-fluid">
                    </div>
                    <div class="specialist-info">
                        <a href="javascript:void(0);"><h4>Cardiologist</h4></a>
                        <p>21 Doctors</p>
                    </div>
                    <div class="specialist-nav ms-auto">
                        <a href="javascript:void(0);"><i class="fas fa-long-arrow-alt-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /Specialities Section -->

<!-- Best Doctor Section -->
<section class="our-doctors-section">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="section-heading aos" data-aos="fade-up">
                    <h2>Clinic & Specialities</h2>
                    <p>Access to expert physicians and surgeons, advanced technologies and top-quality surgery facilities right here.</p>
                </div>
            </div>
            <div class="col-md-6 text-end aos" data-aos="fade-up">
                <div class="owl-nav slide-nav-2 text-end nav-control"></div>
            </div>
        </div>
        <div class="owl-carousel our-doctors owl-theme aos" data-aos="fade-up">
            <div class="item">
                <div class="our-doctors-card">
                    <div class="doctors-header">
                        <a href="javascript:void(0);"><img src="../assets/img/doctors/doctor-01.jpg" alt="" class="img-fluid"></a>
                        <div class="img-overlay">
                            <span>$20 - $50</span>
                        </div>
                    </div>
                    <div class="doctors-body">
                        <div class="rating">
                            <i class="fas fa-star filled"></i>
                            <i class="fas fa-star filled"></i>
                            <i class="fas fa-star filled"></i>
                            <i class="fas fa-star filled"></i>
                            <i class="fas fa-star filled"></i>
                            <span class="d-inline-block average-ratings">3.5</span>
                        </div>
                        <NuxtLink to="/doctor-profile"><h4>Dr. Ruby Perrin</h4></NuxtLink>
                        <p>BDS, MDS - Oral & Maxillofacial Surgery</p>
                        <div class="location d-flex">
                            <p><i class="fas fa-map-marker-alt"></i> Georgia, USA</p>
                            <p class="ms-auto"><i class="fas fa-user-md"></i> 450 Consultations</p>
                        </div>
                        <div class="row row-sm">
                            <div class="col-6">
                                <NuxtLink to="/doctor-profile" class="btn view-btn" tabindex="0">View Profile</NuxtLink>
                            </div>
                            <div class="col-6">
                                <NuxtLink to="/booking" class="btn book-btn" tabindex="0">Book Now</NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="our-doctors-card">
                    <div class="doctors-header">
                        <a href="javascript:void(0);"><img src="../assets/img/doctors/doctor-04.jpg" alt="" class="img-fluid"></a>
                        <div class="img-overlay">
                            <span>$20 - $50</span>
                        </div>
                    </div>
                    <div class="doctors-body">
                        <div class="rating">
                            <i class="fas fa-star filled"></i>
                            <i class="fas fa-star filled"></i>
                            <i class="fas fa-star filled"></i>
                            <i class="fas fa-star filled"></i>
                            <i class="fas fa-star filled"></i>
                            <span class="d-inline-block average-ratings">3.5</span>
                        </div>
                        <NuxtLink to="/doctor-profile"><h4>Dr. Deborah Angel</h4></NuxtLink>
                        <p>MBBS, MD - General Medicine, DNB</p>
                        <div class="location d-flex">
                            <p><i class="fas fa-map-marker-alt"></i> Georgia, USA</p>
                            <p class="ms-auto"><i class="fas fa-user-md"></i> 450 Consultations</p>
                        </div>
                        <div class="row row-sm">
                            <div class="col-6">
                                <NuxtLink to="/doctor-profile" class="btn view-btn" tabindex="0">View Profile</NuxtLink>
                            </div>
                            <div class="col-6">
                                <NuxtLink to="/booking" class="btn book-btn" tabindex="0">Book Now</NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="our-doctors-card">
                    <div class="doctors-header">
                        <a href="javascript:void(0);"><img src="../assets/img/doctors/doctor-03.jpg" alt="" class="img-fluid"></a>
                        <div class="img-overlay">
                            <span>$20 - $50</span>
                        </div>
                    </div>
                    <div class="doctors-body">
                        <div class="rating">
                            <i class="fas fa-star filled"></i>
                            <i class="fas fa-star filled"></i>
                            <i class="fas fa-star filled"></i>
                            <i class="fas fa-star filled"></i>
                            <i class="fas fa-star filled"></i>
                            <span class="d-inline-block average-ratings">3.5</span>
                        </div>
                        <NuxtLink to="/doctor-profile"><h4>Dr. Sofia Brient</h4></NuxtLink>
                        <p>MBBS, MS - General Surgery, MCh</p>
                        <div class="location d-flex">
                            <p><i class="fas fa-map-marker-alt"></i> Georgia, USA</p>
                            <p class="ms-auto"><i class="fas fa-user-md"></i> 450 Consultations</p>
                        </div>
                        <div class="row row-sm">
                            <div class="col-6">
                                <NuxtLink to="/doctor-profile" class="btn view-btn" tabindex="0">View Profile</NuxtLink>
                            </div>
                            <div class="col-6">
                                <NuxtLink to="/booking" class="btn book-btn" tabindex="0">Book Now</NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="our-doctors-card">
                    <div class="doctors-header">
                        <a href="javascript:void(0);"><img src="../assets/img/doctors/doctor-02.jpg" alt="" class="img-fluid"></a>
                        <div class="img-overlay">
                            <span>$20 - $50</span>
                        </div>
                    </div>
                    <div class="doctors-body">
                        <div class="rating">
                            <i class="fas fa-star filled"></i>
                            <i class="fas fa-star filled"></i>
                            <i class="fas fa-star filled"></i>
                            <i class="fas fa-star filled"></i>
                            <i class="fas fa-star filled"></i>
                            <span class="d-inline-block average-ratings">3.5</span>
                        </div>
                        <NuxtLink to="/doctor-profile"><h4>Dr. Darren Elder</h4></NuxtLink>
                        <p>BDS, MDS - Oral & Maxillofacial Surgery</p>
                        <div class="location d-flex">
                            <p><i class="fas fa-map-marker-alt"></i> Georgia, USA</p>
                            <p class="ms-auto"><i class="fas fa-user-md"></i> 450 Consultations</p>
                        </div>
                        <div class="row row-sm">
                            <div class="col-6">
                                <NuxtLink to="/doctor-profile" class="btn view-btn" tabindex="0">View Profile</NuxtLink>
                            </div>
                            <div class="col-6">
                                <NuxtLink to="/booking" class="btn book-btn" tabindex="0">Book Now</NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /Best Doctor Section -->

<!-- Clinic Features Section -->
<section class="clinic-features-section">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="section-heading aos" data-aos="fade-up">
                    <h2>Availabe Features in Our Clinic</h2>
                    <p>Meet our Experts & Book Online</p>
                </div>
            </div>
            <div class="col-md-6 text-end aos" data-aos="fade-up">
                <div class="owl-nav slide-nav-3 text-end nav-control"></div>
            </div>
        </div>
        <div class="owl-carousel clinic-feature owl-theme aos" data-aos="fade-up">
            <div class="item">
                <div class="clinic-features">
                    <img src="../assets/img/clinic/clinic-6.jpg" alt="" class="img-fluid">
                </div>
                <div class="clinic-feature-overlay">
                    <a href="javascript:void(0);" class="img-overlay">Operation</a>
                </div>
            </div>
            <div class="item">
                <div class="clinic-features">
                    <img src="../assets/img/clinic/clinic-7.jpg" alt="" class="img-fluid">
                </div>
                <div class="clinic-feature-overlay">
                    <a href="javascript:void(0);" class="img-overlay">Medical</a>
                </div>
            </div>
            <div class="item">
                <div class="clinic-features">
                    <img src="../assets/img/clinic/clinic-8.jpg" alt="" class="img-fluid">
                </div>
                <div class="clinic-feature-overlay">
                    <a href="javascript:void(0);" class="img-overlay">Patient Ward</a>
                </div>
            </div>
            <div class="item">
                <div class="clinic-features">
                    <img src="../assets/img/clinic/clinic-9.jpg" alt="" class="img-fluid">
                </div>
                <div class="clinic-feature-overlay">
                    <a href="javascript:void(0);" class="img-overlay">TEST ROOM</a>
                </div>
            </div>
            <div class="item">
                <div class="clinic-features">
                    <img src="../assets/img/clinic/clinic-10.jpg" alt="" class="img-fluid">
                </div>
                <div class="clinic-feature-overlay">
                    <a href="javascript:void(0);" class="img-overlay">ICU</a>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /Clinic Features Section -->

<!-- Blog Section -->
<section class="our-blog-section">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="section-heading aos" data-aos="fade-up">
                    <h2>Blogs and News</h2>
                    <p>Read Professional Articles and Latest Articles</p>
                </div>
            </div>
            <div class="col-md-6 text-end aos" data-aos="fade-up">
                <div class="owl-nav slide-nav-4 text-end nav-control"></div>
            </div>
        </div>
        <div class="owl-carousel blogs owl-theme aos" data-aos="fade-up">
            <div class="item">
                <div class="our-blogs">
                    <div class="blogs-img">
                        <NuxtLink to="/blog-details"><img src="../assets/img/blog-1.jpg" alt="" class="img-fluid"></NuxtLink>
                        <div class="blogs-overlay d-flex">
                            <img src="../assets/img/doctors/doctor-thumb-01.jpg" alt="" class="img-fluid">
                                <span class="blogs-writter">Dr. Ruby Perrin</span>
                        </div>
                    </div>
                    <div class="blogs-info">
                        <span>Urology</span>
                        <NuxtLink to="/blog-details"><h4>Doccure – Making your clinic painless visit?</h4></NuxtLink>
                        <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                        <span class="blogs-time"><i class="far fa-clock"></i> 3 Dec 2021</span>
                    </div>
                    <div class="blogs-nav">
                        <NuxtLink to="/blog-details" class="blogs-btn">Read More</NuxtLink>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="our-blogs">
                    <div class="blogs-img">
                        <NuxtLink to="/blog-details"><img src="../assets/img/blog-2.jpg" alt="" class="img-fluid"></NuxtLink>
                        <div class="blogs-overlay d-flex">
                            <img src="../assets/img/doctors/doctor-thumb-01.jpg" alt="" class="img-fluid">
                                <span class="blogs-writter">Dr. Ruby Perrin</span>
                        </div>
                    </div>
                    <div class="blogs-info">
                        <span>Neurology</span>
                        <NuxtLink to="/blog-details"><h4>What are the benefits of Online Doctor Booking?</h4></NuxtLink>
                        <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                        <span class="blogs-time"><i class="far fa-clock"></i> 3 Dec 2021</span>
                    </div>
                    <div class="blogs-nav">
                        <NuxtLink to="/blog-details" class="blogs-btn">Read More</NuxtLink>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="our-blogs">
                    <div class="blogs-img">
                        <NuxtLink to="/blog-details"><img src="../assets/img/blog-3.jpg" alt="" class="img-fluid"></NuxtLink>
                        <div class="blogs-overlay d-flex">
                            <img src="../assets/img/doctors/doctor-thumb-01.jpg" alt="" class="img-fluid">
                                <span class="blogs-writter">Dr. Ruby Perrin</span>
                        </div>
                    </div>
                    <div class="blogs-info">
                        <span>Orthopedic</span>
                        <NuxtLink to="/blog-details"><h4>Benefits of consulting with an Online Doctor</h4></NuxtLink>
                        <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                        <span class="blogs-time"><i class="far fa-clock"></i> 3 Dec 2021</span>
                    </div>
                    <div class="blogs-nav">
                        <NuxtLink to="/blog-details" class="blogs-btn">Read More</NuxtLink>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="our-blogs">
                    <div class="blogs-img">
                        <NuxtLink to="/blog-details"><img src="../assets/img/blog-4.jpg" alt="" class="img-fluid"></NuxtLink>
                        <div class="blogs-overlay d-flex">
                            <img src="../assets/img/doctors/doctor-thumb-01.jpg" alt="" class="img-fluid">
                                <span class="blogs-writter">Dr. Ruby Perrin</span>
                        </div>
                    </div>
                    <div class="blogs-info">
                        <span>Cardiologist</span>
                        <NuxtLink to="/blog-details"><h4>5 Great reasons to use an Online Doctor</h4></NuxtLink>
                        <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                        <span class="blogs-time"><i class="far fa-clock"></i> 3 Dec 2021</span>
                    </div>
                    <div class="blogs-nav">
                        <NuxtLink to="/blog-details" class="blogs-btn">Read More</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /Blog Section -->
  <Nuxt />
 </div>
</template>

<script>
import AOS from 'aos';
export default {
	layout: 'index7',
	mounted() {
		if($('.main-wrapper .aos').length > 0) {
	    AOS.init({
		  duration: 1200,
		  once: true,
		});
	}
	if($('.header-trans').length > 0) {
		$(document).ready(function(){
		  $(window).scroll(function(){
			var scroll = $(window).scrollTop();
			  if (scroll > 95) {
				$(".header-trans").css("background" , "#FFFFFF");
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