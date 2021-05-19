<template>
    <!-- Family Info Modal -->
				<v-dialog v-model="modalDialog" max-width="725px">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title"> Family Informations</h5>
								<button type="button" class="close" @click="method(employee)">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form @submit.prevent="postFamily">
									<div class="form-scroll">
										<div class="card">
											<div class="card-body">
												<h3 class="card-title">Family Member <a @click="removeFamily" v-if="this.model.id"
														class="delete-icon"><i class="fa fa-trash-o"></i></a></h3>
												<div class="row">
                                                    <div class="col-md-12">
                                                        <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="error">
								                            <strong>Error!</strong> {{error}}
								                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
									                            <span aria-hidden="true">&times;</span>
								                            </button>
							                            </div>
                                                    </div>
                                                    <div class="col-md-12">
							                            <div class="alert alert-success alert-dismissible fade show" role="alert" v-if="message">
								                            <strong>Success!</strong> {{message}}
								                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
									                            <span aria-hidden="true">&times;</span>
								                            </button>
							                            </div>
                                                    </div>
                                                </div> 
                                                <div class="row">
													<div class="col-md-6">
														<div class="form-group">
															<label>Name <span class="text-danger">*</span></label>
															<input class="form-control"  v-model.trim="$v.name.$model" type="text">
														</div>
                                                        <div v-if="submitted && !$v.name.required" class="invalid-feedback">Name is required</div>
													</div>
													<div class="col-md-6">
														<div class="form-group">
															<label>Relationship <span
																	class="text-danger">*</span></label>
															<input class="form-control"  v-model.trim="$v.relationship.$model" type="text">
														</div>
                                                        <div v-if="submitted && !$v.relationship.required" class="invalid-feedback">Relationship is required</div>
													</div>
													<div class="col-md-6">
														<div class="form-group">
															<label>Phone <span class="text-danger">*</span></label>
															<input class="form-control"  v-model.trim="$v.phoneNo.$model" type="text">
														</div>
                                                        <div v-if="submitted && !$v.phoneNo.required" class="invalid-feedback">Phone is required</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="submit-section">
										<button class="btn btn-primary submit-btn" type="submit">Submit</button>
									</div>
								</form>
							</div>
						</div>
                </v-dialog>
				<!-- /Family Info Modal -->
</template>


<script>
import { required, sameAs } from 'vuelidate/lib/validators';
import { employeeService } from '@/services/employeeService';
  export default {
    props: {
        model: {},
        id: 0,
		dialog: Boolean,
		method: { type: Function }
    },
    data() {
      return {
          modalDialog: this.dialog,
          employee: null,
          employeeId: this.id,
          name: this.model.name,
          relationship: this.model.relationship,
          phoneNo: this.model.phoneNo,
          error: '',
          message: '',
          submitted: false
      }
    },
    validations: {
        name: { required },
        relationship: { required },
        phoneNo: { required }
    },
    mounted() {
        this.$emit('update:employee', this.employee);
        this.$emit('update:familyInfoDialog', this.dialog);
    },
    methods: {
        postFamily() {
            this.submitted = true;
            console.log(this.Id)
            // stop here if form is invalid
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            }
            if(this.model.id){

                employeeService.updateEmployeeFamily(this.model.id, this.employeeId, this.name, this.relationship, this.phoneNo)
                .then(model => { 
                    this.message = 'Family update successfully!'
                    employeeService.getEmployeeDetail(this.employeeId)
            	.then(
                model => { 
					this.employee = model;
					if(!this.employee.employeePension){
						this.employee.employeePension = {id: 0, pensionNo: "", employeeRate: 0, pensionManager: ""}
					}
					if(!this.employee.employeeStatutory){
						this.employee.employeeStatutory = {id: 0, salaryBasis: "", salaryAmount: 0.00 }
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
                error => { this.error = error })
                },
                    error => { this.error = error})
            }else{
                employeeService.addEmployeeFamily(this.employeeId, this.name, this.relationship, this.phoneNo)
                .then(model => { 
                    this.message = 'Family create successfully!'
                    employeeService.getEmployeeDetail(this.employeeId)
            	.then(
                model => { 
					this.employee = model;
					if(!this.employee.employeePension){
						this.employee.employeePension = {id: 0, pensionNo: "", employeeRate: 0, pensionManager: ""}
					}
					if(!this.employee.employeeStatutory){
						this.employee.employeeStatutory = {id: 0, salaryBasis: "", salaryAmount: 0.00 }
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
                error => { this.error = error })
                },
                    error => { this.error = error})
            }
        },

        removeFamily() {
            if(this.model.id){
              employeeService.removeEmployeeFamily(this.model.id)
              .then(
                  id => {
                      this.name = '',
                      this.relationship = '',
                      this.phone = '',
                      this.message = 'Family removed successfully!'
                      employeeService.getEmployeeDetail(this.employeeId)
            	.then(
                model => { 
					this.employee = model;
					if(!this.employee.employeePension){
						this.employee.employeePension = {id: 0, pensionNo: "", employeeRate: 0, pensionManager: ""}
					}
					if(!this.employee.employeeStatutory){
						this.employee.employeeStatutory = {id: 0, salaryBasis: "", salaryAmount: 0.00 }
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
                error => { this.error = error })
					},
                    error => {
                        this.error = error;
                    }
              )
          }
        }
    }
  }
</script>