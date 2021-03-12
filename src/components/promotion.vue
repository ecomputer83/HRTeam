<template>
  <div class="promotion">
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
                <h3 class="page-title">Promotion</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/index">Dashboard</router-link>
                  </li>
                  <li class="breadcrumb-item active">Promotion</li>
                </ul>
              </div>
              <div class="col-auto float-right ml-auto">
                <a
                  href="#"
                  class="btn add-btn"
                  data-toggle="modal"
                  data-target="#add_promotion"
                  ><i class="fa fa-plus"></i> Add Promotion</a
                >
              </div>
            </div>
          </div>
          <!-- /Page Header -->
          <!----Datatable-->
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table dt-responsive">
                  <thead>
                    <tr>
                      <th>Promoted Employee</th>
                      <th>Department</th>
                      <th>Promotion Designation From</th>
                      <th>Promotion Designation To</th>
                      <th>Promotion Date</th>
                      <th class="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in promotions" v-bind:key="item.id">
                      <td>
                        <h2 class="table-avatar blue-link">
                          <router-link to="/profile" class="avatar"
                            ><img
                              alt=""
                              src="../assets/profiles/avatar-02.jpg"
                            />
                          </router-link>
                          <router-link to="/profile">{{
                            `${item.employee.firstName} ${item.employee.lastName}`
                          }}</router-link>
                        </h2>
                      </td>
                      <td>{{ employee.department }}</td>
                      <td>{{ item.from }}</td>
                      <td>{{ item.to }}</td>
                      <td>{{ item.date }}</td>
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
                              @click="setPromotion(item)"
                              data-toggle="modal"
                              data-target="#edit_promotion"
                              ><i class="fa fa-pencil m-r-5"></i> Edit</a
                            >
                            <a
                              class="dropdown-item"
                              @click="setPromotion(item)"
                              data-toggle="modal"
                              data-target="#delete_promotion"
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

        <!-- Add Promotion Modal -->
        <div id="add_promotion" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add Promotion</h5>
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
                    <label
                      >Promotion For <span class="text-danger">*</span></label
                    >
                    <select class="form-control" v-model="employeeId">
                      <option>Select Employee</option>
                      <option
                        v-for="item in employees"
                        :key="item.id"
                        :value="item.id"
                      >
                        {{ item.firstName }}
                      </option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label
                      >Promotion From <span class="text-danger">*</span></label
                    >
                    <select class="form-control" v-model="from">
                      <option
                        v-for="item in designations"
                        :key="item.id"
                        :value="item.id"
                      >
                        {{ item.name }}
                      </option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label
                      >Promotion To <span class="text-danger">*</span></label
                    >
                    <select class="form-control" v-model="to">
                      <option
                        v-for="item in designations"
                        :key="item.id"
                        :value="item.id"
                      >
                        {{ item.name }}
                      </option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label
                      >Promotion Date <span class="text-danger">*</span></label
                    >
                    <div class="cal-icon">
                      <input
                        v-model="date"
                        type="text"
                        calendar-class
                        input-class
                        bootstrap-styling
                        class="form-control datetimepicker"
                      />
                    </div>
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
          </div>
        </div>
        <!-- /Add Promotion Modal -->

        <!-- Edit Promotion Modal -->
        <div id="edit_promotion" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Promotion</h5>
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
                    <label
                      >Promotion For <span class="text-danger">*</span></label
                    >
                    <input class="form-control" type="text" value="John Doe" />
                  </div>
                  <div class="form-group">
                    <label
                      >Promotion From <span class="text-danger">*</span></label
                    >
                    <input
                      class="form-control"
                      type="text"
                      value="Web Developer"
                      readonly
                    />
                  </div>
                  <div class="form-group">
                    <label
                      >Promotion To <span class="text-danger">*</span></label
                    >
                    <select class="select">
                      <option>Web Developer</option>
                      <option>Web Designer</option>
                      <option>SEO Analyst</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label
                      >Promotion Date <span class="text-danger">*</span></label
                    >
                    <div class="cal-icon">
                      <input type="text" class="form-control datetimepicker" />
                    </div>
                  </div>
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /Edit Promotion Modal -->

        <!-- Delete Promotion Modal -->
        <div
          class="modal custom-modal fade"
          id="delete_promotion"
          role="dialog"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete Promotion</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div class="modal-btn delete-action">
                  <div class="row">
                    <div class="col-6">
                      <a
                        @click.prevent="deletePromotion"
                        class="btn btn-primary continue-btn"
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
        <!-- /Delete Promotion Modal -->
      </div>
      <!-- /Page Wrapper -->
    </div>
  </div>
