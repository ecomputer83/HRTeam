<template>
  <div class="jobprofileinfo">
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
                <ul class="breadcrumb">
                  <li class="breadcrumb-item active">Job Profile</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- /Page Header -->

          <div class="row">
            <div class="col-md-12">
              
								<div class="card">
                  <div class="card-header">
                    <div class="d-flex justify-content-between">
                      <h4 class="card-title  mb-0">Account Manager</h4>
                    <div class="col-auto float-right ml-auto">
                      <button class="btn btn-dark submit-btn" v-on:click="handleCreateOrg">Cancel</button>
                      <button class="btn btn-primary submit-btn" type="submit" :disabled="loading">Submit</button>
                    </div>
                    </div>
                  </div>
									<div class="card-body">
										
										<ul class="nav nav-tabs nav-tabs-bottom nav-justified col-md-6">
											<li class="nav-item"><a class="nav-link active" href="#basictab1" data-toggle="tab">Summary</a></li>
											<li class="nav-item"><a class="nav-link" href="#basictab2" data-toggle="tab">Details</a></li>
										</ul>
										<div class="tab-content">
											<div class="tab-pane show active" id="basictab1">
                        <div class="row">
                          <section class="review-section information col-md-6">
                            <div class="card-header">
                              <h4 class="card-title mb-0">General</h4>
                            </div>
                            <div class="row">
                                <div class="col-md-12 col-sm-12">
                                    <div class="datatable table mb-0 col-xs-12 col-md-12 p-0 pr-sm-3">
                                        <table class="w-100">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                      <label for="name">Name</label>
                                                    </td>
                                                    <td>
                                                      <input type="text" class="form-control" id="name">
                                                    </td>
                                                </tr>
                                                <tr>
                                                  <td>
                                                      <label for="depart3">Professional Experience</label>
                                                    </td>
                                                    <td>
                                                      <input type="text" class="form-control" id="depart3">
                                                    </td>
                                                </tr>
                                                <tr>
                                                  <td>
                                                      <label>Job level:</label>
                                                    </td>
                                                    <td>
                                                      <select class="select form-control">
                                                                <option>-- Select --</option>
                                                                <option value="1">Student/Intern</option>
                                                                <option value="2">Entry Level</option>
                                                                <option value="3">Professional</option>
                                                                <option value="4">Specialist</option>
                                                                <option value="5">Team Leader</option>
                                                              </select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                  <td>
                                                      <label>Department:</label>
                                                    </td>
                                                    <td>
                                                      <select class="select form-control">
                                                                <option>-- Select --</option>
                                                                <option value="1">Administration</option>
                                                                <option value="2">Audit and Finance</option>
                                                                <option value="3">Security</option>
                                                                <option value="4">Medical</option>
                                                                <option value="5">Works</option>
                                                              </select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                  <td>
                                                      <label for="qualif">Salary Min. </label>
                                                    </td>
                                                    <td>
                                                      <input type="text" class="form-control" id="qualif">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                      <label for="qualif">Salary Max. </label>
                                                    </td>
                                                    <td>
                                                      <input type="text" class="form-control" id="qualif">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                      <label for="qualif">Average Salary </label>
                                                    </td>
                                                    <td>
                                                      <input type="text" class="form-control" id="qualif">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                      <label for="qualif">Qualification: </label>
                                                    </td>
                                                    <td>
                                                      <input type="text" class="form-control" id="qualif">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                      <label class="qualif">Description</label>
                                                    </td>
                                                    <td>
                                                      <textarea rows="10" cols="10" class="form-control" placeholder="Enter text here"></textarea>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                          </section>
                        <div class="col-lg-6">
                            <div class="card">
                                <div class="card-header">
                                    <div class="d-flex justify-content-between">
                                      <h4 class="card-title mb-0">Skill Level</h4>
                                      <div class="col-auto float-right ml-auto">
                                          <a href="#" class="btn add-btn" data-toggle="modal" data-target="#add_skill"><i
                                            class="fa fa-plus"></i>New Skill Level</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-hover mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Skill</th>
                                                    <th>Required Grade</th>
                                                    <th>Type</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Business English</td>
                                                    <td>C1 - Advanced</td>
                                                    <td>Language Skill</td>
                                                </tr>
                                                <tr>
                                                    <td>Miller-Hillman method</td>
                                                    <td>Handling Complexicity, Business Developer</td>
                                                    <td>Professional Skill</td>
                                                </tr>
                                                <tr>
                                                    <td>Object Handling</td>
                                                    <td>Dooley</td>
                                                    <td>july@example.com</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        </div>
											</div>
											<div class="tab-pane" id="basictab2">
												<div class="row">
                        <div class="col-md-12">
                          <div class="card">
                            <div class="card-header">
                              <h4 class="card-title mb-0">Professional Details</h4>
                            </div>
                            <div class="card-body">
                              <form action="#">
                                <div class="form-group">
                                  <label>Salary</label>
                                  <input type="text" class="form-control">
                                </div>
                                  
                                  <div class="form-group">
                                    <label>Education Requirement:</label>
                                    <select class="select form-control">
                                      <option>-- Select --</option>
                                      <option value="1">Applicant must possess exactly this degree</option>
                                      <option value="2">Applicant must possess at least this degree</option>
                                    </select>
                                  </div>
                                  <div class="form-group">
                                    <label>Education Degree:</label>
                                    <select class="select form-control">
                                      <option>-- Select --</option>
                                      <option value="1">Applicant must possess exactly this degree</option>
                                      <option value="2">Applicant must possess at least this degree</option>
                                    </select>
                                  </div>
                                  <div class="form-group">
                                    <label>Professional Degree:</label>
                                    <select class="select form-control">
                                      <option>-- Select --</option>
                                      <option value="1">Applicant must possess exactly this degree</option>
                                      <option value="2">Applicant must possess at least this degree</option>
                                    </select>
                                  </div>
                                  
                              </form>
                            </div>
                          </div>
                        </div>
                        </div>
											</div>
										</div>
									</div>
								</div>
							</div>
          </div>
        <!-- /Page Content -->
      </div>
    </div>
    <!-- Add Skill Modal -->
				<div id="add_skill" class="modal custom-modal fade" role="dialog">
					<div class="modal-dialog modal-dialog-centered modal-lg">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title">New SKill</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form>
									<div>
										<div class="col-sm-12">
											<div class="form-group">
												<label class="col-form-label">Job Profile <span
														class="text-danger">*</span></label>
												<input class="form-control" type="text">
											</div>
										</div>
										<div class="col-sm-12">
											<div class="form-group">
												<label class="col-form-label">Skill</label>
												<input class="form-control" type="text">
											</div>
										</div>
										<div class="col-sm-12">
											<div class="form-group">
												<label class="col-form-label">Required Grade <span
														class="text-danger">*</span></label>
												<input class="form-control" type="text">
											</div>
										</div>
									<div class="submit-section">
										<button class="btn btn-primary submit-btn">Submit</button>
									</div>
                  </div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<!-- /Add Skill Modal -->
        <!-- Add Vacancy Modal -->
				<div id="add_vacancy" class="modal custom-modal fade" role="dialog">
					<div class="modal-dialog modal-dialog-centered modal-lg">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title">New Vacancy</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form>
									<div>
										<div class="col-sm-12">
											<div class="form-group">
												<label class="col-form-label">Job Profile <span
														class="text-danger">*</span></label>
												<input class="form-control" type="text">
											</div>
										</div>
										<div class="col-sm-12">
											<div class="form-group">
												<label class="col-form-label">Skill</label>
												<input class="form-control" type="text">
											</div>
										</div>
										<div class="col-sm-12">
											<div class="form-group">
												<label class="col-form-label">Required Grade <span
														class="text-danger">*</span></label>
												<input class="form-control" type="text">
											</div>
										</div>
									<div class="submit-section">
										<button class="btn btn-primary submit-btn">Submit</button>
									</div>
                  </div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<!-- /Add Vacancy Modal -->
    <!-- /Page Wrapper -->
  </div>
  </div>
</template>
<script>
  import LayoutHeader from '@/components/layouts/Header.vue'
  import LayoutSidebar from '@/components/layouts/Sidebar.vue'
  	import { required, sameAs } from 'vuelidate/lib/validators'
  import Vue from 'vue'
  export default {
    components: {
      LayoutHeader,
      LayoutSidebar,
    },
    data() {
      return {
        profileId: 0,
        profile: {
          companyId: 0,
          rankId: 0,
          departmentId: 0,
          title: "",
          experience: "",
          description: "",
          salaryMin: 0,
          salaryMax: 0,
          averageSalary: 0
        },

        skillLevel: {
          skillId: 0,
          skillGradeId: 0,
        }

      }
    },
    mounted() {
      // Date Time Picker

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
    },
    name: 'JobProfileInfo'
  }
</Script>