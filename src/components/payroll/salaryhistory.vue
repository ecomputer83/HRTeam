<template>
  <div class="resignation">
    <div class="main-wrapper">
      <layout-header></layout-header>
      <layout-sidebar></layout-sidebar>
      <!-- Page Wrapper -->
      <div class="page-wrapper">
        <!-- Page Content -->
        <div class="content container-fluid">
          <!-- Page Header -->
          <div class="page-header">
            <div class="row align-items-center">
              <div class="col">
                <h3 class="page-title">Salary History</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/index">Dashboard</router-link>
                  </li>
                  <li class="breadcrumb-item active">Salary History</li>
                </ul>
              </div>
              <div class="col-auto float-right ml-auto">
                
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-if="paymentButton">
    Make Payment
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" @click="openSalaryDialog">Pay Salary</a>
    <a class="dropdown-item" @click="openPensionDialog">Pay Pension</a>
    <a class="dropdown-item" @click="openTaxDialog">Pay Tax</a>
  </div>
                
              </div>
            </div>
          </div>
          <!-- /Page Header -->
          <!-- Search Filter -->
                    <div class="row filter-row">
                        <div class="col-sm-6 col-md-3">
                            <div class="form-group form-focus select-focus">
                                <select class="form-control" style="height: 55px !important;" v-model="month">
                                                    <option>Select Month</option>
                                                    <option v-for="item in months" :key="item.value" :value="item.value">{{item.label}}</option>
                                                </select>
                                <label class="focus-label">Select Month</label>
                            </div>
                        </div>
                        
                        <div class="col-sm-6 col-md-3">
                            <div class="form-group form-focus select-focus">
                                 <select class="form-control" style="height: 55px !important;" v-model="year">
                                                    <option>Select Year</option>
                                                    <option v-for="item in years" :key="item.value" :value="parseInt(item.value)">{{item.label}}</option>
                                                </select>
                                <label class="focus-label">Select Year</label>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <a @click="getEmployeeSalary()" class="btn btn-success btn-block" :disabled="loading"> Search </a>
                        </div>
                    </div>
                    <!-- /Search Filter -->
          <!----Datatable-->
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <v-data-table
                  :headers="headers"
                  :items="salaries"
                  sort-by=""
                  class="elevation-1"
                >
                  
                  <template v-slot:[`item.profile`]="{ item }">
                    <h2 class="table-avatar blue-link">
                      <router-link to="/profile" class="avatar"
                        ><img alt="" src="~@/assets/profiles/avatar-02.jpg"
                      /></router-link>
                      <router-link to="/profile">{{
                        `${item.employee.firstName} ${item.employee.lastName}`
                      }}</router-link>
                    </h2>
                  </template>
                  <template v-slot:[`item.totalPf`]="{ item }">
                    ₦{{(item.pf + (item.basic * 0.1)).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}}
                  </template>
                  <template v-slot:[`item.net`]="{ item }">
                    ₦{{item.netSalary.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}}
                  </template>
                  <template v-slot:[`item.tax`]="{ item }">
                    ₦{{item.tax.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}}
                  </template>
                  <template v-slot:[`item.sstatus`]="{ item }">
                    {{item.salaryPayment ? 'Paid': 'Unpaid'}}
                  </template>
                  <template v-slot:[`item.pstatus`]="{ item }">
                    {{item.pensionPayment ? 'Paid': 'Unpaid'}}
                  </template>
                  <template v-slot:[`item.tstatus`]="{ item }">
                    {{item.taxPayment ? 'Paid': 'Unpaid'}}
                  </template>
                  <template v-slot:[`item.employeeId`]="{ item }">
                    {{company.abbrv + '-'+item.employeeId}}
                  </template>
                  <template v-slot:[`item.paySlip`]="{ item }">
                    <router-link class="btn btn-sm btn-primary" to="/salaryview" v-if="item.status == 1">Generate
                                                    Slip
                                                </router-link>
                  </template>
                </v-data-table>
              </div>
            </div>
          </div>
          <!---/Datatable-->
        </div>
        <!-- /Page Content -->

        <!-- Confirm Salary Payment -->
        <div class="text-center">
    <v-dialog
      v-model="salarypaymentdialog"
      width="500"
    >
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Payment Confirmation
        </v-card-title>
        
        <div style="margin: 10px">
          <div class="col-md-12">
                    <div
                      class="alert alert-danger alert-dismissible fade show"
                      role="alert"
                      v-if="paymentError"
                    >
                      <strong>Error!</strong> {{ paymentError }}
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
                      v-if="paymentMessage"
                    >
                      <strong>Success!</strong> {{ paymentMessage }}
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
          <p>You are about to make salary payment of total amount <b>₦{{TotalSalary.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}}</b> to <b>{{salaries.length}}</b> staffs</p>
         <p>Kindly confirm your password details to continue.</p>
        
          <div class="form-group">
							<label>Password</label>
							<input type="password" v-model="password" name="password" class="form-control" />
					</div>
        </div>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="btn btn-secondary"
            color="white"
            text
            @click="closeSalaryDialog"
          >
            Reject
          </v-btn>
          <v-btn class="btn btn-secondary"
            color="white"
            text
            @click="makeSalaryPayment"
          >
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="pensionpaymentdialog"
      width="500"
    >
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Payment Confirmation
        </v-card-title>
        
        <div style="margin: 10px">
          <div class="col-md-12">
                    <div
                      class="alert alert-danger alert-dismissible fade show"
                      role="alert"
                      v-if="paymentError"
                    >
                      <strong>Error!</strong> {{ paymentError }}
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
                      v-if="paymentMessage"
                    >
                      <strong>Success!</strong> {{ paymentMessage }}
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
          <p>You are about to make pension payment of total amount <b>₦{{TotalSalary.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}}</b> to <b>{{salaries.length}}</b> staffs</p>
         <p>Kindly confirm your password details to continue.</p>
        
          <div class="form-group">
							<label>Password</label>
							<input type="password" v-model="password" name="password" class="form-control" />
					</div>
        </div>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="btn btn-secondary"
            color="white"
            text
            @click="closePensionDialog"
          >
            Reject
          </v-btn>
          <v-btn class="btn btn-secondary"
            color="white"
            text
            @click="makePensionPayment"
          >
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="taxpaymentdialog"
      width="500"
    >
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Payment Confirmation
        </v-card-title>
        
        <div style="margin: 10px">
          <div class="col-md-12">
                    <div
                      class="alert alert-danger alert-dismissible fade show"
                      role="alert"
                      v-if="paymentError"
                    >
                      <strong>Error!</strong> {{ paymentError }}
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
                      v-if="paymentMessage"
                    >
                      <strong>Success!</strong> {{ paymentMessage }}
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
          <p>You are about to make tax payment of total amount <b>₦{{TotalSalary.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}}</b> to <b>{{salaries.length}}</b> staffs</p>
         <p>Kindly confirm your password details to continue.</p>
        
          <div class="form-group">
							<label>Password</label>
							<input type="password" v-model="password" name="password" class="form-control" />
					</div>
        </div>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="btn btn-secondary"
            color="white"
            text
            @click="closeTaxDialog"
          >
            Reject
          </v-btn>
          <v-btn class="btn btn-secondary"
            color="white"
            text
            @click="makeTaxPayment"
          >
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
      </div>
      <!-- /Page Wrapper -->
    </div>
  </div>
