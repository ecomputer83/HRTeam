<template>
  <div class="col-md-12 job-card">
    <div class="table-responsive">
      <div class="active d-flex justify-content-between flex-wrap">
        <div class="datatable table mb-0 col-xs-12 col-md-6 p-0 pr-sm-3">
          <table class="w-100">
            <tbody>
              <tr>
                <td>Applicant</td>
                <td>
                  <select name="applicant" id="applicant" class="form-control">
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
                <td>Vacancy</td>
                <td>
                  <select name="vacancy" id="vacancy" class="form-control">
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
                <td>Initiative Application</td>
                <td>
                  <div class="custom-control custom-switch">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="initiativeApplicationSwitch"
                    />
                    <label
                      class="custom-control-label"
                      for="initiativeApplicationSwitch"
                    ></label>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="datatable table mb-0 col-xs-12 col-md-6 p-0 pl-sm-3">
          <table class="w-100">
            <tbody>
              <tr>
                <td>Manager</td>
                <td>
                  <select name="manager" id="manager" class="form-control">
                    <option value="manager 1">
                      manager 1
                    </option>
                    <option value="manager 2">
                      manager 2
                    </option>
                    <option value="manager 3">
                      manager 3
                    </option>
                    <option value="manager 4">
                      manager 4
                    </option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Earliest Start Date</td>
                <td>
                  <input type="date" class="form-control" name="" id="" />
                </td>
              </tr>
              <tr>
                <td>Notice Period</td>
                <td>
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
    </div>
  </div>
</template>

<script>
export default {
  name: "application-info-card"
};
</script>
