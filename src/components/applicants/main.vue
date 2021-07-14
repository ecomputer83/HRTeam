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
            <div class="row d-flex">
              <div class="col-sm-12">
                <ul class="breadcrumb">
                  <li class="breadcrumb-item active">Active Applicants</li>
                </ul>
              </div>
              <div class="col-auto float-right ml-auto">
                <a
                  @click="openDialog"
                  class="btn add-btn"
                  ><i class="fa fa-plus"></i> Apply Job</a
                >
              </div>
            </div>
          </div>
          <!-- /Page Header -->

          <div class="row">
            <div
              class="tab-pane show active col-md-12"
              id="solid-rounded-justified-tab1"
            >
              <div class="card">
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="datatable table table-stripped mb-0">
                      <thead>
                        <tr>
                          <th>Title</th>
                          <th>FirstName</th>
                          <th>LastName</th>
                          <th>Mobile Phone</th>
                          <th>Home Phone</th>
                          <th>Email Address</th>
                          <th>Gender</th>
                          <th>Address</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="applicant in applicants"
                          v-bind:key="applicant.id"
                        >
                          <td>{{ applicant.title }}</td>

                          <td
                            @click="setApplicantDetail(applicant)"
                          >{{ applicant.firstName }}</td>
                          <td>{{ applicant.lastName }}</td>
                          <td>{{ applicant.phone1 }}</td>
                          <td>{{ applicant.phone2 }}</td>
                          <td>{{ applicant.email }}</td>
                          <td>{{ applicant.gender }}</td>
                          <td>{{ applicant.address }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /Page Content -->

          <!-- Apply Job Modal -->
					<!-- <div id="add_policy" class="modal custom-modal fade" role="dialog">
              <div class="modal-dialog modal-dialog-centered" role="document"> -->
                <v-dialog v-model="dialog" max-width="725px">
							<div class="modal-content mt-5">
								<div class="modal-header">
									<h5 class="modal-title">Add Your Details</h5>
									<button 
                    type="button" 
                    class="close" 
                    @click="close"
                  >
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
                        <div class="col-sm-12">
                          <div class="form-group">
                            <label>Job <span class="text-danger">*</span></label>
                            <select 
                              id="vacancyId" 
                              name="vacancyId" 
                              class="form-control" 
                              v-model.trim="$v.vacancyId.$model"
                              :class="{ 'is-invalid': submitted && $v.gender.$error }"
                            >
                              <option>Select Job Vacancy</option>
                              <option v-for="item in vacancies" :key="item.id" :value="item.id">{{item.jobProfile.title}}</option>
                              <!-- <option>Casual Leave 12 Days</option> -->
                            </select>
                            <div
                              v-if="submitted && !$v.vacancyId.required"
                              class="invalid-feedback"
                            >
                              Job Vacancy is required
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <label class="col-form-label">Firstname 
                              <span class="text-danger">*</span>
                            </label>
                            <input 
                              type="text" 
                              id="firstName"
                              name="firstName"
                              class="form-control" 
                              v-model.trim="$v.firstName.$model"
                              :class="{ 'is-invalid': submitted && $v.firstName.$error }"
                            >
                            <div
                              v-if="submitted && !$v.firstName.required"
                              class="invalid-feedback"
                            >
                              First Name is required
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <label class="col-form-label">Lastname 
                              <span class="text-danger">*</span>
                            </label>
                            <input 
                              type="text" 
                              id="lastName"
                              name="lastName"
                              class="form-control" 
                              v-model.trim="$v.lastName.$model"
                              :class="{ 'is-invalid': submitted && $v.lastName.$error }"
                            />
                            <div
                              v-if="submitted && !$v.lastName.required"
                              class="invalid-feedback"
                            >
                              Last Name is required
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <label class="col-form-label">Title 
                              <span class="text-danger">*</span>
                            </label>
                              <input 
                                type="text" 
                                id="title"
                                name="title"
                                class="form-control" 
                                v-model.trim="$v.title.$model"
                                :class="{ 'is-invalid': submitted && $v.title.$error }"
                              />
                              <div
                                v-if="submitted && !$v.title.required"
                                class="invalid-feedback"
                              >
                                Title is required
                              </div>
                          </div>
                        </div>
                        <!-- <div class="col-sm-6">
                          <div class="form-group">
                            <label class="col-form-label">Gender
                              <span class="text-danger">*</span>
                            </label>
                            <input class="form-control" type="text" v-model="gender">
                          </div>
                        </div> -->
                        <div class="col-sm-6">
                          <div class="form-group">
                            <label class="col-form-label">Gender</label>
                              <select 
                                id="gender"
                                name="gender"
                                class="select form-control" 
                                v-model.trim="$v.gender.$model"
                                :class="{ 'is-invalid': submitted && $v.gender.$error }"
                              >
                                <option disabled>Select Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                              </select>
                              <div
                                v-if="submitted && !$v.gender.required"
                                class="invalid-feedback"
                              >
                                Gender is required
                              </div>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <label class="col-form-label">Phone1
                              <span class="text-danger">*</span>
                            </label>
                            <input 
                              type="text" 
                              id="phone1"
                              name="phone1"
                              class="form-control" 
                              v-model.trim="$v.phone1.$model"
                              :class="{ 'is-invalid': submitted && $v.phone1.$error }"
                            />
                            <div
                              v-if="submitted && !$v.phone1.required"
                              class="invalid-feedback"
                            >
                              Phone 1 is required
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <label class="col-form-label">Phone2
                              <span class="text-danger">*</span>
                            </label>
                            <input 
                              type="text" 
                              id="phone2"
                              name="phone2"
                              class="form-control" 
                              v-model.trim="$v.phone2.$model"
                              :class="{ 'is-invalid': submitted && $v.phone2.$error }"
                            />
                            <div
                              v-if="submitted && !$v.phone2.required"
                              class="invalid-feedback"
                            >
                              Phone 2 is required
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <label class="col-form-label">Email
                              <span class="text-danger">*</span>
                            </label>
                            <input 
                              type="email" 
                              id="email"
                              name="email"
                              class="form-control" 
                              v-model.trim="$v.email.$model"
                              :class="{ 'is-invalid': submitted && $v.email.$error }"
                            />
                            <div
                              v-if="submitted && !$v.email.required"
                              class="invalid-feedback"
                            >
                              Email is required
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <label class="col-form-label">Address
                              <span class="text-danger">*</span>
                            </label>
                            <input 
                              type="text" 
                              id="address"
                              name="address"
                              class="form-control" 
                              v-model.trim="$v.address.$model"
                              :class="{ 'is-invalid': submitted && $v.address.$error }"
                            />
                            <div
                              v-if="submitted && !$v.address.required"
                              class="invalid-feedback"
                            >
                              Address is required
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-12">
                          <div class="form-group">
                          <label>Upload your CV</label>
                          <div class="custom-file" v-if="!file">
                            <input type="file" class="custom-file-input" id="cv_upload" @change="onFilePicked">
                            <label class="custom-file-label" for="cv_upload">Choose file</label>
                          </div>
                          <div class="row" v-if="file">
                            <div class="col-md-6"><span>{{fileName}}</span></div>
                            <div class="col-md-6"><a class="btn btn-primary" @click="changeFile">Change File</a></div>
                          </div>
                        </div>
                        </div>                        
                      </div>
										<div class="submit-section">
											<button class="btn btn-primary submit-btn" @click.prevent="applyJob" type="submit">Submit</button>
										</div>
									</form>
								</div>
							</div>
                </v-dialog>
              <!-- </div>
          </div> -->
					
					
					<!-- /Apply Job Modal -->

          <!-- Applicant Details Modal -->

           <v-dialog v-model="dialogDetail" max-width="725px"
          >
            <div class="modal-content mt-5">
              <div class="modal-header">
                <h5 class="modal-title">Applicant's Detail</h5>
                <button
                  type="button"
                  class="close"
                  @click="closeDetail"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form> 
                  <div class="form-group">
                      <label>Firstname <span class="text-danger">*</span></label>
                      <input class="form-control" readonly  :value="applicant.firstName"/>
                  </div> 
                  <div class="form-group">
                      <label>LastName <span class="text-danger">*</span></label>
                      <input class="form-control" readonly  :value="applicant.lastName"/>
                  </div> 
                  <!-- <div class="form-group">
                      <label>Vacancy <span class="text-danger">*</span></label>
                      <input class="form-control" readonly  :value="item.job.title"/>
                  </div>  -->
                  <div class="form-group">
                      <label>Gender <span class="text-danger">*</span></label>
                      <input class="form-control" readonly  :value="applicant.gender"/>
                  </div>
                  <div class="form-group">
                      <label>Title <span class="text-danger">*</span></label>
                      <input class="form-control" readonly  :value="applicant.title"/>
                  </div> 
                  <div class="form-group">
                      <label>Phone 1 <span class="text-danger">*</span></label>
                      <input class="form-control" readonly  :value="applicant.phone1"/>
                  </div>
                  <div class="form-group">
                      <label>Phone 2 <span class="text-danger">*</span></label>
                      <input class="form-control" readonly  :value="applicant.phone2"/>
                  </div> 
                  <div class="form-group">
                      <label>Email <span class="text-danger">*</span></label>
                      <input class="form-control" readonly  :value="applicant.email"/>
                  </div>            
                  <div class="form-group">
                      <label>Address <span class="text-danger">*</span></label>
                      <input class="form-control" readonly  :value="applicant.address"/>
                  </div> 
                  <!-- <div class="form-group">
                      <label>Date <span class="text-danger">*</span></label>
                      <div class="cal-icon">
                        <input class="form-control" readonly  :value="new Date(query.date).toLocaleDateString()"/>
                      </div>
                  </div> -->
                  <!-- <div class="form-group">
                      <label>Accusation <span class="text-danger">*</span></label>
                      <textarea class="form-control" v-model="query.accusation" rows="4" readonly></textarea>
                  </div> -->
                  <!-- <div class="form-group">
                      <label>Response <span class="text-danger">*</span></label>
                      <textarea class="form-control" v-model="query.response" rows="4" readonly></textarea>
                  </div> -->
                  <!-- <div class="form-group">
                      <label>Response By <span class="text-danger">*</span></label>
                      <input class="form-control" v-model="query.responseBy" readonly />
                  </div> -->
                </form>
              </div>
            </div>
          
        </v-dialog>

        <!-- /Query Details Modal -->

        </div>
      </div>
      <!-- /Page Wrapper -->
    </div>
  </div>
</template>
<script>
import LayoutHeader from "@/components/layouts/Header.vue";
import LayoutSidebar from "@/components/layouts/Sidebar.vue";
import { applicantService } from "@/services/applicantService";
import { jobService } from '@/services/jobService';
import { required } from "vuelidate/lib/validators"
import { authenticationService } from "@/services/authenticationService";
import Vue from "vue";


export default {
  components: {
    LayoutHeader,
    LayoutSidebar,
  },

  data() {
    return {
      dialog: false,
      dialogDetail: false,
      vacancies: [],
      vacancyId: '',
      firstName: '',
      lastName: '',
      title: '',
      gender: '',
      phone1: '',
      phone2: '',
      email: '',
      address: '',
      file: null,
      fileName: null,
      applicants: [],
      applicant: {},
      vacancy: {
        jobProfile: {}
      },
      company: authenticationService.currentOfficeValue,
      message: '',
      submitted: false,
      loading: false,
      company: authenticationService.currentOfficeValue,
      error: "",
    };
  },
  watch: {
    dialog (val) {
      val || this.close()
    },  
    dialogDetail (val) {
      val || this.closeDetail()
    }     
  },
  validations: {
    vacancyId: { required },
    firstName: { required },
    lastName: { required },
    gender: { required },
    title: { required },
    email: { required },
    phone1: { required },
    phone2: { required },
    address: { required }   
  },


  mounted() {
    this.getAllApplicants();
    this.getVacancies()

    if (this.applicants.length > 0) {
      if ($(".datatable").length > 0) {
        $(".datatable").DataTable({
          bFilter: false,
        });
      }
      if ($(".floating").length > 0) {
        $(".floating")
          .on("focus blur", function (e) {
            $(this)
              .parents(".form-focus")
              .toggleClass(
                "focused",
                e.type === "focus" || this.value.length > 0
              );
          })
          .trigger("blur");
      }
    }
  },
  methods: {
    openDialog() {
      this.dialog = true;
    },
    close() {
      this.dialog = false
      this.clearModel()
    },
    closeDetail() {
      this.dialogDetail = false
    },
    clearModel() {
      this.vacancyId = ""
      this.firstName = ""
      this.lastName = ""
      this.title = ""
      this.gender = ""
      this.phone1 = ""
      this.phone2 = ""
      this.email = ""
      this.address = ""
      this.file = ""
      this.message = ""
      this.error = ""
    },
    setApplicantDetail(model) {
      this.applicant = model;
      this.dialogDetail = true
    },
    getAllApplicants() {
      applicantService.getAllApplicant(this.company.id).then(
        (model) => {
          this.applicants = model;
        },
        (error) => {
          error = error;
        }
      );
    },
    getVacancies() {
      const companyId = this.company.id;
      jobService.getVancancies(companyId).then(
        (model) => {
          console.log(`model`, model)
          this.vacancies = model;
        },
        (error) => {
          error = error
        }
      )
    },
    onFilePicked(event) {
      			const files = event.target.files
      			this.fileName = files[0].name
				  console.log(this.fileName)
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
    applyJob(){

      this.submitted = true;

        this.$v.$touch();
          if (this.$v.$invalid) {
            return;
          }


				jobService.applyJob(this.vacancyId, this.company.id, this.firstName, this.lastName,
				 this.title, this.gender, this.phone1, this.phone2, this.email, this.address, this.file)
        			.then(
          				p => {
							  this.message = "Your application has been submitted successfully";
                this.getAllApplicants();
                this.close()
          				},
						error => {
							this.error = error
						}
        			)
			},
  },
  name: "applicants",
};
</script>
