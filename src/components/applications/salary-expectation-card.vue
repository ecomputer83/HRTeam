<template>
  <div class="col-md-12 job-card">
    <div class="table-responsive">
      <p>Salary Expectation</p>
      <div class="active d-flex justify-content-between flex-wrap">
        <div class="datatable table mb-0 col-xs-12 col-md-6 p-0 pr-sm-3">
          <table class="w-100">
            <tbody>
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
