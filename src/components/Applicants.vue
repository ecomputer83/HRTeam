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
                  <li class="breadcrumb-item active">Applicants</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- /Page Header -->

          <div class="row">
            <div
              class="tab-pane show active col-md-12"
              id="solid-rounded-justified-tab1"
            >
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
                      <td>
                        <router-link to="/job-profile-info">
                          Account Manager
                        </router-link>
                      </td>
                      <td>{{ applicant.firstname }}</td>
                      <td>{{ applicant.lastname }}</td>
                      <td>{{ applicant.phone1 }}</td>
                      <td>{{ applicant.phone2 }}</td>
                      <td>{{ applicant.email }}</td>
                      <td>{{ applicant.gender }}</td>
                      <td>{{ applicant.address }}</td>
                    </tr>
                    <!-- <tr>
                          <td>
                            <router-link to="/job-profile-info">
                              Account Manager
                            </router-link>
                          </td>
                          <td>System Architect</td>
                          <td>Edinburgh</td>
                          <td>+2348130030030</td>
                          <td>(035) 365456</td>
                          <td>bewer@example.com</td>
                          <td>Lagos</td>
                          <td>Nigeria</td>
                        </tr>
                        <tr>
                          <td>
                            <router-link to="/job-profile-info">
                              Account Manager
                            </router-link>
                          </td>
                          <td>System Architect</td>
                          <td>Edinburgh</td>
                          <td>+2348130030030</td>
                          <td>(035) 365456</td>
                          <td>bewer@example.com</td>
                          <td>Lagos</td>
                          <td>Nigeria</td>
                        </tr>
                        <tr>
                          <td>
                            <router-link to="/job-profile-info">
                              Account Manager
                            </router-link>
                          </td>
                          <td>System Architect</td>
                          <td>Edinburgh</td>
                          <td>+2348130030030</td>
                          <td>(035) 365456</td>
                          <td>bewer@example.com</td>
                          <td>Lagos</td>
                          <td>Nigeria</td>
                        </tr>
                        <tr>
                          <td>
                            <router-link to="/job-profile-info">
                              Account Manager
                            </router-link>
                          </td>
                          <td>System Architect</td>
                          <td>Edinburgh</td>
                          <td>+2348130030030</td>
                          <td>(035) 365456</td>
                          <td>bewer@example.com</td>
                          <td>Lagos</td>
                          <td>Nigeria</td>
                        </tr>
                        <tr>
                          <td>
                            <router-link to="/job-profile-info">
                              Account Manager
                            </router-link>
                          </td>
                          <td>System Architect</td>
                          <td>Edinburgh</td>
                          <td>+2348130030030</td>
                          <td>(035) 365456</td>
                          <td>bewer@example.com</td>
                          <td>Lagos</td>
                          <td>Nigeria</td>
                        </tr>
                        <tr>
                          <td>
                            <router-link to="/job-profile-info">
                              Account Manager
                            </router-link>
                          </td>
                          <td>System Architect</td>
                          <td>Edinburgh</td>
                          <td>+2348130030030</td>
                          <td>(035) 365456</td>
                          <td>bewer@example.com</td>
                          <td>Lagos</td>
                          <td>Nigeria</td>
                        </tr>
                        <tr>
                          <td>
                            <router-link to="/job-profile-info">
                              Account Manager
                            </router-link>
                          </td>
                          <td>System Architect</td>
                          <td>Edinburgh</td>
                          <td>+2348130030030</td>
                          <td>(035) 365456</td>
                          <td>bewer@example.com</td>
                          <td>Lagos</td>
                          <td>Nigeria</td>
                        </tr> -->
                  </tbody>
                </table>
              </div>
            </div>
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
import { applicantService } from "@/service/applicantService";
import Vue from "vue";
export default {
  components: {
    LayoutHeader,
    LayoutSidebar,
  },
  data() {
    return {
      applicants: [],
      applicant: null,
      loading: false,
      error: "",
    };
  },

  mounted() {
    this.getAllApplicants();
  },

  methods: {
    getAllApplicants() {
      applicantService.getAllApplicants().then(
        (model) => {
          this.applicants = model;
        },
        (error) => {
          error = error;
        }
      );
    },
  },

  name: "vacancies",
};
</Script>