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
                >Completed in 3 Years</strong
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
                2: Initial Validation
              </p>
              <strong class="col-md-7 pr-0 pl-2">Completed</strong>
            </td>
          </tr>
          <tr>
            <td class="d-flex align-items-center p-0 mb-2 mt-3">
              <div class="d-flex mb-0 col-md-7 pl-0 pr-2">
                <i class="pr-3"></i>
                <p class="mb-0">Cover Letter Available</p>
              </div>
              <div class="col-md-5 pr-0 pl-2 custom-control">
                <input type="checkbox" v-model="coverLetterAvailable" />
                <label for="">{{ coverLetterAvailable ? "Yes" : "No" }}</label>
              </div>
            </td>
          </tr>
          <tr>
            <td class="d-flex align-items-center p-0 mb-2">
              <div class="d-flex mb-0 col-md-7 pl-0 pr-2">
                <i class="la la-check"></i>
                <p class="mb-0">CV Available</p>
              </div>
              <div class="col-md-5 pr-0 pl-2 custom-control">
                <input type="checkbox" v-model="cvAvailable" />
                <label for="">{{ cvAvailable ? "Yes" : "No" }}</label>
              </div>
            </td>
          </tr>
          <tr>
            <td class="d-flex align-items-center p-0 mb-2">
              <div class="d-flex mb-0 col-md-7 pl-0 pr-2">
                <i class="pr-3"></i>
                <p class="mb-0">Referral Available</p>
              </div>
              <div class="col-md-5 pr-0 pl-2 custom-control">
                <input type="checkbox" v-model="referralAvailable" />
                <label for="">{{ referralAvailable ? "Yes" : "No" }}</label>
              </div>
            </td>
          </tr>
              <tr>
                <td class="d-flex align-items-center p-0 mb-2">
                  <div class="d-flex mb-0 col-md-7 pl-0 pr-2"><i class="la la-check"></i><p class="mb-0">Aptitude</p></div>
                  
                    <select name="Aptitude" id="Aptitude" class="form-control pl-0">
                    <option value="Good Match">
                      Good Match
                    </option>
                    <option value="Average Match">
                      Average Match
                    </option>
                    <option value="Poor Match">
                      Poor Match
                    </option>
                  </select>
                </td>
              </tr>
              <tr>
                <td class="d-flex align-items-center p-0 mb-2">
                  <p class="mb-0 col-md-7 pl-0 pr-2"><i class="la la-check"></i>Line Manager</p>
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
      coverLetterAvailable: true,
      cvAvailable: true,
      referralAvailable: true,
    };
  }
};
</script>
