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
                        <input type="text" v-model.trim="$v.companyaddress.$model" id="companyaddress" name="companyaddress" class="form-control" :class="{ 'is-invalid': submitted && $v.companyaddress.$error }" />
                                <div v-if="submitted && !$v.companyaddress.required" class="invalid-feedback">Address is required</div>
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
                        <input type="text" v-model.trim="$v.contactphone.$model" id="contactphone" name="contactphone" class="form-control" :class="{ 'is-invalid': submitted && $v.contactphone.$error }" />
                                <div v-if="submitted && !$v.contactphone.required" class="invalid-feedback">Contact Number is required</div>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Contact Email</label>
                        <input type="email" v-model.trim="$v.contactemail.$model" id="email" name="email" class="form-control" :class="{ 'is-invalid': submitted && $v.contactemail.$error }" />
                                <div v-if="submitted && $v.contactemail.$error" class="invalid-feedback">
                                    <span v-if="!$v.contactemail.required">Email is required</span>
                                    <span v-if="!$v.contactemail.email">Email is invalid</span>
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
                        <label class="col-form-label">First Name</label>
                        <input type="text" v-model.trim="$v.firstName.$model" id="firstName" name="firstName" class="form-control" :class="{ 'is-invalid': submitted && $v.firstName.$error }" />
                                <div v-if="submitted && !$v.firstName.required" class="invalid-feedback">First Name is required</div>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Last Name</label>
                        <input type="text" v-model.trim="$v.lastName.$model" id="lastName" name="lastName" class="form-control" :class="{ 'is-invalid': submitted && $v.lastName.$error }" />
                                <div v-if="submitted && !$v.lastName.required" class="invalid-feedback">Last Name is required</div>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Email</label>
                        <input type="text" v-model.trim="$v.email.$model" id="email" name="email" class="form-control" :class="{ 'is-invalid': submitted && $v.email.$error }" />
                                <div v-if="submitted && !$v.email.required" class="invalid-feedback">Email is required</div>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Phone Number</label>
                        <input type="text" v-model.trim="$v.phone.$model" id="phone" name="phone" class="form-control" :class="{ 'is-invalid': submitted && $v.phone.$error }" />
                                <div v-if="submitted && !$v.phone.required" class="invalid-feedback">Contact Name is required</div>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Gender</label>
                        <select v-model.trim="$v.gender.$model" id="gender" name="gender" class="form-control">
                            <option disabled value="">Please Select</option>
                            <option>Male</option>
                            <option>Female</option>
                            </select>
                                <div v-if="submitted && !$v.contactPerson.required" class="invalid-feedback">Contact Name is required</div>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Address</label>
                        <input type="text" v-model.trim="$v.address.$model" id="address" name="address" class="form-control" :class="{ 'is-invalid': submitted && $v.address.$error }" />
                                <div v-if="submitted && !$v.address.required" class="invalid-feedback">Address is required</div>
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
import {organizationService} from '@/services/organizationService';
import Vue from "vue";
export default {
  components: {
    LayoutHeader,
    LayoutSidebar
  },
  data(){
    return {
        name: '',
        contactPerson: '',
        companyaddress: '',
        contactphone: "",
        contactemail: "",
        firstName: '',
        lastName: '',
        gender: '',
        phone: '',
        email: '',
        address: '',
        submitted: false,
        loading: false,
        error: '',
        isCreateCompany: false
    }
  },
  validations: {
      name: { required },
        contactPerson: { required },
        companyaddress: { required },
        contactphone: { required },
        contactemail: { required },
      firstName: { required },
      lastName: { required },
      address: { required },
      gender: { required },
      phone: { required },
      email: { required }
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
            organizationService.addCompany(this.name, this.companyaddress, this.contactPerson, this.contactphone, this.contactemail)
                .then(
                    id => {
                      organizationService.registerAsHR(id, this.firstName, this.lastName, this.address, this.gender, this.phone, this.email)
                        .then(
                          o => this.$router.push('/companies')
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