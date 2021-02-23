<template>
    <!-- Family Info Modal -->
				<div id="bank_info_modal" class="modal custom-modal fade" role="dialog">
					<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title"> Bank Informations</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
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
															<input class="form-control"  v-model.trim="$v.bankName.$model" type="text">
														</div>
                                                        <div v-if="submitted && !$v.bankName.required" class="invalid-feedback">Bank is required</div>
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
					</div>
				</div>
				<!-- /Family Info Modal -->
</template>


<script>
import { required, sameAs } from 'vuelidate/lib/validators';
import { employeeService } from '@/services/employeeService';
  export default {
    props: {
        model: {},
        id: 0
    },
    data() {
      return {
          employeeId: this.id,
          bankAccountNumber: (this.model) ? this.model.bankAccountNumber : '',
          bankName: (this.model) ? this.model.bankName : '',
          error: '',
          message: '',
          submitted: false
      }
    },
    validations: {
        bankAccountNumber: { required },
        bankName: { required }
    },
    mounted() {

    },
    methods: {
        postBank() {
            this.submitted = true;
            console.log(this.Id)
            // stop here if form is invalid
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            }
            if(this.model){

                employeeService.updateEmployeeBank(this.model.id, this.employeeId, this.bankAccountNumber, this.bankName)
                .then(model => { this.message = 'Bank Info update successfully!'},
                    error => { this.error = error})
            }else{
                employeeService.addEmployeeBank(this.employeeId, this.bankAccountNumber, this.bankName)
                .then(model => { this.message = 'Bank Info create successfully!'},
                    error => { this.error = error})
            }
        },

        
    }
  }
</script>