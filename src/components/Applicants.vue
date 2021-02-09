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
            <div class="tab-pane show active col-md-12" id="solid-rounded-justified-tab1">
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
                          <th>City(Private)</th>
                          <th>Country/Region (Private)</th>
                        </tr>
                      </thead>
                      <tbody>
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
  import LayoutHeader from '@/components/layouts/Header.vue'
  import LayoutSidebar from '@/components/layouts/Sidebar.vue'
  import Vue from 'vue'
  export default {
    components: {
      LayoutHeader,
      LayoutSidebar,
    },
    mounted() {
      
    },
    methods: {
    },
    name: 'vacancies'
  }
</Script>