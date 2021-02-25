<template>
    <div class="table-responsive" style="overflow: hidden;">
        <div class=" table mb-0 col-xs-12 p-0">
          <table class="w-100">
            <tbody>
              <tr>
                <td class="d-flex align-items-center p-0 mb-2" style=";border: none !important;">
                  <p class="mb-0 col-md-7 pl-0 pr-2 text-nowrap" style="color: #fc6075;" title="Talent Search - HR Management">Talent Search - HR Management</p>
                  <strong class="col-md-5 pr-0 pl-2 text-nowrap" title="Completed in 3 Years">Completed in 3 Years</strong>
                </td>
              </tr>
              <tr>
                <td class="d-flex align-items-center p-0 mb-2" style=";border: none !important;">
                  <p class="mb-0 col-md-7 pl-0 pr-2 text-nowrap" style="color: #fc6075;" title="Set Search Criteria Stage">Set Search Criteria Stage</p>
                  <strong class="col-md-7 pr-0 pl-2">Completed</strong>
                </td>
              </tr>
              <tr>
                <td class="mt-3 d-flex align-items-center p-0 mb-2">
                  <div class="d-flex mb-0 col-md-7 pl-0 pr-2"><i class="la la-lock"></i><p class="mb-0">Search Title</p></div>
                  <strong class="col-md-5 pr-0 pl-2 text-nowrap" title="Account Manager">Account Manager</strong>
                </td>
              </tr>
              <tr>
                <td class="d-flex align-items-center p-0 mb-2">
                  <div class="d-flex mb-0 col-md-7 pl-0 pr-2"><i class="la la-lock"></i><p class="mb-0">Search for Applicants</p></div>
                  <div  class="col-md-5 pr-0 pl-2 custom-control">
                    <input
                      type="checkbox" v-model="searchApplicants"
                    />
                    <label for="">{{searchApplicants ? 'Yes': 'No'}}</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="d-flex align-items-center p-0 mb-2">
                  <div class="d-flex mb-0 col-md-7 pl-0 pr-2"><i class="la la-lock"></i><p class="mb-0">Search for Employees</p></div>
                  <div class="col-md-5 pr-0 pl-2 custom-control">
                   <input
                      type="checkbox" v-model="searchEmployee"
                    />
                    <label for="">{{searchEmployee ? 'Yes': 'No'}}</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="d-flex align-items-center p-0 mb-2">
                  <div class="d-flex mb-0 col-md-7 pl-0 pr-2"><i class="la la-lock"></i><p class="mb-0">Min. Years of Employment</p></div>
                  <strong class="col-md-5 pr-0 pl-2 text-nowrap">3.0</strong>
                </td>
              </tr>
              <tr>
                <td class="d-flex align-items-center p-0 mb-2">
                  <div class="d-flex mb-0 col-md-7 pl-0 pr-2"><i class="la la-lock"></i><p class="mb-0">Job Profile</p></div>
                  <strong class="col-md-5 pr-0 pl-2 text-nowrap" title="Account Manager"><router-link to="/job-profile-info">Account Manager</router-link></strong>
                </td>
              </tr>
              <tr>
                <td class="d-flex align-items-center p-0 mb-2">
                  <div class="d-flex mb-0 col-md-7 pl-0 pr-2"><i class="la la-lock"></i><p class="mb-0">Keyword Search</p></div>
                  <strong class="col-md-5 pr-0 pl-2 text-nowrap">Project</strong>
                </td>
              </tr>
              <tr>
                <td class="d-flex align-items-center p-0 mb-2">
                  <p class="mb-0 col-md-7 pl-0 pr-2"><i class="pr-3"></i>Search Criteria Set</p>
                  <input
                    type="text"
                    class="form-control"
                    name=""
                    id=""
                    value="---"
                  />
                </td>
              </tr>
              <tr>
                <td class="d-flex align-items-center p-0 mb-2">
                  <p class="mb-0 col-md-7 pl-0 pr-2"><i class="pr-3"></i>Rating Multiplier Set</p>
                  <input
                    type="text"
                    class="form-control"
                    name=""
                    id=""
                    value="---"
                  />
                </td>
              </tr>
              <tr>
                <td class="d-flex align-items-center p-0 mb-2">
                  <p class="mb-0 col-md-7 pl-0 pr-2"><i class="pr-3"></i>Recurring Search</p>
                  <input
                    type="text"
                    class="form-control"
                    name=""
                    id=""
                    value="---"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
</template>

<script>
export default {
  name: "talent-timeline-one",
  data() {
    return {
      searchApplicants: false,
      searchEmployee: false
    }
  }
};
</script>
