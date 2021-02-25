<template>
  <div class="col-md-12 job-card">
    <div class="table-responsive">
      <div class="active d-flex justify-content-between flex-wrap">
        <div class=" table mb-0 col-xs-12 p-0 pr-sm-3">
          <table class="w-100">
            <tbody>
              <tr>
                <td>
                  <p>Search Title</p>
                  <strong>Account Manager</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Job Profile</p>
                  <strong><router-link to="/job-profile-info">Account Manager</router-link></strong>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Search Applicants</p>
                  <div class="custom-control custom-switch">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="searchApplicantSwitch"
                    />
                    <label
                      class="custom-control-label"
                      for="searchApplicantSwitch"
                    ></label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Min. Years Of Employment</p>
                  <div class="custom-control custom-switch">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="minYearsSwitch"
                    />
                    <label
                      class="custom-control-label"
                      for="minYearsSwitch"
                    ></label>
                  </div>
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
  name: "talent-info-card"
};
</script>
