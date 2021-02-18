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
                          <td>{{ applicant.salutation }}</td>

                          <td>{{ applicant.firstName }}</td>
                          <td>{{ applicant.lastName }}</td>
                          <td>{{ applicant.phone1 }}</td>
                          <td>{{ applicant.phone2 }}</td>
                          <td>{{ applicant.email }}</td>
                          <td>{{ applicant.gender }}</td>
                          <td>{{ applicant.address }}</td>
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
import { applicantService } from "@/services/applicantService";
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

    if (this.applicants.length > 0) {
      if ($(".datatable").length > 0) {
        $(".datatable").DataTable({
          bFilter: false,
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
    }
  },
  methods: {
    getAllApplicants() {
      applicantService.getAllApplicant().then(
        (model) => {
          this.applicants = model;
        },
        (error) => {
          error = error;
        }
      );
    },
  },
  name: "applicants",
};
</script>
