<template>
  <div class="performanceindicator">
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
                <h3 class="page-title">Performance Indicator</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/index">Dashboard</router-link>
                  </li>
                  <li class="breadcrumb-item active">Performance</li>
                </ul>
              </div>
              <div class="col-auto float-right ml-auto">
                <a
                  class="btn add-btn"
                  @click="openDialog"
                ><i class="fa fa-plus"></i> Add New</a>
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
                  :items="performanceIndicators"
                  sort-by="firstName"
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
                          @click="setEditPerformanceIndicator(item)"
                          ><i class="fa fa-pencil m-r-5"></i> Edit</a
                        >
                        <a
                          class="dropdown-item"
                          @click="setDeletePerformanceIndicator(item)"
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

        <!-- Add Performance Indicator Modal -->
        <v-dialog v-model="dialog" max-width="725px">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Set New Indicator</h5>
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
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label>Designation <span class="text-danger">*</span></label>
                        <select class="form-control" v-model="designationId">
                          <option>Select Designation</option>
                          <option v-for="item in designations" :key="item.id" :value="item.id">{{item.name}}</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label>Added By <span class="text-danger">*</span></label>
                        <select class="form-control" v-model="employeeId">
                          <option>Select Employee</option>
                          <option v-for="item in employees" :key="item.id" :value="item.id">{{item.firstName}}</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <h4 class="modal-sub-title">Technical</h4>

                      <!-- <div class="form-group">
                        <label>Customer Experience <span class="text-danger">*</span></label>
                        <select class="form-control" v-model="employeeId">
                          <option>Select Employee</option>
                          <option v-for="item in employees" :key="item.id" :value="item.id">{{item.firstName}}</option>
                        </select>
                      </div> -->

                      <div class="form-group">
                        <label class="col-form-label">Customer Experience</label>
                        <select class="select form-control" v-model="tech_CE">
                          <option disabled value="">None</option>
                          <option value="beginner">Beginner</option>
                          <option value="intermediate">Intermediate</option>
                          <option value="advanced">Advanced</option>
                          <option value="expert">Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Marketing</label>
                        <select class="select form-control" v-model="tech_Marketing">
                          <option disabled value="">None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Management</label>
                        <select class="select form-control" v-model="tech_Management">
                          <option disabled value="">None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Administration</label>
                        <select class="select form-control" v-model="tech_Administration">
                          <option disabled value="">None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Presentation Skill</label>
                        <select class="select form-control" v-model="tech_Presentation">
                          <option disabled value="">None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Quality Of Work</label>
                        <select class="select form-control" v-model="tech_QOW">
                          <option disabled value="">None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Efficiency</label>
                        <select class="select form-control" v-model="tech_Efficiency">
                          <option disabled value="">None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <h4 class="modal-sub-title">Organizational</h4>
                      <div class="form-group">
                        <label class="col-form-label">Integrity</label>
                        <select class="select form-control" v-model="org_Integrity">
                          <option disabled value="">None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Professionalism</label>
                        <select class="select form-control" v-model="org_Professionalism">
                          <option disabled value="">None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Team Work</label>
                        <select class="select form-control" v-model="org_Teamwork">
                          <option disabled value="">None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Critical Thinking</label>
                        <select class="select form-control" v-model="org_CriticalThinking">
                          <option disabled value="">None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Conflict Management</label>
                        <select class="select form-control" v-model="org_Conflict">
                          <option disabled value="">None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Attendance</label>
                        <select class="select form-control" v-model="org_Attendance">
                          <option disabled value="">None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Ability To Meet Deadline</label>
                        <select class="select form-control" v-model="org_ATMD">
                          <option disabled value="">None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Status</label>
                        <select class="select form-control" v-model="status">
                          <option>Active</option>
                          <option>Inactive</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="submit-section">
                    <button @click.prevent="onSubmit" class="btn btn-primary submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
        </v-dialog>
        <!-- /Add Performance Indicator Modal -->

        <!-- Edit Performance Indicator Modal -->
        <div id="edit_indicator" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Performance Indicator</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Designation</label>
                        <select class="select">
                          <option>Select Designation</option>
                          <option selected>Web Designer</option>
                          <option>IOS Developer</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <h4 class="modal-sub-title">Technical</h4>
                      <div class="form-group">
                        <label class="col-form-label">Customer Experience</label>
                        <select class="select">
                          <option>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option selected>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Marketing</label>
                        <select class="select">
                          <option>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option selected>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Management</label>
                        <select class="select">
                          <option>None</option>
                          <option>Beginner</option>
                          <option selected>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Administration</label>
                        <select class="select">
                          <option>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option selected>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Presentation Skill</label>
                        <select class="select">
                          <option>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Quality Of Work</label>
                        <select class="select">
                          <option>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Efficiency</label>
                        <select class="select">
                          <option>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <h4 class="modal-sub-title">Organizational</h4>
                      <div class="form-group">
                        <label class="col-form-label">Integrity</label>
                        <select class="select">
                          <option>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Professionalism</label>
                        <select class="select">
                          <option>None</option>
                          <option>Beginner</option>
                          <option selected>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Team Work</label>
                        <select class="select">
                          <option>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Critical Thinking</label>
                        <select class="select">
                          <option>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option selected>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Conflict Management</label>
                        <select class="select">
                          <option>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option selected>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Attendance</label>
                        <select class="select">
                          <option>None</option>
                          <option>Beginner</option>
                          <option selected>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Ability To Meet Deadline</label>
                        <select class="select">
                          <option>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option selected>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Status</label>
                        <select class="select">
                          <option>Active</option>
                          <option>Inactive</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /Edit Performance Indicator Modal -->

        <!-- Delete Performance Indicator Modal -->
        <div class="modal custom-modal fade" id="delete_indicator" role="dialog">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete Performance Indicator List</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div class="modal-btn delete-action">
                  <div class="row">
                    <div class="col-6">
                      <a href="javascript:void(0);" class="btn btn-primary continue-btn">Delete</a>
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
        <!-- /Delete Performance Indicator Modal -->

      </div>
      <!-- /Page Wrapper -->
    </div>
  </div>
