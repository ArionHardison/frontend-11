<template>
 <div class="main-wrapper">
  <!-- Appoinment -->
  <section class="appoinment-section" id="appointments">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="appoinment-wrapper">
                    <div class="appoinment-box aos" data-aos="fade-up">
                        <form>

                            
                            <div class="row">
                                <div class="col-lg-6 col-md-12">
                                    <div class="form-group appoinment-location">
                                        <search-icon size="1.4x" class="custom-class"></search-icon> <input type="text" class="form-control" placeholder="Search Doctors, Clinics, Etc ...">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="appoinment-right">
                                        <div class="form-group appoinment-location">
                                            <map-pin-icon size="1.4x" class="custom-class"></map-pin-icon> <input type="text" class="form-control" placeholder="Search location">
                                        </div>
                                        <div class="form-group">
                                            <NuxtLink to="/search">
                                            <button type="submit" class="btn appoinment-btn">
                                                <search-icon size="1.4x" class="custom-class"></search-icon>
                                            </button>
                                        </NuxtLink>
                                            <NuxtLink to="/search">
                                            <button type="submit" class="btn appoinment-search-btn">
                                                <sliders-icon size="1.4x" class="custom-class me-2"></sliders-icon> Advanced Search
                                            </button>
                                        </NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="appointment-bg">
        <div class="custom-contain">
            <div class="row">
                <div class="col-xl-5 col-lg-4 col-md-12 aos" data-aos="fade-up">
                    <div class="appointment-left">
                        <img src="../assets/img/appoinment-img.png" class="img-fluid" alt="">
                    </div>
                </div>
                <div class="col-xl-7 col-lg-8 col-md-12">
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
                            <div class="appointment-grid w-100">
                                <div class="appointment-icon icon-primary">
                                    <i class="fas fa-bed"></i>
                                </div>
                                <div class="appointment-info">
                                    <NuxtLink to="/search" class="appointment-link">Visit a Doctor</NuxtLink>
                                    <p>We hire the best specialists to deliver top-notch diagnostic services for you.</p>
                                    <NuxtLink to="/search" class="btn appointment-read-btn">Read More <i class="fas fa-arrow-right ms-2"></i></NuxtLink>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
                            <div class="appointment-grid w-100">
                                <div class="appointment-icon icon-green">
                                    <i class="fas fa-tablets"></i>
                                </div>
                                <div class="appointment-info">
                                    <NuxtLink to="/pharmacy-search" class="appointment-link">Find a Pharmacy</NuxtLink>
                                    <p>We provide the a wide range of medical services, so every person could have the opportunity.</p>
                                    <NuxtLink to="/pharmacy-search" class="btn appointment-read-btn">Read More <i class="fas fa-arrow-right ms-2"></i></NuxtLink>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
                            <div class="appointment-grid w-100">
                                <div class="appointment-icon icon-red">
                                    <i class="fas fa-vial"></i>
                                </div>
                                <div class="appointment-info">
                                    <a href="javascript:void(0);" class="appointment-link">Find a Lab</a>
                                    <p>We use the first-class medical equipment for timely diagnostics of various diseases.</p>
                                    <a href="javascript:void(0);" class="btn appointment-read-btn">Coming Soon <i class="fas fa-arrow-right ms-2"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-4 d-flex aos" data-aos="fade-up">
                            <div class="appointment-schedule w-100">
                                <h2 class="schedule-title">Schedule</h2>
                                <ul>
                                    <li><span>Monday – Friday</span> 8.00 – 13.00</li>
                                    <li><span>Saturday</span> 8.00 – 15.00</li>
                                    <li><span>Sunday</span> 8.00 – 18.00</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-8 col-md-8 d-flex aos" data-aos="fade-up">
                            <div class="appointment-request w-100">
                                <h2 class="schedule-title text-white">REQUEST AN APPOINTMENT</h2>
                                <div class="d-flex align-items-center">
                                    <div class="appointment-img-holder">
                                        <img src="../assets/img/phone-call.png" alt="">
                                    </div>
                                    <div class="appointment-info-holder">
                                        <p>Call us on</p>
                                        <h2>+1 (208) 567 0707</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /Appoinment -->

