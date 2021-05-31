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
                >Active</strong
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
                5: Contract Negotiation
              </p>
              <strong class="col-md-7 pr-0 pl-2">{{app.status > 5 ? 'Completed' : (app.status == 5) ?'Active' : 'Inactive'}}</strong>
            </td>
          </tr>
              <tr>
                <td class="d-flex align-items-center p-0 mb-2 mt-3">
                  <p class="mb-0 col-md-7 pl-0 pr-2"><i class="la la-check"></i>Final Start Date</p>
                  <div class="col-md-5 pr-0 pl-2 custom-control">
                  <input
                    type="date"
                    class="form-control"
                    v-model="app.startDate"
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
                <input type="checkbox" v-model="app.applicationNegotiation.relatedTaskCompleted" />
                <label for="">{{ app.applicationNegotiation.relatedTaskCompleted ? "Yes" : "No" }}</label>
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
                <input type="checkbox" v-model="app.applicationNegotiation.negotiationCompleted" />
                <label for="">{{ app.applicationNegotiation.negotiationCompleted ? "Yes" : "No" }}</label>
              </div>
            </td>
          </tr>
          <tr>
                <td class="d-flex align-items-center p-0 mb-2">
                  <p class="mb-0 col-md-7 pl-0 pr-2"><i class="pr-3"></i>Negotiated Salary</p>
                  <div class="col-md-5 pr-0 pl-2 custom-control">
                  <input
                    type="text"
                    class="form-control"
                    v-model="app.applicationNegotiation.negotiatedSalary"
                  /></div>
                </td>
              </tr>
              <tr>
                <td class="d-flex align-items-center p-0 mb-2">
                  <p class="mb-0 col-md-7 pl-0 pr-2"><i class="pr-3"></i>Final Decision</p>
                  <div class="col-md-5 pr-0 pl-2 custom-control">
                  <input
                    type="text"
                    class="form-control"
                    v-model="app.applicationNegotiation.finalDecision"
                  /></div>
                </td>
              </tr>
        </tbody>
      </table>
    </div>
    <button v-if="(app.status == 5)" type="button" class="btn btn-primary btn-lg btn-block mt-5" style="border-radius: 0" @click="action">Accept <i class="la la-angle-right ml-2"></i></button>
  </div>
</template>

<script>
export default {
  name: "applications-timeline-two",
  props: {
    action: { type: Function },
         app: {},
         currentOffice: {}
      },
  data() {
    return {
      relatedTasksCompleted: true,
      negotiationsCompleted: true,
    };
  }
};
</script>
