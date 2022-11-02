<template>
<div>
 <div class="main-wrapper">

<!-- Breadcrumb -->
<div class="breadcrumb-bar">
    <div class="container-fluid">
        <div class="row align-items-center">
            <div class="col-md-12 col-12">
                <nav aria-label="breadcrumb" class="page-breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><NuxtLink to="/">Home</NuxtLink></li>
                        <li class="breadcrumb-item active" aria-current="page">Doctor Blog</li>
                    </ol>
                </nav>
                <h2 class="breadcrumb-title">Doctor Blog</h2>
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
                                    <NuxtLink to="/invoices">
                                        <i class="fas fa-file-invoice"></i>
                                        <span>Invoices</span>
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
                <div class="doc-review review-listing">

                    <div class="row mb-5">
                        <div class="col">
                            <ul class="nav nav-tabs nav-tabs-solid">
                                <li class="nav-item">
                                    <NuxtLink class="nav-link active" to="/doctor-blog">Acitive Blog</NuxtLink>
                                </li>
                                <li class="nav-item">
                                    <NuxtLink class="nav-link" to="/doctor-pending-blog">Pending Blog</NuxtLink>
                                </li>
                            </ul>
                        </div>
                        <div class="col-auto">
                            <NuxtLink class="btn btn-primary btn-sm" to="/doctor-add-blog"><i class="fas fa-plus me-1"></i> Add Blog</NuxtLink>
                        </div>
                    </div>
                
                    <!-- Blog -->
                    <div class="row blog-grid-row">

                        <div class="col-md-6 col-xl-4 col-sm-12">
                        
                            <!-- Blog Post -->
                            <div class="blog grid-blog">
                                <div class="blog-image">
                                    <NuxtLink to="/blog-details"><img class="img-fluid" src="../assets/img/blog/blog-01.jpg" alt="Post Image"></NuxtLink>
                                </div>
                                <div class="blog-content">
                                    <ul class="entry-meta meta-item">
                                        <li>
                                            <div class="post-author">
                                                <NuxtLink to="/doctor-profile"><img src="../assets/img/doctors/doctor-thumb-01.jpg" alt="Post Author"> <span>Dr. Ruby Perrin</span></NuxtLink>
                                            </div>
                                        </li>
                                        <li><i class="far fa-clock"></i> 4 Dec 2019</li>
                                    </ul>
                                    <h3 class="blog-title"><NuxtLink to="/blog-details">Doccure – Making your clinic painless visit?</NuxtLink></h3>
                                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                                <div class="row pt-3">
                                    <div class="col"><NuxtLink to="/edit-blog" class="text-success"><i class="far fa-edit"></i> Edit</NuxtLink></div>
                                                                                                
                                    <div class="col text-end"><a href="javascript:void(0);" class="text-danger" data-bs-toggle="modal" data-bs-target="#deleteNotConfirmModal"><i class="far fa-trash-alt"></i> Inactive</a></div>
                                </div>
                            </div>
                            <!-- /Blog Post -->
                            
                        </div>
                        <div class="col-md-6 col-xl-4 col-sm-12">
                        
                            <!-- Blog Post -->
                            <div class="blog grid-blog">
                                <div class="blog-image">
                                    <NuxtLink to="/blog-details"><img class="img-fluid" src="../assets/img/blog/blog-02.jpg" alt="Post Image"></NuxtLink>
                                </div>
                                <div class="blog-content">
                                    <ul class="entry-meta meta-item">
                                        <li>
                                            <div class="post-author">
                                                <NuxtLink to="/doctor-profile"><img src="../assets/img/doctors/doctor-thumb-02.jpg" alt="Post Author"> <span>Dr. Darren Elder</span></NuxtLink>
                                            </div>
                                        </li>
                                        <li><i class="far fa-clock"></i> 3 Dec 2019</li>
                                    </ul>
                                    <h3 class="blog-title"><NuxtLink to="/blog-details">What are the benefits of Online Doctor Booking?</NuxtLink></h3>
                                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                                <div class="row pt-3">
                                    <div class="col"><NuxtLink to="/edit-blog" class="text-success"><i class="far fa-edit"></i> Edit</NuxtLink></div>
                                                                                                
                                    <div class="col text-end"><a href="javascript:void(0);" class="text-danger" data-bs-toggle="modal" data-bs-target="#deleteNotConfirmModal"><i class="far fa-trash-alt"></i> Inactive</a></div>
                                </div>
                            </div>
                            <!-- /Blog Post -->
                            
                        </div>
                        <div class="col-md-6 col-xl-4 col-sm-12">
                        
                            <!-- Blog Post -->
                            <div class="blog grid-blog">
                                <div class="blog-image">
                                    <NuxtLink to="/blog-details"><img class="img-fluid" src="../assets/img/blog/blog-03.jpg" alt="Post Image"></NuxtLink>
                                </div>
                                <div class="blog-content">
                                    <ul class="entry-meta meta-item">
                                        <li>
                                            <div class="post-author">
                                                <NuxtLink to="/doctor-profile"><img src="../assets/img/doctors/doctor-thumb-03.jpg" alt="Post Author"> <span>Dr. Deborah Angel</span></NuxtLink>
                                            </div>
                                        </li>
                                        <li><i class="far fa-clock"></i> 3 Dec 2019</li>
                                    </ul>
                                    <h3 class="blog-title"><NuxtLink to="/blog-details">Benefits of consulting with an Online Doctor</NuxtLink></h3>
                                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                                <div class="row pt-3">
                                    <div class="col"><NuxtLink to="/blog-details" class="text-success"><i class="far fa-edit"></i> Edit</NuxtLink></div>
                                                                                                
                                    <div class="col text-end"><a href="javascript:void(0);" class="text-danger" data-bs-toggle="modal" data-bs-target="#deleteNotConfirmModal"><i class="far fa-trash-alt"></i> Inactive</a></div>
                                </div>
                            </div>
                            <!-- /Blog Post -->
                            
                        </div>
                        <div class="col-md-6 col-xl-4 col-sm-12">
                        
                            <!-- Blog Post -->
                            <div class="blog grid-blog">
                                <div class="blog-image">
                                    <NuxtLink to="/blog-details"><img class="img-fluid" src="../assets/img/blog/blog-04.jpg" alt="Post Image"></NuxtLink>
                                </div>
                                <div class="blog-content">
                                    <ul class="entry-meta meta-item">
                                        <li>
                                            <div class="post-author">
                                                <NuxtLink to="/doctor-profile"><img src="../assets/img/doctors/doctor-thumb-04.jpg" alt="Post Author"> <span>Dr. Sofia Brient</span></NuxtLink>
                                            </div>
                                        </li>
                                        <li><i class="far fa-clock"></i> 2 Dec 2019</li>
                                    </ul>
                                    <h3 class="blog-title"><NuxtLink to="/blog-details">5 Great reasons to use an Online Doctor</NuxtLink></h3>
                                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                                <div class="row pt-3">
                                    <div class="col"><NuxtLink to="/edit-blog" class="text-success"><i class="far fa-edit"></i> Edit</NuxtLink></div>
                                                                                                
                                    <div class="col text-end"><a href="javascript:void(0);" class="text-danger" data-bs-toggle="modal" data-bs-target="#deleteNotConfirmModal"><i class="far fa-trash-alt"></i> Inactive</a></div>
                                </div>
                            </div>
                            <!-- /Blog Post -->
                            
                        </div>
                        <div class="col-md-6 col-xl-4 col-sm-12">
                        
                            <!-- Blog Post -->
                            <div class="blog grid-blog">
                                <div class="blog-image">
                                    <NuxtLink to="/blog-details"><img class="img-fluid" src="../assets/img/blog/blog-05.jpg" alt="Post Image"></NuxtLink>
                                </div>
                                <div class="blog-content">
                                    <ul class="entry-meta meta-item">
                                        <li>
                                            <div class="post-author">
                                                <NuxtLink to="/blog-details"><img src="../assets/img/doctors/doctor-thumb-05.jpg" alt="Post Author"> <span>Dr. Marvin Campbell</span></NuxtLink>
                                            </div>
                                        </li>
                                        <li><i class="far fa-clock"></i> 1 Dec 2019</li>
                                    </ul>
                                    <h3 class="blog-title"><NuxtLink to="/blog-details">Online Doctor Appointment Scheduling</NuxtLink></h3>
                                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                                <div class="row pt-3">
                                    <div class="col"><NuxtLink to="/edit-blog" class="text-success"><i class="far fa-edit"></i> Edit</NuxtLink></div>
                                                                                                
                                    <div class="col text-end"><a href="javascript:void(0);" class="text-danger" data-bs-toggle="modal" data-bs-target="#deleteNotConfirmModal"><i class="far fa-trash-alt"></i> Inactive</a></div>
                                </div>
                            </div>
                            <!-- /Blog Post -->
                            
                        </div>
                        <div class="col-md-6 col-xl-4 col-sm-12">
                        
                            <!-- Blog Post -->
                            <div class="blog grid-blog">
                                <div class="blog-image">
                                    <NuxtLink to="/blog-details"><img class="img-fluid" src="../assets/img/blog/blog-06.jpg" alt="Post Image"></NuxtLink>
                                </div>
                                <div class="blog-content">
                                    <ul class="entry-meta meta-item">
                                        <li>
                                            <div class="post-author">
                                                <NuxtLink to="/doctor-profile"><img src="../assets/img/doctors/doctor-thumb-06.jpg" alt="Post Author"> <span>Dr. Katharine Berthold</span></NuxtLink>
                                            </div>
                                        </li>
                                        <li><i class="far fa-clock"></i> 30 Nov 2019</li>
                                    </ul>
                                    <h3 class="blog-title"><NuxtLink to="/blog-details">Simple steps to make your doctor visits exceptional!</NuxtLink></h3>
                                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                                <div class="row pt-3">
                                    <div class="col"><NuxtLink to="/edit-blog" class="text-success"><i class="far fa-edit"></i> Edit</NuxtLink></div>
                                                                                                
                                    <div class="col text-end"><a href="javascript:void(0);" class="text-danger" data-bs-toggle="modal" data-bs-target="#deleteNotConfirmModal"><i class="far fa-trash-alt"></i> Inactive</a></div>
                                </div>
                            </div>
                            <!-- /Blog Post -->
                            
                        </div>
                        <div class="col-md-6 col-xl-4 col-sm-12">
                        
                            <!-- Blog Post -->
                            <div class="blog grid-blog">
                                <div class="blog-image">
                                    <NuxtLink to="/blog-details"><img class="img-fluid" src="../assets/img/blog/blog-07.jpg" alt="Post Image"></NuxtLink>
                                </div>
                                <div class="blog-content">
                                    <ul class="entry-meta meta-item">
                                        <li>
                                            <div class="post-author">
                                                <NuxtLink to="/doctor-profile"><img src="../assets/img/doctors/doctor-thumb-07.jpg" alt="Post Author"> <span>Dr. Linda Tobin</span></NuxtLink>
                                            </div>
                                        </li>
                                        <li><i class="far fa-clock"></i> 28 Nov 2019</li>
                                    </ul>
                                    <h3 class="blog-title"><NuxtLink to="/blog-details">Choose your own Online Doctor Appointment</NuxtLink></h3>
                                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                                <div class="row pt-3">
                                    <div class="col"><NuxtLink to="/edit-blog" class="text-success"><i class="far fa-edit"></i> Edit</NuxtLink></div>
                                                                                                
                                    <div class="col text-end"><a href="javascript:void(0);" class="text-danger" data-bs-toggle="modal" data-bs-target="#deleteNotConfirmModal"><i class="far fa-trash-alt"></i> Inactive</a></div>
                                </div>
                            </div>
                            <!-- /Blog Post -->
                            
                        </div>
                        <div class="col-md-6 col-xl-4 col-sm-12">
                        
                            <!-- Blog Post -->
                            <div class="blog grid-blog">
                                <div class="blog-image">
                                    <NuxtLink to="/blog-details"><img class="img-fluid" src="../assets/img/blog/blog-08.jpg" alt="Post Image"></NuxtLink>
                                </div>
                                <div class="blog-content">
                                    <ul class="entry-meta meta-item">
                                        <li>
                                            <div class="post-author">
                                                <NuxtLink to="/doctor-profile"><img src="../assets/img/doctors/doctor-thumb-08.jpg" alt="Post Author"> <span>Dr. Paul Richard </span></NuxtLink>
                                            </div>
                                        </li>
                                        <li><i class="far fa-clock"></i> 25 Nov 2019</li>
                                    </ul>
                                    <h3 class="blog-title"><NuxtLink to="/blog-details">Simple steps to visit your doctor today</NuxtLink></h3>
                                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                                <div class="row pt-3">
                                    <div class="col"><NuxtLink to="/edit-blog" class="text-success"><i class="far fa-edit"></i> Edit</NuxtLink></div>
                                                                                                
                                    <div class="col text-end"><a href="javascript:void(0);" class="text-danger" data-bs-toggle="modal" data-bs-target="#deleteNotConfirmModal"><i class="far fa-trash-alt"></i> Inactive</a></div>
                                </div>
                            </div>
                            <!-- /Blog Post -->
                            
                        </div>
                        <div class="col-md-6 col-xl-4 col-sm-12">
                        
                            <!-- Blog Post -->
                            <div class="blog grid-blog">
                                <div class="blog-image">
                                    <NuxtLink to="/blog-details"><img class="img-fluid" src="../assets/img/blog/blog-09.jpg" alt="Post Image"></NuxtLink>
                                </div>
                                <div class="blog-content">
                                    <ul class="entry-meta meta-item">
                                        <li>
                                            <div class="post-author">
                                                <NuxtLink to="/doctor-profile"><img src="../assets/img/doctors/doctor-thumb-09.jpg" alt="Post Author"> <span>Dr. John Gibbs</span></NuxtLink>
                                            </div>
                                        </li>
                                        <li><i class="far fa-clock"></i> 24 Nov 2019</li>
                                    </ul>
                                    <h3 class="blog-title"><NuxtLink to="/blog-details">5 Great reasons to use an Online Doctor</NuxtLink></h3>
                                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                                <div class="row pt-3">
                                    <div class="col"><NuxtLink to="/edit-blog" class="text-success"><i class="far fa-edit"></i> Edit</NuxtLink></div>
                                                                                                
                                    <div class="col text-end"><a href="javascript:void(0);" class="text-danger" data-bs-toggle="modal" data-bs-target="#deleteNotConfirmModal"><i class="far fa-trash-alt"></i> Inactive</a></div>
                                </div>
                            </div>
                            <!-- /Blog Post -->
                            
                        </div>
                        <div class="col-md-6 col-xl-4 col-sm-12">
                        
                            <!-- Blog Post -->
                            <div class="blog grid-blog">
                                <div class="blog-image">
                                    <NuxtLink to="/blog-details"><img class="img-fluid" src="../assets/img/blog/blog-10.jpg" alt="Post Image"></NuxtLink>
                                </div>
                                <div class="blog-content">
                                    <ul class="entry-meta meta-item">
                                        <li>
                                            <div class="post-author">
                                                <NuxtLink to="/doctor-profile"><img src="../assets/img/doctors/doctor-thumb-10.jpg" alt="Post Author"> <span>Dr. Olga Barlow</span></NuxtLink>
                                            </div>
                                        </li>
                                        <li><i class="far fa-clock"></i> 23 Nov 2019</li>
                                    </ul>
                                    <h3 class="blog-title"><NuxtLink to="/blog-details">Online Doctoral Programs</NuxtLink></h3>
                                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                                <div class="row pt-3">
                                    <div class="col"><NuxtLink to="/edit-blog" class="text-success"><i class="far fa-edit"></i> Edit</NuxtLink></div>
                                                                                                
                                    <div class="col text-end"><a href="javascript:void(0);" class="text-danger" data-bs-toggle="modal" data-bs-target="#deleteNotConfirmModal"><i class="far fa-trash-alt"></i> Inactive</a></div>
                                </div>
                            </div>
                            <!-- /Blog Post -->
                            
                        </div>
                    </div>
                
                    <!-- Blog Pagination -->
                    <div class="row">
                        <div class="col-md-12">
                            <div class="blog-pagination">
                                <nav>
                                    <ul class="pagination justify-content-center">
                                        <li class="page-item disabled">
                                            <a class="page-link" href="javascript:void(0);" tabindex="-1"><i class="fas fa-angle-double-left"></i></a>
                                        </li>
                                        <li class="page-item">
                                            <a class="page-link" href="javascript:void(0);">1</a>
                                        </li>
                                        <li class="page-item active">
                                            <a class="page-link" href="javascript:void(0);">2 <span class="visually-hidden">(current)</span></a>
                                        </li>
                                        <li class="page-item">
                                            <a class="page-link" href="javascript:void(0);">3</a>
                                        </li>
                                        <li class="page-item">
                                            <a class="page-link" href="javascript:void(0);"><i class="fas fa-angle-double-right"></i></a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <!-- /Blog Pagination -->
                    <!-- /Blog -->

                </div>
            </div>
        </div>
    </div>

</div>		
<!-- /Page Content -->

  <Nuxt />
  
 </div>
 
<!-- Model -->
<div class="modal fade" id="deleteConfirmModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="acc_title"></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p id="acc_msg"></p>
            </div>
            <div class="modal-footer">
                <a href="javascript:;" class="btn btn-success si_accept_confirm">Yes</a>
                <button type="button" class="btn btn-danger si_accept_cancel" data-bs-dismiss="modal">Cancel</button>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="deleteNotConfirmModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style="display: none;" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="acc_title">Inactive Service?</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p id="acc_msg">Service is Booked and Inprogress..</p>
            </div>
            <div class="modal-footer">
                
                <button type="button" class="btn btn-danger si_accept_cancel" data-bs-dismiss="modal">OK</button>
            </div>
        </div>
    </div>
</div>
<!-- /Model -->

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