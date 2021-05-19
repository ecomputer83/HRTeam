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
                <form @submit.prevent="onSubmit">
								<div class="card">
                  <div class="card-header">
                    <div class="d-flex justify-content-between">
                      <h4 class="card-title  mb-0">{{title}}</h4>
                    <div class="col-auto float-right ml-auto">
                      <button class="btn btn-primary submit-btn" type="submit" :disabled="loading">Save</button>
                    </div>
                    </div>
                  </div>
									<div class="card-body">
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
                                                    <td style="width: 20%">
                                                      <label for="name">Name</label>
                                                    </td>
                                                    <td style="width: 80%">
                                                      <input type="text" class="form-control" id="name" v-model.trim="$v.profile.title.$model" :class="{ 'is-invalid': submitted && $v.profile.title.$error }">
                                                    </td>
                                                </tr>
                                                <tr>
                                                  <td>
                                                      <label for="depart3">Professional Experience</label>
                                                    </td>
                                                    <td>
                                                      <input type="text" class="form-control" id="depart3" v-model.trim="$v.profile.experience.$model" :class="{ 'is-invalid': submitted && $v.profile.experience.$error }">
                                                    </td>
                                                </tr>
                                                <tr>
                                                  <td>
                                                      <label>Job level:</label>
                                                    </td>
                                                    <td>
                                                      <select class="form-control"  v-model.trim="$v.profile.rankId.$model" :class="{ 'is-invalid': submitted && $v.profile.rankId.$error }">
                                                                <option>-- Select --</option>
                                                                <option v-for="item in ranks" :key="item.id" :value="item.id">{{item.rankName}}</option>
                                                              </select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                  <td>
                                                      <label>Department:</label>
                                                    </td>
                                                    <td>
                                                      <select class="form-control" v-model.trim="$v.profile.departmentId.$model" :class="{ 'is-invalid': submitted && $v.profile.departmentId.$error }">
                                                                <option>-- Select --</option>
                                                                <option v-for="item in departments" :key="item.id" :value="item.id">{{item.name}}</option>
                                                              </select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                  <td>
                                                      <label for="qualif">Salary Min. </label>
                                                    </td>
                                                    <td>
                                                      <input type="text" class="form-control" id="qualif" v-model.trim="$v.profile.salaryMin.$model" :class="{ 'is-invalid': submitted && $v.profile.salaryMin.$error }">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                      <label for="qualif">Salary Max. </label>
                                                    </td>
                                                    <td>
                                                      <input type="text" class="form-control" id="qualif" v-model.trim="$v.profile.salaryMax.$model" :class="{ 'is-invalid': submitted && $v.profile.salaryMax.$error }">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                      <label for="qualif">Average Salary </label>
                                                    </td>
                                                    <td>
                                                      <input type="text" class="form-control" id="qualif" v-model.trim="$v.profile.averageSalary.$model" :class="{ 'is-invalid': submitted && $v.profile.averageSalary.$error }">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                      <label for="qualif">Qualification: </label>
                                                    </td>
                                                    <td>
                                                      <input type="text" class="form-control" id="qualif" v-model.trim="$v.profile.qualification.$model" :class="{ 'is-invalid': submitted && $v.profile.qualification.$error }">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                      <label class="qualif">Description</label>
                                                    </td>
                                                    <td>
                                                      <textarea rows="10" cols="10" class="form-control" placeholder="Enter text here" v-model.trim="$v.profile.description.$model" :class="{ 'is-invalid': submitted && $v.profile.description.$error }"></textarea>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                      <label class="qualif">Status</label>
                                                    </td>
                                                    <td>
                                                      <select class="select form-control" v-model="profile.status">
                                                                <option value="1" selected>Active</option>
                                                                <option value="0">Inactive</option>
                                                              </select>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                          </section>
                        <div class="col-lg-6">
                            <div class="card" v-if="this.$route.params.id">
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
                                                <tr v-for="model in skillLevels" v-bind:key="model.id">
                                                    <td>{{model.skill.name}}</td>
                                                    <td>{{model.skillGrade.name}}</td>
                                                    <td>{{model.skill.skillType.name}}</td>
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
                                    <label>Education Requirement:</label>
                                    <select class="select form-controlz" v-model.trim="$v.profile.educationRequirement.$model" :class="{ 'is-invalid': submitted && $v.profile.educationRequirement.$error }">
                                      <option>-- Select --</option>
                                      <option value="Applicant must possess exactly this degree">Applicant must possess exactly this degree</option>
                                      <option value="Applicant must possess at least this degree">Applicant must possess at least this degree</option>
                                    </select>
                                  </div>
                                  <div class="form-group">
                                    <label>Education Degree:</label>
                                    <select class="select form-controlz" v-model.trim="$v.profile.educationDegree.$model" :class="{ 'is-invalid': submitted && $v.profile.educationDegree.$error }">
                                      <option>-- Select --</option>
                                      <option value="Basic Education">Basic Education</option>
                                      <option value="High Education">High School</option>
                                      <option value="B.Sc">B.Sc</option>
                                      <option value="M.Sc">M.Sc</option>
                                      <option value="Phd">Phd</option>
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
                </form>
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
                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="poperror">
								                            <strong>Error!</strong> {{poperror}}
								                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
									                            <span aria-hidden="true">&times;</span>
								                            </button>
							                            </div>
                                                    </div>
                                                    <div class="col-md-12">
							                            <div class="alert alert-success alert-dismissible fade show" role="alert" v-if="popmessage">
								                            <strong>Success!</strong> {{popmessage}}
								                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
									                            <span aria-hidden="true">&times;</span>
								                            </button>
							                            </div>
                                                    </div>
                                                </div> 
								<form @submit.prevent="postSkillLevel">
									<div>
										<div class="col-sm-12">
											<div class="form-group">
												<label class="col-form-label">Job Profile <span
														class="text-danger">*</span></label>
												<input class="form-control" type="text" v-model="profile.title" readonly>
											</div>
										</div>
										<div class="col-sm-12">
											<div class="form-group">
												<label class="col-form-label">Skill</label>
                        <div class="d-flex">
                        <div class="col-md-11">
												  <select class="form-control" v-model="skillLevel.skillsId">
                      <!-- <option>Select SkillType</option> -->
                            <option
                              v-for="(item, index) in skills"
                              :key="index"
                              :value="item.id"
                              >
                                {{ item.name }}
                            </option>
                          </select>
                        </div>
                        <div class="col-md-1">
                          <button class="btn btn-primary" @click="gotoSkill" data-dismiss="modal" aria-label="Close">+</button>
                        </div>
											</div>
                      </div>
										</div>
										<div class="col-sm-12">
											<div class="form-group">
												<label class="col-form-label">Required Grade <span
														class="text-danger">*</span></label>
                          <div class="d-flex">
                          <div class="col-md-11">
													  <select class="form-control" v-model="skillLevel.skillGradeId">
                      <!-- <option>Select SkillType</option> -->
                              <option
                                v-for="(item, index) in skillGrades"
                                :key="index"
                                :value="item.id"
                              >
                                {{ item.name }}
                              </option>
                            </select>
                          </div>
                          <div class="col-md-1">
                          <button class="btn btn-primary" @click="gotoSkillGrade" data-dismiss="modal" aria-label="Close">+</button>
                        </div>
                        </div>
											</div>
										</div>
									<div class="submit-section">
										<button class="btn btn-primary submit-btn" type="submit">Submit</button>
									</div>
                  </div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<!-- /Add Skill Modal -->
    <!-- /Page Wrapper -->
  </div>
  </div>
