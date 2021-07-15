<template>
  <div class="termination">
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
                <h3 class="page-title">Termination</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/index">Dashboard</router-link>
                  </li>

                  <li class="breadcrumb-item active">Termination</li>
                </ul>
              </div>
              <div class="col-auto float-right ml-auto">
                <a class="btn add-btn" @click="openDialog"
                  ><i class="fa fa-plus"></i> Add Termination</a
                >
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
                      <th>#</th>
                      <th>Terminated Employee</th>
                      <th>Department</th>
                      <th>Termination Type</th>
                      <th>Termination Date</th>
                      <th>Reason</th>
                      <th>Notice Date</th>
                      <th class="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(item, index) in terminatedEmployees"
                      v-bind:key="item.id"
                    >
                      <td>{{ index + 1 }}</td>
                      <td>
                        <h2 class="table-avatar blue-link">
                          <router-link to="/profile" class="avatar"
                            ><img alt="" src="~@/assets/profiles/avatar-02.jpg"
                          /></router-link>
                          <router-link to="/profile">{{
                            `${item.employee.firstName} ${item.employee.lastName}`
                          }}</router-link>
                        </h2>
                      </td>
                      <td>Web Development</td>
                      <td>Misconduct</td>
                      <td>{{ item.date }}</td>
                      <td>{{ item.reason }}</td>
                      <td>{{ item.noticeDate }}</td>
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
                              @click="setEditTermination(item)"
                              data-toggle="modal"
                              data-target="#edit_termination"
                              ><i class="fa fa-pencil m-r-5"></i> Edit</a
                            >
                            <a
                              class="dropdown-item"
                              @click="setDeleteTermination(item)"
                              data-toggle="modal"
                              data-target="#delete_termination"
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

        <!-- Add Termination Modal -->
         <v-dialog v-model="dialog" max-width="725px">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add Termination</h5>
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
                    <div class="row">
                      <div class="col-sm-12">
                  <div class="form-group">
                    <label
                      >Terminated Employees
                      <span class="text-danger">*</span></label
                    >
                    <select class="form-control" v-model="employeeId">
                      <option>Select Terminated Employee</option>
                      <option
                        v-for="item in employees"
                        :key="item.id"
                        :value="item.id"
                      >
                        {{ item.firstName + ' ' + item.lastName }}
                      </option>
                    </select>
                  </div>
                      </div>
                      </div>
                  <!-- <div class="form-group">
                                        <label>Termination Type <span class="text-danger">*</span></label>
                                        <div class="add-group-btn">
                                            <select class="select">
                                                <option>Misconduct</option>
                                                <option>Others</option>
                                            </select>

                                            <a class="btn btn-primary" href="javascript:void(0);"><i
                                                    class="fa fa-plus"></i> Add</a>
                                        </div>
                                    </div> -->

                  <div class="form-group">
                    <label
                      >Termination Type
                      <span class="text-danger">*</span></label
                    >
                    <select class="form-control" v-model="terminationTypeId">
                      <option>Select Termination Type</option>
                      <option
                        v-for="item in terminationTypes"
                        :key="item.id"
                        :value="item.id"
                      >
                        {{ item.name }}
                      </option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label
                      >Termination Date
                      <span class="text-danger">*</span></label
                    >
                    <div class="cal-icon">
                      <!-- <input type="text" class="form-control datetimepicker"> -->
                      <datepicker
                        v-model="date"
                        calendar-class
                        input-class
                        bootstrap-styling
                        class="form-control datetimepicker"
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Reason <span class="text-danger">*</span></label>
                    <textarea
                      class="form-control"
                      v-model="reason"
                      rows="4"
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <label
                      >Notice Date <span class="text-danger">*</span></label
                    >
                    <div class="cal-icon">
                      <!-- <input type="text" class="form-control datetimepicker"> -->
                      <datepicker
                        v-model="noticeDate"
                        calendar-class
                        input-class
                        bootstrap-styling
                        class="form-control datetimepicker"
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
         </v-dialog>
        <!-- /Add Termination Modal -->

        <!-- Edit Termination Modal -->
        <v-dialog v-model="dialogEdit" max-width="725px" v-if="termination">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Termination</h5>
                <button
                  type="button" class="close" @click="closeEdit">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
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
                    <div class="row">
                      <div class="col-sm-12">
                  <div class="form-group">
                    <label
                      >Terminated Employees
                      <span class="text-danger">*</span></label
                    >
                    <select
                      class="form-control"
                      v-model="termination.employeeId"
                    >
                      <option>Select Terminated Employee</option>
                      <option
                        v-for="item in employees"
                        :key="item.id"
                        :value="item.id"
                      >
                        {{ item.firstName }}
                      </option>
                    </select>
                  </div>
                      </div>
                    </div>
                  <div class="form-group">
                    <label
                      >Termination Type
                      <span class="text-danger">*</span></label
                    >
                    <select
                      class="form-control"
                      v-model="termination.terminationTypeId"
                    >
                      <option>Select Termination Type</option>
                      <option
                        v-for="item in terminationTypes"
                        :key="item.id"
                        :value="item.id"
                      >
                        {{ item.name }}
                      </option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label
                      >Termination Date
                      <span class="text-danger">*</span></label
                    >
                    <div class="cal-icon">
                      <!-- <input type="text" class="form-control datetimepicker" value="28/02/2019"> -->
                      <datepicker
                        v-model="termination.date"
                        calendar-class
                        input-class
                        bootstrap-styling
                        class="form-control datetimepicker"
                        type="text"
                      />
                      <!-- <datepicker v-model="date" bootstrap-styling class="form-control datetimepicker" type="date" /> -->
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Reason <span class="text-danger">*</span></label>
                    <textarea
                      class="form-control"
                      v-model="termination.reason"
                      rows="4"
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <label
                      >Notice Date <span class="text-danger">*</span></label
                    >
                    <div class="cal-icon">
                      <datepicker
                        v-model="termination.noticeDate"
                        calendar-class
                        input-class
                        bootstrap-styling
                        class="form-control datetimepicker"
                        type="text"
                      />
                      <!-- <input type="text" class="form-control datetimepicker" value="28/02/2019"> -->
                    </div>
                  </div>
                  <div class="submit-section">
                    <button
                      @click.prevent="updateEmployeeTermination"
                      class="btn btn-primary submit-btn"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
        </v-dialog>
        <!-- /Edit Termination Modal -->

        <!-- Delete Termination Modal -->
        <div
          class="modal custom-modal fade"
          id="delete_termination"
          role="dialog"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete Termination</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div class="modal-btn delete-action">
                  <div class="row">
                    <div class="col-6">
                      <a
                        @click.prevent="deleteEmployeeTermination"
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
        <!-- /Delete Termination Modal -->
      </div>
      <!-- /Page Wrapper -->
    </div>
  </div>
