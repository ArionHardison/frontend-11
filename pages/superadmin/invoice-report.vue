<template>
<div class="main-wrapper">
<!-- Page Wrapper -->
<div class="page-wrapper">
    <div class="content container-fluid">
        
        <!-- Page Header -->
        <div class="page-header">
            <div class="row">
                <div class="col-sm-12">
                    <h3 class="page-title">Invoice Reports</h3>
                </div>
            </div>
        </div>
        <!-- /Page Header -->

        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header border-bottom-0">
                        <div class="row align-items-center">
                            <div class="col">
                                <h5 class="card-title">Invoice Reports List</h5>
                            </div>
                            <div class="col-auto custom-list d-flex">
                                <div class="form-custom me-2">
                                    <div id="tableSearch"  class="dataTables_wrapper"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="datatable table table-borderless hover-table" id="data-tables">
                                <thead class="thead-light">
                                    <tr>
                                        <th>Invoice Number</th>
                                        <th>Medicine Name</th>
                                        <th>Total Amount</th>
                                        <th>Created Date</th>
                                        <th class="text-center">Status</th>
                                        <th class="text-end">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><NuxtLink to="/superadmin/invoice">#IN0001</NuxtLink></td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a href="javascript:void(0);"><img class="avatar avatar-img" src="../../assets/pharmacy_img/products/product1.jpg" alt="User Image"> Abilify</a>
                                            </h2>
                                        </td>
                                        <td>$100.00</td>
                                        <td>9 Sep 2019</td>
                                        <td class="text-center">
                                            <span class="badge rounded-pill bg-success inv-badge">Paid</span>
                                        </td>
                                        <td class="text-end">
                                            <div class="actions">
                                                <a class="text-black" data-bs-toggle="modal" href="#edit_specialities_details">
                                                    <edit-3-icon size="1.4x" class="custom-class me-1"></edit-3-icon> Edit
                                                </a>
                                                <a  data-bs-toggle="modal" href="#delete_modal" class="text-danger">
                                                    <trash-2-icon size="1.4x" class="custom-class me-1"></trash-2-icon> Delete
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><NuxtLink to="/superadmin/invoice">#IN0002</NuxtLink></td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a href="javascript:void(0);"><img class="avatar avatar-img" src="../../assets/pharmacy_img/products/product2.jpg" alt="User Image"> Actamin</a>
                                            </h2>
                                        </td>
                                        <td>$200.00</td>
                                        <td>29 Oct 2019</td>
                                        <td class="text-center">
                                            <span class="badge rounded-pill bg-success inv-badge">Paid</span>
                                        </td>
                                        <td class="text-end">
                                            <div class="actions">
                                                <a class="text-black" data-bs-toggle="modal" href="#edit_specialities_details">
                                                    <edit-3-icon size="1.4x" class="custom-class me-1"></edit-3-icon> Edit
                                                </a>
                                                <a  data-bs-toggle="modal" href="#delete_modal" class="text-danger">
                                                    <trash-2-icon size="1.4x" class="custom-class me-1"></trash-2-icon> Delete
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><NuxtLink to="/superadmin/invoice">#IN0003</NuxtLink></td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a href="javascript:void(0);"><img class="avatar avatar-img" src="../../assets/pharmacy_img/products/product3.jpg" alt="User Image"> Actamin</a>
                                            </h2>
                                        </td>
                                        <td>$250.00</td>
                                        <td>25 Sep 2019</td>
                                        <td class="text-center">
                                            <span class="badge rounded-pill bg-danger inv-badge">Pending</span>
                                        </td>
                                        <td class="text-end">
                                            <div class="actions">
                                                <a class="text-black" data-bs-toggle="modal" href="#edit_specialities_details">
                                                    <edit-3-icon size="1.4x" class="custom-class me-1"></edit-3-icon> Edit
                                                </a>
                                                <a  data-bs-toggle="modal" href="#delete_modal" class="text-danger">
                                                    <trash-2-icon size="1.4x" class="custom-class me-1"></trash-2-icon> Delete
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><NuxtLink to="/superadmin/invoice">#IN0004</NuxtLink></td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a href="javascript:void(0);"><img class="avatar avatar-img" src="../../assets/pharmacy_img/products/product4.jpg" alt="User Image"> Abilify</a>
                                            </h2>
                                        </td>
                                        <td>$150.00</td>
                                        <td>9 Oct 2019</td>
                                        <td class="text-center">
                                            <span class="badge rounded-pill bg-warning inv-badge">Unpaid</span>
                                        </td>
                                        <td class="text-end">
                                            <div class="actions">
                                                <a class="text-black" data-bs-toggle="modal" href="#edit_specialities_details">
                                                    <edit-3-icon size="1.4x" class="custom-class me-1"></edit-3-icon> Edit
                                                </a>
                                                <a  data-bs-toggle="modal" href="#delete_modal" class="text-danger">
                                                    <trash-2-icon size="1.4x" class="custom-class me-1"></trash-2-icon> Delete
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><NuxtLink to="/superadmin/invoice">#IN0005</NuxtLink></td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a href="javascript:void(0);"><img class="avatar avatar-img" src="../../assets/pharmacy_img/products/product5.jpg" alt="User Image"> Actamin</a>
                                            </h2>
                                        </td>
                                        <td>$350.00</td>
                                        <td>19 Nov 2019</td>
                                        <td class="text-center">
                                            <span class="badge rounded-pill bg-success inv-badge">Paid</span>
                                        </td>
                                        <td class="text-end">
                                            <div class="actions">
                                                <a class="text-black" data-bs-toggle="modal" href="#edit_specialities_details">
                                                    <edit-3-icon size="1.4x" class="custom-class me-1"></edit-3-icon> Edit
                                                </a>
                                                <a  data-bs-toggle="modal" href="#delete_modal" class="text-danger">
                                                    <trash-2-icon size="1.4x" class="custom-class me-1"></trash-2-icon> Delete
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><NuxtLink to="/superadmin/invoice">#IN0006</NuxtLink></td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a href="javascript:void(0);"><img class="avatar avatar-img" src="../../assets/pharmacy_img/products/product6.jpg" alt="User Image"> Actamin</a>
                                            </h2>
                                        </td>
                                        <td>$300.00</td>
                                        <td>12 Oct 2019</td>
                                        <td class="text-center">
                                            <span class="badge rounded-pill bg-success inv-badge">Paid</span>
                                        </td>
                                        <td class="text-end">
                                            <div class="actions">
                                                <a class="text-black" data-bs-toggle="modal" href="#edit_specialities_details">
                                                    <edit-3-icon size="1.4x" class="custom-class me-1"></edit-3-icon> Edit
                                                </a>
                                                <a  data-bs-toggle="modal" href="#delete_modal" class="text-danger">
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
    </div>			
