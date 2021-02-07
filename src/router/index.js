import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import employeedashboard from '@/components/employeedashboard'
import JobProfile from '@/components/JobProfile'
import Applications from '@/components/Applications'
import Applicants from '@/components/Applicants'
import Vacancies from '@/components/Vacancies'
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

Vue.use(Router)
const router = new Router({
  mode: 'history',
  base: 'light',
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
    }
  ],
  linkActiveClass: "active",
})
export default router