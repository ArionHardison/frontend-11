<template>
<div>
<!-- Page Wrapper -->
<div class="page-wrapper">
    <div class="content container-fluid">
    
        <!-- Page Header -->
        <div class="page-header">
            <div class="row align-items-center">
                <div class="col">
                    <ul class="list-links">
                        <li><NuxtLink to="/admin/upcoming-appointments">Upcoming Appointments <span>(48)</span></NuxtLink></li>
                        <li class="active"><NuxtLink to="/admin/past-appointments">Past Appointments <span>(98)</span></NuxtLink></li>
                    </ul>
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
        <!-- /Page Header -->
        
        <!-- Past Appointments -->
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header border-bottom-0">
                        <div class="row align-items-center">
                            <div class="col">
                                <h5 class="card-title">Past Appointments</h5>
                            </div>
                            <div class="col-auto d-flex">
                                <form>
                                    <div class="multipleSelection">
                                        <div class="selectBox">
                                            <p class="mb-0"><filter-icon size="1.4x" class="custom-class me-1"></filter-icon>
                                                Filter</p>
                                            <span class="down-icon"><chevron-down-icon size="1.4x" class="custom-class"></chevron-down-icon></span>
                                        </div>					  
                                        <div id="checkBoxes">
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
                                            <NuxtLink to="/admin/past-appointments">
                                            <button type="submit" class="btn w-100 btn-primary">Apply</button>
                                        </NuxtLink>
                                        </div>
                                    </div>
                                </form>
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
                                       <th>Doctor</th>
                                       <th>Disease</th>
                                       <th>Appointment Date & Time</th>
                                       <th>Amount</th>
                                       <th>Status</th>
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
                                                <NuxtLink class="avatar-pos" to="/admin/profile"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-05.jpg" alt="User Image"></NuxtLink>
                                                <NuxtLink to="/admin/profile" class="user-name"><span class="text-muted">Dr. Rayan</span> <span class="tab-subtext">Gyanoclogist</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td><span class="disease-name">Allergies & Asthma</span></td>
                                        <td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
                                        <td>$300.00</td>
                                        <td><span class="badge bg-badge-grey text-success"><i class="fas fa-circle me-1"></i> Completed</span></td>
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
                                                <a href="javascript:void(0);" class="user-name"><span class="text-muted">Dr. Monroe</span> <span class="tab-subtext">Hair Specialities</span></a>
                                            </h2>
                                        </td>
                                        <td><span class="disease-name">Sleep Problem</span></td>
                                        <td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
                                        <td>$300.00</td>
                                        <td><span class="badge bg-badge-grey text-danger"><i class="fas fa-circle me-1"></i> Cancelled</span></td>
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
                                        <td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
                                        <td>$300.00</td>
                                        <td><span class="badge bg-badge-grey text-success"><i class="fas fa-circle me-1"></i> Completed</span></td>
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
                                        <td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
                                        <td>$300.00</td>
                                        <td><span class="badge bg-badge-grey text-success"><i class="fas fa-circle me-1"></i> Completed</span></td>
                                    </tr>
                                    <tr>
                                        <td>#5644</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink to="/admin/profile"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-13.jpg" alt="User Image"></NuxtLink>
                                                <NuxtLink to="/admin/profile"><span class="user-name">Gobbs Siauw</span> <span class="text-muted">Male, 40 Years Old</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a class="avatar-pos" href="javascript:void(0);"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-12.jpg" alt="User Image"></a>
                                                <NuxtLink to="/admin/profile" class="user-name"><span class="text-muted">Dr. John</span> <span class="tab-subtext">Gyanoclogist</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td><span class="disease-name">Allergies & Asthma</span></td>
                                        <td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
                                        <td>$300.00</td>
                                        <td><span class="badge bg-badge-grey text-success"><i class="fas fa-circle me-1"></i> Completed</span></td>
                                    </tr>
                                    <tr>
                                        <td>#2324</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink to="/admin/profile"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-11.jpg" alt="User Image"></NuxtLink>
                                                <NuxtLink to="/admin/profile"><span class="user-name">Deborah</span> <span class="text-muted">Female,30 Years Old</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a class="avatar-pos" href="javascript:void(0);"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-06.jpg" alt="User Image"></a>
                                                <NuxtLink to="/admin/profile" class="user-name"><span class="text-muted">Dr. Linda</span> <span class="tab-subtext">Hair Specialities</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td><span class="disease-name">Sleep Problem</span></td>
                                        <td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
                                        <td>$300.00</td>
                                        <td><span class="badge bg-badge-grey text-danger"><i class="fas fa-circle me-1"></i> Cancelled</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
                <div id="tablepagination"  class="dataTables_wrapper"></div>
            </div>
        </div>
        
        <!-- /Past Appointments -->
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
import { UserIcon } from 'vue-feather-icons'
export default {
    components: {
    CalendarIcon,
    FilterIcon,
    ChevronDownIcon,
    UserIcon
  },
    mounted() {
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