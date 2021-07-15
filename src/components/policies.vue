<template>
    <div class="policies">
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
                                <h3 class="page-title">Policies</h3>
                                <ul class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <router-link to="/index">Dashboard</router-link>
                                    </li>
                                    <li class="breadcrumb-item active">Policies</li>
                                </ul>
                            </div>
                            <div class="col-auto float-right ml-auto">
                                <a href="#" class="btn add-btn" data-toggle="modal" data-target="#add_policy"><i
                                        class="fa fa-plus"></i> Add Policy</a>
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
                                            <th>Policy Name </th>
                                            <th>Department </th>
                                            <th>Description </th>
                                            <th>Created </th>
                                            <th class="text-right">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in policies" :key="item.id">
                                            <td>{{item.name}}</td>
                                            <td>{{item.departmentId == 0 ? 'All Departments' : item.department.name}}</td>
                                            <td>{{item.description | truncate(100, '...')}}</td>
                                            <td>{{new Date(item.createdAt).toDateString()}}</td>
                                            <td class="text-right">
                                                <div class="dropdown dropdown-action">
                                                    <a href="#" class="action-icon dropdown-toggle"
                                                        data-toggle="dropdown" aria-expanded="false"><i
                                                            class="material-icons">more_vert</i></a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <a class="dropdown-item" href="#"><i
                                                                class="fa fa-download m-r-5"></i> Download</a>
                                                        <a class="dropdown-item" @click="setEditPolicy(item)" data-toggle="modal"
                                                            data-target="#edit_policy"><i
                                                                class="fa fa-pencil m-r-5"></i> Edit</a>
                                                        <a class="dropdown-item" @click="setDeletePolicy(item)" data-toggle="modal"
                                                            data-target="#delete_policy"><i
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

                <!-- Add Policy Modal -->
                <div id="add_policy" class="modal custom-modal fade" role="dialog">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Add Policy</h5>
                                <button type="button" class="close" id="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <label>Policy Name <span class="text-danger">*</span></label>
                                        <input class="form-control" type="text" v-model="name">
                                    </div>
                                    <div class="form-group">
                                        <label>Description <span class="text-danger">*</span></label>
                                        <textarea class="form-control" rows="4" v-model="description"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-form-label">Department</label>
                                        <select class="form-control" v-model="departmentId">
                                            <option :value="0">All Departments</option>
                                            <option v-for="item in departments" :key="item.id" :value="parseInt(item.id)">{{item.name}}</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label>Upload Policy</label>
                                        <div class="custom-file" v-if="!file">
                                            <input type="file" class="custom-file-input" id="cv_upload" @change="onFilePicked">
                                            <label class="custom-file-label" for="cv_upload">Choose file</label>
                                        </div>
						                <div class="row" v-if="file">
							                <div class="col-md-6"><span>{{fileName}}</span></div>
							                <div class="col-md-6"><a class="btn btn-primary" @click="changeFile">Change File</a></div>
						                </div>
                                    </div>
                                    <div class="submit-section">
                                        <button class="btn btn-primary submit-btn" :disabled='loading' @click.prevent="onSubmit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Add Policy Modal -->

                <!-- Edit Policy Modal -->
                <div id="edit_policy" class="modal custom-modal fade" role="dialog">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Edit Policy</h5>
                                <button type="button" class="close" id="closeEdit" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <label>Policy Name <span class="text-danger">*</span></label>
                                        <input class="form-control" type="text" v-model="policy.name">
                                    </div>
                                    <div class="form-group">
                                        <label>Description <span class="text-danger">*</span></label>
                                        <textarea class="form-control" rows="4" v-model="policy.description"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-form-label">Department</label>
                                        <select class="form-control" v-model="policy.departmentId">
                                            <option :value="0">All Departments</option>
                                            <option v-for="item in departments" :key="item.id" :value="parseInt(item.id)">{{item.name}}</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label>Upload Policy</label>
                                        <div class="custom-file" v-if="!file">
                                            <input type="file" class="custom-file-input" id="cv_upload" @change="onFilePicked">
                                            <label class="custom-file-label" for="cv_upload">Choose file</label>
                                        </div>
						                <div class="row" v-if="file">
							                <div class="col-md-6"><span>{{fileName}}</span></div>
							                <div class="col-md-6"><a class="btn btn-primary" @click="changeFile">Change File</a></div>
						                </div>
                                    </div>
                                    <div class="submit-section">
                                        <button class="btn btn-primary submit-btn" :disabled='loading' @click="updatePolicy">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Edit Policy Modal -->

                <!-- Delete Policy Modal -->
                <div class="modal custom-modal fade" id="delete_policy" role="dialog">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-body">
                                <div class="form-header">
                                    <h3>Delete Policy</h3>
                                    <p>Are you sure want to delete?</p>
                                </div>
                                <div class="modal-btn delete-action">
                                    <div class="row">
                                        <div class="col-6">
                                            <a @click="deletePolicy" :disabled='loading'
                                                class="btn btn-primary continue-btn">Delete</a>
                                        </div>
                                        <div class="col-6">
                                            <a href="javascript:void(0);" data-dismiss="modal" id="closeDelete"
                                                class="btn btn-primary cancel-btn">Cancel</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Delete Policy Modal -->

            </div>
            <!-- /Page Wrapper -->
        </div>
    </div>
