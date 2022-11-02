<template>
<div>
<!-- Page Wrapper -->
<div class="page-wrapper">
    <div class="content container-fluid content-wrap">
        
        <!-- Appointments Report -->
        <div class="row">
            <div class="col-md-12">							
                <div class="card">
                    <div class="card-header">
                        <div class="row align-items-center">
                            <div class="col">
                                <h5 class="card-title">Income Report</h5>
                            </div>
                            <div class="col-auto">
                                <div class="bookingrange btn btn-white btn-sm">
                                    <div class="cal-ico">
                                        <calendar-icon size="1.4x" class="custom-class mr-1"></calendar-icon>
                                        <span>Select Date</span>
                                    </div>
                                    <div class="ico">
                                        <i class="fas fa-chevron-left"></i>
                                        <i class="fas fa-chevron-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">			
                        <div class="w-100">			
                            <div class="income-rev">Total Revenue : <span>$451254K</span></div>
                        </div>
                        <div id="totincome-report"></div>
                    </div>
                </div>
            </div>						
        </div>
        <!-- /Appointments Report -->
        
        <!-- Upcoming Appointments -->
        <div class="row">
            <div class="col-sm-12">
                <div class="app-listing">
                    <div class="custom-list">
                        <div class="SortBy">
                            <div class="selectBoxes order-by">
                                <p class="mb-0"><img src="../../assets/admin_img/icon/sort.png" class="me-2" alt="icon"> Order by </p>
                                <span class="down-icon"> <chevron-down-icon size="1.4x" class="custom-class"></chevron-down-icon></span>
                            </div>						  
                            <div id="checkBox">
                                <form>
                                    <p class="lab-title">Order By </p>
                                    <label class="custom_radio w-100">
                                        <input type="radio" name="order">
                                        <span class="checkmark"></span> ID
                                    </label>
                                    <label class="custom_radio w-100">
                                        <input type="radio" name="order">
                                        <span class="checkmark"></span> Amount
                                    </label>
                                    <label class="custom_radio w-100">
                                        <input type="radio" name="order">
                                        <span class="checkmark"></span> Date
                                    </label>
                                    <label class="custom_radio w-100">
                                        <input type="radio" name="order">
                                        <span class="checkmark"></span> Number of Appointments
                                    </label>
                                    <p class="lab-title">Sort By</p>
                                    <label class="custom_radio w-100">
                                        <input type="radio" name="sort">
                                        <span class="checkmark"></span> Ascending
                                    </label>
                                    <label class="custom_radio w-100">
                                        <input type="radio" name="sort">
                                        <span class="checkmark"></span> Descending
                                    </label>
                                    <NuxtLink to="/admin/income-report">
                                    <button type="submit" class="btn w-100 btn-primary">Apply</button>
                                </NuxtLink>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="import-list">
                        <a href="javascript:void(0);"><download-icon size="1.4x" class="custom-class"></download-icon> Import</a>
                    </div>
                </div>
                
                <div class="card">
                    <div class="card-header">
                        <div class="row align-items-center">
                            <div class="col">
                                <h5 class="card-title">Doctors</h5>
                            </div>
                        </div>
                    </div>
                    <div class="card-body p-0">				
                        <div class="table-responsive">									
                            <table class="datatable table table-borderless hover-table" id="data-tables">
                                <thead class="thead-light">
                                    <tr>
                                       <th>ID</th>
                                       <th>Doctor</th>
                                       <th>Specialities</th>
                                       <th>Member Since</th>
                                       <th>Number of Appointments</th>
                                       <th>Total Income</th>
                                       <th>Account Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>#4546</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a class="avatar-pos" href="javascript:void(0);" data-bs-target="#doctorlist" data-bs-toggle="modal"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-05.jpg" alt="User Image"></a>
                                                <NuxtLink to="/admin/profile" class="user-name">Dr. Rayan</NuxtLink>
                                            </h2>
                                        </td>
                                        <td>Gyanoclogist</td>
                                        <td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
                                        <td>545</td>
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
                                                <a class="avatar-pos" href="javascript:void(0);"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-02.jpg" alt="User Image"></a>
                                                <NuxtLink to="/admin/profile" class="user-name">Dr. Monroe</NuxtLink>
                                            </h2>
                                        </td>
                                        <td>Hair Specialities</td>
                                        <td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
                                        <td>654</td>
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
                                                <a class="avatar-pos" href="javascript:void(0);"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-07.jpg" alt="User Image"></a>
                                                <NuxtLink to="/admin/profile" class="user-name">Dr. Lester</NuxtLink>
                                            </h2>
                                        </td>
                                        <td>Orthopaedics</td>
                                        <td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
                                        <td>787</td>
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
                                                <NuxtLink class="empty-user" to="/admin/profile"><user-icon size="1.4x" class="custom-class"></user-icon> </NuxtLink>
                                                <NuxtLink to="/admin/profile" class="user-name">Dr. Clint</NuxtLink>
                                            </h2>
                                        </td>
                                        <td>Orthopaedics	</td>
                                        <td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
                                        <td>454</td>
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
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div id="tablepagination"  class="dataTables_wrapper"></div>

    </div>
</div>
<!-- /Page Wrapper -->
<Nuxt />
</div>
</template>

<script>
import { CalendarIcon } from 'vue-feather-icons'
import { ChevronDownIcon } from 'vue-feather-icons'
import { DownloadIcon } from 'vue-feather-icons'
import { UserIcon } from 'vue-feather-icons'
export default {
    components: {
    CalendarIcon,
    ChevronDownIcon,
    DownloadIcon,
    UserIcon
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
    if($('#totincome-report').length > 0) {
	var options = {
			series: [{
				name: "Video Call",
				data: [0, 2.5, 1, 3, 4, 2, 3, 2, 4]
			},
			{
				name: "Audio Call",
				data: [0, 2, 4, 4.3, 4, 2.5, 3.5, 2.5, 4, 3]
			},
			{
				name: "Chat",
				data: [0, 4, 4.5, 3.8, 4, 2, 3, 3.5, 4, 3]
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
		markers: {
			size: 3,
		},
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight',
		  width: 1,
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
					return val + "k"
				}
			},
			axisBorder: {
				show: true,
			},
		},
        xaxis: {
          categories: ['', '22/11/2021', '23/11/2021', '24/11/2021', '25/11/2021', '26/11/2021', '27/11/2021', '28/11/2021', '25/11/2021', '25/11/2021'],
			}
    };

    var chart = new ApexCharts(document.querySelector("#totincome-report"), options);
    chart.render();
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