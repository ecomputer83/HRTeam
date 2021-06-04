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
                  <li class="breadcrumb-item active">Add Company</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- /Page Header -->

          <div class="row">
            <div class="col-lg-6 mx-auto">
                <form @submit.prevent="onSubmit">
                            <div class="card" v-if="this.isCreateCompany == 0">
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
                        
              <div class="card"  v-if="this.isCreateCompany == 1">
                  <div class="card-header">
                  <h4 class="card-title text-center my-auto">Create HR Account</h4>
                </div>
                                
                <div class="card-body">
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
                      <button class="btn btn-primary submit-btn" type="button" v-on:click="prev">Back</button>
                      <button class="btn btn-primary submit-btn" type="button" v-on:click="handleCreateCompany">Next</button>
                    </div>
                  
                </div>
              </div>

              <div class="card"  v-if="this.isCreateCompany == 2">
                  <div class="card-header">
                  <h4 class="card-title text-center my-auto">Company Account Setting</h4>
                </div>
                
                <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Employee Abbrevation Code</label>
                        <input type="text" v-model.trim="$v.abbrv.$model" id="abbrv" name="abbrv" class="form-control" :class="{ 'is-invalid': submitted && $v.abbrv.$error }" />
                                <div v-if="submitted && !$v.abbrv.required" class="invalid-feedback">Abbrevation Code is required</div>
                                <div class="invalid-feedback">Code use with employee number for their physical identification code. example: EMP</div>
                      </div>
                    </div>
                <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Remita Public Key</label>
                        <input type="text" v-model.trim="$v.remitaUserAccount.$model" id="remitaUserAccount" name="remitaUserAccount" class="form-control" :class="{ 'is-invalid': submitted && $v.remitaUserAccount.$error }" />
                                <div v-if="submitted && !$v.remitaUserAccount.required" class="invalid-feedback">Remita Public Key is required</div>
                      </div>
                    </div>
                <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Remita Secret Key</label>
                        <input type="text" v-model.trim="$v.remitaSecret.$model" id="remitaSecret" name="remitaSecret" class="form-control" :class="{ 'is-invalid': submitted && $v.remitaSecret.$error }" />
                                <div v-if="submitted && !$v.remitaSecret.required" class="invalid-feedback">Remita Secret Key is required</div>
                      </div>
                    </div>
                <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Salary Pay Day</label>
                        <input type="number" v-model.trim="$v.salaryPayDay.$model" id="salaryPayDay" name="salaryPayDay" class="form-control" :class="{ 'is-invalid': submitted && $v.salaryPayDay.$error }" />
                                <div v-if="submitted && !$v.salaryPayDay.required" class="invalid-feedback">Salary Pay Day is required</div>
                      </div>
                    </div>  
                    <hr />
                    <h4 class="card-title text-center my-auto">Salary Account Setting</h4>  
                    <hr />            
                <div class="card-body">
                  <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Source Bank Account for Salary Payment</label>
                        <input type="text" v-model.trim="$v.bankAccountForSalary.$model" id="sourceAccount" name="sourceAccount" class="form-control" :class="{ 'is-invalid': submitted && $v.bankAccountForSalary.$error }" />
                                <div v-if="submitted && !$v.bankAccountForSalary.required" class="invalid-feedback">Source Bank Account for Salary Payment is required</div>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Source Bank for Salary Payment</label>
                        <select class="form-control"  v-model.trim="$v.bankCodeForSalary.$model" :class="{ 'is-invalid': submitted && $v.bankCodeForSalary.$error }">
                          <option>Select Bank</option>
                          <option v-for="item in banks" :key="item.lookupValue" :value="item.lookupValue">{{item.lookupDescription}}</option>
                        </select>
                                <div v-if="submitted && !$v.bankCodeForSalary.required" class="invalid-feedback">Source Bank for Salary Payment is required</div>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <input type="checkbox" @change="applySameAccount($event)"  /><label class="col-form-label">  Apply same account to pension and tax</label>
                      </div>
                    </div>
                    <hr />
                    <h4 class="card-title text-center my-auto">Pension Account Setting</h4>  
                    <hr />
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Source Bank Account for Pension Payment</label>
                        <input type="text" v-model.trim="$v.bankAccountForPension.$model" id="bankAccountForPension" name="bankAccountForPension" class="form-control" :class="{ 'is-invalid': submitted && $v.bankAccountForPension.$error }" />
                                <div v-if="submitted && !$v.bankAccountForPension.required" class="invalid-feedback">Source Bank Account for Pension Payment is required</div>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Source Bank for Pension Payment</label>
                        <select class="form-control"  v-model.trim="$v.bankCodeForPension.$model" :class="{ 'is-invalid': submitted && $v.bankCodeForPension.$error }">
                          <option>Select Bank</option>
                          <option v-for="item in banks" :key="item.lookupValue" :value="item.lookupValue">{{item.lookupDescription}}</option>
                        </select>
                                <div v-if="submitted && !$v.bankCodeForPension.required" class="invalid-feedback">Source Bank for Pension Payment is required</div>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Employer Code</label>
                        <input type="text" v-model.trim="$v.employerCodeForPension.$model" id="employerCodeForPension" name="employerCodeForPension" class="form-control" :class="{ 'is-invalid': submitted && $v.employerCodeForPension.$error }" />
                                <div v-if="submitted && !$v.employerCodeForPension.required" class="invalid-feedback">Employer Code is required</div>
                      </div>
                    </div>
                    <hr />
                    <h4 class="card-title text-center my-auto">Tax Account Setting</h4>  
                    <hr />
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Source Bank Account for Tax Payment</label>
                        <input type="text" v-model.trim="$v.bankAccountForTax.$model" id="bankAccountForTax" name="bankAccountForTax" class="form-control" :class="{ 'is-invalid': submitted && $v.bankAccountForTax.$error }" />
                                <div v-if="submitted && !$v.bankAccountForTax.required" class="invalid-feedback">Source Bank Account for Tax Payment is required</div>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Source Bank for Tax Payment</label>
                        <select class="form-control"  v-model.trim="$v.bankCodeForTax.$model" :class="{ 'is-invalid': submitted && $v.bankCodeForTax.$error }">
                          <option>Select Bank</option>
                          <option v-for="item in banks" :key="item.lookupValue" :value="item.lookupValue">{{item.lookupDescription}}</option>
                        </select>
                                <div v-if="submitted && !$v.bankCodeForTax.required" class="invalid-feedback">Source Bank for Tax Payment is required</div>
                      </div>
                    </div>
                   
                    <div class="submit-section">
                      <button class="btn btn-primary submit-btn" type="button" v-on:click="prev">Back</button>
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
        id: null,
        name: '',
        abbrv: '',
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
        bankAccountForSalary: '',
        bankCodeForSalary: '',
        bankAccountForPension: '',
        bankCodeForPension: '',
        bankAccountForTax: '',
        bankCodeForTax: '',
        employerCodeForPension: '',
        remitaUserAccount: '',
        remitaSecret: '',
        salaryPayDay: 0,
        submitted: false,
        loading: false,
        error: null,
        isCreateCompany: 0,
        banks: [],
        isCompanySetting: false,
        dataunsaved: false
    }
  },
  validations: {
      name: { required },
      abbrv: { required },
        contactPerson: { required },
        companyaddress: { required },
        contactphone: { required },
        contactemail: { required },
      firstName: { required },
      lastName: { required },
      address: { required },
      gender: { required },
      phone: { required },
      email: { required },
      bankAccountForSalary: { required },
        bankCodeForSalary: { required },
        bankAccountForPension: { required },
        bankCodeForPension: { required },
        bankAccountForTax: { required },
        bankCodeForTax: { required },
        employerCodeForPension: { required },
        remitaUserAccount: { required },
        remitaSecret: { required },
        salaryPayDay: { required },
    },
  mounted() {
    this.getBanks()
  },
  watch: {
    'name': {
      handler: function(after, before) {
        if(after != before)
        this.dataunsaved = true
      },
      deep: true
    }
  },
  methods: {
    getBanks() {
      organizationService.getBanks()
        .then(
          o => this.banks = o
        )
    },
    async handleCreateCompany() {
      if(this.isCreateCompany == 1){
        try {
          var existUser = await organizationService.checkUser(this.email);
          if(existUser){
            this.error = "Email Address have already exist, please use another email address";
            return;
          }else{
            this.isCreateCompany = this.isCreateCompany + 1;
          }
        }
        catch(err){
          this.error = err
        }
      }else{
        this.isCreateCompany = this.isCreateCompany + 1;
      }
      
    },
    prev() {
      this.isCreateCompany = this.isCreateCompany - 1;
    },

    handleCompanySetting() {
      this.id = 0;
      this.isCompanySetting = this.isCreateCompany && this.id;
    },

    applySameAccount(e) {
      this.bankAccountForPension = this.bankAccountForSalary;
      this.bankAccountForTax = this.bankAccountForSalary;

      this.bankCodeForPension = this.bankCodeForSalary;
      this.bankCodeForTax = this.bankCodeForSalary;
    },

    onSubmit () {
            this.submitted = true;

            // stop here if form is invalid
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            }

            this.loading = true;
            organizationService.addCompany(this.name, this.abbrv, this.companyaddress, this.contactPerson, this.contactphone, this.contactemail)
                .then(
                    id => {
                      organizationService.addAccountSetting(id, this.bankAccountForSalary, this.bankCodeForSalary, this.bankAccountForPension,
                          this.bankCodeForPension, this.bankAccountForTax, this.bankCodeForTax, this.employerCodeForPension, this.remitaUserAccount,
                          this.remitaSecret, parseInt(this.salaryPayDay))
                        .then(
                          r => organizationService.registerAsHR(id, this.firstName, this.lastName, this.address, this.gender, this.phone, this.email)
                          .then(
                            o => this.$router.push('/companies')
                          )
                          
                        )
					},
                    error => {
                        this.error = error.title;
                        this.loading = false;
                    }
                );
          this.dataunsaved = false
        }
  },
  beforeRouteLeave (to, from, next) {
    if(this.dataunsaved){
      const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
      if(answer){
        next()
      }else{
        next(false)
      }
    }
  },
  name: "companies"
};
</script>