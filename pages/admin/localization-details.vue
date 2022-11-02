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
                        <li class="breadcrumb-item"><NuxtLink to="/admin/index_admin">Home</NuxtLink></li>
                        <li class="breadcrumb-item"><NuxtLink to="/admin/settings">Settings</NuxtLink></li>
                        <li class="breadcrumb-item active">Localization</li>
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
                        <li class="nav-item active">
                            <NuxtLink class="nav-link" to="/admin/localization-details">Localization</NuxtLink>
                        </li>
                        <li class="nav-item">
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
                            <NuxtLink class="nav-link" to="/admin/seo-settings">SEO Settings</NuxtLink>
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
                                <div class="card-header">
                                    <h5 class="card-title">Localization Details</h5>
                                </div>
                                <form>
                                    <div class="settings-form">
                                        <div class="form-group">
                                            <label>Time Zone</label>
                                            <select class="select form-control">
                                                <option selected="selected">(UTC +5:30) Antarctica/Palmer</option>
                                                <option>(UTC+05:30) India</option> 
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label>Date Format</label>
                                            <select class="select form-control">
                                                <option selected="selected">15 May 2016</option>
                                                <option>15/05/2016</option>
                                                <option>15.05.2016</option>
                                                <option>15-05-2016</option>
                                                <option>05/15/2016</option>
                                                <option>2016/05/15</option>
                                                <option>2016-05-15</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label>Time Format</label>
                                            <select class="select form-control">
                                                <option selected="selected">12 Hours</option>
                                                <option>24 Hours</option>
                                                <option>36 Hours</option>  
                                                <option>48 Hours</option>
                                                <option>60 Hours</option> 
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label>Currency Symbol</label>
                                            <select class="select form-control">
                                                <option selected="selected">$</option>
                                                <option>₹</option>  
                                                <option>£</option>
                                                <option>€</option> 
                                            </select>
                                        </div>
                                        <div class="form-group mb-0">
                                            <div class="settings-btns">
                                                <button type="submit" class="btn btn-orange">Update</button>
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
    layout: 'admin',
	computed: {
       currentPath() {
           return this.$route.name
	   },
	}
}
</script>