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
                <span>My Dashboard</span>
              </li>
              <li class="policies">
                <router-link to="/profile"
                  ><i class="la la la-user"></i>
                  <span>Profile</span></router-link
                >
              </li>
              <li class="policies">
                <router-link to="/applications"
                  ><i class="la la la-search"></i>
                  <span>My Applications</span></router-link
                >
              </li>
              <li class="policies">
                <router-link to="/attendance-employee"
                  ><i class="la la la-user"></i>
                  <span>Attendance</span></router-link
                >
              </li>
              <li class="policies">
                <router-link to="/timesheet-employee"
                  ><i class="la la la-user"></i>
                  <span>Timesheet</span></router-link
                >
              </li>
              <li class="policies">
                <router-link to="/colleagues"
                  ><i class="la la la-user"></i>
                  <span>Colleagues</span></router-link
                >
              </li>
              <li class="policies">
                <router-link to="/leave-request"
                  ><i class="la la la-user"></i>
                  <span>Leave Request</span></router-link
                >
              </li>
              <li class="salaryview">
                <router-link to="/salaryview">
                  <i class="la la-user"></i>
                  <span>Pay Slip</span></router-link
                >
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
      console.log(evt);
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