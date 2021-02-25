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
                  <p class="mb-0 col-md-7 pl-0 pr-2 text-nowrap" style="color: #fc6075;" title="Set Search Criteria Stage">Search Results Stage</p>
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
                  <div class="d-flex mb-0 col-md-7 pl-0 pr-2"><i class="la la-lock"></i><p class="mb-0">Search started on</p></div>
                  <div class="col-md-5 pr-0 pl-2"><p class=" mb-0">22/12/2021<i class="la la-calendar"></i></p><p class="mb-0">4:30 PM</p></div>
                </td>
              </tr>
              <tr>
                <td class=" p-0 mb-2">
                  <div class="d-flex align-items-center">
                    <div class="d-flex mb-0 col-md-7 pl-0 pr-2"><i class="la la-lock"></i><p class="mb-0">Number of Results</p></div>
                     <strong class="col-md-5 pr-0 pl-2 text-nowrap" title="Account Manager">30</strong>
                  </div>
                  <div class="d-flex align-items-center">
                    <div class="d-flex mb-0 col-md-7 pl-0 pr-2"><i class="pr-3"></i><p class="mb-0">Last Updated</p></div>
                     <strong class="col-md-5 pr-0 pl-2 text-nowrap" title="Account Manager">N/A</strong>
                  </div>
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
  name: "talent-timeline-three",
  data() {
    return {
      searchFinished: true,
    }
  }
};
</script>
