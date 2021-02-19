<template>
  <div class="col-md-12 ">
    <p>Search Results</p>
    <div class="row">
            <div class="col-md-12">
              <div class="card job-card">
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="datatable table table-stripped mb-0">
                      <thead>
                        <tr>
                          <th>Score</th>
                          <th>Result</th>
                          <th>Name</th>
                          <th>Employee(Talent Search)</th>
                          <th>Applicant</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="i in 2">
                          <td>191</td>
                          <td>Score years of employment</td>
                          <td><router-link to="">John Doe</router-link></td>
                          <td>---</td>
                          <td><router-link to="">John Doe</router-link></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
  </div>
</template>

<script>
export default {
  name: "search-results-card",
  mounted() {
    if ($(".datatable").length > 0) {
      $(".datatable").DataTable({
        bFilter: false
      });
    }
  },
};
</script>
