<template>
    <div class="employeeslist">
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
                                <h3 class="page-title">Employee</h3>
                                <ul class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <router-link to="/index">Dashboard</router-link>
                                    </li>
                                    <li class="breadcrumb-item active">Employee</li>
                                </ul>
                            </div>
                            <div class="col-auto float-right ml-auto">
                                <a href="#" class="btn add-btn" data-toggle="modal" data-target="#add_employee"><i
                                        class="fa fa-plus"></i> Add Employee</a>
                                <div class="view-icons">
                                    <router-link to="/employees" class="grid-view btn btn-link"><i class="fa fa-th"></i>
                                    </router-link>
                                    <router-link to="/employeeslist" class="grid-view btn btn-link active"><i
                                            class="fa fa-bars"></i></router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Page Header -->

                    <!-- Search Filter -->
                    <div class="row filter-row">
                        <div class="col-sm-6 col-md-3">
                            <div class="form-group form-focus">
                                <input type="text" class="form-control floating" style="height: 55px !important;">
                                <label class="focus-label">Employee ID</label>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <div class="form-group form-focus">
                                <input type="text" class="form-control floating" style="height: 55px !important;">
                                <label class="focus-label">Employee Name</label>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <div class="form-group form-focus select-focus">
                                 <select class="form-control" style="height: 55px !important;" v-model="designationId">
                                                    <option>Select Designation</option>
                                                    <option v-for="item in designations" :key="item.id" :value="parseInt(item.id)">{{item.name}}</option>
                                                </select>
                                <label class="focus-label">Designation</label>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <a href="#" class="btn btn-success btn-block"> Search </a>
                        </div>
                    </div>
                    <!-- /Search Filter -->
                    <!----Datatable-->
                    <div class="row">
                        <div class="col-md-12">
                            <div class="table-responsive">
                                <table class="table table-striped custom-table datatable">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Employee ID</th>
                                            <th>Email</th>
                                            <th>Mobile</th>
                                            <th class="text-nowrap">Join Date</th>
                                            <th>Role</th>
                                            <th class="text-right no-sort">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="model in employees" v-bind:key="model.id">
                                            <td>
                                                <h2 class="table-avatar">
                                                    <router-link :to="{name: 'employeedetail', params: {id: model.id}}" class="avatar"><img alt=""
                                                            src="~@/assets/profiles/avatar-02.jpg"></router-link>
                                                    <router-link :to="{name: 'employeedetail', params: {id: model.id}}">{{model.firstName + ' ' + model.lastName}} <span>{{model.designation.name}}</span>
                                                    </router-link>
                                                </h2>
                                            </td>
                                            <td>{{'EMP-' + model.id}}</td>
                                            <td>{{model.email}}</td>
                                            <td>{{model.phone}}</td>
                                            <td>{{model.createdAt}}</td>
                                            <td>{{model.gender}}</td>
                                            <td class="text-right">
                                                <div class="dropdown dropdown-action">
                                                    <a href="#" class="action-icon dropdown-toggle"
                                                        data-toggle="dropdown" aria-expanded="false"><i
                                                            class="material-icons">more_vert</i></a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <a class="dropdown-item" @click="setEmployee(model)" data-toggle="modal"
                                                            data-target="#edit_employee"><i
                                                                class="fa fa-pencil m-r-5"></i> Edit</a>
                                                        <a class="dropdown-item" @click="setEmployee(model)" data-toggle="modal"
                                                            data-target="#delete_employee"><i
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

                <!-- Add Employee Modal -->
                <div id="add_employee" class="modal custom-modal fade" role="dialog">
                    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Add Employee</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
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
                                                <label class="col-form-label">First Name <span
                                                        class="text-danger">*</span></label>
                                                <input type="text" v-model.trim="$v.firstName.$model" id="name" name="name" class="form-control" :class="{ 'is-invalid': submitted && $v.firstName.$error }" />
                                                <div v-if="submitted && !$v.firstName.required" class="invalid-feedback">First Name is required</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label class="col-form-label">Last Name</label>
                                                <input type="text" v-model.trim="$v.lastName.$model" id="name" name="name" class="form-control" :class="{ 'is-invalid': submitted && $v.lastName.$error }" />
                                                <div v-if="submitted && !$v.lastName.required" class="invalid-feedback">First Name is required</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label class="col-form-label">Email <span
                                                        class="text-danger">*</span></label>
                                                <input type="email" v-model.trim="$v.email.$model" id="email" name="email" class="form-control" :class="{ 'is-invalid': submitted && $v.email.$error }" />
                                <div v-if="submitted && $v.email.$error" class="invalid-feedback">
                                    <span v-if="!$v.email.required">Email is required</span>
                                    <span v-if="!$v.email.email">Email is invalid</span>
                                </div>
                                            </div>
                                        </div>
                                        <!-- <div class="col-sm-6">
                                            <div class="form-group">
                                                <label class="col-form-label">Employee ID <span
                                                        class="text-danger">*</span></label>
                                                <input type="text" class="form-control">
                                            </div>
                                        </div> -->
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label class="col-form-label">Phone </label>
                                                <input type="text" v-model.trim="$v.phone.$model" id="name" name="name" class="form-control" :class="{ 'is-invalid': submitted && $v.phone.$error }" />
                                                <div v-if="submitted && !$v.phone.required" class="invalid-feedback">Phone is required</div>
                                            </div>
                                        </div>
                                        <!-- <div class="col-sm-6">
                                            <div class="form-group">
                                                <label class="col-form-label">Joining Date <span
                                                        class="text-danger">*</span></label>
                                                <div class="cal-icon">
                                                    <input v-model="joinDate" class="form-control datetimepicker" type="text"></div>
                                            </div>
                                        </div> -->
                                        
                                        <!-- <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Department <span class="text-danger">*</span></label>
                                                <select class="select">
                                                    <option>Select Department</option>
                                                    <option>Web Development</option>
                                                    <option>IT Management</option>
                                                    <option>Marketing</option>
                                                </select>
                                            </div>
                                        </div> -->
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Designation <span class="text-danger">*</span></label>
                                                
                                                <select class="form-control" v-model.trim="$v.designationId.$model">
                                                    <option>Select Designation</option>
                                                    <option v-for="item in designations" :key="item.id" :value="parseInt(item.id)">{{item.name}}</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Level <span class="text-danger">*</span></label>
                                                
                                                <select class="form-control" v-model.trim="$v.rankId.$model">
                                                    <option>Select Level</option>
                                                    <option v-for="item in ranks" :key="item.id" :value="parseInt(item.id)">{{item.rankName}}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="submit-section">
                                        <button class="btn btn-primary submit-btn" type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Add Employee Modal -->

                <!-- Edit Employee Modal -->
                <div id="edit_employee" class="modal custom-modal fade" role="dialog">
                    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Edit Employee</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form @submit.prevent="onPutSubmit">
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
                                                <label class="col-form-label">First Name <span
                                                        class="text-danger">*</span></label>
                                                <input class="form-control" v-model="employee.firstName" type="text">
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label class="col-form-label">Last Name</label>
                                                <input class="form-control" v-model="employee.lastName" type="text">
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label class="col-form-label">Email <span
                                                        class="text-danger">*</span></label>
                                                <input class="form-control" v-model="employee.email" type="email">
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label class="col-form-label">Phone </label>
                                                <input class="form-control" v-model="employee.phone" type="text">
                                            </div>
                                        </div>
                                        <!-- <div class="col-sm-6">
                                            <div class="form-group">
                                                <label class="col-form-label">Employee ID <span
                                                        class="text-danger">*</span></label>
                                                <input type="text" value="FT-0001" readonly
                                                    class="form-control floating">
                                            </div>
                                        </div> -->
                                        <!-- <div class="col-sm-6">
                                            <div class="form-group">
                                                <label class="col-form-label">Joining Date <span
                                                        class="text-danger">*</span></label>
                                                <div class="cal-icon"><input class="form-control datetimepicker"
                                                        type="text"></div>
                                            </div>
                                        </div> -->
                                        
                                        <!-- <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Department <span class="text-danger">*</span></label>
                                                <select class="select">
                                                    <option>Select Department</option>
                                                    <option>Web Development</option>
                                                    <option>IT Management</option>
                                                    <option>Marketing</option>
                                                </select>
                                            </div>
                                        </div> -->
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Designation <span class="text-danger">*</span></label>
                                                 <select class="form-control" v-model="employee.designationId">
                                                    <option>Select Designation</option>
                                                    <option v-for="item in designations" :key="item.id" :value="parseInt(item.id)">{{item.name}}</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Level <span class="text-danger">*</span></label>
                                                
                                                <select class="form-control" v-model="employee.rankId">
                                                    <option>Select Level</option>
                                                    <option v-for="item in ranks" :key="item.id" :value="parseInt(item.id)">{{item.rankName}}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="submit-section">
                                        <button class="btn btn-primary submit-btn" type="submit">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Edit Employee Modal -->

                <!-- Delete Employee Modal -->
                <div class="modal custom-modal fade" id="delete_employee" role="dialog">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-body">
                                <div class="form-header">
                                    <h3>Delete Employee</h3>
                                    <p>Are you sure want to delete?</p>
                                </div>
                                <div class="modal-btn delete-action">
                                    <div class="row">
                                        <div class="col-6">
                                            <a @click="removeEmployee"
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
                <!-- /Delete Employee Modal -->

            </div>
            <!-- /Page Wrapper -->
        </div>
    </div>
