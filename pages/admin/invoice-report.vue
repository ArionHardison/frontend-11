<template>
<div class="main-wrapper">
<!-- Page Wrapper -->
<div class="page-wrapper">
    <div class="content container-fluid content-wrap">
        
        <!-- Total Invoice -->
        <div class="row">
            <div class="col-md-12">							
                <div class="card">
                    <div class="card-header">
                        <div class="row align-items-center">
                            <div class="col">
                                <h5 class="card-title">Invoice Report</h5>
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
                        <div class="income-rev float-none mb-0">Todays Total Invoice : <span>45</span></div>
                        <div id="totsales_chart"></div>
                    </div>
                </div>
            </div>						
        </div>
        <!-- /Total Invoice -->
        
        <!-- Invoice Report -->
        <div class="row">
            <div class="col-sm-12">
                <div class="app-listing">
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
                                    <NuxtLink to="/admin/invoice-report">
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
                    <div class="card-header border-bottom-0">
                        <div class="row align-items-center">
                            <div class="col">
                                <h5 class="card-title">Ratings</h5>
                            </div>
                            <div class="col-auto d-flex">
                                <div class="form-custom me-2">
                                    <div id="tableSearch"  class="dataTables_wrapper"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body p-0">				
                        <div class="table-responsive">									
                            <table class="datatable table table-borderless hover-table" id="data-tables">
                                <thead class="thead-light">
                                    <tr>
                                       <th>ID</th>
                                       <th>Invoice Number</th>
                                       <th>Patient</th>
                                       <th>Created Date</th>
                                       <th>Total Amount</th>
                                       <th></th>
                                       <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>#4546</td>
                                        <td><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#transaction"><span class="text-primary user-name">INV 0001</span></a></td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink to="/admin/profile"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-07.jpg" alt="User Image"></NuxtLink>
                                                <NuxtLink to="/admin/profile"><span class="user-name">Bess Twishes</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
                                        <td>$330.00</td>
                                        <td><span class="badge bg-badge-grey text-success"><i class="fas fa-circle me-1"></i> Paid</span></td>
                                        <td class="text-end">
                                            <div class="actions">
                                                <a class="text-danger" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                                    <trash-2-icon size="1.4x" class="custom-class"></trash-2-icon> Delete
                                                </a>															
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>#8774</td>
                                        <td><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#transaction"><span class="text-primary user-name">INV 0002</span></a></td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink to="/admin/profile"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-04.jpg" alt="User Image"></NuxtLink>
                                                <NuxtLink to="/admin/profile"><span class="user-name">Bess Twishes</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
                                        <td>$330.00</td>
                                        <td><span class="badge bg-badge-grey text-success"><i class="fas fa-circle me-1"></i> Paid</span></td>
                                        <td class="text-end">
                                            <div class="actions">
                                                <a class="text-danger" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                                    <trash-2-icon size="1.4x" class="custom-class"></trash-2-icon> Delete
                                                </a>															
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>#4546</td>
                                        <td><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#transaction"><span class="text-primary user-name">INV 0003</span></a></td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink to="/admin/profile"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-02.jpg" alt="User Image"></NuxtLink>
                                                <NuxtLink to="/admin/profile"><span class="user-name">Abdul Aziz Lazis</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
                                        <td>$330.00</td>
                                        <td><span class="badge bg-badge-grey text-success"><i class="fas fa-circle me-1"></i> Paid</span></td>
                                        <td class="text-end">
                                            <div class="actions">
                                                <a class="text-danger" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                                    <trash-2-icon size="1.4x" class="custom-class"></trash-2-icon> Delete
                                                </a>															
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>#4546</td>
                                        <td><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#transaction"><span class="text-primary user-name">INV 0004</span></a></td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink to="/admin/profile"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-05.jpg" alt="User Image"></NuxtLink>
                                                <NuxtLink to="/admin/profile"><span class="user-name">Alex Siauw</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
                                        <td>$330.00</td>
                                        <td><span class="badge bg-badge-grey text-success"><i class="fas fa-circle me-1"></i> Paid</span></td>
                                        <td class="text-end">
                                            <div class="actions">
                                                <a class="text-danger" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                                    <trash-2-icon size="1.4x" class="custom-class"></trash-2-icon> Delete
                                                </a>															
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>#4546</td>
                                        <td><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#transaction"><span class="text-primary user-name">INV 0005</span></a></td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink to="/admin/profile"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-13.jpg" alt="User Image"></NuxtLink>
                                                <NuxtLink to="/admin/profile"><span class="user-name">Gobbs Siauw</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
                                        <td>$330.00</td>
                                        <td><span class="badge bg-badge-grey text-success"><i class="fas fa-circle me-1"></i> Paid</span></td>
                                        <td class="text-end">
                                            <div class="actions">
                                                <a class="text-danger" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                                    <trash-2-icon size="1.4x" class="custom-class"></trash-2-icon> Delete
                                                </a>															
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>#4546</td>
                                        <td><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#transaction"><span class="text-primary user-name">INV 0006</span></a></td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink to="/admin/profile"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-11.jpg" alt="User Image"></NuxtLink>
                                                <NuxtLink to="/admin/profile"><span class="user-name">Deborah</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
                                        <td>$330.00</td>
                                        <td><span class="badge bg-badge-grey text-success"><i class="fas fa-circle me-1"></i> Paid</span></td>
                                        <td class="text-end">
                                            <div class="actions">
                                                <a class="text-danger" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                                    <trash-2-icon size="1.4x" class="custom-class"></trash-2-icon> Delete
                                                </a>															
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>#4546</td>
                                        <td><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#transaction"><span class="text-primary user-name">INV 0007</span></a></td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink to="/admin/profile"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-05.jpg" alt="User Image"></NuxtLink>
                                                <NuxtLink to="/admin/profile"><span class="user-name">Sofia</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
                                        <td>$330.00</td>
                                        <td><span class="badge bg-badge-grey text-success"><i class="fas fa-circle me-1"></i> Paid</span></td>
                                        <td class="text-end">
                                            <div class="actions">
                                                <a class="text-danger" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                                    <trash-2-icon size="1.4x" class="custom-class"></trash-2-icon> Delete
                                                </a>															
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>#4546</td>
                                        <td><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#transaction"><span class="text-primary user-name">INV 0008</span></a></td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <NuxtLink to="/admin/profile"><img class="avatar avatar-img" src="../../assets/admin_img/profiles/avatar-05.jpg" alt="User Image"></NuxtLink>
                                                <NuxtLink to="/admin/profile"><span class="user-name">Sofia</span></NuxtLink>
                                            </h2>
                                        </td>
                                        <td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
                                        <td>$330.00</td>
                                        <td><span class="badge bg-badge-grey text-success"><i class="fas fa-circle me-1"></i> Paid</span></td>
                                        <td class="text-end">
                                            <div class="actions">
                                                <a class="text-danger" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                                    <trash-2-icon size="1.4x" class="custom-class"></trash-2-icon> Delete
                                                </a>															
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
        
                <div id="tablepagination"  class="dataTables_wrapper"></div>

            </div>
        </div>
        <!-- /Invoice Report -->
    </div>
