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
                <h3 class="page-title">Skill Grade</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/index">Dashboard</router-link>
                  </li>

                  <li class="breadcrumb-item active">Skill Grade</li>
                </ul>
              </div>
              <div class="col-auto float-right ml-auto">
                <a class="btn add-btn" @click="openDialog"
                  ><i class="fa fa-plus"></i> Add Skill Grade</a
                >
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
                      <th>Grade Name</th>
                      <th>Rating</th>
                      <th>Type</th>
                      <th class="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="skillGrade in skillGrades"
                      v-bind:key="skillGrade.id"
                    >
                      <td>{{ skillGrade.name }}</td>
                      <td>{{ skillGrade.rating }}</td>
                      <td>{{ skillGrade.type }}</td>
                      <td class="text-right">
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
                              @click="setskillGrade(skillGrade)"
                              data-toggle="modal"
                              data-target="#edit_department"
                              ><i class="fa fa-pencil m-r-5"></i> Edit</a
                            >
                            <a
                              class="dropdown-item"
                              @click="setskillGrade(skillGrade)"
                              data-toggle="modal"
                              data-target="#delete_department"
                              ><i class="fa fa-trash-o m-r-5"></i> Delete</a
                            >
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
        <v-dialog v-model="dialog" max-width="725px">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Add Skill Grade</h5>
              <button type="button" class="close" @click="close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="onSubmit">
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
                    <div
                      class="alert alert-success alert-dismissible fade show"
                      role="alert"
                      v-if="message"
                    >
                      <strong>Success!</strong> {{ message }}
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
                </div>
                <div class="form-group">
                  <label>Grade Name <span class="text-danger">*</span></label>
                  <input
                    v-model.trim="$v.name.$model"
                    class="form-control"
                    type="text"
                  />
                </div>
                <div class="form-group">
                  <label>Rating <span class="text-danger">*</span></label>
                  <input
                    v-model.trim="$v.rating.$model"
                    id="name"
                    name="name"
                    class="form-control"
                    type="number"
                  />
                </div>
                <div class="form-group">
                  <label>Grade Type <span class="text-danger">*</span></label>
                  <select
                    v-model.trim="$v.type.$model"
                    class="select form-control"
                  >
                    <option>-- Select --</option>
                    <option value="Profession Grade">Profession Grade</option>
                    <option value="Soft Grade">Soft Grade</option>
                    <option value="Language Grade">Language Grade</option>
                  </select>
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
        <!-- /Add Department Modal -->

        <!-- Edit Department Modal -->
        <div id="edit_department" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Skill Grade</h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label>Grade Name <span class="text-danger">*</span></label>
                    <input
                      v-model="skillGrade.name"
                      class="form-control"
                      type="text"
                    />
                  </div>
                  <div class="form-group">
                    <label>Rating <span class="text-danger">*</span></label>
                    <input
                      v-model="skillGrade.rating"
                      id="rating"
                      name="rating"
                      class="form-control"
                      type="number"
                    />
                  </div>
                  <div class="form-group">
                    <label>Grade Type <span class="text-danger">*</span></label>
                    <select
                      v-model="skillGrade.type"
                      class="select form-control"
                    >
                      <option>-- Select --</option>
                      <option value="Profession Grade">Profession Grade</option>
                      <option value="Soft Grade">Soft Grade</option>
                      <option value="Language Grade">Language Grade</option>
                    </select>
                  </div>
                  <div class="submit-section">
                    <button
                      @click="onPutSubmit"
                      data-dismiss="modal"
                      class="btn btn-primary submit-btn"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /Edit Department Modal -->

        <!-- Delete Department Modal -->
        <div
          class="modal custom-modal fade"
          id="delete_department"
          role="dialog"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete Skill Grade</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div class="modal-btn delete-action">
                  <div class="row">
                    <div class="col-6">
                      <a
                        class="btn btn-primary continue-btn"
                        @click="removeSkillGrade"
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
          </div>
        </div>
        <!-- /Delete Department Modal -->
      </div>
      <!-- /Page Wrapper -->
    </div>
  </div>
</template>
<script>
import LayoutHeader from "@/components/layouts/Header.vue";
import LayoutSidebar from "@/components/layouts/Sidebar.vue";
import { required, sameAs } from "vuelidate/lib/validators";
import { skillsService } from "@/services/skillsService";
import { authenticationService } from "@/services/authenticationService";

export default {
  components: {
    LayoutHeader,
    LayoutSidebar,
  },

  data() {
    return {
      name: "",
      rating: "",
      type: "",
      skillGrade: {},
      skillGrades: [],
      loading: false,
      error: "",
      submitted: false,
      company: authenticationService.currentOfficeValue,
      dialog: false,
      dialogEdit: false,
      dialogDelete: false,
      message: "",
      error: "",
    };
  },

  validations: {
    name: { required },
    rating: { required },
    type: { required },
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
      this.type = "";
      this.rating = "";
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

    setEditTermination(item) {
      this.termination = item;
      this.dialogEdit = true;
    },

    setDeleteTermination(item) {
      this.termination = item;
      this.dialogDelete = true;
    },

    handleCreateGrade() {
      handleCreateGrade = !this.isCreated;
    },

    getskillGrades() {
      skillsService.getskillGrades(this.company.id).then(
        (model) => {
          this.skillGrades = model;
        },
        (error) => {
          error = error;
        }
      );
    },

    removeSkillGrade() {
      const id = this.skillGrade.id;
      skillsService.removeskillGrade(id).then((id) => {
        skillsService.getskillGrades(this.company.id).then((r) => {
          this.skillGrades = r;
          this.closeDelete();
        });
      });
    },

    setskillGrade(model) {
      this.skillGrade = model;
      console.log(model);
    },

    onSubmit() {
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      this.loading = true;
      skillsService
        .addskillGrade(
          this.company.id,
          this.name,
          parseInt(this.rating),
          this.type
        )
        .then(
          (id) => {
            this.message = "Termination created successfully";
            skillsService.getskillGrades(this.company.id).then((a) => {
              this.skillGrades = a;
              this.close();
            });
          },
          (error) => {
            this.error = error;
            this.loading = false;
          }
        );
    },

    onPutSubmit() {
      // console.log(this.skillType);
      this.loading = true;
      skillsService
        .updateskillGrade(
          this.skillGrade.id,
          this.company.id,
          this.skillGrade.name,
          parseInt(this.skillGrade.rating),
          this.skillGrade.type
        )
        .then(
          (id) => {
            skillsService.getskillGrades(this.company.id).then((r) => {
              this.skillGrades = r;
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
    this.getskillGrades();

    if ($(".datatable").length > 0) {
      $(".datatable").DataTable({
        bFilter: false,
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
  name: "skillgrade",
};
</script>