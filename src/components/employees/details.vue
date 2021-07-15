<template>
  <div class="profile">
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
                <h3 class="page-title">Profile</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/index">Dashboard</router-link>
                  </li>
                  <li class="breadcrumb-item active">Profile</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- /Page Header -->

          <div class="card mb-0">
            <div class="card-body">
              <div class="row">
                <div class="col-md-12">
                  <div class="profile-view">
                    <div class="profile-img-wrap">
                      <div class="profile-img">
                        <a @click="openChangePhoto"
                          ><img alt="" :src="media + employee.passportPhoto" v-if="employee.passportPhoto"
                        />
                        <img alt="" src="~@/assets/profiles/avatar-02.jpg" v-if="!employee.passportPhoto"
                        /></a>
                      </div>
                    </div>
                    <div class="profile-basic">
                      <div class="row">
                        <div class="col-md-5">
                          <div class="profile-info-left">
                            <h3 class="user-name m-t-0 mb-0">
                              {{ employee.firstName + " " + employee.lastName }}
                            </h3>
                            <h6 class="text-muted">{{employee.designation.name}}</h6>
                            <small class="text-muted">{{employee.designation.department.name}}</small>
                            <div class="staff-id">
                              Employee ID : {{ company.abbrv +'-' + employee.id }}
                            </div>
                            <div class="small doj text-muted">
                              Date of Join : {{ new Date(employee.createdAt).toLocaleDateString() }}
                            </div>
                            <!-- <div class="staff-msg">
                              <router-link to="/chat" class="btn btn-custom"
                                >Send Message
                              </router-link>
                            </div> -->
                          </div>
                        </div>
                        <div class="col-md-7">
                          <ul class="personal-info">
                            <li>
                              <div class="title-label">Phone:</div>
                              <div class="text">
                                {{ employee.phone }}
                              </div>
                            </li>
                            <li>
                              <div class="title-label">Birthday:</div>
                              <div class="text">{{ new Date(employee.birthday).toLocaleDateString() }}</div>
                            </li>
                            <li>
                              <div class="title-label">Email:</div>
                              <div class="text">
                                <a href="">{{ employee.email }}</a>
                              </div>
                            </li>
                            <li>
                              <div class="title-label">Birthday:</div>
                              <div class="text">{{ new Date(employee.birthday).toLocaleDateString() }}</div>
                            </li>
                            <li>
                              <div class="title-label">Address:</div>
                              <div class="text">{{ employee.address }}</div>
                            </li>
                            <li>
                              <div class="title-label">Gender:</div>
                              <div class="text">{{ employee.gender }}</div>
                            </li>
                            <li>
															<div class="title-label">Reports to:</div>
															<div class="text" v-if="employee.employeeManager">
																<div class="avatar-box">
																	<div class="avatar avatar-xs">
																		<img alt="" :src="media + employee.employeeManager.manager.passportPhoto" v-if="employee.employeeManager.manager.passportPhoto" />
                                    <img alt="" src="~@/assets/profiles/avatar-02.jpg" v-if="!employee.employeeManager.manager.passportPhoto" />
																	</div>
																</div>
																<router-link :to="{name: 'employeedetail', params: {id: employee.employeeManager.id}}">{{employee.employeeManager.manager.firstName + ' ' + employee.employeeManager.manager.lastName}}</router-link>
															</div>
														</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="pro-edit">
                      <a
                        @click="openProfile"
                        v-if="myAccount"
                        class="edit-icon"
                        href="#"
                        ><i class="fa fa-pencil"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card tab-box">
            <div class="row user-tabs">
              <div class="col-lg-12 col-md-12 col-sm-12 line-tabs">
                <ul class="nav nav-tabs nav-tabs-bottom">
                  <li class="nav-item">
                    <a
                      href="#emp_profile"
                      data-toggle="tab"
                      class="nav-link active"
                      >Profile</a
                    >
                  </li>

                  <li class="nav-item">
                    <a
                      href="#bank_statutory"
                      data-toggle="tab"
                      v-if="hrAccount"
                      class="nav-link"
                      >Bank & Statutory</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="tab-content">
            <!-- Profile Info Tab -->
            <div
              id="emp_profile"
              class="pro-overview tab-pane fade show active"
            >
              <div class="row">
                <div class="col-md-6 d-flex">
                  <div class="card profile-box flex-fill">
                    <div class="card-body">
                      <h3 class="card-title">
                        Personal Informations
                        <a
                          href="#"
                          class="edit-icon"
                          v-if="myAccount"
                          @click="openPersonalInfo"
                          ><i class="fa fa-pencil"></i
                        ></a>
                      </h3>
                      <ul class="personal-info">
                        <li>
                          <div class="title-label">Passport No.</div>
                          <div class="text">
                            {{ employee.passportIdentificationNumber }}
                          </div>
                        </li>
                        <li>
													<div class="title-label">Passport Exp Date.</div>
													<div class="text">{{ new Date(employee.passportExpiryDate).toLocaleDateString() }}</div>
												</li>
                        <li>
													<div class="title-label">NIN </div>
													<div class="text">{{ employee.nationalIdentityNumber }}</div>
												</li>
                        <li>
                          <div class="title-label">Tel</div>
                          <div class="text">
                            {{ employee.phone }}
                          </div>
                        </li>
                        <li>
                          <div class="title-label">Nationality</div>
                          <div class="text">{{ employee.nationality }}</div>
                        </li>
                        <li>
                          <div class="title-label">Religion</div>
                          <div class="text">{{ employee.religion }}</div>
                        </li>
                        <li>
                          <div class="title-label">Marital status</div>
                          <div class="text">{{ employee.maritalStatus }}</div>
                        </li>
                        <li>
													<div class="title">Employment of spouse</div>
													<div class="text">{{ employee.employmentOfSpouse }}</div>
												</li>
												<li>
													<div class="title">No. of children</div>
													<div class="text">{{ employee.noOfChildren }}</div>
												</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 d-flex">
                  <div class="card profile-box flex-fill">
                    <div class="card-body">
                      <h3 class="card-title">
                        Emergency Contact
                        <a
                          href="#"
                          class="edit-icon"
                          v-if="myAccount"
                          @click="openEmergencyContact"
                          ><i class="fa fa-pencil"></i
                        ></a>
                      </h3>
                      <div v-if="employee.employeeEmergencies">
                      <div v-if="employee.employeeEmergencies.length > 0">
                        <h5 class="section-title">Primary</h5>
                        <ul class="personal-info">
                          <li>
                            <div class="title-label">Name</div>
                            <div class="text">
                              {{ employee.employeeEmergencies[0].name }}
                            </div>
                          </li>
                          <li>
                            <div class="title-label">Relationship</div>
                            <div class="text">
                              {{ employee.employeeEmergencies[0].relationship }}
                            </div>
                          </li>
                          <li>
                            <div class="title-label">Phone</div>
                            <div class="text">
                              {{
                                employee.employeeEmergencies[0].phone1 +
                                ", " +
                                employee.employeeEmergencies[0].phone2
                              }}
                            </div>
                          </li>
                        </ul>
                        <hr />
                        <h5
                          class="section-title"
                          v-if="employee.employeeEmergencies.length > 1"
                        >
                          Secondary
                        </h5>
                        <ul
                          class="personal-info"
                          v-if="employee.employeeEmergencies.length > 1"
                        >
                          <li>
                            <div class="title-label">Name</div>
                            <div class="text">
                              {{ employee.employeeEmergencies[1].name }}
                            </div>
                          </li>
                          <li>
                            <div class="title-label">Relationship</div>
                            <div class="text">
                              {{ employee.employeeEmergencies[1].relationship }}
                            </div>
                          </li>
                          <li>
                            <div class="title-label">Phone</div>
                            <div class="text">
                              {{
                                employee.employeeEmergencies[1].phone1 +
                                ", " +
                                employee.employeeEmergencies[1].phone2
                              }}
                            </div>
                          </li>
                        </ul>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 d-flex">
                  <div class="card profile-box flex-fill">
                    <div class="card-body">
                      <h3 class="card-title">
                        Bank information
                        <a
                          href="#"
                          class="edit-icon"
                          v-if="myAccount"
                          @click="openBankInfo"
                          ><i class="fa fa-pencil"></i
                        ></a>
                      </h3>
                      <ul class="personal-info" v-if="employee.employeeBank">
                        <li>
                          <div class="title-label">Bank name</div>
                          <div class="text">
                            {{ employee.employeeBank.bankName }}
                          </div>
                        </li>
                        <li>
                          <div class="title-label">Bank account No.</div>
                          <div class="text">
                            {{ employee.employeeBank.bankAccountNumber }}
                          </div>
                        </li>
                        <li>
                          <div class="title-label">Bank Verification No.</div>
                          <div class="text">
                            {{ employee.employeeBank.bvnNumber }}
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 d-flex">
                  <div class="card profile-box flex-fill">
                    <div class="card-body">
                      <h3 class="card-title">
                        Family Informations
                        <a
                          href="#"
                          class="edit-icon"
                          v-if="myAccount"
                          @click="openFamilyInfo"
                          ><i class="fa fa-pencil"></i
                        ></a>
                      </h3>
                      <div class="table-responsive">
                        <table class="table table-nowrap">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Relationship</th>
                              <th>Phone</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              v-for="item in employee.employeeFamilies"
                              :key="item.id"
                            >
                              <td>{{ item.name }}</td>
                              <td>{{ item.relationship }}</td>
                              <td>{{ item.phoneNo }}</td>
                              <td class="text-right">
                                <div class="dropdown dropdown-action">
                                  <a
                                    aria-expanded="false"
                                    data-toggle="dropdown"
                                    class="action-icon dropdown-toggle"
                                    href="#"
                                    ><i class="material-icons">more_vert</i></a
                                  >
                                  <div
                                    class="dropdown-menu dropdown-menu-right"
                                  >
                                    <a
                                      @click="openFamilyInfo"
                                      class="dropdown-item"
                                      ><i class="fa fa-pencil m-r-5"></i>
                                      Edit</a
                                    >
                                    <a href="#" class="dropdown-item"
                                      ><i class="fa fa-trash-o m-r-5"></i>
                                      Delete</a
                                    >
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 d-flex">
                  <div class="card profile-box flex-fill">
                    <div class="card-body">
                      <h3 class="card-title">
                        Education Informations
                        <a
                          href="#"
                          class="edit-icon"
                          v-if="myAccount"
                          @click="openEducation"
                          ><i class="fa fa-pencil"></i
                        ></a>
                      </h3>
                      <div class="experience-box">
                        <ul class="experience-list">
                          <li
                            v-for="item in employee.employeeEducations"
                            :key="item.id"
                          >
                            <div class="experience-user">
                              <div class="before-circle"></div>
                            </div>
                            <div class="experience-content">
                              <div class="timeline-content">
                                <a href="#/" class="name">{{
                                  item.institute
                                }}</a>
                                <div>{{ item.discipline }}</div>
                                <span class="time"
                                  >{{ item.startYear }} -
                                  {{ item.endYear }}</span
                                >
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 d-flex">
                  <div class="card profile-box flex-fill">
                    <div class="card-body">
                      <h3 class="card-title">
                        Experience
                        <a
                          href="#"
                          class="edit-icon"
                          v-if="myAccount"
                          @click="openExperience"
                          ><i class="fa fa-pencil"></i
                        ></a>
                      </h3>
                      <div class="experience-box">
                        <ul class="experience-list">
                          <li
                            v-for="item in employee.employeeExperiences"
                            :key="item.id"
                          >
                            <div class="experience-user">
                              <div class="before-circle"></div>
                            </div>
                            <div class="experience-content">
                              <div class="timeline-content">
                                <a href="#/" class="name">{{
                                  item.companyName
                                }}</a>
                                <span class="time"
                                  >{{ item.startYear }} -
                                  {{ item.endYear }}</span
                                >
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Profile Info Tab -->
            <!-- Bank Statutory Tab -->
            <div class="tab-pane fade" id="bank_statutory">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">Basic Salary Information</h3>
                  <form @submit.prevent="onPostStatutory">
                    <div class="row">
                      <div class="col-sm-4">
                        <div class="form-group">
                          <label class="col-form-label"
                            >Salary basis
                            <span class="text-danger">*</span></label
                          >
                          <select
                            class="form-control"
                            v-model="employee.employeeStatutory.salaryBasis"
                          >
                            <option>Select salary basis type</option>
                            <option value="hourly">Hourly</option>
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="form-group">
                          <label class="col-form-label"
                            >Salary amount
                            <small class="text-muted">per month</small></label
                          >
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">₦</span>
                            </div>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Type your salary amount"
                              v-model="employee.employeeStatutory.salaryAmount"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <h3 class="card-title">PF Information</h3>
                    <div class="row">
                      <div class="col-sm-4">
                        <div class="form-group">
                          <label class="col-form-label"
                            >PF No. <span class="text-danger">*</span></label
                          >
                          <input
                            type="text"
                            class="form-control"
                            v-model="employee.employeePension.pensionNo"
                            placeholder="Type your pension number"
                          />
                        </div>
                      </div>

                      <div class="col-sm-4">
                        <div class="form-group">
                          <label class="col-form-label">PF Manager</label>
                          <select
                            class="form-control"
                            v-model="employee.employeePension.pensionManager"
                          >
                            <option>Select Pension Manager</option>
                            <option v-for="item in pensionManagers" :key="item.pfaCode" :value="item.pfaCode">{{item.description}}</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="form-group">
                          <label class="col-form-label"
                            >Employee PF rate
                            <span class="text-danger">*</span></label
                          >
                          <select
                            class="form-control"
                            v-model="employee.employeePension.employeeRate"
                          >
                            <option>Select PF rate</option>
                            <option value="0">0%</option>
                            <option value="1">1%</option>
                            <option value="2">2%</option>
                            <option value="3">3%</option>
                            <option value="4">4%</option>
                            <option value="5">5%</option>
                            <option value="6">6%</option>
                            <option value="7">7%</option>
                            <option value="8">8%</option>
                            <option value="9">9%</option>
                            <option value="10">10%</option>
                          </select>
                        </div>
                      </div>
                    </div>
                     <hr />
                    <h3 class="card-title">Tax Information</h3>
                    <div class="row">
                      <div class="col-sm-4">
                        <div class="form-group">
                          <label class="col-form-label"
                            >Tax Identification No. <span class="text-danger">*</span></label
                          >
                          <input
                            type="text"
                            class="form-control"
                            v-model="employee.employeeTax.tin"
                            placeholder="Type your tax identification number"
                          />
                        </div>
                      </div>

                      <div class="col-sm-4">
                        <div class="form-group">
                          <label class="col-form-label"
                            >Tax State
                            <span class="text-danger">*</span></label
                          >
                          <select
                            class="form-control"
                            v-model="employee.employeeTax.taxCode" @change="changeTax($event)"
                          >
                            <option>Select Tax State</option>
                            <option v-for="item in taxOffices" :key="item.taxOffice" :value="item.taxOffice">{{item.description}}</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div class="submit-section">
                      <button class="btn btn-primary submit-btn" type="submit">
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <!-- /Bank Statutory Tab -->
          </div>
        </div>
        <!-- /Page Content -->
        <emergency-contact-modal
          :model="employee.employeeEmergencies"
          :id="this.$route.params.id"
          :dialog="emergencyContactDialog"
          v-if="emergencyContactDialog"
          :method="closeEmergencyContact"
        ></emergency-contact-modal>
        <personal-info-modal
          :model="employee"
          :dialog="personalInfoDialog"
          v-if="personalInfoDialog"
          :method="closePersonalInfo"
        ></personal-info-modal>
        <profile-modal
          :model="employee"
          :dialog="profileDialog"
          v-if="profileDialog"
          :method="closeProfile"
        ></profile-modal>
        <bank-info-modal
          :model="employee.employeeBank"
          :id="this.$route.params.id"
          :dialog="bankInfoDialog"
          v-if="bankInfoDialog"
          :method="closeBankInfo"
        ></bank-info-modal>
        <family-info-modal
          :model="employee.employeeFamilies"
          :id="this.$route.params.id"
          :dialog="familyInfoDialog"
          v-if="familyInfoDialog"
          :method="closeFamilyInfo"
        ></family-info-modal>
        <experience-modal
          :model="employee.employeeExperiences"
          :id="this.$route.params.id"
          :dialog="experienceDialog"
          v-if="experienceDialog"
          :method="closeEmergencyContact"
        ></experience-modal>
        <education-modal
          :model="employee.employeeEducations"
          :id="this.$route.params.id"
          :dialog="educationDialog"
          v-if="educationDialog"
          :method="closeEducation"
        ></education-modal>
        <v-dialog v-model="changePhotodialog" max-width="230px">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Change Photo</h5>
              <button type="button" class="close" @click="closeChangePhoto">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="col-md-12">
                <img alt="" :src="file" width="200"
                        />
              </div>
              <div class="col-md-12">
                <button class="btn btn-info" @click="handleFileUpload">Change Photo </button>
                <input type="file" style="display: none" ref="file" accept="image/*" @change="onFilePicked" />
              </div>
            </div>
          </div>
        </v-dialog>
      </div>
      <!-- /Page Wrapper -->
    </div>
  </div>
