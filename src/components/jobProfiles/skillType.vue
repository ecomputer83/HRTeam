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
                <h3 class="page-title">Skill Type</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/index">Dashboard</router-link>
                  </li>

                  <li class="breadcrumb-item active">Skill Type</li>
                </ul>
              </div>
              <div class="col-auto float-right ml-auto">
                <a
                  href="#"
                  class="btn add-btn"
                  data-toggle="modal"
                  data-target="#add_department"
                  ><i class="fa fa-plus"></i> Add Skill Type</a
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
                      <th>Type Name</th>
                      <th class="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="skilltype in skilltypes"
                      v-bind:key="skilltype.id"
                    >
                      <td>{{ skilltype.name }}</td>
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
                              @click="setSkillType(skilltype)"
                              data-toggle="modal"
                              data-target="#edit_department"
                              ><i class="fa fa-pencil m-r-5"></i> Edit</a
                            >
                            <a
                              class="dropdown-item"
                              href="#"
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
        <div id="add_department" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add Skill Type</h5>
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
                <form @submit.prevent="onSubmit">
                  <div class="form-group">
                    <label>Type Name <span class="text-danger">*</span></label>
                    <input
                      v-model.trim="$v.name.$model"
                      id="name"
                      name="name"
                      class="form-control"
                      :class="{ 'is-invalid': submitted && $v.name.$error }"
                      type="text"
                    />
                    <div
                      v-if="submitted && !$v.name.required"
                      class="invalid-feedback"
                    >
                      SkillType name is required
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
        <!-- /Add Department Modal -->

        <!-- Edit Department Modal -->
        <div id="edit_department" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Skill Type</h5>
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
                <div class="form-group">
                  <label>Type Name <span class="text-danger">*</span></label>
                  <input
                    type="text"
                    v-model="skillType.name"
                    id="name"
                    name="name"
                    class="form-control"
                  />
                </div>
                <div class="submit-section">
                  <button
                    class="btn btn-primary submit-btn"
                    @click="onPutSubmit"
                  >
                    Save
                  </button>
                </div>
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
                  <h3>Delete Skill Type</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div class="modal-btn delete-action">
                  <div class="row">
                    <div class="col-6">
                      <button
                        class="btn btn-primary continue-btn"
                        @click="removeSkillType()"
                      >
                        Delete
                      </button>
                    </div>
                    <div class="col-6">
                      <a data-dismiss="modal" class="btn btn-primary cancel-btn"
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
import { authenticationService } from "@/services/AuthenticationService";

export default {
  components: {
    LayoutHeader,
    LayoutSidebar,
  },

  data() {
    return {
      name: "",
      skillType: {},
      skilltypes: [],
      submitted: false,
      loading: false,
      error: "",
      isCreatedSkillType: false,
      company: authenticationService.currentOfficeValue,
    };
  },

  validations: {
    name: { required },
  },

  methods: {
    handleCreateSkillType() {
      handleCreateSkillType = !this.isCreatedSkillType;
    },

    getSkillTypes() {
      skillsService.getSkillTypes().then(
        (model) => {
          this.skilltypes = model;
        },
        (error) => {
          error = error;
        }
      );
    },

    setSkillType(model) {
      this.skillType = model;
    },

    removeSkillType() {
      if (this.skilltype) {
        skillsService.removeSkillType(this.skilltype.id).then(
          (data) => {
            skillsService.getSkillTypes().then((q) => {
              this.skilltypes = q;
            });
          },
          (error) => {
            this.error = error;
            this.loading = false;
          }
        );
      }
    },

    onSubmit() {
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      this.loading = true;
      skillsService.addSkillType(this.name, this.company.id).then(
        (id) => {
          skillsService.getSkillTypes().then((r) => {
            this.skilltypes = r;
          });
        },
        (error) => {
          this.error = error;
          this.loading = false;
        }
      );
    },

    onPutSubmit() {
      console.log(this.skillType);
      this.loading = true;
      skillsService
        .updateSkillType(
          this.skillType.id,
          this.company.id,
          this.skillType.name
        )
        .then(
          (id) => {
            skillsService.getSkillTypes().then((r) => {
              this.skilltypes = r;
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
    this.getSkillTypes();
    // Datatable

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

  name: "skillType",
};
</script>