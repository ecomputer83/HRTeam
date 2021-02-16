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
                  <li class="breadcrumb-item active">Ranks</li>
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
                                      <h4 class="card-title mb-0">Ranks</h4>
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
								<form @submit.prevent="onSubmit">
									<div class="row">
										<div class="col-sm-12">
											<div class="form-group">
												<label class="col-form-label">Rank <span
														class="text-danger">*</span></label>
												<input class="form-control" type="text" v-model="rank">
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
													<th class="text-center">Delete</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>Holidays</td>
													<td class="text-center">
														<input v-model="readHoliday" checked="" type="checkbox">
													</td>
													<td class="text-center">
														<input v-model="writeHoliday" type="checkbox">
													</td>
													<td class="text-center">
														<input v-model="deleteHoliday" type="checkbox">
													</td>
												</tr>
												<tr>
													<td>Leaves</td>
													<td class="text-center">
														<input v-model="readLeaves" checked="" type="checkbox">
													</td>
													<td class="text-center">
														<input v-model="writeLeaves" checked="" type="checkbox">
													</td>
													<td class="text-center">
														<input v-model="deleteLeaves" type="checkbox">
													</td>
												</tr>
												<tr>
													<td>Assets</td>
													<td class="text-center">
														<input v-model="readAssets" checked="" type="checkbox">
													</td>
													<td class="text-center">
														<input v-model="writeAssets" checked="" type="checkbox">
													</td>
													<td class="text-center">
														<input v-model="deleteAssets" checked="" type="checkbox">
													</td>
												</tr>
												<tr>
													<td>Timing Sheets</td>
													<td class="text-center">
														<input v-model="readTimingSheets" checked="" type="checkbox">
													</td>
													<td class="text-center">
														<input v-model="writeTimingSheets" checked="" type="checkbox">
													</td>
													<td class="text-center">
														<input v-model="deleteTimingSheets" checked="" type="checkbox">
													</td>
												</tr>
											</tbody>
										</table>
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
          <!-- /Page Content -->
        </div>
      </div>
      <!-- /Page Wrapper -->
    
  </div>
</template>
<script>
import LayoutHeader from "@/components/layouts/Header.vue";
import LayoutSidebar from "@/components/layouts/orgAdminSidebar.vue";
import {organizationService} from '@/services/organizationService'
import { required } from 'vuelidate/lib/validators'
import Vue from "vue";
export default {
  components: {
    LayoutHeader,
    LayoutSidebar
  },
  mounted() {
    this.getRanks()
  },
  data() {
    return {
      rank: "",
      ranks: [],
      readHoliday: false,
      writeHoliday: false,
      deleteHoliday: false,
      readLeaves: false,
      writeLeaves: false,
      deleteLeaves: false,
      readAssets: false,
      writeAssets: false,
      deleteAssets: false,
      readTimingSheets: false,
      writeTimingSheets: false,
      deleteTimingSheets: false,
      loading: false,
      submitted: false
    };
  },
  validations: {
      rankName: { required }
    },
  methods: {
    getRanks () {
      organizationService.getRanks()
                        .then(
                          o => {ranks = o}
                        )
    },
    handleNewRank() {
      const newRank = {
        rank: this.rank,
        readHoliday: this.readHoliday,
        writeHoliday: this.writeHoliday,
        createHoliday: this.createHoliday,
        deleteHoliday: this.deleteHoliday,
        readLeaves: this.readLeaves,
        writeLeaves: this.writeLeaves,
        createLeaves: this.createLeaves,
        deleteLeaves: this.deleteLeaves,
        readAssets: this.readAssets,
        writeAssets: this.writeAssets,
        createAssets: this.createAssets,
        deleteAssets: this.deleteAssets,
        readTimingSheets: this.readTimingSheets,
        writeTimingSheets: this.writeTimingSheets,
        createTimingSheets: this.createTimingSheets,
        deleteTimingSheets: this.deleteTimingSheets
      }
      console.log(newRank);
    },
    onSubmit () {
            this.submitted = true;
            console.log('new rank added');

            // stop here if form is invalid
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            }

            this.loading = true;
            organizationService.addRank(this.rank,  this.readHoliday, this.writeHoliday, this.deleteHoliday, 
                                        this.readLeaves, this.writeLeaves, this.deleteLeaves, 
                                        this.readAssets, this.writeAssets, this.deleleAssets, 
                                          this.readTimingSheets, this.writeTimingSheets, this.deleteTimingSheets )
                .then(
                    id => {
                      organizationService.getRanks()
                        .then(
                          o => {ranks = o}
                        )
					},
                    error => {
                        this.error = error;
                        this.loading = false;
                    }
                );
        }
  },
  name: "ranks"
};
</script>