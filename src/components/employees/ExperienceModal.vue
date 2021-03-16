<template>
    <!-- Experience Modal -->
				<v-dialog v-model="modalDialog" max-width="725px">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title">Experience Informations</h5>
								<button type="button" class="close" @click="method(employee)">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form @submit.prevent="postExperience">
									<div class="form-scroll">
										<div class="card">
											<div class="card-body">
												<h3 class="card-title">Experience Informations <a
														@click="removeExperience" class="delete-icon" v-if="model.id"><i
															class="fa fa-trash-o"></i></a></h3>
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
														<div class="form-group form-focus">
															<input type="text"  v-model.trim="$v.companyName.$model" class="form-control floating" style="height: 55px !important;">
															<label class="focus-label">Company Name</label>
														</div>
                                                        <div v-if="submitted && !$v.companyName.required" class="invalid-feedback">Company Name is required</div>
													</div>
													<div class="col-md-6">
														<div class="form-group form-focus">
															<input type="text"  v-model.trim="$v.position.$model" class="form-control floating" style="height: 55px !important;">
															<label class="focus-label">Job Position</label>
														</div>
                                                        <div v-if="submitted && !$v.position.required" class="invalid-feedback">Position is required</div>
													</div>
													<div class="col-md-6">
														<div class="form-group form-focus">
															<div class="cal-icon">
																<input type="text"  v-model.trim="$v.startYear.$model"
																	class="form-control floating datetimepicker" style="height: 55px !important;"
																	value="01/07/2007">
															</div>
															<label class="focus-label">Period From</label>
														</div>
                                                        <div v-if="submitted && !$v.startYear.required" class="invalid-feedback">Period From is required</div>
													</div>
													<div class="col-md-6">
														<div class="form-group form-focus">
															<div class="cal-icon">
																<input type="text"  v-model.trim="$v.endYear.$model"
																	class="form-control floating datetimepicker" style="height: 55px !important;"
																	value="08/06/2018">
															</div>
															<label class="focus-label">Period To</label>
														</div>
                                                        <div v-if="submitted && !$v.endYear.required" class="invalid-feedback">Period To is required</div>
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
				<!-- /Experience Modal -->
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
          companyName: (this.model) ? '' : this.model.companyName,
          position: (this.model) ? '' : this.model.position,
          startYear: (this.model) ? '' : this.model.startYear,
          endYear: (this.model) ? '' : this.modal.endYear,
          error: '',
          message: '',
          submitted: false
      }
    },

    validations: {
        companyName: { required },
        position: { required },
        startYear: { required },
        endYear: { required }
    },
    mounted() {
		this.$emit('update:employee', this.employee);
		this.$emit('update:experienceDialog', this.dialog);
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
        if ($('.floating').length > 0) {
				$('.floating').on('focus blur', function (e) {
					$(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
				}).trigger('blur');
			}
    },
    methods: {
		
        postExperience() {
            this.submitted = true;
            console.log(this.Id)
            // stop here if form is invalid
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            }
            if(this.model.id){

                employeeService.updateEmployeeExperience(this.model.id, this.employeeId, this.companyName, this.position, this.startYear, this.endYear)
                .then(model => { this.message = 'Experience update successfully!'
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
				},
                error => { this.error = error })
				},
                    error => { this.error = error})
            }else{
                employeeService.addEmployeeExperience(this.employeeId, this.companyName, this.position, this.startYear, this.endYear)
                .then(model => { this.message = 'Experience create successfully!'
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
				},
                error => { this.error = error })},
                    error => { this.error = error})
            }
        },

        removeExperience() {
            if(this.model.id){
              employeeService.removeEmployeeExperience(this.model.id)
              .then(
                  id => {
                      this.companyName = '',
                      this.position = '',
                      this.startYear = '',
                      this.endYear = '',
                      this.message = 'Experience removed successfully!'
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