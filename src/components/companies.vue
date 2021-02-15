<template>
  <div class="vacancies">
    <div class="main-wrapper">
      <layout-header></layout-header>
      <layout-sidebar></layout-sidebar>
      <!-- Page Wrapper -->
      <div class="page-wrapper">
        <!-- Page Content -->
        <div class="content container-fluid">
          <!-- Page Header -->
          <div class="page-header">
            <div class="row">
              <div class="col-sm-12">
                <h3 class="page-title">Welcome Admin!</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/index">Dashboard</router-link>
                  </li>
                  <li class="breadcrumb-item active">Timesheet</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- /Page Header -->

          <div class="row">
            <div class="col-lg-12 mx-auto">
                            <div class="card">
                                <div class="card-header">
                                    <div class="d-flex justify-content-between">
                                      <h4 class="card-title mb-0">Leave Type</h4>
                                      <div class="col-auto float-right ml-auto">
                                          <a href="#" class="btn add-btn" data-toggle="modal" data-target="#add_leave_type"><i
                                            class="fa fa-plus"></i>Add Leave Type</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-hover mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Leave Type</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Annual</td>
                                                    <td>
                                                      <div class="view-icons">
                                                        <a 
                                                          href="#" 
                                                          class="btn btn-link active" 
                                                          data-toggle="modal" 
                                                          data-target="#edit_leave_type"
                                                        >
                                                          <i class="fa fa-pencil m-r-5"></i>
                                                        </a>
                                                        <a 
                                                          href="#" 
                                                          class="btn btn-link active" 
                                                          data-toggle="modal" 
                                                          data-target="#delete_leave_type"
                                                        >
                                                          <i class="fa fa-trash-o m-r-5"></i>
                                                        </a>
                                                      </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Maternity</td>
                                                    <td>
                                                      <div class="view-icons">
                                                        <a 
                                                          href="#" 
                                                          class="btn btn-link active" 
                                                          data-toggle="modal" 
                                                          data-target="#edit_leave_type"
                                                        >
                                                          <i class="fa fa-pencil m-r-5"></i>
                                                        </a>
                                                        <a 
                                                          href="#" 
                                                          class="btn btn-link active" 
                                                          data-toggle="modal" 
                                                          data-target="#delete_leave_type"
                                                        >
                                                          <i class="fa fa-trash-o m-r-5"></i>
                                                        </a>
                                                      </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
          
          <!-- /Page Content -->
          <!-- Add Employee Modal -->
				<div id="add_leave_type" class="modal custom-modal fade" role="dialog">
					<div class="modal-dialog modal-dialog-centered modal-lg">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title">New Leave Type</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form>
									<div class="row">
										<div class="col-sm-12">
											<div class="form-group">
												<label class="col-form-label">Type Name <span
														class="text-danger">*</span></label>
												<input class="form-control" type="text">
											</div>
										</div>
									</div>
									<div class="submit-section">
										<button class="btn btn-primary submit-btn">Submit</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<!-- /Add Employee Modal -->

				<!-- Edit Employee Modal -->
				<div id="edit_leave_type" class="modal custom-modal fade" role="dialog">
					<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title">Edit Company</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form>
									<div class="row">
										<div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Company Name</label>
                        <input type="text" v-model.trim="$v.name.$model" id="name" name="name" class="form-control" :class="{ 'is-invalid': submitted && $v.name.$error }" />
                                <div v-if="submitted && !$v.name.required" class="invalid-feedback">Company Name is required</div>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Address</label>
                        <input type="text" v-model.trim="$v.address.$model" id="address" name="address" class="form-control" :class="{ 'is-invalid': submitted && $v.address.$error }" />
                                <div v-if="submitted && !$v.address.required" class="invalid-feedback">Address is required</div>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Contact Name</label>
                        <input type="text" v-model.trim="$v.contactPerson.$model" id="contactPerson" name="contactPerson" class="form-control" :class="{ 'is-invalid': submitted && $v.contactPerson.$error }" />
                                <div v-if="submitted && !$v.contactPerson.required" class="invalid-feedback">Contact Name is required</div>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Contact Phone Number</label>
                        <input type="text" v-model.trim="$v.phone.$model" id="phone" name="phone" class="form-control" :class="{ 'is-invalid': submitted && $v.phone.$error }" />
                                <div v-if="submitted && !$v.phone.required" class="invalid-feedback">Contact Number is required</div>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Contact Email</label>
                        <input type="email" v-model.trim="$v.email.$model" id="email" name="email" class="form-control" :class="{ 'is-invalid': submitted && $v.email.$error }" />
                                <div v-if="submitted && $v.email.$error" class="invalid-feedback">
                                    <span v-if="!$v.email.required">Email is required</span>
                                    <span v-if="!$v.email.email">Email is invalid</span>
                                </div>
                      </div>
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
				<!-- /Edit Employee Modal -->

				<!-- Delete Employee Modal -->
				<div class="modal custom-modal fade" id="delete_leave_type" role="dialog">
					<div class="modal-dialog modal-dialog-centered">
						<div class="modal-content">
							<div class="modal-body">
								<div class="form-header">
									<h3>Delete Company</h3>
									<p>Are you sure want to delete?</p>
								</div>
								<div class="modal-btn delete-action">
									<div class="row">
										<div class="col-6">
											<a href="javascript:void(0);"
												class="btn btn-primary continue-btn">Delete</a>
										</div>
										<div class="col-6">
											<a href="javascript:void(0);" data-dismiss="modal"
												class="btn btn-primary cancel-btn">Cancel</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- /Delete Employee Modal -->
          </div>
          <!-- /Page Content -->
        </div>
      </div>
      <!-- /Page Wrapper -->
    </div>
  </div>
</template>
<script>
import LayoutHeader from "@/components/layouts/Header.vue";
import LayoutSidebar from "@/components/layouts/orgAdminSidebar.vue";
import Vue from "vue";
export default {
  components: {
    LayoutHeader,
    LayoutSidebar
  },
  data(){
    return {
      companies: [],
      name: '',
      contactPerson: '',
      phone: '',
      email: '',
      address: ''
    }
  },
  mounted() {},
  methods: {},
  name: "companies"
};
</script>