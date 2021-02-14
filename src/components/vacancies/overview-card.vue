<template>
    <div class="col-xs-12 col-md-4 job-card">
      <div class="table-responsive">
        <p>Overview</p>
        <table class="datatable table mb-0">
          <tbody>
            <tr>
              <td>Vacancy Id</td>
              <td><p class="ml-3 mb-0">vid</p></td>
            </tr>
            <tr>
              <td>Based on Job Profile</td>
              <td>
                <div class="custom-control custom-switch">
                  <input
                    type="checkbox form-control"
                    class="custom-control-input"
                    id="customSwitch1"
                  />
                  <label
                    class="custom-control-label"
                    for="customSwitch1"
                  ></label>
                </div>
              </td>
            </tr>
            <tr>
              <td>Job Profile</td>
              <td>
                <select
                  name="job profile"
                  id="job_profile"
                  class="form-control"
                >
                  <option value="prof 1">prof 1</option>
                  <option value="prof 2">prof 2</option>
                  <option value="prof 3">prof 3</option>
                  <option value="prof 4">prof 4</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Quantity of Position</td>
              <td>
                <input class="form-control" type="text" value="2" />
              </td>
            </tr>
            <tr>
              <td>Department</td>
              <td>
                <select name="department" id="department" class="form-control">
                  <option value="dept 1">dept 1</option>
                  <option value="dept 2">dept 2</option>
                  <option value="dept 3">dept 3</option>
                  <option value="dept 4">dept 4</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Description</td>
              <td>
                <textarea
                  style="height: auto !important"
                  class="form-control"
                  type="text"
                >
Manager for all accounts in his area</textarea
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>
<script>
export default {
    name: 'vacancy-overview-card'
}
</script>