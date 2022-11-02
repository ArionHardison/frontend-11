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
                                <h5 class="card-title">Appointment Report</h5>
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
                        <div id="sales_chart"></div>
                    </div>
                </div>
            </div>						
        </div>
        <!-- /Appointments Report -->
        
        <!-- Upcoming Appointments -->
        <div class="row">
            <div class="col-sm-12">
                <div class="app-listing">
                    <div class="multipleSelection">
                        <div class="selectBox">
                            <p class="mb-0"><filter-icon size="1.4x" class="custom-class me-1"></filter-icon> Filter</p>
                            <span class="down-icon"><chevron-down-icon size="1.4x" class="custom-class"></chevron-down-icon></span>
                        </div>						  
                        <div id="checkBoxes">
                            <form>
                                <div class="form-custom">
                                    <input type="text" class="form-control bg-grey" placeholder="Search by Patient">
                                    <i class="fas fa-search"></i>
                                </div>
                                <div class="form-custom">
                                    <input type="text" class="form-control bg-grey" placeholder="Search by Doctor">
                                    <i class="fas fa-search"></i>
                                </div>
                                <p class="lab-title">Consultation Type</p>
                                <label class="custom_check w-100">
                                    <input type="checkbox" name="year">
                                    <span class="checkmark"></span> Video Call
                                </label>
                                <label class="custom_check w-100">
                                    <input type="checkbox" name="year">
                                    <span class="checkmark"></span> Audio Call
                                </label>
                                <label class="custom_check w-100">
                                    <input type="checkbox" name="year">
                                    <span class="checkmark"></span> Chat
                                </label>
                                <NuxtLink to="/admin/appointment-report">
                                <button type="submit" class="btn w-100 btn-primary">Apply</button>
                            </NuxtLink>
                            </form>
                        </div>
                    </div>
                    <div class="custom-list">
                        <div class="SortBy">
                            <div class="selectBoxes order-by">
                                <p class="mb-0"><img src="../../assets/admin_img/icon/sort.png" class="me-2" alt="icon"> Order by </p>
                                <span class="down-icon"><chevron-down-icon size="1.4x" class="custom-class"></chevron-down-icon></span>
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
                                    <p class="lab-title">Sort By</p>
                                    <label class="custom_radio w-100">
                                        <input type="radio" name="sort">
                                        <span class="checkmark"></span> Ascending
                                    </label>
                                    <label class="custom_radio w-100">
                                        <input type="radio" name="sort">
                                        <span class="checkmark"></span> Descending
                                    </label>
                                    <NuxtLink to="/appointment-report">
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
                    <div class="card-body p-0">				
                        <div class="table-responsive">									
                            <table class="datatable table table-borderless hover-table" id="data-tables">
                                <thead class="thead-light">
                                    <tr>
                                       <th>ID</th>
                                       <th>Patient</th>
                                       <th>Doctor</th>
                                       <th>Disease</th>
                                       <th>Consultation type</th>
                                       <th>Date & Time</th>
                                       <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>#4546</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink to="/admin/profile"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-07.jpg" alt="User Image"></NuxtLink>
                                                <NuxtLink to="/admin/profile"><span class="user-name">Bess Twishes</span> <span class="text-muted">Male, 40 Years Old</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a class="avatar-pos" href="javascript:void(0);"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-05.jpg" alt="User Image"></a>
                                                <NuxtLink to="/admin/profile" class="user-name"><span class="text-muted">Dr. Rayan</span> <span class="tab-subtext">Gyanoclogist</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td><span class="disease-name">Allergies & Asthma</span></td>
                                        <td class="status">
                                            <span>Scheduled Appointment</span> 
                                            <a href="javascript:void(0);" class="d-block text-primary mt-2">
                                                <span class="d-flex align-items-center"><video-icon size="1.4x" class="custom-class me-2"></video-icon> Video call</span>
                                            </a>
                                        </td>
                                        <td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
                                        <td>$300.00</td>
                                    </tr>
                                    <tr>
                                        <td>#8774</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink to="/admin/profile"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-04.jpg" alt="User Image"></NuxtLink>
                                                <NuxtLink to="/admin/profile"><span class="user-name">Bess Twishes</span> <span class="text-muted">Female,30 Years Old</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a class="avatar-pos" href="javascript:void(0);"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-05.jpg" alt="User Image"></a>
                                                <NuxtLink to="/admin/profile" class="user-name"><span class="text-muted">Dr. Monroe</span> <span class="tab-subtext">Hair Specialities</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td><span class="disease-name">Sleep Problem</span></td>
                                        <td class="status">
                                            <span>Scheduled Appointment</span> 
                                            <a href="javascript:void(0);" class="d-block text-primary mt-2">
                                                <span class="d-flex align-items-center"><mic-icon size="1.4x" class="custom-class me-2"></mic-icon> Audio call</span>
                                            </a>
                                        </td>
                                        <td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
                                        <td>$300.00</td>
                                    </tr>
                                    <tr>
                                        <td>#4546</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink to="/admin/profile"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-02.jpg" alt="User Image"></NuxtLink>
                                                <NuxtLink to="/admin/profile"><span class="user-name">Abdul Aziz Lazis</span> <span class="text-muted">Male, 25 Years Old</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a class="avatar-pos" href="javascript:void(0);"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-05.jpg" alt="User Image"></a>
                                                <NuxtLink to="/admin/profile" class="user-name"><span class="text-muted">Dr. Lester</span> <span class="tab-subtext">Orthopaedics</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td><span class="disease-name">Tooth Pain</span></td>
                                        <td class="status">
                                            <span>Scheduled Appointment</span> 
                                            <a href="javascript:void(0);" class="d-block text-primary mt-2">
                                                <span class="d-flex align-items-center"><message-square-icon size="1.4x" class="custom-class me-2"></message-square-icon> Chat</span>
                                            </a>
                                        </td>
                                        <td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
                                        <td>$300.00</td>
                                    </tr>
                                    <tr>
                                        <td>#4546</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink to="/admin/profile"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-05.jpg" alt="User Image"></NuxtLink>
                                                <NuxtLink to="/admin/profile"><span class="user-name">Alex Siauw</span> <span class="text-muted">Male, 29 Years Old</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink class="empty-user" to="/admin/profile"><user-icon size="1.4x" class="custom-class"></user-icon> </NuxtLink>
                                                <NuxtLink to="/admin/profile" class="user-name"><span class="text-muted">Dr. Clint</span> <span class="tab-subtext">Neurology</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td><span class="disease-name">Pain  on knee</span></td>
                                        <td class="status">
                                            <span>Scheduled Appointment</span> 
                                            <a href="javascript:void(0);" class="d-block text-primary mt-2">
                                                <span class="d-flex align-items-center"><mic-icon size="1.4x" class="custom-class me-2"></mic-icon> Audio Call</span>
                                            </a>
                                        </td>
                                        <td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
                                        <td>$300.00</td>
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
import { FilterIcon } from 'vue-feather-icons'
import { ChevronDownIcon } from 'vue-feather-icons'
import { DownloadIcon } from 'vue-feather-icons'
import { VideoIcon } from 'vue-feather-icons'
import { MicIcon } from 'vue-feather-icons'
import { MessageSquareIcon } from 'vue-feather-icons'
import { UserIcon } from 'vue-feather-icons'
export default {
    components: {
    CalendarIcon,
    FilterIcon,
    ChevronDownIcon,
    DownloadIcon,
    VideoIcon,
    MicIcon,
    MessageSquareIcon,
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
    if($('#sales_chart').length > 0) {
		var columnCtx = document.getElementById("sales_chart"),
		columnConfig = {
			colors: ['#0CE0FF', '#1B5A90', '#DFE5FC'],
			series: [
				{
				name: "Video Call",
				type: "column",
				data: [4, 2.8, 5, 2, 3.2, 1.2, 2, 3, 2, 3.5, 5, 2]
				},
				{
				name: "Audio call",
				type: "column",
				data: [3, 3, 2, 3, 1.5, 1, 3, 2, 3, 1.5, 2, 3]
				},
				{
					name: "Chat",
					type: "column",
					data: [4.5, 3.8, 2.5, 3, 4.5, 3, 4.5, 3, 4, 5, 1.5, 2]
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
						return val + "k"
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
						return val + "k"
					}
				}
			}
		};
		var columnChart = new ApexCharts(columnCtx, columnConfig);
		columnChart.render();
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