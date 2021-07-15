<template>
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
            <div class="col-md-3" v-for="item in leaveEgb" :key="item.typeId">
              <div class="stats-info">
                <h6>{{item.leaveTypeName}} Leave</h6>
                <h4>{{item.eligible - item.used}}</h4>
              </div>
            </div>
            
          </div>
          <!-- /Leave Statistics -->
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
                <v-data-table
                  :headers="headers"
                  :items="employeeLeaves"
                  sort-by=""
                  class="elevation-1"
                >
                  <template v-slot:[`item.fromDate`]="{ item }">
                      {{ item.fromDate ? new Date(item.fromDate).toLocaleDateString() : ""}}
                  </template>
                  <template v-slot:[`item.toDate`]="{ item }">
                      {{ item.toDate ? new Date(item.toDate).toLocaleDateString() : ""}}
                  </template>
                <template v-slot:[`item.actions`]="{ item }">
                    <div class="dropdown dropdown-action" v-if="item.status == 0">
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
                          @click="setEditLeave(item)" v-if="item.status == 0"
                          ><i class="fa fa-pencil m-r-5"></i> Edit</a
                        >
                        <a
                          class="dropdown-item"
                          @click="setDeleteLeave(item)"
                          ><i class="fa fa-trash-o m-r-5"></i> Delete</a
                        >
                      </div>
                    </div>
                  </template>
                <template v-slot:[`item.stat`]="{ item }">
                    <a class="btn btn-white btn-sm btn-rounded" v-if="item.status == 0"
                            aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-purple"></i> New
                          </a>
                    <a class="btn btn-white btn-sm btn-rounded" v-if="item.status == 1"
                            aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-success"></i> Approved
                          </a>
                    <a class="btn btn-white btn-sm btn-rounded" v-if="item.status == 2"
                            aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-danger"></i> Declined
                          </a>
                </template>
                </v-data-table>
               
              </div>
            </div>
          </div>
          <!---/Datatable-->
          <!-- /Page Content -->
          <!-- Add Leave Modal -->
          <v-dialog v-model="dialog" max-width="500px">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add Leave</h5>
                <button type="button" @click="close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
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
                <form @submit.prevent="onSubmit">
                  
                  
                  <div class="form-group">
                    <label>Leave Type <span class="text-danger">*</span></label>
                    <select class="form-control" v-model="leaveTypeId" @change="getRemainingLeaveDays">
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
                  <div class="form-group wrapper-class" v-if="eligibileDays > 0">
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
                  <div class="form-group" v-if="eligibileDays > 0">
                    <label>To <span class="text-danger">*</span></label>
                    <div class="cal-icon">
                      <datepicker
                        v-model="toDate"
                        bootstrap-styling
                        class="form-control datetimepicker"
                        @change="this.getNoOfDaysInterval()"
                        type="date"
                      />
                      <!-- <input class="form-control datetimepicker" type="text"> -->
                    </div>
                  </div>
                  <!-- <div class="form-group" v-if="eligibileDays > 0">
                    <label
                      >Number of days <span class="text-danger">*</span></label
                    >
                    <input
                      v-model="days"
                      class="form-control"
                      readonly
                      type="text"
                    />
                  </div> -->
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
                  <div class="form-group" v-if="eligibileDays > 0">
                    <label
                      >Leave Reason <span class="text-danger">*</span></label
                    >
                    <textarea
                      v-model="reason"
                      rows="4"
                      class="form-control"
                    ></textarea>
                  </div>
                  <div class="submit-section" v-if="eligibileDays > 0">
                    <button class="btn btn-primary submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </v-dialog>
          <!-- /Add Leave Modal -->

          <!-- Edit Leave Modal -->
         <v-dialog v-model="dialogEdit" max-width="500px">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Leave</h5>
                <button type="button" @click="closeEdit">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form @submit.prevent="updateLeave">
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
                    <label>Leave Type <span class="text-danger">*</span></label>
                    <select class="form-control" v-model="leave.leaveTypeId" @change="getRemainingLeaveDays">
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
                        v-model="leave.fromDate"
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
                        v-model="leave.toDate"
                        bootstrap-styling
                        class="form-control datetimepicker"
                        @change="this.getNoOfDaysIntervalEdit()"
                        type="date"
                      />
                      <!-- <input class="form-control datetimepicker" type="text"> -->
                    </div>
                  </div>
                  <!-- <div class="form-group">
                    <label
                      >Number of days <span class="text-danger">*</span></label
                    >
                    <input
                      v-model="leave.days"
                      class="form-control"
                      readonly
                      type="text"
                    />
                  </div> -->
                  <div class="form-group">
                    <label
                      >Remaining Leaves
                      <span class="text-danger">*</span></label
                    >
                    <input
                      :value="this.getRemainingDaysEdit()"
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
                      v-model="leave.reason"
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
          <!-- /Edit Leave Modal -->
          <!-- Delete Leave Modal -->
          <v-dialog v-model="dialogDelete" max-width="500px">
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
          </v-dialog>
          <!-- /Delete Leave Modal -->
        </div>
        <!-- /Page Wrapper -->
      </div>
    </div>
  </div>