<!-- Service Section -->
<section class="service-section">
    <div class="container aos" data-aos="fade-up">
        <div class="section-header text-center aos" data-aos="fade-up">
            <h2 class="color-primary">High Quality Service for you</h2>
            <p class="sub-title color-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="row">
            <div class="col-lg-3 col-md-6 aos" data-aos="fade-up">
                <div class="service-grid">
                    <div class="effect-oscar">
                        <img src="../assets/img/services/services-01.jpg" class="img-fluid services-img" alt="">
                        <div class="services-caption">
                            <div class="services-inner">
                                <div class="service-grid-icon">
                                    <img src="../assets/img/icons/icon6.svg" class="img-fluid" alt="">
                                </div>
                                <p>Orthopedic</p>
                                <NuxtLink to="/doctor-profile" class="service-link">
                                    <i class="fas fa-arrow-right"></i>
                                </NuxtLink>
                            </div>
                        </div>			
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 aos" data-aos="fade-up">
                <div class="service-grid">
                    <div class="effect-oscar">
                        <img src="../assets/img/services/services-02.jpg" class="img-fluid services-img" alt="">
                        <div class="services-caption">
                            <div class="services-inner">
                                <div class="service-grid-icon">
                                    <img src="../assets/img/icons/icon3.svg" class="img-fluid" alt="">
                                </div>
                                <p>Cardiologist</p>
                                <NuxtLink to="/doctor-profile" class="service-link">
                                    <i class="fas fa-arrow-right"></i>
                                </NuxtLink>
                            </div>
                        </div>			
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 aos" data-aos="fade-up">
                <div class="service-grid">
                    <div class="effect-oscar">
                        <img src="../assets/img/services/services-03.jpg" class="img-fluid services-img" alt="">
                        <div class="services-caption">
                            <div class="services-inner">
                                <div class="service-grid-icon">
                                    <img src="../assets/img/icons/icon4.svg" class="img-fluid" alt="">
                                </div>
                                <p>Dentist</p>
                                <NuxtLink to="/doctor-profile" class="service-link">
                                    <i class="fas fa-arrow-right"></i>
                                </NuxtLink>
                            </div>
                        </div>			
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 aos" data-aos="fade-up">
                <div class="service-grid">
                    <div class="effect-oscar">
                        <img src="../assets/img/services/services-04.jpg" class="img-fluid services-img" alt="">
                        <div class="services-caption">
                            <div class="services-inner">
                                <div class="service-grid-icon">
                                    <img src="../assets/img/icons/icon2.svg" class="img-fluid" alt="">
                                </div>
                                <p>Neurology</p>
                                <NuxtLink to="/doctor-profile" class="service-link">
                                    <i class="fas fa-arrow-right"></i>
                                </NuxtLink>
                            </div>
                        </div>			
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /Service Section -->

