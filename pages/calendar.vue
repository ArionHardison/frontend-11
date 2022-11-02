<template>
    <div>
     <div class="main-wrapper">
    
    <!-- Breadcrumb -->
			<div class="breadcrumb-bar">
				<div class="container-fluid">
					<div class="row align-items-center">
						<div class="col">
							<nav aria-label="breadcrumb" class="page-breadcrumb">
								<ol class="breadcrumb">
									<li class="breadcrumb-item"><NuxtLink to="/">Home</NuxtLink></li>
									<li class="breadcrumb-item active" aria-current="page">Calendar</li>
								</ol>
							</nav>
							<h2 class="breadcrumb-title">Calendar</h2>
						</div>
						<div class="col-auto text-end float-end ms-auto">
							<a href="javascript:void(0);" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#add_event">Create Event</a>
						</div>
					</div>
				</div>
			</div>
			<!-- /Breadcrumb -->
			
			<!-- Page Content -->
			<div class="content">
				<div class="container-fluid">

					<div class="row">
						
						<!-- Calendar Events -->
						<div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
						<div class="stickyside">
							<div class="card">
								<div class="card-header">
									<h4 class="card-title mb-0">Drag & Drop Event</h4>
								</div>
								<div class="card-body">
									<div id="calendar-events" class="mb-3">
										<div class="calendar-events" data-class="bg-info"><i class="fas fa-circle text-info"></i> My Event One</div>
										<div class="calendar-events" data-class="bg-success"><i class="fas fa-circle text-success"></i> My Event Two</div>
										<div class="calendar-events" data-class="bg-danger"><i class="fas fa-circle text-danger"></i> My Event Three</div>
										<div class="calendar-events" data-class="bg-warning"><i class="fas fa-circle text-warning"></i> My Event Four</div>
									</div>
									<div class="checkbox mb-3">
										<input id="drop-remove" type="checkbox">
										<label for="drop-remove">
											Remove after drop
										</label>
									</div>
									<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_new_event" class="btn btn-primary w-100">
										<i class="fas fa-plus"></i> Add Category
									</a>
								</div>
							</div>
						</div>
						</div>
						<!-- /Calendar Events -->
						
						<!-- Calendar -->
						<div class="col-md-7 col-lg-8 col-xl-9">
							<div class="card">
								<div class="card-body">
									<div id="calendar"></div>
								</div>
							</div>
						</div>
						<!-- /Calendar -->
						
					</div>

				</div>

			</div>		
			<!-- /Page Content -->
    
      <Nuxt />
      
     </div>
     <!-- Payment Request Moodal -->
    
     <!-- Add Event Modal -->
		<div id="add_event" class="modal custom-modal fade" role="dialog">
			<div class="modal-dialog modal-dialog-centered" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title">Add Event</h4>
						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<form>
							<div class="form-group">
								<label>Event Name <span class="text-danger">*</span></label>
								<input class="form-control" type="text">
							</div>
							<div class="form-group">
								<label>Event Date <span class="text-danger">*</span></label>
								<div class="cal-icon">
									<input class="form-control datetimepicker" type="text">
								</div>
							</div>
							<div class="submit-section">
								<button class="btn btn-primary submit-btn">Submit</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<!-- /Add Event Modal -->
		
		<!-- Add Event Modal -->
		<div class="modal custom-modal fade none-border" id="my_event">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title">Add Event</h4>
						<button type="button" class="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
					</div>
					<div class="modal-body"></div>
					<div class="modal-footer justify-content-center">
						<button type="button" class="btn btn-success save-event submit-btn">Create event</button>
						<button type="button" class="btn btn-danger delete-event submit-btn" data-bs-dismiss="modal">Delete</button>
					</div>
				</div>
			</div>
		</div>
		<!-- /Add Event Modal -->
		
		<!-- Add Category Modal -->
		<div class="modal custom-modal fade" id="add_new_event">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title">Add Category</h4>
						<button type="button" class="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
					</div>
					<div class="modal-body">
						<form>
							<div class="form-group">
								<label>Category Name</label>
								<input class="form-control form-white" placeholder="Enter name" type="text" name="category-name" />
							</div>
							<div class="form-group">
								<label>Choose Category Color</label>
								<select class="form-select form-control form-white" data-placeholder="Choose a color..." name="category-color">
									<option value="success">Success</option>
									<option value="danger">Danger</option>
									<option value="info">Info</option>
									<option value="primary">Primary</option>
									<option value="warning">Warning</option>
									<option value="inverse">Inverse</option>
								</select>
							</div>
							<div class="submit-section text-center">
								<button type="button" class="btn btn-primary save-category submit-btn" data-bs-dismiss="modal">Save</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<!-- /Add Category Modal -->
     
    </div>
    </template>
    <script>
        export default {
            layout: 'withoutanimation',
            mounted() {
            $('#calendar').fullCalendar({
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay'
                },
                events:  [{
                    title: 'Event Name 4',
                    start: new Date($.now() + 148000000),
                    className: 'bg-purple'
                },
                {
                    title: 'Test Event 1',
                    start: new Date($.now()),
                    end: new Date($.now()),
                    className: 'bg-success'
                },
                {
                    title: 'Test Event 2',
                    start: new Date($.now() + 168000000),
                    className: 'bg-info'
                },
                {
                    title: 'Test Event 3',
                    start: new Date($.now() + 338000000),
                    className: 'bg-primary'
                }],
                defaultView: "month",
                editable: true,
                droppable: true,
                eventLimit: true,
                selectable: true,
                selectHelper: true,
                drop: function() {
                    if ($('#drop-remove').is(':checked')) {
                        $(this).remove();
                    }
                },
                select: function (start, end, allDay) { 
                    $("#event_name").val('');
                    $("select[name='category']").val('bg-danger')
                    $("#addevent").trigger('click');
                    $("#create_event").find('.save-event').unbind('click').click(function () {
                        var title = $("#event_name").val();
                        var categoryClass = $("select[name='category'] option:checked").val();
                        if (title !== null && title.length != 0) {
                            $('#calendar').fullCalendar('renderEvent', {
                                title: title,
                                start:start,
                                end: end,
                                allDay: false,
                                className: categoryClass
                            }, true);  
                            $("#cancelevents").trigger('click');
                        }
                        else{
                            alert('You have to give a title to your event');
                        }
                        return false;
                    });
                    $('#calendar').fullCalendar('unselect');
                },
                eventClick: function(calEvent, jsEvent, view) {
                    $("#event_value").val(calEvent.title);
                    $("#triggerevent").trigger('click');
                    
                    $("#edit_event").find('.delete-event').unbind('click').click(function () {
                        $('#calendar').fullCalendar('removeEvents', function (ev) {
                            return (ev._id == calEvent._id);
                        });
                        $("#cancelevent").trigger('click');
                    });
                    $("#edit_event").find('form').on('submit', function () {
                        calEvent.title = $("#event_value").val();
                         $('#calendar').fullCalendar('updateEvent', calEvent);
                         $("#cancelevent").trigger('click');
                        return false;
                    });
                }
            });
              
            $('#calendar-events .calendar-events').each(function() {
                $(this).data('event', {
                    title: $.trim($(this).text()), 
                    stick: true 
                });
    
                $(this).draggable({
                    zIndex: 999,
                    revert: true,     
                    revertDuration: 0 
                });
    
            });
            if($('.datetimepicker').length > 0) {
                $('.datetimepicker').datetimepicker({
                    format: 'DD/MM/YYYY',
                    icons: {
                        up: "fas fa-chevron-up",
                        down: "fas fa-chevron-down",
                        next: 'fas fa-chevron-right',
                        previous: 'fas fa-chevron-left'
                    }
                });
            }
        },
            computed: {
               currentPath() {
                   return this.$route.name
               },
            }
        }
        </script>
    