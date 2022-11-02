<template>
<div>
<!-- Page Wrapper -->
<div class="page-wrapper">
    <div class="content container-fluid">
    
        <!-- Page Header -->
        <div class="page-header">
            <div class="row align-items-center">
                <div class="col-md-12 d-flex justify-content-end">
                    <div class="doc-badge me-3">Total Ratings <span class="ms-1">48</span></div>
                    <div class="SortBy">
                        <div class="selectBoxes order-by">
                            <p class="mb-0"><img src="../../assets/admin_img/icon/sort.png" class="me-2" alt="icon"> Order by </p>
                            <span class="down-icon"><chevron-down-icon size="1.4x" class="custom-class"></chevron-down-icon></span>
                        </div>						  
                        <div id="checkBox">
                            <form>
                                <p class="lab-title">Sort By</p>
                                <label class="custom_radio w-100">
                                    <input type="radio" name="sort">
                                    <span class="checkmark"></span> Ascending
                                </label>
                                <label class="custom_radio w-100 mb-4">
                                    <input type="radio" name="sort">
                                    <span class="checkmark"></span> Descending
                                </label>
                                <NuxtLink to="/admin/ratings">
                                <button type="submit" class="btn w-100 btn-primary">Apply</button>
                            </NuxtLink>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Page Header -->
        
        <!-- Ratings -->
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header border-bottom-0">
                        <div class="row align-items-center">
                            <div class="col">
                                <h5 class="card-title">Ratings</h5>
                            </div>
                            <div class="col-auto custom-list d-flex">
                                <div class="form-custom me-2">
                                    <div id="tableSearch"  class="dataTables_wrapper"></div>
                                </div>
                                <div class="multipleSelection">
                                    <div class="selectBox">
                                        <p class="mb-0"><filter-icon size="1.4x" class="custom-class me-1"></filter-icon> Filter </p>
                                        <span class="down-icon"><chevron-down-icon size="1.4x" class="custom-class"></chevron-down-icon></span>
                                    </div>						  
                                    <div id="checkBoxes">
                                        <form>
                                            <p class="lab-title">Ratings</p>
                                            <label class="custom_check w-100">
                                                <input type="checkbox" name="year" checked>
                                                <span class="checkmark"></span> 5
                                            </label>
                                            <label class="custom_check w-100">
                                                <input type="checkbox" name="year">
                                                <span class="checkmark"></span> 4
                                            </label>
                                            <label class="custom_check w-100">
                                                <input type="checkbox" name="year">
                                                <span class="checkmark"></span> 3
                                            </label>
                                            <label class="custom_check w-100">
                                                <input type="checkbox" name="year">
                                                <span class="checkmark"></span> 2
                                            </label>
                                            <label class="custom_check w-100">
                                                <input type="checkbox" name="year">
                                                <span class="checkmark"></span> 1
                                            </label>
                                            <NuxtLink to="/admin/ratings">
                                            <button type="submit" class="btn w-100 btn-primary">Apply</button>
                                            </NuxtLink>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body p-0">				
                        <div class="table-responsive">									
                            <table class="datatable table table-borderless hover-table" id="data-tables">
                                <thead class="thead-light">
                                    <tr>
                                       <th>ID</th>
                                       <th>Patient</th>
                                       <th>Doctor</th>
                                       <th>Consultation Date</th>
                                       <th class="desc-info">Ratings</th>
                                       <th>Description</th>
                                       <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><a href="javascript:void(0);" class="text-black" data-bs-toggle="modal" data-bs-target="#Ratings">#4546</a></td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink to="/admin/profile"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-07.jpg" alt="User Image"></NuxtLink>
                                                <NuxtLink to="/admin/profile"><span class="user-name">Bess Twishes</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink class="avatar-pos" to="/admin/profile"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-02.jpg" alt="User Image"></NuxtLink>
                                                <NuxtLink to="/admin/profile" class="user-name"><span class="text-muted">Dr. Rayan</span> <span class="tab-subtext">Gyanoclogist</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
                                        <td>
                                            <div class="ratings">
                                                <i class="far fa-star filled"></i>
                                                <i class="far fa-star filled"></i>
                                                <i class="far fa-star filled"></i>
                                                <i class="far fa-star filled"></i>
                                                <i class="far fa-star"></i>
                                            </div>
                                        </td>
                                        <td class="desc-info">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                                        <td class="text-end">
                                            <div class="actions">
                                                <a class="text-danger" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                                    <trash-2-icon size="1.4x" class="custom-class"></trash-2-icon> Delete
                                                </a>															
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><a href="javascript:void(0);" class="text-black" data-bs-toggle="modal" data-bs-target="#Ratings">#8774</a></td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink to="/admin/profile"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-12.jpg" alt="User Image"></NuxtLink>
                                                <NuxtLink to="/admin/profile"><span class="user-name">Bess Twishes</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink class="avatar-pos" to="/admin/profile"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-05.jpg" alt="User Image"></NuxtLink>
                                                <NuxtLink to="/admin/profile" class="user-name"><span class="text-muted">Dr. Rayan</span> <span class="tab-subtext">Hair Specialities</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
                                        <td>
                                            <div class="ratings">
                                                <i class="far fa-star filled"></i>
                                                <i class="far fa-star filled"></i>
                                                <i class="far fa-star filled"></i>
                                                <i class="far fa-star filled"></i>
                                                <i class="far fa-star"></i>
                                            </div>
                                        </td>
                                        <td class="desc-info">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                                        <td class="text-end">
                                            <div class="actions">
                                                <a class="text-danger" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                                    <trash-2-icon size="1.4x" class="custom-class"></trash-2-icon> Delete
                                                </a>															
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><a href="javascript:void(0);" class="text-black" data-bs-toggle="modal" data-bs-target="#Ratings">#4546</a></td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink to="/admin/profile"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-02.jpg" alt="User Image"></NuxtLink>
                                                <NuxtLink to="/admin/profile"><span class="user-name">Abdul Aziz Lazis</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink class="avatar-pos" to="/admin/profile"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-05.jpg" alt="User Image"></NuxtLink>
                                                <NuxtLink to="/admin/profile" class="user-name"><span class="text-muted">Dr. Lester</span> <span class="tab-subtext">Orthopaedics</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
                                        <td>
                                            <div class="ratings">
                                                <i class="far fa-star filled"></i>
                                                <i class="far fa-star filled"></i>
                                                <i class="far fa-star filled"></i>
                                                <i class="far fa-star filled"></i>
                                                <i class="far fa-star"></i>
                                            </div>
                                        </td>
                                        <td class="desc-info">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                                        <td class="text-end">
                                            <div class="actions">
                                                <a class="text-danger" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                                    <trash-2-icon size="1.4x" class="custom-class"></trash-2-icon> Delete
                                                </a>															
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><a href="javascript:void(0);" class="text-black" data-bs-toggle="modal" data-bs-target="#Ratings">#4546</a></td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink to="/admin/profile"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-05.jpg" alt="User Image"></NuxtLink>
                                                <NuxtLink to="/admin/profile"><span class="user-name">Alex Siauw</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink class="avatar-pos" to="/admin/profile"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-02.jpg" alt="User Image"></NuxtLink>
                                                <NuxtLink to="/admin/profile" class="user-name"><span class="text-muted">Dr. Clint</span> <span class="tab-subtext">Neurology</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
                                        <td>
                                            <div class="ratings">
                                                <i class="far fa-star filled"></i>
                                                <i class="far fa-star filled"></i>
                                                <i class="far fa-star filled"></i>
                                                <i class="far fa-star filled"></i>
                                                <i class="far fa-star"></i>
                                            </div>
                                        </td>
                                        <td class="desc-info">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                                        <td class="text-end">
                                            <div class="actions">
                                                <a class="text-danger" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                                    <trash-2-icon size="1.4x" class="custom-class"></trash-2-icon> Delete
                                                </a>															
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><a href="javascript:void(0);" class="text-black" data-bs-toggle="modal" data-bs-target="#Ratings">#4546</a></td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink to="/admin/profile"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-04.jpg" alt="User Image"></NuxtLink>
                                                <NuxtLink to="/admin/profile"><span class="user-name">Dr. Sofia Brient</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink class="avatar-pos" to="/admin/profile"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-05.jpg" alt="User Image"></NuxtLink>
                                                <NuxtLink to="/admin/profile" class="user-name"><span class="text-muted">Dr. Lester</span> <span class="tab-subtext">Orthopaedics</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
                                        <td>
                                            <div class="ratings">
                                                <i class="far fa-star filled"></i>
                                                <i class="far fa-star filled"></i>
                                                <i class="far fa-star filled"></i>
                                                <i class="far fa-star filled"></i>
                                                <i class="far fa-star"></i>
                                            </div>
                                        </td>
                                        <td class="desc-info">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                                        <td class="text-end">
                                            <div class="actions">
                                                <a class="text-danger" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                                    <trash-2-icon size="1.4x" class="custom-class"></trash-2-icon> Delete
                                                </a>															
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><a href="javascript:void(0);" class="text-black" data-bs-toggle="modal" data-bs-target="#Ratings">#4546</a></td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink to="/admin/profile"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-11.jpg" alt="User Image"></NuxtLink>
                                                <NuxtLink to="/admin/profile"><span class="user-name">Deborah</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink class="avatar-pos" to="/admin/profile"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-02.jpg" alt="User Image"></NuxtLink>
                                                <NuxtLink to="/admin/profile" class="user-name"><span class="text-muted">Dr. Clint</span> <span class="tab-subtext">Neurology</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
                                        <td>
                                            <div class="ratings">
                                                <i class="far fa-star filled"></i>
                                                <i class="far fa-star filled"></i>
                                                <i class="far fa-star filled"></i>
                                                <i class="far fa-star filled"></i>
                                                <i class="far fa-star"></i>
                                            </div>
                                        </td>
                                        <td class="desc-info">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                                        <td class="text-end">
                                            <div class="actions">
                                                <a class="text-danger" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                                    <trash-2-icon size="1.4x" class="custom-class"></trash-2-icon> Delete
                                                </a>															
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><a href="javascript:void(0);" class="text-black" data-bs-toggle="modal" data-bs-target="#Ratings">#4546</a></td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink to="/admin/profile"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-03.jpg" alt="User Image"></NuxtLink>
                                                <NuxtLink to="/admin/profile"><span class="user-name">Sofia</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink class="avatar-pos" to="/admin/profile"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-10.jpg" alt="User Image"></NuxtLink>
                                                <NuxtLink to="/admin/profile" class="user-name"><span class="text-muted">Dr. Richard</span> <span class="tab-subtext">Orthopaedics</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
                                        <td>
                                            <div class="ratings">
                                                <i class="far fa-star filled"></i>
                                                <i class="far fa-star filled"></i>
                                                <i class="far fa-star filled"></i>
                                                <i class="far fa-star filled"></i>
                                                <i class="far fa-star"></i>
                                            </div>
                                        </td>
                                        <td class="desc-info">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                                        <td class="text-end">
                                            <div class="actions">
                                                <a class="text-danger" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                                    <trash-2-icon size="1.4x" class="custom-class"></trash-2-icon> Delete
                                                </a>															
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><a href="javascript:void(0);" class="text-black" data-bs-toggle="modal" data-bs-target="#Ratings">#4546</a></td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink to="/admin/profile"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-13.jpg" alt="User Image"></NuxtLink>
                                                <NuxtLink to="/admin/profile"><span class="user-name">Paul</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink class="avatar-pos" to="/admin/profile"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-02.jpg" alt="User Image"></NuxtLink>
                                                <NuxtLink to="/admin/profile" class="user-name"><span class="text-muted">Dr. Clint</span> <span class="tab-subtext">Neurology</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
                                        <td>
                                            <div class="ratings">
                                                <i class="far fa-star filled"></i>
                                                <i class="far fa-star filled"></i>
                                                <i class="far fa-star filled"></i>
                                                <i class="far fa-star filled"></i>
                                                <i class="far fa-star"></i>
                                            </div>
                                        </td>
                                        <td class="desc-info">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                                        <td class="text-end">
                                            <div class="actions">
                                                <a class="text-danger" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                                    <trash-2-icon size="1.4x" class="custom-class"></trash-2-icon> Delete
                                                </a>															
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
                <div id="tablepagination"  class="dataTables_wrapper"></div>
            </div>
        </div>
        <!-- /Ratings -->
    </div>