</template>
<script>
  import LayoutHeader from '@/components/layouts/Header.vue'
  import LayoutSidebar from '@/components/layouts/Sidebar.vue'
  	import { required, sameAs } from 'vuelidate/lib/validators'
    import { authenticationService } from '@/services/authenticationService';
    import { organizationService } from '@/services/organizationService';
    import { jobService } from '@/services/jobService';
    import { skillsService } from '@/services/skillsService';
  import Vue from 'vue'
  export default {
    components: {
      LayoutHeader,
      LayoutSidebar,
    },
    data() {
      return {
        profileId: (this.$route.params.id) ? this.$route.params.id: 0,
        company: authenticationService.currentOfficeValue,
        title: (this.$route.params.id) ? '' : 'New Job Profile',
        profile: {
          id: 0,
          rankId: 0,
          departmentId: 0,
          title: "",
          experience: "",
          description: "",
          salaryMin: 0,
          salaryMax: 0,
          averageSalary: 0,
          qualification: "",
          educationRequirement: "",
          educationDegree: "",
          status: 0
        },
        ranks: [],
        professionId: 0,
        departments: [],
        skillLevel: {
          skillsId: 0,
          skillGradeId: 0,
        },
        skillLevels: [],
        skills: [],
        skillGrades: [],
        submitted: false,
        error: '',
        message: '',
        popmessage: '',
        poperror: '',
        loading: false
      }
    },
    validations: {
      profile: {
            rankId: { required },
            departmentId: { required },
            title: { required },
            experience: { required },
            description: { required },
            salaryMin: { required },
            salaryMax: { required },
            averageSalary: { required },
            qualification: { required },
            educationRequirement: { required },
            educationDegree: { required }
        }
    },
    mounted() {
      this.getProfile()
      this.getDepartments()
      this.getRanks()
      this.getSkills()
      this.getskillGrades()
      this.getSkillLevels()
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
      clearModel () {
        this.skillLevel = {
          skillsId: 0,
          skillGradeId: 0,
        }
        this.popmessage = ""
        this.poperror = ""
      },
      getDepartments () {
        organizationService.getDepartments()
          .then(
            model => { this.departments = model},
            error => { error = error }
          )
      },
      getRanks () {
      organizationService.getRanks()
                        .then(
                          o => {this.ranks = o}
                        )
      },

      getSkills() {
      skillsService.getSkills(this.company.id).then(
        (model) => {
          this.skills = model;
        },
        (error) => {
          error = error;
        }
      );
    },
    getskillGrades() {
      skillsService.getskillGrades(this.company.id).then(
        (model) => {
          this.skillGrades = model;
        },
        (error) => {
          error = error;
        }
      );
    },

    gotoSkill() {
      if(confirm("Are you sure you want to leave this page?")){
        this.$router.push('/skill');
      }
    },

    gotoSkillGrade() {
      if(confirm("Are you sure you want to leave this page?")){
        this.$router.push('/skill-grade');
      }
    },

      onSubmit() {
        this.submitted = true;
            console.log("onSubmit")
            if(!this.profile.educationRequirement){
              this.error = "Education requirement is required, Please click on Detail tab";
              return 
            }
            // stop here if form is invalid
            

            if(this.$route.params.id){

              jobService.updateJobProfile(this.profile.id, this.professionId, this.profile.rankId, this.profile.departmentId, this.profile.title, this.profile.experience,
                this.profile.description, parseInt(this.profile.salaryMin), parseInt(this.profile.salaryMax), parseInt(this.profile.averageSalary), this.profile.educationRequirement, this.profile.educationDegree, this.profile.status)
              .then ( m => {
                this.message = "Profile updated successfully"
              },
              error => { this.error = error})
            }else{
            
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            }
            
              jobService.addJobProfile(this.company.id, this.profile.rankId, this.profile.departmentId, this.profile.title, this.profile.experience,
                this.profile.description, parseInt(this.profile.salaryMin), parseInt(this.profile.salaryMax), parseInt(this.profile.averageSalary), this.profile.educationRequirement, this.profile.educationDegree)
              .then ( m => {
                return this.$router.push('/job-profile');
              },
              error => { this.error = error})

            }
      },

      getSkillLevels () {
        if(this.$route.params.id) {
          jobService.getJobSkillLevels(this.$route.params.id)
            .then( m => {
              this.skillLevels = m
            })
        }
      },

      postSkillLevel () {

        jobService.addJobSkillLevel(this.profile.id, this.skillLevel)
          .then ( s => {
              this.popmessage = "Profile updated successfully"
              this.clearModel();
              jobService.getJobSkillLevels(this.$route.params.id)
            .then( m => {
              this.skillLevels = m
            })
          },
          e => {this.poperror == e})
      },

      getProfile() {
        if(this.$route.params.id) {
          jobService.getJobProfile(this.$route.params.id)
            .then ( m => {
                
                if(m){
                  this.profile = m
                  jobService.getJobProfession(this.$route.params.id)
                  .then( p => {
                    this.title = p.title
                    this.professionId = p.id,
                    this.profile.educationRequirement = p.educationRequirement,
                    this.profile.educationDegree = p.educationDegree
                  })
                }
        })
        }else{
          console.log("No parameter in the router")
        }
      }
      
    },
    name: 'JobProfileInfo'
  }
</Script>