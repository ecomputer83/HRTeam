<template>
    <!-- Personal Info Modal -->
				<v-dialog v-model="dialog" max-width="725px">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title">Personal Information</h5>
								<button type="button" class="close" @click="method(employee)">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form @submit.prevent="putPersonalInfo">
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
												<label>Passport No</label>
												<input type="text" class="form-control" v-model="passportIdentificationNumber">
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label>Tel</label>
												<input class="form-control" type="text"  v-model.trim="$v.phone.$model">
											</div>
											<div v-if="submitted && !$v.phone.required" class="invalid-feedback">Phone is required</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label>Nationality <span class="text-danger">*</span></label>
												<input class="form-control" type="text"  v-model.trim="$v.nationality.$model">
											</div>
											<div v-if="submitted && !$v.nationality.required" class="invalid-feedback">Nationality is required</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label>Religion</label>
												<input class="form-control" type="text"  v-model.trim="$v.religion.$model">
												
											</div>
											<div v-if="submitted && !$v.religion.required" class="invalid-feedback">Religion is required</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label>Marital status <span class="text-danger">*</span></label>
												<select class="select form-control"  v-model.trim="$v.maritalStatus.$model">
													<option>-</option>
													<option>Single</option>
													<option>Married</option>
												</select>
											</div>
											<div v-if="submitted && !$v.maritalStatus.required" class="invalid-feedback">Marital Status is required</div>
										</div>
										
									</div>
									<div class="submit-section">
										<button class="btn btn-primary submit-btn" type="submit">Submit</button>
									</div>
								</form>
							</div>
						</div>
				</v-dialog>
				<!-- /Personal Info Modal -->
</template>

<script>
import { required, sameAs } from 'vuelidate/lib/validators';
import { employeeService } from '@/services/employeeService';
  export default {
    props: {
        model: {},
		dialog: Boolean,
		method: { type: Function }
    },
    data() {
      return {
		  employee: null,
          passportIdentificationNumber: this.model.passportIdentificationNumber,
          nationality: this.model.nationality,
          phone: this.model.phone,
		  religion: this.model.religion,
		  maritalStatus: this.model.maritalStatus,
		  message: '',
		  error: '',
		  submitted: false
      }
    },

    validations: {
        phone: { required },
        nationality: { required },
        religion: { required },
        maritalStatus: { required }
    },
    mounted() {
		console.log(this.model)
		this.$emit('update:employee', this.employee);
		this.$emit('update:personalInfoDialog', this.dialog);
    },
    methods: {

		putPersonalInfo() {
			this.submitted = true;
            // stop here if form is invalid
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            }
			employeeService.updateEmployeePersonalInfo(this.model.id, this.passportIdentificationNumber, this.nationality, this.phone, this.religion, this.maritalStatus)
                this.message = 'Personal Info update successfully!';
				employeeService.getEmployeeDetail(this.$route.params.id)
            	.then(
                model => { 
					this.employee = model;
					if(!this.employee.employeePension){
						this.employee.employeePension = {id: 0, pensionNo: "", employeeRate: 0, pensionManager: ""}
					}
					if(!this.employee.employeeStatutory){
						this.employee.employeeStatutory = {id: 0, salaryBasis: "", salaryAmount: 0.00 }
					}
				},
                error => { this.error = error }
            )
		}
    }
  }
</script>