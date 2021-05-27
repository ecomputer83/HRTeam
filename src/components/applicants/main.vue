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
                          <th>Salutation</th>
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
                          <td>{{ applicant.salutation }}</td>

                          <td>{{ applicant.firstName }}</td>
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
					<v-dialog v-model="dialog" max-width="725px"
          >
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
                            <label>Job Title <span class="text-danger">*</span></label>
                            <select class="form-control" v-model="vacancyId">
                              <option>Select Job Vacancy</option>
                              <option v-for="item in vacancies" :key="item.id"  :value="item.id">{{item.name}}</option>
                              <!-- <option>Casual Leave 12 Days</option> -->
                            </select>
                          </div>
                        </div>
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
											<button class="btn btn-primary submit-btn" @click="applyJob" type="submit">Submit</button>
										</div>
									</form>
								</div>
							</div>
          </v-dialog>
					
					
					<!-- /Apply Job Modal -->

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
import Vue from "vue";
export default {
  components: {
    LayoutHeader,
    LayoutSidebar,
  },

  data() {
    return {
      dialog: false,
      vacancies: [],
      vacancyId: '',
      firstName: '',
      lastName: '',
      salutation: '',
      gender: '',
      phone1: '',
      phone2: '',
      email: '',
      address: '',
      file: null,
      fileName: null,
      applicants: [],
      applicant: null,
      vacancy: {
        jobProfile: {}
      },
      message: '',
      loading: false,
      error: "",
    };
  },
  watch: {
    dialog (val) {
      val || this.close()
    },        
  },

  mounted() {
    this.getAllApplicants();

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
    },
    getAllApplicants() {
      applicantService.getAllApplicant().then(
        (model) => {
          this.applicants = model;
        },
        (error) => {
          error = error;
        }
      );
    },
    getVacancies() {
      
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
				jobService.applyJob(this.vacancy.companyId, this.vacancy.jobProfile.companyId, this.firstName, this.lastName,
				 this.salutation, this.gender, this.phone1, this.phone2, this.email, this.address, this.file)
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
