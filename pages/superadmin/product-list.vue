<template>
<div class="main-wrapper">
<!-- Page Wrapper -->
<div class="page-wrapper">
    <div class="content container-fluid">

        <!-- Page Header -->
        <div class="page-header">
            <div class="row d-flex justify-content-between align-items-center">
                <div class="col-sm-7 col-auto">
                    <h3 class="page-title">Product List</h3>
                </div>
                <div class="col-sm-5 col">
                    <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#addproduct" class="btn btn-primary btn-add float-end d-flex justify-content-between align-items-center"><plus-square-icon size="1.4x" class="custom-class me-1"></plus-square-icon> Add New</a>
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
                            </div>
                        </div>
                    </div>
                    <div class="card-body p-0">				
                        <div class="table-responsive">									
                            <table class="datatable table table-borderless hover-table" id="data-tables">
                                <thead class="thead-light">
                                    <tr>
                                       <th>ID</th>
                                       <th>Product Name</th>
                                       <th>Price</th>
                                       <th>Date</th>
                                       <th class="text-end">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>#4546</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal"><img class="avatar avatar-img" src="../../assets/pharmacy_img/products/product1.jpg" alt="User Image"> Safi Natural Blood Purifier</a>
                                            </h2>
                                        </td>
                                        <td>$330.00</td>
                                        <td>12/20/2022</td>
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
                                                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal"><img class="avatar avatar-img" src="../../assets/pharmacy_img/products/product2.jpg" alt="User Image"> Benadrys Cough Syrup</a>
                                            </h2>
                                        </td>
                                        <td>$330.00</td>
                                        <td>12/20/2022</td>
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
                                                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal"><img class="avatar avatar-img" src="../../assets/pharmacy_img/products/product3.jpg" alt="User Image"> Natural Syrup for bronchtas</a>
                                            </h2>
                                        </td>
                                        <td>$330.00</td>
                                        <td>12/20/2022</td>
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
                                                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal"><img class="avatar avatar-img" src="../../assets/pharmacy_img/products/product4.jpg" alt="User Image"> Safi Natural Blood Purifier</a>
                                            </h2>
                                        </td>
                                        <td>$330.00</td>
                                        <td>12/20/2022</td>
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
                                                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal"><img class="avatar avatar-img" src="../../assets/pharmacy_img/products/product5.jpg" alt="User Image"> Headache pills</a>
                                            </h2>
                                        </td>
                                        <td>$330.00</td>
                                        <td>12/20/2022</td>
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
                                                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal"><img class="avatar avatar-img" src="../../assets/pharmacy_img/products/product6.jpg" alt="User Image"> Natura ayurvedic medicine</a>
                                            </h2>
                                        </td>
                                        <td>$330.00</td>
                                        <td>12/20/2022</td>
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
                        <NuxtLink to="/superadmin/product-list">
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
                        <NuxtLink to="/superadmin/product-list">
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
                    <p>“Product List”</p>
                    <div class="submit-section">
                        <NuxtLink to="/superadmin/product-list" class="btn btn-success me-2">Yes</NuxtLink>
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
import { PlusSquareIcon } from 'vue-feather-icons'
import { Edit3Icon } from 'vue-feather-icons'
import { Trash2Icon } from 'vue-feather-icons'
import { XCircleIcon } from 'vue-feather-icons'
import { UploadIcon } from 'vue-feather-icons'
import { XIcon } from 'vue-feather-icons'
export default {
    components: {
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
    },
    layout: 'superadmin',
	computed: {
       currentPath() {
           return this.$route.name
	   },
	}
}
</script>