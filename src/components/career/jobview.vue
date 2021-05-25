<template>
	<div class="jobview">
		<div class="main-wrapper">
			<layout-headerApp></layout-headerApp>

			<body>
				<!-- Page Wrapper -->
				<div class="page-wrapper job-wrapper" style="background-color: #f7f7f7 !important;">

					<!-- Page Content -->
					<div class="content container">

						<!-- Page Header -->
						<div class="page-header">
							<div class="row align-items-center">
								<div class="col">
									<h3 class="page-title">Jobs</h3>
									<ul class="breadcrumb">
										<li class="breadcrumb-item">
											<router-link to="/index">Dashboard</router-link>
										</li>
										<li class="breadcrumb-item active">Jobs</li>
									</ul>
								</div>
							</div>
						</div>
						<!-- /Page Header -->

						<div class="row">
							<div class="col-md-8">
								<div class="job-info job-widget">
									<h3 class="job-title">{{vacancy.jobProfile.title}}</h3>
									<!-- <span class="job-dept">{{App Development}}</span> -->
									<ul class="job-post-det">
										<li><i class="fa fa-calendar"></i> Post Date: <span class="text-blue">{{new Date(vacancy.periodFrom).toDateString()}}</span></li>
										<li><i class="fa fa-calendar"></i> Last Date: <span class="text-blue">{{new Date(vacancy.periodTo).toDateString()}}</span></li>
										<!-- <li><i class="fa fa-user-o"></i> Applications: <span class="text-blue">4</span>
										</li>
										<li><i class="fa fa-eye"></i> Views: <span class="text-blue">3806</span></li> -->
									</ul>
								</div>
								<div class="job-content job-widget">
									<div class="job-desc-title">
										<h4>Job Summary</h4>
									</div>
									<div class="job-description">
										<p>{{vacancy.description}}
										</p>
									</div>
									<div class="job-desc-title">
										<h4>Job Description</h4>
									</div>
									<div class="job-description" v-html="vacancy.jobRequisition.duties">
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="job-det-info job-widget">
									<a class="btn job-btn" href="#" data-toggle="modal" data-target="#apply_job">Apply
										For This Job</a>
									<div class="info-list">
										<span><i class="fa fa-bar-chart"></i></span>
										<h5>Job Type</h5>
										<p> {{vacancy.type}}</p>
									</div>
									<div class="info-list">
										<span><i class="fa fa-money"></i></span>
										<h5>Salary</h5>
										<p>₦{{vacancy.jobProfile.salaryMin.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}} - ₦{{vacancy.jobProfile.salaryMax.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}}</p>
									</div>
									<div class="info-list">
										<span><i class="fa fa-suitcase"></i></span>
										<h5>Experience</h5>
										<p>{{vacancy.jobProfile.experience}}</p>
									</div>
									<div class="info-list">
										<span><i class="fa fa-ticket"></i></span>
										<h5>Vacancy</h5>
										<p>{{vacancy.quantity}}</p>
									</div>
									
									<div class="info-list text-center">
										<a class="app-ends" href="#">Application ends in {{getDays(vacancy.periodTo)}}</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- /Page Content -->

					<!-- Apply Job Modal -->
					<div class="modal custom-modal fade" id="apply_job" role="dialog">
						<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title">Add Your Details</h5>
									<button type="button" class="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">
									<div class="row">
                      <div class="col-md-12">
                        <div
                          class="alert alert-danger alert-dismissible fade show"
                          role="alert"
                          v-if="error"
                        >
                          <strong>Error!</strong> {{ error }}
                          <button
                            type="button"
                            class="close"
                            data-dismiss="alert"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div
                          class="alert alert-success alert-dismissible fade show"
                          role="alert"
                          v-if="message"
                        >
                          <strong>Success!</strong> {{ message }}
                          <button
                            type="button"
                            class="close"
                            data-dismiss="alert"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                      </div>
                    </div>
									<form @submit.prevent="applyJob">
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="form-group">
                            <label class="col-form-label">Firstname 
                              <span class="text-danger">*</span>
                            </label>
                            <input class="form-control" type="text" v-model="firstName">
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <label class="col-form-label">Lastname 
                              <span class="text-danger">*</span>
                            </label>
                            <input class="form-control" type="text" v-model="lastName">
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <label class="col-form-label">Salutation 
                              <span class="text-danger">*</span>
                            </label>
                            <input class="form-control" type="text" v-model="salutation">
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <label class="col-form-label">Gender
                              <span class="text-danger">*</span>
                            </label>
                            <input class="form-control" type="text" v-model="gender">
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <label class="col-form-label">Phone1
                              <span class="text-danger">*</span>
                            </label>
                            <input class="form-control" type="text" v-model="phone1">
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <label class="col-form-label">Phone2
                              <span class="text-danger">*</span>
                            </label>
                            <input class="form-control" type="text" v-model="phone2">
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <label class="col-form-label">Email
                              <span class="text-danger">*</span>
                            </label>
                            <input class="form-control" type="text" v-model="email">
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <label class="col-form-label">Address
                              <span class="text-danger">*</span>
                            </label>
                            <input class="form-control" type="text" v-model="address">
                          </div>
                        </div>
                        <div class="col-sm-12">
                          <div class="form-group">
                          <label>Upload your CV</label>
                          <div class="custom-file" v-if="!fileName">
                            <input type="file" class="custom-file-input" id="cv_upload" @change="onFilePicked">
                            <label class="custom-file-label" for="cv_upload">Choose file</label>
                          </div>
						  <div class="row" v-if="fileName">
							  <div class="col-md-6"><span>{{fileName}}</span></div>
							  <div class="col-md-6"><a class="btn btn-primary" @click="changeFile">Change File</a></div>
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
					<!-- /Apply Job Modal -->

				</div>
				<!-- /Page Wrapper -->
			</body>
		</div>
	</div>
