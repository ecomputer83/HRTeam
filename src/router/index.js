import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import employeedashboard from '@/components/employeedashboard'
import JobProfile from '@/components/JobProfile'
import Applications from '@/components/applications/main'
import ApplicationDetail from '@/components/applications/details-page'
import Applicants from '@/components/applicants/main'
import Vacancies from '@/components/vacancies/main'
import VacancyDetail from '@/components/vacancies/details-page'
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
import editApplicant from '@/components/editApplicant'
import createOrganization from '@/components/createOrganization'
import leaveTypeForm from '@/components/leaveTypeForm'
import rank from '@/components/rank'
import profile from '@/components/profile'
import login from '@/components/login'
import attendanceEmployee from '@/components/attendanceEmployee'
import timesheetEmployee from '@/components/timesheetEmployee'
import colleagues from '@/components/colleagues'
import leaveRequest from '@/components/leaveRequest'
import companies from '@/components/companies'
import ranks from '@/components/ranks'
import leaveTypeOrgAdmin from '@/components/leaveTypeOrgAdmin'

import { authenticationService } from '@/services/authenticationService';
import { Role } from '@/helpers/role';

Vue.use(Router)
const router = new Router({
  mode: 'history',
  // base: 'light',
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
      path: '/employees-list',
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
      path: '/applications/:id',
      name: 'applicationDetail',
      component: ApplicationDetail
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
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/attendance-employee',
      name: 'attendanceemployee',
      component: attendanceEmployee
    },
    {
      path: '/timesheet-employee',
      name: 'timesheetemployee',
      component: timesheetEmployee
    },
    {
      path: '/colleagues',
      name: 'colleagues',
      component: colleagues
    },
    {
      path: '/leave-request',
      name: 'leaverequest',
      component: leaveRequest
    },
    {
      path: '/companies',
      name: 'companies',
      component: companies
    },
    {
      path: '/ranks',
      name: 'ranks',
      component: ranks
    },
    {
      path: '/leave-type-org-admin',
      name: 'leavetypeorgadmin',
      component: leaveTypeOrgAdmin
    }
  ],
  linkActiveClass: "active"
});
router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const { authorize } = to.meta;
  const currentUser = authenticationService.currentUserValue;

  if (authorize) {
      if (!currentUser) {
          // not logged in so redirect to login page with the return url
          return next({ path: '/login', query: { returnUrl: to.path } });
      }

      // check if route is restricted by role
      if (authorize.length && !authorize.includes(currentUser.role)) {
          // role not authorised so redirect to home page
          return next({ path: '/' });
      }
  }

  next();
})
export default router