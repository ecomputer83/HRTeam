<template>
  <div class="vacancies">
    <div class="main-wrapper">
      <layout-header></layout-header>
      <layout-sidebar></layout-sidebar>
      <!-- Page Wrapper -->
      <div class="page-wrapper">
        <!-- Page Content -->
        <div class="content container-fluid">
          <!-- Page Header -->
          <div class="page-header">
            <div class="row">
              <div class="col-sm-12">
                <h3 class="page-title">Welcome Admin!</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/index">Dashboard</router-link>
                  </li>
                  <li class="breadcrumb-item active">Leave Type (Org Admin)</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- /Page Header -->

          <div class="row">
            <div class="col-lg-12 mx-auto">
              <div class="card">
                <div class="card-header">
                  <div class="d-flex justify-content-between">
                    <h4 class="card-title mb-0">Leave Type</h4>
                    <div class="col-auto float-right ml-auto">
                      <a
                        href="#"
                        class="btn add-btn"
                        data-toggle="modal"
                        data-target="#add_leave_type"
                        ><i class="fa fa-plus"></i>Add Leave Type</a
                      >
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-hover mb-0">
                      <thead>
                        <tr>
                          <th>Leave Type</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="leavetype in leavetypes"
                          v-bind:key="leavetype.name"
                        >
                          <td>{{ leavetype.name }}</td>
                          <td>
                            <div class="view-icons">
                              <a
                                @click="setLeaveType(leavetype)"
                                class="btn btn-link active"
                                data-toggle="modal"
                                data-target="#delete_leave_type"
                              >
                                <i class="fa fa-trash-o m-r-5"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <!-- /Page Content -->
            <!-- Add Employee Modal -->
            <div
              id="add_leave_type"
              class="modal custom-modal fade"
              role="dialog"
            >
              <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">New Leave Type</h5>
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
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="form-group">
                            <label class="col-form-label"
                              >Type Name
                              <span class="text-danger">*</span></label
                            >
                            <input
                              type="text"
                              v-model.trim="$v.name.$model"
                              id="name"
                              name="name"
                              class="form-control"
                              :class="{
                                'is-invalid': submitted && $v.name.$error,
                              }"
                            />
                            <div
                              v-if="submitted && !$v.name.required"
                              class="invalid-feedback"
                            >
                              LeaveType name is required
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="submit-section">
                        <button class="btn btn-primary submit-btn">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Add Employee Modal -->

            <!-- Delete Employee Modal -->
            <div
              class="modal custom-modal fade"
              id="delete_leave_type"
              role="dialog"
            >
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-body">
                    <div class="form-header">
                      <h3>Delete LeaveType</h3>
                      <p>Are you sure want to delete?</p>
                    </div>
                    <div class="modal-btn delete-action">
                      <div class="row">
                        <div class="col-6">
                          <a
                            class="btn btn-primary continue-btn"
                            @click="removeLeaveType()"
                            >Delete</a
                          >
                        </div>
                        <div class="col-6">
                          <a
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
            <!-- /Delete Employee Modal -->
          </div>
          <!-- /Page Content -->
        </div>
      </div>
      <!-- /Page Wrapper -->
    </div>
  </div>
</template>
<script>
import LayoutHeader from "@/components/layouts/Header.vue";
import { required, sameAs } from "vuelidate/lib/validators";
import LayoutSidebar from "@/components/layouts/orgAdminSidebar.vue";
import { organizationService } from "@/services/organizationService";

import Vue from "vue";
import leavetypeVue from "./leavetype.vue";
export default {
  components: {
    LayoutHeader,
    LayoutSidebar,
  },
  data() {
    return {
      name: "",
      leavetypes: [],
      leavetype: null,
      submitted: false,
      loading: false,
      error: "",
      isCreateLeaveType: false,
    };
  },
  validations: {
    name: { required },
  },

  methods: {
    handleCreateLeaveType() {
      handleCreateLeaveType = !this.isCreateLeaveType;
    },

    getLeaveTypes() {
      organizationService.getLeaveTypes().then(
        (model) => {
          this.leavetypes = model;
          // console.log(model);
        },
        (error) => {
          error = error;
        }
      );
    },

    setLeaveType(model) {
      this.leavetype = model;
    },

    removeLeaveType() {
      console.log(this.leavetype);
      if (leavetype) {
        organizationService.removeLeaveType(this.leavetype.id).then(
          (data) => {
            organizationService.getLeaveTypes().then((t) => {
              this.leavetypes = t;
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
      organizationService.addLeaveType(this.name).then(
        (id) => {
          organizationService.getLeaveTypes().then((p) => {
            this.leavetypes = p;
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
    this.getLeaveTypes();
  },
  name: "leavetypeorgadmin",
};
</script>
