<template>
	<div>
        <div class="sidebar" id="sidebar">
            <div class="sidebar-inner slimscroll">
                <vue-custom-scrollbar class="scroll-area"  :settings="settings" @ps-scroll-y="scrollHanle">
                <div id="sidebar-menu" class="sidebar-menu">
                    <ul>
                        <li class="menu-title"><span>Main</span></li>
                        <li>
                            <NuxtLink to="/admin/admin_index"><grid-icon size="1.4x" class="custom-class"></grid-icon> <span>Dashboard</span></NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/admin/upcoming-appointments"><calendar-icon size="1.4x" class="custom-class"></calendar-icon> <span>Appointments</span></NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/admin/specialities"><package-icon size="1.4x" class="custom-class"></package-icon> <span>Specialities</span></NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/admin/doctor-list"><user-plus-icon size="1.4x" class="custom-class"></user-plus-icon> <span>Doctors</span></NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/admin/patient-list"> <users-icon size="1.4x" class="custom-class"></users-icon> <span>Patients</span></NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/admin/ratings"><star-icon size="1.4x" class="custom-class"></star-icon> <span>Reviews</span></NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/admin/transaction"><credit-card-icon size="1.4x" class="custom-class"></credit-card-icon> <span>Transactions</span></NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/admin/settings"><sliders-icon size="1.4x" class="custom-class"></sliders-icon> <span> Settings</span></NuxtLink>
                        </li>
                        <li class="submenu">
                            <a href="javascript:void(0);"><file-text-icon size="1.4x" class="custom-class"></file-text-icon> <span> Reports</span> <span class="menu-arrow"></span></a>
                            <ul>
                                <li><NuxtLink to="/admin/appointment-report">Appointment Report</NuxtLink></li>
                                <li><NuxtLink to="/admin/income-report">Income Report</NuxtLink></li>
                                <li><NuxtLink to="/admin/invoice-report">Invoice Report</NuxtLink></li>
                                <li><NuxtLink to="/admin/user-reports">Users Report</NuxtLink></li>
                            </ul>
                        </li>								
                        <li class="menu-title"> 
                            <span>Pharmacy</span>
                        </li>	
                        <li class="submenu">
                            <a href="javascript:void(0);"><file-plus-icon size="1.4x" class="custom-class"></file-plus-icon> <span> Pharmacies</span> <span class="menu-arrow"></span></a>
                            <ul>
                                <li><NuxtLink to="/admin/pharmacy-list">All Pharmacies</NuxtLink></li>
                                <li><NuxtLink to="/admin/pharmacy-category">Categories</NuxtLink></li>
                            </ul>
                        </li>
                        <li class="submenu">
                            <a href="javascript:void(0);"><shopping-cart-icon size="1.4x" class="custom-class"></shopping-cart-icon> <span> Product List</span> <span class="menu-arrow"></span></a>
                            <ul>
                                <li><NuxtLink to="/admin/product-list">All Products</NuxtLink></li>
                                <li><NuxtLink to="/admin/product-category">Categories</NuxtLink></li>
                            </ul>
                        </li>					
                        <li class="menu-title"> 
                            <span>Blog</span>
                        </li>
                        <li class="submenu">
                            <a href="javascript:void(0);"><grid-icon size="1.4x" class="custom-class"></grid-icon> <span> Blog</span> <span class="menu-arrow"></span></a>
                            <ul>
                                <li><NuxtLink to="/admin/active-blog">Blogs</NuxtLink></li>
                                <li><NuxtLink to="/admin/blog-details">Blog Details</NuxtLink></li>
                                <li><NuxtLink to="/admin/add-blog">Add Blog</NuxtLink></li>
                                <li><NuxtLink to="/admin/edit-blog">Edit Blog</NuxtLink></li>
                            </ul>
                        </li>					
                        <li class="menu-title"> 
                            <span>Pages</span>
                        </li>
                        <li> 
                            <NuxtLink to="/admin/add-profile"><user-icon size="1.4x" class="custom-class"></user-icon> <span>Profile</span></NuxtLink>
                        </li>
                        <li class="submenu">
                            <a href="javascript:void(0);"><lock-icon size="1.4x" class="custom-class"></lock-icon> <span> Authentication </span> <span class="menu-arrow"></span></a>
                            <ul>
                                <li><NuxtLink to="/admin/login"> Login </NuxtLink></li>
                                <li><NuxtLink to="/admin/register"> Register </NuxtLink></li>
                                <li><NuxtLink to="/admin/forgot-password"> Forgot Password </NuxtLink></li>
                                <li><NuxtLink to="/admin/lock-screen"> Lock Screen </NuxtLink></li>
                            </ul>
                        </li>
                        <li class="submenu">
                            <a href="javascript:void(0);"><book-open-icon size="1.4x" class="custom-class"></book-open-icon> <span> Error Pages </span> <span class="menu-arrow"></span></a>
                            <ul>
                                <li><NuxtLink to="/admin/error-404">404 Error </NuxtLink></li>
                                <li><NuxtLink to="/admin/error-500">500 Error </NuxtLink></li>
                            </ul>
                        </li>
                        <li> 
                            <NuxtLink to="/admin/blank-page"><clipboard-icon size="1.4x" class="custom-class"></clipboard-icon> <span>Blank Page</span></NuxtLink>
                        </li>
                        <li class="menu-title"> 
                            <span>UI Interface</span>
                        </li>
                        <li> 
                            <NuxtLink to="/admin/components"><pocket-icon size="1.4x" class="custom-class"></pocket-icon> <span>Components</span></NuxtLink>
                        </li>
                        <li class="submenu">
                            <a href="javascript:void(0);"> <file-minus-icon size="1.4x" class="custom-class"></file-minus-icon> <span> Forms </span> <span class="menu-arrow"></span></a>
                            <ul>
                                <li><NuxtLink to="/admin/form-basic-inputs">Basic Inputs </NuxtLink></li>
                                <li><NuxtLink to="/admin/form-input-groups">Input Groups </NuxtLink></li>
                                <li><NuxtLink to="/admin/form-horizontal">Horizontal Form </NuxtLink></li>
                                <li><NuxtLink to="/admin/form-vertical"> Vertical Form </NuxtLink></li>
                                <li><NuxtLink to="/admin/form-mask">Form Mask </NuxtLink></li>
                                <li><NuxtLink to="/admin/form-validation">Form Validation </NuxtLink></li>
                            </ul>
                        </li>
                        <li class="submenu">
                            <a href="javascript:void(0);"><align-justify-icon size="1.4x" class="custom-class"></align-justify-icon> <span> Tables </span> <span class="menu-arrow"></span></a>
                            <ul>
                                <li><NuxtLink to="/admin/tables-basic">Basic Tables </NuxtLink></li>
                                <li><NuxtLink to="/admin/data-tables">Data Table </NuxtLink></li>
                            </ul>
                        </li>
                        <li class="submenu">
                            <a href="javascript:void(0);"><life-buoy-icon size="1.4x" class="custom-class"></life-buoy-icon> <span>Multi Level</span> <span class="menu-arrow"></span></a>
                            <ul style="display: none;">
                                <li class="submenu">
                                    <a href="javascript:void(0);"> <span>Level 1</span> <span class="menu-arrow"></span></a>
                                    <ul style="display: none;">
                                        <li><a href="javascript:void(0);"><span>Level 2</span></a></li>
                                        <li class="submenu">
                                            <a href="javascript:void(0);"> <span> Level 2</span> <span class="menu-arrow"></span></a>
                                            <ul style="display: none;">
                                                <li><a href="javascript:void(0);">Level 3</a></li>
                                                <li><a href="javascript:void(0);">Level 3</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="javascript:void(0);"> <span>Level 2</span></a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="javascript:void(0);"> <span>Level 1</span></a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </vue-custom-scrollbar>
            </div>
        </div>
	</div>