</template>
<script>
import LayoutHeader from "@/components/layouts/Header.vue";
import LayoutSidebar from "@/components/layouts/Sidebar.vue";
import { required, sameAs } from "vuelidate/lib/validators";
import { employeeService } from "@/services/employeeService.js";
import Datepicker from "vuejs-datepicker";
import { authenticationService } from "@/services/authenticationService";
import { organizationService } from "@/services/organizationService";
import { paymentService } from "@/services/paymentService";

export default {
  components: {
    LayoutHeader,
    LayoutSidebar,
    Datepicker,
  },

  data() {
    return {
      salarypaymentdialog: false,
      pensionpaymentdialog: false,
      taxpaymentdialog: false,
      password: '',
      salaryPayDay: null,
      today: new Date().getDate(),
      headers: [
        {
          text: "Employee",
          align: "start",
          value: "profile",
        },
        { text: "Employee ID", value: "employeeId" },
        { text: "Recieve Salary", value: "net" },
        { text: "Receive Pension", value: "totalPf" },
        { text: "Tax", value: "tax" },
        { text: "Salary Status", value: "sstatus" },
        { text: "Pension Status", value: "pstatus" },
        { text: "Tax Status", value: "tstatus" },
        { text: "Payslip", value: "paySlip", sortable: false },
      ],
      name: "",
      employeeId: "",
      salaries: [],
      salary: {},
      employee: [],
      TotalSalary: 0,
      TotalPension: 0,
      TotalTax: 0,
      loading: false,
      error: "",
      employees: [],
      submitted: false,
      //employee: authenticationService.currentOfficeValue,
      company: authenticationService.currentOfficeValue,
      month: null,
      year: null,
      details: [],
      message: null,
      paymentButton: false,
      paymentMessage: null,
      paymentError: null,
      months: [
        { value: 1, label: 'January'}, { value: 2, label: 'February'}, { value: 3, label: 'March'},
        { value: 4, label: 'April'}, { value: 5, label: 'May'}, { value: 6, label: 'June'},
        { value: 7, label: 'July'}, { value: 8, label: 'August'}, { value: 9, label: 'September'},
        { value: 10, label: 'October'}, { value: 11, label: 'November'}, { value: 12, label: 'December'}
      ],
      years: []
    };
  },

  validations: {
    name: { required },
    reason: { required },
    // noticeDate: { required },
    // resignationDate: { required },
  },
 
  methods: {
    generateYears () {
      var result = [];
      for(var i = 2020; i < (new Date().getFullYear() + 20); i++)
        result.push({value: i, label: i})

        this.years = result;
    },
    async makeSalaryPayment () {
      try{
        await authenticationService.validate(this.password);
      }
      catch(e) {
        this.paymentError = "We are unable to verify your password, check your password and try again!";
        return;
      }
      try{
        
      var res = await paymentService.paySalary(this.company.id);
      this.paymentMessage = "Salary Payment Successful";
        
      }
      catch(e){
        this.paymentError = "We are unable to connect with your remita account, check your account settings and try again!"
        return
      }
      
    },
    async makePensionPayment(){
      var d = new Date();
      var m = d.getMonth();
      var y = d.getFullYear();
       try{
        await authenticationService.validate(this.password);
      }
      catch(e) {
        this.paymentError = "We are unable to verify your password, check your password and try again!";
        return;
      }
      try{
        
      await paymentService.payPension(this.company.id, m+'/'+y)
      this.paymentMessage = "Salary Payment Successful"
        
      }
      catch(e){
        this.paymentError = "We are unable to connect with your remita account, check your account settings and try again!"
        return
      }
    },
    async makeTaxPayment(){
      var d = new Date();
      var m = d.getMonth();
      var y = d.getFullYear();
      try{
        await authenticationService.validate(this.password);
      }
      catch(e) {
        this.paymentError = "We are unable to verify your password, check your password and try again!";
        return;
      }
      try{
        
      await paymentService.payTax(this.company.id, m+'/'+y)
        o => this.paymentMessage = "Salary Payment Successful"
          
      }
      catch(e){
        this.paymentError = "We are unable to connect with your remita account, check your account settings and try again!"
        return
      }
    },


    getEmployeeSalary() {
      this.loading = true
      const companyId = this.company.id;
      employeeService.getallEmployeeSalaries(companyId, this.month, this.year).then(
        (model) => {
          console.log(model);
          var notpaid = model.filter(v=>v.salaryPayment == null || v.pensionPayment == null || v.taxPayment == null)
          this.paymentButton = (notpaid.length > 0)
          this.salaries = model;
          this.loading = false
        },
        (error) => {
          error = error;
          this.loading = false
        }
      );
    },
    openSalaryDialog() {
      this.TotalSalary = this.salaries.map(i=>i.netSalary).reduce((a, b) => a + b);
      this.salarypaymentdialog = true;
    },
    closeSalaryDialog() {
      this.paymentMessage = null;
      this.paymentError = null;
      this.salarypaymentdialog = false;
    },
    openPensionDialog() {
      this.TotalSalary = this.salaries.map(i=>i.pf + (i.basic * 0.1)).reduce((a, b) => a + b);
      this.pensionpaymentdialog = true;
    },
    closePensionDialog() {
      this.paymentMessage = null;
      this.paymentError = null;
      this.pensionpaymentdialog = false;
    },
    openTaxDialog() {
      this.TotalSalary = this.salaries.map(i=>i.tax).reduce((a, b) => a + b);
      this.taxpaymentdialog = true;
    },
    closeTaxDialog() {
      this.paymentMessage = null;
      this.paymentError = null;
      this.taxpaymentdialog = false;
    },

  },
  

  mounted() {
    this.generateYears();
    //this.getEmployeeSalary();
    // Datatable
    //this.getEmployees(this.employee.id);
    //this.getEmployeeResignations(this.company.id);

    if ($(".datatable").length > 0) {
      $(".datatable").DataTable({
        bFilter: false,
      });
    }
    // Date Time Picker

    if ($(".datetimepicker").length > 0) {
      $(".datetimepicker").datetimepicker({
        format: "DD/MM/YYYY",
        icons: {
          up: "fa fa-angle-up",
          down: "fa fa-angle-down",
          next: "fa fa-angle-right",
          previous: "fa fa-angle-left",
        },
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
  },
  name: "salary",
};
</script>