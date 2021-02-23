<template>
  <div class="d-flex justify-content-between flex-wrap">
    <div class="col-xs-12 col-md-3 pr-sm-3">
      <talent-info-card></talent-info-card>

    </div>
    <div class="col-xs-12 col-md-9 p-0 pl-sm-3">
      <search-results-card></search-results-card>
    </div>
  </div>
</template>

<script>
import TalentInfoCard from "@/components/talentSearch/talent-info-card.vue";
import SearchResultsCard from "@/components/talentSearch/search-results-card.vue";
export default {
  name: "applications-general",
  components: {
    TalentInfoCard,
    SearchResultsCard,
  }
};
</script>
