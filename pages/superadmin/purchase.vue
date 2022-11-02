<template>
<div>
<div class="main-wrapper">
<!-- Page Wrapper -->
<div class="page-wrapper">
    <div class="content container-fluid">
    
        <!-- Page Header -->
        <div class="page-header">
            <div class="row d-flex justify-content-between align-items-center">
                <div class="col-sm-7 col-auto">
                    <h3 class="page-title mb-0">Purchase</h3>
                </div>
                <div class="col-sm-5 col">
                    <NuxtLink to="/superadmin/add-purchase" class="btn btn-primary float-end d-flex justify-content-between align-items-center">
                        <plus-square-icon size="1.4x" class="custom-class me-1"></plus-square-icon> Add New</NuxtLink>
                </div>
            </div>
        </div>
        <!-- /Page Header -->
        <div class="row">
            <div class="col-md-12">
            
                <!-- Recent Orders -->
                <div class="card">
                    <div class="card-header border-bottom-0">
                        <div class="row align-items-center">
                            <div class="col">
                                <h5 class="card-title">Purchase</h5>
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
                                        <th>Purchase Date</th>
                                        <th>Medicine Name</th>
                                        <th>Medicine Category</th>
                                        <th>Purchase Price</th>
                                        <th>Quantity</th>
                                        <th>Supplier</th>
                                        <th>Expire Date</th>
                                        <th class="text-end">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>13-5-2020</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a href="javascript:void(0);"><img class="avatar avatar-img" src="../../assets/pharmacy_img/products/product1.jpg" alt="User Image"> Abilify</a>
                                            </h2>
                                        </td>
                                        <td>Aripiprazole</td>
                                        <td>$220</td>
                                        <td>60</td>
                                        <td>Bradley</td>
                                        <td>13-06-20</td>
                                        <td class="text-end">
                                            <div class="actions">
                                                <NuxtLink to="/superadmin/edit-purchase" class="text-black">
                                                    <edit-3-icon size="1.4x" class="custom-class me-1"></edit-3-icon> Edit
                                                </NuxtLink>
                                                <a  data-bs-toggle="modal" href="#delete_modal" class="text-danger">
                                                    <trash-2-icon size="1.4x" class="custom-class me-1"></trash-2-icon> Delete
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>12-5-2020</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a href="javascript:void(0);"><img class="avatar avatar-img" src="../../assets/pharmacy_img/products/product2.jpg" alt="User Image"> Actamin</a>
                                            </h2>
                                        </td>
                                        <td>Phytopathology‎</td>
                                        <td>$30</td>
                                        <td>20</td>
                                        <td>Douglas</td>
                                        <td>13-06-20</td>
                                        <td class="text-end">
                                            <div class="actions">
                                                <NuxtLink to="/superadmin/edit-purchase" class="text-black">
                                                    <edit-3-icon size="1.4x" class="custom-class me-1"></edit-3-icon> Edit
                                                </NuxtLink>
                                                <a  data-bs-toggle="modal" href="#delete_modal" class="text-danger">
                                                    <trash-2-icon size="1.4x" class="custom-class me-1"></trash-2-icon> Delete
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>11-5-2020</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a href="javascript:void(0);"><img class="avatar avatar-img" src="../../assets/pharmacy_img/products/product3.jpg" alt="User Image"> Adderall</a>
                                            </h2>
                                        </td>
                                        <td>Phytopathology‎</td>
                                        <td>$58</td>
                                        <td>33</td>
                                        <td>Douglas</td>
                                        <td>20-06-20</td>
                                        <td class="text-end">
                                            <div class="actions">
                                                <NuxtLink to="/superadmin/edit-purchase" class="text-black">
                                                    <edit-3-icon size="1.4x" class="custom-class me-1"></edit-3-icon> Edit
                                                </NuxtLink>
                                                <a  data-bs-toggle="modal" href="#delete_modal" class="text-danger">
                                                    <trash-2-icon size="1.4x" class="custom-class me-1"></trash-2-icon> Delete
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>10-5-2020</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a href="javascript:void(0);"><img class="avatar avatar-img" src="../../assets/pharmacy_img/products/product4.jpg" alt="User Image"> Abilify	</a>
                                            </h2>
                                        </td>
                                        <td>Aripiprazole</td>
                                        <td>$336</td>
                                        <td>50</td>
                                        <td>Bradley</td>
                                        <td>13-06-20</td>
                                        <td class="text-end">
                                            <div class="actions">
                                                <NuxtLink to="/superadmin/edit-purchase" class="text-black">
                                                    <edit-3-icon size="1.4x" class="custom-class me-1"></edit-3-icon> Edit
                                                </NuxtLink>
                                                <a  data-bs-toggle="modal" href="#delete_modal" class="text-danger">
                                                    <trash-2-icon size="1.4x" class="custom-class me-1"></trash-2-icon> Delete
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>9-5-2020</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a href="javascript:void(0);"><img class="avatar avatar-img" src="../../assets/pharmacy_img/products/product6.jpg" alt="User Image"> Actamin</a>
                                            </h2>
                                        </td>
                                        <td>Phytopathology‎</td>
                                        <td>$10</td>
                                        <td>605</td>
                                        <td>Douglas</td>
                                        <td>13-06-20</td>
                                        <td class="text-end">
                                            <div class="actions">
                                                <NuxtLink to="/superadmin/edit-purchase" class="text-black">
                                                    <edit-3-icon size="1.4x" class="custom-class me-1"></edit-3-icon> Edit
                                                </NuxtLink>
                                                <a  data-bs-toggle="modal" href="#delete_modal" class="text-danger">
                                                    <trash-2-icon size="1.4x" class="custom-class me-1"></trash-2-icon> Delete
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>8-5-2020</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a href="javascript:void(0);"><img class="avatar avatar-img" src="../../assets/pharmacy_img/products/product3.jpg" alt="User Image"> Adderall</a>
                                            </h2>
                                        </td>
                                        <td>Phytopathology‎</td>
                                        <td>$15</td>
                                        <td>160</td>
                                        <td>Douglas</td>
                                        <td>20-06-20</td>
                                        <td class="text-end">
                                            <div class="actions">
                                                <NuxtLink to="/superadmin/edit-purchase" class="text-black">
                                                    <edit-3-icon size="1.4x" class="custom-class me-1"></edit-3-icon> Edit
                                                </NuxtLink>
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
                <!-- /Recent Orders -->
                
            </div>
        </div>
    </div>			
</div>
<!-- /Page Wrapper -->
<Nuxt />
</div>
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
                    <p>“Purchase”</p>
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
</div>
</template>

<script>
import { PlusSquareIcon } from 'vue-feather-icons'
import { Edit3Icon } from 'vue-feather-icons'
import { Trash2Icon } from 'vue-feather-icons'
import { XCircleIcon } from 'vue-feather-icons'
export default {
    components: {
    PlusSquareIcon,
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