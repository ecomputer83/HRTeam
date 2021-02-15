<template>
  <div class="d-flex justify-content-between flex-wrap">
    <div class="col-xs-12 col-md-6 pr-sm-3">
      <application-info-card></application-info-card>

      <salary-expectation-card></salary-expectation-card>
    </div>
    <div class="col-xs-12 col-md-6 p-0 pl-sm-3">
      <feedback-card></feedback-card>
      <documents-card></documents-card>
    </div>
  </div>
</template>

<script>
import ApplicationInfoCard from "@/components/applications/application-info-card.vue";
import SalaryExpectationCard from "@/components/applications/salary-expectation-card.vue";
import FeedbackCard from "@/components/applications/feedback-card.vue";
import DocumentsCard from "@/components/applications/documents-card.vue";
export default {
  name: "applications-general",
  components: {
    ApplicationInfoCard,
    SalaryExpectationCard,
    FeedbackCard,
    DocumentsCard
  }
};
</script>
