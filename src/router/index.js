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
import profile from '@/components/profile'
import attendanceEmployee from '@/components/attendanceEmployee'
import timesheetEmployee from '@/components/timesheetEmployee'
import colleagues from '@/components/colleagues'
import leaveRequest from '@/components/leaveRequest'
import companies from '@/components/companies'
import ranks from '@/components/ranks'
import leaveTypeOrgAdmin from '@/components/leaveTypeOrgAdmin'



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
    },
  ],
  linkActiveClass: "active",
})
export default router