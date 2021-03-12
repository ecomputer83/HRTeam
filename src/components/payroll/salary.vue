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
                              @click="setEditResignation(item)"
                              ><i class="fa fa-pencil m-r-5"></i> Edit</a
                            >
                            <a
                              class="dropdown-item"
                              @click="setDeleteResignation(item)"
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

        <!-- Add Resignation Modal -->
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
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label>Select Staff <span class="text-danger">*</span></label>
                                <select class="form-control" v-model="employeeId" v-on:change="getEmployeeStatutory">
                                <option>Select Staff</option>
                                <option v-for="item in employees" :key="item.id" :value="item.id">{{item.firstName}}</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label>Net Salary <span class="text-danger">*</span></label>
                                <input v-model="netSalary" class="form-control" type="text">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                                        <div class="col-sm-6">
                                            <h4 class="text-primary">Earnings</h4>
                                            <div class="form-group">
                                                <label>Basic <span class="text-danger">*</span></label>
                                                <input v-model="basic" class="form-control" type="text">
                                            </div>
                                            <div class="form-group">
                                                <label>DA(40%) <span class="text-danger">*</span></label>
                                                <input v-model="da" class="form-control" type="text">
                                            </div>
                                            <div class="form-group">
                                                <label>HRA(15%) <span class="text-danger">*</span></label>
                                                <input v-model="hra" class="form-control" type="text">
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
                                                
                                                <label>Medical Allowance <span class="text-danger">*</span></label>
                                                <input v-model="ma" class="form-control" type="text">
                                            </div>
                                            <div class="form-group">
                                                
                                                <label>Others <span class="text-danger">*</span></label>
                                                <input class="form-control" type="text">
                                            </div>
                                            <div class="add-more">
                                                <a href="#"><i class="fa fa-plus-circle"></i> Add More</a>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <h4 class="text-primary">Deductions</h4>
                                            <div class="form-group">
                                                
                                                <label>TDS <span class="text-danger">*</span></label>
                                                <input v-model="tds" class="form-control" type="text">
                                            </div>
                                            <div class="form-group">
                                                
                                                <label>ESI <span class="text-danger">*</span></label>
                                                <input v-model="esi" class="form-control" type="text">
                                            </div>
                                            <div class="form-group">
                                                
                                                <label>PF <span class="text-danger">*</span></label>
                                                <input v-model="pf" class="form-control" type="text">
                                            </div>
                                            <div class="form-group">
                                                
                                                <label>Leave <span class="text-danger">*</span></label>
                                                <input v-model="leave" class="form-control" type="text">
                                            </div>
                                            <div class="form-group">
                                                
                                                <label>Prof. Tax<span class="text-danger">*</span></label>
                                                <input v-model="tax" class="form-control" type="text">
                                            </div>
                                            <div class="form-group">
                                                <label>Labour Welfare <span class="text-danger">*</span></label>
                                                <input v-model="labourWelfare" class="form-control" type="text">
                                            </div>
                                            <div class="form-group">
                                                
                                                <label>Others <span class="text-danger">*</span></label>
                                                <input class="form-control" type="text">
                                            </div>
                                            <div class="add-more">
                                                <a href="#"><i class="fa fa-plus-circle"></i> Add More</a>
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
        text: 'Resigning Employee',
        align: 'start',
        value: 'profile',
      },
      { text: 'Designation', value: 'employee.designation' },
      { text: 'Reason', value: 'reason' },
      { text: 'Notice Date', value: 'noticeDate' },
      { text: 'Resignation Date', value: 'resignationDate' },
      { text: '', value: 'actions', sortable: false },
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
      basic: "",
      hra: "",
      ma: "",
      pf: "",
      allowance: "",
      leaveAllowance: "",
      hmo: "",
      tax: "",
      netSalary: "",
      leave: "",
      tds: "",
      da: "",
      conveyance: "",
      esi: "",
      labourWelfare: "",
      statutories: []


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
  },
  methods: {
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
      employeeService.getEmployeeSalary(this.employeeId).then(
        (model) => {
          console.log(model)
          this.salaries = model;
        },
        (error) => {
          error = error;
        }
      );
    },
    getEmployeeStatutory() {
      employeeService.getEmployeeStatutory(this.employeeId).then(
        (model) => {
          console.log('model statutory', model)
          this.statutories = model;
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
      this.dialog = false
    },
    closeEdit() {
      this.dialogEdit = false
    },
    closeDelete() {
      this.dialogDelete = false
    },
    setEditResignation(model) {
      this.resignation = model;
      this.dialogEdit = true
    },
    setDeleteResignation(model) {
      this.resignation = model;
      this.dialogDelete = true;
    },

    onSubmit() {
      this.submitted = true;

      
      this.loading = true;
        // console.log('basic', this.basic)
        // console.log('hra', this.hra)
        // console.log('ma', this.ma)
        // console.log('pf', this.pf)
        // console.log('allowance',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             this.allowance)
        // console.log('leaveAllowance', this.leaveAllowance)
        // console.log('hmo', this.hmo)
        // console.log('tax', this.tax)
        // console.log('tax', this.tax)


        

      employeeService
        .addEmployeeSalary(
          this.basic,
          this.hra,
          this.ma,
          this.pf,
          this.allowance,
          this.leaveAllowance,
          this.hmo,
          this.tax,
          this.netSalary,
          this.employeeId
        )
        .then(
          (id) => {
            employeeService.getEmployeeSalary(this.employeeId).then((w) => {
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