</template>
<script>
import LayoutHeader from "@/components/layouts/Header.vue";
import LayoutSidebar from "@/components/layouts/Sidebar.vue";
import { required, sameAs } from "vuelidate/lib/validators";
import { employeeService } from "@/services/employeeService.js";
import { organizationService } from "@/services/organizationService.js";
import Datepicker from "vuejs-datepicker";
import { authenticationService } from "@/services/authenticationService";

export default {
  components: {
    LayoutHeader,
    LayoutSidebar,
  },

  data() {
    return {
      from: 0,
      to: 0,
      date: "",
      employeeId: 0,
      designationId: "",
      designationIdd: "",
      promotions: [],
      promotion: null,
      submitted: false,
      loading: false,
      error: "",
      fro: "",
      employee: [],
      employees: [],
      designation: [],
      designations: [],
      company: authenticationService.currentOfficeValue,
    };
  },

  methods: {
    getEmployees() {
      const companyId = this.company.id;
      employeeService.getEmployees(companyId).then(
        (model) => {
          this.employees = model;
        },
        (error) => {
          error = error;
        }
      );
    },

    getDesignations() {
      organizationService.getDesignations().then(
        (model) => {
          this.designations = model;
          console.log("model", model);
        },
        (error) => {
          error = error;
        }
      );
    },

    setPromotion(item) {
      this.promotions = item;
    },

    getPromotions() {
      const companyId = this.company.id;
      employeeService.getEmployeePromotion(companyId).then(
        (model) => {
          this.promotions = model;
        },
        (error) => {
          error = error;
        }
      );
    },

    deletePromotion() {
      const id = this.promotion.id;
      employeeService.removeEmployeePromotion(id).then(
        (id) => {
          employeeService.getEmployeePromotion(this.company.id).then((p) => {
            this.promotions = p;
          });
        },
        (error) => {
          this.error = error;
        }
      );
    },

    updatePromotion() {
      this.submitted = true;
      const id = this.employeeLeave.id;
      this.loading = true;
      employeeService
        .updateEmployeePromotion(
          id,
          this.promotion.from,
          this.promotion.to,
          this.promotion.to,
          this.promotion.date
        )
        .then(
          (id) => {
            employeeService.getPromotions(this.company.id).then((o) => {
              this.employeeLeaves = o;
            });
          },
          (error) => {
            this.error = error;
            this.loading = false;
          }
        );
    },

    onSubmit() {
      this.submitted = true;
      this.loading = true;
      employeeService
        .addEmployeePromotion(this.from, this.to, this.date, this.employeeId)
        .then(
          (id) => {
            employeeService.getEmployeePromotion(this.company.id).then((w) => {
              this.promotions = w;
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
    // Date Time Picker
    this.getPromotions();
    this.getEmployees();
    this.getDesignations();

    if ($(".datetimepicker").length > 0) {
      $(".datetimepicker").datetimepicker({
        format: "DD/MM/YYYY",
        icons: {
          up: "fa fa-angle-up",
          down: "fa fa-angle-down",
          next: "fa fa-angle-right",
          previous: "fa fa-angle-left",
        },
      });
    }

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
  name: "promotion",
};
</script>