</template>
<script>
import LayoutHeader from "@/components/layouts/Header.vue";
import LayoutSidebar from "@/components/layouts/employeeSidebar.vue";
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
      dialogStatus: false,
      dialogDelete: false,
      media: 'data:image/jpeg;base64,',
      headers: [
        { text: 'LeaveType', value: 'leaveType.name' },
        { text: 'From', value: 'fromDate' },
        { text: 'To', value: 'toDate' },
        { text: 'No of Days', value: 'days' },
        { text: 'Reason', value: 'reason' },
        { text: 'Status', value: 'stat' },
        { text: 'Action', value: 'actions', sortable: false },
      ],
      leaveTypeId: 0,
      days: 0,
      leave: {},
      employeeLeaves: [],
      employeeLeave: {},
      leaves: [],
      leaveTypes: [],
      fromDate: "",
      toDate: "",
      eligibileDays: 0,
      reason: "",
      employeeId: 0,
      employees: [],
      employee: {},
      leaveEgb: [],
      company: authenticationService.currentOfficeValue,
      user: authenticationService.currentUserValue,
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
    dialogStatus(val) {
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
      this.leaveTypeId = 0;
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

    closeStatus() {
      this.dialogStatus = false;
    },

    closeDelete() {
      this.dialogDelete = false;
    },

    setEditLeave(item) {
      this.leave = item;
      this.getRemainingLeaveDaysByType(this.leave.leaveTypeId)
      this.dialogEdit = true;
      //console.log(`item`, item)
    },

    setLeaveStatus(item) {
      this.leave = item;
      this.dialogStatus = true;
      //console.log(`item`, item)
    },

    setDeleteLeave(item) {
      this.leave = item;
      this.dialogDelete = true;
    },
    getRemainingLeaveDays() {
      employeeService.getEmployeeLeaveEligibility(this.user.employee.id, this.leaveTypeId).then((o) => {
            this.eligibileDays = o;
          });
    },
    getRemainingLeaveDaysByType(leaveTypeId) {
      employeeService.getEmployeeLeaveEligibility(this.user.employee.id, leaveTypeId).then((o) => {
            this.eligibileDays = o;
          });
    },

    getSummary() {
       employeeService.getEmployeeLeaveSummary(this.user.employee.id)
          .then(
            model => { this.leaveEgb = model
              //console.log('leaves:', model[0]) 
            },
            error => { error = error }
          )
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
      const id = this.leave.id;
      this.loading = true;
      employeeService
        .updateEmployeeLeave(
          id,
          this.leave
        )
        .then(
          (id) => {
            employeeService.getEmployeeLeavesByEmployee(this.user.employee.id).then((o) => {
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
    changeLeaveStatus(status) {
      this.submitted = true;
      const id = this.leave.id;
      this.leave.status = status
      this.leave.approvedBy = this.user.employee.id
      this.loading = true;
      employeeService
        .updateEmployeeLeave(
          id,
          this.leave
        )
        .then(
          (id) => {
            employeeService.getEmployeeLeaves(this.company.id).then((o) => {
              this.employeeLeaves = o;
              this.closeStatus();
            });
          },
          (error) => {
            this.error = error;
            this.loading = false;
          }
        );
    },
    getEmployeeLeaves() {
      employeeService.getEmployeeLeavesByEmployee(this.user.employee.id).then(
        (model) => {
          this.employeeLeaves = model;
          // console.log("leaves:", model[0]);
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
          // console.log(model);
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
          // console.log(model);
        },
        (error) => {
          error = error;
        }
      );
    },
    getNoOfDaysInterval() {
      if(this.toDate == "" || this.fromDate == ""){
        this.days = 0
      }
      const a =
        new Date(this.toDate).getTime() - new Date(this.fromDate).getTime();
      const b = a / (1000 * 60 * 60 * 24);
      this.days = b + 1;
    },
    getNoOfDaysIntervalEdit() {
      const a =
        new Date(this.leave.toDate).getTime() - new Date(this.leave.fromDate).getTime();
      const b = a / (1000 * 60 * 60 * 24);
      this.leave.days = b + 1;
    },
    getRemainingDays() {
      if(this.toDate == "" || this.fromDate == ""){
        return this.eligibileDays
      }
      const a = new Date(this.toDate).getTime() - new Date(this.fromDate).getTime();
      const b = a / (1000 * 60 * 60 * 24);
      return this.eligibileDays - Math.floor(b + 1);
    },
    getRemainingDaysEdit() {
      const a = new Date(this.leave.toDate).getTime() - new Date(this.leave.fromDate).getTime();
      const b = a / (1000 * 60 * 60 * 24);
      return this.eligibileDays - Math.floor(b + 1);
    },
    // setLeaveType() {
    //   this.leaveType = this.leaveTypes.map((a) => a);
    //   //console.log(this.leaveType)
    // },
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
          this.user.employee.id,
          this.fromDate,
          this.toDate,
          this.days,
          this.reason,
          this.leaveTypeId,
          0,
          0
        )
        .then(
          (id) => {
            this.message = "New Leave Added successfully";
            employeeService.getEmployeeLeavesByEmployee(this.user.employee.id).then(
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
    this.getSummary();
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