</template>

<script>
import LayoutHeader from "@/components/layouts/Header.vue";
import LayoutSidebar from "@/components/layouts/Sidebar.vue";
import PersonalInfoModal from "@/components/employees/PersonalInfoModal.vue";
import ProfileModal from "@/components/employees/ProfileModal.vue";
import FamilyInfoModal from "@/components/employees/FamilyInfoModal.vue";
import BankInfoModal from "@/components/employees/BankInfoModal.vue";
import ExperienceModal from "@/components/employees/ExperienceModal.vue";
import EducationModal from "@/components/employees/EducationModal.vue";
import EmergencyContactModal from "@/components/employees/EmergencyContactModal.vue";
import Datepicker from "vuejs-datepicker";
import { required, sameAs } from "vuelidate/lib/validators";
import { employeeService } from "@/services/employeeService.js";
import { authenticationService } from "@/services/authenticationService";
import { organizationService } from "@/services/organizationService";
import { paymentService } from "@/services/paymentService";
export default {
  components: {
    LayoutHeader,
    LayoutSidebar,
    PersonalInfoModal,
    ProfileModal,
    ExperienceModal,
    EducationModal,
    FamilyInfoModal,
    BankInfoModal,
    EmergencyContactModal,
    Datepicker,
  },
  data() {
    return {
      changePhotodialog: false,
      experienceDialog: false,
      profileDialog: false,
      personalInfoDialog: false,
      familyInfoDialog: false,
      bankInfoDialog: false,
      educationDialog: false,
      emergencyContactDialog: false,
      company: authenticationService.currentOfficeValue,
      currentUser: authenticationService.currentUserValue,
      file: null,
      media: 'data:image/jpeg;base64,',
      myAccount: false,
      hrAccount: false,
      pensionManagers: [],
      taxOffices: [],
      employee: {
        firstName: null,
        gender: "",
        id: this.$route.params.id,
        lastName: "",
        maritalStatus: null,
        nationality: null,
        passportIdentificationNumber: null,
        passportPhoto: null,
        phone: "",
        religion: null,
        employeeBank: null,
        employeeEducations: [],
        employeeEmergencies: [],
        employeeExperiences: [],
        employeeFamilies: [],
        employeePension: {
          id: 0,
          pensionNo: "",
          employeeRate: "0",
          pensionManager: "",
        },
        employeeStatutory: {
          id: 0,
          salaryBasis: "",
          salaryAmount: 0.0,
        },
        employeeTax: {
          id: 0,
          tin: "",
          taxCode: "",
          taxOffice: "",
          tax: {}
        },
      },
      employeePF: 0,
    };
  },
  mounted() {
    if (this.$route.params.id) {
      
      this.GetPensionManager();
      this.GetTaxOffice();
      this.GetEmployee();
      // console.log(this.currentUser);
      this.myAccount =
        this.currentUser.employee.id == this.employee.id ||
        this.currentUser.role == "HRAdmin";
      this.hrAccount = this.currentUser.role == "HRAdmin";
    } else {
      this.$route.push("/employees");
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

    // Select 2
    if ($(".select").length > 0) {
      $(".select").select2({
        minimumResultsForSearch: -1,
        width: "100%",
      });
    }
    // Multiselect
    if ($("#customleave_select").length > 0) {
      $("#customleave_select").multiselect();
    }
    if ($("#edit_customleave_select").length > 0) {
      $("#edit_customleave_select").multiselect();
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
  methods: {
    openProfile() {
      this.profileDialog = true;
    },
    openPersonalInfo() {
      this.personalInfoDialog = true;
    },
    openBankInfo() {
      this.bankInfoDialog = true;
    },
    openEducation() {
      this.educationDialog = true;
    },
    openEmergencyContact() {
      this.emergencyContactDialog = true;
    },
    openExperience() {
      this.experienceDialog = true;
    },
    openFamilyInfo() {
      this.familyInfoDialog = true;
    },
    openChangePhoto() {
      this.changePhotodialog = true;
    },

    closeProfile(employee) {
      if (employee) this.employee = employee;
      this.profileDialog = false;
    },
    closePersonalInfo(employee) {
      if (employee) this.employee = employee;
      this.personalInfoDialog = false;
    },
    closeBankInfo(employee) {
      if (employee) this.employee = employee;
      this.bankInfoDialog = false;
    },
    closeEducation(employee) {
      if (employee) this.employee = employee;
      this.educationDialog = false;
    },
    closeEmergencyContact(employee) {
      if (employee) this.employee = employee;
      this.emergencyContactDialog = false;
    },
    closeExperience(employee) {
      if (employee) this.employee = employee;
      this.experienceDialog = false;
    },
    closeFamilyInfo(employee) {
      if (employee) this.employee = employee;
      this.familyInfoDialog = false;
    },
    closeChangePhoto() {
      this.changePhotodialog = false;
    },
    handleFileUpload() {
      this.$refs.file.click()
    },
    onFilePicked(event) {
      const files = event.target.files
      let filename = files[0].name
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.file = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.file = files[0];
      employeeService.changeEmployeePhoto(files[0], this.employee.id).then(
        model => { 
          this.employee = model; 
          if (!this.employee.employeePension) {
            this.employee.employeePension = {
              id: 0,
              pensionNo: "",
              employeeRate: "0",
              pensionManager: "",
            };
          } else {
            this.employee.employeePension.employeeRate = model.employeePension.employeeRate.toString();
          }
          if (!this.employee.employeeStatutory) {
            this.employee.employeeStatutory = {
              id: 0,
              salaryBasis: "",
              salaryAmount: 0.0,
            };
          }
          if (!this.employee.employeeTax) {
                    this.employee.employeeTax = {
                      id: 0,
                      tin: "",
                      taxCode: "",
                      taxOffice: "",
                      tax: {}
                    }
                  }else{
                    this.employee.employeeTax.tax = { taxOffice: this.employee.employeeTax.taxCode, description: this.employee.employeeTax.taxOffice}
                  }

          this.closeChangePhoto()
           },
        e => this.imageError = e.title
      )
    },
    changeTax(event) {
      var v = event.target.value;
      var tax = this.taxOffices.find(c => c.taxOffice == v);
      this.employee.employeeTax.taxCode = tax.taxOffice
      this.employee.employeeTax.taxOffice = tax.description
    },
    GetPensionManager() {
      paymentService.getPensionManager(this.company.id).then(
        (model) => this.pensionManagers = model,
        (err) => {
          this.pensionManagers = [
            { pfaCode:"0021", description: "DEMO INSTANCE: IBTC INVESTMENT LIMITED" },
            { pfaCode:"0022", description: "DEMO INSTANCE: PREMIUM PENSIONS LIMITED"},
            { pfaCode:"0023", description: "DEMO INSTANCE: PENSURE PFA LIMITED"},
            { pfaCode:"0024", description: "DEMO INSTANCE: SIGMA VAUGHN STERLING PENSION LTD"}
          ]
        }
      )
    },
    GetTaxOffice() {
      paymentService.getTaxOffice(this.company.id).then(
        (model) => this.taxOffices = model,
        (err) => {
          this.taxOffices = [
            { taxOffice: "ABIA", description: "ABIA" },
            { taxOffice: "ABUJA", description: "ABUJA" },
            { taxOffice: "ADAMA", description: "ADAMAWA"},
            { taxOffice: "AKWAI", description: "AKWAIBO"}
          ]
        }
      )
    },
    GetEmployee() {
      employeeService.getEmployeeDetail(this.$route.params.id).then(
        (model) => {
          this.employee = model;
          
          if (!this.employee.employeePension) {
            this.employee.employeePension = {
              id: 0,
              pensionNo: "",
              employeeRate: "0",
              pensionManager: "",
            };
          } else {
            this.employee.employeePension.employeeRate = model.employeePension.employeeRate.toString();
          }
          if (!this.employee.employeeStatutory) {
            this.employee.employeeStatutory = {
              id: 0,
              salaryBasis: "",
              salaryAmount: 0.0,
            };
          }
          if (!this.employee.employeeTax) {
                    this.employee.employeeTax = {
                      id: 0,
                      tin: "",
                      taxCode: "",
                      taxOffice: "",
                      tax: {}
                    }
                  }else{
                    this.employee.employeeTax.tax = { taxOffice: this.employee.employeeTax.taxCode, description: this.employee.employeeTax.taxOffice}
                  }
        },
        (error) => {
          this.error = error;
        }
      );
    },
    onPostStatutory() {
      
      if (!this.employee.employeeStatutory.id) {
        this.employee.employeeStatutory.salaryAmount = parseInt(
          this.employee.employeeStatutory.salaryAmount
        );
        this.employee.employeePension.employeeRate = parseInt(
          this.employee.employeePension.employeeRate
        );
        employeeService
          .addEmployeeStatutory(
            this.employee.id,
            this.employee.employeeStatutory,
            this.employee.employeePension,
            this.employee.employeeTax
          )
          .then(
            (model) => {
              getEmployeeDetail()
            },
            (error) => {
              this.error = error;
            }
          );
      } else {
        this.employee.employeeStatutory.salaryAmount = parseInt(
          this.employee.employeeStatutory.salaryAmount
        );
        this.employee.employeePension.employeeRate = parseInt(
          this.employee.employeePension.employeeRate
        );
        employeeService
          .updateEmployeeStatutory(
            this.employee.id,
            this.employee.employeeStatutory,
            this.employee.employeePension,
            this.employee.employeeTax
          )
          .then(
            (model) => {
              getEmployeeDetail()
            },
            (error) => {
              this.error = error;
            }
          );
      }
    },
  },
  name: "profile",
};
</script>