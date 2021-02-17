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
                  <li class="breadcrumb-item active">Company</li>
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
                                      <h4 class="card-title mb-0">Company Information</h4>
                                      <div class="col-auto float-right ml-auto">
                                          <router-link to="/addcompany" class="btn add-btn" data-toggle="modal" data-target="#add_leave_type"><i
                                            class="fa fa-plus"></i>Add Company</router-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-hover mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Company Name</th>
                                                    <th>Address</th>
                                                    <th>Contact Person</th>
                                                    <th>Contact Email</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr
                                                v-for="model in companies" v-bind:key="model.id">
                                                    <td>{{model.name}}</td>
                                                    <td>{{model.address}}</td>
                                                    <td>{{model.contacPerson}}</td>
                                                    <td>{{model.email}}</td>
                                                    <td>
                                                      <div class="view-icons">
                                                        <a 
                                                          @click="setCompany(model)"
                                                          class="btn btn-link active" 
                                                          data-toggle="modal" 
                                                          data-target="#edit_leave_type"
                                                        >
                                                          <i class="fa fa-pencil m-r-5"></i>
                                                        </a>
                                                        <a 
                                                          @click="setCompany(model)"
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
								<form @submit.prevent="onPutSubmit">
									<div class="row">
										<div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Company Name</label>
                        <input type="text" v-model.trim="$v.company.name.$model" id="name" name="name" class="form-control" :class="{ 'is-invalid': submitted && $v.company.name.$error }" />
                                <div v-if="submitted && !$v.company.name.required" class="invalid-feedback">Company Name is required</div>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Address</label>
                        <input type="text" v-model.trim="$v.company.address.$model" id="address" name="address" class="form-control" :class="{ 'is-invalid': submitted && $v.company.address.$error }" />
                                <div v-if="submitted && !$v.company.address.required" class="invalid-feedback">Address is required</div>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Contact Name</label>
                        <input type="text" v-model.trim="$v.company.contactPerson.$model" id="contactPerson" name="contactPerson" class="form-control" :class="{ 'is-invalid': submitted && $v.company.contactPerson.$error }" />
                                <div v-if="submitted && !$v.company.contactPerson.required" class="invalid-feedback">Contact Name is required</div>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Contact Phone Number</label>
                        <input type="text" v-model.trim="$v.company.phone.$model" id="phone" name="phone" class="form-control" :class="{ 'is-invalid': submitted && $v.company.phone.$error }" />
                                <div v-if="submitted && !$v.company.phone.required" class="invalid-feedback">Contact Number is required</div>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Contact Email</label>
                        <input type="email" v-model.trim="$v.company.email.$model" id="email" name="email" class="form-control" :class="{ 'is-invalid': submitted && $v.company.email.$error }" />
                                <div v-if="submitted && $v.company.email.$error" class="invalid-feedback">
                                    <span v-if="!$v.company.email.required">Email is required</span>
                                    <span v-if="!$v.company.email.email">Email is invalid</span>
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
											<a @click="removeCompany"
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
import { required, sameAs } from 'vuelidate/lib/validators';
import {organizationService} from '@/services/organizationService'
export default {
  components: {
    LayoutHeader,
    LayoutSidebar
  },
  data(){
    return {
      companies: [],
      company: null,
      submitted: false,
      loading: false,
      error: '',
    }
  },
    validations: {
        company: {
            name: { required },
            contactPerson: { required },
            address: { required },
            phone: { required },
            email: { required }
        }
    },
  mounted() {
      this.GetCompanies();
  },
  methods: {
      GetCompanies () {
          organizationService.getCompanies()
            .then(
                model => { this.companies = model},
                error => { this.error = error }
            )
      },
      setCompany(company){
          this.company = company
      },
      removeCompany(){
          if(company){
              organizationService.removeCompany(this.company.id)
              .then(
                  id => {
                      organizationService.getCompanies()
                        .then(
                          model => {companies = model}
                        )
					},
                    error => {
                        this.error = error;
                    }
              )
          }
      },
      onSubmit () {
            this.submitted = true;

            // stop here if form is invalid
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            }

            this.loading = true;
            organizationService.updateCompany(this.company.id, this.company.name, this.company.address, this.company.contactPerson, this.company.phone, this.company.email)
                .then(
                    id => {
                      organizationService.getCompanies()
                        .then(
                          model => { this.companies = model}
                        )
					},
                    error => {
                        this.error = error;
                        this.loading = false;
                    }
                );
        }
  },
  name: "companies"
};
</script>