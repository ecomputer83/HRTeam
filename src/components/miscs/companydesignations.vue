<template>
  <div class="designations">
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
                <h3 class="page-title">Designations</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/index">Dashboard</router-link>
                  </li>
                  <li class="breadcrumb-item active">Designations</li>
                </ul>
              </div>
              <div class="col-auto float-right ml-auto">
                <a @click="openDialog" class="btn add-btn">
                  <i class="fa fa-plus"></i> Add Designation
                </a>
              </div>
            </div>
          </div>
          <!-- /Page Header -->
          <!----Datatable-->
          <div class="row">
            <div class="col-md-12">
              <div
                class="alert alert-danger alert-dismissible fade show"
                role="alert"
                v-if="error"
              >
                <strong>Error!</strong> {{ error }}
                <button
                  type="button"
                  class="close"
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
            <div class="col-md-12">
              <div class="table-responsive">
                <v-data-table
                  :headers="headers"
                  :items="designations"
                  sort-by="name"
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
                          @click="setEditDesignation(item)"
                          ><i class="fa fa-pencil m-r-5"></i> Edit</a
                        >
                        <a
                          class="dropdown-item"
                          @click="setDeleteDesignation(item)"
                          ><i class="fa fa-trash-o m-r-5"></i> Delete</a
                        >
                      </div>
                    </div>
                  </template>
                </v-data-table>
                <!-- <template v-slot:[`item.profile`]="{ item }">
        <h2 class="table-avatar blue-link">
                          <router-link to="/profile" class="avatar"
                            ><img alt="" src="../assets/profiles/avatar-02.jpg"
                          /></router-link>
                          <router-link to="/profile">{{
                            `${item.firstName}`
                          }}</router-link>
                        </h2>
      </template> -->

                <!-- <table class="table table-striped custom-table mb-0 datatable">
                  <thead>
                    <tr>
                      <th style="width: 30px;">#</th>
                      <th>Designation </th>
                      <th>Department </th>
                      <th class="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in designations" v-bind:key="item.id">
                      <td>{{index + 1}}</td>
                      <td>{{item.name}}</td>
                      <td>{{item.department.name}}</td>
                      <td class="text-right">
                        <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" @click="setEditDesignation(item)" data-toggle="modal" data-target="#edit_designation"><i
                                class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" @click="setDesignation(item)" data-toggle="modal" data-target="#delete_designation"><i
                                class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>

                    
                    
                    
                   
                   
                    
                  </tbody>
                </table> -->
              </div>
            </div>
          </div>
          <!---/Datatable-->
        </div>
        <!-- /Page Content -->
        <!-- Add Designation Modal -->
        <v-dialog v-model="dialog" max-width="725px">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Add Designation</h5>
              <button type="button" class="close" @click="close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="onSubmit">
                <div class="form-group">
                  <label
                    >Designation Name <span class="text-danger">*</span></label
                  >
                  <input
                    type="text"
                    v-model.trim="$v.name.$model"
                    id="name"
                    name="name"
                    class="form-control"
                    :class="{ 'is-invalid': submitted && $v.name.$error }"
                  />
                  <div
                    v-if="submitted && !$v.name.required"
                    class="invalid-feedback"
                  >
                    Designation Name is required
                  </div>
                  <!-- <input class="form-control" type="text"> -->
                </div>
                <div class="form-group">
                  <label>Department <span class="text-danger">*</span></label>
                  <select class="form-control" v-model="department">
                    <option>Select Department</option>
                    <option
                      v-for="item in departments"
                      :key="item.id"
                      :value="item.id"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                </div>
                <div class="submit-section">
                  <button
                    @click.prevent="onSubmit"
                    class="btn btn-primary submit-btn"
                    data-dismiss="modal"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </v-dialog>
        <!-- /Add Designation Modal -->
        <!-- Edit Designation Modal -->
        <v-dialog v-model="dialogEdit" max-width="725px">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Edit Designation</h5>
              <button type="button" class="close" @click="closeEdit">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label
                    >Designation Name <span class="text-danger">*</span></label
                  >
                  <input
                    type="text"
                    v-model="designation.name"
                    id="name"
                    name="name"
                    class="form-control"
                  />
                  <!-- <input class="form-control" type="text" v-model="departmentName" > -->
                </div>
                <div class="submit-section">
                  <button
                    @click.prevent="updateDesignation"
                    class="btn btn-primary submit-btn"
                    data-dismiss="modal"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </v-dialog>
        <!-- /Edit Designation Modal -->
        <!-- Delete Designation Modal -->
        <v-dialog v-model="dialogDelete" max-width="725px">
          <div class="modal-content">
            <div class="modal-body">
              <div class="form-header">
                <h3>Delete Designation</h3>
                <p>Are you sure want to delete?</p>
              </div>
              <div class="modal-btn delete-action">
                <div class="row">
                  <div class="col-6">
                    <a
                      href="javascript:void(0);"
                      class="btn btn-primary continue-btn"
                      @click.prevent="deleteDesignation"
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
        <!-- /Delete Designation Modal -->
      </div>
      <!-- /Page Wrapper -->
    </div>
  </div>
