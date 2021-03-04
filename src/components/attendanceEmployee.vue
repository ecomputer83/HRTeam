<template>
  <div class="attendanceemployee">
    <div class="main-wrapper">
      <layout-header></layout-header>
      <layout-sidebar></layout-sidebar>
      <!-- Page Wrapper -->
      <div class="page-wrapper">
        <div class="content container-fluid">
          <!-- Page Header -->
          <div class="page-header">
            <div class="row">
              <div class="col-sm-12">
                <h3 class="page-title">Attendance</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/index">Dashboard</router-link>
                  </li>
                  <li class="breadcrumb-item active">Attendance</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- /Page Header -->

          <div class="row">
            <div class="col-md-4">
              <div class="card punch-status">
                <div class="card-body">
                  <h5 class="card-title">
                    Timesheet
                    <small class="text-muted">{{
                      new Date().toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    }}</small>
                  </h5>
                  <div class="punch-det" v-if="lastPunch.punch">
                    <h6>Punch {{ lastPunch.punch ? "In" : "Out" }} at</h6>
                    <p>
                      {{
                        new Date(lastPunch.attendedDate).toLocaleDateString(
                          "en-US",
                          {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        ) +
                        " " +
                        lastPunch.time
                      }}
                    </p>
                  </div>
                  <div class="punch-info">
                    <div class="punch-hours">
                      <span>{{
                        lastPunch.punch
                          ? this.getTimeDifference() + " hrs"
                          : "0 hr"
                      }}</span>
                    </div>
                  </div>
                  <div class="punch-btn-section">
                    <button
                      type="button"
                      class="btn btn-primary punch-btn"
                      @click=""
                    >
                      Punch {{ !lastPunch.punch ? "In" : "Out" }}
                    </button>
                  </div>
                  <div class="statistics">
                    <div class="row">
                      <div class="col-md-6 col-6 text-center">
                        <div class="stats-box">
                          <p>Break</p>
                          <h6>1.21 hrs</h6>
                        </div>
                      </div>
                      <div class="col-md-6 col-6 text-center">
                        <div class="stats-box">
                          <p>Overtime</p>
                          <h6>3 hrs</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card att-statistics">
                <div class="card-body">
                  <h5 class="card-title">Statistics</h5>
                  <div class="stats-list">
                    <div class="stats-info">
                      <p>
                        Today <strong>3.45 <small>/ 8 hrs</small></strong>
                      </p>
                      <div class="progress">
                        <div
                          class="progress-bar bg-primary"
                          role="progressbar"
                          style="width: 31%"
                          aria-valuenow="31"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div class="stats-info">
                      <p>
                        This Week <strong>28 <small>/ 40 hrs</small></strong>
                      </p>
                      <div class="progress">
                        <div
                          class="progress-bar bg-warning"
                          role="progressbar"
                          style="width: 31%"
                          aria-valuenow="31"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div class="stats-info">
                      <p>
                        This Month <strong>90 <small>/ 160 hrs</small></strong>
                      </p>
                      <div class="progress">
                        <div
                          class="progress-bar bg-success"
                          role="progressbar"
                          style="width: 62%"
                          aria-valuenow="62"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div class="stats-info">
                      <p>
                        Remaining <strong>90 <small>/ 160 hrs</small></strong>
                      </p>
                      <div class="progress">
                        <div
                          class="progress-bar bg-danger"
                          role="progressbar"
                          style="width: 62%"
                          aria-valuenow="62"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div class="stats-info">
                      <p>Overtime <strong>4</strong></p>
                      <div class="progress">
                        <div
                          class="progress-bar bg-info"
                          role="progressbar"
                          style="width: 22%"
                          aria-valuenow="22"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card recent-activity">
                <div class="card-body">
                  <h5 class="card-title">Today Activity</h5>
                  <ul
                    class="res-activity-list"
                    v-for="attendance in attendances"
                    v-bind:key="attendance.id"
                  >
                    <li>
                      <p class="mb-0">Punch In at</p>
                      <p class="res-activity-time">
                        <i class="fa fa-clock-o"></i>
                        10.00 AM.
                      </p>
                    </li>
                    <li>
                      <p class="mb-0">Punch Out at</p>
                      <p class="res-activity-time">
                        <i class="fa fa-clock-o"></i>
                        11.00 AM.
                      </p>
                    </li>
                    <li>
                      <p class="mb-0">Punch In at</p>
                      <p class="res-activity-time">
                        <i class="fa fa-clock-o"></i>
                        11.15 AM.
                      </p>
                    </li>
                    <li>
                      <p class="mb-0">Punch Out at</p>
                      <p class="res-activity-time">
                        <i class="fa fa-clock-o"></i>
                        1.30 PM.
                      </p>
                    </li>
                    <li>
                      <p class="mb-0">Punch In at</p>
                      <p class="res-activity-time">
                        <i class="fa fa-clock-o"></i>
                        2.00 PM.
                      </p>
                    </li>
                    <li>
                      <p class="mb-0">Punch Out at</p>
                      <p class="res-activity-time">
                        <i class="fa fa-clock-o"></i>
                        7.30 PM.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Search Filter -->
          <div class="row filter-row">
            <div class="col-sm-3">
              <div class="form-group form-focus">
                <div class="cal-icon">
                  <input
                    type="text"
                    class="form-control floating datetimepicker"
                  />
                </div>
                <label class="focus-label">Date</label>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="form-group form-focus select-focus">
                <select class="select floating">
                  <option>-</option>
                  <option>Jan</option>
                  <option>Feb</option>
                  <option>Mar</option>
                  <option>Apr</option>
                  <option>May</option>
                  <option>Jun</option>
                  <option>Jul</option>
                  <option>Aug</option>
                  <option>Sep</option>
                  <option>Oct</option>
                  <option>Nov</option>
                  <option>Dec</option>
                </select>
                <label class="focus-label">Select Month</label>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="form-group form-focus select-focus">
                <select class="select floating">
                  <option>-</option>
                  <option>2019</option>
                  <option>2018</option>
                  <option>2017</option>
                  <option>2016</option>
                  <option>2015</option>
                </select>
                <label class="focus-label">Select Year</label>
              </div>
            </div>
            <div class="col-sm-3">
              <a href="#" class="btn btn-success btn-block"> Search </a>
            </div>
          </div>
          <!-- /Search Filter -->

          <div class="row">
            <div class="col-lg-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Date</th>
                      <th>Punch In</th>
                      <th>Punch Out</th>
                      <th>Production</th>
                      <th>Break</th>
                      <th>Overtime</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>19 Feb 2019</td>
                      <td>10 AM</td>
                      <td>7 PM</td>
                      <td>9 hrs</td>
                      <td>1 hrs</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>20 Feb 2019</td>
                      <td>10 AM</td>
                      <td>7 PM</td>
                      <td>9 hrs</td>
                      <td>1 hrs</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <!-- /Page Content -->
      </div>
      <!-- Page Wrapper -->
    </div>
  </div>
</template>
<script>
import LayoutHeader from "@/components/layouts/Header.vue";
import LayoutSidebar from "@/components/layouts/employeeSidebar.vue";
import { required, sameAs } from "vuelidate/lib/validators";
import { attendanceService } from "@/services/attendanceService";
import { authenticationService } from "@/services/authenticationService";

export default {
  components: {
    LayoutHeader,
    LayoutSidebar,
  },

  data() {
    return {
      attendedDate: new Date().toDateString(),
      time: "",
      punch: false,
      attendance: {},
      attendances: [],
      lastPunch: {},
      loading: false,
      error: "",
      submitted: false,
      currentUser: authenticationService.currentUserValue,
    };
  },

  validations: {
    attendedDate: { required },
    time: { required },
  },

  methods: {
    getAttendance(id) {
      attendanceService.getAttendance(id).then(
        (model) => {
          this.attendances = model;
          this.getLastPunch(model);
        },
        (error) => {
          error = error;
        }
      );
    },

    getTimeDifference() {
      if (this.lastPunch) {
        var punchDate = new Date(
          new Date(this.lastPunch.attendedDate).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          }) +
            " " +
            lastPunch.time
        );
        var diff = (punchDate.getTime() - new Date().getTime()) / 1000;
        diff /= 60 * 60;
        return Math.abs(Math.round(diff));
      }
    },

    getLastPunch(attendances) {
      if (attendances.length > 0) {
        var lastPunch = attendances.sort((a, b) => b.id - a.id).last();
        this.lastPunch = lastPunch;
      }
    },

    onSubmit() {
      if (this.lastPunch != null) {
        this.postTimeTable(
          !this.lastPunch.punch,
          new Date().toString().split(" ")[4]
        );
      } else {
        this.postTimeTable(!this.punch, new Date().toString().split(" ")[4]);
      }
    },

    postTimeTable(punch, time) {
      attendanceService
        .addEmployeeTimetable(
          this.currentUser.id,
          this.attendedDate,
          time,
          punch
        )
        .then((id) => {
          this.punch = punch;
          this.getAttendance(this.currentUser.employee.id);
        });
    },
  },

  mounted() {
    // Date Time Picker

    if ($(".datetimepicker").length > 0) {
      $(".datetimepicker").datetimepicker({
        format: "DD/MM/YYYY",
        icons: {
          up: "fa fa-angle-up",
          down: "fa fa-angle-down",
          next: "fa fa-angle-right",
          previous: "fa fa-angle-left",
        },
      });
    }

    // Select 2
    if ($(".select").length > 0) {
      $(".select").select2({
        minimumResultsForSearch: -1,
        width: "100%",
      });
    }
    // Multiselect
    if ($("#customleave_select").length > 0) {
      $("#customleave_select").multiselect();
    }
    if ($("#edit_customleave_select").length > 0) {
      $("#edit_customleave_select").multiselect();
    }
    if ($(".floating").length > 0) {
      $(".floating")
        .on("focus blur", function (e) {
          $(this)
            .parents(".form-focus")
            .toggleClass(
              "focused",
              e.type === "focus" || this.value.length > 0
            );
        })
        .trigger("blur");
    }
  },
  name: "attendanceemployee",
};
</script>