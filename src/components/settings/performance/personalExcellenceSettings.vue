<template>
  <div class="Personal Excellence Settings">
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
                <h3 class="page-title">Personal Excellence Settings</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/index">Dashboard</router-link>
                  </li>
                  <li class="breadcrumb-item active">Personal Excellence Settings</li>
                </ul>
              </div>
              <div class="col-auto float-right ml-auto">
                <a
                  @click="openDialog"
                  class="btn add-btn"
                  ><i class="fa fa-plus"></i> Add Personal Excellence Settings</a
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
                  :items="PersonalExcellenceSettings"
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
                      @click="setEditPersonalExcellenceSettings(item)"
                      ><i class="fa fa-pencil m-r-5"></i> Edit</a
                    >
                    <a
                      class="dropdown-item"
                      @click="setDeletePersonalExcellenceSettings(item)"
                      ><i class="fa fa-trash-o m-r-5"></i> Delete</a
                    >
                  </div>
                </div>
              </template>
              <template v-slot:[`item.profile`]="{ item }">
                <h2 class="table-avatar blue-link">
                  <router-link to="/profile" class="avatar"
                    ><img alt="" src="~@/assets/profiles/avatar-02.jpg"
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

        <!-- Add Personal Excellence Settings Modal -->
        <v-dialog v-model="dialog" max-width="725px"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add Personal Excellence Settings</h5>
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
                    <label>Key Result <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" v-model="keyResult">
                  </div>
                  <div class="form-group">
                    <label>Key Performance Indicator <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" v-model="keyPerformanceIndicator">
                  </div>
                  <div class="form-group">
                    <label>Weight Age <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" v-model="weightAge">
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
        <!-- /Add Personal Excellence Settings Modal -->

        <!-- Edit Personal Excellence Settings Modal -->
        <v-dialog v-model="dialogEdit" max-width="725px"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Personal Excellence Settings</h5>
                <button
                  type="button"
                  class="close"
                  @click="closeEdit"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form @submit.prevent="updatePersonalExcellenceSettings">
                  <div class="form-group">
                    <label>Key Result <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" v-model="PersonalExcellenceSetting.keyResult">
                  </div>
                  <div class="form-group">
                    <label>Key Performance Indicator <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" v-model="PersonalExcellenceSetting.keyPerformanceIndicator">
                  </div>
                  <div class="form-group">
                    <label>Weight Age <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" v-model="PersonalExcellenceSetting.weightAge">
                  </div>                  
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          
        </v-dialog>
        <!-- /Edit Personal Excellence Settings Modal -->

        <!-- Delete Personal Excellence Settings Modal -->
        <v-dialog v-model="dialogDelete" max-width="725px"
          >
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete Personal Excellence Settings</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div class="modal-btn delete-action">
                  <div class="row">
                    <div class="col-6">
                      <a
                        @click.prevent="deletePersonalExcellenceSettings"
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
        <!-- /Delete Personal Excellence Settings Modal -->
      </div>
      <!-- /Page Wrapper -->
    </div>
  </div>
</template>
<script>
import LayoutHeader from "@/components/layouts/Header.vue"
import LayoutSidebar from "@/components/layouts/Sidebar.vue"
import { required, sameAs } from "vuelidate/lib/validators"
//import { employeeService } from "@/services/employeeService.js"
import { performanceService } from "@/services/performanceService.js"
//import Datepicker from 'vuejs-datepicker'
import { authenticationService } from "@/services/authenticationService";

export default {
  components: {
    LayoutHeader,
    LayoutSidebar,
    //Datepicker
  },

  data() {
    return {
      dialog: false,
      dialogEdit: false,
      dialogDelete: false,
      headers: [
      {
        text: 'Key Result',
        align: 'start',
        value: 'profile',
      },
      { text: 'Key Performance Indicator', value: 'keyPerformanceIndicator' },
      { text: 'Weight Age', value: 'weightAge' },
      //{ text: 'Notice Date', value: 'noticeDate' },
      //{ text: 'Personal Excellence Settings Date', value: 'Personal Excellence SettingsDate' },
      { text: 'Action', value: 'actions', sortable: false },
    ],
      keyResult: "",
      keyPerformanceIndicator: "",
      weightAge: "",
      PersonalExcellenceSetting: {},
      PersonalExcellenceSettings: [],
      //employee: [],
      loading: false,
      error: "",
      //employees: [],
      submitted: false,
      employee: authenticationService.currentUserValue,
      company: authenticationService.currentOfficeValue,
    };
  },

  validations: {
    //name: { required },
    //reason: { required },
    //noticeDate: { required },
    //Personal Excellence SettingsDate: { required },
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
    getPersonalExcellenceSettings() {
      const companyId = this.company.id;
      performanceService.getPersonalExcellenceSettings(companyId).then(
        (model) => {
          console.log(model)
          this.PersonalExcellenceSettings = model;
        },
        (error) => {
          error = error;
        }
      );
    },

    clearModel() {
      this.keyResult= "",
      this.keyPerformanceIndicator = "",
      this.weightAge = ""
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
    setEditPersonalExcellenceSettings(model) {
      this.keyPersonalExcellenceSettings = model;
      this.dialogEdit = true
    },
    setDeletePersonalExcellenceSettings(model) {
      this.PersonalExcellenceSettings = model;
      this.dialogDelete = true;
    },

    onSubmit() {
      this.submitted = true;
      this.loading = true;
      performanceService
        .AddPersonalExcellenceSettings(
          
          this.keyResult, 
          this.keyPerformanceIndicator, 
          this.weightAge
        )
        .then(
          (id) => {
            performanceService.getPersonalExcellenceSettings(this.employee.id).then((w) => {
              this.PersonalExcellenceSettings = w;
              this.close();
            });
          },
          (error) => {
            this.error = error;
            this.loading = false;
          }
        );
    },
    UpdatePersonalExcellenceSettings () {
        this.submitted = true;
        this.loading = true;
        
        performanceService.UpdatePersonalExcellenceSettings(
              this.PersonalExcellenceSettings.id, 
              this.PersonalExcellenceSettings.keyResult, 
              this.PersonalExcellenceSettings.keyPerformanceIndicator, 
              this.PersonalExcellenceSettings.weightAge
            )
                .then(id => {
                      performanceService.getPersonalExcellenceSettings(this.company.id)
                        .then(
                         o => {this.PersonalExcellenceSettings = o, console.log(o), this.closeEdit()}
                        )
          },
                    error => {
                        this.error = error;
                        this.loading = false;
                    }
                );
            
    },
    deletePersonalExcellenceSettings () {
      const id = this.PersonalExcellenceSettings.id;
      
        performanceService.removePersonalExcellenceSettings(id)
          .then(id => {
            performanceService.getPersonalExcellenceSettings(this.company.id)
                      .then(
                        model => { this.PersonalExcellenceSettings = model
                        console.log(model)
                        this.closeDelete() },
                        error => { error = error }
                      )
          })
    },
  },

  mounted() {

     this.getEmployees()
     this.getPersonalExcellenceSettings()
    // Datatable

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
  name: "Personalexcellencesettings",
};
</script>