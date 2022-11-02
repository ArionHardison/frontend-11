<template>
	<div>
        <div class="sidebar" id="sidebar">
            <div class="sidebar-inner slimscroll">
                <div id="sidebar-menu" class="sidebar-menu">
                    <ul>
                        <li class="menu-title"><span>Main</span></li>
                        <li>
                            <NuxtLink to="/superadmin/superadmin_index"><home-icon size="1.4x" class="custom-class"></home-icon> <span>Dashboard</span></NuxtLink>
                        </li>
                        <li class="submenu">
                            <a href="javascript:void(0);"><shopping-cart-icon size="1.4x" class="custom-class"></shopping-cart-icon> <span> Products</span> <span class="menu-arrow"></span></a>
                            <ul>
                                <li><NuxtLink to="/superadmin/products">Products</NuxtLink></li>
                                <li><NuxtLink to="/superadmin/add-product">Add Product</NuxtLink></li>
                                <li><NuxtLink to="/superadmin/outstock">Out Stock</NuxtLink></li>
                                <li><NuxtLink to="/superadmin/expired">Expired</NuxtLink></li>
                            </ul>
                        </li>
                        <li>
                            <NuxtLink to="/superadmin/categories"><layout-icon size="1.4x" class="custom-class"></layout-icon> <span>Categories</span></NuxtLink>
                        </li>
                        <li class="submenu">
                            <a href="javascript:void(0);"><star-icon size="1.4x" class="custom-class"></star-icon> <span> Purchase</span> <span class="menu-arrow"></span></a>
                            <ul>
                                <li><NuxtLink to="/superadmin/purchase">Purchase</NuxtLink></li>
                                <li><NuxtLink to="/superadmin/add-purchase">Add Purchase</NuxtLink></li>
                                <li><NuxtLink to="/superadmin/order">Orders</NuxtLink></li>
                            </ul>
                        </li>
                        <li>
                            <NuxtLink to="/superadmin/sales"><activity-icon size="1.4x" class="custom-class"></activity-icon> <span>Sales</span></NuxtLink>
                        </li>
                        <li class="submenu">
                            <a href="javascript:void(0);"><user-icon size="1.4x" class="custom-class"></user-icon> <span> Supplier</span> <span class="menu-arrow"></span></a>
                            <ul>
                                <li><NuxtLink to="/superadmin/supplier">Supplier</NuxtLink></li>
                                <li><NuxtLink to="/superadmin/add-supplier">Add Supplier</NuxtLink></li>
                            </ul>
                        </li>	
                        <li> 
                            <NuxtLink to="/superadmin/transactions-list"><credit-card-icon size="1.4x" class="custom-class"></credit-card-icon> <span> Transaction</span></NuxtLink>
                        </li>
                        <li class="submenu">
                            <a href="javascript:void(0);"><file-text-icon size="1.4x" class="custom-class"></file-text-icon> <span> Reports</span> <span class="menu-arrow"></span></a>
                            <ul>
                                <li><NuxtLink to="/superadmin/invoice">Invoice</NuxtLink></li>
                                <li><NuxtLink to="/superadmin/invoice-report">Invoice Reports</NuxtLink></li>
                            </ul>
                        </li>	
                        <li class="menu-title"> 
                            <span>Pages</span>
                        </li>				
                        <li> 
                            <NuxtLink to="/superadmin/profile"><user-icon size="1.4x" class="custom-class"></user-icon> <span>Profile</span></NuxtLink>
                        </li>
                        <li> 
                            <NuxtLink to="/superadmin/settings"><sliders-icon size="1.4x" class="custom-class"></sliders-icon> <span>Settings</span></NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
	</div>
</template>
<script>
    import vueCustomScrollbar from 'vue-custom-scrollbar'
    import "vue-custom-scrollbar/dist/vueScrollbar.css"
    import { HomeIcon } from 'vue-feather-icons'
    import { ShoppingCartIcon } from 'vue-feather-icons'
    import { LayoutIcon } from 'vue-feather-icons'
    import { StarIcon } from 'vue-feather-icons'
    import { ActivityIcon } from 'vue-feather-icons'
    import { UserIcon } from 'vue-feather-icons'
    import { CreditCardIcon } from 'vue-feather-icons'
    import { FileTextIcon } from 'vue-feather-icons'
    import { SlidersIcon } from 'vue-feather-icons'

	export default {
        components: {
    vueCustomScrollbar,
    HomeIcon,
    ShoppingCartIcon,
    LayoutIcon,
    StarIcon,
    ActivityIcon,
    UserIcon,
    CreditCardIcon,
    FileTextIcon,
    SlidersIcon
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