<template>
  <div>
    <!-- <sidebar> -->
    <div class="sidebar" id="sidebar">
      <div class="sidebar-inner" id="style-15">
        <vue-custom-scrollbar
          class="scroll-area"
          :settings="settings"
          @ps-scroll-x="scrollHanle"
        >
          <div id="sidebar-menu" class="sidebar-menu">
            <ul>
              <li class="menu-title">
                <span>Main</span>
              </li>
              <li>
                <router-link to="/index" class="admin"
                  ><i class="la la-dashboard"></i>
                  <span> Dashboard</span></router-link
                >
              </li>

              <li class="menu-title">
                <span>Recruitment</span>
              </li>
              <li class="policies">
                <router-link to="/job-profile"
                  ><i class="la la la-user"></i>
                  <span>Job Profile</span></router-link
                >
              </li>
              <li class="policies">
                <router-link to="/vacancies"
                  ><i class="la la la-search"></i>
                  <span>Vacancies</span></router-link
                >
              </li>
              <li class="policies">
                <router-link to="/applications"
                  ><i class="la la-briefcase"></i>
                  <span>Applications</span></router-link
                >
              </li>
              <li class="policies">
                <router-link to="/applicants"
                  ><i class="la la-user-plus"></i>
                  <span>Applicants</span></router-link
                >
              </li>
              <li class="policies">
                <router-link to="/talent-search"
                  ><i class="la la-user-secret"></i>
                  <span>Talent Search</span></router-link
                >
              </li>
              <li class="policies">
                <router-link to="/onboarding"
                  ><i class="la la la-user"></i>
                  <span>Onboarding</span></router-link
                >
              </li>
              <li class="menu-title">
                <span>Employees</span>
              </li>
              <li class="policies">
                <router-link to="/employees"
                  ><i class="la la la-user"></i>
                  <span>Employees</span></router-link
                >
              </li>
              <li class="policies">
                <router-link to="/leaves"
                  ><i class="la la la-user"></i> <span>Leave</span></router-link
                >
              </li>
              <li class="policies">
                <router-link to="/attendance"
                  ><i class="la la la-user"></i>
                  <span>Attendants</span></router-link
                >
              </li>
              <li class="policies">
        <router-link to="/ranks"><i class="la la la-user"></i> <span>Ranks</span></router-link>
      </li>
              <li class="policies">
                <router-link to="/companydepartments"
                  ><i class="la la la-user"></i>
                  <span>Departments</span></router-link
                >
              </li>
              <li class="policies">
                <router-link to="/companydesignations"
                  ><i class="la la la-user"></i>
                  <span>Designations</span></router-link
                >
              </li>
              <li class="policies">
                <router-link to="/timesheet"
                  ><i class="la la la-user"></i>
                  <span>Timesheets</span></router-link
                >
              </li>
              <li class="submenu">
                <a href="#"
                  ><i class="la la-money"></i> <span> Discipline </span>
                  <span class="menu-arrow"></span
                ></a>
                <ul style="display: none">
                  <li class="policies">
                    <router-link to="/query" class="salary">
                      Query
                    </router-link>
                  </li>
                  <li class="policies">
                    <router-link to="/disciplinary-measures" class="payrollitems">
                      <span>Disciplinary Measure</span>
                    </router-link>
                  </li>
                </ul>
              </li>
              <li class="menu-title">
                <span>HR</span>
              </li>
              <li class="submenu">
                <a href="#"
                  ><i class="la la-money"></i> <span> Payroll </span>
                  <span class="menu-arrow"></span
                ></a>
                <ul style="display: none">
                  <li>
                    <router-link to="/salary" class="salary">
                      Employee Salary
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/salaryhistory" class="payrollitems">
                      Salary History
                    </router-link>
                  </li>
                  
                </ul>
              </li>
              <li class="policies">
                <router-link to="/policies"
                  ><i class="la la-file-pdf-o"></i>
                  <span>Policies</span></router-link
                >
              </li>
              <li class="submenu">
                <a href="#"
                  ><i class="la la-pie-chart"></i> <span> Reports </span>
                  <span class="menu-arrow"></span
                ></a>
                <ul style="display: none">
                  <li>
                    <router-link to="/expensereports" class="expensereports">
                      Expense Report
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/invoicereports" class="invoicereports">
                      Invoice Report
                    </router-link>
                  </li>
                </ul>
              </li>
              <li class="menu-title">
                <span>Performance</span>
              </li>
              <li class="submenu">
                <a href="#"
                  ><i class="la la-graduation-cap"></i>
                  <span> Performance </span> <span class="menu-arrow"></span
                ></a>
                <ul style="display: none">
                  <li>
                    <router-link
                      to="/performance-indicator"
                      class="performanceindicator"
                    >
                      Performance Indicator
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/performance-review" class="performance">
                      Performance Review
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      to="/performance-appraisal"
                      class="performanceappraisal"
                    >
                      Performance Appraisal
                    </router-link>
                  </li>
                </ul>
              </li>

              <li class="promotion">
                <router-link to="/promotion"
                  ><i class="la la-bullhorn"></i>
                  <span>Promotion</span></router-link
                >
              </li>
              <li class="resignation">
                <router-link to="/resignation"
                  ><i class="la la-external-link-square"></i>
                  <span>Resignation</span></router-link
                >
              </li>
              <li class="termination">
                <router-link to="/termination"
                  ><i class="la la-times-circle"></i>
                  <span>Termination</span></router-link
                >
              </li>

              <li class="menu-title">
                <span>Settings</span>
              </li>
              <li class="promotion">
                <router-link to="/accountsettings"
                  ><i class="la la-bullhorn"></i>
                  <span>Account Settings</span></router-link
                >
              </li>
              <li class="leavesettings">
                <router-link to="/leavesettings"
                  ><i class="la la-bullhorn"></i>
                  <span>Leave Settings</span></router-link
                >
              </li>
              <li class="promotion">
                <router-link to="/skill"
                  ><i class="la la-bullhorn"></i>
                  <span>Skills</span></router-link
                >
              </li>
              <li class="resignation">
                <router-link to="/skill-type"
                  ><i class="la la-external-link-square"></i>
                  <span>Skill Types</span></router-link
                >
              </li>
              <li class="termination">
                <router-link to="/skill-grade"
                  ><i class="la la-times-circle"></i>
                  <span>Skill Grades</span></router-link
                >
              </li>
              <li class="termination">
                <router-link to="/termination-type"
                  ><i class="la la-times-circle"></i>
                  <span>Termination Type</span></router-link
                >
              </li>
              <li class="submenu">
                <a href="#"
                  ><i class="la la-graduation-cap"></i>
                  <span> Performance Settings </span> <span class="menu-arrow"></span
                ></a>
                <ul style="display: none">
                  <li>
                    <router-link
                      to="/professional-excellence-settings"
                      class="performanceindicator"
                    >
                      Professional Excellence
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/personal-excellence-settings" class="performance">
                      Personal Excellence
                    </router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </vue-custom-scrollbar>
      </div>
    </div>
    <!-- </sidebar> -->
  </div>
