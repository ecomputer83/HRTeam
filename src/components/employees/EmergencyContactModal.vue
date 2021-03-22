<template>
  <!-- Emergency Contact Modal -->
  <v-dialog v-model="modalDialog" max-width="725px">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Personal Information</h5>
        <button type="button" class="close" @click="method(employee)">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="postEmergency">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">
                Primary Contact
                <a
                  @click="removeEmergency(this.model[0].id)"
                  class="delete-icon"
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
                  <div class="form-group">
                    <label>Name <span class="text-danger">*</span></label>
                    <input
                      type="text"
                      v-model.trim="$v.pname.$model"
                      class="form-control"
                    />
                    <div
                      v-if="submitted && !$v.pname.required"
                      class="invalid-feedback"
                    >
                      Name is required
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label
                      >Relationship <span class="text-danger">*</span></label
                    >
                    <input
                      class="form-control"
                      v-model.trim="$v.prelationship.$model"
                      type="text"
                    />
                    <div
                      v-if="submitted && !$v.prelationship.required"
                      class="invalid-feedback"
                    >
                      Relationship is required
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Phone <span class="text-danger">*</span></label>
                    <input
                      class="form-control"
                      v-model.trim="$v.pphone1.$model"
                      type="text"
                    />
                    <div
                      v-if="submitted && !$v.pphone1.required"
                      class="invalid-feedback"
                    >
                      Phone is required
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Phone 2</label>
                    <input
                      class="form-control"
                      v-model.trim="$v.pphone2.$model"
                      type="text"
                    />
                    <div
                      v-if="submitted && !$v.pphone2.required"
                      class="invalid-feedback"
                    >
                      Phone 2 is required
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <h3 class="card-title">
                Secondary Contact
                <a
                  @click="removeEmergency(this.model[1].id)"
                  class="delete-icon"
                  ><i class="fa fa-trash-o"></i
                ></a>
              </h3>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Name <span class="text-danger">*</span></label>
                    <input
                      type="text"
                      v-model.trim="$v.sname.$model"
                      class="form-control"
                    />
                    <div
                      v-if="submitted && !$v.sname.required"
                      class="invalid-feedback"
                    >
                      Secondary Name is required
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label
                      >Relationship <span class="text-danger">*</span></label
                    >
                    <input
                      class="form-control"
                      v-model.trim="$v.srelationship.$model"
                      type="text"
                    />
                    <div
                      v-if="submitted && !$v.srelationship.required"
                      class="invalid-feedback"
                    >
                      Secondary Relationship is required
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Phone <span class="text-danger">*</span></label>
                    <input
                      class="form-control"
                      v-model.trim="$v.sphone1.$model"
                      type="text"
                    />
                    <div
                      v-if="submitted && !$v.sphone1.required"
                      class="invalid-feedback"
                    >
                      Secondary Phone is required
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Phone 2</label>
                    <input
                      class="form-control"
                      v-model.trim="$v.sphone2.$model"
                      type="text"
                    />
                    <div
                      v-if="submitted && !$v.sphone2.required"
                      class="invalid-feedback"
                    >
                      Secondary Phone 2 is required
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
  <!-- /Emergency Contact Modal -->
</template>


<script>
import { required, sameAs } from "vuelidate/lib/validators";
import { employeeService } from "@/services/employeeService";
export default {
  props: {
    model: Array,
    id: 0,
    dialog: Boolean,
    method: { type: Function },
  },
  data() {
    return {
      modalDialog: this.dialog,
      employeeId: this.id,
      pname: this.model.length > 0 ? this.model[0].name : "",
      prelationship: this.model.length > 0 ? this.model[0].relationship : "",
      pphone1: this.model.length > 0 ? this.model[0].phone1 : "",
      pphone2: this.model.length > 0 ? this.model[0].phone2 : "",
      sname: this.model.length > 1 ? this.model[1].name : "",
      srelationship: this.model.length > 1 ? this.model[1].relationship : "",
      sphone1: this.model.length > 1 ? this.model[1].phone1 : "",
      sphone2: this.model.length > 1 ? this.model[1].phone2 : "",
      error: "",
      message: "",
      submitted: "",
    };
  },

  validations: {
    pname: { required },
    prelationship: { required },
    pphone1: { required },
    pphone2: { required },
    sname: { required },
    srelationship: { required },
    sphone1: { required },
    sphone2: { required },
  },
  mounted() {
    console.log(this.model);
    this.$emit("update:employee", this.employee);
    this.$emit("update:emergencyContactDialog", this.dialog);
  },
  methods: {
    postEmergency() {
      this.submitted = true;
      console.log(this.Id);
      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      if (this.model.length > 0) {
        employeeService
          .updateEmployeeEmergency(
            this.model[0].id,
            this.employeeId,
            this.pname,
            this.prelationship,
            this.pphone1,
            this.pphone2,
            this.model[1].id,
            this.sname,
            this.srelationship,
            this.sphone1,
            this.sphone2
          )
          .then(
            (model) => {
              this.message = "Emergency update successfully!";
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
          .addEmployeeEmergency(
            this.employeeId,
            this.pname,
            this.prelationship,
            this.pphone1,
            this.pphone2,
            this.sname,
            this.srelationship,
            this.sphone1,
            this.sphone2
          )
          .then(
            (model) => {
              this.message = "Emergency create successfully!";
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

    removeEmergency(id) {
      if (id) {
        employeeService.removeEmployeeEducation(id).then(
          (id) => {
            (this.companyName = ""),
              (this.position = ""),
              (this.startYear = ""),
              (this.endYear = ""),
              (this.message = "Emergency removed successfully!");
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
  },
};
</script>