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
            <div class="col-md-6">
								<div class="card">
									<div class="card-body">
										<h4 class="card-title">Account Manager</h4>
										<ul class="nav nav-tabs">
											<li class="nav-item"><a class="nav-link active" href="#basictab1" data-toggle="tab">Summary</a></li>
											<li class="nav-item"><a class="nav-link" href="#basictab2" data-toggle="tab">Details</a></li>
										</ul>
										<div class="tab-content">
											<div class="tab-pane show active" id="basictab1">
												<section class="review-section information">
                        <div class="card-header">
                          <h4 class="card-title mb-0">General</h4>
                        </div>
                        <div class="row">
                            <div class="col-md-12 col-sm-12">
                                <div class="table-responsive">
                                    <table class="table table-bordered table-nowrap review-table mb-0">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <form>
                                                        <div class="form-group">
                                                            <label for="name">Name</label>
                                                            <input type="text" class="form-control" id="name">
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="depart3">Professional Experience</label>
                                                            <input type="text" class="form-control" id="depart3">
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="departa">Job Level</label>
                                                            <input type="text" class="form-control" id="departa">
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="qualif">Department</label>
                                                            <input type="text" class="form-control" id="qualif">
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="qualif">Salary Min. </label>
                                                            <input type="text" class="form-control" id="qualif">
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="qualif">Salary Max. </label>
                                                            <input type="text" class="form-control" id="qualif">
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="qualif">Qualification: </label>
                                                            <input type="text" class="form-control" id="qualif">
                                                        </div>
                                                    </form>
                                                </td>
                                                
                                                
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>
											</div>
											<div class="tab-pane" id="basictab2">
												Tab content 2
											</div>
										</div>
									</div>
								</div>
							</div>
          </div>
        <!-- /Page Content -->
      </div>
    </div>
    <!-- /Page Wrapper -->
  </div>
  </div>
</template>
<script>
  import LayoutHeader from '@/components/layouts/Header.vue'
  import LayoutSidebar from '@/components/layouts/Sidebar.vue'
  import Vue from 'vue'
  export default {
    components: {
      LayoutHeader,
      LayoutSidebar,
    },
    mounted() {
      
    },
    methods: {
    },
    name: 'JobProfileInfo'
  }
</Script>