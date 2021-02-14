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
                  <li class="breadcrumb-item active">Active Applicants</li>
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
              <div class="card">
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="datatable table table-stripped mb-0">
                      <thead>
                        <tr>
                          <th>Salutation</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Mobile Phone</th>
                          <th>Home Phone</th>
                          <th>Email Address</th>
                          <th>City(Private)</th>
                          <th>Country/Region (Private)</th>
                          <th>Status Reason</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="i in 5">
                          <td>
                            Mr.
                          </td>
                          <td>John</td>
                          <td>Doe</td>
                          <td><a href="tel:">+2348130030030</a></td>
                          <td><a href="tel:">+2348130030030</a></td>
                          <td><a href="mailto:">bewer@example.com</a></td>
                          <td>Lagos</td>
                          <td>Nigeria</td>
                          <td>To be evaluated</td>
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
  mounted() {
    if ($(".datatable").length > 0) {
      $(".datatable").DataTable({
        bFilter: false
      });
    }
    if ($(".floating").length > 0) {
      $(".floating")
        .on("focus blur", function(e) {
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
  methods: {},
  name: "applicants"
};
</script>
