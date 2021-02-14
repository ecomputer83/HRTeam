<template>
  <div class="col-md-12 job-card">
    <div class="table-responsive">
      <p>Salary Expectation</p>
      <div class="active d-flex justify-content-between flex-wrap">
        <div class="datatable table mb-0 col-xs-12 col-md-6 p-0 pr-sm-3">
          <table class="w-100">
            <tbody>
              <tr>
                <td>Currency</td>
                <td>
                  <select name="currency" id="currency" class="form-control">
                    <option value="currency 1">
                      currency 1
                    </option>
                    <option value="currency 2">
                      currency 2
                    </option>
                    <option value="currency 3">
                      currency 3
                    </option>
                    <option value="currency 4">
                      currency 4
                    </option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Expected Salary Min.</td>
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
        <div class="datatable table mb-0 col-xs-12 col-md-6 p-0 pl-sm-3">
          <table class="w-100">
            <tbody>
              <tr>
                <td style="border:none !important;">
                  <select
                    style="visibility: hidden;"
                    name=""
                    id=""
                    class="form-control"
                  >
                  </select>
                </td>
              </tr>
              <tr>
                <td>Expected Salary Max.</td>
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
  name: "salary-expectation-card"
};
</script>
