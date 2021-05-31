<template>
    <div class="col-xs-12">
      <application-info-card :app="app" :currentOffice="currentOffice" @update="app = $event;"></application-info-card>

      <salary-expectation-card :app="app" :currentOffice="currentOffice" @update="app = $event;"></salary-expectation-card>
      <documents-card :app="app" :currentOffice="currentOffice" @update="app = $event;"></documents-card>
    </div>
</template>

<script>
import ApplicationInfoCard from "@/components/applications/application-info-card.vue";
import SalaryExpectationCard from "@/components/applications/salary-expectation-card.vue";
import FeedbackCard from "@/components/applications/feedback-card.vue";
import DocumentsCard from "@/components/applications/documents-card.vue";
export default {
  name: "applications-general",
  props: {
         app: {},
         currentOffice: {}
      },
  components: {
    ApplicationInfoCard,
    SalaryExpectationCard,
    FeedbackCard,
    DocumentsCard
  }
};
</script>