</template>

<script>
	import LayoutHeaderApp from '@/components/layouts/HeaderApp.vue'
	import { jobService } from '@/services/jobService';
	export default {
		components: {
			LayoutHeaderApp,
		},
		data() {
            return {
                vacancy: {
					jobProfile: {
						salaryMin: '',
						salaryMax: ''
					},
					jobRequisition: {}
				},
				firstName: '',
				lastName: '',
				salutation: '',
				gender: '',
				phone1: '',
				phone2: '',
				email: '',
				address: '',
				file: {},
				fileName: null,
				message: '',
				error: ''
            }
        },
		methods: {
			onFilePicked(event) {
      			const files = event.target.files
      			this.filename = files[0].name
				  console.log(this.filename)
      			const fileReader = new FileReader()
      			fileReader.addEventListener('load', () => {
        			this.file = fileReader.result
      			})
      			fileReader.readAsDataURL(files[0])
      			this.file = files[0];
			},

			changeFile(){
				this.file = {}
				this.fileName = ''
			},

			getVacancy() {
        		jobService.getVancancyById(this.$route.params.id)
        			.then(
          				p => {
            			this.vacancy = p
          				}
        			)
			},

			applyJob(){
				jobService.applyJob(this.$route.params.id, this.vacancy.jobProfile.companyId, this.firstName, this.lastName,
				 this.salutation, this.gender, this.phone1, this.phone2, this.email, this.address, this.file)
        			.then(
          				p => {
            			//this.vacancy = p
          				}
        			)
			},
			getDays(end) {
            	// To set two dates to two variables 
            	var date1 = new Date(); 
            	var date2 = new Date(end); 
  
            	// To calculate the time difference of two dates 
            	var Difference_In_Time = date2.getTime() - date1.getTime(); 
  
            	// To calculate the no. of days between two dates 
            	var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
            	return parseInt(Difference_In_Days);
      		}
		},
		mounted() {
			this.getVacancy()
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
		name: 'jobview'
	}
</script>