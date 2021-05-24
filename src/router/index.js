import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import employeedashboard from '@/components/employeedashboard'
import JobProfile from '@/components/JobProfiles/main'
import Applications from '@/components/applications/main'
import ApplicationDetail from '@/components/applications/details-page'
import Applicants from '@/components/applicants/main'
import Vacancies from '@/components/vacancies/main'
import VacancyDetail from '@/components/vacancies/details-page'
import TalentSearch from '@/components/talentSearch/main'
import TalentSearchDetail from '@/components/talentSearch/details-page'
import Onboarding from '@/components/Onboarding'
import employees from '@/components/employees/main'
import leaves from '@/components/leaves/leaves'
import leavesettings from '@/components/leaves/leavesettings'
import attendance from '@/components/attendance/attendance'
import departments from '@/components/departments'
import companydesignations from '@/components/companydesignations'
import companydepartments from '@/components/companydepartments'
import designations from '@/components/designations'
import query from '@/components/query'
import employeeQuery from '@/components/employeeQuery'
import timesheet from '@/components/timesheet'
import employeeslist from '@/components/employeeslist'
import disciplinaryMeasures from '@/components/discipline/disciplinaryMeasures'
import JobProfileInfo from '@/components/JobProfiles/detail'
import editApplicant from '@/components/editApplicant'
import createOrganization from '@/components/createOrganization'
import leaveTypeForm from '@/components/leaves/leaveTypeForm'
import rank from '@/components/rank'
import profile from '@/components/employees/profile'
import details from '@/components/employees/details'
import paidsalary from '@/components/employees/paidsalary'
import login from '@/components/login'
import attendanceEmployee from '@/components/attendance/attendanceEmployee'
import timesheetEmployee from '@/components/timesheetEmployee'
import colleagues from '@/components/colleagues'
import leaveRequest from '@/components/leaves/leaveRequest'
import companies from '@/components/companies/main'
import companyform from '@/components/companies/form'
import ranks from '@/components/ranks'
import skills from '@/components/jobprofiles/skills'
import skillGrades from '@/components/jobprofiles/skillGrades'
import terminationType from '@/components/jobprofiles/terminationType'
import skillType from '@/components/jobprofiles/skillType'
import leaveTypeOrgAdmin from '@/components/leaves/leaveTypeOrgAdmin'
import jobview from '@/components/jobview'
import joblist from '@/components/joblist'
import applicantLogin from '@/components/applicantLogin'
import termination from '@/components/termination';
import resignation from '@/components/resignation/resignation';
import resignationEmployee from '@/components/resignation/resignationEmployee';
import salary from '@/components/payroll/salary';
import salaryhistory from '@/components/payroll/salaryhistory';
import accountsettings from '@/components/settings/account';
import salaryview from '@/components/payroll/salaryview'
import payrollitems from '@/components/payroll/payrollitems'
import expensereports from '@/components/reports/expensereports'
import policies from '@/components/policies'
import promotion from '@/components/promotion'
import performanceIndicator from '@/components/performance/performanceIndicator'
import performanceReview from '@/components/performance/performanceReview'
import performanceAppraisal from '@/components/performance/performanceAppraisal'
import professionalExcellenceSettings from '@/components/settings/performance/professionalExcellenceSettings'
import personalExcellenceSettings from '@/components/settings/performance/personalExcellenceSettings'
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
      meta: { authorize: [Role.HRAdmin] }
    },
    {
      path: '/index',
      name: 'indexs',
      component: index,
      meta: { authorize: [Role.HRAdmin] }
    },
    {
      path: '/employees',
      name: 'employees',
      component: employees,
      meta: { authorize: [Role.HRAdmin] }
    },
    {
      path: '/employees-list',
      name: 'employeeslist',
      component: employeeslist,
      meta: { authorize: [Role.Employee] }
    },
    {
      path: '/employeedashboard',
      name: 'employeedashboard',
      component: employeedashboard,
      meta: { authorize: [Role.Employee] }
    },
    {
      path: '/job-profile',
      name: 'jobprofile',
      component: JobProfile,
      meta: { authorize: [Role.HRAdmin] }
    },
    {
      path: '/accountsettings',
      name: 'accountsettings',
      component: accountsettings,
      meta: { authorize: [Role.HRAdmin] }
    },
    {
      path: '/promotion',
      name: 'promotion',
      component: promotion,
    },
    {
      path: '/vacancies',
      name: 'vacancies',
      component: Vacancies,
      meta: { authorize: [Role.HRAdmin] }
    },
    {
      path: '/applications',
      name: 'applications',
      component: Applications,
      meta: { authorize: [Role.HRAdmin] }
    },
    {
      path: '/applicants',
      name: 'applicants',
      component: Applicants,
      meta: { authorize: [Role.HRAdmin] }
    },
    {
      path: '/talent-search',
      name: 'talentSearch',
      component: TalentSearch,
      meta: { authorize: [Role.HRAdmin] }
    },
    {
      path: '/onboarding',
      name: 'onboarding',
      component: Onboarding,
      meta: { authorize: [Role.HRAdmin] }
    },
    {
      path: '/leaves',
      name: 'leaves',
      component: leaves,
      meta: { authorize: [Role.HRAdmin] }
    },
    {
      path: '/leavesettings',
      name: 'leavesettings',
      component: leavesettings,
      meta: { authorize: [Role.HRAdmin] }
    },
    {
      path: '/attendance',
      name: 'attendance',
      component: attendance,
      meta: { authorize: [Role.HRAdmin] }
    },
    {
      path: '/departments',
      name: 'departments',
      component: departments,
      meta: { authorize: [Role.Admin] }
    },
    {
      path: '/designations',
      name: 'designations',
      component: designations,
      meta: { authorize: [Role.Admin] }
    },
    {
      path: '/companydepartments',
      name: 'companydepartments',
      component: companydepartments,
      meta: { authorize: [Role.HRAdmin] }
    },
    {
      path: '/companydesignations',
      name: 'companydesignations',
      component: companydesignations,
      meta: { authorize: [Role.HRAdmin] }
    },
    {
      path: '/timesheet',
      name: 'timesheet',
      component: timesheet,
      meta: { authorize: [Role.HRAdmin] }
    },
    {
      path: '/disciplinary-measures',
      name: 'disciplinaryMeasures',
      component: disciplinaryMeasures,
      meta: { authorize: [Role.HRAdmin] }
    },
    {
      path: '/job-profile-edit/:id',
      name: 'jobprofileinfo',
      component: JobProfileInfo,
      meta: { authorize: [Role.HRAdmin] }
    },
    {
      path: '/job-profile-info',
      name: 'createjobprofile',
      component: JobProfileInfo,
      meta: { authorize: [Role.HRAdmin] }
    },
    {
      path: '/vacancy/:id',
      name: 'vacancydetail',
      component: VacancyDetail,
      meta: { authorize: [Role.HRAdmin] }
    },
    {
      path: '/addvacancy',
      name: 'addvacancy',
      component: VacancyDetail,
      meta: { authorize: [Role.HRAdmin] }
    },
    {
      path: '/applications/:id',
      name: 'applicationDetail',
      component: ApplicationDetail,
      meta: { authorize: [Role.HRAdmin] }
    },
    {
      path: '/talent-search/:id',
      name: 'talentSearchDetail',
      component: TalentSearchDetail,
      meta: { authorize: [Role.HRAdmin] }
    },
    {
      path: '/create-organization',
      name: 'createorganization',
      component: createOrganization
    },
    {
      path: '/leave-type-form',
      name: 'leavetypeform',
      component: leaveTypeForm,
      //meta: { authorize: [Role.Admin] }
    },
    {
      path: '/rank',
      name: 'rank',
      component: rank,
      meta: { authorize: [] }
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile,
      meta: { authorize: [] }
    },
    {
      path: '/employee-detail/:id',
      name: 'employeedetail',
      component: details,
      meta: { authorize: [] }
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/attendance-employee',
      name: 'attendanceemployee',
      component: attendanceEmployee,
      meta: { authorize: [Role.Employee] }
    },
    {
      path: '/timesheet-employee',
      name: 'timesheetemployee',
      component: timesheetEmployee,
      meta: { authorize: [Role.Employee] }
    },
    {
      path: '/colleagues',
      name: 'colleagues',
      component: colleagues,
      meta: { authorize: [Role.Employee] }
    },
    {
      path: '/leave-request',
      name: 'leaverequest',
      component: leaveRequest,
      meta: { authorize: [Role.Employee] }
    },
    {
      path: '/ranks',
      name: 'ranks',
      component: ranks,
      meta: { authorize: [Role.HRAdmin] }
    },
    {
      path: '/leave-type-org-admin',
      name: 'leavetypeorgadmin',
      component: leaveTypeOrgAdmin,
      meta: { authorize: [Role.Admin] }
    },
    {
      path: '/companies',
      name: 'companies',
      component: companies,
      meta: { authorize: [Role.Admin] },
    },
    {
      path: '/addcompany',
      name: 'addcompany',
      component: companyform,
      meta: { authorize: [Role.Admin] },
    },
    {
      path: '/skill',
      name: 'skill',
      component: skills,
      meta: { authorize: [Role.HRAdmin] },
    },
    {
      path: '/skill-type',
      name: 'skilltype',
      component: skillType,
      meta: { authorize: [Role.HRAdmin] },
    },
    {
      path: '/skill-grade',
      name: 'skillgrade',
      component: skillGrades,
      meta: { authorize: [Role.HRAdmin] },
    },
    {
      path: '/jobview/:id',
      name: 'jobview',
      component: jobview
    },
    {
      path: '/joblist',
      name: 'joblist',
      component: joblist
    },
    {
      path: '/applicant-login',
      name: 'appplicantlogin',
      component: applicantLogin
    },
    {
      path: '/resignation',
      name: 'resignation',
      component: resignation
    },
    {
      path: '/resignationEmployee',
      name: 'resignationEmployee',
      component: resignationEmployee,
      meta: { authorize: [Role.Employee] },
    },
    {
      path: '/termination',
      name: 'termination',
      component: termination,
      meta: { authorize: [Role.HRAdmin] },
    },
    {
      path: '/termination-type',
      name: 'terminationtype',
      component: terminationType,
      meta: { authorize: [Role.HRAdmin] },
    },
    {
      path: '/salary',
      name: 'salary',
      component: salary,
      meta: { authorize: [Role.HRAdmin] },
    },
    {
      path: '/salaryhistory',
      name: 'salaryhistory',
      component: salaryhistory,
      meta: { authorize: [Role.HRAdmin] },
    },
    {
      path: '/salaryview/:id',
      name: 'salaryview',
      component: salaryview,
      meta: { authorize: [Role.Employee] },
    },
    {
      path: '/payrollitems',
      name: 'payrollitems',
      component: payrollitems,
      meta: { authorize: [Role.HRAdmin] },
    },
    {
      path: '/policies',
      name: 'policies',
      component: policies,
      meta: { authorize: [Role.HRAdmin] },
    },
    {
      path: '/expense-reports',
      name: 'expensereports',
      component: expensereports,
      //meta: { authorize: [Role.HRAdmin] },
    },
    {
      path: '/paidsalary',
      name: 'paidsalary',
      component: paidsalary
    },
    {
      path: '/performance-indicator',
      name: 'performanceindicator',
      component: performanceIndicator,
      meta: { authorize: [Role.HRAdmin] },
    },
    {
      path: '/performance-review',
      name: 'performancereview',
      component: performanceReview,
      meta: { authorize: [Role.HRAdmin] },
    },
    {
      path: '/performance-appraisal',
      name: 'performanceappraisal',
      component: performanceAppraisal,
      meta: { authorize: [Role.HRAdmin] },
    },
    {
      path: '/professional-excellence-settings',
      name: 'professionalexcellencesettings',
      component: professionalExcellenceSettings,
      meta: { authorize: [Role.HRAdmin] },
    },
    {
      path: '/personal-excellence-settings',
      name: 'personalexcellencesettings',
      component: personalExcellenceSettings,
      meta: { authorize: [Role.HRAdmin] },
    },
    {
      path: '/query',
      name: 'query',
      component: query,
      meta: { authorize: [Role.HRAdmin] },
    },
    {
      path: '/employee-query',
      name: 'employeequery',
      component: employeeQuery,
      meta: { authorize: [Role.Employee] }
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
      return next({ path: '/login' });
    }

    // check if route is restricted by role
    if (authorize.length && !authorize.includes(currentUser.role)) {
      // role not authorised so redirect to home page
      if (currentUser.user.userType == 1) {
        return next({ name: 'companies' });
      } else if (currentUser.user.userType == 3) {
        return next({ name: 'employeedashboard' });
      } else {
        return next({ path: '/' });
      }
    }
  }

  next();
})
export default router