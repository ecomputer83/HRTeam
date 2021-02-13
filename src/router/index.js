import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import employeedashboard from '@/components/employeedashboard'
import JobProfile from '@/components/JobProfile'
import Applications from '@/components/Applications'
import Applicants from '@/components/Applicants'
import Vacancies from '@/components/vacancies/main'
import VacancyDetail from '@/components/vacancies/details'
import TalentSearch from '@/components/TalentSearch'
import Onboarding from '@/components/Onboarding'
import employees from '@/components/employees'
import leaves from '@/components/leaves'
import leavesettings from '@/components/leavesettings'
import attendance from '@/components/attendance'
import departments from '@/components/departments'
import designations from '@/components/designations'
import timesheet from '@/components/timesheet'
import employeeslist from '@/components/employeeslist'
import disciplinaryMeasures from '@/components/disciplinaryMeasures'
import JobProfileInfo from '@/components/JobProfileInfo'
// import editApplicant from '@/components/editApplicant'
import createOrganization from '@/components/createOrganization'
import leaveTypeForm from '@/components/leaveTypeForm'
import rank from '@/components/rank'
import login from '@/components/login'

import { authenticationService } from '@/services/authenticationService';
import { Role } from '@/helpers/role';

Vue.use(Router)
const router = new Router({
  mode: 'history',
  base: '',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/index',
      name: 'indexs',
      component: index,
    },
    {
      path: '/employees',
      name: 'employees',
      component: employees
    },
    {
      path: '/employeeslist',
      name: 'employeeslist',
      component: employeeslist
    },
    {
      path: '/employeedashboard',
      name: 'employeedashboard',
      component: employeedashboard,
    },
    {
      path: '/job-profile',
      name: 'jobprofile',
      component: JobProfile
    },
    {
      path: '/vacancies',
      name: 'vacancies',
      component: Vacancies,
    },
    {
      path: '/applications',
      name: 'applications',
      component: Applications
    },
    {
      path: '/applicants',
      name: 'applicants',
      component: Applicants
    },
    {
      path: '/talent-search',
      name: 'talentsearch',
      component: TalentSearch
    },
    {
      path: '/onboarding',
      name: 'onboarding',
      component: Onboarding
    },
    {
      path: '/leaves',
      name: 'leaves',
      component: leaves
    },
    {
      path: '/leavesettings',
      name: 'leavesettings',
      component: leavesettings
    },
    {
      path: '/attendance',
      name: 'attendance',
      component: attendance
    },
    {
      path: '/departments',
      name: 'departments',
      component: departments
    },
    {
      path: '/designations',
      name: 'designations',
      component: designations
    },
    {
      path: '/timesheet',
      name: 'timesheet',
      component: timesheet
    },
    {
      path: '/disciplinary-measures',
      name: 'disciplinaryMeasures',
      component: disciplinaryMeasures
    },
    {
      path: '/job-profile-info',
      name: 'jobprofileinfo',
      component: JobProfileInfo
    },
    // {
    //   path: '/edit-applicant',
    //   name: 'editapplicant',
    //   component: editApplicant
    // },
    {
      path: '/vacancies/:id',
      name: 'vacancyDetail',
      component: VacancyDetail
    },
    {
      path: '/create-organization',
      name: 'createorganization',
      component: createOrganization
    },
    {
      path: '/leave-type-form',
      name: 'leavetypeform',
      component: leaveTypeForm
    },
    {
      path: '/rank',
      name: 'rank',
      component: rank
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ],
  linkActiveClass: "active",
})
// router.beforeEach((to, from, next) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const { authorize } = to.meta;
//   const currentUser = authenticationService.currentUserValue;

//   if (authorize) {
//       if (!currentUser) {
//           // not logged in so redirect to login page with the return url
//           return next({ path: '/login', query: { returnUrl: to.path } });
//       }

//       // check if route is restricted by role
//       if (authorize.length && !authorize.includes(currentUser.role)) {
//           // role not authorised so redirect to home page
//           return next({ path: '/' });
//       }
//   }

//   next();
// })
export default router