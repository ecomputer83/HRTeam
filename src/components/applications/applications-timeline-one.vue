<template>
    <div class="table-responsive" style="overflow: hidden;">
        <div class=" table mb-0 col-xs-12 p-0">
          <table class="w-100">
            <tbody>
              <tr>
                <td class="d-flex align-items-center p-0 mb-2" style=";border: none !important;">
                  <p class="mb-0 col-md-7 pl-0 pr-2 text-nowrap" style="color: #fc6075;" title="Set Search Criteria Stage">1. New Stage</p>
                  <strong class="col-md-7 pr-0 pl-2">{{app.status > 0 ? 'Completed' : 'Active'}}</strong>
                </td>
              </tr>
              <tr>
                <td class="mt-3 d-flex align-items-center p-0 mb-2">
                  <div class="d-flex mb-0 col-md-7 pl-0 pr-2"><i class="la la-lock"></i><p class="mb-0">Applicant</p></div>
                  <input type="text" :value="app.applicant.firstName + ' ' + app.applicant.lastName" class="form-control" readonly />
                </td>
              </tr>
              <tr>
                <td class="d-flex align-items-center p-0 mb-2">
                  <div class="d-flex mb-0 col-md-7 pl-0 pr-2"><i class="la la-lock"></i><p class="mb-0">Application For</p></div>
                  
                    <input type="text" :value="app.vacancy.jobProfile.title" class="form-control" readonly />
                </td>
              </tr>
              <tr>
                <td class="d-flex align-items-center p-0 mb-2">
                  <div class="d-flex mb-0 col-md-7 pl-0 pr-2"><i class="pr-3"></i><p class="mb-0">Initative Application</p></div>
                  <div class="col-md-5 pr-0 pl-2 custom-control">
                   <input
                      type="checkbox" :checked="inititiativeApplication"
                    />
                    <label for="">{{inititiativeApplication ? 'Yes': 'No'}}</label>
                  </div>
                </td>
              </tr>
              
              <tr>
                <td class="d-flex align-items-center p-0 mb-2">
                  <p class="mb-0 col-md-7 pl-0 pr-2"><i class="la la-check"></i>Received On</p>
                  <div class="col-md-5 pr-0 pl-2 custom-control">
                  <input
                    type="text"
                    class="form-control"
                    :value="new Date(app.createdAt).toLocaleDateString()"
                    readonly
                  />
                  </div>
                </td>
              </tr>
              
              
            </tbody>
          </table>
        </div>
        <button v-if="(app.status == 0)" type="button" class="btn btn-primary btn-lg btn-block mt-5" style="border-radius: 0" @click="action">Next Stage <i class="la la-angle-right ml-2"></i></button>
    </div>
</template>

<script>
export default {
  name: "applications-timeline-one",
  props: {
    action: { type: Function },
         app: {},
         currentOffice: {}
      },
  data() {
    return {
      inititiativeApplication: app.status == 0
    }
  },
  mounted() {
    this.inititiativeApplication = app.status == 0
  }
};
</script>
