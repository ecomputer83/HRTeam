<template>
  <div class="col-md-12 job-card">
    <p>Documents</p>

    <a :href="app.document" class="btn btn-secondary" v-if="app.document">Download CV</a>
  </div>
</template>

<script>
export default {
  name: "documents-card",
  props: {
         app: {},
         currentOffice: {}
  },
};
</script>
