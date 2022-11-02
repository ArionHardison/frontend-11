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
                        <li class="breadcrumb-item"><NuxtLink to="/admin/admin_index">Home</NuxtLink></li>
                        <li class="breadcrumb-item"><NuxtLink to="/admin/settings">Settings</NuxtLink></li>
                        <li class="breadcrumb-item active">Social Links</li>
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
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/admin/payment-settings">Payment Settings</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/admin/email-settings">Email Settings</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/admin/social-settings">Social Media Login</NuxtLink>
                        </li>
                        <li class="nav-item active">
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
                    <div class="col-lg-6 col-md-8">
                        <div class="card">
                            <div class="card-body pt-0">
                                <div class="card-header">
                                    <h5 class="card-title">Social Link Settings</h5>
                                </div>
                                <form>
                                    <div class="settings-form">
                                        <div class="links-info">
                                            <div class="row form-row links-cont">
                                                <div class="col-12 col-md-11">
                                                    <div class="form-group form-placeholder d-flex">
                                                        <button class="btn social-icon">
                                                            <facebook-icon size="1.4x" class="custom-class"></facebook-icon>
                                                        </button>
                                                        <input type="text" class="form-control" placeholder="https://www.facebook.com">
                                                    </div> 
                                                </div>
                                                <div class="col-12 col-md-1">
                                                    <a href="javascript:void(0);" class="btn trash">
                                                        <trash-2-icon size="1.4x" class="custom-class"></trash-2-icon>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="links-info">
                                            <div class="row form-row links-cont">
                                                <div class="col-12 col-md-11">
                                                    <div class="form-group form-placeholder d-flex">
                                                        <button class="btn social-icon">
                                                            <twitter-icon size="1.4x" class="custom-class"></twitter-icon>
                                                        </button>
                                                        <input type="text" class="form-control" placeholder="https://www.twitter.com">
                                                    </div> 
                                                </div>
                                                <div class="col-12 col-md-1">
                                                    <a href="javascript:void(0);" class="btn trash">
                                                        <trash-2-icon size="1.4x" class="custom-class"></trash-2-icon>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="links-info">
                                            <div class="row form-row links-cont">
                                                <div class="col-12 col-md-11">
                                                    <div class="form-group form-placeholder d-flex">
                                                        <button class="btn social-icon">
                                                            <youtube-icon size="1.4x" class="custom-class"></youtube-icon>
                                                        </button>
                                                        <input type="text" class="form-control" placeholder="https://www.youtube.com">
                                                    </div> 
                                                </div>
                                                <div class="col-12 col-md-1">
                                                    <a href="javascript:void(0);" class="btn trash">
                                                        <trash-2-icon size="1.4x" class="custom-class"></trash-2-icon>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="links-info">
                                            <div class="row form-row links-cont">
                                                <div class="col-12 col-md-11">
                                                    <div class="form-group form-placeholder d-flex">
                                                        <button class="btn social-icon">
                                                            <linkedin-icon size="1.4x" class="custom-class"></linkedin-icon>
                                                        </button>
                                                        <input type="text" class="form-control" placeholder="https://www.linkedin.com">
                                                    </div> 
                                                </div>
                                                <div class="col-12 col-md-1">
                                                    <a href="javascript:void(0);" class="btn trash">
                                                        <trash-2-icon size="1.4x" class="custom-class"></trash-2-icon>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <a href="javascript:void(0);" class="btn add-links">
                                            <i class="fas fa-plus me-1"></i> Add More
                                        </a>
                                    </div>
                                    <div class="form-group mb-0">
                                        <div class="settings-btns">
                                            <button type="submit" class="btn btn-orange">Submit</button>
                                            <button type="submit" class="btn btn-grey">Cancel</button>
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
import { FacebookIcon } from 'vue-feather-icons'
import { Trash2Icon } from 'vue-feather-icons'
import { TwitterIcon } from 'vue-feather-icons'
import { YoutubeIcon } from 'vue-feather-icons'
import { LinkedinIcon } from 'vue-feather-icons'
import { GithubIcon } from 'vue-feather-icons'
export default {
    mounted() {
        if ($('.select').length > 0) {
		$('.select').select2({
			minimumResultsForSearch: -1,
			width: '100%'
		});
	}
        $(".settings-form").on('click','.trash', function () {
	  $(this).closest('.links-cont').remove();
	  return false;
      });
      $(document).on("click",".add-links",function () {
	  var experiencecontent = '<div class="row form-row links-cont">' +
	  '<div class="form-group d-flex">' +
	  '<button class="btn social-icon"><github-icon size="1.4x" class="custom-class"></github-icon></button>' +
	  '<input type="text" class="form-control" placeholder="Social Link">' +
	  '<div><a href="javascript:void(0);" class="btn trash"><trash-2-icon size="1.4x" class="custom-class"></trash-2-icon></a></div>' +
	  '</div>' +
	  '</div>';
	  $(".settings-form").append(experiencecontent);
	  return false;
      });

    },
    components: {
    FacebookIcon,
    Trash2Icon,
    TwitterIcon,
    YoutubeIcon,
    LinkedinIcon,
    GithubIcon
  },
    layout: 'admin',
	computed: {
       currentPath() {
           return this.$route.name
	   },
	}
}
</script>