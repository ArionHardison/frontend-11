<template>
<div class="main-wrapper">
<!-- Page Wrapper -->
<div class="page-wrapper">
    <div class="content container-fluid">
        
        <!-- Page Header -->
        <div class="page-header">
            <div class="row">
                <div class="col-sm-7 col-auto">
                    <h3 class="page-title">Categories</h3>
                </div>
                <div class="col-sm-5 col">
                    <a href="#Add_Specialities_details" data-bs-toggle="modal" class="btn btn-primary float-end d-flex justify-content-between align-items-center"><plus-square-icon size="1.4x" class="custom-class me-1"></plus-square-icon> Add New</a>
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
                                <h5 class="card-title">Categories List</h5>
                            </div>
                            <div class="col-auto custom-list d-flex">
                                
                                <div class="form-custom me-2">
                                    <div id="tableSearch"  class="dataTables_wrapper"></div>
                                </div>
                                <div class="SortBy">
                                    <div class="selectBoxes order-by">
                                        <p class="mb-0"><img src="../../assets/pharmacy_img/icon/sort.png" class="me-2" alt="icon"> Order by </p>
                                        <span class="down-icon"> <chevron-down-icon size="1.4x" class="custom-class"></chevron-down-icon></span>
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
                                            <label class="custom_radio w-100">
                                                <input type="radio" name="sort">
                                                <span class="checkmark"></span> Date Created
                                            </label>
                                            <p class="lab-title">Sort By</p>
                                            <label class="custom_radio w-100">
                                                <input type="radio" name="sort">
                                                <span class="checkmark"></span> Ascending
                                            </label>
                                            <label class="custom_radio w-100">
                                                <input type="radio" name="sort">
                                                <span class="checkmark"></span> Descending
                                            </label>
                                            <NuxtLink to="/superadmin/product-category">
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
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Created date</th>
                                        <th class="text-end">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>01</td>
                                        
                                        <td>
                                            <h2 class="table-avatar">	
                                                Phytopathology‎
                                            </h2>
                                        </td>
                                        
                                        <td>01-May-2020-12:00</td>

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
                                        <td>02</td>
                                        
                                        <td>
                                            <h2 class="table-avatar">	
                                                Family care
                                            </h2>
                                        </td>
                                        
                                        <td>03-May-2020-08:00</td>

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
                                        <td>03</td>
                                        
                                        <td>
                                            <h2 class="table-avatar">	
                                                Cancer
                                            </h2>
                                        </td>
                                        
                                        <td>05-May-2020-06:00</td>

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
                                        <td>04</td>
                                        
                                        <td>
                                            <h2 class="table-avatar">	
                                                Hair care
                                            </h2>
                                        </td>
                                        
                                        <td>06-May-2020-01:00</td>

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
                                        <td>05</td>
                                        
                                        <td>
                                            <h2 class="table-avatar">	
                                                Skin care	
                                            </h2>
                                        </td>
                                        
                                        <td>05-May-2020-02:00</td>

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
                                        <td>06</td>
                                        
                                        <td>
                                            <h2 class="table-avatar">	
                                                Rare diseases‎	
                                            </h2>
                                        </td>
                                        
                                        <td>06-May-2020-06:00</td>

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
                                        <td>07</td>
                                        
                                        <td>
                                            <h2 class="table-avatar">	
                                                Baby care
                                            </h2>
                                        </td>
                                        
                                        <td>07-May-2020-12:00</td>

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
                                        <td>08</td>
                                        
                                        <td>
                                            <h2 class="table-avatar">	
                                                Inflammations	
                                            </h2>
                                        </td>
                                        
                                        <td>07-May-2020-05:00</td>

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
                                        <td>09</td>
                                        
                                        <td>
                                            <h2 class="table-avatar">	
                                                Sleep disorders‎
                                            </h2>
                                        </td>
                                        
                                        <td>07-May-2020-08:00</td>

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
                                        <td>10</td>
                                        
                                        <td>
                                            <h2 class="table-avatar">	
                                                Infectious diseases‎	
                                            </h2>
                                        </td>
                                        
                                        <td>08-May-2020-02:00</td>

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


<!-- Add Modal -->
<div class="modal fade" id="Add_Specialities_details" aria-hidden="true" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document" >
        <div class="modal-content doctor-profile">
            <div class="modal-header">
                <h3 class="mb-0">Add Category</h3>
                <button type="button" class="close-btn" data-bs-dismiss="modal" aria-label="Close"><x-circle-icon size="1.4x" class="custom-class"></x-circle-icon></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="row form-row">
                        <div class="col-12">
                            <div class="form-group">
                                <label>Category</label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Save Changes</button>
                </form>
            </div>
        </div>
    </div>
</div>
<!-- /ADD Modal -->

<!-- Edit Details Modal -->
<div class="modal fade" id="edit_specialities_details" aria-hidden="true" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document" >
        <div class="modal-content doctor-profile">
            <div class="modal-header">
                <h5 class="modal-title">Edit Category</h5>
                <button type="button" class="close-btn" data-bs-dismiss="modal" aria-label="Close"><x-circle-icon size="1.4x" class="custom-class"></x-circle-icon></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="row form-row">
                        <div class="col-12">
                            <div class="form-group">
                                <label>Category</label>
                                <input type="text" class="form-control" value="Cardiology">
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
                <button type="button" class="close-btn" data-bs-dismiss="modal" aria-label="Close"><x-circle-icon size="1.4x" class="custom-class"></x-circle-icon></button>
            </div>
            <div class="modal-body">
                <div class="delete-wrap text-center">
                    <div class="del-icon"><x-circle-icon size="1.4x" class="custom-class"></x-circle-icon></div>
                    <h2>Sure you Want to delete</h2>
                    <p>“Category”</p>
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
import { PlusSquareIcon } from 'vue-feather-icons'
import { ChevronDownIcon } from 'vue-feather-icons'
import { Edit3Icon } from 'vue-feather-icons'
import { Trash2Icon } from 'vue-feather-icons'
import { XCircleIcon } from 'vue-feather-icons'
export default {
    components: {
    PlusSquareIcon,
    ChevronDownIcon,
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