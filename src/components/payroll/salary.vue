<template>
  <div class="resignation">
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
                <h3 class="page-title">Salary</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/index">Dashboard</router-link>
                  </li>
                  <li class="breadcrumb-item active">Salary</li>
                </ul>
              </div>
              <div class="col-auto float-right ml-auto">
                <a
                  @click="openDialog"
                  class="btn add-btn"
                  ><i class="fa fa-plus"></i> Add Salary</a
                >
              </div>
            </div>
          </div>
          <!-- /Page Header -->
          <!----Datatable-->
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <v-data-table
                  :headers="headers"
                  :items="salaries"
                  sort-by=""
                  class="elevation-1"
                >

                <template v-slot:[`item.actions`]="{ item }">
        
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
                        @click="setEditSalary(item)"
                        ><i class="fa fa-pencil m-r-5"></i> Edit</a
                      >
                      <a
                        class="dropdown-item"
                        @click="setDeleteSalary(item)"
                        ><i class="fa fa-trash-o m-r-5"></i> Delete</a
                      >
                    </div>
                  </div>
                </template>
                <template v-slot:[`item.profile`]="{ item }">
                  <h2 class="table-avatar blue-link">
                    <router-link to="/profile" class="avatar"
                      ><img alt="" src="../../assets/profiles/avatar-02.jpg"
                    /></router-link>
                    <router-link to="/profile">{{
                      `${item.employee.firstName} ${item.employee.lastName}`
                    }}</router-link>
                  </h2>
                </template>
              </v-data-table>
               
              </div>
            </div>
          </div>
          <!---/Datatable-->
        </div>
        <!-- /Page Content -->

        <!-- Add Salary Modal -->
        <v-dialog v-model="dialog" max-width="725px"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add Salary</h5>
                <button
                  type="button"
                  class="close"
                  @click="close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form @submit.prevent="onSubmit">
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
                    <div class="row"> 
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label>Select Staff <span class="text-danger">*</span></label>
                                <select class="form-control" v-model="employeeId" v-on:change="getEmployeeDetail">
                                <option>Select Staff</option>
                                <option v-for="item in employees" :key="item.id" :value="item.id">{{item.firstName + ' ' + item.lastName}}</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label>Net Salary <span class="text-danger">*</span></label>
                                <input v-model="netSalary" class="form-control" type="text" readonly>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                                        <div class="col-sm-6">
                                            <h4 class="text-primary">Earnings</h4>
                                            <div class="form-group">
                                                <label>Basic <span class="text-danger">*</span></label>
                                                <input v-model="basic" class="form-control" type="text" readonly>
                                            </div>
                                            
                                            <div class="form-group">
                                                <label>Conveyance <span class="text-danger">*</span></label>
                                                <input v-model="conveyance" class="form-control" type="text">
                                            </div>
                                            <div class="form-group">
                                                
                                                <label>Allowance <span class="text-danger">*</span></label>
                                                <input v-model="allowance" class="form-control" type="text">
                                            </div>
                                            <div class="form-group">
                                                
                                                <label>Leave Allowance <span class="text-danger">*</span></label>
                                                <input v-model="leaveAllowance" class="form-control" type="text">
                                            </div>
                                            <div class="form-group">
                                                
                                                <label>Medical Allowance <span class="text-danger">*</span></label>
                                                <input v-model="ma" class="form-control" type="text">
                                            </div>
                                            <!-- <div class="add-more">
                                                <a href="#"><i class="fa fa-plus-circle"></i> Add More</a>
                                            </div> -->
                                        </div>
                                        <div class="col-sm-6">
                                            <h4 class="text-primary">Deductions</h4>
                                            
                                            <div class="form-group">
                                                
                                                <label>PF <span class="text-danger">*</span></label>
                                                <input v-model="pf" class="form-control" type="text" readonly>
                                            </div>
                                            <div class="form-group">
                                                
                                                <label>Leave <span class="text-danger">*</span></label>
                                                <input v-model="leave" class="form-control" type="text">
                                            </div>
                                            <div class="form-group">
                                                
                                                <label>Prof. Tax<span class="text-danger">*</span></label>
                                                <input v-model="tax" class="form-control" type="text" readonly>
                                            </div>
                                            <div class="form-group">
                                                <label>Labour Welfare <span class="text-danger">*</span></label>
                                                <input v-model="labourWelfare" class="form-control" type="text">
                                            </div>
                                            <div class="form-group">
                                                
                                                <label>Others <span class="text-danger">*</span></label>
                                                <input class="form-control" v-model="dothers" type="text">
                                            </div>
                                        </div>
                                    </div>
                  <div class="form-group">
                                        <label>Reason <span class="text-danger">*</span></label>
                                        <textarea class="form-control" v-model="reason" rows="4"></textarea>
                                    </div>
                  <div class="submit-section">
                    <button
                      @click.prevent="onSubmit"
                      data-dismiss="modal"
                      class="btn btn-primary submit-btn"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
        </v-dialog>
        <!-- /Add Resignation Modal -->

        <!-- Edit Resignation Modal -->
        <v-dialog v-model="dialogEdit" max-width="725px"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Resignation</h5>
                <button
                  type="button"
                  class="close"
                  @click="closeEdit"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form @submit.prevent="updateEmployeeResignation">
                  <div class="form-group">
                    <label>Resigning Employee <span class="text-danger">*</span></label>
                    <select class="form-control" v-model="employeeId">
                      <option>Select Resigning Employee</option>
                      <option v-for="item in employees" :key="item.id" :value="item.id">{{item.firstName}}</option>
                    </select>
                  </div>
                  <div class="form-group">
                      <label>Notice Date <span class="text-danger">*</span></label>
                      <div class="cal-icon">
                        <datepicker v-model="resignation.noticeDate" calendar-class input-class bootstrap-styling class="form-control datetimepicker" type="text" />
                      </div>
                  </div>
                  <div class="form-group">
                      <label>Resignation Date <span class="text-danger">*</span></label>
                      <div class="cal-icon">
                        <datepicker v-model="resignation.resignationDate" calendar-class input-class bootstrap-styling class="form-control datetimepicker" type="text" />
                      </div>
                  </div>
                  <div class="form-group">
                                        <label>Reason <span class="text-danger">*</span></label>
                                        <textarea class="form-control" v-model="resignation.reason" rows="4"></textarea>
                                    </div>

                  
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          
        </v-dialog>
        <!-- /Edit Resignation Modal -->

        <!-- Delete Resignation Modal -->
        <v-dialog v-model="dialogDelete" max-width="725px"
          >
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete Resignation</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div class="modal-btn delete-action">
                  <div class="row">
                    <div class="col-6">
                      <a
                        @click.prevent="deleteEmployeeResignation"
                        class="btn btn-primary continue-btn"
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
        <!-- /Delete Resignation Modal -->
      </div>
      <!-- /Page Wrapper -->
    </div>
  </div>
