<template>
<div class="main-wrapper">
    <div class="page-wrapper">
        <div class="content container-fluid">
            
            <!-- Blog List -->
            <div class="row">
                <div class="col-md-9">
                    <ul class="list-links mb-4">
                        <li><NuxtLink to="/admin/active-blog">Active Blog</NuxtLink></li>
                        <li class="active"><NuxtLink to="/admin/pending-blog">Pending Blog</NuxtLink></li>
                    </ul>
                </div>
                <div class="col-md-3 text-md-end">
                    <NuxtLink to="/admin/add-blog" class="btn btn-primary btn-blog mb-3">Add Blog</NuxtLink>
                </div>
            </div>
            
            <div class="row">				
                
                <!-- Blog Post -->
                <div class="col-md-6 col-xl-4 col-sm-12 d-flex">
                    <div class="blog grid-blog">
                        <div class="blog-image">
                            <NuxtLink to="/admin/blog-details"><img class="img-fluid" src="../../assets/admin_img/blog/blog-03.jpg" alt="Post Image"></NuxtLink>
                            <div class="fav-btn">
                                <img src="../../assets/admin_img/icon/eye-icon.png" alt="icon"> 225
                            </div>
                        </div>
                        <div class="blog-content">
                            <ul class="entry-meta meta-item">
                                <li>
                                    <div class="post-author">
                                        <NuxtLink to="/admin/profile">
                                            <img src="../../assets/admin_img/profiles/avatar-08.jpg" alt="Post Author"> 
                                            <span>
                                                <span class="post-title">Dr. Jeffrey</span>
                                                <span class="post-date"><i class="far fa-clock"></i>  11 Nov 2022</span>
                                            </span>
                                        </NuxtLink>
                                    </div>
                                </li>
                            </ul>
                            <h3 class="blog-title"><NuxtLink to="/admin/blog-details">5 Great reasons to use an Online Doctor</NuxtLink></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed   do eiusmod tempor...</p>
                        </div>
                        <div class="row">
                            <div class="col"><NuxtLink to="/admin/edit-blog" class="text-success"><edit-3-icon size="1.4x" class="custom-class me-1"></edit-3-icon> Edit</NuxtLink></div>
                            <div class="col text-end">
                                <label class="toggle-switch justify-content-end" for="blog4">
                                    <input type="checkbox" class="toggle-switch-input" id="blog4">
                                    <span class="toggle-switch-label">
                                        <span class="toggle-switch-indicator"></span>
                                    </span> 
                                    <span class="active-text ms-1">Inactive</span>
                                </label>
                            </div>
                        </div>
                    </div>										
                </div>
                <!-- /Blog Post -->
                
                <!-- Blog Post -->
                <div class="col-md-6 col-xl-4 col-sm-12 d-flex">
                    <div class="blog grid-blog">
                        <div class="blog-image">
                            <NuxtLink to="/admin/blog-details"><img class="img-fluid" src="../../assets/admin_img/blog/blog-04.jpg" alt="Post Image"></NuxtLink>
                            <div class="fav-btn">
                                <img src="../../assets/admin_img/icon/eye-icon.png" alt="icon"> 103
                            </div>
                        </div>
                        <div class="blog-content">
                            <ul class="entry-meta meta-item">
                                <li>
                                    <div class="post-author">
                                        <NuxtLink to="/admin/profile">
                                            <img src="../../assets/admin_img/profiles/avatar-10.jpg" alt="Post Author"> 
                                            <span>
                                                <span class="post-title">Dr. Charles</span>
                                                <span class="post-date"><i class="far fa-clock"></i> 06 Nov 2022</span>
                                            </span>
                                        </NuxtLink>
                                    </div>
                                </li>
                            </ul>
                            <h3 class="blog-title"><NuxtLink to="/admin/blog-details">Online Doctor Appointment Scheduling</NuxtLink></h3>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur...</p>
                        </div>
                        <div class="row">
                            <div class="col"><NuxtLink to="/admin/edit-blog" class="text-success"><edit-3-icon size="1.4x" class="custom-class me-1"></edit-3-icon> Edit</NuxtLink></div>
                            <div class="col text-end">
                                <label class="toggle-switch justify-content-end" for="blog5">
                                    <input type="checkbox" class="toggle-switch-input" id="blog5" checked>
                                    <span class="toggle-switch-label">
                                        <span class="toggle-switch-indicator"></span>
                                    </span> 
                                    <span class="active-text ms-1">Active</span>
                                </label>
                            </div>
                        </div>
                    </div>										
                </div>
                <!-- /Blog Post -->
                
                <!-- Blog Post -->
                <div class="col-md-6 col-xl-4 col-sm-12 d-flex">
                    <div class="blog grid-blog flex-fill">
                        <div class="blog-image">
                            <NuxtLink to="/admin/blog-details"><img class="img-fluid" src="../../assets/admin_img/blog/blog-01.jpg" alt="Post Image"></NuxtLink>
                            <div class="fav-btn">
                                <img src="../../assets/admin_img/icon/eye-icon.png" alt="icon"> 225
                            </div>
                        </div>
                        <div class="blog-content">
                            <ul class="entry-meta meta-item">
                                <li>
                                    <div class="post-author">
                                        <NuxtLink to="/admin/profile">
                                            <img src="../../assets/admin_img/profiles/avatar-02.jpg" alt="Post Author"> 
                                            <span>
                                                <span class="post-title">Dr. Ruby Perrin</span>
                                                <span class="post-date"><i class="far fa-clock"></i>  4 Dec 2022</span>
                                            </span>
                                        </NuxtLink>
                                    </div>
                                </li>
                            </ul>
                            <h3 class="blog-title"><NuxtLink to="/admin/blog-details">Doccure – Making your clinic painless visit?</NuxtLink></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                        </div>
                        <div class="row">
                            <div class="col"><NuxtLink to="/admin/edit-blog" class="text-success"><edit-3-icon size="1.4x" class="custom-class me-1"></edit-3-icon> Edit</NuxtLink></div>
                            <div class="col text-end">
                                <label class="toggle-switch justify-content-end" for="blog1">
                                    <input type="checkbox" class="toggle-switch-input" id="blog1" checked>
                                    <span class="toggle-switch-label">
                                        <span class="toggle-switch-indicator"></span>
                                    </span> 
                                    <span class="active-text ms-1">Active</span>
                                </label>
                            </div>
                        </div>
                    </div>										
                </div>
                <!-- /Blog Post -->
                
                <!-- Blog Post -->
                <div class="col-md-6 col-xl-4 col-sm-12 d-flex">
                    <div class="blog grid-blog">
                        <div class="blog-image">
                            <NuxtLink to="/admin/blog-details"><img class="img-fluid" src="../../assets/admin_img/blog/blog-02.jpg" alt="Post Image"></NuxtLink>
                            <div class="fav-btn">
                                <img src="../../assets/admin_img/icon/eye-icon.png" alt="icon"> 103
                            </div>
                        </div>
                        <div class="blog-content">
                            <ul class="entry-meta meta-item">
                                <li>
                                    <div class="post-author">
                                        <NuxtLink to="/admin/profile">
                                            <img src="../../assets/admin_img/profiles/avatar-05.jpg" alt="Post Author"> 
                                            <span>
                                                <span class="post-title">Dr. Lester </span>
                                                <span class="post-date"><i class="far fa-clock"></i>  2 Dec 2022</span>
                                            </span>
                                        </NuxtLink>
                                    </div>
                                </li>
                            </ul>
                            <h3 class="blog-title"><NuxtLink to="/admin/blog-details">Doccure – Making your clinic painless visit?</NuxtLink></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                        </div>
                        <div class="row">
                            <div class="col"><NuxtLink to="/admin/edit-blog" class="text-success"><edit-3-icon size="1.4x" class="custom-class me-1"></edit-3-icon> Edit</NuxtLink></div>
                            <div class="col text-end">
                                <label class="toggle-switch justify-content-end" for="blog2">
                                    <input type="checkbox" class="toggle-switch-input" id="blog2">
                                    <span class="toggle-switch-label">
                                        <span class="toggle-switch-indicator"></span>
                                    </span> 
                                    <span class="active-text ms-1">Inactive</span>
                                </label>
                            </div>
                        </div>
                    </div>										
                </div>
                <!-- /Blog Post -->
                
                <!-- Blog Post -->
                <div class="col-md-6 col-xl-4 col-sm-12 d-flex">
                    <div class="blog grid-blog">
                        <div class="blog-image">
                            <NuxtLink to="/admin/blog-details"><img class="img-fluid" src="../../assets/admin_img/blog/blog-03.jpg" alt="Post Image"></NuxtLink>
                            <div class="fav-btn">
                                <img src="../../assets/admin_img/icon/eye-icon.png" alt="icon"> 80
                            </div>
                        </div>
                        <div class="blog-content">
                            <ul class="entry-meta meta-item">
                                <li>
                                    <div class="post-author">
                                        <NuxtLink to="/admin/profile">
                                            <img src="../../assets/admin_img/profiles/avatar-07.jpg" alt="Post Author"> 
                                            <span>
                                                <span class="post-title">Dr. Stephen</span>
                                                <span class="post-date"><i class="far fa-clock"></i>  12 Dec 2022</span>
                                            </span>
                                        </NuxtLink>
                                    </div>
                                </li>
                            </ul>
                            <h3 class="blog-title"><NuxtLink to="/admin/blog-details">Doccure – Making your clinic painless visit?</NuxtLink></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                        </div>
                        <div class="row">
                            <div class="col"><NuxtLink to="/admin/edit-blog" class="text-success"><edit-3-icon size="1.4x" class="custom-class me-1"></edit-3-icon> Edit</NuxtLink></div>
                            <div class="col text-end">
                                <label class="toggle-switch justify-content-end" for="blog3">
                                    <input type="checkbox" class="toggle-switch-input" id="blog3" checked>
                                    <span class="toggle-switch-label">
                                        <span class="toggle-switch-indicator"></span>
                                    </span> 
                                    <span class="active-text ms-1">Active</span>
                                </label>
                            </div>
                        </div>
                    </div>										
                </div>
                <!-- /Blog Post -->
                
                <!-- Blog Post -->
                <div class="col-md-6 col-xl-4 col-sm-12 d-flex">
                    <div class="blog grid-blog">
                        <div class="blog-image">
                            <NuxtLink to="/admin/blog-details"><img class="img-fluid" src="../../assets/admin_img/blog/blog-08.jpg" alt="Post Image"></NuxtLink>
                            <div class="fav-btn">
                                <img src="../../assets/admin_img/icon/eye-icon.png" alt="icon"> 103
                            </div>
                        </div>
                        <div class="blog-content">
                            <ul class="entry-meta meta-item">
                                <li>
                                    <div class="post-author">
                                        <NuxtLink to="/admin/profile">
                                            <img src="../../assets/admin_img/profiles/avatar-10.jpg" alt="Post Author"> 
                                            <span>
                                                <span class="post-title">Dr. Paul</span>
                                                <span class="post-date"><i class="far fa-clock"></i> 15 Oct 2022</span>
                                            </span>
                                        </NuxtLink>
                                    </div>
                                </li>
                            </ul>
                            <h3 class="blog-title"><NuxtLink to="/admin/blog-details">Top 15 types of doctors you should know</NuxtLink></h3>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...</p>
                        </div>
                        <div class="row">
                            <div class="col"><NuxtLink to="/admin/edit-blog" class="text-success"><edit-3-icon size="1.4x" class="custom-class me-1"></edit-3-icon> Edit</NuxtLink></div>
                            <div class="col text-end">
                                <label class="toggle-switch justify-content-end" for="blog8">
                                    <input type="checkbox" class="toggle-switch-input" id="blog8" checked>
                                    <span class="toggle-switch-label">
                                        <span class="toggle-switch-indicator"></span>
                                    </span> 
                                    <span class="active-text ms-1">Active</span>
                                </label>
                            </div>
                        </div>
                    </div>										
                </div>
                <!-- /Blog Post -->
                
                <!-- Blog Post -->
                <div class="col-md-6 col-xl-4 col-sm-12 d-flex">
                    <div class="blog grid-blog">
                        <div class="blog-image">
                            <NuxtLink to="/admin/blog-details"><img class="img-fluid" src="../../assets/admin_img/blog/blog-07.jpg" alt="Post Image"></NuxtLink>
                            <div class="fav-btn">
                                <img src="../../assets/admin_img/icon/eye-icon.png" alt="icon"> 225
                            </div>
                        </div>
                        <div class="blog-content">
                            <ul class="entry-meta meta-item">
                                <li>
                                    <div class="post-author">
                                        <NuxtLink to="/admin/profile">
                                            <img src="../../assets/admin_img/profiles/avatar-03.jpg" alt="Post Author"> 
                                            <span>
                                                <span class="post-title">Dr. Jennifer</span>
                                                <span class="post-date"><i class="far fa-clock"></i> 14 Oct 2022</span>
                                            </span>
                                        </NuxtLink>
                                    </div>
                                </li>
                            </ul>
                            <h3 class="blog-title"><NuxtLink to="/admin/blog-details">Choose your own Online Doctor Appointment</NuxtLink></h3>
                            <p>LLorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor...</p>
                        </div>
                        <div class="row">
                            <div class="col"><NuxtLink to="/admin/edit-blog" class="text-success"><edit-3-icon size="1.4x" class="custom-class me-1"></edit-3-icon> Edit</NuxtLink></div>
                            <div class="col text-end">
                                <label class="toggle-switch justify-content-end" for="blog7">
                                    <input type="checkbox" class="toggle-switch-input" id="blog7" checked>
                                    <span class="toggle-switch-label">
                                        <span class="toggle-switch-indicator"></span>
                                    </span> 
                                    <span class="active-text ms-1">Active</span>
                                </label>
                            </div>
                        </div>
                    </div>										
                </div>
                <!-- /Blog Post -->
                
                <!-- Blog Post -->
                <div class="col-md-6 col-xl-4 col-sm-12 d-flex">
                    <div class="blog grid-blog">
                        <div class="blog-image">
                            <NuxtLink to="/admin/blog-details"><img class="img-fluid" src="../../assets/admin_img/blog/blog-09.jpg" alt="Post Image"></NuxtLink>
                            <div class="fav-btn">
                                <img src="../../assets/admin_img/icon/eye-icon.png" alt="icon"> 80
                            </div>
                        </div>
                        <div class="blog-content">
                            <ul class="entry-meta meta-item">
                                <li>
                                    <div class="post-author">
                                        <NuxtLink to="/admin/profile">
                                            <img src="../../assets/admin_img/profiles/avatar-04.jpg" alt="Post Author"> 
                                            <span>
                                                <span class="post-title">Dr. Elizabeth</span>
                                                <span class="post-date"><i class="far fa-clock"></i> 20 Oct 2022</span>
                                            </span>
                                        </NuxtLink>
                                    </div>
                                </li>
                            </ul>
                            <h3 class="blog-title"><NuxtLink to="/admin/blog-details">How to Keep Your Brain Sharp as You Age</NuxtLink></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor...</p>
                        </div>
                        <div class="row">
                            <div class="col"><NuxtLink to="/admin/edit-blog" class="text-success"><edit-3-icon size="1.4x" class="custom-class me-1"></edit-3-icon> Edit</NuxtLink></div>
                            <div class="col text-end">
                                <label class="toggle-switch justify-content-end" for="blog9">
                                    <input type="checkbox" class="toggle-switch-input" id="blog9" checked>
                                    <span class="toggle-switch-label">
                                        <span class="toggle-switch-indicator"></span>
                                    </span> 
                                    <span class="active-text ms-1">Active</span>
                                </label>
                            </div>
                        </div>
                    </div>										
                </div>
                <!-- /Blog Post -->
                
                <!-- Blog Post -->
                <div class="col-md-6 col-xl-4 col-sm-12 d-flex">
                    <div class="blog grid-blog">
                        <div class="blog-image">
                            <NuxtLink to="/admin/blog-details"><img class="img-fluid" src="../../assets/admin_img/blog/blog-06.jpg" alt="Post Image"></NuxtLink>
                            <div class="fav-btn">
                                <img src="../../assets/admin_img/icon/eye-icon.png" alt="icon"> 80
                            </div>
                        </div>
                        <div class="blog-content">
                            <ul class="entry-meta meta-item">
                                <li>
                                    <div class="post-author">
                                        <NuxtLink to="/admin/profile">
                                            <div class="empty-user"><user-icon size="1.4x" class="custom-class"></user-icon> </div>
                                            <span>
                                                <span class="post-title">Dr. Daniel</span>
                                                <span class="post-date"><i class="far fa-clock"></i>   22 Nov 2022</span>
                                            </span>
                                        </NuxtLink>
                                    </div>
                                </li>
                            </ul>
                            <h3 class="blog-title"><NuxtLink to="/admin/blog-details">Simple steps to make your doctor visits excep....</NuxtLink></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor...</p>
                        </div>
                        <div class="row">
                            <div class="col"><NuxtLink to="/admin/edit-blog" class="text-success"><edit-3-icon size="1.4x" class="custom-class me-1"></edit-3-icon> Edit</NuxtLink></div>
                            <div class="col text-end">
                                <label class="toggle-switch justify-content-end" for="blog6">
                                    <input type="checkbox" class="toggle-switch-input" id="blog6" checked>
                                    <span class="toggle-switch-label">
                                        <span class="toggle-switch-indicator"></span>
                                    </span> 
                                    <span class="active-text ms-1">Active</span>
                                </label>
                            </div>
                        </div>
                    </div>										
                </div>
                <!-- /Blog Post -->
                
            </div>
            
            <!-- Pagination -->
            <div class="row ">
                <div class="col-md-12">
                    <div class="pagination-tab mt-md-5 d-flex justify-content-center">
                        <ul class="pagination mb-0">
                            <li class="page-item disabled">
                                <a class="page-link" href="javascript:void(0);" tabindex="-1"><chevron-left-icon size="1.4x" class="custom-class mr-2"></chevron-left-icon>Previous</a>
                            </li>
                            <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                            <li class="page-item active">
                                <a class="page-link" href="javascript:void(0);">2 <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                            <li class="page-item"><a class="page-link" href="javascript:void(0);">4</a></li>
                            <li class="page-item">
                                <a class="page-link" href="javascript:void(0);">Next<chevron-right-icon size="1.4x" class="custom-class ml-2"></chevron-right-icon></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- /Pagination -->
            
        </div>
        <!-- /Blog List -->
        
    </div>
<Nuxt />
</div>
</template>

<script>
import { Edit3Icon } from 'vue-feather-icons'
import { UserIcon } from 'vue-feather-icons'
import { ChevronLeftIcon } from 'vue-feather-icons'
import { ChevronRightIcon } from 'vue-feather-icons'
export default {
    components: {
    Edit3Icon,
    UserIcon,
    ChevronLeftIcon,
    ChevronRightIcon
  },
    mounted() {
        if ($('.datatable').length > 0) {
		$('#data-tables').DataTable({
			"language": {
			    //search: ' ',
				//searchPlaceholder: "Search...",
				paginate: {
				  next: 'Next <i class="fas fa-chevron-right ms-2"></i>',
				  previous: '<i class="fas fa-chevron-left me-2"></i> Previous'
			  
				}
			 },
			//"bInfo": false,
			"bFilter": false,
			"bInfo": false,
			"bLengthChange": false,
			initComplete: (settings, json)=>{
				$('.dataTables_paginate').appendTo('#tablepagination');
				//$('.dataTables_filter').appendTo('#tableSearch');
			},			
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
    },
    layout: 'admin',
	computed: {
       currentPath() {
           return this.$route.name
	   },
	}
}
</script>