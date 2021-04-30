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
                <h3 class="page-title">Salary</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/index">Dashboard</router-link>
                  </li>
                  <li class="breadcrumb-item active">Salary</li>
                </ul>
              </div>
              <div class="col-md-3 float-right ml-auto">
                
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-if="paymentButton">
    Make Payment
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" @click="openSalaryDialog">Pay Salary</a>
    <a class="dropdown-item" @click="openPensionDialog">Pay Pension</a>
    <a class="dropdown-item" @click="openTaxDialog">Pay Tax</a>
  </div>
                <a @click="openDialog" class="btn btn-primary"
                  ><i class="fa fa-plus"></i> Add Salary</a
                >
              </div>
            </div>
          </div>
          <!-- /Page Header -->
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
                  <template v-slot:[`item.actions`]="{ item }">
                    <div class="dropdown dropdown-action">
                      <a
                        href="#"
                        class="action-icon dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                        ><i class="material-icons"></i></a
                      >
                      <div class="dropdown-menu dropdown-menu-right">
                        <a class="dropdown-item" @click="setEditSalary(item)"
                          ><i class="fa fa-pencil m-r-5"></i> Edit</a
                        >
                        <a class="dropdown-item" @click="setDeleteSalary(item)"
                          ><i class="fa fa-trash-o m-r-5"></i> Delete</a
                        >
                      </div>
                    </div>
                  </template>
                  <template v-slot:[`item.profile`]="{ item }">
                    <h2 class="table-avatar blue-link">
                      <router-link to="/profile" class="avatar"
                        ><img alt="" src="../../assets/profiles/avatar-02.jpg"
                      /></router-link>
                      <router-link to="/profile">{{
                        `${item.employee.firstName} ${item.employee.lastName}`
                      }}</router-link>
                    </h2>
                  </template>
                  <template v-slot:[`item.gross`]="{ item }">
                    ₦{{item.basic.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}}
                  </template>
                  <template v-slot:[`item.net`]="{ item }">
                    ₦{{item.netSalary.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}}
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

        <!-- Add Salary Modal -->
        <v-dialog v-model="dialog" max-width="725px">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Add Salary</h5>
              <button type="button" class="close" @click="close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="onSubmit">
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
                <div class="row">
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label
                        >Select Staff <span class="text-danger">*</span></label
                      >
                      <select
                        class="form-control"
                        v-model="employeeId"
                        v-on:change="getEmployeeDetail"
                      >
                        <option>Select Staff</option>
                        <option
                          v-for="item in employees"
                          :key="item.id"
                          :value="item.id"
                        >
                          {{ item.firstName + " " + item.lastName }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label
                        >Net Salary <span class="text-danger">*</span></label
                      >
                      <input
                        v-model="netSalary"
                        class="form-control"
                        type="text"
                        readonly
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <h4 class="text-primary">Earnings</h4>
                    <div class="form-group">
                      <label>Basic <span class="text-danger">*</span></label>
                      <input
                        v-model="basic"
                        class="form-control"
                        type="text"
                        readonly
                      />
                    </div>

                    <!-- <div class="form-group">
                      <label
                        >Conveyance <span class="text-danger">*</span></label
                      >
                      <input
                        v-model="conveyance"
                        class="form-control"
                        type="text"
                      />
                    </div> -->
                    
                    <div class="form-group">
                      <label
                        >Allowance <span class="text-danger">*</span></label
                      >
                      <input
                        v-model="allowance"
                        class="form-control"
                        type="text"
                      />
                    </div>
                    <div class="form-group">
                      <label
                        >Leave Allowance
                        <span class="text-danger">*</span></label
                      >
                      <input
                        v-model="leaveAllowance"
                        class="form-control"
                        type="text"
                      />
                    </div>
                    <div class="form-group">
                      <label
                        >Medical Allowance
                        <span class="text-danger">*</span></label
                      >
                      <input v-model="ma" class="form-control" type="text" />
                    </div>
                    <!-- <div class="add-more">
                                                <a href="#"><i class="fa fa-plus-circle"></i> Add More</a>
                                            </div> -->
                  </div>
                  <div class="col-sm-6">
                    <h4 class="text-primary">Deductions</h4>

                    <div class="form-group">
                      <label>PF <span class="text-danger">*</span></label>
                      <input
                        v-model="pf"
                        class="form-control"
                        type="text"
                        readonly
                      />
                    </div>
                    <div class="form-group">
                      <label>Leave <span class="text-danger">*</span></label>
                      <input v-model="leave" class="form-control" type="text" />
                    </div>
                    <div class="form-group">
                      <label>Tax<span class="text-danger">*</span></label>
                      <input
                        v-model="tax"
                        class="form-control"
                        type="text"
                        readonly
                      />
                    </div>
                    <!-- <div class="form-group">
                      <label
                        >Labour Welfare
                        <span class="text-danger">*</span></label
                      >
                      <input
                        v-model="labourWelfare"
                        class="form-control"
                        type="text"
                      />
                    </div> -->
                    <div class="form-group">
                      <label>Others <span class="text-danger">*</span></label>
                      <input
                        class="form-control"
                        v-model="others"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label>Reason <span class="text-danger">*</span></label>
                  <textarea
                    class="form-control"
                    v-model="reason"
                    rows="4"
                  ></textarea>
                </div>
                <div class="submit-section">
                  <button
                    @click.prevent="onSubmit"
                    class="btn btn-primary submit-btn"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </v-dialog>
        <!-- /Add Salary Modal -->

        <!-- Edit Salary Modal -->
        <v-dialog v-model="dialogEdit" max-width="725px">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Edit Salary</h5>
              <button type="button" class="close" @click="close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="updateEmployeeSalary">
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
                <div class="row">
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label
                        >Select Staff <span class="text-danger">*</span></label
                      >
                      <select
                        class="form-control"
                        v-model="salary.employeeId"
                        v-on:change="getEmployeeDetail"
                      >
                        <option>Select Staff</option>
                        <option
                          v-for="item in employees"
                          :key="item.id"
                          :value="item.id"
                        >
                          {{ item.firstName + " " + item.lastName }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label
                        >Net Salary <span class="text-danger">*</span></label
                      >
                      <input
                        v-model="updateNetSalary"
                        class="form-control"
                        type="text"
                        readonly
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <h4 class="text-primary">Earnings</h4>
                    <div class="form-group">
                      <label>Basic <span class="text-danger">*</span></label>
                      <input
                        v-model="salary.basic"
                        class="form-control"
                        type="text"
                        readonly
                      />
                    </div>

                    <!-- <div class="form-group">
                      <label
                        >Conveyance <span class="text-danger">*</span></label
                      >
                      <input
                        v-model="conveyance"
                        class="form-control"
                        type="text"
                      />
                    </div> -->
                    
                    <div class="form-group">
                      <label
                        >Allowance <span class="text-danger">*</span></label
                      >
                      <input
                        v-model="salary.allowance"
                        class="form-control"
                        type="text"
                      />
                    </div>
                    <div class="form-group">
                      <label
                        >Leave Allowance
                        <span class="text-danger">*</span></label
                      >
                      <input
                        v-model="salary.leaveAllowance"
                        class="form-control"
                        type="text"
                      />
                    </div>
                    <div class="form-group">
                      <label
                        >Medical Allowance
                        <span class="text-danger">*</span></label
                      >
                      <input v-model="salary.ma" class="form-control" type="text" />
                    </div>
                    <!-- <div class="add-more">
                                                <a href="#"><i class="fa fa-plus-circle"></i> Add More</a>
                                            </div> -->
                  </div>
                  <div class="col-sm-6">
                    <h4 class="text-primary">Deductions</h4>

                    <div class="form-group">
                      <label>PF <span class="text-danger">*</span></label>
                      <input
                        v-model="salary.pf"
                        class="form-control"
                        type="text"
                        readonly
                      />
                    </div>
                    <div class="form-group">
                      <label>Leave <span class="text-danger">*</span></label>
                      <input v-model="salary.leave" class="form-control" type="text" />
                    </div>
                    <div class="form-group">
                      <label>Tax<span class="text-danger">*</span></label>
                      <input
                        v-model="salary.tax"
                        class="form-control"
                        type="text"
                        readonly
                      />
                    </div>
                    <!-- <div class="form-group">
                      <label
                        >Labour Welfare
                        <span class="text-danger">*</span></label
                      >
                      <input
                        v-model="labourWelfare"
                        class="form-control"
                        type="text"
                      />
                    </div> -->
                    <div class="form-group">
                      <label>Others <span class="text-danger">*</span></label>
                      <input
                        class="form-control"
                        v-model="salary.others"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label>Reason <span class="text-danger">*</span></label>
                  <textarea
                    class="form-control"
                    v-model="salary.reason"
                    rows="4"
                  ></textarea>
                </div>
                <div class="submit-section">
                  <button
                    @click.prevent="updateEmployeeSalary"
                    class="btn btn-primary submit-btn"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </v-dialog>
        <!-- /Edit Salary Modal -->
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

        <!-- Delete Salary Modal -->
        <v-dialog v-model="dialogDelete" max-width="725px">
          <div class="modal-content">
            <div class="modal-body">
              <div class="form-header">
                <h3>Delete Salary</h3>
                <p>Are you sure want to delete?</p>
              </div>
              <div class="modal-btn delete-action">
                <div class="row">
                  <div class="col-6">
                    <a
                      @click.prevent="removeEmployeeSalary"
                      class="btn btn-primary continue-btn"
                      data-dismiss="modal"
                      >Delete</a
                    >
                  </div>
                  <div class="col-6">
                    <a
                      href="javascript:void(0);"
                      data-dismiss="modal"
                      class="btn btn-primary cancel-btn"
                      >Cancel</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-dialog>
        <!-- /Delete Resignation Modal -->
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
      dialog: false,
      dialogEdit: false,
      dialogDelete: false,
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
        { text: "Email", value: "employee.email" },
        { text: "Role", value: "employee.designation.name" },
        { text: "Salary", value: "gross" },
        { text: "Receive Salary", value: "net" },
        { text: "Payslip", value: "paySlip", sortable: false },
        { text: "Actions", value: "actions", sortable: false },
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
      basic: "0",
      hra: "0",
      ma: "0",
      pf: "0",
      allowance: "0",
      leaveAllowance: "0",
      tax: "0",
      netSalary: "0",
      leave: "0",
      tds: "0",
      da: "0",
      conveyance: "0",
      others: "0",
      reason: "0",
      labourWelfare: "0",
      details: [],
      message: null,
      paymentButton: false,
      paymentMessage: null,
      paymentError: null,
    };
  },

  validations: {
    name: { required },
    reason: { required },
    // noticeDate: { required },
    // resignationDate: { required },
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
    dialogEdit(val) {
      val || this.closeEdit();
    },
    conveyance(val) {
      this.calculateSalary();
    },
    leave(val) {
      this.calculateSalary();
    },
    allowance(val) {
      this.calculateSalary();
    },
    leaveAllowance(val) {
      this.calculateSalary();
    },
    ma(val) {
      this.calculateSalary();
    },
    others(val) {
      this.calculateSalary();
    },
    salary(val) {
      this.calculateSalary();
    },
  },
  computed: {
    updateNetSalary: function () {
      this.updateCalculateSalary()
      return this.salary.netSalary;
    }
  },
  methods: {
    clearModel() {
      this.basic = "0";
      this.conveyance = "0";
      this.allowance = "0";
      this.leaveAllowance = "0";
      this.ma = "0";
      this.pf = "0";
      this.tax = "0";
      this.leave = "0";
      this.labourWelfare = "0";
      this.dothers = "0";
      this.netSalary = "0";
      (this.details = {}), (this.employeeId = "");
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
    calculateSalary() {
      var totalrevenue =
        parseInt(this.basic) +
        parseInt(this.conveyance == "" ? "0" : this.conveyance) +
        parseInt(this.allowance == "" ? "0" : this.allowance) +
        parseInt(this.leaveAllowance == "" ? "0" : this.leaveAllowance) +
        parseInt(this.ma == "" ? "0" : this.ma);
      var totalrevenuewithoutbasic =
        parseInt(this.conveyance == "" ? "0" : this.conveyance) +
        parseInt(this.allowance == "" ? "0" : this.allowance) +
        parseInt(this.leaveAllowance == "" ? "0" : this.leaveAllowance) +
        parseInt(this.ma == "" ? "0" : this.ma);
      if (this.basic != "0")
        this.tax = this.calculateTax(this.basic, this.pf, totalrevenuewithoutbasic);

      var totaldeduction =
        parseInt(this.pf == "" ? "0" : this.pf) +
        parseInt(this.tax == "" ? "0" : this.tax) +
        parseInt(this.leave == "" ? "0" : this.leave) +
        parseInt(this.labourWelfare == "" ? "0" : this.labourWelfare) +
        parseInt(this.others == "" ? "0" : this.others);
      this.netSalary = totalrevenue - totaldeduction;
    },
    updateCalculateSalary() {
      var totalrevenue =
        parseInt(this.salary.basic) +
        parseInt(this.conveyance == "" ? "0" : this.conveyance) +
        parseInt(this.salary.allowance == "" ? "0" : this.salary.allowance) +
        parseInt(this.salary.leaveAllowance == "" ? "0" : this.salary.leaveAllowance) +
        parseInt(this.salary.ma == "" ? "0" : this.salary.ma);
      var totalrevenuewithoutbasic =
        parseInt(this.conveyance == "" ? "0" : this.conveyance) +
        parseInt(this.salary.allowance == "" ? "0" : this.salary.allowance) +
        parseInt(this.salary.leaveAllowance == "" ? "0" : this.salary.leaveAllowance) +
        parseInt(this.salary.ma == "" ? "0" : this.salary.ma);
      if (this.salary.basic != "0")
        this.salary.tax = this.calculateTax(this.salary.basic, this.salary.pf, totalrevenuewithoutbasic);

      var totaldeduction =
        parseInt(this.salary.pf == "" ? "0" : this.salary.pf) +
        parseInt(this.salary.tax == "" ? "0" : this.salary.tax) +
        parseInt(this.salary.leave == "" ? "0" : this.salary.leave) +
        parseInt(this.labourWelfare == "" ? "0" : this.labourWelfare) +
        parseInt(this.salary.others == "" ? "0" : this.salary.others);
      this.salary.netSalary = totalrevenue - totaldeduction;
    },

    calculateTax(basic, pf, params) {
      var annualSalary = parseInt(basic) * 12;
      var annualPension = parseInt(pf) * 12;
      var CRA = 200000 + (20 * annualSalary) / 100;
      var taxable = annualSalary + params - (annualPension + CRA);
      var first300 = (7 * 300000) / 100;
      var next300 = taxable >= 300000 ? (11 * 300000) / 100 : 0;
      var next500 = taxable >= 500000 ? (15 * 500000) / 100 : 0;
      var _next500 = taxable >= 500000 ? (19 * 500000) / 100 : 0;
      var next1600 = taxable >= 1600000 ? (21 * 1600000) / 100 : 0;
      var next3200 = taxable >= 3200000 ? (24 * 3200000) / 100 : 0;
      var annualtax =
        first300 + next300 + next500 + _next500 + next1600 + next3200;
      return annualtax / 12;
    },
    getEmployees() {
      const companyId = this.company.id;
      employeeService.getEmployees(companyId).then(
        (model) => {
          this.employees = model;
          console.log(model);
        },
        (error) => {
          error = error;
        }
      );
    },
    getEmployeeSalary() {
      const companyId = this.company.id;
      employeeService.getEmployeeSalaries(companyId).then(
        (model) => {
          console.log(model);
          this.salaries = model;
        },
        (error) => {
          error = error;
        }
      );
    },
    getEmployeeDetail() {
      employeeService.getEmployeeDetail(this.employeeId).then(
        (model) => {
          console.log("model detail", model);
          if (model.employeeStatutory) {
            this.error = null;
            this.details = model;
            this.basic = model.employeeStatutory.salaryAmount;
            this.pf =
              (model.employeePension.employeeRate *
                model.employeeStatutory.salaryAmount) /
              100;
            this.tax = this.calculateTax(0);
            this.calculateSalary();
          } else {
            this.basic = "0";
            this.pf = "0";
            this.tax = "0";
            this.error =
              "The selected staff'salary cannot be found, please update his statutory information";
          }
        },
        (error) => {
          error = error;
        }
      );
    },
    openDialog() {
      this.dialog = true;
    },
    close() {
      this.dialog = false;
      this.clearModel();
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
    closeEdit() {
      this.dialogEdit = false;
    },
    closeDelete() {
      this.dialogDelete = false;
    },
    setEditSalary(model) {
      this.salary = model;
      this.dialogEdit = true;
    },
    setDeleteSalary(model) {
      this.salary = model;
      this.dialogDelete = true;
    },

    onSubmit() {
      this.submitted = true;

      this.loading = true;

      employeeService
        .addEmployeeSalary(
          (this.basic = parseInt(this.basic)),
          (this.hra = parseInt(this.hra)),
          (this.ma = parseInt(this.ma)),
          (this.pf = parseInt(this.pf)),
          (this.leave = parseInt(this.leave)),
          (this.allowance = parseInt(this.allowance)),
          (this.leaveAllowance = parseInt(this.leaveAllowance)),
          (this.hmo = 0),
          (this.tax = parseInt(this.tax)),
          (this.netSalary = parseInt(this.netSalary)),
          this.employeeId
        )
        .then(
          (id) => {
            const companyId = this.company.id;
            employeeService.getEmployeeSalaries(companyId).then((w) => {
              (this.salaries = w), console.log(w);
              this.close();
            });
          },
          (error) => {
            this.error = error;
            this.loading = false;
          }
        );
    },
    getAccountSettings() {
        organizationService.getAccountSetting(this.company.id)
        .then(
          o => {
            this.salaryPayDay = o.salaryPayDay
            var today = new Date().getDate();
            this.paymentButton = o.salaryPayDay && o.salaryPayDay <= this.today
          }
        )
    },
    updateEmployeeSalary() {
      this.submitted = true;

      this.loading = true;
      //console.log(this.resignation);
      employeeService
        .updateEmployeeSalary(
          parseInt(this.salary.id),
          parseInt(this.salary.basic),
          parseInt(this.salary.hra),
          parseInt(this.salary.ma),
          parseInt(this.salary.pf),
          parseInt(this.salary.leave),
          parseInt(this.salary.allowance),
          parseInt(this.salary.leaveAllowance),
          (this.hmo = 0),
          parseInt(this.salary.tax),
          parseInt(this.updateNetSalary),
          parseInt(this.salary.employeeId)
        )
        .then(
          (id) => {
            employeeService
              .getEmployeeSalaries(this.company.id)
              .then((o) => {
                (this.salaries = o), console.log(o), this.closeEdit();
              });
          },
          (error) => {
            this.error = error;
            this.loading = false;
          }
        );
    },

    removeEmployeeSalary() {
      const id = this.salary.id;
      //console.log(this.resignation);
      employeeService.removeEmployeeSalary(id).then((id) => {
        employeeService.getEmployeeSalaries(this.company.id).then(
          (model) => {
            this.salaries = model;
            console.log(model);
            this.closeDelete();
          },
          (error) => {
            error = error;
          }
        );
      });
    },
  },
  

  mounted() {
    
    this.getEmployees();
    this.getEmployeeSalary();
    this.getAccountSettings();
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