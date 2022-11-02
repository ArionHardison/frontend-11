<template>
 <div>
 	<!-- Page Wrapper -->
     <div class="page-wrapper">
        <div class="content container-fluid pb-0">
            
            <h4 class="mb-3">Overview</h4>
            
            <div class="row">
                <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="dash-widget-header">
                                <span class="dash-widget-icon bg-primary">
                                    <dollar-sign-icon size="1.4x" class="custom-class"></dollar-sign-icon>
                                </span>
                                <div class="dash-count">
                                    <h5 class="dash-title">Sales Today</h5>
                                    <div class="dash-counts">
                                        <p>$50.00</p>
                                    </div>
                                </div>
                            </div>
                            <p class="trade-level mb-0"><span class="text-danger me-1"><i class="fas fa-caret-down me-1"></i>2.05%</span> last week</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="dash-widget-header">
                                <span class="dash-widget-icon bg-blue">
                                    <credit-card-icon size="1.4x" class="custom-class"></credit-card-icon>
                                </span>
                                <div class="dash-count">
                                    <h5 class="dash-title">Expense Today</h5>
                                    <div class="dash-counts">
                                        <p>$5.22</p>
                                    </div>
                                </div>
                            </div>
                            <p class="trade-level mb-0"><span class="text-success me-1"><i class="fas fa-caret-up me-1"></i>4.5%</span> last week</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="dash-widget-header">
                                <span class="dash-widget-icon bg-warning">
                                    <folder-plus-icon size="1.4x" class="custom-class"></folder-plus-icon>
                                </span>
                                <div class="dash-count">
                                    <h5 class="dash-title">Medicine</h5>
                                    <div class="dash-counts">
                                        <p>485</p>
                                    </div>
                                </div>
                            </div>
                            <p class="trade-level mb-0"><span class="text-success me-1"><i class="fas fa-caret-up me-1"></i>9.65%</span> last week</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="dash-widget-header">
                                <span class="dash-widget-icon bg-danger">
                                    <users-icon size="1.4x" class="custom-class"></users-icon>
                                </span> 
                                <div class="dash-count">
                                    <h5 class="dash-title">Staff</h5>
                                    <div class="dash-counts">
                                        <p>50</p>
                                    </div>
                                </div>
                            </div>
                            <p class="trade-level mb-0"><span class="text-danger me-1"><i class="fas fa-caret-up me-1"></i>40.5%</span> last week</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <!-- Appointments -->
                <div class="col-xl-7 d-flex">
                    <div class="card flex-fill">
                        <div class="card-header">
                            <div class="row align-items-center">
                                <div class="col">
                                    <h5 class="card-title">Revenue</h5>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">			
                            <div id="sales_chart"></div>
                        </div>
                    </div>
                </div>
                <!-- /Appointments -->
                
                <!-- Income Report -->
                <div class="col-xl-5 d-flex">
                    <div class="card flex-fill">
                        <div class="card-header">
                            <div class="row align-items-center">
                                <div class="col">
                                    <h5 class="card-title">Status</h5>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div id="income-report"></div>
                        </div>
                    </div>
                </div>
                <!-- /Income Report -->
            </div>
            
            <div class="row">
                <!-- Recent Activities -->
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header border-bottom-0">
                            <div class="row align-items-center">
                                <div class="col">
                                    <h5 class="card-title">Latest Customers</h5>
                                </div>
                                <div class="col-auto d-flex">
                                    <div class="bookingrange btn btn-white btn-sm">
                                        <div class="cal-ico">
                                            <span>Select Date</span>
                                            <chevron-down-icon size="1.4x" class="custom-class ms-1"></chevron-down-icon>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body p-0">				
                            <div class="table-responsive">									
                                <table class="table table-borderless hover-table">
                                    <thead class="thead-light">
                                        <tr>
                                           <th>#</th>
                                           <th>Name</th>
                                           <th>Address</th>
                                           <th>Telephone</th>
                                           <th>Email</th>
                                           <th class="text-end">Date added</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>01</td>
                                            <td><NuxtLink to="/superadmin/profile">Ruby Perrin</NuxtLink></td>
                                            <td>takrakka</td>
                                            <td>+54 1245463984</td>
                                            <td>rubyperring@example.com</td>
                                            <td class="text-end">April 14, 2022</td>
                                        </tr>
                                        <tr>
                                            <td>02</td>
                                            <td><NuxtLink to="/superadmin/profile">Darren Elder</NuxtLink></td>
                                            <td>339, Terromont Street</td>
                                            <td>+44 874654536</td>
                                            <td>darrenelder@example.com</td>
                                            <td class="text-end">December 15, 2022</td>
                                        </tr>
                                        <tr>
                                            <td>03</td>
                                            <td><NuxtLink to="/superadmin/profile">Deborah Angel</NuxtLink></td>
                                            <td>339, Terromont Street</td>
                                            <td>+0144 763 351</td>
                                            <td>deborahangel@example.com</td>
                                            <td class="text-end">January 22, 2022</td>
                                        </tr>
                                        <tr>
                                            <td>04</td>
                                            <td><NuxtLink to="/superadmin/profile">Marsha Burke</NuxtLink></td>
                                            <td>2061 Angus Road</td>
                                            <td>+510-306-7033</td>
                                            <td>marshaburke@example.com</td>
                                            <td class="text-end">August 13, 2022</td>
                                        </tr>
                                        <tr>
                                            <td>05</td>
                                            <td><NuxtLink to="/superadmin/profile">Krystyna Rodriquez</NuxtLink></td>
                                            <td>takrakka</td>
                                            <td>+54 8965722222</td>
                                            <td>krystynarodriquez@example.com</td>
                                            <td class="text-end">May 01, 2022</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Recent Activities -->
            </div>
            
        </div>
    </div>
    <!-- /Page Wrapper -->
  <Nuxt />
 </div>
