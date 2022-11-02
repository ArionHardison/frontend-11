<template>
<div>
<!-- Page Wrapper -->
<div class="page-wrapper">
    <div class="content container-fluid">
    
        <!-- Page Header -->
        <div class="page-header">
            <div class="row align-items-center">
                <div class="col-md-12 d-flex justify-content-end">
                    <div class="doc-badge me-3">Total Products <span class="ms-1">48</span></div>
                    <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#addproduct" class="btn btn-primary btn-add"><plus-square-icon size="1.4x" class="custom-class me-1"></plus-square-icon> Add New</a>
                </div>
            </div>
        </div>
        <!-- /Page Header -->
        
        <!-- Product List -->
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header border-bottom-0">
                        <div class="row align-items-center">
                            <div class="col">
                                <h5 class="card-title">Product List</h5>
                            </div>
                            <div class="col-auto d-flex flex-wrap">
                                <div class="form-custom me-2">
                                    <div id="tableSearch"  class="dataTables_wrapper"></div>
                                </div>
                                <div class="SortBy">
                                    <div class="selectBoxes order-by">
                                        <p class="mb-0"><img src="../../assets/admin_img/icon/sort.png" class="me-2" alt="icon"> Order by </p>
                                        <span class="down-icon"><chevron-down-icon size="1.4x" class="custom-class"></chevron-down-icon></span>
                                    </div>						  
                                    <div id="checkBox">
                                        <form>
                                            <p class="lab-title">Order By </p>
                                            <label class="custom_radio w-100">
                                                <input type="radio" name="sort">
                                                <span class="checkmark"></span> ID
                                            </label>
                                            <label class="custom_radio w-100">
                                                <input type="radio" name="sort">
                                                <span class="checkmark"></span> Amount
                                            </label>
                                            <label class="custom_radio w-100 mb-4">
                                                <input type="radio" name="sort">
                                                <span class="checkmark"></span> Date Created
                                            </label>
                                            <p class="lab-title">Sort By</p>
                                            <label class="custom_radio w-100">
                                                <input type="radio" name="sort">
                                                <span class="checkmark"></span> Ascending
                                            </label>
                                            <label class="custom_radio w-100 mb-4">
                                                <input type="radio" name="sort">
                                                <span class="checkmark"></span> Descending
                                            </label>
                                            <NuxtLink to="/admin/product-list">
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
                                       <th>Product</th>
                                       <th>Category</th>
                                       <th>Date</th>
                                       <th>Amount</th>
                                       <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>#4546</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal"><img class="avatar avatar-img" src="../../assets/admin_img/products/product1.jpg" alt="User Image"></a>
                                                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal"><span>Safi Natural Blood Purifier</span> <span>Syrup 200 ml</span></a>
                                            </h2>
                                        </td>
                                        <td>Neuromodulation</td>
                                        <td>12/20/2022</td>
                                        <td>$330.00</td>
                                        <td class="text-end">
                                            <div class="actions">
                                                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal" class="text-black">
                                                    <edit-3-icon size="1.4x" class="custom-class me-1"></edit-3-icon> Edit
                                                </a>
                                                <a class="text-danger" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                                    <trash-2-icon size="1.4x" class="custom-class me-1"></trash-2-icon> Delete
                                                </a>															
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>#8774</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal"><img class="avatar avatar-img" src="../../assets/admin_img/products/product2.jpg" alt="User Image"></a>
                                                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal"><span>Benadrys Cough Syrup </span> <span>100 ml</span></a>
                                            </h2>
                                        </td>
                                        <td>Interventional devices</td>
                                        <td>12/20/2022</td>
                                        <td>$330.00</td>
                                        <td class="text-end">
                                            <div class="actions">
                                                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal" class="text-black">
                                                    <edit-3-icon size="1.4x" class="custom-class me-1"></edit-3-icon> Edit
                                                </a>
                                                <a class="text-danger" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                                    <trash-2-icon size="1.4x" class="custom-class me-1"></trash-2-icon> Delete
                                                </a>															
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>#4546</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal"><img class="avatar avatar-img" src="../../assets/admin_img/products/product3.jpg" alt="User Image"></a>
                                                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal"><span>Natural Syrup for bronchtas</span> <span>200 ml</span></a>
                                            </h2>
                                        </td>
                                        <td>Ventricular assist devices</td>
                                        <td>12/20/2022</td>
                                        <td>$330.00</td>
                                        <td class="text-end">
                                            <div class="actions">
                                                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal" class="text-black">
                                                    <edit-3-icon size="1.4x" class="custom-class me-1"></edit-3-icon> Edit
                                                </a>
                                                <a class="text-danger" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                                    <trash-2-icon size="1.4x" class="custom-class me-1"></trash-2-icon> Delete
                                                </a>															
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>#4546</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal"><img class="avatar avatar-img" src="../../assets/admin_img/products/product4.jpg" alt="User Image"></a>
                                                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal"><span>Safi Natural Blood Purifier</span> <span>Syrup 200 ml</span></a>
                                            </h2>
                                        </td>
                                        <td>surgical systems</td>
                                        <td>12/20/2022</td>
                                        <td>$330.00</td>
                                        <td class="text-end">
                                            <div class="actions">
                                                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal" class="text-black">
                                                    <edit-3-icon size="1.4x" class="custom-class me-1"></edit-3-icon> Edit
                                                </a>
                                                <a class="text-danger" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                                    <trash-2-icon size="1.4x" class="custom-class me-1"></trash-2-icon> Delete
                                                </a>															
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>#5656</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal"><img class="avatar avatar-img" src="../../assets/admin_img/products/product5.jpg" alt="User Image"></a>
                                                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal"><span>Headache pills</span> <span>20 tablets</span></a>
                                            </h2>
                                        </td>
                                        <td>Assist devices</td>
                                        <td>12/20/2022</td>
                                        <td>$330.00</td>
                                        <td class="text-end">
                                            <div class="actions">
                                                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal" class="text-black">
                                                    <edit-3-icon size="1.4x" class="custom-class me-1"></edit-3-icon> Edit
                                                </a>
                                                <a class="text-danger" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                                    <trash-2-icon size="1.4x" class="custom-class me-1"></trash-2-icon> Delete
                                                </a>															
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>#4145</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal"><img class="avatar avatar-img" src="../../assets/admin_img/products/product6.jpg" alt="User Image"></a>
                                                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal"><span>Natura ayurvedic medicine</span> <span>15 pils</span></a>
                                            </h2>
                                        </td>
                                        <td>Ventricular systems</td>
                                        <td>12/20/2022</td>
                                        <td>$330.00</td>
                                        <td class="text-end">
                                            <div class="actions">
                                                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal" class="text-black">
                                                    <edit-3-icon size="1.4x" class="custom-class me-1"></edit-3-icon> Edit
                                                </a>
                                                <a class="text-danger" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                                    <trash-2-icon size="1.4x" class="custom-class me-1"></trash-2-icon> Delete
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
        <!-- /Product List -->
    </div>
