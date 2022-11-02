<template>
<div>
<!-- Page Wrapper -->
<div class="page-wrapper">
    <div class="content container-fluid">
    
        <!-- Page Header -->
        <div class="page-header">
            <div class="row">
                <div class="col-sm-12">
                    <h3 class="page-title mb-0">Transactions</h3>
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
                                <h5 class="card-title">Transactions List</h5>
                            </div>
                            <div class="col-auto custom-list d-flex">
                                <div class="form-custom me-2">
                                    <div id="tableSearch"  class="dataTables_wrapper"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body p-0">
                        <table class="datatable table table-borderless hover-table" id="data-tables">
                                <thead class="thead-light">
                                    <tr>
                                        <th>Invoice No</th>
                                        <th>Product ID</th>
                                        <th>Product Name</th>
                                        <th>Total Amount</th>
                                        <th class="text-center">Status</th>
                                        <th class="text-end">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><NuxtLink to="/superadmin/invoice">#IN0001</NuxtLink></td>
                                        <td>#01</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a href="javascript:void(0);"><img class="avatar avatar-img" src="../../assets/pharmacy_img/products/product1.jpg" alt="User Image"> Abilify</a>
                                            </h2>
                                        </td>
                                        <td>$100.00</td>
                                        <td class="text-center">
                                            <span class="badge rounded-pill bg-success inv-badge">Paid</span>
                                        </td>
                                        <td class="text-end">
                                            <div class="actions">
                                                <a  data-bs-toggle="modal" href="#delete_modal" class="text-danger">
                                                    <trash-2-icon size="1.4x" class="custom-class me-1"></trash-2-icon> Delete
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><NuxtLink to="/superadmin/invoice">#IN0002</NuxtLink></td>
                                        <td>#02</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a href="javascript:void(0);"><img class="avatar avatar-img" src="../../assets/pharmacy_img/products/product2.jpg" alt="User Image"> ITONE eye drops 10ml</a>
                                            </h2>
                                        </td>
                                        <td>$200.00</td>
                                        <td class="text-center">
                                            <span class="badge rounded-pill bg-success inv-badge">Paid</span>
                                        </td>
                                        <td class="text-end">
                                            <div class="actions">
                                                <a  data-bs-toggle="modal" href="#delete_modal" class="text-danger">
                                                    <trash-2-icon size="1.4x" class="custom-class me-1"></trash-2-icon> Delete
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><NuxtLink to="/superadmin/invoice">#IN0003</NuxtLink></td>
                                        <td>#03</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a href="javascript:void(0);"><img class="avatar avatar-img" src="../../assets/pharmacy_img/products/product3.jpg" alt="User Image"> Safi Natural Blood Purifier </a>
                                            </h2>
                                        </td>
                                        <td>$250.00</td>
                                        <td class="text-center">
                                            <span class="badge rounded-pill bg-success inv-badge">Paid</span>
                                        </td>
                                        <td class="text-end">
                                            <div class="actions">
                                                <a  data-bs-toggle="modal" href="#delete_modal" class="text-danger">
                                                    <trash-2-icon size="1.4x" class="custom-class me-1"></trash-2-icon> Delete
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><NuxtLink to="/superadmin/invoice">#IN0004</NuxtLink></td>
                                        <td>#04</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a href="javascript:void(0);"><img class="avatar avatar-img" src="../../assets/pharmacy_img/products/product4.jpg" alt="User Image"> Moisturization & Nourishment </a>
                                            </h2>
                                        </td>
                                        <td>$150.00</td>
                                        <td class="text-center">
                                            <span class="badge rounded-pill bg-success inv-badge">Paid</span>
                                        </td>
                                        <td class="text-end">
                                            <div class="actions">
                                                <a  data-bs-toggle="modal" href="#delete_modal" class="text-danger">
                                                    <trash-2-icon size="1.4x" class="custom-class me-1"></trash-2-icon> Delete
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><NuxtLink to="/superadmin/invoice">#IN0005</NuxtLink></td>
                                        <td>#05</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a href="javascript:void(0);"><img class="avatar avatar-img" src="../../assets/pharmacy_img/products/product5.jpg" alt="User Image"> Blackhead Removal</a>
                                            </h2>
                                        </td>
                                        <td>$350.00</td>
                                        <td class="text-center">
                                            <span class="badge rounded-pill bg-success inv-badge">Paid</span>
                                        </td>
                                        <td class="text-end">
                                            <div class="actions">
                                                <a  data-bs-toggle="modal" href="#delete_modal" class="text-danger">
                                                    <trash-2-icon size="1.4x" class="custom-class me-1"></trash-2-icon> Delete
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><NuxtLink to="/superadmin/invoice">#IN0006</NuxtLink></td>
                                        <td>#06</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a href="javascript:void(0);"><img class="avatar avatar-img" src="../../assets/pharmacy_img/products/product6.jpg" alt="User Image"> Abilify</a>
                                            </h2>
                                        </td>
                                        <td>$300.00</td>
                                        <td class="text-center">
                                            <span class="badge rounded-pill bg-success inv-badge">Paid</span>
                                        </td>
                                        <td class="text-end">
                                            <div class="actions">
                                                <a  data-bs-toggle="modal" href="#delete_modal" class="text-danger">
                                                    <trash-2-icon size="1.4x" class="custom-class me-1"></trash-2-icon> Delete
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><NuxtLink to="/superadmin/invoice">#IN0007</NuxtLink></td>
                                        <td>#07</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a href="javascript:void(0);"><img class="avatar avatar-img" src="../../assets/pharmacy_img/products/product1.jpg" alt="User Image"> Blackhead Removal</a>
                                            </h2>
                                        </td>
                                        <td>$250.00</td>
                                        <td class="text-center">
                                            <span class="badge rounded-pill bg-success inv-badge">Paid</span>
                                        </td>
                                        <td class="text-end">
                                            <div class="actions">
                                                <a  data-bs-toggle="modal" href="#delete_modal" class="text-danger">
                                                    <trash-2-icon size="1.4x" class="custom-class me-1"></trash-2-icon> Delete
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><NuxtLink to="/superadmin/invoice">#IN0008</NuxtLink></td>
                                        <td>#08</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a href="javascript:void(0);"><img class="avatar avatar-img" src="../../assets/pharmacy_img/products/product2.jpg" alt="User Image"> ITONE eye drops 10ml</a>
                                            </h2>
                                        </td>
                                        <td>$150.00</td>
                                        <td class="text-center">
                                            <span class="badge rounded-pill bg-success inv-badge">Paid</span>
                                        </td>
                                        <td class="text-end">
                                            <div class="actions">
                                                <a  data-bs-toggle="modal" href="#delete_modal" class="text-danger">
                                                    <trash-2-icon size="1.4x" class="custom-class me-1"></trash-2-icon> Delete
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><NuxtLink to="/superadmin/invoice">#IN0009</NuxtLink></td>
                                        <td>#09</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a href="javascript:void(0);"><img class="avatar avatar-img" src="../../assets/pharmacy_img/products/product3.jpg" alt="User Image"> Whitening & Fairness</a>
                                            </h2>
                                        </td>
                                        <td>$100.00</td>
                                        <td class="text-center">
                                            <span class="badge rounded-pill bg-success inv-badge">Paid</span>
                                        </td>
                                        <td class="text-end">
                                            <div class="actions">
                                                <a  data-bs-toggle="modal" href="#delete_modal" class="text-danger">
                                                    <trash-2-icon size="1.4x" class="custom-class me-1"></trash-2-icon> Delete
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><NuxtLink to="/superadmin/invoice">#IN0010</NuxtLink></td>
                                        <td>#10</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a href="javascript:void(0);"><img class="avatar avatar-img" src="../../assets/pharmacy_img/products/product4.jpg" alt="User Image"> Adderall</a>
                                            </h2>
                                        </td>
                                        <td>$120.00</td>
                                        <td class="text-center">
                                            <span class="badge rounded-pill bg-success inv-badge">Paid</span>
                                        </td>
                                        <td class="text-end">
                                            <div class="actions">
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
                    <div id="tablepagination"  class="dataTables_wrapper"></div>
                </div>
        </div>			
    </div>
</div>			
<!-- /Page Wrapper -->

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
                    <p>“Transactions List”</p>
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
import { Trash2Icon } from 'vue-feather-icons'
import { XCircleIcon } from 'vue-feather-icons'
export default {
    components: {
    Trash2Icon,
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
    },
    layout: 'superadmin',
	computed: {
       currentPath() {
           return this.$route.name
	   },
	}
}
</script>