</template>
<script>
import LayoutHeader from "@/components/layouts/Header.vue";
import LayoutSidebar from "@/components/layouts/Sidebar.vue";
import Datepicker from "vuejs-datepicker";
import { authenticationService } from "@/services/authenticationService";
import { employeeService } from "@/services/employeeService";
import { skillsService } from "@/services/skillsService";

export default {
  components: {
    LayoutHeader,
    LayoutSidebar,
    Datepicker,
  },
  data() {
    return {
      employeeId: "",
      terminatedEmployees: [],
      reason: "",
      employees: [],
      employee: {},
      terminations: [],
      termination: {},
      date: "",
      terminationType: {},
      terminationTypeId: "",
      terminationTypes: [],
      noticeDate: "",
      company: authenticationService.currentOfficeValue,
      submitted: false,
      loading: false,
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

  methods: {
    clearModel() {
      this.employeeId = "";
      this.terminationTypeId = "";
      this.reason = "";
      this.date = "";
      this.noticeDate = "";
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

    setTermination(item) {
      this.termination = item;
    },

    getEmployees() {
      const companyId = this.company.id;
      // console.log("this.company.id", this.company.id);
      employeeService.getEmployees(companyId).then(
        (model) => {
          this.employees = model;
          // console.log(model);
        },
        (error) => {
          error = error;
        }
      );
    },

    getTerminationTypes() {
      skillsService.getTerminationTypes().then(
        (model) => {
          this.terminationTypes = model;
          // console.log(model);
        },
        (error) => {
          error = error;
        }
      );
    },

    getEmployeeTerminations() {
      // console.log("this.company.id", this.company.id);
      employeeService.getEmployeeTerminations(this.company.id).then(
        (model) => {
          this.terminatedEmployees = model;
          // console.log(model);
        },
        (error) => {
          error = error;
        }
      );
    },

    onSubmit() {
      this.submitted = true;

      this.loading = true;

      employeeService
        .addEmployeeTermination(
          this.date,
          this.reason,
          this.noticeDate,
          this.terminationTypeId,
          this.employeeId
        )
        .then((id) => {
            this.message = "Termination created successfully";
          employeeService.getEmployeeTerminations(this.company.id).then(
            (model) => {
              this.terminatedEmployees = model;
              this.close();
            },
            (error) => {
              error = error;
            }
          );
        });
    },

    updateEmployeeTermination() {
      this.submitted = true;

      this.loading = true;
      employeeService
        .updateEmployeeTermination(
          this.termination.id,
          this.termination.date,
          this.termination.reason,
          this.termination.noticeDate,
          this.termination.terminationTypeId,
          this.termination.employeeId
        )
        .then(
          (id) => {
            employeeService
              .getEmployeeTerminations(this.company.id)
              .then((o) => {
                (this.terminations = o);
                this.closeEdit();
              });
          },
          (error) => {
            this.error = error;
            this.loading = false;
          }
        );
    },

    deleteEmployeeTermination() {
      const id = this.termination.id;
      employeeService.removeEmployeeTermination(id).then((id) => {
        employeeService.getEmployeeTerminations(this.company.id).then(
          (model) => {
            this.terminatedEmployees = model;
            // console.log(model);
          },
          (error) => {
            error = error;
          }
        );
      });
    },
  },
  mounted() {
    this.getEmployeeTerminations();
    this.getTerminationTypes();
    this.getEmployees();
    // Date Time Picker

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

    // if ($('.datatable').length > 0) {
    //     $('.datatable').DataTable({
    //         "bFilter": false,
    //     });
    // }
    // if ($('.floating').length > 0) {
    //     $('.floating').on('focus blur', function (e) {
    //         $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
    //     }).trigger('blur');
    // }
  },
  name: "Termination",
};
</script>