</div>
<!-- /Page Wrapper -->


<!-- Edit Details Modal -->
<div class="modal fade" id="edit_specialities_details" aria-hidden="true" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document" >
        <div class="modal-content doctor-profile">
            <div class="modal-header">
                <h5 class="modal-title">Edit Invoice Report</h5>
                <button type="button" class="close-btn" data-bs-dismiss="modal" aria-label="Close"> <x-circle-icon size="1.4x" class="custom-class"></x-circle-icon></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="row form-row">
                        <div class="col-12 col-sm-6">
                            <div class="form-group">
                                <label>Invoice Number</label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-12 col-sm-6">
                            <div class="form-group">
                                <label>Medicine Image</label>
                                <div class="custom-file" id="customFile2">
                                    <label class="custom-file-upload">
                                        <input type="file" id="site_logo1" name="site_logo1">
                                        <span class="file-upload-text"></span>
                                        <span class="change-user">
                                            Choose File
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6">
                            <div class="form-group">
                                <label>Medicine Name</label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-12 col-sm-6">
                            <div class="form-group">
                                <label>Total Amount</label>
                                <input type="text"  class="form-control">
                            </div>
                        </div>
                        <div class="col-12 col-sm-6">
                            <div class="form-group">
                                <label>Status <span class="text-danger">*</span></label>
                                <select class="form-select form-control" name="category" required=""> 
                                    <option value="1" selected="selected">Paid</option>
                                    <option value="2">Unpaid</option>
                                    <option value="3">Pending</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6">
                            <div class="form-group">
                                <label>Created Date</label>
                                <input type="text"  class="form-control">
                            </div>
                        </div>
                        
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Save Changes</button>
                </form>
            </div>
        </div>
    </div>
</div>
<!-- /Edit Details Modal -->

<!-- Delete Modal -->
<div class="modal fade" id="delete_modal" aria-hidden="true" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document" >
        <div class="modal-content doctor-profile">
            <div class="modal-header border-bottom-0 justify-content-end">
                <button type="button" class="close-btn" data-bs-dismiss="modal" aria-label="Close"> <x-circle-icon size="1.4x" class="custom-class"></x-circle-icon></button>
            </div>
            <div class="modal-body">
                <div class="delete-wrap text-center">
                    <div class="del-icon"> <x-circle-icon size="1.4x" class="custom-class"></x-circle-icon></div>
                    <h2>Sure you Want to delete</h2>
                    <p>“Invoice Report”</p>
                    <div class="submit-section">
                        <NuxtLink to="/superadmin/product-category" class="btn btn-success me-2">Yes</NuxtLink>
                        <a href="javascript:void(0);" class="btn btn-danger" data-bs-dismiss="modal">No</a>
                    </div>								
                </div>
            </div>
        </div>
    </div>
</div>
<!-- /Delete Modal -->
<Nuxt />
</div>
</template>

<script>
import { Edit3Icon } from 'vue-feather-icons'
import { Trash2Icon } from 'vue-feather-icons'
import { XCircleIcon } from 'vue-feather-icons'
export default {
    components: {
    Edit3Icon,
    Trash2Icon,
    XCircleIcon
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
    },
    layout: 'superadmin',
	computed: {
       currentPath() {
           return this.$route.name
	   },
	}
}
</script>