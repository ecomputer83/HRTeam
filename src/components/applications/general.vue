<template>
    <div class="col-xs-12">
      <application-info-card></application-info-card>

      <salary-expectation-card></salary-expectation-card>
      <documents-card></documents-card>
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
