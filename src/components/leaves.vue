m<template>
  <div class="leaves">
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
                <a class="btn add-btn" @click="openDialog"
                  ><i class="fa fa-plus"></i> Add Leave</a
                >
              </div>
            </div>
          </div>
          <!-- /Page Header -->
          <!-- Leave Statistics -->
          <div class="row">
            <div class="col-md-3">
              <div class="stats-info">
                <h6>Today Presents</h6>
                <h4>12 / 60</h4>
              </div>
            </div>
            <div class="col-md-3">
              <div class="stats-info">
                <h6>Planned Leaves</h6>
                <h4>8 <span>Today</span></h4>
              </div>
            </div>
            <div class="col-md-3">
              <div class="stats-info">
                <h6>Unplanned Leaves</h6>
                <h4>0 <span>Today</span></h4>
              </div>
            </div>
            <div class="col-md-3">
              <div class="stats-info">
                <h6>Pending Requests</h6>
                <h4>12</h4>
              </div>
            </div>
          </div>
          <!-- /Leave Statistics -->
          <!-- Search Filter -->
          <div class="row filter-row">
            <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <div class="form-group form-focus">
                <input type="text" class="form-control floating" />
                <label class="focus-label">Employee Name</label>
              </div>
            </div>
            <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <div class="form-group form-focus select-focus">
                <select class="select floating" style="height: 55px !important">
                  <option>-- Select --</option>
                  <option>Casual Leave</option>
                  <option>Medical Leave</option>
                  <option>Loss of Pay</option>
                </select>
                <label class="focus-label">Leave Type</label>
              </div>
            </div>
            <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <div class="form-group form-focus select-focus">
                <select class="select floating" style="height: 55px !important">
                  <option>-- Select --</option>
                  <option>Pending</option>
                  <option>Approved</option>
                  <option>Rejected</option>
                </select>
                <label class="focus-label">Leave Status</label>
              </div>
            </div>
            <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <div class="form-group form-focus">
                <div class="cal-icon">
                  <input
                    class="form-control floating datetimepicker"
                    type="text"
                  />
                </div>
                <label class="focus-label">From</label>
              </div>
            </div>
            <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <div class="form-group form-focus">
                <div class="cal-icon">
                  <input
                    class="form-control floating datetimepicker"
                    type="text"
                  />
                </div>
                <label class="focus-label">To</label>
              </div>
            </div>
            <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <a href="#" class="btn btn-success btn-block"> Search </a>
            </div>
          </div>
          <!-- /Search Filter -->
          <!----Datatable-->
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <div
                  class="alert alert-danger alert-dismissible fade show"
                  role="alert"
                  v-if="error"
                >
                  <strong>Error!</strong> {{ error }}
                  <button
                    type="button"
                    class="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
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
                    <tr v-for="item in employeeLeaves" v-bind:key="item.id">
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"
                            ><img
                              alt=""
                              src="../assets/profiles/avatar-09.jpg"
                            />
                          </router-link>
                          <a href="#">{{
                            `${item.employee.firstName} ${item.employee.lastName}`
                          }}</a>
                        </h2>
                      </td>
                      <td>{{ item.leaveType.name }}</td>
                      <td>{{ item.fromDate }}</td>
                      <td>{{ item.toDate }}</td>
                      <td>{{ item.days }} days</td>
                      <td>{{ item.reason }}</td>
                      <td class="text-center">
                        <div class="dropdown action-label">
                          <a
                            class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                            href="#"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="fa fa-dot-circle-o text-purple"></i> New
                          </a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" value="0" href="#"
                              ><i class="fa fa-dot-circle-o text-purple"></i>
                              New</a
                            >
                            <a class="dropdown-item" value="1" href="#"
                              ><i class="fa fa-dot-circle-o text-info"></i>
                              Pending</a
                            >
                            <a
                              class="dropdown-item"
                              value="2"
                              href="#"
                              data-toggle="modal"
                              data-target="#approve_leave"
                              ><i class="fa fa-dot-circle-o text-success"></i>
                              Approved</a
                            >
                            <a class="dropdown-item" value="3" href="#"
                              ><i class="fa fa-dot-circle-o text-danger"></i>
                              Declined</a
                            >
                          </div>
                        </div>
                      </td>
                      <td class="text-right">
                        <div class="dropdown dropdown-action">
                          <a
                            href="#"
                            class="action-icon dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                            ><i class="material-icons">more_vert</i></a
                          >
                          <div class="dropdown-menu dropdown-menu-right">
                            <a
                              class="dropdown-item"
                              @click="setEditLeave(item)"
                              data-toggle="modal"
                              data-target="#edit_leave"
                              ><i class="fa fa-pencil m-r-5"></i> Edit</a
                            >
                            <a
                              class="dropdown-item"
                              @click="setLeave(item)"
                              data-toggle="modal"
                              data-target="#delete_approve"
                              ><i class="fa fa-trash-o m-r-5"></i> Delete</a
                            >
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!---/Datatable-->
          <!-- /Page Content -->
          <!-- Add Leave Modal -->
          <v-dialog v-model="dialog" max-width="725px">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add Leave</h5>
                <button type="button" @click="close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form @submit.prevent="onSubmit">
                  <div class="row">
                    <div class="col-md-12">
                      <div
                        class="alert alert-danger alert-dismissible fade show"
                        role="alert"
                        v-if="error"
                      >
                        <strong>Error!</strong> {{ error }}
                        <button
                          type="button"
                          class="close"
                          data-dismiss="alert"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div
                        class="alert alert-success alert-dismissible fade show"
                        role="alert"
                        v-if="message"
                      >
                        <strong>Success!</strong> {{ message }}
                        <button
                          type="button"
                          class="close"
                          data-dismiss="alert"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Employee <span class="text-danger">*</span></label>
                    <select class="form-control" v-model="employeeId">
                      <option>Select Staff</option>
                      <option
                        v-for="member in employees"
                        :key="member.id"
                        :value="member.id"
                      >
                        {{ member.lastName + " " + member.firstName }}
                      </option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>Leave Type <span class="text-danger">*</span></label>
                    <select class="form-control" v-model="leaveType">
                      <option>Select Leave Type</option>
                      <option
                        v-for="item in leaveTypes"
                        :key="item.id"
                        :value="item.id"
                      >
                        {{ item.name }}
                      </option>
                    </select>
                  </div>
                  <div class="form-group wrapper-class">
                    <label>From <span class="text-danger">*</span></label>
                    <div class="cal-icon">
                      <datepicker
                        v-model="fromDate"
                        calendar-class
                        input-class
                        bootstrap-styling
                        class="form-control datetimepicker"
                        type="text"
                      />
                      <!-- <input class="form-control datetimepicker" type="text"> -->
                    </div>
                  </div>
                  <div class="form-group">
                    <label>To <span class="text-danger">*</span></label>
                    <div class="cal-icon">
                      <datepicker
                        v-model="toDate"
                        bootstrap-styling
                        class="form-control datetimepicker"
                        type="date"
                      />
                      <!-- <input class="form-control datetimepicker" type="text"> -->
                    </div>
                  </div>
                  <div class="form-group">
                    <label
                      >Number of days <span class="text-danger">*</span></label
                    >
                    <input
                      :value="this.getNoOfDaysInterval()"
                      class="form-control"
                      readonly
                      type="text"
                    />
                  </div>
                  <div class="form-group">
                    <label
                      >Remaining Leaves
                      <span class="text-danger">*</span></label
                    >
                    <input
                      :value="this.getRemainingDays()"
                      class="form-control"
                      readonly
                      type="text"
                    />
                  </div>
                  <div class="form-group">
                    <label
                      >Leave Reason <span class="text-danger">*</span></label
                    >
                    <textarea
                      v-model="reason"
                      rows="4"
                      class="form-control"
                    ></textarea>
                  </div>
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </v-dialog>
          <!-- /Add Leave Modal -->
          <!-- Edit Leave Modal -->
          <v-dialog v-model="dialogEdit" max-width="725px">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Leave</h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="row">
                    <div class="col-md-12">
                      <div
                        class="alert alert-danger alert-dismissible fade show"
                        role="alert"
                        v-if="error"
                      >
                        <strong>Error!</strong> {{ error }}
                        <button
                          type="button"
                          class="close"
                          data-dismiss="alert"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div
                        class="alert alert-success alert-dismissible fade show"
                        role="alert"
                        v-if="message"
                      >
                        <strong>Success!</strong> {{ message }}
                        <button
                          type="button"
                          class="close"
                          data-dismiss="alert"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Employee <span class="text-danger">*</span></label>
                    <select class="form-control" v-model="employeeId">
                      <option>Select Staff</option>
                      <option
                        v-for="member in employees"
                        :key="member.id"
                        :value="member.id"
                      >
                        {{ member.lastName }}
                      </option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>Leave Type <span class="text-danger">*</span></label>
                    <select class="form-control" v-model="leaveType">
                      <option>Select Leave Type</option>
                      <option
                        v-for="item in leaveTypes"
                        :key="item.id"
                        :value="item.id"
                      >
                        {{ item.name }}
                      </option>
                      <!-- <option>Casual Leave 12 Days</option> -->
                    </select>
                  </div>
                  <!-- <div class="form-group">
                      <label>From <span class="text-danger">*</span></label>
                      <div class="cal-icon">
                        <input id="fromDate" class="form-control datetimepicker" 
                          
                          v-model="employeeLeave.fromDate" type="date">
                      </div>
                    </div> -->
                  <!-- <div class="form-group">
                      <label>To <span class="text-danger">*</span></label>
                      <div class="cal-icon">
                        <input class="form-control datetimepicker" v-model="employeeLeave.toDate" type="text">
                      </div>
                    </div> -->
                  <div class="form-group">
                    <label>From <span class="text-danger">*</span></label>
                    <div class="cal-icon">
                      <datepicker
                        v-model="employeeLeave.fromDate"
                        bootstrap-styling
                        class="form-control datetimepicker"
                        type="date"
                      />
                      <!-- <input class="form-control datetimepicker" type="text"> -->
                    </div>
                  </div>
                  <div class="form-group">
                    <label>To <span class="text-danger">*</span></label>
                    <div class="cal-icon">
                      <datepicker
                        v-model="employeeLeave.toDate"
                        bootstrap-styling
                        class="form-control datetimepicker"
                        type="date"
                      />
                      <!-- <input class="form-control datetimepicker" type="text"> -->
                    </div>
                  </div>
                  <div class="form-group">
                    <label
                      >Number of days <span class="text-danger">*</span></label
                    >
                    <input
                      class="form-control"
                      readonly
                      type="text"
                      :value="this.getNoOfDaysInterval()"
                    />
                  </div>
                  <div class="form-group">
                    <label
                      >Remaining Leaves
                      <span class="text-danger">*</span></label
                    >
                    <input
                      class="form-control"
                      readonly
                      :value="this.getRemainingDays()"
                      type="text"
                    />
                  </div>
                  <div class="form-group">
                    <label
                      >Leave Reason <span class="text-danger">*</span></label
                    >
                    <textarea
                      rows="4"
                      class="form-control"
                      v-model="employeeLeave.reason"
                    ></textarea>
                  </div>
                  <div class="submit-section">
                    <button
                      @click.prevent="updateLeave"
                      class="btn btn-primary submit-btn"
                      data-dismiss="modal"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </v-dialog>
          <!-- /Edit Leave Modal -->
          <!-- Approve Leave Modal -->
          <div class="modal custom-modal fade" id="approve_leave" role="dialog">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-body">
                  <div class="form-header">
                    <h3>Leave Approve</h3>
                    <p>Are you sure want to approve for this leave?</p>
                  </div>
                  <div class="modal-btn delete-action">
                    <div class="row">
                      <div class="col-6">
                        <a
                          href="javascript:void(0);"
                          class="btn btn-primary continue-btn"
                          >Approve</a
                        >
                      </div>
                      <div class="col-6">
                        <a
                          href="javascript:void(0);"
                          data-dismiss="modal"
                          class="btn btn-primary cancel-btn"
                          >Decline</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /Approve Leave Modal -->
          <!-- Delete Leave Modal -->
          <div
            class="modal custom-modal fade"
            id="delete_approve"
            role="dialog"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-body">
                  <div class="form-header">
                    <h3>Delete Leave</h3>
                    <p>Are you sure want to delete this leave?</p>
                  </div>
                  <div class="modal-btn delete-action">
                    <div class="row">
                      <div class="col-6">
                        <a
                          class="btn btn-primary continue-btn"
                          @click="deleteLeave()"
                          data-dismiss="modal"
                          >Delete</a
                        >
                      </div>
                      <div class="col-6">
                        <a
                          href="javascript:void(0);"
                          data-dismiss="modal"
                          class="btn btn-primary cancel-btn"
                          >Cancel</a
                        >
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
import LayoutHeader from "@/components/layouts/Header.vue";
import LayoutSidebar from "@/components/layouts/Sidebar.vue";
import Datepicker from "vuejs-datepicker";
import { organizationService } from "@/services/organizationService";
import { employeeService } from "@/services/employeeService";
import { authenticationService } from "@/services/authenticationService";

