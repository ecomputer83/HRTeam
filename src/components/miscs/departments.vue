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
                  </li>

                  <li class="breadcrumb-item active">Department</li>
                </ul>
              </div>
              <div class="col-auto float-right ml-auto">
                <a
                  href="#"
                  class="btn add-btn"
                  @click="openDialog"
                  ><i class="fa fa-plus"></i> Add Department</a
                >
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
              <div>
                <v-data-table
                  :headers="headers"
                  :items="departments"
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
                              @click="setEditDept(item)"
                              data-toggle="modal"
                              data-target="#edit_department"
                              ><i class="fa fa-pencil m-r-5"></i> Edit</a
                            >
                            <a
                              class="dropdown-item"
                              @click="setDeleteDept(item)"
                              data-toggle="modal"
                              data-target="#delete_department"
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

        <!-- Add Department Modal -->

        <v-dialog v-model="dialog" max-width="725px">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Add Department</h5>
              <button
                type="button"
                class="close"
                @click="close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label
                    >Department Name <span class="text-danger">*</span></label
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
                    Department Name is required
                  </div>

                  <!-- <input class="form-control" type="text" v-model="departmentName" > -->
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

        <!-- /Add Department Modal -->

        <!-- Edit Department Modal -->
        <v-dialog v-model="dialogEdit" max-width="725px">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Department</h5>
                <button
                  type="button"
                  class="close"
                  @click="closeEdit"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label
                      >Department Name <span class="text-danger">*</span></label
                    >
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
                    <button
                      @click.prevent="updateDepartment"
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
        <!-- /Edit Department Modal -->

        <!-- Delete Department Modal -->
        <v-dialog v-model="dialogDelete" max-width="725px">
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete Department</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div class="modal-btn delete-action">
                  <div class="row">
                    <div class="col-6">
                      <a
                        href="javascript:void(0);"
                        class="btn btn-primary continue-btn"
                        @click.prevent="deleteDepartment"
                        data-dismiss="modal"
                        >Delete</a
                      >
                    </div>
                    <div class="col-6">
                      <a
                        @click="closeDelete"
                        class="btn btn-primary cancel-btn"
                        >Cancel</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </v-dialog>
        <!-- /Delete Department Modal -->
      </div>
      <!-- /Page Wrapper -->
    </div>
  </div>
</template>
<script>
import LayoutHeader from "@/components/layouts/Header.vue";
import LayoutSidebar from "@/components/layouts/orgAdminSidebar.vue";
import { required } from "vuelidate/lib/validators";
import { organizationService } from "@/services/organizationService";
export default {
  components: {
    LayoutHeader,
    LayoutSidebar,
  },
  data() {
    return {
      headers: [
      {
        text: 'Department Name',
        align: 'start',
        value: 'name',
      },
      { text: '', value: 'actions', sortable: false },
    ],
      name: "",
      departments: [],
      department: {},
      submitted: false,
      loading: false,
      error: "",
      dialog: false,
      dialogEdit: false,
      dialogDelete: false,
    };
  },
  validations: {
    name: { required },
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
    clearModel() {
      this.name = "";
    },

    close() {
      this.dialog = false;
      this.clearModel();
    },

    openDialog() {
      this.dialog = true;
    },

    closeEdit() {
      this.dialogEdit = false;
    },

    closeDelete() {
      this.dialogDelete = false;
    },

    setEditDept(model) {
      this.department = model;
      this.dialogEdit = true;
    },

    setDeleteDept(model) {
      this.department = model;
      this.dialogDelete = true;
    },

    getDepartments() {
      organizationService.getDepartments().then(
        (model) => {
          this.departments = model;
          //console.log(model)
        },
        (error) => {
          error = error;
        }
      );
    },
    updateDepartment() {
      this.submitted = true;

      this.loading = true;
      //console.log('department updated 1')
      organizationService
        .updateDepartment(this.department.id, this.department.name)
        .then(
          (id) => {
            organizationService.getDepartments().then((o) => {
              this.departments = o;
              this.closeEdit()
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
    deleteDepartment() {
      //console.log(this.department)
      const id = this.department.id;
      organizationService.removeDepartment(id).then(
        (id) => {
          organizationService.getDepartments().then((o) => {
            this.departments = o;
            this.closeDelete()
          });
        },
        (e) => {
          this.error = "Department being used in some information";
          this.closeDelete();
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
      organizationService.addDepartment(this.name).then(
        (id) => {
          organizationService.getDepartments().then((o) => {
            this.departments = o;
            this.dialog = false;
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

    this.getDepartments();
  },
  name: "departments",
};
</script>