</template>
<script>
import LayoutHeader from "@/components/layouts/Header.vue";
import LayoutSidebar from "@/components/layouts/Sidebar.vue";
import { required, sameAs } from "vuelidate/lib/validators";
import { employeeService } from "@/services/employeeService.js";
import Datepicker from 'vuejs-datepicker'
import { authenticationService } from "@/services/authenticationService";

export default {
  components: {
    LayoutHeader,
    LayoutSidebar,
    Datepicker
  },

  data() {
    return {
      dialog: false,
      dialogEdit: false,
      dialogDelete: false,
      headers: [
      {
        text: 'Employee',
        align: 'start',
        value: 'profile',
      },
      { text: 'Employee ID', value: 'employeeId' },
      { text: 'Email', value: 'employee.email' },
      { text: 'Role', value: 'employee.designation.name' },
      { text: 'Salary', value: 'basic' },
      { text: 'Receive Salary', value: 'netSalary' },
      { text: 'Payslip', value: 'paySlip', sortable: false  },                                                       
      { text: 'Actions', value: 'actions', sortable: false },
    ],
      name: "",
      employeeId: "",
      reason: "",
      noticeDate: "",
      resignationDate: "",
      resignation: {},
      salaries: [],
      employee: [],
      loading: false,
      error: "",
      employees: [],
      submitted: false,
      //employee: authenticationService.currentOfficeValue,
      company: authenticationService.currentOfficeValue,
      basic: "0",
      hra: "0",
      ma: "0",
      pf: "0",
      allowance: "0",
      leaveAllowance: "0",
      tax: "0",
      netSalary: "0",
      leave: "0",
      tds: "0",
      da: "0",
      conveyance: "0",
      dothers: "0",
      labourWelfare: "0",
      details: [],
      message: null

    };
  },

  validations: {
    name: { required },
    reason: { required },
    noticeDate: { required },
    resignationDate: { required },
  },
  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
    dialogEdit (val) {
      val || this.closeEdit()
    },
    conveyance (val) {
      this.calculateSalary()
    },
    allowance (val) {
      this.calculateSalary()
    },
    leaveAllowance (val) {
      this.calculateSalary()
    },
    ma (val) {
      this.calculateSalary()
    },
    others (val) {
      this.calculateSalary()
    }
  },
  methods: {
    clearModel () {
      this.basic = "0"; this.conveyance = "0"; this.allowance = "0"; this.leaveAllowance = "0"; this.ma = "0";
      this.pf = "0"; this.tax = "0"; this.leave = "0"; this.labourWelfare = "0"; this.dothers = "0";
      this.netSalary = "0"; this.details = {}
    },
    calculateSalary () {
      var totalrevenue = parseInt(this.basic) + parseInt(this.conveyance) + parseInt(this.allowance) + parseInt(this.leaveAllowance) + parseInt(this.ma)
      var totalrevenuewithoutbasic = parseInt(this.conveyance) + parseInt(this.allowance) + parseInt(this.leaveAllowance) + parseInt(this.ma)
      this.tax = this.calculateTax(totalrevenuewithoutbasic);
      var totaldeduction = parseInt(this.pf) + parseInt(this.tax) + parseInt(this.leave) + parseInt(this.labourWelfare) + parseInt(this.dothers)
      this.netSalary = totalrevenue - totaldeduction;
    },

    calculateTax (params){
      var annualSalary = parseInt(this.basic) * 12
      var annualPension = parseInt(this.pf) * 12
      var CRA = 200000 + ((20 * annualSalary) / 100)
      var taxable = (annualSalary + params) - (annualPension + CRA);
      var first300 = ((7 * 300000) / 100)
      var next300 = (taxable >= 300000) ? ((11 * 300000) / 100) : 0
      var next500 = (taxable >= 500000) ? ((15 * 500000) / 100) : 0
      var _next500 = (taxable >= 500000) ? ((19 * 500000) / 100) : 0
      var next1600 = (taxable >= 1600000) ? ((21 * 1600000) / 100) : 0
      var next3200 = (taxable >= 3200000) ? ((24 * 3200000) / 100) : 0
      var annualtax = first300 + next300 + next500 + _next500 + next1600 + next3200
      return annualtax / 12
    },
    getEmployees () {
        const companyId = this.company.id;
        employeeService.getEmployees(companyId)
          .then(
            model => { this.employees = model
            console.log(model) 
            },
            error => { error = error }
          )
    },
    getEmployeeSalary() {
      const companyId = this.company.id;
      employeeService.getEmployeeSalaries(companyId).then(
        (model) => {
          console.log(model)
          this.salaries = model;
        },
        (error) => {
          error = error;
        }
      );
    },
    getEmployeeDetail() {
      employeeService.getEmployeeDetail(this.employeeId).then(
        (model) => {
          console.log('model detail', model)
          if(model.employeeStatutory){
            this.error = null;
          this.details = model;
          this.basic = model.employeeStatutory.salaryAmount;
          this.pf = (model.employeePension.employeeRate * model.employeeStatutory.salaryAmount) / 100;
          this.tax = this.calculateTax(0);
          this.calculateSalary();

          }else{
            this.basic = "0"; this.pf = "0"; this.tax = "0";
            this.error = "The selected staff'salary cannot be found, please update his statutory information"
          }
        },
        (error) => {
          error = error;
        }
      );
    },
    openDialog(){
      this.dialog = true
    },
    close() {
      this.dialog = false;
      this.clearModel();
    },
    closeEdit() {
      this.dialogEdit = false
    },
    closeDelete() {
      this.dialogDelete = false
    },
    setEditSalary(model) {
      this.salaries = model;
      this.dialogEdit = true
    },
    setDeleteSalary(model) {
      this.salaries = model;
      this.dialogDelete = true;
    },

    onSubmit() {
      this.submitted = true;

      this.loading = true;      

      employeeService
        .addEmployeeSalary(
          this.basic = parseInt(this.basic),
          this.hra = parseInt(this.hra),
          this.ma = parseInt(this.ma),
          this.pf = parseInt(this.pf),
          this.allowance = parseInt(this.allowance),
          this.leaveAllowance = parseInt(this.leaveAllowance),
          this.hmo = 0,
          this.tax = parseInt(this.tax),
          this.netSalary = parseInt(this.netSalary),
          this.employeeId
        )
        .then(
          (id) => {
            const companyId = this.company.id;
              employeeService.getEmployeeSalaries(companyId).then((w) => {
              this.salaries = w, console.log(w); this.close()
            });
          },
          (error) => {
            this.error = error;
            this.loading = false;
          }
        );
    },
    updateEmployeeResignation () {
        this.submitted = true;

        this.loading = true;
        console.log(this.resignation)
        employeeService.updateEmployeeResignation(this.resignation.id, this.resignation.resignationDate, this.resignation.reason, this.resignation.noticeDate, this.resignation.employeeId)
                .then(id => {
                      employeeService.getEmployeeResignations(this.company.id)
                        .then(
                         o => {this.salaries = o, console.log(o), this.closeEdit()}
                        )
          },
                    error => {
                        this.error = error;
                        this.loading = false;
                    }
                );
            
    },
    deleteEmployeeResignation () {
      const id = this.resignation.id;
      console.log(this.resignation)
        employeeService.removeEmployeeResignation(id)
          .then(id => {
            employeeService.getEmployeeResignations(this.company.id)
                      .then(
                        model => { this.salaries = model
                        console.log(model)
                        this.closeDelete() },
                        error => { error = error }
                      )
          })
    },
  },

  mounted() {

     this.getEmployees()
     this.getEmployeeSalary()
    // Datatable
    //this.getEmployees(this.employee.id);
    //this.getEmployeeResignations(this.company.id);

    if ($(".datatable").length > 0) {
      $(".datatable").DataTable({
        bFilter: false,
      });
    }
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

    if ($(".floating").length > 0) {
      $(".floating")
        .on("focus blur", function (e) {
          $(this)
            .parents(".form-focus")
            .toggleClass(
              "focused",
              e.type === "focus" || this.value.length > 0
            );
        })
        .trigger("blur");
    }
  },
  name: "salary",
};
</script>