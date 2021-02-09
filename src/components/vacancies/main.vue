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
                          <th>Status Reason</th>
                          <th>Positions S</th>
                          <th>Received</th>
                          <th>Employed</th>
                          <th>Rejected</th>
                          <th>New</th>
                          <th>Employee</th>
                          <th>Supervisor Feedback</th>
                          <th>HR Interview</th>
                          <th>Supervisor Interview</th>
                          <th>Contract Negotiation</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="i in 10">
                          <td style="max-width: unset">
                            <router-link :to="`/vacancies/vid${i}`"> <span>Account Manager - Job Title</span></router-link>
                          </td>
                          <td>2</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
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
    LayoutSidebar,
  },
  mounted() {},
  methods: {},
  name: "vacancies",
};
</Script>

<style scoped>
.datatable > thead > tr > th,
.datatable > tbody > tr > td {
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>