</template>

<script>
import { DollarSignIcon } from 'vue-feather-icons'
import { CreditCardIcon } from 'vue-feather-icons'
import { FolderPlusIcon } from 'vue-feather-icons'
import { UsersIcon } from 'vue-feather-icons'
import { ChevronDownIcon } from 'vue-feather-icons'
export default {
    components: {
    DollarSignIcon,
    CreditCardIcon,
    FolderPlusIcon,
    UsersIcon,
    ChevronDownIcon
  },
    mounted() {
        if ($('.select').length > 0) {
		$('.select').select2({
			minimumResultsForSearch: -1,
			width: '100%'
		});
	}
        $(function(){
            if($('#sales_chart').length > 0) {
		var columnCtx = document.getElementById("sales_chart"),
		columnConfig = {
			colors: ['#0CE0FF', '#1B5A90', '#DFE5FC'],
			series: [
				{
				name: "Gross revenue",
				type: "column",
				data: [15, 28, 5, 2, 32, 12, 30, 3, 2, 35, 15, 10]
				},
				{
				name: "Net revenue",
				type: "column",
				data: [10, 15, 2, 8, 20, 7, 15, 2, 3, 15, 8, 5]
				}
			],
			chart: {
				type: 'bar',
				fontFamily: 'Poppins, sans-serif',
				height: 350,
				toolbar: {
					show: false
				}
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: '60%',
				},
			},
			dataLabels: {
				enabled: false
			},
			grid: {
				show: false,
			},
			legend: {
				position: 'top',
				horizontalAlign: 'right',
			 },
			stroke: {
				show: true,
				width: 2,
				colors: ['transparent']
			},
			xaxis: {
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			},
			yaxis: {
				labels: {
					formatter: function (val) {
						return val + "0"
					}
				},
				axisBorder: {
					show: true,
				},
			},
			fill: {
				opacity: 1
			},
			tooltip: {
				y: {
					formatter: function (val) {
						return val + "0"
					}
				}
			}
		};
		var columnChart = new ApexCharts(columnCtx, columnConfig);
		columnChart.render();
	}
    if($('#income-report').length > 0) {
		var options = {
				series: [{
					name: "Doctors",
					data: [0, 1, 5, 3, 2]
				},
				{
					name: "Patients",
					data: [0, 3, 5, 2, 3]
				}
			],
			colors: ['#0CE0FF', '#1B5A90', '#DFE5FC'],
			  chart: {
			  height: 300,
			  type: 'area',
			  toolbar: {
					show: false
				},
			  zoom: {
				enabled: false
			  }
			},
			dataLabels: {
			  enabled: false
			},
			stroke: {
			  curve: 'straight',
			  width: 1,
			},
			markers: {
				size: 3,
			},
			legend: {
				position: 'top',
				horizontalAlign: 'right',
			 },
			grid: {
			  show: false,
			},
			yaxis: {
				labels: {
					formatter: function (val) {
						return val + "0"
					}
				},
				axisBorder: {
					show: true,
				},
			},
			xaxis: {
			  categories: ['', '22/11/2021', '23/11/2021', '24/11/2021', '25/11/2021'],
				}
		};

		var chart = new ApexCharts(document.querySelector("#income-report"), options);
		chart.render();
	}
});
    },
    head: {
    title: 'Doccure - Pharmacy Dashboard'
  },
    layout: 'superadmin',
	computed: {
       currentPath() {
           return this.$route.name
	   },
	}
}
</script>
<style>
    .fa-users {
        font-size: 20px;
    }
    .fa-credit-card {
        font-size: 20px;
    }
    .fa-folder {
        font-size: 20px;
    }
    .fa-money {
        font-size: 20px;
    }
    </style>