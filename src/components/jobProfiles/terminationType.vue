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
                <h3 class="page-title">Termination Type</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/index">Dashboard</router-link>
                  </li>

                  <li class="breadcrumb-item active">Termination Type</li>
                </ul>
              </div>
              <div class="col-auto float-right ml-auto">
                <a
                  href="#"
                  class="btn add-btn"
                  data-toggle="modal"
                  data-target="#add_termination_type"
                  ><i class="fa fa-plus"></i> Add Termination Type</a
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
                      <th style="width: 30px;">#</th>
                      <th>Department Name</th>
                      <th class="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in terminationTypes" v-bind:key="item.id">
                      <td>{{index + 1}}</td>
                      <td>{{item.name}}</td>
                      <td class="text-right">
                        <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item"  data-toggle="modal" data-target="#edit_department"><i
                                class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item"  data-toggle="modal" data-target="#delete_department"><i
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
        <div id="add_termination_type" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add Termination Type</h5>
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
                      TerminationType name is required
                    </div>
                  </div>
                  <div class="submit-section">
                    <button
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
        <!-- /Add Department Modal -->

        <!-- Edit Department Modal -->
        <div id="edit_termination_type" class="modal custom-modal fade" role="dialog">
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
                    v-model="terminationType.name"
                    id="terminationType.name"
                    name="terminationType.name"
                    class="form-control"
                  />
                </div>
                <div class="submit-section">
                  <button
                    class="btn btn-primary submit-btn"
                    @click="onPutSubmit"
                    data-dismiss="modal"
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
                      <a
                        href="javascript:void(0);"
                        class="btn btn-primary continue-btn"
                        
                        data-dismiss="modal"
                        >Delete</a
                      >
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
import { authenticationService } from "@/services/authenticationService";

export default {
  components: {
    LayoutHeader,
    LayoutSidebar,
  },

  data() {
    return {
      name: "",
      terminationType: {},
      terminationTypes: [],
      submitted: false,
      loading: false,
      error: "",
      isCreatedSkillType: false,
      
    };
  },

  validations: {
    name: { required },
  },

  methods: {
    handleCreateSkillType() {
      handleCreateSkillType = !this.isCreatedSkillType;
    },

    getTerminationTypes () {
      skillsService.getTerminationTypes()
          .then(
            model => { this.terminationTypes = model
            console.log(model) },
            error => { error = error }
          )
    },

    onSubmit() {
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      this.loading = true;
      //console.log(this.name)
      skillsService.addTerminationType(this.name).then(
        (id) => {
          skillsService.getTerminationTypes().then((r) => {
            this.terminationTypes = r;
            console.log(r)
          });
        },
        (error) => {
          this.error = error;
          this.loading = false;
        }
      );
    },

    onPutSubmit() {
      console.log(this.terminationType);
      this.loading = true;
      skillsService
        .updateSkillType(
          this.terminationType.id,
          this.company.id,
          this.terminationType.name
        )
        .then(
          (id) => {
            skillsService.getSkillTypes(this.company.id).then((r) => {
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
    this.getTerminationTypes();
    //this.removeSkillType(this.company.id);
    // Datatable

    // if ($(".datatable").length > 0) {
    //   $(".datatable").DataTable({
    //     bFilter: false,
    //   });
    // }
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

  name: "terminationtype",
};
</script>