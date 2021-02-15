<template>
  <div>
    <header>
      <div class="header">
        <!--Logo-->
        <div class="header-left">
          <router-link to="/index" class="logo" v-if="currentUser">

            <img src="../../assets/logo2.png" width="40" height="40" alt="">
          </router-link>

        </div>
        <!--/Logo-->
        <a id="toggle_btn" href="javascript:void(0);"  v-if="currentUser">
          <span class="bar-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </a>
        <!-- Header Title -->
        <div class="page-title-box">
          <h3 v-if="!currentUser">Sapphire HR</h3>
          <h3 v-if="currentUser">{{currentOffice.name}}</h3>
        </div>
        <!-- /Header Title -->
        <a id="mobile_btn" class="mobile_btn" href="#sidebar"><i class="fa fa-bars"></i>
        </a>  
        <!-- Header Menu -->
        <ul class="nav user-menu" v-if="currentUser">
          
          <li class="nav-item dropdown has-arrow main-drop">
            <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
              <span class="user-img"><img src="../../assets/profiles/avatar-21.jpg" alt="">
                <span class="status online"></span></span>
              <span>{{currentUser.user.fullName}}</span>
            </a>
            <div class="dropdown-menu">
              <router-link class="dropdown-item" to="/profile">My Profile</router-link>
              <router-link class="dropdown-item" to="/settings">Settings</router-link>
              <a @click="logout" class="dropdown-item">Logout</a>
            </div>
          </li>
        </ul>
        <!-- Mobile Menu -->
        <div class="dropdown mobile-user-menu">
          <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i
              class="fa fa-ellipsis-v"></i></a>
          <div class="dropdown-menu dropdown-menu-right">
            <router-link class="dropdown-item" to="/profile">My Profile</router-link>
            <router-link class="dropdown-item" to="/settings">Settings</router-link>
            <a @click="logout" class="dropdown-item">Logout</a>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
import { authenticationService } from '@/services/authenticationService';

  export default {
    data() {
      return {
        currentUser: authenticationService.currentUserValue,
        currentOffice: authenticationService.currentOfficeValue
      }
    },
    mounted() {
       // Variables declarations
    var $wrapper = $('.main-wrapper');

    
      $('body').append('<div class="sidebar-overlay"></div>');
    $(document).on('click', '#mobile_btn', function() {
    $wrapper.toggleClass('slide-nav');
    $('.sidebar-overlay').toggleClass('opened');
    $('html').addClass('menu-opened');
    $('#task_window').removeClass('opened');
    return false;
    });
    $(".sidebar-overlay").on("click", function () {
    $('html').removeClass('menu-opened');
    $(this).removeClass('opened');
    $wrapper.removeClass('slide-nav');
    $('.sidebar-overlay').removeClass('opened');
    $('#task_window').removeClass('opened');
    });


      $(document).on('click', '.top-nav-search .responsive-search', function() {
    $('.top-nav-search').toggleClass('active');
    });
      $('.sidebar-menu ul li:not(.submenu) a').click(function () {
        $("html").removeClass('menu-opened');
        $(".sidebar-overlay").removeClass('opened');
      });
    },
    methods: {
      logout () {
            authenticationService.logout();
            this.$router.push('/login');
        }
    }
  }
</script>