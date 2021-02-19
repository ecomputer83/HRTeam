<template>
  <div class="departments">
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
                <h3 class="page-title">Department</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/index">Dashboard</router-link>
                  <li class="breadcrumb-item active">Department</li>
                </ul>
              </div>
              <div class="col-auto float-right ml-auto">
                <a href="#" class="btn add-btn" data-toggle="modal" data-target="#add_department"><i
                    class="fa fa-plus"></i> Add Department</a>
              </div>
            </div>
          </div>
          <!-- /Page Header -->
          <!----Datatable-->
          <div class="row">
            <div class="col-md-12">
              <div>
                <table class="table table-striped custom-table mb-0 datatable">
                  <thead>
                    <tr>
                      <th style="width: 30px;">#</th>
                      <th>Department Name</th>
                      <th class="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in departments" v-bind:key="item.id">
                      <td>{{index + 1}}</td>
                      <td>{{item.name}}</td>
                      <td class="text-right">
                        <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" @click="setDepartment(item)" data-toggle="modal" data-target="#edit_department"><i
                                class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" @click="setDepartment(item)" data-toggle="modal" data-target="#delete_department"><i
                                class="fa fa-trash-o m-r-5"></i> Delete</a>
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

        <!-- Add Department Modal -->
        <div id="add_department" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add Department</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label>Department Name <span class="text-danger">*</span></label>
                    <input 
                      type="text" 
                      v-model.trim="$v.name.$model" 
                      id="name" 
                      name="name" 
                      class="form-control" 
                      :class="{ 'is-invalid': submitted && $v.name.$error }" 
                    />
                      <div v-if="submitted && !$v.name.required" class="invalid-feedback">Department Name is required</div>
                      
                    <!-- <input class="form-control" type="text" v-model="departmentName" > -->
                  </div>
                  <div class="submit-section">
                    <button @click.prevent="onSubmit" class="btn btn-primary submit-btn"  data-dismiss="modal">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /Add Department Modal -->

        <!-- Edit Department Modal -->
        <div id="edit_department" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Department</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label>Department Name <span class="text-danger">*</span></label>
                    <input 
                      type="text" 
                      v-model="department.name" 
                      id="name" 
                      name="name" 
                      class="form-control"
                    />
                    <!-- <input class="form-control" type="text" v-model="departmentName" > -->
                  </div>
                  <div class="submit-section">
                    <button @click.prevent="updateDepartment" class="btn btn-primary submit-btn" data-dismiss="modal">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /Edit Department Modal -->

        <!-- Delete Department Modal -->
        <div class="modal custom-modal fade" id="delete_department" role="dialog">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete Department</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div class="modal-btn delete-action">
                  <div class="row">
                    <div class="col-6">
                      <a href="javascript:void(0);" class="btn btn-primary continue-btn" @click.prevent="deleteDepartment"  data-dismiss="modal">Delete</a>
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
        <!-- /Delete Department Modal -->

      </div>
      <!-- /Page Wrapper -->
    </div>
  </div>
</template>
<script>
  import LayoutHeader from '@/components/layouts/Header.vue'
  import LayoutSidebar from '@/components/layouts/Sidebar.vue'
  import { required } from 'vuelidate/lib/validators';
  import {organizationService} from '@/services/organizationService'
  export default {
    components: {
      LayoutHeader,
      LayoutSidebar,
    },
    data(){
      return {
        name: "",
        departments: [],
        department: {},
        submitted: false,
        loading: false,
        error: '',
      };
    },
    validations: {
      name: { required },
    },
    methods: {
      getDepartments () {
        organizationService.getDepartments()
          .then(
            model => { this.departments = model
            //console.log(model) 
            },
            error => { error = error }
          )
      },
      updateDepartment () {
        
        this.submitted = true;
          
            this.loading = true;
        //console.log('department updated 1')
        organizationService.updateDepartment(this.department.id, this.department.name)
          .then(id => {
                      organizationService.getDepartments()
                        .then(
                          o => {this.departments = o}
                        )
					},
                    error => {
                        this.error = error;
                        this.loading = false;
                    }
                );
      },
      setDepartment(item) {
        this.department = item;
      }, 
      deleteDepartment () {
        //console.log(this.department)
        const id = this.department.id;
        organizationService.removeDepartment(id)
          .then(id => {
            organizationService.getDepartments()
              .then(
                o => {this.departments = o}
              )
          })
      },
      onSubmit() {
        this.submitted = true;

            // stop here if form is invalid
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            }
        this.loading = true;
        organizationService.addDepartment(this.name)
                .then(id => {
                      organizationService.getDepartments()
                        .then(
                          o => {this.departments = o}
                        )
					},
                    error => {
                        this.error = error;
                        this.loading = false;
                    }
                );

      },
    },
    mounted() {

      // Datatable

      // if ($('.datatable').length > 0) {
      //   $('.datatable').DataTable({
      //     "bFilter": false,
      //   });
      // }
      // if ($('.floating').length > 0) {
      //   $('.floating').on('focus blur', function (e) {
      //     $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
      //   }).trigger('blur');
      // }

      this.getDepartments()
      this.updateDepartment()
      this.deleteDepartment(id)
    },
    name: 'departments'
  }
</script>