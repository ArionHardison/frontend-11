<template>
<div class="main-wrapper">
    <div class="page-wrapper">
        <div class="content container-fluid">
            <div class="page-header">
                <div class="row">
                    <div class="col-sm-6">
                        <h3 class="page-title">Settings</h3>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><NuxtLink to="/admin/admin_index">Home</NuxtLink></li>
                            <li class="breadcrumb-item"><NuxtLink to="/admin/settings">Settings</NuxtLink></li>
                            <li class="breadcrumb-item active">Payment Settings</li>
                        </ul>
                    </div>
                </div>
            </div>
        
            <div class="row">
                <div class="col-lg-12">

                    <!-- Settings Menu -->
                    <div class="settings-menu-links">
                        <ul class="nav nav-tabs menu-tabs">
                            <li class="nav-item">
                                <NuxtLink class="nav-link" to="/admin/settings">General Settings</NuxtLink>
                            </li>
                            <li class="nav-item">
                                <NuxtLink class="nav-link" to="/admin/localization-details">Localization</NuxtLink>
                            </li>
                            <li class="nav-item active">
                                <NuxtLink class="nav-link" to="/admin/payment-settings">Payment Settings</NuxtLink>
                            </li>
                            <li class="nav-item">
                                <NuxtLink class="nav-link" to="/admin/email-settings">Email Settings</NuxtLink>
                            </li>
                            <li class="nav-item">
                                <NuxtLink class="nav-link" to="/admin/social-settings">Social Media Login</NuxtLink>
                            </li>
                            <li class="nav-item">
                                <NuxtLink class="nav-link" to="/admin/social-links">Social Links</NuxtLink>
                            </li>
                            <li class="nav-item">
                                <NuxtLink class="nav-link" to="/seo-settings">SEO Settings</NuxtLink>
                            </li>
                            <li class="nav-item">
                                <NuxtLink class="nav-link" to="/admin/others-settings">Others</NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <!-- Settings Menu -->

                    <div class="row">
                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body pt-0">
                                    <div class="card-header d-flex justify-content-between align-items-center">
                                        <h5 class="card-title">Paypal</h5>
                                        <div class="status-toggle d-flex justify-content-between align-items-center">
                                            <input type="checkbox" id="status_1" class="check">
                                            <label for="status_1" class="checktoggle">checkbox</label>
                                        </div>
                                    </div>
                                    <form>
                                        <div class="settings-form">
                                            <div class="form-group">
                                                <p class="pay-cont">Paypal Option</p>
                                                <label class="custom_radio me-4">
                                                    <input type="radio" name="budget" value="Yes" checked="">
                                                    <span class="checkmark"></span> Sandbox
                                                </label>
                                                <label class="custom_radio">
                                                    <input type="radio" name="budget" value="Yes">
                                                    <span class="checkmark"></span> Live
                                                </label>
                                            </div>
                                            <div class="form-group form-placeholder">
                                                <label>Braintree Tokenization key <span class="star-red">*</span></label>
                                                <input type="text" class="form-control" placeholder="sandbox_pgjcppvs_pd6gznv7zbrx9hb8">
                                            </div>
                                            <div class="form-group form-placeholder">
                                                <label>Braintree Merchant ID <span class="star-red">*</span></label>
                                                <input type="text" class="form-control" placeholder="pd6gznv7zbrx9hb8">
                                            </div>
                                            <div class="form-group form-placeholder">
                                                <label>Braintree Public key <span class="star-red">*</span></label>
                                                <input type="text" class="form-control" placeholder="h8bydrz7gcjkp7d4">
                                            </div>
                                            <div class="form-group form-placeholder">
                                                <label>Braintree Private key <span class="star-red">*</span></label>
                                                <input type="text" class="form-control" placeholder="sandbox_pgjcppvs_pd6gznv7zbrx9hb8">
                                            </div>
                                            <div class="form-group form-placeholder">
                                                <label>Paypal APP ID <span class="star-red">*</span></label>
                                                <input type="text" class="form-control" placeholder="pd6gznv7zbrx9hb8">
                                            </div>
                                            <div class="form-group form-placeholder">
                                                <label>Paypal Secret Key <span class="star-red">*</span></label>
                                                <input type="text" class="form-control" placeholder="h8bydrz7gcjkp7d4">
                                            </div>
                                            <div class="form-group mb-0">
                                                <div class="settings-btns">
                                                    <button type="submit" class="btn btn-orange">Save</button>
                                                    <button type="submit" class="btn btn-grey">Cancel</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body pt-0">
                                    <div class="card-header d-flex justify-content-between align-items-center">
                                        <h5 class="card-title">Stripe</h5>
                                        <div class="status-toggle d-flex justify-content-between align-items-center">
                                            <input type="checkbox" id="status_2" class="check" checked="">
                                            <label for="status_2" class="checktoggle">checkbox</label>
                                        </div>
                                    </div>
                                    <form>
                                        <div class="settings-form">
                                            <div class="form-group">
                                                <p class="pay-cont">Stripe Option</p>
                                                <label class="custom_radio me-4">
                                                    <input type="radio" name="budget" value="Yes" checked="">
                                                    <span class="checkmark"></span> Sandbox
                                                </label>
                                                <label class="custom_radio">
                                                    <input type="radio" name="budget" value="Yes">
                                                    <span class="checkmark"></span> Live
                                                </label>
                                            </div>
                                            <div class="form-group form-placeholder">
                                                <label>Gateway Name <span class="star-red">*</span></label>
                                                <input type="text" class="form-control" placeholder="Stripe">
                                            </div>
                                            <div class="form-group form-placeholder">
                                                <label>API Key <span class="star-red">*</span></label>
                                                <input type="text" class="form-control" placeholder="pk_test_AealxxOygZz84AruCGadWvUV00mJQZdLvr">
                                            </div>
                                            <div class="form-group form-placeholder">
                                                <label>Rest Key <span class="star-red">*</span></label>
                                                <input type="text" class="form-control" placeholder="sk_test_8HwqAWwBd4C4E77bgAO1jUgk00hDlERgn3">
                                            </div>
                                            <div class="form-group mb-0">
                                                <div class="settings-btns">
                                                    <button type="submit" class="btn btn-orange">Save</button>
                                                    <button type="submit" class="btn btn-grey">Cancel</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
<Nuxt />
</div>
</template>

<script>
export default {
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