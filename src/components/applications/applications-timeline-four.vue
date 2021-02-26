<template>
  <div class="table-responsive" style="overflow: hidden;">
    <div class=" table mb-0 col-xs-12 p-0">
      <table class="w-100">
        <tbody>
          <tr>
            <td
              class="d-flex align-items-center p-0 mb-2"
              style=";border: none !important;"
            >
              <p
                class="mb-0 col-md-7 pl-0 pr-2 text-nowrap"
                style="color: #fc6075;"
                title="Talent Search - HR Management"
              >
                Application Management - HR Management
              </p>
              <strong
                class="col-md-5 pr-0 pl-2 text-nowrap"
                title="Completed in 3 Years"
                >Active for 3 Years</strong
              >
            </td>
          </tr>
          <tr>
            <td
              class="d-flex align-items-center p-0 mb-2"
              style=";border: none !important;"
            >
              <p
                class="mb-0 col-md-7 pl-0 pr-2 text-nowrap"
                style="color: #fc6075;"
                title="Set Search Criteria Stage"
              >
                4: Phone Interview
              </p>
              <strong class="col-md-7 pr-0 pl-2">Inactive</strong>
            </td>
          </tr><tr>
                <td class="d-flex align-items-center p-0 mb-2 mt-3">
                  <p class="mb-0 col-md-7 pl-0 pr-2"><i class="la la-check"></i>Earliest Start Date</p>
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
                  <p class="mb-0 col-md-7 pl-0 pr-2"><i class="pr-3"></i>Notice Period</p>
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
                  <p class="mb-0 col-md-7 pl-0 pr-2"><i class="pr-3"></i>Remarks HR</p>
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
                  <p class="mb-0 col-md-7 pl-0 pr-2"><i class="pr-3"></i>Expected Salary Min.</p>
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
                  <p class="mb-0 col-md-7 pl-0 pr-2"><i class="la la-check"></i>Expected Salary Max.</p>
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
                  <div class="d-flex mb-0 col-md-7 pl-0 pr-2"><i class="la la-check"></i><p class="mb-0">Salary</p></div>
                  
                    <select name="Salary" id="Salary" class="form-control pl-0">
                    <option value="Salary Range">
                      Salary Range
                    </option>
                    <option value="Specific Salary">
                      Specific Salary</option>
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
  name: "applications-timeline-four",
  data() {
    return {
      coverLetterAvailable: true,
      cvAvailable: true,
      referralAvailable: true,
    };
  }
};
</script>
