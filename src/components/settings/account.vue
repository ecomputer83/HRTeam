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
                <h3 class="page-title">Account Settings</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/index">Dashboard</router-link>
                  </li>
                  <li class="breadcrumb-item active">Account Settings</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- /Page Header -->

          <div class="row">
            <div class="col-lg-6 mx-auto">
                <form @submit.prevent="onSubmit">

              <div class="card">
                  <div class="card-header">
                  <h4 class="card-title text-center my-auto">Company Account Setting</h4>
                </div>
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
                <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Remita UserName</label>
                        <input type="text" v-model.trim="$v.remitaUserAccount.$model" id="remitaUserAccount" name="remitaUserAccount" class="form-control" :class="{ 'is-invalid': submitted && $v.remitaUserAccount.$error }" />
                                <div v-if="submitted && !$v.remitaUserAccount.required" class="invalid-feedback">Remita UserName is required</div>
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
                      
                      <button class="btn btn-primary submit-btn" type="submit" :disabled="loading">Update</button>
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
import LayoutSidebar from "@/components/layouts/Sidebar.vue";
import { required, sameAs } from 'vuelidate/lib/validators';
import {organizationService} from '@/services/organizationService';
import { authenticationService } from "@/services/authenticationService";
import Vue from "vue";
export default {
  components: {
    LayoutHeader,
    LayoutSidebar
  },
  data(){
    return {
        id: 0,
        bankAccountForSalary: '',
        bankCodeForSalary: '',
        bankAccountForPension: '',
        bankCodeForPension: '',
        bankAccountForTax: '',
        bankCodeForTax: '',
        employerCodeForPension: '',
        remitaUserAccount: '',
        salaryPayDay: 0,
        submitted: false,
        loading: false,
        error: '',
        message: '',
        banks: [],
        company: authenticationService.currentOfficeValue,
    }
  },
  validations: {
        bankAccountForSalary: { required },
        bankCodeForSalary: { required },
        bankAccountForPension: { required },
        bankCodeForPension: { required },
        bankAccountForTax: { required },
        bankCodeForTax: { required },
        employerCodeForPension: { required },
        remitaUserAccount: { required },
        salaryPayDay: { required },
    },
  mounted() {
    this.getBanks()
    this.getAccountSettings()
  },
  methods: {
    getBanks() {
      organizationService.getBanks()
        .then(
          o => this.banks = o
        )
    },
    getAccountSettings() {
        organizationService.getAccountSetting(this.company.id)
        .then(
          o => {
            this.id = o.id;
            this.bankAccountForSalary = o.bankAccountForSalary;
            this.bankCodeForSalary = o.bankCodeForSalary
            this.bankAccountForPension = o.bankAccountForPension;
            this.bankCodeForPension = o.bankCodeForPension;
            this.bankAccountForTax = o.bankAccountForTax;
            this.bankCodeForTax = o.bankCodeForTax;
            this.employerCodeForPension = o.employerCodeForPension;
            this.remitaUserAccount = o.remitaUserAccount;
            this.salaryPayDay = o.salaryPayDay
          }
        )
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
                if(this.id){
                    organizationService.updateAccountSetting(this.id, this.company.id, this.bankAccountForSalary, this.bankCodeForSalary, this.bankAccountForPension,
                        this.bankCodeForPension, this.bankAccountForTax, this.bankCodeForTax, this.employerCodeForPension, this.remitaUserAccount, parseInt(this.salaryPayDay))
                        .then(
                        o => { this.message = "Account Settings updated successfully";
				    	},
                        error => {
                            this.error = error;
                            this.loading = false;
                        }
                    );
                }else{
                    organizationService.addAccountSetting(this.company.id, this.bankAccountForSalary, this.bankCodeForSalary, this.bankAccountForPension,
                        this.bankCodeForPension, this.bankAccountForTax, this.bankCodeForTax, this.employerCodeForPension, this.remitaUserAccount, parseInt(this.salaryPayDay))
                        .then(
                        o => { this.message = "Account Settings created successfully";
				    	},
                        error => {
                            this.error = error;
                            this.loading = false;
                        }
                    );
                }
        }
  },
  name: "account"
};
</script>