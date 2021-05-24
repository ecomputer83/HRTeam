<template>
  <div class="query">
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
                <h3 class="page-title">Query</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/index">Dashboard</router-link>
                  </li>
                  <li class="breadcrumb-item active">Query</li>
                </ul>
              </div>
              <div class="col-auto float-right ml-auto">
                <a
                  @click="openDialog"
                  class="btn add-btn"
                  ><i class="fa fa-plus"></i> Add Query</a
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
                  :items="queries"
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
                            @click="setEditquery(item)"
                            ><i class="fa fa-pencil m-r-5"></i> Edit</a
                          >
                          <a
                            class="dropdown-item"
                            @click="setDeletequery(item)"
                            ><i class="fa fa-trash-o m-r-5"></i> Delete</a
                          >
                          <a
                            class="dropdown-item"
                            @click="setQueryResponse(item)"
                            ><i class="fa fa-trash-o m-r-5"></i> Response</a
                          >
                        </div>
                    </div>
                  </template>
                  
                    <template v-slot:[`item.stat`]="{ item }">
                    
                      
                        {{item.response ? 'Responded' : 'Pending'}}
                    
                  </template>


                  <template v-slot:[`item.profile`]="{ item }">
                    <h2 class="table-avatar blue-link">
                      <a class="avatar"
                        ><img alt="" src="../assets/profiles/avatar-02.jpg"
                      /></a>
                      <a @click="setQueryDetail(item)">{{
                        `${item.employee.firstName} ${item.employee.lastName}`
                      }}</a>
                    </h2>
                  </template>
                  
                </v-data-table>
              </div>
            </div>
          </div>
          <!---/Datatable-->
        </div>
        <!-- /Page Content -->

        <!-- Add query Modal -->
        <v-dialog v-model="dialog" max-width="725px"
          >
            <div class="modal-content">
              <div class="modal-header mt-5">
                <h5 class="modal-title">Add Query</h5>
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
                    <select class="form-control" v-model="employeeId">
                      <option>Employee</option>
                      <option v-for="item in employees" :key="item.id" :value="item.id">{{item.firstName}}</option>
                    </select>
                  </div>
                  <div class="form-group">
                      <label>Date <span class="text-danger">*</span></label>
                      <div class="cal-icon">
                        <datepicker v-model="date" calendar-class input-class bootstrap-styling class="form-control datetimepicker" type="text" />
                      </div>
                  </div>
                  <!-- <div class="form-group">
                      <label>HR Manager <span class="text-danger">*</span></label>
                      <input class="form-control" v-model="hrManager" />
                  </div> -->
                   <div class="form-group">
                      <label>Form <span class="text-danger">*</span></label>
                      <select class="select form-control" v-model="form">
                        <option>-- Select --</option>
                        <option value="Verbal">Verbal</option>
                        <option value="Written">Written</option>
                    </select>
                  </div>
                  <div class="form-group">
                      <label>Query Type <span class="text-danger">*</span></label>
                      <select class="form-control" v-model="queryType">
                        <option disabled>-- Select Query Type --</option>
                        <option value="1st query">1st Query</option>
                        <option value="2nd query">2nd Query</option>
                        <option value="3rd query">3rd Query</option>
                      </select>
                  </div>
                  
                  <div class="form-group">
                      <label>Accusation <span class="text-danger">*</span></label>
                      <textarea class="form-control" v-model="accusation" rows="4"></textarea>
                  </div>
                  <div class="form-group">
                      <label>Remark <span class="text-danger">*</span></label>
                      <input class="form-control" v-model="remark" />
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
        <!-- /Add query Modal -->

        <!-- Response Modal -->

        <v-dialog v-model="dialogResponse" max-width="725px"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Response</h5>
                <button
                  type="button"
                  class="close"
                  @click="closeResponse"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form @submit.prevent="submitResponse">                  
                  <div class="form-group">
                      <label>Response <span class="text-danger">*</span></label>
                      <textarea class="form-control" v-model="response" rows="4"></textarea>
                  </div>
                  <div class="form-group">
                      <label>Remark <span class="text-danger">*</span></label>
                      <input class="form-control" v-model="remark" />
                  </div>
                  <div class="submit-section">
                    <button @click.prevent="submitResponse" class="btn btn-primary submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          
        </v-dialog>

        <!-- /Add Response Modal -->

        <!-- Query Details Modal -->

           <!-- <v-dialog v-model="dialogDetail" max-width="725px"
          >
            <div class="modal-content mt-5">
              <div class="modal-header">
                <h5 class="modal-title">Detail</h5>
                <button
                  type="button"
                  class="close"
                  @click="closeDetail"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form> 
                  <div class="form-group">
                      <label>Name <span class="text-danger">*</span></label>
                      <input class="form-control" readonly  v-model="query.employee.firstName"/>
                  </div>            
                  <div class="form-group">
                      <label>Date <span class="text-danger">*</span></label>
                      <div class="cal-icon">
                        <datepicker 
                          v-model="query.date" 
                          calendar-class 
                          input-class bootstrap-styling class="form-control datetimepicker" type="text" 
                          readonly />
                      </div>
                  </div>
                  <div class="form-group">
                      <label>Accusation <span class="text-danger">*</span></label>
                      <textarea class="form-control" v-model="query.accusation" rows="4" readonly></textarea>
                  </div>
                  <div class="form-group">
                      <label>Response <span class="text-danger">*</span></label>
                      <textarea class="form-control" v-model="query.response" rows="4" readonly></textarea>
                  </div>
                  <div class="form-group">
                      <label>Response By <span class="text-danger">*</span></label>
                      <input class="form-control" v-model="query.responseBy" readonly />
                  </div>
                </form>
              </div>
            </div>
          
        </v-dialog> -->

        <!-- /Query Details Modal -->

        <!-- Edit query Modal -->
        <v-dialog v-model="dialogEdit" max-width="725px"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Query</h5>
                <button
                  type="button"
                  class="close"
                  @click="closeEdit"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form @submit.prevent="updateQuery">
                  <div class="form-group">
                    <label>Employee <span class="text-danger">*</span></label>
                    <select class="form-control" v-model="query.employeeId">
                      <option>Select Employee</option>
                      <option v-for="item in employees" :key="item.id" :value="item.id">{{item.firstName}}</option>
                    </select>
                  </div>
                  <div class="form-group">
                      <label>Date <span class="text-danger">*</span></label>
                      <div class="cal-icon">
                        <datepicker v-model="query.date" calendar-class input-class bootstrap-styling class="form-control datetimepicker" type="text" />
                      </div>
                  </div>
                   <!-- <div class="form-group">
                      <label>HR Manager <span class="text-danger">*</span></label>
                      <input class="form-control" v-model="query.hrManager" />
                  </div> -->
                   <!-- <div class="form-group">
                      <label>Form <span class="text-danger">*</span></label>
                      <input class="form-control" v-model="disciplinary.form" />
                  </div> -->
                  <div class="form-group">
                      <label>Form <span class="text-danger">*</span></label>
                      <select class="select form-control" v-model="query.form">
                        <option>-- Select --</option>
                        <option value="Verbal">Verbal</option>
                        <option value="Written">Written</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>Query Type <span class="text-danger">*</span></label>
                      <select class="form-control" v-model="query.queryType">
                        <option disabled>-- Select Query Type --</option>
                        <option value="1st query">1st Query</option>
                        <option value="2nd query">2nd Query</option>
                        <option value="3rd query">3rd Query</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>accusation <span class="text-danger">*</span></label>
                      <textarea class="form-control" v-model="query.accusation" rows="4"></textarea>
                  </div>
                  <div class="form-group">
                      <label>Remark <span class="text-danger">*</span></label>
                      <input class="form-control" v-model="query.remark" />
                  </div>
                  <div class="submit-section">
                    <button @click.prevent="updateQuery" class="btn btn-primary submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          
        </v-dialog>
        <!-- /Edit query Modal -->

        <!-- Delete query Modal -->
        <v-dialog v-model="dialogDelete" max-width="725px"
          >
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete query</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div class="modal-btn delete-action">
                  <div class="row">
                    <div class="col-6">
                      <a
                        @click.prevent="deletequery"
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
        <!-- /Delete query Modal -->
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
      dialogResponse: false,
      dialogDelete: false,
      dialogDetail: false,
      headers: [
      // {
      //   text: 'Form',
      //   align: 'start',
      //   value: 'profile',
      // },
      { text: 'Employee', value: 'profile' },
      { text: 'Designation(Employee)', value: 'employee.designation.name' },
      { text: 'Form', value: 'form' },
      { text: 'Query Type', value: 'queryType' },
      { text: 'Status', value: 'stat' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
      name: "",
      form: "",
      employeeId: "",
      response: "",
      accusation: "",
      remark: "",
      date: "",
      query: {},
      queries : [],
      queryType: "",
      employee: {},
      loading: false,
      error: "",
      employees: [],
      submitted: false,
      //employee: authenticationService.currentOfficeValue,
      company: authenticationService.currentOfficeValue,
      user: authenticationService.currentUserValue
    };
  },

  validations: {
    name: { required },
    accusation: { required },
    form: { required },
    date: { required },
    //queryDate: { required },
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
    dialogResponse (val) {
      val || this.closeResponse()
    },
    dialogDetail (val) {
      val || this.closeDetail()
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
    // getFullName() {
    //   return `${this.user.employee.firstName} ${this.user.employee.lastName}`
    // },
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
    closeResponse() {
      this.dialogResponse = false
    },
    closeDetail() {
      this.dialogDetail = false
    },
    clearList() {
      this.employeeId = ""

    },
    setEditquery(model) {
      this.query = model;
      this.dialogEdit = true
    },
    setDeletequery(model) {
      this.query = model;
      this.dialogDelete = true;
    },
    setQueryResponse(model) {
      this.query = model;
      this.dialogResponse = true
    },
    setQueryDetail(model) {
      this.query = model;
      this.dialogDetail = true
    },
    getQueries() {
      //const user = this.user;
       console.log(`company`, this.company.id)
      employeeService.getQueries(this.company.id).then(
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
        .addQuery(
          this.date,
          this.form,
          this.queryType,
          this.accusation,
          this.remark,
          this.employeeId
        )
        .then(
          (id) => {
            employeeService.getQueries(this.company.id).then((w) => {
              this.query = w; console.log(w); this.close()
            });
          },
          (error) => {
            this.error = error;
            this.loading = false;
          }
        );
    },
    updateQuery () {
        this.submitted = true;

        this.loading = true;
        console.log(this.query)

        employeeService
          .updateQuery(
            this.query.id, 
            this.query.date,
            this.query.form, 
            this.query.queryType,
            this.query.accusation, 
            this.query.remark, 
            this.query.employeeId
          )
            .then(id => {
                  employeeService.getQueries(this.company.id)
                    .then(
                      o => {this.queries = o, console.log(o), this.closeEdit()}
                    )
              },
              error => {
                  this.error = error;
                  this.loading = false;
              }
            );
            
    },
    submitResponse() {
      this.submitted = true;

        this.loading = true;
        //console.log(this.query)
        //console.log(`this.user`, this.user)
        this.query.response = this.response;
        this.query.remark = this.remark;
        this.query.responseBy = `${this.user.employee.firstName} ${this.user.employee.lastName}`;
        employeeService
          .queryResponse(
            this.query.id, 
            this.query
          )
            .then(id => {
                  employeeService.getQueries(this.company.id)
                    .then(
                      o => {this.queries = o, console.log(o), this.closeResponse()}
                    )
              },
              error => {
                  this.error = error;
                  this.loading = false;
              }
            );
    },
    deletequery () {
      const id = this.query.id;
      // console.log(this.query)
        employeeService.removeQuery(id)
          .then(id => {
            employeeService.getQueries(this.company.id)
              .then(
                model => { this.queries = model
                // console.log(model)
                  this.closeDelete() },
                  error => { error = error }
              )
          })
    },
  },

  mounted() {
     this.getEmployees()
     this.getQueries()
    
    // Datatable
    //this.getEmployees(this.employee.id);
    //this.getEmployeequery(this.company.id);

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
  name: "query",
};
</script>