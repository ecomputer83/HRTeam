<template>
  <div class="leavesemployee">
    <div class="main-wrapper">
      <layout-header></layout-header>
      <layout-sidebar></layout-sidebar>
      <!-- Page Wrapper -->
      <div class="page-wrapper">
        <!-- Page Content -->
        <div class="content container-fluid">
          <!-- Page Header -->
          <div class="page-header">
            <div class="row align-items-center">
              <div class="col">
                <h3 class="page-title">Leaves</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/index">Dashboard</router-link>
                  </li>
                  <li class="breadcrumb-item active">Leaves</li>
                </ul>
              </div>
              <div class="col-auto float-right ml-auto">
                <a href="#" class="btn add-btn" data-toggle="modal" data-target="#add_leave"><i class="fa fa-plus"></i>
                  Add Leave</a>
              </div>
            </div>
          </div>
          <!-- /Page Header -->
          <!-- Leave Statistics -->
          <div class="row">
            <div class="col-md-3">
              <div class="stats-info">
                <h6>Annual Leave</h6>
                <h4>12</h4>
              </div>
            </div>
            <div class="col-md-3">
              <div class="stats-info">
                <h6>Medical Leave</h6>
                <h4>3</h4>
              </div>
            </div>
            <div class="col-md-3">
              <div class="stats-info">
                <h6>Other Leave</h6>
                <h4>4</h4>
              </div>
            </div>
            <div class="col-md-3">
              <div class="stats-info">
                <h6>Remaining Leave</h6>
                <h4>5</h4>
              </div>
            </div>
          </div>
          <!-- /Leave Statistics -->
          <!----Datatable-->
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table dt-responsive">
                  <thead>
                    <tr>
                      <th>Leave Type</th>
                      <th>From</th>
                      <th>To</th>
                      <th>No of Days</th>
                      <th>Reason</th>
                      <th class="text-center">Status</th>
                      <th>Approved by</th>
                      <th class="text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in employeeLeaves" v-bind:key="item.id">
                      <td>{{item.leaveType.name}}</td>
                      <td>{{item.fromDate.slice(0, 10)}}</td>
                      <td>{{item.toDate.slice(0, 10)}}</td>
                      <td>2 days</td>
                      <td>{{item.reason}}</td>
                      <td class="text-center">
                        <div class="action-label">
                          <a class="btn btn-white btn-sm btn-rounded" href="javascript:void(0);">
                            <i class="fa fa-dot-circle-o text-purple"></i> {{item.status}}
                          </a>
                        </div>
                      </td>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar avatar-xs"><img
                              src="~@/assets/profiles/avatar-09.jpg" alt=""></router-link>
                          <a href="#">{{item.approvedBy}}</a>
                        </h2>
                      </td>
                      <td class="text-right">
                        <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" @click="setLeave(item)" data-toggle="modal" data-target="#edit_leave"><i
                                class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" @click="setLeave(item)" data-toggle="modal" data-target="#delete_approve"><i
                                class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <!-- <tr>
                      <td>Medical Leave</td>
                      <td>27 Feb 2019</td>
                      <td>27 Feb 2019</td>
                      <td>1 day</td>
                      <td>Going to Hospital</td>
                      <td class="text-center">
                        <div class="action-label">
                          <a class="btn btn-white btn-sm btn-rounded" href="javascript:void(0);">
                            <i class="fa fa-dot-circle-o text-success"></i> Approved
                          </a>
                        </div>
                      </td>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar avatar-xs"><img
                              src="~@/assets/profiles/avatar-09.jpg" alt=""></router-link>
                          <a href="#">Richard Miles</a>
                        </h2>
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
                      <td>LOP</td>
                      <td>24 Feb 2019</td>
                      <td>25 Feb 2019</td>
                      <td>2 days</td>
                      <td>Personnal</td>
                      <td class="text-center">
                        <div class="action-label">
                          <a class="btn btn-white btn-sm btn-rounded" href="javascript:void(0);">
                            <i class="fa fa-dot-circle-o text-success"></i> Approved
                          </a>
                        </div>
                      </td>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar avatar-xs"><img
                              src="~@/assets/profiles/avatar-09.jpg" alt=""></router-link>
                          <a href="#">Richard Miles</a>
                        </h2>
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
                      <td>Paternity Leave</td>
                      <td>13 Feb 2019</td>
                      <td>17 Feb 2019</td>
                      <td>5 days</td>
                      <td>Going to Hospital</td>
                      <td class="text-center">
                        <div class="action-label">
                          <a class="btn btn-white btn-sm btn-rounded" href="javascript:void(0);">
                            <i class="fa fa-dot-circle-o text-danger"></i> Declined
                          </a>
                        </div>
                      </td>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar avatar-xs"><img
                              src="~@/assets/profiles/avatar-09.jpg" alt=""></router-link>
                          <a href="#">Richard Miles</a>
                        </h2>
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
                      <td>Casual Leave</td>
                      <td>30 Jan 2019</td>
                      <td>30 Jan 2019</td>
                      <td>Second Half</td>
                      <td>Going to Hospital</td>
                      <td class="text-center">
                        <div class="action-label">
                          <a class="btn btn-white btn-sm btn-rounded" href="javascript:void(0);">
                            <i class="fa fa-dot-circle-o text-purple"></i> New
                          </a>
                        </div>
                      </td>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar avatar-xs"><img
                              src="~@/assets/profiles/avatar-09.jpg" alt=""></router-link>
                          <a href="#">Richard Miles</a>
                        </h2>
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
                      <td>Hospitalisation</td>
                      <td>15 Jan 2019</td>
                      <td>25 Jan 2019</td>
                      <td>10 days</td>
                      <td>Going to Hospital</td>
                      <td class="text-center">
                        <div class="action-label">
                          <a class="btn btn-white btn-sm btn-rounded" href="javascript:void(0);">
                            <i class="fa fa-dot-circle-o text-success"></i> Approved
                          </a>
                        </div>
                      </td>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar avatar-xs"><img
                              src="~@/assets/profiles/avatar-09.jpg" alt=""></router-link>
                          <a href="#">Richard Miles</a>
                        </h2>
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
                      <td>Casual Leave</td>
                      <td>13 Jan 2019</td>
                      <td>14 Jan 2019</td>
                      <td>2 days</td>
                      <td>Going to Hospital</td>
                      <td class="text-center">
                        <div class="action-label">
                          <a class="btn btn-white btn-sm btn-rounded" href="javascript:void(0);">
                            <i class="fa fa-dot-circle-o text-success"></i> Approved
                          </a>
                        </div>
                      </td>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar avatar-xs"><img
                              src="~@/assets/profiles/avatar-09.jpg" alt=""></router-link>
                          <a href="#">Richard Miles</a>
                        </h2>
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
                      <td>Casual Leave</td>
                      <td>10 Jan 2019</td>
                      <td>10 Jan 2019</td>
                      <td>First Half</td>
                      <td>Going to Hospital</td>
                      <td class="text-center">
                        <div class="action-label">
                          <a class="btn btn-white btn-sm btn-rounded" href="javascript:void(0);">
                            <i class="fa fa-dot-circle-o text-danger"></i> Declined
                          </a>
                        </div>
                      </td>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar avatar-xs"><img
                              src="~@/assets/profiles/avatar-09.jpg" alt=""></router-link>
                          <a href="#">Richard Miles</a>
                        </h2>
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
                    </tr> -->
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!---/Datatable-->
          <!-- Add Leave Modal -->
          <div id="add_leave" class="modal custom-modal fade" role="dialog">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Add Leave</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form @submit.prevent="onSubmit">
                    <div class="form-group">
                      <label>Leave Type <span class="text-danger">*</span></label>
                      <select class="form-control" v-model="leaveType">
                        <option>Select Leave Type</option>
                        <option v-for="item in leaveTypes" :key="item.id" :value="item.id">{{item.name}}</option>
                        <!-- <option>Casual Leave 12 Days</option>
                        <option>Medical Leave</option>
                        <option>Loss of Pay</option> -->
                      </select>
                    </div>
                    <div class="form-group">
                      <label>From <span class="text-danger">*</span></label>
                      <div class="cal-icon">
                        <datepicker v-model="fromDate" calendar-class input-class bootstrap-styling class="form-control datetimepicker" type="text" />
                        <!-- <input class="form-control datetimepicker" type="text"> -->
                      </div>
                    </div>
                    <div class="form-group">
                      <label>To <span class="text-danger">*</span></label>
                      <div class="cal-icon">
                        <datepicker v-model="toDate" calendar-class input-class bootstrap-styling class="form-control" type="text" />
                        <!-- <input class="form-control datetimepicker" type="text"> -->
                      </div>
                    </div>
                    <div class="form-group">
                      <label>Number of days <span class="text-danger">*</span></label>
                      <input :value="this.getNoOfDaysInterval()" class="form-control" readonly type="text">
                    </div>
                    <div class="form-group">
                      <label>Remaining Leaves <span class="text-danger">*</span></label>
                      <input :value="this.getRemainingDays()" class="form-control" readonly type="text">
                    </div>
                    <div class="form-group">
                      <label>Leave Reason <span class="text-danger">*</span></label>
                      <textarea rows="4" v-model="reason" class="form-control"></textarea>
                    </div>
                    <div class="submit-section">
                      <button class="btn btn-primary submit-btn">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <!-- /Add Leave Modal -->
          <!-- Edit Leave Modal -->
          <div id="edit_leave" class="modal custom-modal fade" role="dialog">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Edit Leave</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="row">
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
                    </div>
                    <div class="form-group">
                      <label>Leave Type <span class="text-danger">*</span></label>
                      <select class="form-control" v-model="leaveType">
                        <option>Select Leave Type</option>
                        <option v-for="item in leaveTypes" :key="item.id"  :value="item.id">{{item.name}}</option>
                        <!-- <option>Casual Leave 12 Days</option> -->
                      </select>
                    </div>
                    <div class="form-group">
                      <label>From <span class="text-danger">*</span></label>
                      <div class="cal-icon">
                        <datepicker v-model="employeeLeave.fromDate" bootstrap-styling class="form-control datetimepicker" type="date" />
                        <!-- <input class="form-control datetimepicker" value="01-01-2019" type="text"> -->
                      </div>
                    </div>
                    <div class="form-group">
                      <label>To <span class="text-danger">*</span></label>
                      <div class="cal-icon">
                        <datepicker v-model="employeeLeave.toDate" bootstrap-styling class="form-control datetimepicker" type="date" />
                        <!-- <input class="form-control datetimepicker" value="01-01-2019" type="text"> -->
                      </div>
                    </div>
                    <div class="form-group">
                      <label>Number of days <span class="text-danger">*</span></label>
                      <input class="form-control" readonly type="text" :value="this.getNoOfDaysInterval()">
                    </div>
                    <div class="form-group">
                      <label>Remaining Leaves <span class="text-danger">*</span></label>
                      <input class="form-control" readonly type="text" :value="this.getRemainingDays()">
                    </div>
                    <div class="form-group">
                      <label>Leave Reason <span class="text-danger">*</span></label>
                      <textarea v-model="employeeLeave.reason" rows="4" class="form-control">Going to hospital</textarea>
                    </div>
                    <div class="submit-section">
                      <button @click.prevent="updateLeave" data-dismiss="modal" class="btn btn-primary submit-btn">Save</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <!-- /Edit Leave Modal -->
          <!-- Delete Leave Modal -->
          <div class="modal custom-modal fade" id="delete_approve" role="dialog">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-body">
                  <div class="form-header">
                    <h3>Delete Leave</h3>
                    <p>Are you sure want to Cancel this leave?</p>
                  </div>
                  <div class="modal-btn delete-action">
                    <div class="row">
                      <div class="col-6">
                        <a href="javascript:void(0);" @click="deleteLeave()" data-dismiss="modal" class="btn btn-primary continue-btn">Delete</a>
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
          <!-- /Delete Leave Modal -->
        </div>
        <!-- /Page Wrapper -->
      </div>
    </div>
  </div>
