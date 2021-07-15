<template>
  <div class="disciplinaryMeasure">
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
                <h3 class="page-title">Disciplinary Measures</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/index">Dashboard</router-link>
                  </li>
                  <li class="breadcrumb-item active">Disciplinary Measures</li>
                </ul>
              </div>
              <div class="col-auto float-right ml-auto">
                <a
                  @click="openDialog"
                  class="btn add-btn"
                  ><i class="fa fa-plus"></i> Add Disciplinary Measures</a
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
                  :items="disciplinaryMeasures"
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
                            @click="setEditDisciplinaryMeasure(item)"
                            ><i class="fa fa-pencil m-r-5"></i> Edit</a
                          >
                          <a
                            class="dropdown-item"
                            @click="setDeleteDisciplinaryMeasure(item)"
                            ><i class="fa fa-trash-o m-r-5"></i> Delete</a
                          >
                          
                        </div>
                    </div>
                  </template>
                  <template v-slot:[`item.profile`]="{ item }">
                    <h2 class="table-avatar blue-link">
                      <router-link to="/profile/" class="avatar"
                        ><img alt="" src="~@/assets/profiles/avatar-02.jpg"
                      /></router-link>
                      <router-link to="/profile">{{
                        `${item.query.employee.firstName} ${item.query.employee.lastName}`
                      }}</router-link>
                    </h2>
                  </template>
                  <template v-slot:[`item.reas`]="{ item }">
                        {{item.reason | truncate(150, '...')}} 
                  </template>

                </v-data-table>
              </div>
            </div>
          </div>
          <!---/Datatable-->
        </div>
        <!-- /Page Content -->

        <!-- Add disciplinaryMeasure Modal -->
        <v-dialog v-model="dialog" max-width="725px"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add Disciplinary Measures</h5>
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
                  <div class="form-group">
                    <label>Employee <span class="text-danger">*</span></label>
                    <select class="form-control" v-model="employeeId" @change="getEmployeeQueries">
                      <option>Select Employee</option>
                      <option v-for="item in employees" :key="item.id" :value="item.id">{{item.firstName + ' ' + item.lastName}}</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>Query <span class="text-danger">*</span></label>
                    <select class="form-control" v-model="queryId">
                      <option>Select Employee Query</option>
                      <option v-for="item in queries" :key="item.id" :value="item.id">{{item.queryType + ' ' + new Date(item.date).toLocaleDateString() + ' (' + item.form + ')'}}</option>
                    </select>
                  </div>
                  <div class="form-group" v-if="queryId > 0">
                      <label>Date <span class="text-danger">*</span></label>
                      <div class="cal-icon">
                        <datepicker v-model="date" calendar-class input-class bootstrap-styling class="form-control datetimepicker" type="text" />
                      </div>
                  </div>
                   <!-- <div class="form-group">
                      <label>Form <span class="text-danger">*</span></label>
                      <select class="select form-control" v-model="form">
                        <option>-- Select --</option>
                        <option value="Verbal">Verbal</option>
                        <option value="Written">Written</option>
                        <option value="Terminated">Terminated</option>
                      </select>
                  </div> -->
                  
                  <div class="form-group" v-if="queryId > 0">
                      <label>Reason <span class="text-danger">*</span></label>
                      <textarea class="form-control" v-model="reason" rows="4"></textarea>
                  </div>
                  <div class="form-group" v-if="queryId > 0">
                      <label>Remark <span class="text-danger">*</span></label>
                      <input class="form-control" v-model="remark" />
                  </div>
                  <div class="submit-section" v-if="queryId > 0">
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
        <!-- /Add disciplinaryMeasure Modal -->

        <!-- Edit disciplinaryMeasure Modal -->
        <v-dialog v-model="dialogEdit" max-width="725px"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Disciplinary Measure</h5>
                <button
                  type="button"
                  class="close"
                  @click="closeEdit"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form @submit.prevent="updateDisciplinaryMeasure">
                  <div class="form-group">
                    <label>Employee <span class="text-danger">*</span></label>
                    <select class="form-control" v-model="disciplinaryMeasure.query.employeeId">
                      <option>Select Employee</option>
                      <option v-for="item in employees" :key="item.id" :value="item.id">{{item.firstName + ' ' + item.lastName}}</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>Query <span class="text-danger">*</span></label>
                    <select class="form-control" v-model="disciplinaryMeasure.queryId">
                      <option :value='0'>Select Employee Query</option>
                      <option v-for="item in queries" :key="item.id" :value="item.id">{{item.queryType + ' ' + new Date(item.date).toLocaleDateString() + ' (' + item.form + ')'}}</option>
                    </select>
                  </div>
                  <div class="form-group">
                      <label>Date <span class="text-danger">*</span></label>
                      <div class="cal-icon">
                        <datepicker v-model="disciplinaryMeasure.date" calendar-class input-class bootstrap-styling class="form-control datetimepicker" type="text" />
                      </div>
                  </div>
                  
                   <!-- <div class="form-group">
                      <label>Form <span class="text-danger">*</span></label>
                      <input class="form-control" v-model="disciplinary.form" />
                  </div> -->
                  <!-- <div class="form-group">
                      <label>Form <span class="text-danger">*</span></label>
                      <select class="select form-control" v-model="disciplinaryMeasure.form">
                        <option>-- Select --</option>
                        <option value="Verbal">Verbal</option>
                        <option value="Written">Written</option>
                        <option value="Terminated">Terminated</option>
                      </select>
                  </div> -->
                  <div class="form-group">
                      <label>Reason <span class="text-danger">*</span></label>
                      <textarea class="form-control" v-model="disciplinaryMeasure.reason" rows="4"></textarea>
                  </div>
                  <div class="form-group">
                      <label>Remark <span class="text-danger">*</span></label>
                      <input class="form-control" v-model="disciplinaryMeasure.remark" />
                  </div>
                  <div class="submit-section">
                    <button @click.prevent="updateDisciplinaryMeasure" class="btn btn-primary submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          
        </v-dialog>
        <!-- /Edit disciplinaryMeasure Modal -->

        <!-- Delete disciplinaryMeasure Modal -->
        <v-dialog v-model="dialogDelete" max-width="725px"
          >
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete disciplinaryMeasure</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div class="modal-btn delete-action">
                  <div class="row">
                    <div class="col-6">
                      <a
                        @click.prevent="deleteDisciplinaryMeasure"
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
        <!-- /Delete disciplinaryMeasure Modal -->
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
      // {
      //   text: 'Form',
      //   align: 'start',
      //   value: 'profile',
      // },
      // { text: 'Form', value: 'form' },
      { text: 'Reason', value: 'reas' },
      { text: 'Employee', value: 'profile' },
      // { text: 'Status Reason', value: 'reason' },
      { text: 'Designation(Employee)', value: 'query.employee.designation.name' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
      name: "",
      // form: "",
      employeeId: "",
      queryId: 0,
      hrManager: "",
      reason: "",
      remark: "",
      date: "",
      disciplinaryMeasure: {
        query: {}
      },
      disciplinaryMeasures: [],
      employee: {},
      loading: false,
      error: "",
      employees: [],
      submitted: false,
      queries:[],
      //employee: authenticationService.currentOfficeValue,
      company: authenticationService.currentOfficeValue,
      user: authenticationService.currentUserValue
    };
  },

  validations: {
    name: { required },
    reason: { required },
    form: { required },
    date: { required },
    //disciplinaryMeasureDate: { required },
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
    // getEmployees(id) {
    //   employeeService.getEmployees(id).then(
    //     (model) => {
    //       console.log(model);
    //       this.employees = model;
    //     },
    //     (error) => {
    //       error = error;
    //     }
    //   );
    // },
    getEmployees () {
        const companyId = this.company.id;
        //console.log('this.company.id', this.company.id)
        employeeService.getEmployees(companyId)
          .then(
            model => { this.employees = model
            // console.log(model) 
            },
            error => { error = error }
          )
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
    clearList() {
      this.employeeId = ""
    },
    setEditDisciplinaryMeasure(model) {
      this.disciplinaryMeasure = model;
      this.dialogEdit = true;
      employeeService.getQuery(model.query.employeeId).then(
        (model) => {
          this.queries = model;
          // console.log(`model`, model)
        },
        (error) => {
          error = error;
        }
      );
    },
    setDeleteDisciplinaryMeasure(model) {
      this.disciplinaryMeasure = model;
      this.dialogDelete = true;
    },
    getDisciplinaryMeasures() {
      //const user = this.user;
      // console.log(`company`, this.company.id)
      employeeService.getDisciplinaryMeasures(this.company.id).then(
        (model) => {
          this.disciplinaryMeasures = model;
          // console.log(`model`, model)
        },
        (error) => {
          error = error;
        }
      );
    },
    getEmployeeQueries() {
      //const user = this.user;
       //console.log(`company`, this.company.id)
      employeeService.getQuery(this.employeeId).then(
        (model) => {
          this.queries = model;
          // console.log(`model`, model)
        },
        (error) => {
          error = error;
        }
      );
    },
    onSubmit() {
      this.submitted = true;
      
      this.loading = true;
      employeeService
        .addDisciplinaryMeasure(
          this.date,
          this.queryId,
          this.reason,
          this.remark,
          this.employeeId
        )
        .then(
          (id) => {
            employeeService.getDisciplinaryMeasures(this.company.id).then((w) => {
              this.disciplinaryMeasures = w; 
              // console.log(w); 
              this.close()
            });
          },
          (error) => {
            this.error = error;
            this.loading = false;
          }
        );
    },
    updateDisciplinaryMeasure () {
        this.submitted = true;

        this.loading = true;
        // console.log(this.disciplinaryMeasure)
        employeeService
          .updateDisciplinaryMeasure(
            this.disciplinaryMeasure.id, 
            this.disciplinaryMeasure.date, 
            this.disciplinaryMeasure.queryId, 
            this.disciplinaryMeasure.reason, 
            this.disciplinaryMeasure.remark, 
            this.disciplinaryMeasure.employeeId
          )
            .then(id => {
                  employeeService.getDisciplinaryMeasures(this.company.id)
                    .then(
                      o => {this.disciplinaryMeasures = o, 
                      //console.log(o), 
                      this.closeEdit()}
                    )
              },
              error => {
                  this.error = error;
                  this.loading = false;
              }
            );
            
    },
    deleteDisciplinaryMeasure () {
      const id = this.disciplinaryMeasure.id;
      // console.log(this.disciplinaryMeasure)
        employeeService.removeDisciplinaryMeasure(id)
          .then(id => {
            employeeService.getDisciplinaryMeasures(this.company.id)
              .then(
                model => { this.disciplinaryMeasures = model
                // console.log(model)
                  this.closeDelete() },
                  error => { error = error }
              )
          })
    },
  },

  mounted() {

     this.getEmployees()
     this.getDisciplinaryMeasures()
    // Datatable
    //this.getEmployees(this.employee.id);
    //this.getEmployeedisciplinaryMeasures(this.company.id);

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
  name: "disciplinarymeasures",
};
</script>