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
                  <li class="breadcrumb-item active">Active Applications</li>
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
                    <v-data-table
                  :headers="headers"
                  :items="applications"
                  sort-by=""
                  class="elevation-1"
                >
                  <template v-slot:[`item.profile`]="{ item }">
                      <router-link :to="`/applications/${item.id}`">
                              <span>{{item.applicant.firstName + ' ' + item.applicant.lastName}}</span></router-link
                            >
                  </template>
                  <template v-slot:[`item.vacant`]="{ item }">
                      <router-link :to="`/vacancies/vid${item.vacancy.id}`">
                              <span
                                >{{item.vacancy.jobProfile.title}}</span
                              ></router-link
                            >
                  </template>
                  <template v-slot:[`item.apt`]="{ item }">
                        {{(!item.applicationScore) ? 'Not yet' : (item.applicationScore.score) ? 'Passed' : 'Failed'}}
                  </template>
                  <template v-slot:[`item.expected`]="{ item }">
                        ₦{{item.expectedSalary.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}}
                  </template>
                  <template v-slot:[`item.created`]="{ item }">
                        {{ item.createdAt ? new Date(item.createdAt).toLocaleDateString() : ""}}
                  </template>
                  <template v-slot:[`item.stat`]="{ item }">
                    <a class="btn btn-white btn-sm btn-rounded" v-if="item.status == 0"
                            aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-purple"></i> New
                          </a>
                    <a class="btn btn-white btn-sm btn-rounded" v-if="item.status == 1"
                            aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-success"></i> Accepted
                          </a>
                    <a class="btn btn-white btn-sm btn-rounded" v-if="item.status == 2"
                            aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-info"></i> Phone Interview 
                          </a>
                    <a class="btn btn-white btn-sm btn-rounded" v-if="item.status == 3"
                            aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-info"></i> Aptitude Interview 
                          </a>
                    <a class="btn btn-white btn-sm btn-rounded" v-if="item.status == 4"
                            aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-info"></i> Face-Face Interview 
                          </a>
                    <a class="btn btn-white btn-sm btn-rounded" v-if="item.status == 8"
                            aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-danger"></i> Rejected 
                          </a>
                  </template>
                </v-data-table>
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
import { jobService } from '@/services/jobService';
import { authenticationService } from "@/services/authenticationService";
export default {
  components: {
    LayoutHeader,
    LayoutSidebar
  },
  data () {
    return {
      headers: [
        {
          text: 'Name',
          align: 'start',
          value: 'profile',
        },
        { text: 'Vacancy', value: 'vacant' },
        { text: 'Status Reason', value: 'stat' },
        { text: 'Aptitude', value: 'apt' },
        { text: 'Expected Salary', value: 'expected' },
        { text: 'Received On', value: 'created' },
      ],
      applications: [],
      company: authenticationService.currentOfficeValue,
    }
  },
  mounted() {
    this.getApplications()
    if ($(".datatable").length > 0) {
      $(".datatable").DataTable({
        bFilter: false
      });
    }
  },
  methods: {
    getApplications() {
        jobService.getApplications(this.company.id)
        .then(
          p => {
            this.applications = p
          }
        )
      },
  },
  name: "applications"
};
</script>