</template>
  <script>
import vueCustomScrollbar from "vue-custom-scrollbar";
import "vue-custom-scrollbar/dist/vueScrollbar.css";
export default {
  components: {
    vueCustomScrollbar,
  },
  mounted() {
    $("#sidebar-menu a").on("click", function (e) {
      if ($(this).parent().hasClass("submenu")) {
        e.preventDefault();
      }
      if (!$(this).hasClass("subdrop")) {
        $("ul", $(this).parents("ul:first")).slideUp(350);
        $("a", $(this).parents("ul:first")).removeClass("subdrop");
        $(this).next("ul").slideDown(350);
        $(this).addClass("subdrop");
      } else if ($(this).hasClass("subdrop")) {
        $(this).removeClass("subdrop");
        $(this).next("ul").slideUp(350);
      }
    });
    $("#sidebar-menu ul li.submenu a.active")
      .parents("li:last")
      .children("a:first")
      .addClass("active")
      .trigger("click");
  },
  computed: {
    currentpage() {
      return this.$route.path;
    },
  },
  data() {
    return {
      settings: {
        suppressScrollX: false,
      },
      activeClass: "active",
    };
    //  isactive : true
  },
  methods: {
    scrollHanle(evt) {
      // console.log(evt);
    },
  },
};
</script>
          <style>
.scroll-area {
  position: relative;
  margin: auto;
  height: calc(100vh - 60px);
  background-color: transparent !important;
}
/* .ps__rail-y {
        top: 0px !important;
    height: 657px !important;
    right: -3px !important;
    background-color: transparent !important;
        } */
</style>