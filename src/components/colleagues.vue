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
                                <h3 class="page-title">Colleagues</h3>
                                <ul class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <router-link to="/index">Dashboard</router-link>
                                    </li>
                                    <li class="breadcrumb-item active">Colleagues</li>
                                </ul>
                            </div>
                            <!-- <div class="col-auto float-right ml-auto">
                                <a href="#" class="btn add-btn" data-toggle="modal" data-target="#add_employee"><i
                                        class="fa fa-plus"></i> Add Employee</a>
                                <div class="view-icons">
                                    <router-link to="/employees" class="grid-view btn btn-link"><i class="fa fa-th"></i>
                                    </router-link>
                                    <router-link to="/employeeslist" class="grid-view btn btn-link active"><i
                                            class="fa fa-bars"></i></router-link>
                                </div>
                            </div> -->
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
                                            <!-- <th class="text-right no-sort">Action</th> -->
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="model in employees" v-bind:key="model.id">
                                            <td>
                                                <h2 class="table-avatar">
                                                    <img alt=""
                                                            src="~@/assets/profiles/avatar-02.jpg">
                                                    {{model.firstName + ' ' + model.lastName}} <span>{{model.designation.name}}</span>
                                                    
                                                </h2>
                                            </td>
                                            <td>{{'EMP-' + model.id}}</td>
                                            <td>{{model.email}}</td>
                                            <td>{{model.phone}}</td>
                                            <td>{{model.createdAt}}</td>
                                            <td>{{model.gender}}</td>
                                            <!-- <td class="text-right">
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
                                            </td> -->
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <!---/Datatable-->
                </div>
                <!-- /Page Content -->
            </div>
            <!-- /Page Wrapper -->
        </div>
    </div>
</template>
<script>
    import LayoutHeader from '@/components/layouts/Header.vue'
    import LayoutSidebar from '@/components/layouts/employeeSidebar.vue'
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
      employees: [],
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