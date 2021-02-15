<template>
  <div class="col-md-12 job-card">
    <div class="table-responsive">
      <p>Feedback</p>
      <div class="active d-flex justify-content-between flex-wrap">
        <div class="datatable table mb-0 col-xs-12 col-md-12 p-0 pr-sm-3">
          <table class="w-100">
            <tbody>
              <tr>
                <td>Applicant</td>
                <td>
                  <textarea
                    style="height: auto !important"
                    class="form-control"
                    type="text"
                  >
---</textarea
                  >
                </td>
              </tr>
              <tr>
                <td>Vacancy</td>
                <td>
                  <textarea
                    style="height: auto !important"
                    class="form-control"
                    type="text"
                  >
---</textarea
                  >
                </td>
              </tr>
              <tr>
                <td>Initiative Application</td>
                <td>
                  <textarea
                    style="height: auto !important"
                    class="form-control"
                    type="text"
                  >
---</textarea
                  >
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
  name: "feedback-card"
};
</script>
