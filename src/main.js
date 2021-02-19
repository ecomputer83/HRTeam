// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { Button, message } from 'ant-design-vue';
window.Vue = Vue;
import App from './App'
import router from './router'
import VueSlimScroll from 'vue-slimscroll'
import datePicker from 'vue-bootstrap-datetimepicker';
import store from './store/index.js'
import installer from '@andresouzaabreu/vue-data-table'
import CKEditor from 'ckeditor4-vue';
import FullCalendar from 'vue-full-calendar'
import Select2 from 'v-select2-component';
import InputMask from 'vue-input-mask';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
import { Drag, Drop } from 'vue-drag-drop'
import { BarChart } from 'vue-morris'
import { LineChart } from 'vue-morris'
import Multiselect from 'vue-bootstrap-multiselect'
import LayoutHeader from '@/components/layouts/Header.vue'
import LayoutHeaderEmployee from '@/components/layouts/HeaderEmployee.vue'
import LayoutHeaderApp from '@/components/layouts/HeaderApp.vue'
import LayoutSidebar from '@/components/layouts/Sidebar.vue'
import LayoutSidebarEmployee from '@/components/layouts/SidebarEmployee.vue'
import LayoutSidebarApp from '@/components/layouts/SidebarApp.vue'
import LayoutSidebarReports from '@/components/layouts/SidebarReports.vue'
import LayoutSidebarPromotion from '@/components/layouts/SidebarPromotion.vue'
import LayoutSidebarGoals from '@/components/layouts/SidebarGoals.vue'
import PersonalInfoModal from '@/components/employees/PersonalInfoModal.vue'
import ProfileModal from '@/components/employees/ProfileModal.vue'
import FamilyInfoModal from '@/components/employees/FamilyInfoModal.vue'
import BankInfoModal from '@/components/employees/BankInfoModal.vue'
import ExperienceModal from '@/components/employees/ExperienceModal.vue'
import EducationModal from '@/components/employees/EducationModal.vue'
import EmergencyContactModal from '@/components/employees/EmergencyContactModal.vue'
import Vuelidate from 'vuelidate';
import vSelect from "vue-select";
let bootstrap = require('bootstrap')
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
// import './components/style.css'
import './assets/style/style.css'
import 'vue-full-calendar/node_modules/fullcalendar/dist/fullcalendar.css'
import './components/main.js'
import Raphael from 'raphael/raphael'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import VueApexCharts from 'vue-apexcharts'
import { VuejsDatatableFactory } from 'vuejs-datatable';
import "vue-select/dist/vue-select.css";
 
global.Raphael = Raphael
Vue.config.productionTip = false
Vue.use(Antd);
Vue.use(Button);
Vue.use(VueSlimScroll)
Vue.use(datePicker)
Vue.use( CKEditor );
Vue.use(VueQuillEditor, /* { default global options } */)
Vue.use(VueApexCharts)
Vue.use(VuejsDatatableFactory);
Vue.component('layout-header', LayoutHeader);
Vue.component('layout-headerEmployee', LayoutHeaderEmployee);
Vue.component('layout-headerApp', LayoutHeaderApp);
Vue.component('layout-sidebar', LayoutSidebar);
Vue.component('layout-sidebarEmployee', LayoutSidebarEmployee);
Vue.component('layout-sidebarApp', LayoutSidebarApp);
Vue.component('layout-sidebarReports', LayoutSidebarReports);
Vue.component('layout-sidebarPromotion', LayoutSidebarPromotion);
Vue.component('layout-sidebarGoals', LayoutSidebarGoals);
Vue.component('personal-info-modal', PersonalInfoModal);
Vue.component('profile-modal', ProfileModal);
Vue.component('family-info-modal', FamilyInfoModal);
Vue.component('bank-info-modal', BankInfoModal);
Vue.component('experience-modal', ExperienceModal);
Vue.component('education-modal', EducationModal);
Vue.component('emergency-contact-modal', EmergencyContactModal);
Vue.use(require('vue-moment'));
Vue.component('drag', Drag);
Vue.component('drop', Drop);
Vue.component('input-mask', InputMask);
Vue.component('multiselect', Multiselect);
Vue.component('Select2', Select2);
Vue.component("apexchart", VueApexCharts);
Vue.component("v-select", vSelect);
Vue.use(FullCalendar);
Vue.use(Vuelidate);
installer(Vue, store)
new Vue({
  store,
  el: '#app',
  router,
  components: { App,BarChart,LineChart, },
  data() {
    return {
      message: 'Hello',
    }
  },
  template: '<App/>'
})