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
                <h3 class="page-title">Skill</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/index">Dashboard</router-link>
                  </li>

                  <li class="breadcrumb-item active">Skill</li>
                </ul>
              </div>
              <div class="col-auto float-right ml-auto">
                <a
                  class="btn add-btn" @click="openDialog"
                  ><i class="fa fa-plus"></i> Add Skill</a
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
                      <th>Skill Name</th>
                      <th>Skill Type</th>
                      <th class="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="skill in skills" v-bind:key="skill.id">
                      <td>{{ skill.name }}</td>
                      <td>{{ skill.skillType.name }}</td>
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
                              @click="setSkill(skill)"
                              data-toggle="modal"
                              data-target="#edit_department"
                              ><i class="fa fa-pencil m-r-5"></i> Edit</a
                            >
                            <a
                              class="dropdown-item"
                              @click="setSkill(skill)"
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
                <h5 class="modal-title">Add Skill</h5>
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
                    <label>Skill Name <span class="text-danger">*</span></label>
                    <input
                      v-model.trim="$v.name.$model"
                      class="form-control"
                      type="text"
                    />
                  </div>
                  <div class="form-group">
                    <label>Skill Type <span class="text-danger">*</span></label>
                    <select class="form-control" v-model="type">
                      <!-- <option>Select SkillType</option> -->
                      <option
                        v-for="(item, index) in skilltypes"
                        :key="index"
                        :value="item.id"
                      >
                        {{ item.name }}
                      </option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label
                      >Description <span class="text-danger">*</span></label
                    >
                    <textarea
                      v-model.trim="$v.description.$model"
                      rows="10"
                      cols="10"
                      class="form-control"
                      placeholder="Enter text here"
                    ></textarea>
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
                <h5 class="modal-title">Edit Skill</h5>
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
                    <label>Skill Name <span class="text-danger">*</span></label>
                    <input
                      v-model="skill.name"
                      class="form-control"
                      type="text"
                    />
                  </div>
                  <div class="form-group">
                    <label>Skill Type <span class="text-danger">*</span></label>
                    <select v-model="skill.type" class="select form-control">
                      <option>-- Select --</option>
                      <option
                        v-for="(item, index) in skilltypes"
                        :key="index"
                        :value="item.id"
                      >
                        {{ item.name }}
                      </option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label
                      >Description <span class="text-danger">*</span></label
                    >
                    <textarea
                      v-model="skill.description"
                      rows="10"
                      cols="10"
                      class="form-control"
                      placeholder="Enter text here"
                    ></textarea>
                  </div>
                  <div class="submit-section">
                    <button
                      @click.prevent="updateSkill"
                      data-dismiss="modal"
                      class="btn btn-primary submit-btn"
                    >
                      Submit
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
                  <h3>Delete Skill</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div class="modal-btn delete-action">
                  <div class="row">
                    <div class="col-6">
                      <a
                        class="btn btn-primary continue-btn"
                        @click.prevent="removeSkill"
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
      type: "",
      description: "",
      skill: {},
      skills: [],
      loading: false,
      error: "",
      submitted: false,
      skilltypes: [],
      company: authenticationService.currentOfficeValue,
      dialog: false,
      dialogEdit: false,
      dialogDelete: false,
      message: "",
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

  validations: {
    name: { required },
    description: { required },
  },

  methods: {
    clearModel() {
      this.name = "";
      this.type = "";
      this.description = "";
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

    setEditSkills(item) {
      this.skill = item;
      this.dialogEdit = true;
    },

    setDeleteSkills(item) {
      this.skill = item;
      this.dialogDelete = true;
    },

    handleCreateSkillType() {
      handleCreateSkill = !this.isCreatedSkill;
    },

    getSkills(id) {
      skillsService.getSkills(id).then(
        (model) => {
          this.skills = model;
        },
        (error) => {
          error = error;
        }
      );
    },

    getSkillTypes(id) {
      skillsService.getSkillTypes(id).then(
        (model) => {
          this.skilltypes = model;
        },
        (error) => {
          error = error;
        }
      );
    },

    setSkill(model) {
      this.skill = model;
    },

    onSubmit() {
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      this.loading = true;
      skillsService
        .addSkill(this.company.id, this.name, this.description, this.type)
        .then(
          (id) => {
            this.message = "Skill created successfully";
            skillsService.getSkills(this.company.id).then((w) => {
              this.skills = w;
              this.close();
            });
          },
          (error) => {
            this.error = error;
            this.loading = false;
          }
        );
    },

    updateSkill() {
      this.submitted = true;
      this.loading = true;
      skillsService
        .updateSkill(
          this.skill.id,
          this.company.id,
          this.skill.name,
          this.skill.description,
          this.skill.type
        )
        .then(
          (id) => {
            skillsService.getSkills(this.company.id).then((p) => {
              this.skills = p;
            });
          },
          (error) => {
            this.error = error;
            this.loading = false;
          }
        );
    },

    removeSkill() {
      const id = this.skill.id;
      skillsService.removeSkill(id).then((id) => {
        skillsService.getSkills(this.company.id).then((o) => {
          this.skills = o;
        });
      });
    },
  },

  mounted() {
    // Datatable
    this.getSkills(this.company.id);
    this.getSkillTypes(this.company.id);
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

  name: "skills",
};
</script>