<!-- Doctor Section -->
<section class="doctor-section">
    <div class="doctor-right-img aos" data-aos="fade-up">
        <img src="../assets/img/doctors/doctor-img.jpg" class="img-fluid" alt="">
    </div>
    <div class="container">
        <div class="section-header text-center aos" data-aos="fade-up">
            <h2 class="color-primary">Book Our Doctor</h2>
            <p class="sub-title color-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="row">
            <div class="col-md-12 aos" data-aos="fade-up">
                <div class="doctor-book-slider slider">
                    <div class="doctor-profile-widget">
                        <NuxtLink to="/doctor-profile">
                            <img src="../assets/img/doctors/book-doctor-01.jpg" class="img-fluid book-doctor" alt="">
                        </NuxtLink>
                        <div class="pro-content">
                            <div class="provider-info">
                                <div class="pro-icon">
                                    <img src="../assets/img/icons/icon2.svg" class="img-fluid" alt="">
                                </div>
                                <h3 class="mb-1">
                                    <NuxtLink to="/doctor-profile" tabindex="0">Edward Willey 
                                        <img src="../assets/img/doctor-check.png" alt="">
                                    </NuxtLink>
                                </h3>
                                <p>Neurologist Specialist</p>
                                <div>
                                    <div class="rating">
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star"></i>
                                        <span class="d-inline-block average-rating">4.9 ( 82 )</span>
                                    </div>
                                </div>
                                <div class="content-info">
                                    <div class="social-info">
                                        <a href="" target="_blank"><i class="fab fa-facebook hi-icon"></i></a>
                                        <a href="" target="_blank"><i class="fab fa-linkedin hi-icon"></i></a>
                                        <a href="" target="_blank"><i class="fab fa-instagram hi-icon"></i></a>
                                        <a href="" target="_blank"><i class="fab fa-twitter hi-icon"></i></a>
                                    </div>
                                    <div class="booking-btn">
                                        <NuxtLink to="/booking" class="btn book-btn">
                                            Book Appointment
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="doctor-profile-widget">
                        <NuxtLink to="/doctor-profile">
                            <img src="../assets/img/doctors/book-doctor-02.jpg" class="img-fluid book-doctor" alt="">
                        </NuxtLink>
                        <div class="pro-content">
                            <div class="provider-info">
                                <div class="pro-icon">
                                    <img src="../assets/img/icons/icon3.svg" class="img-fluid" alt="">
                                </div>
                                <h3 class="mb-1">
                                    <NuxtLink to="/doctor-profile" tabindex="0">Deborah Angel 
                                        <img src="../assets/img/doctor-check.png" alt="">
                                    </NuxtLink>
                                </h3>
                                <p>Cardiology Specialist</p>
                                <div>
                                    <div class="rating">
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star"></i>
                                        <span class="d-inline-block average-rating">4.9 ( 82 )</span>
                                    </div>
                                </div>
                                <div class="content-info">
                                    <div class="social-info">
                                        <a href="" target="_blank"><i class="fab fa-facebook hi-icon"></i></a>
                                        <a href="" target="_blank"><i class="fab fa-linkedin hi-icon"></i></a>
                                        <a href="" target="_blank"><i class="fab fa-instagram hi-icon"></i></a>
                                        <a href="" target="_blank"><i class="fab fa-twitter hi-icon"></i></a>
                                    </div>
                                    <div class="booking-btn">
                                        <NuxtLink to="/booking" class="btn book-btn">
                                            Book Appointment
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="doctor-profile-widget">
                        <NuxtLink to="/doctor-profile">
                            <img src="../assets/img/doctors/book-doctor-03.jpg" class="img-fluid book-doctor" alt="">
                        </NuxtLink>
                        <div class="pro-content">
                            <div class="provider-info">
                                <div class="pro-icon">
                                    <img src="../assets/img/icons/icon1.svg" class="img-fluid" alt="">
                                </div>
                                <h3 class="mb-1">
                                    <NuxtLink to="/doctor-profile" tabindex="0">Merry Anderson 
                                        <img src="../assets/img/doctor-check.png" alt="">
                                    </NuxtLink>
                                </h3>
                                <p>Gastrologic Specialist</p>
                                <div>
                                    <div class="rating">
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star"></i>
                                        <span class="d-inline-block average-rating">4.9 ( 82 )</span>
                                    </div>
                                </div>
                                <div class="content-info">
                                    <div class="social-info">
                                        <a href="" target="_blank"><i class="fab fa-facebook hi-icon"></i></a>
                                        <a href="" target="_blank"><i class="fab fa-linkedin hi-icon"></i></a>
                                        <a href="" target="_blank"><i class="fab fa-instagram hi-icon"></i></a>
                                        <a href="" target="_blank"><i class="fab fa-twitter hi-icon"></i></a>
                                    </div>
                                    <div class="booking-btn">
                                        <NuxtLink to="/booking" class="btn book-btn">
                                            Book Appointment
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="doctor-profile-widget">
                        <NuxtLink to="/doctor-profile">
                            <img src="../assets/img/doctors/book-doctor-04.jpg" class="img-fluid book-doctor" alt="">
                        </NuxtLink>
                        <div class="pro-content">
                            <div class="provider-info">
                                <div class="pro-icon">
                                    <img src="../assets/img/icons/icon4.svg" class="img-fluid" alt="">
                                </div>
                                <h3 class="mb-1">
                                    <NuxtLink to="/doctor-profile" tabindex="0">David Blackwell
                                        <img src="../assets/img/doctor-check.png" alt="">
                                    </NuxtLink>
                                </h3>
                                <p>Dental Specialist</p>
                                <div>
                                    <div class="rating">
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star"></i>
                                        <span class="d-inline-block average-rating">4.9 ( 82 )</span>
                                    </div>
                                </div>
                                <div class="content-info">
                                    <div class="social-info">
                                        <a href="" target="_blank"><i class="fab fa-facebook hi-icon"></i></a>
                                        <a href="" target="_blank"><i class="fab fa-linkedin hi-icon"></i></a>
                                        <a href="" target="_blank"><i class="fab fa-instagram hi-icon"></i></a>
                                        <a href="" target="_blank"><i class="fab fa-twitter hi-icon"></i></a>
                                    </div>
                                    <div class="booking-btn">
                                        <NuxtLink to="/booking" class="btn book-btn">
                                            Book Appointment
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="doctor-profile-widget">
                        <NuxtLink to="/doctor-profile">
                            <img src="../assets/img/doctors/book-doctor-01.jpg" class="img-fluid book-doctor" alt="">
                        </NuxtLink>
                        <div class="pro-content">
                            <div class="provider-info">
                                <div class="pro-icon">
                                    <img src="../assets/img/icons/icon2.svg" class="img-fluid" alt="">
                                </div>
                                <h3 class="mb-1">
                                    <NuxtLink to="/doctor-profile" tabindex="0">Edward Willey 
                                        <img src="../assets/img/doctor-check.png" alt="">
                                    </NuxtLink>
                                </h3>
                                <p>Dermatologist</p>
                                <div>
                                    <div class="rating">
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star"></i>
                                        <span class="d-inline-block average-rating">4.9 ( 82 )</span>
                                    </div>
                                </div>
                                <div class="content-info">
                                    <div class="social-info">
                                        <a href="" target="_blank"><i class="fab fa-facebook hi-icon"></i></a>
                                        <a href="" target="_blank"><i class="fab fa-linkedin hi-icon"></i></a>
                                        <a href="" target="_blank"><i class="fab fa-instagram hi-icon"></i></a>
                                        <a href="" target="_blank"><i class="fab fa-twitter hi-icon"></i></a>
                                    </div>
                                    <div class="booking-btn">
                                        <NuxtLink to="/booking" class="btn book-btn">
                                            Book Appointment
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-end">
                <div class="slick-view-btn me-2">
                    <NuxtLink to="/doctor-profile" class="btn">View More <i class="fas fa-arrow-right ms-2"></i></NuxtLink>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /Doctor Section -->