</template>
<script>
    import LayoutHeader from '@/components/layouts/Header.vue'
    import LayoutSidebar from '@/components/layouts/Sidebar.vue'
    import { organizationService } from "@/services/organizationService";
    import { authenticationService } from "@/services/authenticationService";
    export default {
        components: {
            LayoutHeader,
            LayoutSidebar,
        },
        data() {
            return {
                company: authenticationService.currentOfficeValue,
                name: '',
                description: '',
                departmentId: 0,
                policy: {},
                policies: [],
                departments: [],
                file: null,
				fileName: null,
				message: '',
				error: '',
                loading: false
            }
        },
        methods: {
            onFilePicked(event) {
      			const files = event.target.files
      			this.fileName = files[0].name
				  // console.log(this.fileName)
      			const fileReader = new FileReader()
      			fileReader.addEventListener('load', () => {
        			this.file = fileReader.result
      			})
      			fileReader.readAsDataURL(files[0])
      			this.file = files[0];
			},

			changeFile(){
				this.file = null
				this.fileName = ''
			},
            clearModel() {
                this.name = "";
                this.description = "";
                this.departmentId = 0;
                this.file = null;
                this.fileName = ''
            },

    close() {
        this.clearModel();
        $('#close').click();
      
    },

    closeEdit() {
      $('#closeEdit').click();
    },

    closeDelete() {
      $('#closeDelete').click();
    },

    setEditPolicy(model) {
      this.policy = model;
    },

    setDeletePolicy(model) {
      this.policy = model;
    },

    getDepartments() {
      organizationService.getDepartments().then(
        (model) => {
          this.departments = model;
          // console.log(model)
        },
        (error) => {
          error = error;
        }
      );
    },
    getPolicies() {
      organizationService.getDepartmentPolicies().then(
        (model) => {
          this.policies = model;
          //console.log(model)
          
        },
        (error) => {
          error = error;
        }
      );
    },
    updatePolicy() {

      this.loading = true;
      //console.log('department updated 1')
      organizationService
        .updateDepartmentPolicy(this.policy.id, this.policy.name, this.policy.description, this.policy.departmentId, this.file, this.company.id)
        .then(
          (id) => {
            organizationService.getDepartmentPolicies().then((o) => {
              this.policies = o;
              this.loading = false;
              this.closeEdit();
            });
          },
          (error) => {
            this.error = error;
            this.loading = false;
          }
        );
    },
    setDepartment(item) {
      this.department = item;
    },
    deletePolicy() {
      this.loading = true
      const id = this.policy.id;
      organizationService.removeDepartmentPolicy(id).then(
        (id) => {
          organizationService.getDepartmentPolicies().then((o) => {
            this.policies = o;
            this.loading = false;
            this.closeDelete();
          });
        },
        (e) => {
          this.error = e;
          this.loading = false;
          this.closeDelete();
        }
      );
    },
    onSubmit() {
    
        
      this.loading = true;
      organizationService.addDepartmentPolicy(this.name, this.description, this.departmentId, this.file, this.company.id).then(
        (id) => {
          organizationService.getDepartmentPolicies().then((o) => {
            this.policies = o;
            this.loading = false;
            this.close();
          });
        },
        (error) => {
          this.error = error;
          this.loading = false;
        }
      );
    },
        },
        mounted() {
            this.getDepartments();
            this.getPolicies();
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

            // if ($('.datatable').length > 0) {
            //     $('.datatable').DataTable({
            //         "bFilter": false,
            //     });
            // }
            if ($('.floating').length > 0) {
                $('.floating').on('focus blur', function (e) {
                    $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
                }).trigger('blur');
            }
        },
        name: 'policies'
    }
</script>