</template>
<script>
    import LayoutHeader from '@/components/layouts/Header.vue'
    import LayoutSidebar from '@/components/layouts/Sidebar.vue'
    import { required, sameAs } from 'vuelidate/lib/validators';
    import { employeeService} from '@/services/employeeService.js';
    import { authenticationService } from '@/services/authenticationService';
    import { organizationService } from '@/services/organizationService';
    export default {
        components: {
            LayoutHeader,
            LayoutSidebar,
        },
        data(){
    return {
        company: authenticationService.currentOfficeValue,
        firstName: '',
        lastName: '',
        rankId: null,
        address: '',
        phone: '',
        email: '',
        designationId: null,
      employees: [],
      employee: {},
      designations: null,
      ranks: null,
      submitted: false,
      loading: false,
      error: '',
      message: ''
    }
  },
    validations: {
             firstName: { required },
            lastName: { required },
            rankId: { required },
            //address: { required },
            phone: { required },
            email: { required },
            designationId: { required }
    },
  methods: {
      GetDesignations(){
          organizationService.getDesignations()
          .then(
              model => { 
                  this.designations = model},
              error => { this.error = error }
          )
      },
      GetRanks(){
          organizationService.getRanks()
          .then(
              model => { this.ranks = model},
              error => {this.error = error}
          )
      },
      GetEmployees () {
          employeeService.getEmployees(this.company.id)
            .then(
                model => { this.employees = model},
                error => { this.error = error }
            )
      },
      setEmployee(employee){
          this.employee = employee
      },
      removeEmployee(){
          if(this.employee){
              employeeService.removeEmployee(this.employee.id)
              .then(
                  id => {
                      employeeService.GetEmployees()
                        .then(
                          model => {employee = model}
                        )
					},
                    error => {
                        this.error = error;
                    }
              )
          }
      },
      onSubmit () {
            this.submitted = true;

            // stop here if form is invalid
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            }

            this.loading = true;
            employeeService.addEmployee(this.company.id, this.rankId, this.firstName, this.lastName, this.email, this.phone, this.designationId)
                .then(
                    id => {
                        this.message = 'New Employee Added successfully';
                      employeeService.getEmployees(this.company.id)
                        .then(
                          model => { this.employees = model;
                          this.message = '';
                          }
                        )
					},
                    error => {
                        this.error = error;
                        this.loading = false;
                    }
                );
        },

        onPutSubmit () {
            this.submitted = true;
            employeeService.updateEmployee(this.employee.id, this.company.id, this.employee.rankId, this.employee.firstName, this.employee.lastName, this.employee.email, this.employee.phone, this.employee.designationId)
                .then(
                    id => {
                        this.message = 'Employee update successfully';
                      employeeService.getEmployees(this.company.id)
                        .then(
                          model => { this.employees = model;
                          this.message = '';
                          }
                        )
					},
                    error => {
                        this.error = error;
                        this.loading = false;
                    }
                );
        }
  },
        mounted() {
            this.GetRanks();
            this.GetDesignations();
            this.GetEmployees();
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
        name: 'employeeslist'
    }
</script>