<!-- Features Section -->
<section class="features-section">
    <div class="container">
        <div class="section-header text-center aos" data-aos="fade-up">
            <h2 class="color-primary">Availabe Features in Our Clinic</h2>
            <p class="sub-title color-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="row">
            <div class="col-md-12 aos" data-aos="fade-up">
                <div class="features-section-slider slider">
                    <div class="features-grid hvr-bounce-to-bottom">
                        <div class="features-cricle">
                            <div class="features-round">
                                <img src="../assets/img/services/features-01.svg" class="img-fluid" alt="">
                            </div>
                        </div>
                        <h4>Operation</h4>
                    </div>
                    <div class="features-grid hvr-bounce-to-bottom">
                        <div class="features-cricle">
                            <div class="features-round">
                                <img src="../assets/img/services/features-02.svg" class="img-fluid" alt="">
                            </div>
                        </div>
                        <h4>Medical</h4>
                    </div>
                    <div class="features-grid hvr-bounce-to-bottom">
                        <div class="features-cricle">
                            <div class="features-round">
                                <img src="../assets/img/services/features-03.svg" class="img-fluid" alt="">
                            </div>
                        </div>
                        <h4>Patient Ward</h4>
                    </div>
                    <div class="features-grid hvr-bounce-to-bottom">
                        <div class="features-cricle">
                            <div class="features-round">
                                <img src="../assets/img/services/features-04.svg" class="img-fluid" alt="">
                            </div>
                        </div>
                        <h4>Laboratory</h4>
                    </div>
                    <div class="features-grid hvr-bounce-to-bottom">
                        <div class="features-cricle">
                            <div class="features-round">
                                <img src="../assets/img/services/features-01.svg" class="img-fluid" alt="">
                            </div>
                        </div>
                        <h4>Operation</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-end">
                <div class="slick-view-btn me-2">
                    <a href="javascript:void(0);" class="btn">
                        View More <i class="fas fa-arrow-right ms-2"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /Features Section -->

<!-- News Section -->
<section class="news-letter-bg">
    <div class="container">
        <div class="news-bg">
            <div class="row">
                <div class="col-lg-8 col-md-12 news-left aos" data-aos="fade-up">
                    <div>
                        <h2>Grab Our Newsletter</h2>
                        <P>To receive latest offers and discounts from the shop.</P>
                    </div>
                    <div>
                        <form>
                            <div class="form-group">
                                <input type="text" class="form-control me-2" placeholder="Enter Your Email Address">
                                <button type="submit" class="btn">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 aos" data-aos="fade-up">
                    <div class="news-img">
                        <img src="../assets/img/blog/news-img.png" class="img-fluid" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /News Section -->