export default {
  components: {
    LayoutHeader,
    LayoutSidebar,
    Datepicker,
  },
  data() {
    return {
      dialog: false,
      dialogEdit: false,
      dialogDelete: false,
      leaveType: {},
      leave: null,
      employeeLeaves: [],
      employeeLeave: {},
      leaves: [],
      leaveTypes: [],
      fromDate: "",
      toDate: "",
      reason: "",
      employeeId: 0,
      employees: [],
      employee: {},
      company: authenticationService.currentOfficeValue,
      error: "",
      message: "",
      daysInterval: "",
      status: "",
    };
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
    dialogEdit(val) {
      val || this.closeEdit();
    },
  },

  methods: {
    clearModel() {
      this.employeeId = "";
      this.reason = "";
      this.daysInterval = "";
      this.toDate = "";
      this.fromDate = "";
      this.leaveTypes = "";
    },

    close() {
      this.dialog = false;
      this.clearModel();
    },

    openDialog() {
      this.dialog = true;
    },

    closeEdit() {
      this.dialogEdit = false;
    },

    closeDelete() {
      this.dialogDelete = false;
    },

    setEditLeave(item) {
      this.leave = item;
      this.dialogEdit = true;
    },

    setDeleteLeave(item) {
      this.leave = item;
      this.dialogDelete = true;
    },

    deleteLeave() {
      const id = this.employeeLeave.id;
      employeeService.removeEmployeeLeave(id).then(
        (id) => {
          employeeService.getEmployeeLeaves(this.company.id).then((o) => {
            this.employeeLeaves = o;
          });
        },
        (e) => {
          this.error = "Leave Type is being used in some information";
          this.dialogDelete = false;
        }
      );
    },
    setLeave(item) {
      this.employeeLeave = item;
    },
    updateLeave() {
      this.submitted = true;
      const id = this.employeeLeave.id;
      this.loading = true;
      employeeService
        .updateEmployeeLeave(
          id,
          this.company.id,
          this.employeeId,
          this.employeeLeave.fromDate,
          this.employeeLeave.toDate,
          this.employeeLeave.reason,
          this.leaveType
        )
        .then(
          (id) => {
            employeeService.getEmployeeLeaves(this.company.id).then((o) => {
              this.employeeLeaves = o;
              this.closeEdit();
            });
          },
          (error) => {
            this.error = error;
            this.loading = false;
          }
        );
    },
    getEmployeeLeaves() {
      employeeService.getEmployeeLeaves(this.company.id).then(
        (model) => {
          this.employeeLeaves = model;
          console.log("leaves:", model[0]);
        },
        (error) => {
          error = error;
        }
      );
    },
    getEmployees() {
      employeeService.getEmployees(this.company.id).then(
        (model) => {
          this.employees = model;
          console.log(model);
        },
        (error) => {
          error = error;
        }
      );
    },
    getLeaveTypes() {
      organizationService.getLeaveTypes().then(
        (model) => {
          this.leaveTypes = model;
          console.log(model);
        },
        (error) => {
          error = error;
        }
      );
    },
    getNoOfDaysInterval() {
      const a =
        new Date(this.toDate).getTime() - new Date(this.fromDate).getTime();
      const b = a / (1000 * 60 * 60 * 24);
      return b + 1;
    },
    getRemainingDays() {
      const a = new Date(this.toDate).getTime() - new Date().getTime();
      const b = a / (1000 * 60 * 60 * 24);
      return Math.floor(b + 1);
    },
    setLeaveType() {
      this.leaveType = this.leaveTypes.map((a) => a);
      //console.log(this.leaveType)
    },
    onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      // this.$v.$touch();
      // if (this.$v.$invalid) {
      //     return;
      // }
      this.loading = true;
      employeeService
        .addEmployeeLeave(
          this.company.id,
          this.employeeId,
          this.fromDate,
          this.toDate,
          this.reason,
          this.leaveType
        )
        .then(
          (id) => {
            this.message = "New Employee Added successfully";
            employeeService.getEmployeeLeaves(this.company.id).then(
              (model) => {
                this.employeeLeaves = model;
                //console.log(model[0])
                this.message = "";
                this.close();
              }
              // error => { error = error }
            );
          },
          (error) => {
            this.error = error;
            this.loading = false;
          }
        );
    },
  },
  mounted() {
    this.getLeaveTypes();
    this.setLeaveType();
    this.getEmployees();
    this.getEmployeeLeaves();
    //this.setDaysInterval()
    // Date Time Picker

    if ($(".datetimepicker").length > 0) {
      $(".datetimepicker").datetimepicker({
        format: "DD/MM/YYYY",
        icons: {
          up: "fa fa-angle-up",
          down: "fa fa-angle-down",
          next: "fa fa-angle-right",
          previous: "fa fa-angle-left",
        },
      });
    }

    // Select 2
    if ($(".select").length > 0) {
      $(".select").select2({
        minimumResultsForSearch: -1,
        width: "100%",
      });
    }
    // Multiselect
    if ($("#customleave_select").length > 0) {
      $("#customleave_select").multiselect();
    }
    if ($("#edit_customleave_select").length > 0) {
      $("#edit_customleave_select").multiselect();
    }
    // Datatable

    // if ($('.datatable').length > 0) {
    //   $('.datatable').DataTable({
    //     "bFilter": false,
    //   });
    // }
    // if ($('.floating').length > 0) {
    //   $('.floating').on('focus blur', function (e) {
    //     $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
    //   }).trigger('blur');
    // }
  },
  name: "leaves",
};
</script>