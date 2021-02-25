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
                6: Contract Negotiation
              </p>
              <strong class="col-md-7 pr-0 pl-2">Inactive</strong>
            </td>
          </tr>
              <tr>
                <td class="d-flex align-items-center p-0 mb-2 mt-3">
                  <p class="mb-0 col-md-7 pl-0 pr-2"><i class="la la-check"></i>Final Start Date</p>
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
              <div class="d-flex mb-0 col-md-7 pl-0 pr-2">
                <i class="pr-3"></i>
                <p class="mb-0">Related Tasks Completed</p>
              </div>
              <div class="col-md-5 pr-0 pl-2 custom-control">
                <input type="checkbox" v-model="relatedTasksCompleted" />
                <label for="">{{ relatedTasksCompleted ? "Yes" : "No" }}</label>
              </div>
            </td>
          </tr>
          <tr>
            <td class="d-flex align-items-center p-0 mb-2">
              <div class="d-flex mb-0 col-md-7 pl-0 pr-2">
                <i class="pr-3"></i>
                <p class="mb-0">Negotiations Completed</p>
              </div>
              <div class="col-md-5 pr-0 pl-2 custom-control">
                <input type="checkbox" v-model="negotiationsCompleted" />
                <label for="">{{ negotiationsCompleted ? "Yes" : "No" }}</label>
              </div>
            </td>
          </tr>
              <tr>
                <td class="d-flex align-items-center p-0 mb-2">
                  <p class="mb-0 col-md-7 pl-0 pr-2"><i class="pr-3"></i>Final Decision</p>
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
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "applications-timeline-two",
  data() {
    return {
      relatedTasksCompleted: true,
      negotiationsCompleted: true,
    };
  }
};
</script>
