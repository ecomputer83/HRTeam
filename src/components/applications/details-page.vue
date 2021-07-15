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
              <div class="col-sm-11">
                <h3>Account Manager - Job Title</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item active">Vacancy</li>
                </ul>
              </div>
              <div class="col-sm-1 padTop53">
                <a class="btn btn-white btn-sm btn-rounded" v-if="app.status == 0"
                            aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-purple"></i> New
                          </a>
                    <a class="btn btn-white btn-sm btn-rounded" v-if="app.status == 1"
                            aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-success"></i> Accepted
                          </a>
                    <a class="btn btn-white btn-sm btn-rounded" v-if="app.status == 2"
                            aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-info"></i> Phone Interview 
                          </a>
                    <a class="btn btn-white btn-sm btn-rounded" v-if="app.status == 3"
                            aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-info"></i> Aptitude Interview 
                          </a>
                    <a class="btn btn-white btn-sm btn-rounded" v-if="app.status == 4"
                            aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-info"></i> Face-Face Interview 
                          </a>
                    <a class="btn btn-white btn-sm btn-rounded" v-if="app.status == 5"
                            aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-info"></i> Negotiation
                          </a>
                    <a class="btn btn-white btn-sm btn-rounded" v-if="app.status == 8"
                            aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-danger"></i> Rejected 
                          </a>
              </div>
            </div>
          </div>
          <!-- /Page Header -->

          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-body">
                  <timeline
                    @selectTimeline="selectTimeline"
                    :timeline_data="timeline_data"
                    :active_timeline="activeTimeline"
                    :selected_timeline="selectedTimeline"
                  ></timeline>
                  <div class="row">
                      <div class="col-md-8">
                      <application-general :app="app" :currentOffice="currentOffice" @update="app = $event;"></application-general>
                      </div>
                      <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                  <div v-if="selectedTimeline == 0">
                    <applications-tl-one :app="app" :currentOffice="currentOffice" @update="app = $event;" :action="NextToPhoneInterview"></applications-tl-one>
                  </div>
                  <div v-if="selectedTimeline == 1">
                    <applications-tl-four :app="app" :currentOffice="currentOffice" @update="app = $event;" :action="(app.vacancy.vacancysettings.careerTestingChecked) ? NextToApptitude : (app.vacancy.vacancysettings.faceToFaceInterviewChecked) ? NextToFaceInterview : NextToNegotiation"></applications-tl-four>
                  </div>
                  <div v-if="selectedTimeline == 2">
                    <applications-tl-three :app="app" :currentOffice="currentOffice" @update="app = $event;" :action="(app.vacancy.vacancysettings.faceToFaceInterviewChecked) ? NextToFaceInterview : NextToNegotiation"></applications-tl-three>
                  </div>
                  <div v-if="selectedTimeline == 3">
                    <applications-tl-five :app="app" :currentOffice="currentOffice" @update="app = $event;" :action="NextToNegotiation"></applications-tl-five>
                  </div>
                  <div v-if="selectedTimeline == 4">
                    <applications-tl-six :app="app" :currentOffice="currentOffice" @update="app = $event;" :action="acceptApplication"></applications-tl-six>
                  </div>
              
              <button type="button" class="btn btn-danger btn-lg btn-block mt-5" style="border-radius: 0" @click="rejectApplication">Reject<i class="la la-uncheck ml-2"></i></button>
                </div>
              </div>
                      </div>
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
import { jobService } from '@/services/jobService';
import { authenticationService } from "@/services/authenticationService";
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
          status: "active",
          id: 0
        },
        {
          name: "Line Manager Feedback",
          value: "",
          status: "inactive",
          id: 1
        },
        {
          name: "Contract Negotiation",
          value: "",
          status: "inactive",
          id: 4
        }
      ],
      activeTimeline: 0,
      selectedTimeline: 0,
      currentOffice: authenticationService.currentOfficeValue,
      dataunsaved: false,
      app: {}
    };
  },
  watch: {
    'app': {
      handler: function(after, before) {
        if(after != before)
        this.dataunsaved = true
      },
      deep: true
    }
  },
  created() {
    this.selectedTimeline = this.activeTimeline;
  },
  methods: {
    selectTimeline(event) {
      this.selectedTimeline = event;
      // console.log("clicked", event);
    },
    getApplication(){
      jobService.getApplication(this.$route.params.id)
        .then(
          m => {
            this.app = m
            if(m.vacancy.vacancysettings.careerTestingChecked){
              this.timeline_data.push({name: "Aptitude Interview", value: "", status: "inactive", id: 2 })
            }
            if(m.vacancy.vacancysettings.faceToFaceInterviewChecked){
              this.timeline_data.push({name: "Face-To-Face Interview", value: "", status: "inactive", id: 3 })
            }
            this.timeline_data.sort((a, b) => (a.id > b.id) ? 1 : -1)
            this.activeTimeline = this.getTimeline(m.status)
            this.selectedTimeline = this.activeTimeline;
          }
        )
    },
    getTimeline(status) {
      switch(status) {
        case 0:
          return 0;
        case 2:
          return 1;
        case 3:
          return 2;
        case 4:
          return 3;
        case 5:
          return 4;
        case 1:
          return 4;
        default:
          return 0
      }
    },
    NextToPhoneInterview(){
      this.app.applicationInterview = {
        applicationId: this.app.id
      }
      jobService.createApplicationInterview(this.app.id, this.app.applicationInterview)
        .then(
          m => {
            jobService.getApplication(this.app.id)
            .then(
                m => {
            this.app = m
            this.timeline_data.sort((a, b) => (a.id > b.id) ? 1 : -1)
            this.activeTimeline = this.getTimeline(m.status)
            this.selectedTimeline = this.activeTimeline;
              }
              )
          }
        )
      this.dataunsaved = false;
    },

    async NextToFaceInterview(){
      await this.updateStage(this.app)
      this.app.applicationFaceToView = {
        applicationId: this.app.id
      }
      jobService.createApplicationFaceInterview(this.app.id, this.app.applicationFaceToView)
        .then(
          m => {
            jobService.getApplication(this.app.id)
            .then(
                m => {
            this.app = m
            this.timeline_data.sort((a, b) => (a.id > b.id) ? 1 : -1)
            this.activeTimeline = this.getTimeline(m.status)
            this.selectedTimeline = this.activeTimeline;
          }
              )
          }
        )
      this.dataunsaved = false;
    },

    async NextToApptitude(){
      await this.updateStage(this.app)
      this.app.applicationScore = {
        applicationId: this.app.id
      }
      jobService.createApplicationScore(this.app.id, this.app.applicationScore)
        .then(
          m => {
            jobService.getApplication(this.app.id)
            .then(
                m => {
            this.app = m
            this.timeline_data.sort((a, b) => (a.id > b.id) ? 1 : -1)
            this.activeTimeline = this.getTimeline(m.status)
            this.selectedTimeline = this.activeTimeline;
          }
              )
          }
        )
      this.dataunsaved = false;
    },

    async NextToNegotiation(){
      await this.updateStage(this.app)
      this.app.applicationNegotiation = {
        applicationId: this.app.id
      }
      jobService.createApplicationNegotiation(this.app.id, this.app.applicationNegotiation)
        .then(
          m => {
            jobService.getApplication(this.app.id)
            .then(
                m => {
            this.app = m
            this.timeline_data.sort((a, b) => (a.id > b.id) ? 1 : -1)
            this.activeTimeline = this.getTimeline(m.status)
            this.selectedTimeline = this.activeTimeline;
          }
              )
          }
        )
      this.dataunsaved = false;
    },

    async updateStage(application){
      if(application.status == 2){
        await jobService.updateApplicationInterview(application.applicationInterview);
      }else if(application.status == 3){
        await jobService.updateApplicationScore(application.applicationScore);
      }else if(application.status == 4){
        await jobService.updateApplicationFaceInterview(application.applicationFaceToView);
      }else if(application.status == 5){
        await jobService.updateApplicationNegotiation(application.applicationNegotiation);
      }
    },

    async acceptApplication() {
      await this.updateStage(this.app)
      this.app.status = 1

      jobService.updateApplication(this.app)
        .then(
          m => {
            jobService.getApplication(this.$route.params.id)
            .then(
                m => {
            this.app = m
            this.timeline_data.sort((a, b) => (a.id > b.id) ? 1 : -1)
            this.activeTimeline = this.getTimeline(m.status)
            this.selectedTimeline = this.activeTimeline;
          }
              )
          }
        )
      this.dataunsaved = false;
    },

    rejectApplication() {
      this.app.status = 8
      jobService.updateApplication(this.app)
        .then(
          m => {
            jobService.getApplication(this.$route.params.id)
            .then(
                m => {
            this.app = m
            this.timeline_data.sort((a, b) => (a.id > b.id) ? 1 : -1)
            this.activeTimeline = this.getTimeline(m.status)
            this.selectedTimeline = this.activeTimeline;
          }
              )
          }
        )
      this.dataunsaved = false;
    }

  },
  mounted() {
    this.getApplication()
  },
  beforeRouteLeave (to, from, next) {
    if(this.dataunsaved){
      const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
      if(answer){
        next()
      }else{
        next(false)
      }
    }
  },
  name: "application-detail"
};
</script>

<style scoped></style>
