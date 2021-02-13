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
                <ul class="breadcrumb">
                  <li class="breadcrumb-item active">Active Vacancies</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- /Page Header -->

          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="datatable table table-stripped mb-0">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Vacancy</th>
                          <th>Status Reason</th>
                          <th>Aptitude</th>
                          <th>Expected Salary</th>
                          <th>Received On</th>
                          <th>Applicant Type</th>
                          ]
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="i in 5">
                          <td style="max-width: unset">
                            <router-link :to="`/applications/aid${i}`">
                              <span>John Doe</span></router-link
                            >
                          </td>
                          <td style="max-width: unset">
                            <router-link :to="`/vacancies/vid${i}`">
                              <span
                                >Account Manager - Job Title</span
                              ></router-link
                            >
                          </td>
                          <td>1: New</td>
                          <td>Good</td>
                          <td>$80,000</td>
                          <td>12/12/2021</td>
                          <td>Applicant</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
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
import Vue from "vue";
export default {
  components: {
    LayoutHeader,
    LayoutSidebar
  },
  mounted() {},
  methods: {},
  name: "applications"
};
</script>

<style scoped>
.datatable > thead > tr > th,
.datatable > tbody > tr > td {
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
