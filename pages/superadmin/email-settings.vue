<template>
<div>
<!-- Page Wrapper -->
<div class="page-wrapper">
    <div class="content container-fluid">
        <div class="page-header">
            <div class="row">
                <div class="col-sm-6">
                    <h3 class="page-title">Settings</h3>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><NuxtLink to="/superadmin/superadmin_index">Home</NuxtLink></li>
                        <li class="breadcrumb-item"><NuxtLink to="/superadmin/settings">Settings</NuxtLink></li>
                        <li class="breadcrumb-item active">Email Settings</li>
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
                            <NuxtLink class="nav-link" to="/superadmin/settings">General Settings</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/superadmin/localization-details">Localization</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/superadmin/payment-settings">Payment Settings</NuxtLink>
                        </li>
                        <li class="nav-item active">
                            <NuxtLink class="nav-link" to="/superadmin/email-settings">Email Settings</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/superadmin/social-settings">Social Media Login</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/superadmin/social-links">Social Links</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/superadmin/seo-settings">SEO Settings</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/superadmin/others-settings">Others</NuxtLink>
                        </li>
                    </ul>
                </div>
                <!-- Settings Menu -->

                <div class="row">
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-body pt-0">
                                <div class="card-header d-flex justify-content-between align-items-center">
                                    <h5 class="card-title">PHP Mail</h5>
                                    <div class="status-toggle d-flex justify-content-between align-items-center">
                                        <input type="checkbox" id="status_1" class="check">
                                        <label for="status_1" class="checktoggle">checkbox</label>
                                    </div>
                                </div>
                                <form>
                                    <div class="settings-form">
                                        <div class="form-group form-placeholder">
                                            <label>Email From Address <span class="star-red">*</span></label>
                                            <input type="text" class="form-control">
                                        </div>
                                        <div class="form-group form-placeholder">
                                            <label>Email Password <span class="star-red">*</span></label>
                                            <input type="text" class="form-control">
                                        </div>
                                        <div class="form-group form-placeholder">
                                            <label>Emails From Name <span class="star-red">*</span></label>
                                            <input type="text" class="form-control">
                                        </div>
                                        <div class="form-group mb-0">
                                            <div class="settings-btns">
                                                <button type="submit" class="btn btn-orange">Submit</button>
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
                                    <h5 class="card-title">SMTP</h5>
                                    <div class="status-toggle d-flex justify-content-between align-items-center">
                                        <input type="checkbox" id="status_2" class="check" checked="">
                                        <label for="status_2" class="checktoggle">checkbox</label>
                                    </div>
                                </div>
                                <form>
                                    <div class="settings-form">
                                        <div class="form-group form-placeholder">
                                            <label>Email From Address <span class="star-red">*</span></label>
                                            <input type="text" class="form-control">
                                        </div>
                                        <div class="form-group form-placeholder">
                                            <label>Email Password <span class="star-red">*</span></label>
                                            <input type="text" class="form-control">
                                        </div>
                                        <div class="form-group form-placeholder">
                                            <label>Email Host <span class="star-red">*</span></label>
                                            <input type="text" class="form-control">
                                        </div>
                                        <div class="form-group form-placeholder">
                                            <label>Email Port <span class="star-red">*</span></label>
                                            <input type="text" class="form-control">
                                        </div>
                                        <div class="form-group mb-0">
                                            <div class="settings-btns">
                                                <button type="submit" class="btn btn-orange">Submit</button>
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
<!-- /Page Wrapper -->
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
    },
    layout: 'superadmin',
	computed: {
       currentPath() {
           return this.$route.name
	   },
	}
}
</script>