<template>
    <!-- Profile Modal -->
				<v-dialog v-model="modalDialog" max-width="725px">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title">Profile Information</h5>
								<button type="button" class="close" @click="method(employee)">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form @submit.prevent="putProfileInfo">
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
										<div class="col-md-12">
											<div class="profile-img-wrap edit-img">
												<img class="inline-block" src="~@/assets/profiles/avatar-02.jpg"
													alt="user">
												<div class="fileupload btn">
													<span class="btn-text">edit</span>
													<input class="upload" type="file">
												</div>
											</div>
											<div class="row">
												<div class="col-md-6">
													<div class="form-group">
														<label>First Name</label>
														<input type="text" class="form-control"  v-model.trim="$v.firstName.$model">
													</div>
                                                    <div v-if="submitted && !$v.firstName.required" class="invalid-feedback">First Name is required</div>
												</div>
												<div class="col-md-6">
													<div class="form-group">
														<label>Last Name</label>
														<input type="text" class="form-control"  v-model.trim="$v.lastName.$model">
													</div>
                                                    <div v-if="submitted && !$v.lastName.required" class="invalid-feedback">Last Name is required</div>
												</div>
												<div class="col-md-6">
													<div class="form-group">
														<label>Birth Date</label>
														<div class="cal-icon">
															<input class="form-control datetimepicker" type="text"
																 v-model.trim="$v.birthday.$model">
														</div>
                                                        <div v-if="submitted && !$v.birthday.required" class="invalid-feedback">Birth Date is required</div>
													</div>
												</div>
												<div class="col-md-6">
													<div class="form-group">
														<label>Gender</label>
														<select class="select form-control" v-model.trim="$v.gender.$model">
															<option value="male">Male</option>
															<option value="female">Female</option>
														</select>
													</div>
                                                    <div v-if="submitted && !$v.gender.required" class="invalid-feedback">Gender is required</div>
												</div>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-md-12">
											<div class="form-group">
												<label>Address</label>
												<input type="text" class="form-control"  v-model.trim="$v.address.$model">
											</div>
                                            <div v-if="submitted && !$v.address.required" class="invalid-feedback">Gender is required</div>
										</div>
										
										<div class="col-md-6">
											<div class="form-group">
												<label>Phone Number</label>
												<input type="text" class="form-control"  v-model.trim="$v.phone.$model">
											</div>
                                            <div v-if="submitted && !$v.phone.required" class="invalid-feedback">Gender is required</div>
										</div>
									</div>
									<div class="submit-section">
										<button class="btn btn-primary submit-btn">Submit</button>
									</div>
								</form>
							</div>
						</div>
				</v-dialog>
				<!-- /Profile Modal -->
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
		  modalDialog: this.dialog,
		  employee: null,
          firstName: this.model.firstName,
          lastName: this.model.lastName,
          birthday: this.model.birthday,
          gender: this.model.gender,
          address: this.model.address,
          phone: this.model.phone,
          message: '',
          error: '',
          submitted: false
      }
    },

    validations: {
        firstName: { required },
        lastName: { required },
        phone: { required },
        birthday: { required },
        address: { required },
        gender: { required }
    },
    mounted() {
		this.$emit('update:employee', this.employee);
		this.$emit('update:profileDialog', this.dialog);
		if ($('.datetimepicker').length > 0) {
				$('.datetimepicker').datetimepicker({
					format: 'DD/MM/YYYY',
					icons: {
						up: "fa fa-angle-up",
						down: "fa fa-angle-down",
						next: 'fa fa-angle-right',
						previous: 'fa fa-angle-left'
					}
				});
			}
    },
    methods: {

		putProfileInfo() {
			this.submitted = true;
            // stop here if form is invalid
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            }
			employeeService.updateEmployeeProfileInfo(this.model.id, this.firstName, this.lastName, this.phone, this.birthday, this.gender, this.address)
                this.message = 'Profile Info update successfully!';
				employeeService.getEmployeeDetail(this.model.id)
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