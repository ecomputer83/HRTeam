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
            <div class="col-md-6" style="margin: 0 auto">
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
                  <div class="punch-det" v-if="lastPunch.punchInTime">
                    <h6>Punch {{ lastPunch.punchInTime ? "In" : "Out" }} at</h6>
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
                        lastPunch.punchInTime
                      }}
                    </p>
                  </div>
                  <div class="punch-info">
                    <div class="punch-hours">
                      <span>{{
                        lastPunch.punchInTime
                          ? this.getTimeDifference() + " hrs"
                          : "0 hr"
                      }}</span>
                    </div>
                  </div>
                  <div class="punch-btn-section" v-if="!lastPunch.punchOutTime">
                    <button
                      type="button"
                      class="btn btn-primary punch-btn"
                      @click="onSubmit"
                    >
                      Punch {{ !lastPunch.punchInTime ? "In" : "Out" }}
                    </button>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>

          <!-- Search Filter -->
          <!-- <div class="row filter-row">
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
          </div> -->
          <!-- /Search Filter -->

          <div class="row">
            <div class="col-lg-12">
              <div class="table-responsive">
                <v-data-table
                                      :headers="headers"
                                      :items="attendances"
                                      sort-by="attendedDate"
                                      class="elevation-1"
                                      >
      <template v-slot:[`item.attendedDate`]="{ item }">
        {{ item.attendedDate ? new Date(item.attendedDate).toLocaleDateString() : ""}}
      </template>
      <template v-slot:[`item.prod`]="{ item }">
        {{ item.punchOutTime ? getTimeDiffonPunch(item) : ""}}
      </template>
                                  </v-data-table>
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
      today: new Date().toLocaleDateString(),
      attendedDate: new Date(),
      headers: [
      {
        text: 'Date',
        align: 'start',
        value: 'attendedDate',
      },
      { text: 'Punch In', value: 'punchInTime' },
      { text: 'Punch Out', value: 'punchOutTime' },
      { text: 'Production', value: 'prod' },
    ],
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
      attendanceService.getEmployeeTimetable(id).then(
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
      if (this.lastPunch.punchInTime) {
        var punchDate = new Date(
          new Date(this.lastPunch.attendedDate).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          }) +
            " " +
            this.lastPunch.punchInTime
        );
        var diff = (punchDate.getTime() - new Date().getTime()) / 1000;
        diff /= 60 * 60;
        return Math.abs(Math.round(diff));
      }
    },

    getTimeDiffonPunch(punch) {
        var punchInDate = new Date(
          new Date(punch.attendedDate).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          }) +
            " " +
            punch.punchInTime
        );
        var punchOutDate = new Date(
          new Date(punch.attendedDate).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          }) +
            " " +
            punch.punchOutTime
        );
        var diff = (punchOutDate.getTime() - punchInDate.getTime()) / 1000;
        diff /= 60 * 60;
        return Math.abs(Math.round(diff));
    },

    getLastPunch(attendances) {
      if (attendances.length > 0) {
        var lastPunch = attendances.filter(c=>new Date(c.attendedDate).toLocaleDateString() == this.today).sort((a, b) => a.id - b.id);
        this.lastPunch = (lastPunch.length > 0) ? lastPunch[lastPunch.length - 1] : {};
      }
    },

    onSubmit() {
      if (this.lastPunch.punchInTime) {
        if(confirm("Are you sure you want to sign out?")){
        this.putTimeTable(
          this.lastPunch,
          new Date().toString().split(" ")[4]
        );
        }
      } else {
        this.postTimeTable(!this.punch, new Date().toString().split(" ")[4]);
      }
    },

    postTimeTable(punch, time) {
      var attDate = new Date(this.attendedDate.getFullYear(), this.attendedDate.getMonth(), this.attendedDate.getDate(), 5, 30, 0)

      attendanceService
        .addEmployeeTimetable(
          this.currentUser.employee.id,
          attDate,
          time
        )
        .then((id) => {
          this.punch = punch;
          this.getAttendance(this.currentUser.employee.id);
        });
    },

    putTimeTable(lastPunch, time) {
      attendanceService
        .updateEmployeeTimetable(
          lastPunch.id,
          lastPunch.employeeId,
          lastPunch.attendedDate,
          lastPunch.punchInTime,
          time
        )
        .then((id) => {
          this.punch = punch;
          this.getAttendance(this.currentUser.employee.id);
        });
    }
  },

  mounted() {
    // Date Time Picker
    this.getAttendance(this.currentUser.employee.id)

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