<template>
  <div class="disciplinaryMeasures">
    <div class="main-wrapper">
      <layout-header></layout-header>
      <layout-sidebar></layout-sidebar>
      <!-- Page Wrapper -->
      <div class="page-wrapper">

        <!-- Page Content -->
        <div class="content container-fluid">

          <!-- Page Header -->
          <div class="page-header">
            <div class="row">
              <div class="col-sm-12">
                <h3 class="page-title">Welcome Admin!</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item active">disciplinary Measures</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- /Page Header -->

          <div class="row">
    <div class="col-md-12">
								<div class="card">
									<div class="card-body">
										<h6 class="card-title">Bottom line tabs</h6>
										<ul class="nav nav-tabs nav-tabs-bottom">
											<li class="nav-item"><a class="nav-link active" href="#bottom-tab1" data-toggle="tab">Home</a></li>
											<li class="nav-item"><a class="nav-link" href="#bottom-tab2" data-toggle="tab">Profile</a></li>
										</ul>
                    
										<div class="tab-content">
											<div class="tab-pane show active" id="bottom-tab1">
												<div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0 datatable">
                  <thead>
                    <tr>
                      <th>Employee</th>
                      <th>Leave Type</th>
                      <th>From</th>
                      <th>To</th>
                      <th>No of Days</th>
                      <th>Reason</th>
                      <th class="text-center">Status</th>
                      <th class="text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" src="../assets/profiles/avatar-09.jpg">
                          </router-link>
                          <a href="#">Richard Miles <span>Web Developer</span></a>
                        </h2>
                      </td>
                      <td>Casual Leave</td>
                      <td>8 Mar 2019</td>
                      <td>9 Mar 2019</td>
                      <td>2 days</td>
                      <td>Going to Hospital</td>
                      <td class="text-center">
                        <div class="dropdown action-label">
                          <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown"
                            aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-purple"></i> New
                          </a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-purple"></i> New</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-info"></i> Pending</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#approve_leave"><i
                                class="fa fa-dot-circle-o text-success"></i> Approved</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i>
                              Declined</a>
                          </div>
                        </div>
                      </td>
                      <td class="text-right">
                        <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_leave"><i
                                class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_approve"><i
                                class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" src="../assets/profiles/avatar-02.jpg">
                          </router-link>
                          <a> John Doe <span>Web Designer</span></a>
                        </h2>
                      </td>
                      <td>Medical Leave</td>
                      <td>27 Feb 2019</td>
                      <td>27 Feb 2019</td>
                      <td>1 day</td>
                      <td>Going to Hospital</td>
                      <td class="text-center">
                        <div class="dropdown action-label">
                          <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown"
                            aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-success"></i> Approved
                          </a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-purple"></i> New</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-info"></i> Pending</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#approve_leave"><i
                                class="fa fa-dot-circle-o text-success"></i> Approved</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i>
                              Declined</a>
                          </div>
                        </div>
                      </td>
                      <td class="text-right">
                        <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_leave"><i
                                class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_approve"><i
                                class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" src="../assets/profiles/avatar-10.jpg">
                          </router-link>
                          <a>John Smith <span>Android Developer</span></a>
                        </h2>
                      </td>
                      <td>LOP</td>
                      <td>24 Feb 2019</td>
                      <td>25 Feb 2019</td>
                      <td>2 days</td>
                      <td>Personnal</td>
                      <td class="text-center">
                        <div class="dropdown action-label">
                          <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown"
                            aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-success"></i> Approved
                          </a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-purple"></i> New</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-info"></i> Pending</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#approve_leave"><i
                                class="fa fa-dot-circle-o text-success"></i> Approved</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i>
                              Declined</a>
                          </div>
                        </div>
                      </td>
                      <td class="text-right">
                        <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_leave"><i
                                class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_approve"><i
                                class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" src="../assets/profiles/avatar-05.jpg">
                          </router-link>
                          <a>Mike Litorus <span>IOS Developer</span></a>
                        </h2>
                      </td>
                      <td>Paternity Leave</td>
                      <td>13 Feb 2019</td>
                      <td>17 Feb 2019</td>
                      <td>5 days</td>
                      <td>Going to Hospital</td>
                      <td class="text-center">
                        <div class="dropdown action-label">
                          <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown"
                            aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-danger"></i> Declined
                          </a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-purple"></i> New</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-info"></i> Pending</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#approve_leave"><i
                                class="fa fa-dot-circle-o text-success"></i> Approved</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i>
                              Declined</a>
                          </div>
                        </div>
                      </td>
                      <td class="text-right">
                        <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_leave"><i
                                class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_approve"><i
                                class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" src="../assets/profiles/avatar-24.jpg">
                          </router-link>
                          <a>Richard Parker <span>Web Developer</span></a>
                        </h2>
                      </td>
                      <td>Casual Leave</td>
                      <td>30 Jan 2019</td>
                      <td>31 Jan 2019</td>
                      <td>2 days</td>
                      <td>Going to Hospital</td>
                      <td class="text-center">
                        <div class="dropdown action-label">
                          <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown"
                            aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-purple"></i> New
                          </a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-purple"></i> New</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-info"></i> Pending</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#approve_leave"><i
                                class="fa fa-dot-circle-o text-success"></i> Approved</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i>
                              Declined</a>
                          </div>
                        </div>
                      </td>
                      <td class="text-right">
                        <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_leave"><i
                                class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_approve"><i
                                class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" src="../assets/profiles/avatar-08.jpg">
                          </router-link>
                          <a>Catherine Manseau <span>Web Developer</span></a>
                        </h2>
                      </td>
                      <td>Maternity Leave</td>
                      <td>5 Jan 2019</td>
                      <td>15 Jan 2019</td>
                      <td>10 days</td>
                      <td>Going to Hospital</td>
                      <td class="text-center">
                        <div class="dropdown action-label">
                          <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown"
                            aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-success"></i> Approved
                          </a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-purple"></i> New</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-info"></i> Pending</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#approve_leave"><i
                                class="fa fa-dot-circle-o text-success"></i> Approved</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i>
                              Declined</a>
                          </div>
                        </div>
                      </td>
                      <td class="text-right">
                        <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_leave"><i
                                class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_approve"><i
                                class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" src="../assets/profiles/avatar-15.jpg">
                          </router-link>
                          <a>Buster Wigton <span>Web Developer</span></a>
                        </h2>
                      </td>
                      <td>Hospitalisation</td>
                      <td>15 Jan 2019</td>
                      <td>25 Jan 2019</td>
                      <td>10 days</td>
                      <td>Going to Hospital</td>
                      <td class="text-center">
                        <div class="dropdown action-label">
                          <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown"
                            aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-success"></i> Approved
                          </a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-purple"></i> New</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-info"></i> Pending</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#approve_leave"><i
                                class="fa fa-dot-circle-o text-success"></i> Approved</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i>
                              Declined</a>
                          </div>
                        </div>
                      </td>
                      <td class="text-right">
                        <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_leave"><i
                                class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_approve"><i
                                class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" src="../assets/profiles/avatar-20.jpg">
                          </router-link>
                          <a>Melita Faucher <span>Web Developer</span></a>
                        </h2>
                      </td>
                      <td>Casual Leave</td>
                      <td>13 Jan 2019</td>
                      <td>14 Jan 2019</td>
                      <td>2 days</td>
                      <td>Going to Hospital</td>
                      <td class="text-center">
                        <div class="dropdown action-label">
                          <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown"
                            aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-danger"></i> Declined
                          </a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-purple"></i> New</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-info"></i> Pending</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#approve_leave"><i
                                class="fa fa-dot-circle-o text-success"></i> Approved</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i>
                              Declined</a>
                          </div>
                        </div>
                      </td>
                      <td class="text-right">
                        <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_leave"><i
                                class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_approve"><i
                                class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" src="../assets/profiles/avatar-03.jpg">
                          </router-link>
                          <a>Tarah Shropshire <span>Web Developer</span></a>
                        </h2>
                      </td>
                      <td>Casual Leave</td>
                      <td>10 Jan 2019</td>
                      <td>10 Jan 2019</td>
                      <td>1 day</td>
                      <td>Going to Hospital</td>
                      <td class="text-center">
                        <div class="dropdown action-label">
                          <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown"
                            aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-purple"></i> New
                          </a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-purple"></i> New</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-info"></i> Pending</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#approve_leave"><i
                                class="fa fa-dot-circle-o text-success"></i> Approved</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i>
                              Declined</a>
                          </div>
                        </div>
                      </td>
                      <td class="text-right">
                        <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_leave"><i
                                class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_approve"><i
                                class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" src="../assets/profiles/avatar-20.jpg">
                          </router-link>
                          <a>Domenic Houston <span>Web Developer</span></a>
                        </h2>
                      </td>
                      <td>Casual Leave</td>
                      <td>10 Jan 2019</td>
                      <td>11 Jan 2019</td>
                      <td>2 days</td>
                      <td>Going to Hospital</td>
                      <td class="text-center">
                        <div class="dropdown action-label">
                          <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown"
                            aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-success"></i> Approved
                          </a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-purple"></i> New</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-info"></i> Pending</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#approve_leave"><i
                                class="fa fa-dot-circle-o text-success"></i> Approved</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i>
                              Declined</a>
                          </div>
                        </div>
                      </td>
                      <td class="text-right">
                        <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_leave"><i
                                class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_approve"><i
                                class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" src="../assets/profiles/avatar-02.jpg">
                          </router-link>
                          <a>John Doe <span>Web Designer</span></a>
                        </h2>
                      </td>
                      <td>Casual Leave</td>
                      <td>9 Jan 2019</td>
                      <td>10 Jan 2019</td>
                      <td>2 days</td>
                      <td>Going to Hospital</td>
                      <td class="text-center">
                        <div class="dropdown action-label">
                          <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown"
                            aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-success"></i> Approved
                          </a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-purple"></i> New</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-info"></i> Pending</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#approve_leave"><i
                                class="fa fa-dot-circle-o text-success"></i> Approved</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i>
                              Declined</a>
                          </div>
                        </div>
                      </td>
                      <td class="text-right">
                        <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_leave"><i
                                class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_approve"><i
                                class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" src="../assets/profiles/avatar-25.jpg">
                          </router-link>
                          <a>Rolland Webber <span>Web Developer</span></a>
                        </h2>
                      </td>
                      <td>Casual Leave</td>
                      <td>7 Jan 2019</td>
                      <td>8 Jan 2019</td>
                      <td>2 days</td>
                      <td>Going to Hospital</td>
                      <td class="text-center">
                        <div class="dropdown action-label">
                          <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown"
                            aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-danger"></i> Declined
                          </a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-purple"></i> New</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-info"></i> Pending</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#approve_leave"><i
                                class="fa fa-dot-circle-o text-success"></i> Approved</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i>
                              Declined</a>
                          </div>
                        </div>
                      </td>
                      <td class="text-right">
                        <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_leave"><i
                                class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_approve"><i
                                class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
											</div>
											<div class="tab-pane" id="bottom-tab2">
												Tab content 2
											</div>
										</div>
									</div>
								</div>
							</div>
  </div>
        <!-- /Page Content -->
      </div>
    </div>
    <!-- /Page Wrapper -->
  </div>
  </div>
</template>
<script>
  import LayoutHeader from '@/components/layouts/Header.vue'
  import LayoutSidebar from '@/components/layouts/Sidebar.vue'
  import Vue from 'vue'
  export default {
    components: {
      LayoutHeader,
      LayoutSidebar,
    },
    mounted() {
      
    },
    methods: {
    },
    name: 'disciplinaryMeasures'
  }
</Script>