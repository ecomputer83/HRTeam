<template>
  <div class="d-flex justify-content-between flex-wrap">
    <vacancy-overview-card :vacancy="vacancy" :currentOffice="currentOffice"></vacancy-overview-card>
    <div class="col-xs-12 col-md-8 p-0 pl-sm-3">
      <vacancy-details-card :vacancy="vacancy" :currentOffice="currentOffice"></vacancy-details-card>
      <!-- <job-details-card></job-details-card> -->
    </div>
  </div>
</template>
<script>
import VacancyOverviewCard from "@/components/vacancies/overview-card.vue";
import VacancyDetailsCard from "@/components/vacancies/vacancy-details-card.vue";
import JobDetailsCard from "@/components/vacancies/job-details-card.vue";
export default {
  props: {
    vacancy: {},
    currentOffice: {}
  },
  data() {
    return {
      //vacancy: this.vacancy,
      //currentOffice: this.props.currentOffice
    }
  },
  mounted() {
    this.$emit('update', this.vacancy);
  },
  name: "vacancy-info",
  components: {VacancyOverviewCard,VacancyDetailsCard,JobDetailsCard}
};
</script>
<style scoped>
</style>
