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
                  <ul class="timeline">
                    <li class="passed-tl">1: Requested</li>
                    <li class="passed-tl">2: Enrichment</li>
                    <li class="passed-tl">3: Approval</li>
                    <li class="passed-tl">4: Publishing</li>
                    <li class="active-tl">5: Receiving Applications(11 Mo)</li>
                    <li>Selecting Candidates</li>
                    <li>Post-Processing</li>
                  </ul>
                  <ul class="tabs">
                    <li
                      data-tab-target="#home"
                      id="home_tab"
                      v-on:click="setTab('home')"
                      class="active tab"
                    >
                      Overview
                    </li>
                    <li
                      data-tab-target="#pricing"
                      id="pricing_tab"
                      v-on:click="setTab('pricing')"
                      class="tab"
                    >
                      Job Requisition
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div id="home_content" data-tab-content class="active">
                      <h1>Home</h1>
                      <p>This is the home</p>
                    </div>
                    <div id="pricing_content" data-tab-content>
                      <h1>Pricing</h1>
                      <p>Some information on pricing</p>
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
export default {
  components: {
    LayoutHeader,
    LayoutSidebar,
  },
  created() {},
  mounted() {},
  methods: {
    setTab: function (tabid) {
      const tabContents = document.querySelectorAll("[data-tab-content]");
      const tabs = document.querySelectorAll("[data-tab-target]");
      const tab = document.getElementById(`${tabid}_tab`);
      const target = document.getElementById(`${tabid}_content`);
      tabContents.forEach((tabContent) => {
        tabContent.classList.remove("active");
      });
      tabs.forEach((t) => {
        t.classList.remove("active");
      });
      tab.classList.add("active");
      target.classList.add("active");
    },
  },
  name: "vacancies-detail",
};
</script>

<style scoped>
.card {
  z-index: 1;
}
.timeline {
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 0;
  overflow: auto;
  margin-bottom: 50px;
}

.timeline li {
  list-style: none;
  position: relative;
  text-align: center;
  flex-grow: 1;
  flex-basis: 0;
  font-size: 14px;
  padding: 0 5px;
  white-space: nowrap;
}

.timeline li:before {
  content: "";
  width: 30px;
  height: 30px;
  border: 3px solid #f1f1f1;
  border-radius: 50%;
  display: block;
  text-align: center;
  line-height: 50px;
  margin: 0 auto 10px auto;
  background: #fff;
  transition: all ease-in-out 0.3s;
  cursor: pointer;
}

.timeline li:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: #f1f1f1;
  top: 15px;
  left: -50%;
  z-index: -1;
  transition: all ease-in-out 0.3s;
}

.timeline li:first-child:after {
  content: none;
}
.timeline li.active-tl {
  font-weight: 600;
}
.timeline li.active-tl:before {
  content: "\25CF";
  color: #fc6075;
  border: 3px solid #fc6075;
  align-items: center;
  display: flex;
  font-size: 23px;
  justify-content: center;
  line-height: 1;
}

.timeline li.passed-tl:before {
  content: "\2713";
  background: #fc6075;
  color: #fff;
  border: 3px solid #fc6075;
  align-items: center;
  display: flex;
  font-size: 18px;
  justify-content: center;
  line-height: 1;
}

.timeline li.passed-tl + li:after {
  background: #fc6075;
}
[data-tab-content] {
  display: none;
}

.active[data-tab-content] {
  display: block;
}
.tabs {
  display: flex;
  justify-content: flex-start;
  list-style-type: none;
  margin: 0;
  border-bottom: 1px solid #f1f1f1;
}

.tab {
  cursor: pointer;
  padding: 10px;
  padding: 10px 20px;
}

.tab.active {
  background-color: #fc6075;
  color: #fff;
  border-radius: 15px 15px 0 0;
}

.tab:hover {
  background-color: #ffebda;
  color: #000;
  border-radius: 15px 15px 0 0;
}

.tab-content {
  margin-left: 20px;
  margin-right: 20px;
}
</style>