</template>
<script>
  import LayoutHeader from '@/components/layouts/Header.vue'
  import LayoutSidebar from '@/components/layouts/Sidebar.vue'
  import { organizationService } from '@/services/organizationService'
  import { employeeService } from "@/services/employeeService.js"
  import { performanceService } from "@/services/performanceService.js"
  import { authenticationService } from '@/services/authenticationService';
  
  export default {
    components: {
      LayoutHeader,
      LayoutSidebar,
    },
    data () {
        return {
          dialog: false,
          dialogEdit: false,
          dialogDelete: false,
          headers: [
            { text: 'Designation', value: 'designation.name' },
            { text: 'Department', value: 'destination.' },
            { text: 'Added By', value: 'payslip', sortable: false },
            { text: 'Create At', value: 'netSalary' },
            { text: 'Status', value: 'payslip', sortable: false },
            { text: 'Actions', value: 'actions', sortable: false },
          ],
          designations: [],
          performanceIndicator: {},
          performanceIndicators: [],
          employeeId: "",
          employees: [],
          designationId: "",
          addedBy: "",
          tech_CE: "",
          tech_Marketing: "",
          tech_Management: "",
          tech_Administration: "",
          tech_Presentation: "",
          tech_QOW: "",
          tech_Efficiency: "",
          org_Integrity: "",
          org_Professionalism: "",
          org_CriticalThinking: "",
          org_Teamwork: "",
          org_Conflict: "",
          org_Attendance: "",
          org_ATMD: "",
          status: "",
          
          company: authenticationService.currentOfficeValue,
        }
    },
    methods: {
      openDialog(){
      this.dialog = true
      },
      close() {
        this.dialog = false;
        //this.clearModel();
      },
      closeEdit() {
        this.dialogEdit = false
      },
      closeDelete() {
        this.dialogDelete = false
      },
      setEditPerformanceIndicator(model) {
        this.performanceIndicator = model;
        this.dialogEdit = true
      },
      setDeletePerformanceIndicator(model) {
        this.performanceIndicator = model;
        this.dialogDelete = true;
      },
      GetDesignations(){
          organizationService.getDesignations()
          .then(
              model => { 
                  this.designations = model},
              error => { this.error = error }
          )
      },
      getEmployees () {
        const companyId = this.company.id;
        console.log('this.company.id', this.company.id)
        employeeService.getEmployees(companyId)
          .then(
            model => { this.employees = model
            console.log(model) 
            },
            error => { error = error }
          )
     },
     getDesignationPerformances () {
         const companyId = this.company.id;
         performanceService.getDesignationPerformances(companyId)
          .then(
            (model) => {
              this.performanceIndicators = model;
              console.log(`model`, model)
            },
            error => { error = error }
          )
     },
     onSubmit() {
       this.submitted = true;
       this.loading = true;

       performanceService
        .addDesignationPerformance(
          this.tech_CE, 
          this.tech_Marketing, 
          this.tech_Management, 
          this.tech_Administration, 
          this.tech_Presentation, 
          this.tech_QOW, 
          this.tech_Efficiency,
          this.org_Integrity,
          this.org_Professionalism,
          this.org_Teamwork,
          this.org_CriticalThinking,
          this.org_Conflict,
          this.org_Attendance,
          this.org_ATMD,
          this.designationId,
          this.addedBy
        )
        .then(
          (id) => {
            performanceService.getDesignationPerformances(this.company.id).then((u) => {
              this.performanceIndicators = u;
              console.log(`u`, u)
              this.close();
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

       performanceService
        .updateDesignationPerformance(
          this.performanceIndicator.tech_CE, 
          this.performanceIndicator.tech_Marketing, 
          this.performanceIndicator.tech_Management, 
          this.performanceIndicator.tech_Administration, 
          this.performanceIndicator.tech_Presentation, 
          this.performanceIndicator.tech_QOW, 
          this.performanceIndicator.tech_Efficiency,
          this.performanceIndicator.org_Integrity,
          this.performanceIndicator.org_Professionalism,
          this.performanceIndicator.org_Teamwork,
          this.performanceIndicator.org_CriticalThinking,
          this.performanceIndicator.org_Conflict,
          this.performanceIndicator.org_Attendance,
          this.performanceIndicator.org_ATMD,
          this.performanceIndicator.designationId,
          this.performanceIndicator.addedBy
        )
        .then(
          (id) => {
            performanceService.getDesignationPerformances(this.company.id).then((u) => {
              this.performanceIndicators = u;
              console.log(`u`, u)
              this.closeEdit();
            });
          },
          (error) => {
            this.error = error;
            this.loading = false;
          }
        );

     },
     deletePerformanceIndicator () {
      const id = this.performanceIndicator.id;
      // console.log(this.performanceIndicator);
        performanceService.removeDesignationPerformance(id)
          .then(id => {
            performanceService.getDesignationPerformances(this.company.id)
              .then(
                model => { this.performanceIndicators = model
                console.log(model)
                this.closeDelete() },
                error => { error = error }
              )
          })
    },
    },
    mounted() {
      this.GetDesignations()
      this.getEmployees()
      this.getDesignationPerformances()
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
    name: 'performanceindicator'
  }
</script>