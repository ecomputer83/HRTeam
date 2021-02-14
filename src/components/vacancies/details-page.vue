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
                <h3>Account Manager - Job Title</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item active">Vacancy</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- /Page Header -->

          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-body">
                  <timeline :timeline_data="timeline_data"></timeline>
                  <ul class="nav nav-tabs nav-tabs-bottom">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        href="#bottom-tab1"
                        data-toggle="tab"
                        >Details</a
                      >
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#bottom-tab2" data-toggle="tab"
                        >Job Requisition</a
                      >
                    </li>
                  </ul>

                  <div class="tab-content">
                    <div class="tab-pane show active" id="bottom-tab1">
                      <detail-card></detail-card>
                    </div>
                    <div class="tab-pane" id="bottom-tab2">
                      <requisition-card></requisition-card>
                    </div>
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
import Timeline from "@/components/reusables/timeline.vue";
import DetailCard from "@/components/vacancies/vacancy-info.vue";
import RequisitionCard from "@/components/vacancies/job-requisition.vue";
export default {
  components: {
    LayoutHeader,
    LayoutSidebar,
    Timeline,
    DetailCard,
    RequisitionCard
  },
  data() {
    return {
      timeline_data: [
        {
          name: "Requested",
          value: "",
          status: "passed"
        },
        {
          name: "Enrichment",
          value: "",
          status: "passed"
        },
        {
          name: "Approval",
          value: "",
          status: "passed"
        },
        {
          name: "Publishing",
          value: "",
          status: "passed"
        },
        {
          name: "Receiving Applications(11 Mo)",
          value: "",
          status: "active"
        },
        {
          name: "Selecting Candidates",
          value: "",
          status: "inactive"
        },
        {
          name: "Post-Processing",
          value: "",
          status: "inactive"
        }
      ]
    };
  },
  name: "vacancies-detail"
};
</script>

<style scoped></style>
