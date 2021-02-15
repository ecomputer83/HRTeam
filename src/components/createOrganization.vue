<template>
  <div class="vacancies">
    <div class="main-wrapper">
      <layout-header></layout-header>
      <!-- Page Wrapper -->
      <div class="page-wrapper">
        <!-- Page Content -->
        <div class="content container-fluid">
          <!-- Page Header -->
          
          <!-- /Page Header -->

          <div class="row flex-column">
            <form @submit.prevent="onSubmit">
            <div v-if="!this.isCreateOrg" class="col-xl-6 mx-auto">
              <div class="card flex-fill">
                <div class="card-header">
                  <h4 class="card-title text-center my-auto">Create Organization</h4>
                </div>
                <div class="card-body">
                  
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Organization</label>
                        <input type="text" v-model.trim="$v.organization.$model" id="organization" name="organization" class="form-control" :class="{ 'is-invalid': submitted && $v.organization.$error }" />
                                <div v-if="submitted && !$v.organization.required" class="invalid-feedback">Organization Name is required</div>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">RC Number</label>
                        <input type="text" v-model.trim="$v.rcnumber.$model" id="rcnumber" name="rcnumber" class="form-control" :class="{ 'is-invalid': submitted && $v.rcnumber.$error }" />
                                <div v-if="submitted && !$v.rcnumber.required" class="invalid-feedback">RC Number is required</div>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Address</label>
                        <input type="text" v-model.trim="$v.address.$model" id="address" name="address" class="form-control" :class="{ 'is-invalid': submitted && $v.address.$error }" />
                                <div v-if="submitted && !$v.address.required" class="invalid-feedback">Contact Number is required</div>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Contact Name</label>
                        <input type="text" v-model.trim="$v.contactname.$model" id="contactname" name="contactname" class="form-control" :class="{ 'is-invalid': submitted && $v.contactname.$error }" />
                                <div v-if="submitted && !$v.contactname.required" class="invalid-feedback">Contact Name is required</div>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Contact Phone Number</label>
                        <input type="text" v-model.trim="$v.contactnumber.$model" id="contactnumber" name="contactnumber" class="form-control" :class="{ 'is-invalid': submitted && $v.contactnumber.$error }" />
                                <div v-if="submitted && !$v.contactnumber.required" class="invalid-feedback">Contact Number is required</div>
                      </div>
                    </div>
                    
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Address</label>
                        <input type="text" v-model.trim="$v.contactaddress.$model" id="contactaddress" name="contactaddress" class="form-control" :class="{ 'is-invalid': submitted && $v.contactaddress.$error }" />
                                <div v-if="submitted && !$v.contactaddress.required" class="invalid-feedback">Contact Address is required</div>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Contact Email</label>
                        <input type="email" v-model.trim="$v.contactemail.$model" id="contactemail" name="contactemail" class="form-control" :class="{ 'is-invalid': submitted && $v.contactemail.$error }" />
                                <div v-if="submitted && $v.contactemail.$error" class="invalid-feedback">
                                    <span v-if="!$v.contactemail.required">Email is required</span>
                                    <span v-if="!$v.contactemail.email">Email is invalid</span>
                                </div>
                      </div>
                    </div>
                    <div class="submit-section">
                      <button class="btn btn-primary submit-btn" v-on:click="handleCreateOrg">Next</button>
                    </div>
                  
                </div>
              </div>
            </div>
            <div v-if="this.isCreateOrg" class="col-xl-6 mx-auto">
              <div class="card flex-fill">
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
                      <button class="btn btn-primary submit-btn" v-on:click="handleCreateOrg">Back</button>
                      <button class="btn btn-primary submit-btn" type="submit" :disabled="loading">Submit</button>
                    </div>
                  
                </div>
              </div>
            </div>
            </form>
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
	import { required, sameAs } from 'vuelidate/lib/validators';
  import { router } from '@/router/index';
  import {organizationService} from '@/services/organizationService'
export default {
  components: {
    LayoutHeader,
  },
  data() {
    return {
      organization: '',
      rcnumber: '',
      address: '',
      contactname: '',
      contactnumber: '',
      contactaddress: '',
      contactemail: '',
      password: '',
      confirmPassword: "",
      submitted: false,
      loading: false,
      error: '',
      isCreateOrg: false,
    };
  },
  validations: {
      organization: { required },
      rcnumber: { required },
      address: { required },
      contactname: { required },
      contactnumber: { required },
      contactaddress: { required },
      contactemail: { required },
      password: { required },
      confirmPassword: {required, sameAsPassword: sameAs('password')},
    },
  methods: {
    handleCreateOrg() {
      this.isCreateOrg = !this.isCreateOrg;
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
  name: "createorganization",
};
</script>