</template>
<script>
  import LayoutHeader from '@/components/layouts/Header.vue'
  import LayoutSidebar from '@/components/layouts/employeeSidebar.vue'
  import Datepicker from 'vuejs-datepicker'
  import { employeeService } from '@/services/employeeService'
  import { authenticationService } from "@/services/authenticationService"
  import {organizationService} from '@/services/organizationService'

  export default {
    components: {
      LayoutHeader,
      LayoutSidebar,
      Datepicker
    },
    data () {
      return {
        leaveTypes: [],
        leaveType: "",
        employeeLeaves: [],
        employeeLeave: {},
        fromDate: "",
        toDate: "",
        reason: "",
        employeeId: "",
        company: authenticationService.currentOfficeValue,
        employee: authenticationService.currentUserValue.employee,
        error: "",
        message: ""
      }
    },
    methods: {
      deleteLeave () {
        const id = this.employeeLeave.id;
        employeeService.removeEmployeeLeave(id)
          .then(id => {
            employeeService.getEmployeeLeaves(this.company.id)
              .then(
                o => {this.employeeLeaves = o}
              )
          })
      },
      updateLeave () {
        this.submitted = true;
          const id = this.employeeLeave.id;
            this.loading = true;
        employeeService.updateEmployeeLeave(id, this.company.id, this.employee.id, this.employeeLeave.fromDate, this.employeeLeave.toDate, this.employeeLeave.reason, this.leaveType)
          .then(id => {
                      employeeService.getEmployeeLeaves(this.company.id)
                        .then(
                          o => {this.employeeLeaves = o
                          }
                        )
					},
                    error => {
                        this.error = error;
                        this.loading = false;
                    }
                );
      },
      setLeave (item) {
        this.employeeLeave = item
        console.log(this.employeeLeave)
      },
      setLeaveType () {
        this.leaveType = this.leaveTypes.map(a => a)
        //console.log(this.leaveType)
      },
      getLeaveTypes () {
        organizationService.getLeaveTypes()
          .then(
            model => { this.leaveTypes = model
            console.log(model) 
            },
            error => { error = error }
          )
      },
      getNoOfDaysInterval () {
        const a = new Date(this.toDate).getTime() - new Date(this.fromDate).getTime()
        const b = a / (1000 * 60 * 60 * 24);
        return b + 1;
      },
      getRemainingDays () {
        const a = new Date(this.toDate).getTime() - new Date().getTime()
        const b = a / (1000 * 60 * 60 * 24);
        return Math.floor(b + 1);
      },
      getEmployeeLeaves() {
        employeeService.getEmployeeLeaves(this.company.id)
          .then(
            model => { this.employeeLeaves = model
              //console.log('leaves:', model[0]) 
            },
            error => { error = error }
          )
      },
      onSubmit () {
          this.submitted = true;
          this.loading = true;
          //console.log(this.employee)

          //console.log(this.company.id, this.employee.id, this.fromDate, this.toDate, this.reason, this.leaveType)
          employeeService.addEmployeeLeave(this.company.id, this.employee.id, this.fromDate, this.toDate, this.reason, this.leaveType)
                .then(id => {
                      this.message = 'New Employee Added successfully';
                      employeeService.getEmployeeLeaves(this.company.id)
                        .then(
                          model => { this.employeeLeaves = model
                            console.log(model) 
                            this.message = "";
                          },
                          // error => { error = error }
                        )
                    
      },
                       error => {
                        this.error = error;
                        this.loading = false;
                    }
                );
      }
    },
    mounted() {
      this.getLeaveTypes()
      //this.setLeave()
      this.getEmployeeLeaves()
      // Date Time Picker

      if ($('.datetimepicker').length > 0) {
        $('.datetimepicker').datetimepicker({
          format: 'DD/MM/YYYY',
          icons: {
            up: "fa fa-angle-up",
            down: "fa fa-angle-down",
            next: 'fa fa-angle-right',
            previous: 'fa fa-angle-left'
          }
        });
      }

      // Select 2
      if ($('.select').length > 0) {
        $('.select').select2({
          minimumResultsForSearch: -1,
          width: '100%'
        });
      }
      // Multiselect
      if ($('#customleave_select').length > 0) {
        $('#customleave_select').multiselect();
      }
      if ($('#edit_customleave_select').length > 0) {
        $('#edit_customleave_select').multiselect();
      }
      // Datatable

      if ($('.datatable').length > 0) {
        $('.datatable').DataTable({
          "bFilter": false,
        });
      }
      if ($('.floating').length > 0) {
        $('.floating').on('focus blur', function (e) {
          $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
        }).trigger('blur');
      }
    },
    name: 'leavesrequest'
  }
</script>