<template>
  <div class="Professional Excellence Settings">
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
                <h3 class="page-title">Professional Excellence Settings</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/index">Dashboard</router-link>
                  </li>
                  <li class="breadcrumb-item active">Professional Excellence Settings</li>
                </ul>
              </div>
              <div class="col-auto float-right ml-auto">
                <a
                  @click="openDialog"
                  class="btn add-btn"
                  ><i class="fa fa-plus"></i> Add Professional Excellence Settings</a
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
                  :items="professionalExcellenceSettings"
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
                      @click="setEditprofessionalExcellenceSettings(item)"
                      ><i class="fa fa-pencil m-r-5"></i> Edit</a
                    >
                    <a
                      class="dropdown-item"
                      @click="setDeleteprofessionalExcellenceSettings(item)"
                      ><i class="fa fa-trash-o m-r-5"></i> Delete</a
                    >
                  </div>
                </div>
              </template>
              
            </v-data-table>
              </div>
            </div>
          </div>
          <!---/Datatable-->
        </div>
        <!-- /Page Content -->

        <!-- Add Professional Excellence Settings Modal -->
        <v-dialog v-model="dialog" max-width="725px"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add Professional Excellence Settings</h5>
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
                      <input 
                      type="text" 
                      id="keyResult"
                      name="keyResult"
                      class="form-control" 
                      v-model.trim="$v.keyResult.$model"
                      :class="{ 'is-invalid': submitted && $v.keyResult.$error }"
                    />
                      <div
                        v-if="submitted && !$v.keyResult.required"
                        class="invalid-feedback"
                      >
                        Key Result is required
                      </div>
                  </div>
                  <div class="form-group">
                    <label>Key Performance Indicator <span class="text-danger">*</span></label>
                    <input 
                      type="text" 
                      id="keyPerformanceIndicator"
                      name="keyPerformanceIndicator"
                      class="form-control" 
                      v-model.trim="$v.keyPerformanceIndicator.$model"
                      :class="{ 'is-invalid': submitted && $v.keyPerformanceIndicator.$error }"
                    />
                      <div
                        v-if="submitted && !$v.keyPerformanceIndicator.required"
                        class="invalid-feedback"
                      >
                        Key Performance Indicator is required
                      </div>
                  </div>
                  <div class="form-group">
                    <label>Weight Age <span class="text-danger">*</span></label>
                    <input 
                      type="number" 
                      id="weightAge"
                      name="weightAge"
                      class="form-control" 
                      v-model.trim="$v.weightAge.$model"
                      :class="{ 'is-invalid': submitted && $v.weightAge.$error }"
                    />
                      <div
                        v-if="submitted && !$v.weightAge.required"
                        class="invalid-feedback"
                      >
                        Weight Age is required
                      </div>
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
        <!-- /Add Professional Excellence Settings Modal -->

        <!-- Edit Professional Excellence Settings Modal -->
        <v-dialog v-model="dialogEdit" max-width="725px"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Professional Excellence Settings</h5>
                <button
                  type="button"
                  class="close"
                  @click="closeEdit"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form @submit.prevent="updateProfessionalExcellenceSettings">
                  <div class="form-group">
                    <label>Key Result <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" v-model="professionalExcellenceSetting.keyResult">
                  </div>
                  <div class="form-group">
                    <label>Key Performance Indicator <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" v-model="professionalExcellenceSetting.keyPerformanceIndicator">
                  </div>
                  <div class="form-group">
                    <label>Weight Age <span class="text-danger">*</span></label>
                    <input type="number" class="form-control" v-model="professionalExcellenceSetting.weightAge">
                  </div>                  
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          
        </v-dialog>
        <!-- /Edit Professional Excellence Settings Modal -->

        <!-- Delete Professional Excellence Settings Modal -->
        <v-dialog v-model="dialogDelete" max-width="725px"
          >
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete Professional Excellence Settings</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div class="modal-btn delete-action">
                  <div class="row">
                    <div class="col-6">
                      <a
                        @click.prevent="deleteprofessionalExcellenceSettings"
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
        <!-- /Delete Professional Excellence Settings Modal -->
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
        value: 'keyResult',
      },
      { text: 'Key Performance Indicator', value: 'keyPerformanceIndicator' },
      { text: 'Weight Age', value: 'weightage' },
      //{ text: 'Notice Date', value: 'noticeDate' },
      //{ text: 'Professional Excellence Settings Date', value: 'Professional Excellence SettingsDate' },
      { text: 'Action', value: 'actions', sortable: false },
    ],
      keyResult: "",
      keyPerformanceIndicator: "",
      weightAge: "",
      professionalExcellenceSetting: {},
      professionalExcellenceSettings: [],
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
    keyResult: { required },
    keyPerformanceIndicator: { required },
    weightAge: { required },
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
    getprofessionalExcellenceSettings() {
      const companyId = this.company.id;
      performanceService.getprofessionalExcellenceSettings(companyId).then(
        (model) => {
          console.log(model)
          this.professionalExcellenceSettings = model;
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
    setEditprofessionalExcellenceSettings(model) {
      this.keyprofessionalExcellenceSettings = model;
      this.dialogEdit = true
    },
    setDeleteprofessionalExcellenceSettings(model) {
      this.professionalExcellenceSettings = model;
      this.dialogDelete = true;
    },
    getProfessionalExcellenceSettings () {
      performanceService.getProfessionalExcellenceSettings(this.company.id).then((w) => {
              this.professionalExcellenceSettings = w;
              console.log(`w`, w)
            },
            (error) => {
          error = error;
        })
    },
    onSubmit() {
      this.submitted = true;
      this.loading = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      performanceService
        .AddProfessionalExcellenceSettings(
          this.company.id,
          this.keyResult, 
          this.keyPerformanceIndicator, 
          this.weightAge
        )
        .then(
          (id) => {
            performanceService.getProfessionalExcellenceSettings(this.company.id).then((w) => {
              this.professionalExcellenceSettings = w;
              this.close();
            });
          },
          (error) => {
            this.error = error;
            this.loading = false;
          }
        );
    },
    UpdateprofessionalExcellenceSettings () {
        this.submitted = true;
        this.loading = true;
        
        performanceService.UpdateprofessionalExcellenceSettings(
              this.professionalExcellenceSettings.id,
              this.professionalExcellenceSettings.companyId, 
              this.professionalExcellenceSettings.keyResult, 
              this.professionalExcellenceSettings.keyPerformanceIndicator, 
              this.professionalExcellenceSettings.weightAge
            )
                .then(id => {
                      performanceService.getprofessionalExcellenceSettings(this.company.id)
                        .then(
                         o => {this.professionalExcellenceSettings = o, console.log(o), this.closeEdit()}
                        )
          },
                    error => {
                        this.error = error;
                        this.loading = false;
                    }
                );
            
    },
    deleteprofessionalExcellenceSettings () {
      const id = this.professionalExcellenceSettings.id;
      
        performanceService.removeprofessionalExcellenceSettings(id)
          .then(id => {
            performanceService.getprofessionalExcellenceSettings(this.company.id)
                      .then(
                        model => { this.professionalExcellenceSettings = model
                        console.log(model)
                        this.closeDelete() },
                        error => { error = error }
                      )
          })
    },
  },

  mounted() {
     this.getProfessionalExcellenceSettings()
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
  name: "professionalexcellencesettings",
};
</script>