<template>
    <div>
        <header>
            <!-- Header -->
            <div class="header">

                <!-- Logo -->
                <div class="header-left">
                    <router-link to="/index" class="logo">
                        <img src="../../assets/logo2.png" width="40" height="40" alt="">
                    </router-link>
                </div>
                <!-- /Logo -->

                <!-- Header Title -->
                <div class="page-title-box float-left">
                    <h3>{{org.name}} Career</h3>
                </div>
                <!-- /Header Title -->

                <!-- Header Menu -->
                <ul class="nav user-menu">

                    <!-- Search -->
                    <li class="nav-item">
                        <div class="top-nav-search">
                            <a href="javascript:void(0);" class="responsive-search">
                                <i class="fa fa-search"></i>
                            </a>
                            <form action="search">
                                <input class="form-control" type="text" placeholder="Search here">
                                <button class="btn" type="submit"><i class="fa fa-search"></i></button>
                            </form>
                        </div>
                    </li>
                    <!-- /Search -->

                    <!-- <li class="nav-item">
                        <router-link class="nav-link" to="/applicant-login">Applicant Login</router-link>
                    </li> -->
                </ul>
                <!-- /Header Menu -->

                <!-- Mobile Menu -->
                <div class="dropdown mobile-user-menu">
                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i
                            class="fa fa-ellipsis-v"></i></a>
                    <div class="dropdown-menu dropdown-menu-right">
                        <router-link class="dropdown-item" to="/applicant-login">Login</router-link>
                    </div>
                </div>
                <!-- /Mobile Menu -->

            </div>
            <!-- /Header -->
        </header>
    </div>
</template>
<script>
import { organizationService } from '@/services/organizationService';
    export default {
        data() {
      return {
          org: {
              name: 'Sapphire'
          }
      }
    },
    methods: {
        getOrganization () {
            organizationService.getOrganization()
            .then (
                m => this.org = m
            )
        }
    },
        mounted() {
    this.getOrganization()
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
        }
    };
</script>