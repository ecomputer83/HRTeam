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
import Vue from "vue";
export default {
  components: {
    LayoutHeader,
    LayoutSidebar,
    Timeline,TalentGeneral,SearchCriteria
  },
  data() {
    return {
      timeline_data: [
        {
        name:'Set Search Criteria',
        value:'',
        status:'passed'
      },
        {
        name:'Search In Progress',
        value:'',
        status:'active'
      },
        {
        name:'Search Results',
        value:'',
        status:'inactive'
      },
      ]      
    }
  },
  methods: {
  },
  name: "talent-search-detail"
};
</script>

<style scoped>

</style>
