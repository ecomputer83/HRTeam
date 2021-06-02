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
                <h3>{{profile}}</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item active">Vacancy</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- /Page Header -->

          <div class="row">
            <div class="col-md-12">
              <form @submit.prevent="postVacancy">
              <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between">
                      <h4 class="card-title  mb-0">Vacancy</h4>
                    <div class="col-auto float-right ml-auto">
                      <button class="btn btn-primary submit-btn" type="submit" :disabled="loading">Save</button>
                      <button class="btn btn-primary submit-btn" @click="publishVacancy" v-if="$route.params.id">Publish</button>
                    </div>
                    </div>
                  </div>
                <div class="card-body">
                  <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="error">
								                            <strong>Error!</strong> {{error}}
								                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
									                            <span aria-hidden="true">&times;</span>
								                            </button>
							                            </div>
                                                    </div>
                                                    <div class="col-md-12">
							                            <div class="alert alert-success alert-dismissible fade show" role="alert" v-if="message">
								                            <strong>Success!</strong> {{message}}
								                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
									                            <span aria-hidden="true">&times;</span>
								                            </button>
							                            </div>
                                                    </div>
                                                </div> 
                  <!-- <timeline :timeline_data="timeline_data"></timeline> -->
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
                    <li class="nav-item">
                      <a class="nav-link" href="#bottom-tab3" data-toggle="tab"
                        >Application Settings</a
                      >
                    </li>
                  </ul>

                  <div class="tab-content">
                    <div class="tab-pane show active" id="bottom-tab1">
                      <detail-card :vacancy="vacancy" :currentOffice="currentOffice" @update="vacancy = $event;" v-if="loaddependency"></detail-card>
                    </div>
                    <div class="tab-pane" id="bottom-tab2">
                      <requisition-card :requisition="requisition" @update="requisition = $event;" v-if="loaddependency"></requisition-card>
                    </div>
                    <div class="tab-pane" id="bottom-tab3">
                      <setting-card :settings="settings" @update="settings = $event;" v-if="loaddependency"></setting-card>
                    </div>
                  </div>
                </div>
              </div>
              </form>
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
import SettingCard from "@/components/vacancies/vacancy-settings.vue";
import { authenticationService } from '@/services/authenticationService';
  import { required, sameAs } from 'vuelidate/lib/validators';
  import { jobService } from '@/services/jobService';
export default {
  components: {
    LayoutHeader,
    LayoutSidebar,
    Timeline,
    DetailCard,
    RequisitionCard,
    SettingCard
  },
  data() {
    return {
      error: '',
      message: '',
      loading: false,
      requisitionId: 0,
      vacancysettingId: 0,
      profile: '',
      vacancy: {
        id: 0,
        companyId: 0,
        jobProfileId: 0,
        designationId: 0,
        quantity: 0,
        description: "",
        scores: "",
        type: "",
        requestedBy: 0,
        requestedOn: "",
        periodFrom: "",
        periodTo: "",
        periodFromTime: '12:00:00.000',
        periodToTime: '12:00:00.000'
      },
      requisition: {
        id: 0,
        duties: "<p>Description</p>"
      },
      settings: {
        id: 0,
        welcomeMessage: "<p>Description</p>",
        rejectMessage: "<p>Description</p>",
        phoneInterviewChecked: true,
        welcomeMessageToPhoneInterview: "<p>Description</p>",
        careerTestingChecked: false,
        welcomeMessageToCareerTesting: "<p>Description</p>",
        googleFormsForCareerTesting: "",
        responseSpreadsheetForGoogleForms: "",
        setAutomaticScoring: false,
        scorePerQuestion: 0,
        passAverageScore: 0,
        questionsAndPossibleAnswerXML: "",
        faceToFaceInterviewChecked: false,
        welcomeMessageToFaceToFaceInterview: "<p>Description</p>"
      },
      profiles: [],
      designations: [],
      staffs: [],
      currentOffice: authenticationService.currentOfficeValue,
      loaddependency: false,
    };
  },
  validations: {
    vacancy: {
      jobProfileId:  { required },
      designationId:  { required },
      quantity:  { required },
      type: { required },
      description:  { required },
      requestedBy:  { required },
      requestedOn:  { required },
      periodFrom:  { required },
      periodTo:  { required },
      periodFromTime:  { required },
      periodToTime:  { required },
      duties:  { required }
      },
  },
  watch: {
    vacancy: function(val) {
      this.profile = this.profiles.find(c => c.id == val.jobProfileId).name;
    }
  },
  mounted() {
    
    this.getVacancy()
  },
  methods: {
    getVacancy(){
      if(this.$route.params.id){
        jobService.getVancancyById(this.$route.params.id)
        .then(
          a => {
            this.vacancy = a;

            
            var FromTime = a.periodFrom.toString().split('T')
            var ToTime = a.periodTo.toString().split('T')
            this.vacancy.requestedOn = a.requestedOn.toString().split('T')[0]
            this.vacancy.periodFrom = FromTime[0]
            this.vacancy.periodTo = ToTime[0]
            this.vacancy.periodFromTime = FromTime[1]
            this.vacancy.periodToTime = ToTime[1]
            this.requisition = a.jobRequisition;
            this.settings = a.vacancysettings
            this.requisitionId = a.jobRequisition.id
            this.vacancysettingId = a.vacancysettings.id
            this.loaddependency = (this.$route.params.id && this.vacancy.id != 0)
            console.log(this.vacancy.id)
          },
          err => { this.error = err}
        )
      } else{
        this.loaddependency = (!this.$route.params.id && this.vacancy.id == 0)
      }
    },
    publishVacancy() {

    },
    postVacancy() {
      console.log(this.vacancy)
      if(this.vacancy.jobProfileId == 0 || this.vacancy.designationId == 0 || this.vacancy.periodFrom == "" || this.vacancy.periodTo == ""){
        this.error = "Please fill all inputs";
        return 
      }
      if(this.requisition.duties == "<p>Description</p>"){
        this.error = "Job Description is required, Please click on Job Requisition tab";
        return 
      }
      var checked = !this.settings.phoneInterviewChecked ? !this.settings.faceToFaceInterviewChecked ? this.settings.careerTestingChecked : true : true;
      if(!checked){
        this.error = "One of the interview must be checked, Please click on Application settings tab";
        return 
      }


      
        this.vacancy.companyId = this.currentOffice.id
        this.vacancy.jobRequisition = this.requisition
        this.vacancy.vacancysettings = this.settings
        this.vacancy.quantity = parseInt(this.vacancy.quantity)
        this.vacancy.periodFrom = new Date(this.vacancy.periodFrom +" " + this.vacancy.periodFromTime)
        this.vacancy.periodTo = new Date(this.vacancy.periodTo +" " + this.vacancy.periodToTime)
        console.log(this.vacancy)
        this.vacancy.jobRequisition.id = this.requisitionId
        this.vacancy.vacancysettings.id = this.vacancysettingId
        if(!this.$route.params.id){
        jobService.addVacancy(this.vacancy)
          .then(a=> {
            return this.$router.push('/vacancies');
          },
          error => { this.error = error})
      }else{
        jobService.updateVacancy(this.vacancy)
          .then(a=> {
            this.message = "Vacancy updated successfully";
          },
          error => { this.error = error})
      }
    }
  },
  name: "vacancyDetail"
};
</script>

<style scoped></style>
