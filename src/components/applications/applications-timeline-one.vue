<template>
    <div class="table-responsive" style="overflow: hidden;">
        <div class=" table mb-0 col-xs-12 p-0">
          <table class="w-100">
            <tbody>
              <tr>
                <td class="d-flex align-items-center p-0 mb-2" style=";border: none !important;">
                  <p class="mb-0 col-md-7 pl-0 pr-2 text-nowrap" style="color: #fc6075;" title="Talent Search - HR Management">Application Management - HR Management</p>
                  <strong class="col-md-5 pr-0 pl-2 text-nowrap" title="Completed in 3 Years">Completed in 3 Years</strong>
                </td>
              </tr>
              <tr>
                <td class="d-flex align-items-center p-0 mb-2" style=";border: none !important;">
                  <p class="mb-0 col-md-7 pl-0 pr-2 text-nowrap" style="color: #fc6075;" title="Set Search Criteria Stage">1. New Stage</p>
                  <strong class="col-md-7 pr-0 pl-2">Completed</strong>
                </td>
              </tr>
              <tr>
                <td class="mt-3 d-flex align-items-center p-0 mb-2">
                  <div class="d-flex mb-0 col-md-7 pl-0 pr-2"><i class="la la-lock"></i><p class="mb-0">Applicant</p></div>
                  <select name="applicant" id="applicant" class="form-control pl-0">
                    <option value="applicant 1">
                      applicant 1
                    </option>
                    <option value="applicant 2">
                      applicant 2
                    </option>
                    <option value="applicant 3">
                      applicant 3
                    </option>
                    <option value="applicant 4">
                      applicant 4
                    </option>
                  </select>
                </td>
              </tr>
              <tr>
                <td class="d-flex align-items-center p-0 mb-2">
                  <div class="d-flex mb-0 col-md-7 pl-0 pr-2"><i class="la la-lock"></i><p class="mb-0">Vacancy</p></div>
                  
                    <select name="vacancy" id="vacancy" class="form-control pl-0">
                    <option value="vacancy 1">
                      vacancy 1
                    </option>
                    <option value="vacancy 2">
                      vacancy 2
                    </option>
                    <option value="vacancy 3">
                      vacancy 3
                    </option>
                    <option value="vacancy 4">
                      vacancy 4
                    </option>
                  </select>
                </td>
              </tr>
              <tr>
                <td class="d-flex align-items-center p-0 mb-2">
                  <div class="d-flex mb-0 col-md-7 pl-0 pr-2"><i class="pr-3"></i><p class="mb-0">Initative Application</p></div>
                  <div class="col-md-5 pr-0 pl-2 custom-control">
                   <input
                      type="checkbox" v-model="inititiativeApplication"
                    />
                    <label for="">{{inititiativeApplication ? 'Yes': 'No'}}</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="d-flex align-items-center p-0 mb-2">
                  <p class="mb-0 col-md-7 pl-0 pr-2"><i class="la la-check"></i>Application For</p>
                  <div class="col-md-5 pr-0 pl-2 custom-control">
                  <input
                    type="text"
                    class="form-control"
                    name=""
                    id=""
                    value="---"
                  /></div>
                </td>
              </tr>
              <tr>
                <td class="d-flex align-items-center p-0 mb-2">
                  <p class="mb-0 col-md-7 pl-0 pr-2"><i class="la la-check"></i>Received On</p>
                  <div class="col-md-5 pr-0 pl-2 custom-control">
                  <input
                    type="date"
                    class="form-control"
                    name=""
                    id=""
                    value="11/12/2021"
                  />
                  </div>
                </td>
              </tr>
              <tr>
                <td class="d-flex align-items-center p-0 mb-2">
                  <div class="d-flex mb-0 col-md-7 pl-0 pr-2"><i class="la la-check"></i><p class="mb-0">Received Via</p></div>
                  
                    <select name="receivedVia" id="receivedVia" class="form-control pl-0">
                    <option value="Website">
                      Website
                    </option>
                    <option value="Email">
                      Email
                    </option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
</template>

<script>
export default {
  name: "applications-timeline-one",
  data() {
    return {
      inititiativeApplication: false
    }
  }
};
</script>
