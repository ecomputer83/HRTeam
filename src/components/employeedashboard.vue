<template>
  <div class="employeedashboard" id="employee">
    <div class="main-wrapper">
  <!-- <layout-loader></layout-loader> -->
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>
 <!-- Page Wrapper -->
 <div class="page-wrapper">
  <!-- Page Content -->
          <div class="content container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="welcome-box">
          <div class="welcome-img">
            <img alt=""
                                                            src="~@/assets/profiles/avatar-02.jpg" v-if="!currentUser.employee.passportPhoto">
                                                            <img alt="" :src="media + currentUser.employee.passportPhoto" width="38" v-if="currentUser.employee.passportPhoto"
                        />
          </div>
          <div class="welcome-det">
            <h3>Welcome, {{currentUser.user.fullName}}</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8 col-md-8">
        <section class="dash-section">
          <h1 class="dash-sec-title">Today</h1>
          <div class="dash-sec-content">
            <div class="dash-info-list" v-for="item in todayAbsence" :key="item.id">
              <a href="#" class="dash-card text-danger">
                <div class="dash-card-container">
                  <div class="dash-card-icon">
                    <i class="fa fa-hourglass-o"></i>
                  </div>
                  <div class="dash-card-content">
                    <p>{{item.employee.firstName + ' ' + item.employee.lastName}} is off {{item.leaveType.name}} today</p>
                  </div>
                  <div class="dash-card-avatars">
                    <div class="e-avatar"><img alt=""
                                                            src="~@/assets/profiles/avatar-02.jpg" v-if="!currentUser.employee.passportPhoto">
                                                            <img alt="" :src="media + currentUser.employee.passportPhoto" width="38" v-if="currentUser.employee.passportPhoto"
                        /></div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
        
      </div>
      <div class="col-lg-4 col-md-4">
        <div class="dash-sidebar">
          
          <section v-for="item in leaveEgb" :key="item.id">
            <h5 class="dash-title">Your {{item.leaveTypeName}} Leave</h5>
            <div class="card">
              <div class="card-body">
                <div class="time-list">
                  <div class="dash-stats-list">
                    <h4>{{item.used}}</h4>
                    <p>Leave Taken</p>
                  </div>
                  <div class="dash-stats-list">
                    <h4>{{item.eligible}}</h4>
                    <p>Remaining</p>
                  </div>
                </div>
                <div class="request-btn">
                  <a class="btn btn-primary" href="#">Apply Leave</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
  <!-- /Page Content -->
      </div>
<!-- /Page Wrapper -->
</div>
  </div>
</template>
<script>
  import LayoutHeader from '@/components/layouts/Header.vue'
  import LayoutSidebar from '@/components/layouts/employeeSidebar.vue'
  import { authenticationService } from "@/services/authenticationService";
  import { employeeService } from "@/services/employeeService.js";
export default {
  components: {
    LayoutHeader,
    LayoutSidebar,
  },
  data(){
    return {
      currentUser: authenticationService.currentUserValue,
      company: authenticationService.currentOfficeValue,
      media: 'data:image/jpeg;base64,',
      todayAbsence: [],
      leaveEgb: []
    }
  },
  methods: {
    getTodayAbsence() {
        employeeService.getTodayAbsence(this.company.id).then((o) => {
            this.todayAbsence = o;
          });
      },
    getEmployeeLeaveSummary() {
        employeeService.getEmployeeLeaveSummary(this.currentUser.employee.id)
          .then(
            model => { this.leaveEgb = model
              //console.log('leaves:', model[0]) 
            },
            error => { error = error }
          )
      },
  },
  mounted() {
    this.getTodayAbsence()
    this.getEmployeeLeaveSummary()
    if($('.floating').length > 0 ){
    $('.floating').on('focus blur', function (e) {
    $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
    }).trigger('blur');
    }
  },
  name: 'employeedashboard'
}
</script>