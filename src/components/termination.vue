<template>
    <div class="termination">
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
                                <h3 class="page-title">Termination</h3>
                                <ul class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <router-link to="/index">Dashboard</router-link>

                                    </li>

                                    <li class="breadcrumb-item active">Termination</li>
                                </ul>
                            </div>
                            <div class="col-auto float-right ml-auto">
                                <a href="#" class="btn add-btn" data-toggle="modal" data-target="#add_termination"><i
                                        class="fa fa-plus"></i> Add Termination</a>
                            </div>
                        </div>
                    </div>
                    <!-- /Page Header -->
                    <!----Datatable-->
                    <div class="row">
                        <div class="col-md-12">
                            <div class="table-responsive">
                                <table class="table table-striped custom-table mb-0 datatable">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Terminated Employee </th>
                                            <th>Department</th>
                                            <th>Termination Type </th>
                                            <th>Termination Date </th>
                                            <th>Reason</th>
                                            <th>Notice Date </th>
                                            <th class="text-right">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>
                                                <h2 class="table-avatar blue-link">
                                                    <router-link to="/profile" class="avatar"><img alt=""
                                                            src="../assets/profiles/avatar-02.jpg"></router-link>
                                                    <router-link to="/profile">John Doe</router-link>
                                                </h2>
                                            </td>
                                            <td>Web Development</td>
                                            <td>Misconduct</td>
                                            <td>28 Feb 2019</td>
                                            <td>Lorem Ipsum Dollar</td>
                                            <td>28 Feb 2019</td>
                                            <td class="text-right">
                                                <div class="dropdown dropdown-action">
                                                    <a href="#" class="action-icon dropdown-toggle"
                                                        data-toggle="dropdown" aria-expanded="false"><i
                                                            class="material-icons">more_vert</i></a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <a class="dropdown-item" @click="setTermination(item)" data-toggle="modal"
                                                            data-target="#edit_termination"><i
                                                                class="fa fa-pencil m-r-5"></i>
                                                            Edit</a>
                                                        <a class="dropdown-item" @click="setTermination(item)" data-toggle="modal"
                                                            data-target="#delete_termination"><i
                                                                class="fa fa-trash-o m-r-5"></i>
                                                            Delete</a>
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
                </div>
                <!-- /Page Content -->

                <!-- Add Termination Modal -->
                <div id="add_termination" class="modal custom-modal fade" role="dialog">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Add Termination</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form @submit.prevent="onSubmit">
                                    <div class="form-group">
                                      <label>Terminated Employee <span class="text-danger">*</span></label>
                                      <select class="form-control" v-model="terminatedEmployeeId">
                                        <option>Select Employee</option>
                                        <option v-for="item in employees" :key="item.id" :value="item.id">{{item.firstName}}</option>
                                      </select>
                                    </div>
                                    <div class="form-group">
                                        <label>Termination Type <span class="text-danger">*</span></label>
                                        <div class="add-group-btn">
                                            <select class="form-control" v-model="terminationTypeId">
                                                <option>Select Termination Type</option>
                                                <option v-for="item in terminationTypes" :key="item.id" :value="item.id">{{item.name}}</option>
                                                <!-- <option>Misconduct</option>
                                                <option>Others</option> -->
                                            </select>

                                            <a class="btn btn-primary"><i
                                                    class="fa fa-plus"></i> Add</a>
                                        </div>
                                    </div>
                                    <!-- <div class="form-group">
                                    <label>Marital status <span class="text-danger">*</span></label>
                                    <select class="form-control"  v-model="maritalStatus">
                                      <option>-</option>
                                      <option>Single</option>
                                      <option>Married</option>
                                    </select>
                                    </div> -->
                                    <div class="form-group">
                                      <label>Termination Date <span class="text-danger">*</span></label>
                                      <div class="cal-icon">
                                        <datepicker v-model="terminationDate" bootstrap-styling class="form-control datetimepicker" type="date" />
                                      </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Reason <span class="text-danger">*</span></label>
                                        <textarea class="form-control" id="reason" name="reason" v-model="reason" rows="4"></textarea>
                                    </div>
                                    <div class="form-group">
                                      <label>Notice Date <span class="text-danger">*</span></label>
                                      <div class="cal-icon">
                                        <datepicker v-model="noticeDate" bootstrap-styling class="form-control datetimepicker" type="date" />
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
                <!-- /Add Termination Modal -->

                <!-- Edit Termination Modal -->
                <div id="edit_termination" class="modal custom-modal fade" role="dialog">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Edit Termination</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <!-- <div class="form-group">
                                        <label>Terminated Employee <span class="text-danger">*</span></label>
                                        <input class="form-control" type="text" v-model="termination.employeeId" id="" />
                                    </div> -->
                                    <div class="form-group">
                                      <label>Terminated Employee <span class="text-danger">*</span></label>
                                      <select class="form-control" v-model="terminatedEmployeeId">
                                        <option>Select Employee</option>
                                        <option v-for="item in employees" :key="item.id" :value="item.id">{{item.firstName}}</option>
                                      </select>
                                    </div>
                                    <!-- <div class="form-group">
                                        <label>Termination Type <span class="text-danger">*</span></label>
                                        <div class="add-group-btn">
                                            <select class="select">
                                                <option>Misconduct</option>
                                                <option>Others</option>
                                            </select>
                                            <a class="btn btn-primary" href="javascript:void(0);"><i
                                                    class="fa fa-plus"></i> Add</a>
                                        </div>
                                    </div> -->
                                    <div class="form-group">
                                        <label>Termination Type <span class="text-danger">*</span></label>
                                        <div class="add-group-btn">
                                            <select class="form-control" v-model="terminationTypeId">
                                                <option>Select Termination Type</option>
                                                <option v-for="item in terminationTypes" :key="item.id" :value="item.id">{{item.name}}</option>
                                                <!-- <option>Misconduct</option>
                                                <option>Others</option> -->
                                            </select>

                                            <a class="btn btn-primary"><i
                                                    class="fa fa-plus"></i> Add</a>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label>Termination Date <span class="text-danger">*</span></label>
                                        <div class="cal-icon">
                                            <input type="text" class="form-control datetimepicker" value="28/02/2019">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Reason <span class="text-danger">*</span></label>
                                        <textarea class="form-control" rows="4"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label>Notice Date <span class="text-danger">*</span></label>
                                        <div class="cal-icon">
                                            <input type="text" class="form-control datetimepicker" value="28/02/2019">
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
                <!-- /Edit Termination Modal -->

                <!-- Delete Termination Modal -->
                <div class="modal custom-modal fade" id="delete_termination" role="dialog">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-body">
                                <div class="form-header">
                                    <h3>Delete Termination</h3>
                                    <p>Are you sure want to delete?</p>
                                </div>
                                <div class="modal-btn delete-action">
                                    <div class="row">
                                        <div class="col-6">
                                            <a href="javascript:void(0);"
                                                class="btn btn-primary continue-btn">Delete</a>
                                        </div>
                                        <div class="col-6">
                                            <a href="javascript:void(0);" data-dismiss="modal"
                                                class="btn btn-primary cancel-btn">Cancel</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Delete Termination Modal -->

            </div>
            <!-- /Page Wrapper -->
        </div>
    </div>
