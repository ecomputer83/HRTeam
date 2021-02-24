<template>
  <div class="d-flex justify-content-between flex-wrap">
      <div class="col-xs-12 col-md-6 pr-3">
        <p>Required Skills</p>
        <div class="table-responsive job-card">
          
          <table
            id="evaluation-tablse"
            class="datatable2 table table-stripped mb-0"
          >
            <thead>
              <tr>
                <th>Skill</th>
                <th>Skill Grade</th>
                <th>Requirement</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in 2" :key="i">
                <td>Business English</td>
                <td>C1 - Advanced</td>
                <td>Optional</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-xs-12 col-md-6  d-flex flex-wrap pl-3">
        <p>Required Education</p>
       <div class="table-responsive job-card">
          <table
            id="evaluation-tablse"
            class="datatable2 table table-stripped mb-0"
          >
            <thead>
              <tr>
                <th>Certificate</th>
                <th>Requirement</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in 2" :key="i">
                <td>CPMA</td>
                <td>Optional</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
    
</template>
<script>
// import { VuejsDatatableFactory } from 'vuejs-datatable';
export default {
  name: "search-criteria",
  
  mounted() {
    if ($(".datatable2").length > 0) {
      $(".datatable2").DataTable({
        bFilter: false
      });
    }
  }
};
</script>