</div>
<!-- /Page Wrapper -->

<!-- Modal -->
<div class="modal fade contentmodal" id="addproduct" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content doctor-profile">
            <div class="modal-header">
                <h3 class="mb-0">Add Product</h3>
                <button type="button" class="close-btn" data-bs-dismiss="modal" aria-label="Close"><x-circle-icon size="1.4x" class="custom-class"></x-circle-icon></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="add-wrap">
                        <div class="form-group form-focus">
                            <input type="text" class="form-control floating">
                            <label class="focus-label">Product Name <span class="text-danger">*</span></label>
                        </div>
                        <div class="form-group">
                            <select class="select">
                                <option>Select Category</option>
                                <option>Pharmacy</option>
                                <option>Hospital</option>
                            </select>
                        </div>
                        <div class="form-group form-focus">
                            <input type="text" class="form-control floating">
                            <label class="focus-label">Price <span class="text-danger">*</span></label>
                        </div>
                        <div class="change-photo-btn">
                            <div><upload-icon size="1.4x" class="custom-class"></upload-icon>
                            <p>Upload File</p></div>
                            <input type="file" class="upload">
                            <span class="file-upload-text"></span>
                        </div>
                        <p class="file-name text-success">Successfully Product image.jpg uploaded <a href="javascript:void(0);" class="text-danger"><x-icon size="1.4x" class="custom-class"></x-icon></a></p>
                        <NuxtLink to="/admin/product-list">
                        <div class="submit-section">
                            <button type="submit" class="btn btn-primary btn-save">Save Changes</button>
                        </div>	
                        </NuxtLink>						
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<!-- /Modal -->

<!-- Modal -->
<div class="modal fade contentmodal" id="editModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content doctor-profile">
            <div class="modal-header">
                <h3 class="mb-0">Edit Product</h3>
                <button type="button" class="close-btn" data-bs-dismiss="modal" aria-label="Close"><x-circle-icon size="1.4x" class="custom-class"></x-circle-icon></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="add-wrap">
                        <div class="form-group form-focus">
                            <input type="text" class="form-control floating" value="Safi Natural">
                            <label class="focus-label">Product Name <span class="text-danger">*</span></label>
                        </div>
                        <div class="form-group">
                            <select class="select">
                                <option>Select Category</option>
                                <option>surgical systems</option>
                                <option selected>Neuromodulation</option>
                            </select>
                        </div>
                        <div class="form-group form-focus">
                            <input type="text" class="form-control floating" value="$330.00">
                            <label class="focus-label">Price <span class="text-danger">*</span></label>
                        </div>
                        <div class="change-photo-btn">
                            <div><upload-icon size="1.4x" class="custom-class"></upload-icon>
                            <p>Upload File</p></div>
                            <input type="file" class="upload">
                            <span class="file-upload-text"></span>
                        </div>
                        <p class="file-name text-success">Successfully Product image.jpg uploaded <a href="javascript:void(0);" class="text-danger"><x-icon size="1.4x" class="custom-class"></x-icon></a></p>
                        <NuxtLink to="/admin/product-list">
                        <div class="submit-section">
                            <button type="submit" class="btn btn-primary btn-save">Save Changes</button>
                        </div>		
                    </NuxtLink>						
                    </div>
                </form>
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
                <div class="delete-wrap text-center">
                    <div class="del-icon"><x-circle-icon size="1.4x" class="custom-class"></x-circle-icon></div>
                    <h2>Sure you Want to delete</h2>
                    <p>“Product”</p>
                    <div class="submit-section">
                        <NuxtLink to="/admin/product-list" class="btn btn-success me-2">Yes</NuxtLink>
                        <a href="javascript:void(0);" class="btn btn-danger" data-bs-dismiss="modal">No</a>
                    </div>								
                </div>
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
import { PlusSquareIcon } from 'vue-feather-icons'
import { Edit3Icon } from 'vue-feather-icons'
import { Trash2Icon } from 'vue-feather-icons'
import { XCircleIcon } from 'vue-feather-icons'
import { UploadIcon } from 'vue-feather-icons'
import { XIcon } from 'vue-feather-icons'
export default {
    components: {
    ChevronDownIcon,
    PlusSquareIcon,
    Edit3Icon,
    Trash2Icon,
    XCircleIcon,
    UploadIcon,
    XIcon
  },
    mounted() {
        if ($('.select').length > 0) {
		$('.select').select2({
			minimumResultsForSearch: -1,
			width: '100%'
		});
	}
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