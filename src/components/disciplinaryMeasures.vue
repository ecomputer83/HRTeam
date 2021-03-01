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

          <!-- <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="datatable table table-stripped mb-0">
                      <thead>
                        <tr>
                          <th>Form</th>
                          <th>Reason</th>
                          <th>Employee</th>
                          <th>Date</th>
                          <th>Status Reason</th>
                          <th>Department (Employee)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="i in 10">
                          <td style="max-width: unset">
                            <router-link :to="`/vacancies/vid${i}`">
                              <span
                                >Written</span
                              ></router-link
                            >
                          </td>
                          <td>Intentional damage to property</td>
                          <td>26/02/2021</td>
                          <td>Employee off payroll</td>
                          <td>0</td>
                          <td>0</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div> -->


          <div class="row">
    <div class="col-md-12">
								<div class="card">
                  <div class="card-header">
                    <div class="d-flex justify-content-between">
                                      <h4 class="card-title mb-0">Disciplinary Measures</h4>
                                      <div class="col-auto float-right ml-auto">
                <a href="#" class="btn add-btn" data-toggle="modal" data-target="#add_disciplinaryMeasures"><i
                    class="fa fa-plus"></i> Add Disciplinary Measures</a>
              </div>
                                    </div>
                  </div>
									<div class="card-body">
										<ul class="nav nav-tabs nav-tabs-solid nav-tabs-rounded nav-justified">
											<li class="nav-item"><a class="nav-link active" href="#solid-rounded-justified-tab1" data-toggle="tab">Active disciplinary Measures</a></li>
											<li class="nav-item"><a class="nav-link" href="#solid-rounded-justified-tab2" data-toggle="tab">Inactive disciplinary Measures</a></li>
                      <li class="nav-item"><a class="nav-link" href="#solid-rounded-justified-tab3" data-toggle="tab">Employee Form view</a></li>
										</ul>
										<div class="tab-content">
											<div class="tab-pane show active" id="solid-rounded-justified-tab1">
												<div class="table-responsive">
                    <table class="datatable table table-stripped mb-0">
                      <thead>
                        <tr>
                          <th>Form</th>
                          <th>Reason</th>
                          <th>Employee</th>
                          <th>Date</th>
                          <th>Status Reason</th>
                          <th>Department (Employee)</th>
                          <th class="text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <router-link to="/">
                              Written
                            </router-link>
                          </td>
                          <td>Intentional damage to property</td>
                          <td>No Name</td>
                          <td>--</td>
                          <td>Employee off payroll</td>
                          <td>ddddd</td>
                          <td class="text-right">
                                <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" data-toggle="modal" data-target="#edit_disciplinaryMeasures"><i
                                class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" data-toggle="modal" data-target="#delete_disciplinaryMeasures"><i
                                class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                            </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
											</div>
											<div class="tab-pane" id="solid-rounded-justified-tab2">
												<div class="table-responsive">
                    <table class="datatable table table-stripped mb-0">
                      <thead>
                        <tr>
                          <th>Form</th>
                          <th>Reason</th>
                          <th>Employee</th>
                          <th>Date</th>
                          <th>Status Reason</th>
                          <th class="text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <router-link to="/">
                              Written
                            </router-link>
                          </td>
                          <td>Intentional damage to property</td>
                          <td>No Name</td>
                          <td>--</td>
                          <td>Employee off payroll</td>
                          <td class="text-right">
                                <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" data-toggle="modal" data-target="#edit_disciplinaryMeasures"><i
                                class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" data-toggle="modal" data-target="#delete_disciplinaryMeasures"><i
                                class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                            </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
											</div>
                      <div class="tab-pane" id="solid-rounded-justified-tab3">
												<div class="table-responsive">
                    <table class="datatable table table-stripped mb-0">
                      <thead>
                        <tr>
                          <th>Form</th>
                          <th>Reason</th>
                          <th>Date</th>
                          <th>Status Reason</th>
                          <th class="text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <router-link to="/">
                              Written
                            </router-link>
                          </td>
                          <td>Intentional damage to property</td>
                          <td>--</td>
                          <td>Employee off payrol</td>
                          <td class="text-right">
                                <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" data-toggle="modal" data-target="#edit_disciplinaryMeasures"><i
                                class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" data-toggle="modal" data-target="#delete_disciplinaryMeasures"><i
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
								</div>
							</div>
  </div>

          
        <!-- /Page Content -->

                <!-- Add Designation Modal -->
        <!-- <div id="add_disciplinaryMeasures" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add Designation</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form @submit.prevent="onSubmit">
                  <div class="form-group">
                    <label>Designation Name <span class="text-danger">*</span></label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      class="form-control" 
                    />
                  </div>
                  
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div> -->
        <!-- /Add Designation Modal -->

                        <!-- Add Employee Modal -->
                <div id="add_disciplinaryMeasures" class="modal custom-modal fade" role="dialog">
                    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Add Employee</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <!-- <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="error">
								                            <strong>Error!</strong> {{error}}
								                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
									                            <span aria-hidden="true">&times;</span>
								                            </button>
							                            </div>
                                                    </div>
                                                    <div class="col-md-12">
							                            <div class="alert alert-success alert-dismissible fade show" role="alert" v-if="message">
								                            <strong>Success!</strong> {{message}}
								                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
									                            <span aria-hidden="true">&times;</span>
								                            </button>
							                            </div>
                                                    </div>
                                    </div>  -->
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label class="col-form-label">Reason <span
                                                        class="text-danger">*</span></label>
                                                <input type="text"  id="name" name="name" class="form-control" />
                                                
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label class="col-form-label">Employee</label>
                                                <input type="search"  id="employee" name="employee" class="form-control"  />
                                                
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label class="col-form-label">HR Manager <span
                                                        class="text-danger">*</span></label>
                                                <input type="search"  id="hrmanager" name="hrmanager" class="form-control"  />
                                
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                          <div class="form-group">
                                            <label>To <span class="text-danger">*</span></label>
                                            <div class="cal-icon">
                                              <datepicker v-model="toDate" bootstrap-styling class="form-control" type="date" />
                                              <!-- <input class="form-control datetimepicker" type="text"> -->
                                            </div>
                                          </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Form <span class="text-danger">*</span></label>
                                                
                                                <select class="form-control">
                                                    <option>Select Level</option>
                                                    <option>rankName</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label class="col-form-label">Remarks </label>
                                                <input type="text" id="remarks" name="remarks" class="form-control"  />
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div class="submit-section">
                                        <button class="btn btn-primary submit-btn" type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Add Employee Modal -->

        <!-- Edit Designation Modal -->
        <div id="edit_disciplinaryMeasures" class="modal custom-modal fade" role="dialog">
                    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div class="modal-content"> 
                            <div class="modal-header">
                                <h5 class="modal-title">Edit Employee</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <!-- <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="error">
								                            <strong>Error!</strong> {{error}}
								                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
									                            <span aria-hidden="true">&times;</span>
								                            </button>
							                            </div>
                                                    </div>
                                                    <div class="col-md-12">
							                            <div class="alert alert-success alert-dismissible fade show" role="alert" v-if="message">
								                            <strong>Success!</strong> {{message}}
								                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
									                            <span aria-hidden="true">&times;</span>
								                            </button>
							                            </div>
                                                    </div>
                                    </div>  -->
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label class="col-form-label">Reason <span
                                                        class="text-danger">*</span></label>
                                                <input type="text"  id="name" name="name" class="form-control" />
                                                
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label class="col-form-label">Employee</label>
                                                <input type="search"  id="employee" name="employee" class="form-control"  />
                                                
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label class="col-form-label">HR Manager <span
                                                        class="text-danger">*</span></label>
                                                <input type="search"  id="hrmanager" name="hrmanager" class="form-control"  />
                                
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                          <div class="form-group">
                                            <label>To <span class="text-danger">*</span></label>
                                            <div class="cal-icon">
                                              <datepicker v-model="toDate" bootstrap-styling class="form-control" type="date" />
                                              <!-- <input class="form-control datetimepicker" type="text"> -->
                                            </div>
                                          </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Form <span class="text-danger">*</span></label>
                                                
                                                <select class="form-control">
                                                    <option>Select Level</option>
                                                    <option>rankName</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label class="col-form-label">Remarks </label>
                                                <input type="text" id="remarks" name="remarks" class="form-control"  />
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div class="submit-section">
                                        <button class="btn btn-primary submit-btn" type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        <!-- /Edit Designation Modal -->
        <!-- Delete Designation Modal -->
        <div class="modal custom-modal fade" id="delete_disciplinaryMeasures" role="dialog">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete Designation</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div class="modal-btn delete-action">
                  <div class="row">
                    <div class="col-6">
                      <a href="javascript:void(0);" class="btn btn-primary continue-btn" data-dismiss="modal">Delete</a>
                    </div>
                    <div class="col-6">
                      <a href="javascript:void(0);" data-dismiss="modal" class="btn btn-primary cancel-btn">Cancel</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Delete Designation Modal -->
      </div>
    </div>
    <!-- /Page Wrapper -->
  </div>
  </div>
</template>
<script>
  import LayoutHeader from '@/components/layouts/Header.vue'
  import LayoutSidebar from '@/components/layouts/Sidebar.vue'
  import Datepicker from 'vuejs-datepicker'

  import Vue from 'vue'
  export default {
    components: {
      LayoutHeader,
      LayoutSidebar,
      Datepicker
    },
    mounted() {
      
    },
    methods: {
    },
    name: 'disciplinaryMeasures'
  }
</Script>