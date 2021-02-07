<template>
  <div class="onboarding">
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
    <h1>This is the job profile</h1>
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
      
    },
    methods: {
    },
    name: 'onboarding'
  }
</Script>