</div>
<!-- /Page Wrapper -->

<!-- Modal -->
<div class="modal fade contentmodal" id="Ratings" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content doctor-profile">
            <div class="modal-header justify-content-center border-bottom-0">
            <div>
                <h4 class="modal-title">Rating Details</h4>
                <button type="button" class="close-btn pos-top" data-bs-dismiss="modal" aria-label="Close"><x-circle-icon size="1.4x" class="custom-class"></x-circle-icon></button>
            </div>
            </div>
            <div class="modal-body">
                <div class="rating-wrapper mb-2">
                    <h5>Consultation ID</h5>
                    <p>#454445</p>           
                    <h5>Reviews</h5>
                    <div class="ratings mb-3">
                        <i class="far fa-star filled"></i>
                        <i class="far fa-star filled"></i>
                        <i class="far fa-star filled"></i>
                        <i class="far fa-star filled"></i>
                        <i class="far fa-star"></i>
                    </div>        
                    <h5>Description</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>                 
                </div>
            </div>
        </div>
    </div>
</div>
<!-- /Modal -->

<!-- Modal -->
<div class="modal fade contentmodal" id="deleteModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content doctor-profile">
            <div class="modal-header border-bottom-0 justify-content-end">
                <button type="button" class="close-btn" data-bs-dismiss="modal" aria-label="Close"><x-circle-icon size="1.4x" class="custom-class"></x-circle-icon></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="delete-wrap text-center">
                        <div class="del-icon"><x-circle-icon size="1.4x" class="custom-class"></x-circle-icon></div>
                        <h2>Sure you Want to delete</h2>
                        <p>“Rating”</p>
                        <NuxtLink to="/admin/ratings">
                        <div class="submit-section">
                            <button type="submit" class="btn btn-success me-2">Yes</button>
                            <a href="javascript:void(0);" class="btn btn-danger" data-bs-dismiss="modal">No</a>
                        </div>		
                    </NuxtLink>						
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<!-- /Modal -->
<Nuxt />
</div>
</template>
<script>
import { ChevronDownIcon } from 'vue-feather-icons'
import { FilterIcon } from 'vue-feather-icons'
import { Trash2Icon } from 'vue-feather-icons'
import { UserIcon } from 'vue-feather-icons'
import { XCircleIcon } from 'vue-feather-icons'
export default {
    components: {
    ChevronDownIcon,
    FilterIcon,
    Trash2Icon,
    UserIcon,
    XCircleIcon
  },
    mounted() {
        if ($('.datatable').length > 0) {
		$('#data-tables').DataTable({
			"language": {
			//	search: ' ',
			//	searchPlaceholder: "Search...",
				paginate: {
				  next: 'Next <i class="fas fa-chevron-right ms-2"></i>',
				  previous: '<i class="fas fa-chevron-left me-2"></i> Previous'
			  
				}
			 },
		//	"bInfo": false,
			"bFilter": false,
			"bInfo": false,
			"bLengthChange": false,
			initComplete: (settings, json)=>{
				$('.dataTables_paginate').appendTo('#tablepagination');
			//	$('.dataTables_filter').appendTo('#tableSearch');
			},			
		});
	}
    if($('#totincome-report').length > 0) {
	var options = {
			series: [{
				name: "Video Call",
				data: [0, 2.5, 1, 3, 4, 2, 3, 2, 4]
			},
			{
				name: "Audio Call",
				data: [0, 2, 4, 4.3, 4, 2.5, 3.5, 2.5, 4, 3]
			},
			{
				name: "Chat",
				data: [0, 4, 4.5, 3.8, 4, 2, 3, 3.5, 4, 3]
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
		markers: {
			size: 3,
		},
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight',
		  width: 1,
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
          categories: ['', '22/11/2021', '23/11/2021', '24/11/2021', '25/11/2021', '26/11/2021', '27/11/2021', '28/11/2021', '25/11/2021', '25/11/2021'],
			}
    };

    var chart = new ApexCharts(document.querySelector("#totincome-report"), options);
    chart.render();
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