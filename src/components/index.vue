<template>
  <div class="index">
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
                <h3 class="page-title">Welcome {{currentUser.user.fullName}}</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item active">Dashboard</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- /Page Header -->

          <div class="row">
            <div class="col-md-4 col-sm-4 col-lg-4 col-xl-4">
              <div class="card dash-widget">
                <div class="card-body">
                  <span class="dash-widget-icon"><i class="fa fa-user"></i></span>
                  <div class="dash-widget-info">
                    <h3>{{totalEmployees}}</h3>
                    <span>Employees</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-sm-4 col-lg-4 col-xl-4">
              <div class="card dash-widget">
                <div class="card-body">
                  <span class="dash-widget-icon"><i class="fa fa-briefcase"></i></span>
                  <div class="dash-widget-info">
                    <h3>{{totalApplications}}</h3>
                    <span>Applications</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-sm-4 col-lg-4 col-xl-4">
            <div class="card">
                  <div class="card-body">
                    <div class="d-flex justify-content-between mb-3">
                      <div>
                        <span class="d-block">Total Salaries</span>
                      </div>
                      
                    </div>
                    <h3 class="mb-3">₦{{totalSalaries.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}}</h3>
                    
                    <p class="mb-0">Previous Month <span class="text-muted">₦ {{totalPrevSalaries.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}}</span></p>
                  </div>
                </div>
              </div>
          </div>

          <!-- Statistics Widget -->
          <div class="row">
            <div class="col-md-12 col-lg-6 col-xl-6 d-flex">
              <div class="card flex-fill">
                <div class="card-body">
                  <h4 class="card-title">Today Absent <span class="badge bg-inverse-danger ml-2">5</span></h4>
                  <div class="leave-info-box" v-for="item in todayAbsence" :key="item.id">
                    <div class="media align-items-center">
                      <router-link to="/profile" class="avatar"><img alt=""
                                                            src="~@/assets/profiles/avatar-02.jpg" v-if="!item.employee.passportPhoto">
                                                            <img alt="" :src="media + item.employee.passportPhoto" width="38" v-if="item.employee.passportPhoto"
                        /></router-link>
                      <div class="media-body">
                        <div class="text-sm my-0">{{item.employee.firstName + ' ' + item.employee.lastName}}</div>
                      </div>
                    </div>
                    <div class="row align-items-center mt-3">
                      <div class="col-6">
                        <h6 class="mb-0">{{new Date().toLocaleDateString()}}</h6>
                        <span class="text-sm text-muted">Leave Date</span>
                      </div>
                      <div class="col-6 text-right">
                        <span class="badge bg-inverse-success" v-if="item.status == 1">Approve</span>
                      </div>
                    </div>
                  </div>
                  <div class="load-more text-center">
                    <a class="text-dark" href="javascript:void(0);">Load More</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12 col-lg-6 col-xl-6 d-flex">
              <div class="card flex-fill">
                <div class="card-body">
                  <h4 class="card-title">Upcoming Resignation <span class="badge bg-inverse-danger ml-2">5</span></h4>
                  <div class="leave-info-box" v-for="item in upcomingResignations" :key="item.id">
                    <div class="media align-items-center">
                      <router-link to="/profile" class="avatar"><img alt=""
                                                            src="~@/assets/profiles/avatar-02.jpg" v-if="!item.employee.passportPhoto">
                                                            <img alt="" :src="media + item.employee.passportPhoto" width="38" v-if="item.employee.passportPhoto"
                        /></router-link>
                      <div class="media-body">
                        <div class="text-sm my-0">{{item.employee.firstName + ' ' + item.employee.lastName}}</div>
                      </div>
                    </div>
                    <div class="row align-items-center mt-3">
                      <div class="col-6">
                        <h6 class="mb-0">{{new Date(item.noticeDate).toLocaleDateString()}}</h6>
                        <span class="text-sm text-muted">Notice Date</span>
                      </div>
                      <div class="col-6 text-right">
                        <span class="badge bg-inverse-success" v-if="item.status == 1">Approve</span>
                        <span class="badge bg-inverse-danger" v-if="item.status == 2">Declined</span>
                        <span class="badge bg-inverse-purple" v-if="item.status == 0 && !item.exitInterview">New</span>
                        <span class="badge bg-inverse-purple" v-if="item.status == 0 && item.exitInterview">Pending Onterview</span>
                      </div>
                    </div>
                  </div>
                  <div class="load-more text-center">
                    <a class="text-dark" href="javascript:void(0);">Load More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /Statistics Widget -->

          <div class="row">
            <div class="col-md-12 col-lg-6 col-xl-6 d-flex">
              <div class="card flex-fill">
                <div class="card-body">
                  <h4 class="card-title">Pending Leaves<span class="badge bg-inverse-danger ml-2">5</span></h4>
                  <div class="leave-info-box" v-for="item in upcomingLeaves" :key="item.id">
                    <div class="media align-items-center">
                      <router-link to="/profile" class="avatar"><img alt=""
                                                            src="~@/assets/profiles/avatar-02.jpg" v-if="!item.employee.passportPhoto">
                                                            <img alt="" :src="media + item.employee.passportPhoto" width="38" v-if="item.employee.passportPhoto"
                        /></router-link>
                      <div class="media-body">
                        <div class="text-sm my-0">{{item.employee.firstName + ' ' + item.employee.lastName}}</div>
                      </div>
                    </div>
                    <div class="row align-items-center mt-3">
                      <div class="col-6">
                        <h6 class="mb-0">{{new Date(item.noticeDate).toLocaleDateString()}}</h6>
                        <span class="text-sm text-muted">Leave Date</span>
                      </div>
                      <div class="col-6 text-right">
                        <span class="badge bg-inverse-info" v-if="item.status == 0">Pending</span>
                        <span class="badge bg-inverse-success" v-if="item.status == 1">Approve</span>
                        <span class="badge bg-inverse-danger" v-if="item.status == 2">Reject</span>
                      </div>
                    </div>
                  </div>
                  <div class="load-more text-center">
                    <a class="text-dark" href="javascript:void(0);">Load More</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 d-flex">
              <div class="card card-table flex-fill">
                <div class="card-header">
                  <h3 class="card-title mb-0">Salary Payments</h3>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table custom-table table-nowrap mb-0">
                      <thead>
                        <tr>
                          <th>Invoice ID</th>
                          <th>Client</th>
                          <th>Payment Type</th>
                          <th>Paid Date</th>
                          <th>Paid Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>

                            <router-link to="/invoiceview">#INV-0001</router-link>
                          </td>
                          <td>
                            <h2><a href="#">Global Technologies</a></h2>
                          </td>
                          <td>Paypal</td>
                          <td>11 Mar 2019</td>
                          <td>#380</td>
                        </tr>
                        <tr>
                          <td>
                            <router-link to="/invoiceview">#INV-0002</router-link>
                          </td>
                          <td>
                            <h2><a href="#">Delta Infotech</a></h2>
                          </td>
                          <td>Paypal</td>
                          <td>8 Feb 2019</td>
                          <td>#500</td>
                        </tr>
                        <tr>
                          <td>
                            <router-link to="/invoiceview">#INV-0003</router-link>
                          </td>
                          <td>
                            <h2><a href="#">Cream Inc</a></h2>
                          </td>
                          <td>Paypal</td>
                          <td>23 Jan 2019</td>
                          <td>#60</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="card-footer">
                  <router-link to="/payments">View all payments</router-link>
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
  import LayoutHeader from '@/components/layouts/Header.vue'
  import LayoutSidebar from '@/components/layouts/Sidebar.vue'
  import { authenticationService } from "@/services/authenticationService";
  import { employeeService } from "@/services/employeeService.js";
  import Vue from 'vue'
  export default {
    components: {
      LayoutHeader,
      LayoutSidebar,
    },
    data() {
      return {
      currentUser: authenticationService.currentUserValue,
      company: authenticationService.currentOfficeValue,
      totalEmployees: 0,
      totalApplications: 0,
      totalSalaries: 0,
      totalPrevSalaries: 0,
      todayAbsence: [],
      upcomingLeaves: [],
      upcomingResignations: [],
      media: 'data:image/jpeg;base64,'
      }
    },
    methods: {
      getSummary() {
        employeeService.getDashboardCountSummary(this.company.id).then((o) => {
            this.totalEmployees = o.totalEmployees;
            this.totalApplications = o.totalApplications;
            this.totalSalaries = o.totalSalaries;
            this.totalPrevSalaries = o.totalPrevSalaries;
          });
      },
      getTodayAbsence() {
        employeeService.getTodayAbsence(this.company.id).then((o) => {
            this.todayAbsence = o;
          });
      },
      getUpcomingLeaves() {
        employeeService.getUpcomingLeaves(this.company.id).then((o) => {
            this.upcomingLeaves = o;
          });
      },
      getUpcomingResignations() {
        employeeService.getUpcomingResignations(this.company.id).then((o) => {
            this.upcomingResignations = o;
          });
      },
    },
    mounted() {
      this.getSummary();
      this.getTodayAbsence();
      this.getUpcomingLeaves();
      this.getUpcomingResignations()
      $(document).ready(function () {
        //barChart();
        //lineChart();

        $(window).resize(function () {
          window.barChart.redraw();
          window.lineChart.redraw();
        });
      });
      function barChart() {
        window.barChart = Morris.Bar({
          element: 'bar-chart',
          data: [
            { y: '2006', a: 100, b: 90 },
            { y: '2007', a: 75, b: 65 },
            { y: '2008', a: 50, b: 40 },
            { y: '2009', a: 75, b: 65 },
            { y: '2010', a: 50, b: 40 },
            { y: '2011', a: 75, b: 65 },
            { y: '2012', a: 100, b: 90 }
          ],
          xkey: 'y',
          ykeys: ['a', 'b'],
          labels: ['Total Income', 'Total Outcome'],
          lineColors: ['#ff9b44', '#fc6075'],
          lineWidth: '3px',
          barColors: ['#ff9b44', '#fc6075'],
          resize: true,
          redraw: true
        });
      }
      function lineChart() {
        window.lineChart = Morris.Line({
          element: 'line-chart',
          data: [
            { y: '2006', a: 50, b: 90 },
            { y: '2007', a: 75, b: 65 },
            { y: '2008', a: 50, b: 40 },
            { y: '2009', a: 75, b: 65 },
            { y: '2010', a: 50, b: 40 },
            { y: '2011', a: 75, b: 65 },
            { y: '2012', a: 100, b: 90 }
          ],
          xkey: 'y',
          ykeys: ['a', 'b'],
          labels: ['Total Sales', 'Total Revenue'],
          lineColors: ['#ff9b44', '#fc6075'],
          lineWidth: '3px',
          resize: true,
          redraw: true
        });
      }
    },
    name: 'index'
  }
</Script>