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
            <div class="col-md-9">
              <div class="card">
                <div class="card-body">
                  <timeline
                    @selectTimeline="selectTimeline"
                    :timeline_data="timeline_data"
                    :active_timeline="activeTimeline"
                    :selected_timeline="selectedTimeline"
                  ></timeline>
                  <ul class="nav nav-tabs nav-tabs-bottom">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        href="#bottom-tab1"
                        data-toggle="tab"
                        >General</a
                      >
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#bottom-tab2" data-toggle="tab"
                        >Evaluation</a
                      >
                    </li>
                  </ul>

                  <div class="tab-content">
                    <div class="tab-pane show active" id="bottom-tab1">
                      <application-general></application-general>
                    </div>
                    <div class="tab-pane" id="bottom-tab2">
                      <application-evaluation></application-evaluation>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <div class="card-body">
                  <div v-if="selectedTimeline == 0">
                    <applications-tl-one></applications-tl-one>
                  </div>
                  <div v-if="selectedTimeline == 1">
                    <applications-tl-two></applications-tl-two>
                  </div>
                  <div v-if="selectedTimeline == 2">
                    <applications-tl-three></applications-tl-three>
                  </div>
                  <div v-if="selectedTimeline == 3">
                    <applications-tl-four></applications-tl-four>
                  </div>
                  <div v-if="selectedTimeline == 4">
                    <applications-tl-five></applications-tl-five>
                  </div>
                  <div v-if="selectedTimeline == 5">
                    <applications-tl-six></applications-tl-six>
                  </div>
              <button v-if="(selectedTimeline < timeline_data.length-1 && activeTimeline >= selectedTimeline)" type="button" class="btn btn-primary btn-lg btn-block mt-5" style="border-radius: 0" @click="selectedTimeline+=1">Next Stage <i class="la la-angle-right ml-2"></i></button>
              <button v-if="(selectedTimeline >= timeline_data.length-1 && activeTimeline >= selectedTimeline)" type="button" class="btn btn-success btn-lg btn-block mt-5" style="border-radius: 0">Finish<i class="la la-check ml-2"></i></button>
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
import Timeline from "@/components/reusables/timeline.vue";
import ApplicationGeneral from "@/components/applications/general.vue";
import ApplicationEvaluation from "@/components/applications/evaluation.vue";
import ApplicationsTlOne from "@/components/applications/applications-timeline-one.vue";
import ApplicationsTlTwo from "@/components/applications/applications-timeline-two.vue";
import ApplicationsTlThree from "@/components/applications/applications-timeline-three.vue";
import ApplicationsTlFour from "@/components/applications/applications-timeline-four.vue";
import ApplicationsTlFive from "@/components/applications/applications-timeline-five.vue";
import ApplicationsTlSix from "@/components/applications/applications-timeline-six.vue";
import Vue from "vue";
export default {
  components: {
    LayoutHeader,
    LayoutSidebar,
    Timeline,
    ApplicationGeneral,
    ApplicationEvaluation,
    ApplicationsTlOne,
    ApplicationsTlTwo,
    ApplicationsTlThree, ApplicationsTlFour,ApplicationsTlFive,ApplicationsTlSix
  },
  data() {
    return {
      timeline_data: [
        {
          name: "New",
          value: "",
          status: "passed"
        },
        {
          name: "Initial Validation (9 Mon)",
          value: "",
          status: "active"
        },
        {
          name: "Line Manager Feedback",
          value: "",
          status: "inactive"
        },
        {
          name: "Line Manager Feedback",
          value: "",
          status: "inactive"
        },
        {
          name: "Face-To-Face Interview",
          value: "",
          status: "inactive"
        },
        {
          name: "Contract Negotiation",
          value: "",
          status: "inactive"
        }
      ],
      activeTimeline: 2,
      selectedTimeline: 0
    };
  },
  created() {
    this.selectedTimeline = this.activeTimeline;
  },
  methods: {
    selectTimeline(event) {
      this.selectedTimeline = event;
      console.log("clicked", event);
    }
  },
  name: "application-detail"
};
</script>

<style scoped></style>
