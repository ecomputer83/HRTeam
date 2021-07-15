<template>
    <!-- Family Info Modal -->
				<v-dialog v-model="modalDialog" max-width="725px">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title"> Bank Informations</h5>
								<button type="button" class="close" @click="method(employee)">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form @submit.prevent="postBank">
									<div class="form-scroll">
										<div class="card">
											<div class="card-body">
												<h3 class="card-title">Bank Information </h3>
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
															<label>Account Number <span class="text-danger">*</span></label>
															<input class="form-control"  v-model.trim="$v.bankAccountNumber.$model" type="text">
														</div>
                                                        <div v-if="submitted && !$v.bankAccountNumber.required" class="invalid-feedback">Account Number is required</div>
													</div>
													<div class="col-md-6">
														<div class="form-group">
															<label>Bank Name <span
																	class="text-danger">*</span></label>
															<select class="form-control"  v-model.trim="$v.bankName.$model" :class="{ 'is-invalid': submitted && $v.bankName.$error }">
                          <option>Select Bank</option>
                          <option v-for="item in banks" :key="item.lookupValue" :value="item.lookupValue">{{item.lookupDescription}}</option>
                        </select>
														</div>
                                                        <div v-if="submitted && !$v.bankName.required" class="invalid-feedback">Bank is required</div>
													</div>
                          <div class="col-md-12">
														<div class="form-group">
															<label>Bank Verification Number <span class="text-danger">*</span></label>
															<input class="form-control"  v-model.trim="$v.bvnNumber.$model" type="text">
														</div>
                                                        <div v-if="submitted && !$v.bvnNumber.required" class="invalid-feedback">Bank Verification Number is required</div>
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
import {organizationService} from '@/services/organizationService';
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
          bankAccountNumber: (this.model) ? this.model.bankAccountNumber : '',
          bankName: (this.model) ? this.model.bankName : '',
          bvnNumber: (this.model) ? this.model.bvnNumber : '',
          error: '',
          message: '',
		  banks: [],
          submitted: false
      }
    },
    validations: {
        bankAccountNumber: { required },
        bankName: { required },
        bvnNumber: { required }
    },
    mounted() {
		this.getBanks();
		this.$emit('update:employee', this.employee);
		this.$emit('update:bankInfoDialog', this.dialog);
    },
    methods: {
		getBanks() {
      organizationService.getBanks()
        .then(
          o => this.banks = o
        )
    },
        postBank() {
            this.submitted = true;
            // console.log(this.Id)
            // stop here if form is invalid
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            }
            if(this.model){

                employeeService.updateEmployeeBank(this.model.id, this.employeeId, this.bankAccountNumber, this.bankName, this.bvnNumber)
                .then(model => { this.message = 'Bank Info update successfully!'
					employeeService.getEmployeeDetail(this.employeeId)
            	.then(
                model => { 
					this.employee = model;
          if(!this.employee.passportPhoto){
              this.employee.passportPhoto = "../../assets/profiles/avatar-02.jpg"
          }
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
                employeeService.addEmployeeBank(this.employeeId, this.bankAccountNumber, this.bankName, this.bvnNumber)
                .then(model => { this.message = 'Bank Info create successfully!'
					employeeService.getEmployeeDetail(this.employeeId)
            	.then(
                model => { 
					this.employee = model;
          if(!this.employee.passportPhoto){
              this.employee.passportPhoto = "../../assets/profiles/avatar-02.jpg"
          }
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

        
    }
  }
</script>