</template>
<script>
    import vueCustomScrollbar from 'vue-custom-scrollbar'
     import "vue-custom-scrollbar/dist/vueScrollbar.css"
     import { GridIcon } from 'vue-feather-icons'
     import { CalendarIcon } from 'vue-feather-icons'
     import { PackageIcon } from 'vue-feather-icons'
     import { UserPlusIcon } from 'vue-feather-icons'
     import { UsersIcon } from 'vue-feather-icons'
     import { StarIcon } from 'vue-feather-icons'
     import { CreditCardIcon } from 'vue-feather-icons'
     import { SlidersIcon } from 'vue-feather-icons'
     import { FileTextIcon } from 'vue-feather-icons'
     import { FilePlusIcon } from 'vue-feather-icons'
     import { ShoppingCartIcon } from 'vue-feather-icons'
     import { UserIcon } from 'vue-feather-icons'
     import { LockIcon } from 'vue-feather-icons'
     import { BookOpenIcon } from 'vue-feather-icons'
     import { ClipboardIcon } from 'vue-feather-icons'
     import { PocketIcon } from 'vue-feather-icons'
     import { FileMinusIcon } from 'vue-feather-icons'
     import { AlignJustifyIcon } from 'vue-feather-icons'
     import { LifeBuoyIcon } from 'vue-feather-icons'

	export default {
        components: {
    vueCustomScrollbar,
    GridIcon,
    CalendarIcon,
    PackageIcon,
    UserPlusIcon,
    UsersIcon,
    StarIcon,
    CreditCardIcon,
    SlidersIcon,
    FileTextIcon,
    FilePlusIcon,
    ShoppingCartIcon,
    PocketIcon,
    UserIcon,
    LockIcon,
    BookOpenIcon,
    ClipboardIcon,
    FileMinusIcon,
    AlignJustifyIcon,
    LifeBuoyIcon
  },
		mounted() {
            if($('.floating').length > 0 ){
		$('.floating').on('focus blur', function (e) {
		$(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
		}).trigger('blur');
	}
            if($('.multipleSelection').length > 0) {
		var show = true;
		var checkboxes = document.getElementById("checkBoxes");
		$('.selectBox').on("click", function() {
			
			if (show) {
				checkboxes.style.display = "block";
				show = false;
			} else {
				checkboxes.style.display = "none";
				show = true;
			}
		});	
	}
    if($('.SortBy').length > 0) {
		var show = true;
		var checkbox1 = document.getElementById("checkBox");
		$('.selectBoxes').on("click", function() {
			
			if (show) {
				checkbox1.style.display = "block";
				show = false;
			} else {
				checkbox1.style.display = "none";
				show = true;
			}
		});		
	}
    $('#sidebar-menu a').on('click', function (e) {
        if ($(this).parent().hasClass('submenu')) {
          e.preventDefault();
        }
        if (!$(this).hasClass('subdrop')) {
          $('ul', $(this).parents('ul:first')).slideUp(350);
          $('a', $(this).parents('ul:first')).removeClass('subdrop');
          $(this).next('ul').slideDown(350);
          $(this).addClass('subdrop');
        } else if ($(this).hasClass('subdrop')) {
          $(this).removeClass('subdrop');
          $(this).next('ul').slideUp(350);
        }
      });
      $('#sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');

      if ($('.select').length > 0) {
		$('.select').select2({
			minimumResultsForSearch: -1,
			width: '100%'
		});
	}
    if($('#dark-mode-toggle').length > 0) {
		$("#dark-mode-toggle").children("svg:first").addClass("active");
		let darkMode = localStorage.getItem('darkMode'); 
		
		const darkModeToggle = document.querySelector('#dark-mode-toggle');
		
		const enableDarkMode = () => {
			document.body.classList.add('darkmode');
			$("#dark-mode-toggle").children("svg:last").addClass("active");
			$("#dark-mode-toggle").children("svg:first").removeClass("active");
			localStorage.setItem('darkMode', 'enabled');
		}

		const disableDarkMode = () => {
		  document.body.classList.remove('darkmode');
			$("#dark-mode-toggle").children("svg:last").removeClass("active");
			$("#dark-mode-toggle").children("svg:first").addClass("active");
		  localStorage.setItem('darkMode', null);
		}
		 
		if (darkMode === 'enabled') {
			enableDarkMode();
		}

		darkModeToggle.addEventListener('click', () => {
		  darkMode = localStorage.getItem('darkMode'); 
		  
		  if (darkMode !== 'enabled') {
			enableDarkMode();
		  } else {  
			disableDarkMode(); 
		  }
		});
	}
		},
   data() {
      return {
        settings: {
suppressScrollX: true,
},
        activeClass: 'active',
      };
              //  isactive : true
    },
    methods: {
    scrollHanle(evt) {
      console.log(evt)
    }
  },
	}
</script>
<style>
    .scroll-area {
      position: relative;
      margin: auto;
      height: calc(100vh - 60px);
      background-color: transparent !important;
  }
  .sidebar-menu li a.nuxt-link-active {
    color: #0CE0FF !important;
}
.sidebar-menu ul ul a.nuxt-link-active {
    color: #20e3ff;
    background-color: unset;
}
</style>
