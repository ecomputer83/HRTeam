<template>
    <div class="col-md-12 job-card">
        <div class="table-responsive">
          <p>Job Details</p>
          <div class="active d-flex justify-content-between flex-wrap">
            <div class="datatable table mb-0 col-xs-12 col-md-6 p-0 pr-sm-3">
              <table class="w-100">
                <tbody>
                  <tr>
                    <td>Start Date</td>
                    <td>
                      <input type="date" class="form-controlz" name="" id="" />
                    </td>
                  </tr>
                  <tr>
                    <td>Professional Experience</td>
                    <td>
                      <select
                        name="experience"
                        id="experience"
                        class="form-controlz"
                      >
                        <option value="experience 1">
                          experience 1
                        </option>
                        <option value="experience 2">
                          experience 2
                        </option>
                        <option value="experience 3">
                          experience 3
                        </option>
                        <option value="experience 4">
                          experience 4
                        </option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Job Location</td>
                    <td>
                      <select
                        name="Job Location"
                        id="Job_Location"
                        class="form-controlz"
                      >
                        <option value="Job Location 1">
                          Job Location 1
                        </option>
                        <option value="Job Location 2">
                          Job Location 2
                        </option>
                        <option value="Job Location 3">
                          Job Location 3
                        </option>
                        <option value="Job Location 4">
                          Job Location 4
                        </option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="datatable table mb-0 col-xs-12 col-md-6 p-0 pl-sm-3">
              <table class="w-100">
                <tbody>
                  <tr>
                    <td>Enable Self Rating</td>
                    <td>
                      <div class="custom-control custom-switch">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="enbleSelfRatingSwitch"
                        />
                        <label
                          class="custom-control-label"
                          for="enbleSelfRatingSwitch"
                        ></label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Accommodation Provided</td>
                    <td>
                      <div class="custom-control custom-switch">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="acommodationProvidedSwitch"
                        />
                        <label
                          class="custom-control-label"
                          for="acommodationProvidedSwitch"
                        ></label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Traveling Required</td>
                    <td>
                      <select
                        name="traveling"
                        id="traveling"
                        class="form-controlz"
                      >
                        <option value="">----</option>
                        <option value="Not Required">
                          Not Required
                        </option>
                        <option value="Occasionally">
                          Occasionally
                        </option>
                      </select>
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
  name: "job-details-card",
};
</script>