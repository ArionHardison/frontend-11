<template>
<div class="main-wrapper">
<!-- Page Wrapper -->
<div class="page-wrapper">
    <div class="content container-fluid">
    
        <!-- Page Header -->
        <div class="page-header">
            <div class="row align-items-center">
                <div class="col-md-12 d-flex justify-content-end">
                    <div class="doc-badge me-3">Total Patients <span class="ms-1">48</span></div>
                    <div class="SortBy">
                        <div class="selectBoxes order-by">
                            <p class="mb-0"><img src="../../assets/admin_img/icon/sort.png" class="me-2" alt="icon"> Order by </p>
                            <span class="down-icon"><chevron-down-icon size="1.4x" class="custom-class"></chevron-down-icon></span>
                        </div>						  
                        <div id="checkBox">
                            <form>
                                <p class="lab-title">Specialities</p>
                                <label class="custom_radio w-100">
                                    <input type="radio" name="year">
                                    <span class="checkmark"></span> Number of Appointment
                                </label>
                                <label class="custom_radio w-100">
                                    <input type="radio" name="year">
                                    <span class="checkmark"></span> Total Income
                                </label>
                                <label class="custom_radio w-100 mb-4">
                                    <input type="radio" name="year">
                                    <span class="checkmark"></span> Ratings
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
                                <NuxtLink to="/admin/patient-list">
                                <button type="submit" class="btn w-100 btn-primary">Apply</button>
                            </NuxtLink>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Page Header -->
        
        <!-- Patients List -->
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <div class="row align-items-center">
                            <div class="col">
                                <h5 class="card-title">Patients</h5>
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
                                            <p class="lab-title">By Account status</p>
                                            <div class="selectBox-cont">
                                                <label class="custom_check w-100">
                                                    <input type="checkbox" name="acc" checked>
                                                    <span class="checkmark"></span> Enabled
                                                </label>
                                                <label class="custom_check w-100">
                                                    <input type="checkbox" name="acc">
                                                    <span class="checkmark"></span> Disabled
                                                </label>
                                                <p class="lab-title">By Blood Type</p>
                                                <label class="custom_check w-100">
                                                    <input type="checkbox" name="year">
                                                    <span class="checkmark"></span> AB+
                                                </label>
                                                <label class="custom_check w-100">
                                                    <input type="checkbox" name="year">
                                                    <span class="checkmark"></span> O-
                                                </label>
                                                <label class="custom_check w-100">
                                                    <input type="checkbox" name="year">
                                                    <span class="checkmark"></span> B-
                                                </label>
                                                <label class="custom_check w-100">
                                                    <input type="checkbox" name="year">
                                                    <span class="checkmark"></span> A+
                                                </label>
                                                <label class="custom_check w-100 mb-4">
                                                    <input type="checkbox" name="year">
                                                    <span class="checkmark"></span> B+
                                                </label>
                                            </div>
                                            <NuxtLink to="/admin/patient-list">
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
                                       <th>Last Visit</th>
                                       <th>Blood group</th>
                                       <th>Total Income</th>
                                       <th>Account Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>#4546</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a href="javascript:void(0);" data-bs-target="#patientlist" data-bs-toggle="modal"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-07.jpg" alt="User Image"></a>
                                                <a href="javascript:void(0);" data-bs-target="#patientlist" data-bs-toggle="modal"><span class="user-name">Bess Twishes</span> <span class="text-muted">Male, 40 Years Old</span></a>
                                            </h2>
                                        </td>
                                        <td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
                                        <td>AB+</td>
                                        <td>$300.00</td>
                                        <td>
                                            <label class="toggle-switch" for="status1">
                                                <input type="checkbox" class="toggle-switch-input" id="status1">
                                                <span class="toggle-switch-label">
                                                    <span class="toggle-switch-indicator"></span>
                                                </span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>#8774</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a href="javascript:void(0);" data-bs-target="#patientlist" data-bs-toggle="modal"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-04.jpg" alt="User Image"></a>
                                                <a href="javascript:void(0);" data-bs-target="#patientlist" data-bs-toggle="modal"><span class="user-name">Bess Twishes</span> <span class="text-muted">Female,30 Years Old</span></a>
                                            </h2>
                                        </td>
                                        <td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
                                        <td>B+</td>
                                        <td>$300.00</td>
                                        <td>
                                            <label class="toggle-switch" for="status2">
                                                <input type="checkbox" class="toggle-switch-input" id="status2" checked>
                                                <span class="toggle-switch-label">
                                                    <span class="toggle-switch-indicator"></span>
                                                </span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>#4546</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a href="javascript:void(0);" data-bs-target="#patientlist" data-bs-toggle="modal"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-02.jpg" alt="User Image"></a>
                                                <a href="javascript:void(0);" data-bs-target="#patientlist" data-bs-toggle="modal"><span class="user-name">Abdul Aziz Lazis</span> <span class="text-muted">Male, 25 Years Old</span></a>
                                            </h2>
                                        </td>
                                        <td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
                                        <td>O-</td>
                                        <td>$300.00</td>
                                        <td>
                                            <label class="toggle-switch" for="status3">
                                                <input type="checkbox" class="toggle-switch-input" id="status3" checked>
                                                <span class="toggle-switch-label">
                                                    <span class="toggle-switch-indicator"></span>
                                                </span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>#4546</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a href="javascript:void(0);" data-bs-target="#patientlist" data-bs-toggle="modal"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-05.jpg" alt="User Image"></a>
                                                <a href="javascript:void(0);" data-bs-target="#patientlist" data-bs-toggle="modal"><span class="user-name">Alex Siauw</span> <span class="text-muted">Male, 29 Years Old</span></a>
                                            </h2>
                                        </td>
                                        <td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
                                        <td>A+</td>
                                        <td>$300.00</td>
                                        <td>
                                            <label class="toggle-switch" for="status4">
                                                <input type="checkbox" class="toggle-switch-input" id="status4" checked>
                                                <span class="toggle-switch-label">
                                                    <span class="toggle-switch-indicator"></span>
                                                </span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>#4546</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a href="javascript:void(0);" data-bs-target="#patientlist" data-bs-toggle="modal"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-13.jpg" alt="User Image"></a>
                                                <a href="javascript:void(0);" data-bs-target="#patientlist" data-bs-toggle="modal"><span class="user-name">Gobbs Siauw</span> <span class="text-muted">Male, 29 Years Old</span></a>
                                            </h2>
                                        </td>
                                        <td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
                                        <td>B+</td>
                                        <td>$300.00</td>
                                        <td>
                                            <label class="toggle-switch" for="status4">
                                                <input type="checkbox" class="toggle-switch-input" id="status4" checked>
                                                <span class="toggle-switch-label">
                                                    <span class="toggle-switch-indicator"></span>
                                                </span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>#4546</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a href="javascript:void(0);" data-bs-target="#patientlist" data-bs-toggle="modal"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-11.jpg" alt="User Image"></a>
                                                <a href="javascript:void(0);" data-bs-target="#patientlist" data-bs-toggle="modal"><span class="user-name">Deborah</span> <span class="text-muted">Male, 29 Years Old</span></a>
                                            </h2>
                                        </td>
                                        <td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
                                        <td>AB+</td>
                                        <td>$300.00</td>
                                        <td>
                                            <label class="toggle-switch" for="status5">
                                                <input type="checkbox" class="toggle-switch-input" id="status5" checked>
                                                <span class="toggle-switch-label">
                                                    <span class="toggle-switch-indicator"></span>
                                                </span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>#4546</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a href="javascript:void(0);" data-bs-target="#patientlist" data-bs-toggle="modal"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-03.jpg" alt="User Image"></a>
                                                <a href="javascript:void(0);" data-bs-target="#patientlist" data-bs-toggle="modal"><span class="user-name">Sofia</span> <span class="text-muted">Male, 29 Years Old</span></a>
                                            </h2>
                                        </td>
                                        <td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
                                        <td>A+</td>
                                        <td>$300.00</td>
                                        <td>
                                            <label class="toggle-switch" for="status6">
                                                <input type="checkbox" class="toggle-switch-input" id="status6" checked>
                                                <span class="toggle-switch-label">
                                                    <span class="toggle-switch-indicator"></span>
                                                </span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>#4546</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a href="javascript:void(0);" data-bs-target="#patientlist" data-bs-toggle="modal"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-13.jpg" alt="User Image"></a>
                                                <a href="javascript:void(0);" data-bs-target="#patientlist" data-bs-toggle="modal"><span class="user-name">Paul</span> <span class="text-muted">Male, 29 Years Old</span></a>
                                            </h2>
                                        </td>
                                        <td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
                                        <td>O-</td>
                                        <td>$300.00</td>
                                        <td>
                                            <label class="toggle-switch" for="status7">
                                                <input type="checkbox" class="toggle-switch-input" id="status7" checked>
                                                <span class="toggle-switch-label">
                                                    <span class="toggle-switch-indicator"></span>
                                                </span>
                                            </label>
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
        <!-- /Patient List -->
    </div>
