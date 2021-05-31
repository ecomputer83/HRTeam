<template>
  <div class="col-md-12 job-card">
    <div class="table-responsive">
      <div class="active d-flex justify-content-between flex-wrap">
        <div class="datatable table mb-0 col-xs-12 col-md-6 p-0 pr-sm-3">
          <table class="w-100">
            <tbody>
              <tr>
                <td>Applicant</td>
                <td>
                  <input type="text" :value="app.applicant.firstName + ' ' + app.applicant.lastName" class="form-control" readonly />
                </td>
              </tr>
              <tr>
                <td>Vacancy</td>
                <td>
                  <input type="text" :value="app.vacancy.jobProfile.title" class="form-control" readonly />
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
        <div class="datatable table mb-0 col-xs-12 col-md-6 p-0 pl-sm-3">
          <table class="w-100">
            <tbody>
              
              <tr>
                <td>Earliest Start Date</td>
                <td>
                  <input type="text" class="form-control" :value="new Date(app.startDate).toLocaleDateString()" readonly />
                </td>
              </tr>
              <tr>
                <td>Notice Period</td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    name=""
                    v-model="app.noticePeriod"
                    readonly
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "application-info-card",
  props: {
    app: {},
    currentOffice: {}
  },
};
</script>
