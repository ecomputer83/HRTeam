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
            <div class="col-lg-6 mx-auto">
                <form @submit.prevent="onSubmit">
                            <div class="card" v-if="!this.isCreateCompany">
                                <div class="card-header">
                  <h4 class="card-title text-center my-auto">Create Company</h4>
                </div>
                                <div class="card-body">
                                    
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
									
									<div class="submit-section">
                      <button class="btn btn-primary submit-btn" type="button" v-on:click="handleCreateCompany">Next</button>
                    </div>
								
                                </div>
                            </div>
                        
              <div class="card"  v-if="this.isCreateCompany">
                  <div class="card-header">
                  <h4 class="card-title text-center my-auto">Create HR Account</h4>
                </div>
                                
                <div class="card-body">
                  
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Password</label>
                        <input type="password" v-model.trim="$v.password.$model" name="password" class="form-control" :class="{ 'is-invalid': submitted && $v.password.$error }" />
                						<div v-if="submitted && !$v.password.required" class="invalid-feedback">Password is required</div>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Confirm Password</label>
                        <input type="password" v-model.trim="$v.confirmPassword.$model" id="confirmPassword" name="confirmPassword" class="form-control" :class="{ 'is-invalid': submitted && $v.confirmPassword.$error }" />
                                <div v-if="submitted && $v.confirmPassword.$error" class="invalid-feedback">
                                    <span v-if="!$v.confirmPassword.required">Confirm Password is required</span>
                                    <span v-else-if="!$v.confirmPassword.sameAsPassword">Passwords must match</span>
                                </div>
                      </div>
                    </div>
                    <div class="submit-section">
                      <button class="btn btn-primary submit-btn" type="button" v-on:click="handleCreateCompany">Back</button>
                      <button class="btn btn-primary submit-btn" type="submit" :disabled="loading">Submit</button>
                    </div>
                  
                </div>
              </div>
            
                </form>

                        </div>
          
          <!-- /Page Content -->
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
import Vue from "vue";
export default {
  components: {
    LayoutHeader,
    LayoutSidebar
  },
  data(){
    return {
      companies: [],
      company: {},
      name: '',
      contactPerson: '',
      phone: '',
      email: '',
      address: '',
      submitted: false,
      loading: false,
      error: '',
      isCreateCompany: false,
    }
  },
  validations: {
      name: { required },
      address: { required },
      contactPerson: { required },
      phone: { required },
      email: { required },


      address: { required },
      password: { required },
      confirmPassword: {required, sameAsPassword: sameAs('password')},
    },
  mounted() {},
  methods: {
      handleCreateCompany() {
      this.isCreateCompany = !this.isCreateCompany;
    },
    onSubmit () {
            this.submitted = true;

            // stop here if form is invalid
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            }

            this.loading = true;
            organizationService.addOrganization(this.organization, this.rcnumber, this.address, this.contactname, this.contactnumber, this.contactemail, this.contactaddress)
                .then(
                    id => {
                      organizationService.registerAsAdmin(id, this.contactname, this.contactnumber, this.contactemail, this.password, this.confirmPassword)
                        .then(
                          o => this.$router.push('/')
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