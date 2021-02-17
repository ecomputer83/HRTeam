<template>
  <div class="vacancies">
    <div class="main-wrapper">
      <layout-header></layout-header>
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
                  <li class="breadcrumb-item active">Rank</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- /Page Header -->

          <div class="col-lg-6 mx-auto">
                            <div class="card">
                                <div class="card-header">
                                    <div class="d-flex justify-content-between">
                                      <h4 class="card-title mb-0">Rank</h4>
                                      <div class="col-auto float-right ml-auto">
                                          <a href="#" class="btn add-btn" data-toggle="modal" data-target="#add_leave_type"><i
                                            class="fa fa-plus"></i>New Rank</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-hover mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Rank</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Junior</td>
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
                                                    <td>Senior</td>
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
								<h5 class="modal-title">Add Rank</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form @submit.prevent="handleNewRank">
									<div class="row">
										<!-- <div class="col-sm-12">
											<div class="form-group">
												<label class="col-form-label">Rank <span
														class="text-danger">*</span></label>
												<input 
                          id="rank"
                          type="text"
                          class="form-control"
                          name="rank"
                          v-model="rank"
                        />
											</div>
										</div> -->
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Rank</label>
                        <input type="text" v-model.trim="$v.rank.$model" id="rank" v-model="rank" name="rank" class="form-control" :class="{ 'is-invalid': submitted && $v.rank.$error }" />
                                <div v-if="submitted && !$v.rank.required" class="invalid-feedback">Rank is required</div>
                      </div>
                    </div>
									</div>
                  <div class="table-responsive m-t-15">
										<table class="table table-striped custom-table">
											<thead>
												<tr>
													<th>Module Permission</th>
													<th class="text-center">Read</th>
													<th class="text-center">Write</th>
													<th class="text-center">Create</th>
													<th class="text-center">Delete</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>Holidays</td>
													<td class="text-center">
														<input checked="" type="checkbox">
													</td>
													<td class="text-center">
														<input type="checkbox">
													</td>
													<td class="text-center">
														<input type="checkbox">
													</td>
													<td class="text-center">
														<input type="checkbox">
													</td>
												</tr>
												<tr>
													<td>Leaves</td>
													<td class="text-center">
														<input checked="" type="checkbox">
													</td>
													<td class="text-center">
														<input checked="" type="checkbox">
													</td>
													<td class="text-center">
														<input checked="" type="checkbox">
													</td>
													<td class="text-center">
														<input type="checkbox">
													</td>
												</tr>
												<tr>
													<td>Assets</td>
													<td class="text-center">
														<input checked="" type="checkbox">
													</td>
													<td class="text-center">
														<input checked="" type="checkbox">
													</td>
													<td class="text-center">
														<input checked="" type="checkbox">
													</td>
													<td class="text-center">
														<input checked="" type="checkbox">
													</td>
												</tr>
												<tr>
													<td>Timing Sheets</td>
													<td class="text-center">
														<input checked="" type="checkbox">
													</td>
													<td class="text-center">
														<input checked="" type="checkbox">
													</td>
													<td class="text-center">
														<input checked="" type="checkbox">
													</td>
													<td class="text-center">
														<input checked="" type="checkbox">
													</td>
												</tr>
											</tbody>
										</table>
									</div>
									<div class="submit-section">
										<button type="submit" class="btn btn-primary submit-btn">Submit</button>
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
								<h5 class="modal-title">Edit Rank</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form>
									<div class="row">
										<div class="col-sm-12">
											<div class="form-group">
												<label class="col-form-label">Rank <span
														class="text-danger">*</span></label>
												<input class="form-control" value="Junior" type="text">
											</div>
										</div>
									</div>
                  <div class="table-responsive m-t-15">
										<table class="table table-striped custom-table">
											<thead>
												<tr>
													<th>Module Permission</th>
													<th class="text-center">Read</th>
													<th class="text-center">Write</th>
													<th class="text-center">Create</th>
													<th class="text-center">Delete</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>Holidays</td>
													<td class="text-center">
														<input checked="" type="checkbox">
													</td>
													<td class="text-center">
														<input type="checkbox">
													</td>
													<td class="text-center">
														<input type="checkbox">
													</td>
													<td class="text-center">
														<input type="checkbox">
													</td>
												</tr>
												<tr>
													<td>Leaves</td>
													<td class="text-center">
														<input checked="" type="checkbox">
													</td>
													<td class="text-center">
														<input checked="" type="checkbox">
													</td>
													<td class="text-center">
														<input checked="" type="checkbox">
													</td>
													<td class="text-center">
														<input type="checkbox">
													</td>
												</tr>
												<tr>
													<td>Assets</td>
													<td class="text-center">
														<input checked="" type="checkbox">
													</td>
													<td class="text-center">
														<input checked="" type="checkbox">
													</td>
													<td class="text-center">
														<input checked="" type="checkbox">
													</td>
													<td class="text-center">
														<input checked="" type="checkbox">
													</td>
												</tr>
												<tr>
													<td>Timing Sheets</td>
													<td class="text-center">
														<input checked="" type="checkbox">
													</td>
													<td class="text-center">
														<input checked="" type="checkbox">
													</td>
													<td class="text-center">
														<input checked="" type="checkbox">
													</td>
													<td class="text-center">
														<input checked="" type="checkbox">
													</td>
												</tr>
											</tbody>
										</table>
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
				<div class="modal custom-modal fade" id="delete_rank" role="dialog">
					<div class="modal-dialog modal-dialog-centered">
						<div class="modal-content">
							<div class="modal-body">
								<div class="form-header">
									<h3>Delete Rank</h3>
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
      </div>
      <!-- /Page Wrapper -->
    </div>
  </div>
</template>
<script>
import LayoutHeader from "@/components/layouts/Header.vue";
export default {
  components: {
    LayoutHeader,
  },
  data() {
    return {
      rank: "",
      holidays: false,
      leaves: false,
      assets: false,
      timingSheets: false
    };
  },
  methods: {
    handleNewRank() {
      console.log(this.rank);
    }
  },
  name: "rank",
};
</script>
