<template>
    <div class="joblist">
        <div class="main-wrapper">
            <layout-headerApp></layout-headerApp>

            <body>
                <!-- Page Wrapper -->
                <div class="page-wrapper job-wrapper" style="font-family: 'CircularStd', sans-serif;
        font-size: .9375rem;
        color: #1f1f1f;
        background-color: #f7f7f7;
        min-height: 100%;
        overflow-x: hidden;">

                    <!-- Page Content -->
                    <div class="content container">

                        <!-- Page Header -->
                        <div class="page-header">
                            <div class="row">
                                <div class="col-sm-12">
                                    <h3 class="page-title">Jobs</h3>
                                    <ul class="breadcrumb">
                                        <li class="breadcrumb-item">
                                            <router-link to="/index">Dashboard</router-link>
                                        </li>
                                        <li class="breadcrumb-item active">Jobs</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- /Page Header -->

                        <div class="row">
                            <div class="col-md-4" v-for="model in vacancies" v-bind:key="model.id">
                                <router-link :to="{name: 'jobview', params: {id: model.id}}" class="job-list">
                                    <div class="job-list-det">
                                        <div class="job-list-desc">
                                            <h3 class="job-list-title">{{model.jobProfile.title}}</h3>
                                            <h4 class="job-department">{{model.designation.name}}</h4>
                                        </div>
                                        <div class="job-type-info">
                                            <span class="job-types">Full Time</span>
                                        </div>
                                    </div>
                                    <div class="job-list-summary"><span>{{model.description | truncate(250, '...')}}</span></div>
                                    <div class="job-list-footer">
                                        <ul>
                                            <li><i class="fa fa-map-signs"></i> {{model.jobProfile.company.name}}</li>
                                            <li><i class="fa fa-money"></i> {{model.jobProfile.salaryMin.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}} - {{model.jobProfile.salaryMax.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}}</li>
                                            <li><i class="fa fa-clock-o"></i> {{getDays(model.periodFrom)}} days ago</li>
                                        </ul>
                                    </div>
                                </router-link>
                            </div>
                            
                        </div>
                    </div>

                </div>
                <!-- /Page Wrapper -->
            </body>
        </div>
    </div>
</template>

<script>
    import LayoutHeaderApp from '@/components/layouts/HeaderApp.vue'
    import { jobService } from '@/services/jobService';
    export default {
        components: {
            LayoutHeaderApp,
        },
        data() {
            return {
                vacancies: []
            }
        },
        mounted() {
            // Date Time Picker
            this.getVacancies()
            if ($('.datetimepicker').length > 0) {
                $('.datetimepicker').datetimepicker({
                    format: 'DD/MM/YYYY',
                    icons: {
                        up: "fa fa-angle-up",
                        down: "fa fa-angle-down",
                        next: 'fa fa-angle-right',
                        previous: 'fa fa-angle-left'
                    }
                });
            }

            if ($('.floating').length > 0) {
                $('.floating').on('focus blur', function (e) {
                    $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
                }).trigger('blur');
            }
        },
        methods: {
        getVacancies() {
        jobService.getVancanciesByOrg()
        .then(
          p => {
            this.vacancies = p
          }
        )
      },

      getDays(start) {
            // To set two dates to two variables 
            var date1 = new Date(start); 
            var date2 = new Date(); 
  
            // To calculate the time difference of two dates 
            var Difference_In_Time = date2.getTime() - date1.getTime(); 
  
            // To calculate the no. of days between two dates 
            var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
            return parseInt(Difference_In_Days);
      }
  },
        name: 'joblist'
    }
</script>