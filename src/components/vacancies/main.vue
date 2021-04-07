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
                <div class="card-header">
                    <div class="d-flex justify-content-between">
                      <h4 class="card-title mb-0">Vacancies Information</h4>
                      <div class="col-auto float-right ml-auto">
                          <router-link to="/addvacancy" class="btn add-btn"><i
                            class="fa fa-plus"></i>Add Vacancy</router-link>
                        </div>
                    </div>
                  </div>
                <div class="card-body">
                  <div class="table-responsive">

                <v-data-table
                  :headers="headers"
                  :items="vacancies"
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
                    ><i class="material-icons">more_vert</i></a
                  >
                  <div class="dropdown-menu dropdown-menu-right">
                    <a
                      class="dropdown-item"
                      ><i class="fa fa-pencil m-r-5"></i> Edit</a
                    >
                    <a
                      class="dropdown-item"
                      ><i class="fa fa-trash-o m-r-5"></i> Delete</a
                    >
                  </div>
                </div>
                  </template>
                </v-data-table>

                    <!-- <table class="datatable table table-stripped mb-0">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Received</th>
                          <th>Employed Applicants</th>
                          <th>Rejected Applicants</th>
                          <th>New</th>
                          <th>HR Interview</th>
                          <th>Supervisor Interview</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="model in vacancies" v-bind:key="model.id">
                          <td style="max-width: unset">
                            <router-link :to="{name: 'vacancydetail', params: {id: model.id}}">
                              <span
                                >{{model.title}}</span
                              ></router-link
                            >
                          </td>
                          <td>0</td>
                          <td>{{model.acceptedApplicationCount}}</td>
                          <td>{{model.rejectedApplicationCount}}</td>
                          <td>{{model.newApplicationCount}}</td>
                          <td>{{model.hrInterviewCount}}</td>
                          <td>{{model.supervisorInterviewCount}}</td>
                        </tr>
                      </tbody>
                    </table> -->
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
import { authenticationService } from '@/services/authenticationService';
import { jobService } from '@/services/jobService';
import Vue from "vue";
export default {
  components: {
    LayoutHeader,
    LayoutSidebar
  },
  data() {
      return {
          headers: [
            {
              text: 'Name',
              align: 'start',
              value: 'title',
            },
            { text: 'Received', value: '0' },
            { text: 'Employed Applicants', value: 'acceptedApplicationCount' },
            { text: 'Rejected Applicants', value: 'rejectedApplicationCount' },
            { text: 'New', value: 'newApplicationCount' },
            { text: 'HR Interview', value: 'hrInterviewCount' },
            { text: 'Supervisor Interview', value: 'supervisorInterviewCount' },
            { text: 'Action', value: 'actions', sortable: false },
          ],
          vacancies: [],
          currentOffice: authenticationService.currentOfficeValue
      }
   },
  mounted() {
      this.getVacancies()
     if ($('.datatable').length > 0) {
        $('.datatable').DataTable({
          "bFilter": false,
        });
      }
  },
  methods: {
    getVacancies() {
        jobService.getVacancySummaries(this.currentOffice.id)
        .then(
          p => {
            this.vacancies = p
          }
        )
      }
  },
  name: "vacancies"
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