<template>
  <!-- Education Modal -->
  <v-dialog v-model="modalDialog" max-width="725px">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Education Informations</h5>
        <button type="button" class="close" @click="method(employee)">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="postEducation">
          <div class="form-scroll">
            <div class="card">
              <div class="card-body">
                <h3 class="card-title">
                  Education Informations
                  <a href="javascript:void(0);" class="delete-icon"
                    ><i class="fa fa-trash-o"></i
                  ></a>
                </h3>
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
                  <div class="col-md-6">
                    <div class="form-group form-focus focused">
                      <input
                        type="text"
                        v-model.trim="$v.institute.$model"
                        class="form-control floating"
                        style="height: 55px !important"
                      />
                      <label class="focus-label">Institution</label>
                    </div>
                    <div
                      v-if="submitted && !$v.institute.required"
                      class="invalid-feedback"
                    >
                      Institution is required
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group form-focus focused">
                      <input
                        type="text"
                        v-model.trim="$v.discipline.$model"
                        class="form-control floating"
                        style="height: 55px !important"
                      />
                      <label class="focus-label">Discipline</label>
                    </div>
                    <div
                      v-if="submitted && !$v.discipline.required"
                      class="invalid-feedback"
                    >
                      Discipline is required
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group form-focus focused">
                      <div class="cal-icon">
                        <!-- <input type="text"   v-model.trim="$v.startYear.$model"
																	class="form-control floating datetimepicker" style="height: 55px !important;"> -->
                        <datepicker
                          v-model.trim="$v.startYear.$model"
                          calendar-class
                          input-class
                          bootstrap-styling
                          class="form-control datetimepicker"
                          type="text"
                        />
                      </div>
                      <label class="focus-label">Starting Date</label>
                    </div>
                    <div
                      v-if="submitted && !$v.startYear.required"
                      class="invalid-feedback"
                    >
                      Starting Date is required
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group form-focus focused">
                      <div class="cal-icon">
                        <!-- <input type="text"   v-model.trim="$v.endYear.$model"
																	class="form-control floating datetimepicker" style="height: 55px !important;"> -->
                        <datepicker
                          v-model.trim="$v.endYear.$model"
                          calendar-class
                          input-class
                          bootstrap-styling
                          class="form-control datetimepicker"
                          type="text"
                        />
                      </div>
                      <label class="focus-label">Complete Date</label>
                    </div>
                    <div
                      v-if="submitted && !$v.endYear.required"
                      class="invalid-feedback"
                    >
                      Complete Date is required
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="submit-section">
            <button class="btn btn-primary submit-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </v-dialog>
  <!-- /Education Modal -->
</template>


<script>
import { required, sameAs } from "vuelidate/lib/validators";
import { employeeService } from "@/services/employeeService";
import Datepicker from "vuejs-datepicker";
export default {
  props: {
    model: {},
    id: 0,
    dialog: Boolean,
    method: { type: Function },
  },
  components: {
    Datepicker,
  },
  data() {
    return {
      modalDialog: this.dialog,
      employeeId: this.id,
      institute: this.model ? "" : this.model.institute,
      discipline: this.model ? "" : this.model.discipline,
      startYear: this.model ? "" : this.model.startYear,
      endYear: this.model ? "" : this.modal.endYear,
      error: "",
      message: "",
      submitted: false,
    };
  },

  validations: {
    institute: { required },
    discipline: { required },
    startYear: { required },
    endYear: { required },
  },
  mounted() {
    this.$emit("update:employee", this.employee);
    this.$emit("update:educationDialog", this.dialog);
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
  methods: {
    postEducation() {
      this.submitted = true;
      console.log(this.Id);
      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      if (this.model.id) {
        employeeService
          .updateEmployeeEducation(
            this.model.id,
            this.employeeId,
            this.institute,
            this.discipline,
            this.startYear,
            this.endYear
          )
          .then(
            (model) => {
              this.message = "Education update successfully!";
              employeeService.getEmployeeDetail(this.employeeId).then(
                (model) => {
                  this.employee = model;
                  if (!this.employee.employeePension) {
                    this.employee.employeePension = {
                      id: 0,
                      pensionNo: "",
                      employeeRate: 0,
                      pensionManager: "",
                    };
                  }
                  if (!this.employee.employeeStatutory) {
                    this.employee.employeeStatutory = {
                      id: 0,
                      salaryBasis: "",
                      salaryAmount: 0.0,
                    };
                  }
                },
                (error) => {
                  this.error = error;
                }
              );
            },
            (error) => {
              this.error = error;
            }
          );
      } else {
        employeeService
          .addEmployeeEducation(
            this.employeeId,
            this.institute,
            this.discipline,
            this.startYear,
            this.endYear
          )
          .then(
            (model) => {
              this.message = "Education create successfully!";
              employeeService.getEmployeeDetail(this.employeeId).then(
                (model) => {
                  this.employee = model;
                  if (!this.employee.employeePension) {
                    this.employee.employeePension = {
                      id: 0,
                      pensionNo: "",
                      employeeRate: 0,
                      pensionManager: "",
                    };
                  }
                  if (!this.employee.employeeStatutory) {
                    this.employee.employeeStatutory = {
                      id: 0,
                      salaryBasis: "",
                      salaryAmount: 0.0,
                    };
                  }
                },
                (error) => {
                  this.error = error;
                }
              );
            },
            (error) => {
              this.error = error;
            }
          );
      }
    },

    removeEducation() {
      if (this.model.id) {
        employeeService.removeEmployeeEducation(this.model.id).then(
          (id) => {
            (this.companyName = ""),
              (this.position = ""),
              (this.startYear = ""),
              (this.endYear = ""),
              (this.message = "Education removed successfully!");
            employeeService.getEmployeeDetail(this.employeeId).then(
              (model) => {
                this.employee = model;
                if (!this.employee.employeePension) {
                  this.employee.employeePension = {
                    id: 0,
                    pensionNo: "",
                    employeeRate: 0,
                    pensionManager: "",
                  };
                }
                if (!this.employee.employeeStatutory) {
                  this.employee.employeeStatutory = {
                    id: 0,
                    salaryBasis: "",
                    salaryAmount: 0.0,
                  };
                }
                if (!this.employee.employeeTax) {
                    this.employee.employeeTax = {
                      id: 0,
                      tin: "",
                      taxCode: "",
                      taxOffice: "",
                    tax: {}
                    }
                  }else{
                    this.employee.employeeTax.tax = { taxOffice: this.employee.employeeTax.taxCode, description: this.employee.employeeTax.taxOffice}
                  }
              },
              (error) => {
                this.error = error;
              }
            );
          },
          (error) => {
            this.error = error;
          }
        );
      }
    },
  },
};
</script>