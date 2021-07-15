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
                        >Search Criteria</a
                      >
                    </li>
                  </ul>

                  <div class="tab-content">
                    <div class="tab-pane show active" id="bottom-tab1">
                      <talent-general></talent-general>
                    </div>
                    <div class="tab-pane" id="bottom-tab2">
                      <search-criteria></search-criteria>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <div class="card-body">
                  <div v-if="selectedTimeline == 0">
                    <talent-tl-one></talent-tl-one>
                  </div>
                  <div v-if="selectedTimeline == 1">
                    <talent-tl-two></talent-tl-two>
                  </div>
                  <div v-if="selectedTimeline == 2">
                    <talent-tl-three></talent-tl-three>
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
import TalentGeneral from "@/components/talentSearch/general.vue";
import SearchCriteria from "@/components/talentSearch/search-criteria.vue";
import TalentTlOne from "@/components/talentSearch/talent-timeline-one.vue";
import TalentTlTwo from "@/components/talentSearch/talent-timeline-two.vue";
import TalentTlThree from "@/components/talentSearch/talent-timeline-three.vue";
import Vue from "vue";
export default {
  components: {
    LayoutHeader,
    LayoutSidebar,
    Timeline,
    TalentGeneral,
    SearchCriteria,
    TalentTlOne,
    TalentTlTwo,
    TalentTlThree
  },
  data() {
    return {
      timeline_data: [
        {
          name: "Set Search Criteria",
          value: ""
        },
        {
          name: "Search In Progress",
          value: ""
        },
        {
          name: "Search Results",
          value: ""
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
      // console.log("clicked", event);
    }
  },
  name: "talent-search-detail"
};
</script>

<style scoped></style>