<!-- News Section -->
<section class="news-section">
    <div class="container">
        <div class="section-header text-center aos" data-aos="fade-up">
            <h2 class="color-primary">Let’s See Our Latest News</h2>
            <p class="sub-title color-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
                <div class="grid-news w-100">
                    <div class="news-image">
                        <NuxtLink to="/blog-details">
                            <img class="img-fluid" src="../assets/img/blog/blog-11.jpg" alt="News Image">
                        </NuxtLink>
                    </div>
                    <div class="news-content">
                        <ul>
                            <li>
                                <div class="news-date">
                                    <a href="javascript:void(0);">
                                        <calendar-icon size="1.4x" class="custom-class me-2"></calendar-icon>
                                        <span>4 Dec 2021</span>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="news-date">
                                    <a href="javascript:void(0);" class="news-light-btn">
                                        <tag-icon size="1.4x" class="custom-class me-2"></tag-icon>
                                        <span>Heath Care</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <h3 class="news-title">
                            <NuxtLink to="/blog-details">How to handle patient body in MRI</NuxtLink>
                        </h3>
                        <p>
                            <NuxtLink to="/blog-details">Read News</NuxtLink>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
                <div class="grid-news w-100">
                    <div class="news-image">
                        <NuxtLink to="/blog-details">
                            <img class="img-fluid" src="../assets/img/blog/blog-12.jpg" alt="News Image">
                        </NuxtLink>
                    </div>
                    <div class="news-content">
                        <ul>
                            <li>
                                <div class="news-date">
                                    <a href="javascript:void(0);">
                                        <calendar-icon size="1.4x" class="custom-class me-2"></calendar-icon>
                                        <span>10 Dec 2021</span>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="news-date">
                                    <a href="javascript:void(0);" class="news-light-btn">
                                        <tag-icon size="1.4x" class="custom-class me-2"></tag-icon>
                                        <span>Surgery</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <h3 class="news-title">
                            <NuxtLink to="/blog-details">Doccure – Making your clinic painless visit?</NuxtLink>
                        </h3>
                        <p>
                            <NuxtLink to="/blog-details">Read News</NuxtLink>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
                <div class="grid-news w-100">
                    <div class="news-image">
                        <NuxtLink to="/blog-details">
                            <img class="img-fluid" src="../assets/img/blog/blog-13.jpg" alt="News Image">
                        </NuxtLink>
                    </div>
                    <div class="news-content">
                        <ul>
                            <li>
                                <div class="news-date">
                                    <a href="javascript:void(0);">
                                        <calendar-icon size="1.4x" class="custom-class me-2"></calendar-icon>
                                        <span>15 Dec 2021</span>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="news-date">
                                    <a href="javascript:void(0);" class="news-light-btn">
                                        <tag-icon size="1.4x" class="custom-class me-2"></tag-icon>
                                        <span>General</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <h3 class="news-title">
                            <NuxtLink to="/blog-details">Benefits of consulting with an Online Doctor</NuxtLink>
                        </h3>
                        <p>
                            <NuxtLink to="/blog-details">Read News</NuxtLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="blog-details-btn text-center">
            <NuxtLink to="/blog-details" class="btn view-more">View More <i class="fas fa-arrow-right ms-2"></i></NuxtLink>
        </div>
    </div>
</section>
<!-- /News Section -->
  <Nuxt />
 </div>
</template>

<script>
import AOS from 'aos';
import { SearchIcon } from 'vue-feather-icons'
import { MapPinIcon } from 'vue-feather-icons'
import { SlidersIcon } from 'vue-feather-icons'
import { CalendarIcon } from 'vue-feather-icons'
import { TagIcon } from 'vue-feather-icons'

export default {
	layout: 'index10',
    components: {
    SearchIcon,
    MapPinIcon,
    SlidersIcon,
    CalendarIcon,
    TagIcon
  },
	mounted() {
        if ($('.select').length > 0) {
		$('.select').select2({
			minimumResultsForSearch: -1,
			width: '100%'
		});
	}
		if($('.main-wrapper .aos').length > 0) {
	    AOS.init({
		  duration: 1200,
		  once: true,
		});
	}
    $('a.smooth-menu').on('click', function(e) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top});
        e.preventDefault();
    });
	if($('.doctor-book-slider').length > 0) {
		$('.doctor-book-slider').slick({
			dots: false,
			autoplay:false,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [{
				breakpoint: 992,
					settings: {
						slidesToShow: 3
				  	}
			},
			{
				breakpoint: 800,
					settings: {
						slidesToShow: 3
				  	}
			},
			{
				breakpoint: 776,
					settings: {
						slidesToShow: 2
				  	}
			},
			{
				breakpoint: 567,
					settings: {
						slidesToShow: 1
					}
			}]
		});
	}
    if($('.features-section-slider').length > 0) {
		$('.features-section-slider').slick({
			dots: false,
			autoplay:false,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [{
				breakpoint: 1199,
					settings: {
						slidesToShow: 3
				  	}
			},
			{
				breakpoint: 992,
					settings: {
						slidesToShow: 3
				  	}
			},
			{
				breakpoint: 860,
					settings: {
						slidesToShow: 2
				  	}
			},
			{
				breakpoint: 776,
					settings: {
						slidesToShow: 2
				  	}
			},
			{
				breakpoint: 567,
					settings: {
						slidesToShow: 1
					}
			}]
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