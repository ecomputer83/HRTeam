<template>
  <div class="talentsearch">
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
                  <li class="breadcrumb-item active">Job Profile</li>
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
                          <th>Search Title</th>
                          <th>Created On</th>
                          <th>Number of Results</th>
                          <th>Search Finished</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="i in 2">
                          <td style="max-width: unset">
                            <router-link :to="`/talent-search/tid${i}`">
                              <span>Account Manager</span></router-link
                            >
                          </td>
                          <td>12/12/2021 12:90PM</td>
                          <td>12</td>
                          <td>No</td>
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
  import LayoutHeader from '@/components/layouts/Header.vue'
  import LayoutSidebar from '@/components/layouts/Sidebar.vue'
  import Vue from 'vue'
  export default {
    components: {
      LayoutHeader,
      LayoutSidebar,
    },
    mounted() {
    if ($(".datatable").length > 0) {
      $(".datatable").DataTable({
        bFilter: false
      });
    }
  },
    methods: {
    },
    name: 'talentsearch'
  }
</Script>