</template>
<script>
    import LayoutHeader from '@/components/layouts/Header.vue'
    import LayoutSidebar from '@/components/layouts/Sidebar.vue'
    import Datepicker from 'vuejs-datepicker'
    import { authenticationService } from "@/services/authenticationService"
    import {organizationService} from '@/services/organizationService'
    import { skillsService } from "@/services/skillsService";
    import { employeeService } from '@/services/employeeService'

    export default {
        components: {
            LayoutHeader,
            LayoutSidebar,
            Datepicker
        },
        data() {
          return {
            terminatedEmployeeId: "",
            terminatedEmployees: [],
            reason: "",
            employees: [],
            employee: {},
            terminations: [],
            terminationDate: "",
            terminationType: {},
            terminationTypeId: "",
            terminationTypes: [],
            noticeDate: "",
            company: authenticationService.currentOfficeValue,
            submitted: false,
            loading: false
          }
        },
        methods: {
          // setTerminationType (item) {
          //   this.terminationType = item;
          // },
          setTermination (item) {
            this.termination = item;
          },
          getEmployees () {
            const companyId = this.company.id;
            console.log('this.company.id', this.company.id)
            employeeService.getEmployees(companyId)
              .then(
                model => { this.employees = model
                //console.log(model) 
                },
                error => { error = error }
              )
          },
          getTerminationTypes () {
            skillsService.getTerminationTypes()
                .then(
                  model => { this.terminationTypes = model
                  //console.log(model) 
                  },
                  error => { error = error }
                )
          },
          getEmployeeTermination () {
            console.log('this.terminatedEmployeeId', this.terminatedEmployeeId)
            employeeService.getEmployeeTermination(this.terminatedEmployeeId)
              .then(
                model => { this.terminatedEmployees = model
                console.log(model) },
                error => { error = error }
              )
          },
          onSubmit () {
            this.submitted = true;

            this.loading = true;

            employeeService.addEmployeeTermination(this.terminationDate, this.reason, this.noticeDate, this.terminationTypeId, this.terminatedEmployeeId)
                    .then(id => {
                      console.log('this.terminatedEmployeeId', this.terminatedEmployeeId)
                          employeeService.getEmployeeTermination(this.terminatedEmployeeId)
                            .then(
                              o => {this.terminations = o, console.log(o)}
                            )
              },
                        error => {
                            this.error = error;
                            this.loading = false;
                        }
                    );
            
          },
          update () {
            this.submitted = true;

            this.loading = true;

            employeeService.updateEmployeeTermination(this.termination.terminationDate, this.termination.reason, this.termination.noticeDate, this.termination.terminationTypeId, this.termination.employeeId)
                    .then(id => {
                          employeeService.getEmployeeTermination(this.terminatedEmployeeId)
                            .then(
                              o => {this.terminations = o, console.log(o)}
                            )
              },
                        error => {
                            this.error = error;
                            this.loading = false;
                        }
                    );
            
          },
          deleteEmployeeTermination () {
            const id = this.termination.id;
              employeeService.removeEmployeeTermination(id)
                .then(id => {
                  organizationService.getDesignations()
                    .then(
                      o => {this.designations = o}
                    )
                })
          },
        },
        mounted() {
          this.getEmployeeTermination()
          this.getEmployees()
          this.getTerminationTypes()
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
        name: 'Termination'
    }
</script>