</div>
<!-- /Page Wrapper -->

<!-- Modal -->
<div class="modal fade contentmodal" id="transaction" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content doctor-profile">
            <div class="modal-header border-bottom-0 justify-content-end pb-0">
                <button type="button" class="close-btn" data-bs-dismiss="modal" aria-label="Close"><x-circle-icon size="1.4x" class="custom-class"></x-circle-icon></button>
            </div>
            <div class="modal-body pt-0">
                <div class="rating-wrapper">
                    <h4 class="text-center mb-4">Transaction Details</h4>
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="mem-info">
                                <h6>Consultation ID </h6>
                                <p>#454445</p>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="mem-info">
                                <h6>Paid On </h6>
                                <p>14 Nov 2022 05:30 PM</p>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="mem-info">
                                <h6>Payment Mode</h6>
                                <p>Online</p>
                            </div>
                        </div>  
                        <div class="col-sm-4">
                            <div class="mem-info">
                                <h6>Consultation Fees</h6>
                                <p>$300.00</p>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="mem-info">
                                <h6>Tax Fees</h6>
                                <p>$30.00</p>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="mem-info">
                                <h6>Total Fees</h6>
                                <p>$300.00</p>
                            </div>
                        </div>  									
                    </div> 
                    <div class="submit-section">
                        <a href="javascript:void(0);" class="btn btn-primary btn-download">Download Invoice</a>
                    </div>								
                </div>
            </div>
        </div>
    </div>
</div>
<!-- /Modal -->

<!-- Modal -->
<div class="modal fade contentmodal" id="deleteModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content doctor-profile">
            <div class="modal-header border-bottom-0 justify-content-end">
                <button type="button" class="close-btn" data-bs-dismiss="modal" aria-label="Close"><x-circle-icon size="1.4x" class="custom-class"></x-circle-icon></button>
            </div>
            <div class="modal-body">
                <div class="delete-wrap text-center">
                    <div class="del-icon"><x-circle-icon size="1.4x" class="custom-class"></x-circle-icon></div>
                    <h2>Sure you Want to delete</h2>
                    <p>“Transaction”</p>
                    <div class="submit-section">
                        <NuxtLink to="/admin/transaction" class="btn btn-success me-2">Yes</NuxtLink>
                        <a href="javascript:void(0);" class="btn btn-danger" data-bs-dismiss="modal">No</a>
                    </div>								
                </div>
            </div>
        </div>
    </div>
</div>
<!-- /Modal -->
<Nuxt />
</div>
</template>

<script>
import { CalendarIcon } from 'vue-feather-icons'
import { ChevronDownIcon } from 'vue-feather-icons'
import { DownloadIcon } from 'vue-feather-icons'
import { Trash2Icon } from 'vue-feather-icons'
import { XCircleIcon } from 'vue-feather-icons'
export default {
    components: {
    CalendarIcon,
    ChevronDownIcon,
    DownloadIcon,
    Trash2Icon,
    XCircleIcon
  },
    mounted() {
        if($('#totsales_chart').length > 0) {
		var columnCtx = document.getElementById("totsales_chart"),
		columnConfig = {
			colors: ['#0CE0FF'],
			series: [
				{
				name: "Video Call",
				type: "column",
				data: [4, 2.8, 5, 2, 3.2, 1.2, 2, 3]
				}
			],
			chart: {
				type: 'bar',
				fontFamily: 'Poppins, sans-serif',
				height: 360,
				toolbar: {
					show: false
				}
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: '30%',
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
				categories: ['22/11/2021', '23/11/2021', '24/11/2021', '25/11/2021', '25/11/2021', '25/11/2021', '27/11/2021', '28/11/2021'],
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