</template>
<script>
import LayoutHeader from "@/components/layouts/Header.vue";
import LayoutSidebar from "@/components/layouts/Sidebar.vue";
import { required } from "vuelidate/lib/validators";
import { organizationService } from "@/services/organizationService";
export default {
  components: {
    LayoutHeader,
    LayoutSidebar,
  },
  data() {
    return {
      dialog: false,
      dialogEdit: false,
      dialogDelete: false,
      headers: [
        { text: "Designation", value: "name" },
        { text: "Department", value: "department.name" },
        { text: "", value: "actions", sortable: false }
      ],
      name: "",
      designations: [],
      designation: {},
      departments: [],
      department: null,
      submitted: false,
      loading: false,
      error: "",
    };
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
    dialogEdit(val) {
      val || this.closeEdit();
    },
  },
  methods: {
    openDialog() {
      this.dialog = true;
    },
    clearModel() {
      this.name = "";
      this.departments = "";
    },
    close() {
      this.dialog = false;
      this.clearModel();
    },
    closeEdit() {
      this.dialogEdit = false;
    },
    closeDelete() {
      this.dialogDelete = false;
    },
    setEditDesignation(model) {
      this.designation = model;
      this.dialogEdit = true;
    },
    setDeleteDesignation(model) {
      this.designation = model;
      this.dialogDelete = true;
    },
    getDesignations() {
      organizationService.getDesignations().then(
        (model) => {
          this.designations = model;
          console.log(model);
        },
        (error) => {
          error = error;
        }
      );
    },
    getDepartments() {
      organizationService.getDepartments().then(
        (model) => {
          this.departments = model;
          console.log(model);
        },
        (error) => {
          error = error;
        }
      );
    },
    setDesignation(item) {
      this.designation = item;
    },
    updateDesignation() {
      this.submitted = true;

      this.loading = true;
      //console.log('department updated 1')
      organizationService
        .updateDesignation(
          this.designation.id,
          this.designation.departmentId,
          this.designation.name
        )
        .then(
          (id) => {
            organizationService.getDesignations().then((o) => {
              this.designations = o;
              this.closeEdit();
            });
          },
          (error) => {
            this.error = error;
            this.loading = false;
          }
        );
    },
    deleteDesignation() {
      const id = this.designation.id;
      organizationService.removeDesignation(id).then(
        (id) => {
          organizationService.getDesignations().then((o) => {
            this.designations = o;
            this.dialogDelete = false;
          });
        },
        (e) => {
          this.error = "Designation being used in some information";
          this.dialogDelete = false;
        }
      );
    },
    onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      this.loading = true;

      organizationService.addDesignation(this.name, this.department).then(
        (id) => {
          //console.log(this.name, this.department)
          organizationService.getDesignations().then((o) => {
            this.designations = o;
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
  validations: {
    name: { required },
  },
  mounted() {
    this.getDepartments();
    this.getDesignations();

    // Select 2
    if ($(".select").length > 0) {
      $(".select").select2({
        minimumResultsForSearch: -1,
        width: "100%",
      });
    }
    // Multiselect
    if ($("#customleave_select").length > 0) {
      $("#customleave_select").multiselect();
    }
    if ($("#edit_customleave_select").length > 0) {
      $("#edit_customleave_select").multiselect();
    }
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
  },
  name: "companydesignations",
};
</script>