</div>
<!-- /Page Wrapper -->

<!-- Modal -->
<div class="modal fade contentmodal" id="patientlist" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content doctor-profile">
            <div class="modal-header justify-content-center border-bottom-0">
                <h4 class="modal-title">Patient Details</h4>
                <button type="button" class="close-btn pos-top" data-bs-dismiss="modal" aria-label="Close"><x-circle-icon size="1.4x" class="custom-class"></x-circle-icon></button>
            </div>
            <div class="modal-body">
                <div class="media d-flex align-items-center justify-content-between">
                    <div class="flex-shrink-0 d-flex align-items-center">
                        <img src="../../assets/admin_img/profiles/avatar-02.jpg" alt="patient" class="doctor">
                        <div>											
                            <div class="docs-id"> #454445</div>
                            <h3>Harden Mike</h3>
                            <p>Male, 45 Years</p>
                        </div>	
                    </div>
                </div>
                <div class="member-wrapper">
                    <h5>Personal Details</h5>
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="mem-info">
                                <h6>Registered On</h6>
                                <p>Nov 21, 2022</p>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="mem-info">
                                <h6>Phone Number</h6>
                                <p>+1 5454 2154 4545</p>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="mem-info">
                                <h6>Email ID</h6>
                                <p>Doctor@Doccure.com</p>
                            </div>
                        </div>
                        <div class="col-sm-8">
                            <div class="mem-info">
                                <h6>Location</h6>
                                <p>4417 Goosetown Drive, Taylorsville, North Carolina, 28681</p>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="mem-info">
                                <h6>Date of Birth</h6>
                                <p>21, Dec 2022</p>
                            </div>
                        </div>
                    </div>                            
                </div>
                <div class="lang-wrap">
                    <p>No of Consultation / Cancelled : <span>85/21</span></p>
                    <p>Total Income Earned  :  <span>$4,544,784</span></p>
                </div>
                <div class="submit-section">
                    <a data-bs-dismiss="modal" data-bs-toggle="modal" href="#editModal" class="btn btn-primary me-2">Edit</a>
                    <a data-bs-dismiss="modal" data-bs-toggle="modal" href="#deleteModal" class="btn btn-secondary">Delete Account</a>
                </div>
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
                <h3 class="mb-0">Edit Patient</h3>
                <button type="button" class="close-btn" data-bs-dismiss="modal" aria-label="Close"><x-circle-icon size="1.4x" class="custom-class"></x-circle-icon></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="add-wrap">
                        <div class="form-group form-focus">
                            <input type="text" class="form-control floating" value="Dr. Rayan miller">
                            <label class="focus-label">Doctor Name <span class="text-danger">*</span></label>
                        </div>
                        <label class="mb-1">Patient Image</label>
                        <div class="change-photo-btn">
                            <div><upload-icon size="1.4x" class="custom-class"></upload-icon>
                            <p>Upload File</p></div>
                            <input type="file" class="upload">
                            <span class="file-upload-text"></span>
                        </div>
                        <p class="file-name text-success">Successfully Product image.jpg uploaded <a href="javascript:void(0);" class="text-danger"><x-icon size="1.4x" class="custom-class"></x-icon></a></p>
                        <div class="form-group form-focus">
                            <input type="text" class="form-control floating" value="$330.00">
                            <label class="focus-label">Consultation Fees <span class="text-danger">*</span></label>
                        </div>
                        <div class="form-group form-focus">
                            <input type="text" class="form-control floating" value="Newyork, USA">
                            <label class="focus-label">Location <span class="text-danger">*</span></label>
                        </div>
                        <div class="form-group form-focus">
                            <input type="text" class="form-control floating" value="+1 5454 2154 4545">
                            <label class="focus-label">Phone <span class="text-danger">*</span></label>
                        </div>
                        <NuxtLink to="/admin/patient-list">
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
                    <form>
                        <div class="del-icon"><x-circle-icon size="1.4x" class="custom-class"></x-circle-icon></div>
                        <h2>Sure you Want to delete</h2>
                        <p>“Patient”</p>
                        <NuxtLink to="/admin/patient-list">
                        <div class="submit-section">
                            <button type="submit" class="btn btn-success me-2">Yes</button>
                            <a href="javascript:void(0);" class="btn btn-danger" data-bs-dismiss="modal">No</a>
                        </div>	
                    </NuxtLink>
                    </form>								
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
import { FilterIcon } from 'vue-feather-icons'
import { XCircleIcon } from 'vue-feather-icons'
import { UploadIcon } from 'vue-feather-icons'
import { XIcon } from 'vue-feather-icons'
export default {
    components: {
    ChevronDownIcon,
    FilterIcon,
    XCircleIcon,
    UploadIcon,
    XIcon
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