<template>
    <div class="col-md-12 job-card">
        <div class="table-responsive">
          <p>Vacancy Details</p>
          <div class="active d-flex justify-content-between flex-wrap">
            <div class="datatable table mb-0 col-xs-12 col-md-6 p-0 pr-sm-3">
              <table class="w-100">
                <tbody>
                  <tr>
                    <td>Position</td>
                    <td>
                      <select
                        name="job profile"
                        id="job_profile"
                        class="form-control"
                      >
                        <option value="">----</option>
                        <option value="Position 1">
                          Position 1
                        </option>
                        <option value="Position 2">
                          Position 2
                        </option>
                        <option value="Position 3">
                          Position 3
                        </option>
                        <option value="Position 4">
                          Position 4
                        </option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Company Website URL</td>
                    <td>
                      <input class="form-control" type="text" value="---" />
                    </td>
                  </tr>
                  <tr>
                    <td>Company Logo URL</td>
                    <td>
                      <input class="form-control" type="text" value="---" />
                    </td>
                  </tr>
                  <tr>
                    <td>Budget</td>
                    <td>
                      <input class="form-control" type="text" value="---" />
                    </td>
                  </tr>
                  <tr>
                    <td>Expected Costs</td>
                    <td>
                      <input class="form-control" type="text" value="---" />
                    </td>
                  </tr>
                  <tr>
                    <td>Currency</td>
                    <td>
                      <select
                        name="department"
                        id="department"
                        class="form-control"
                      >
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
                </tbody>
              </table>
            </div>
            <div class="datatable table mb-0 col-xs-12 col-md-6 p-0 pl-sm-3">
              <table class="w-100">
                <tbody>
                  <tr>
                    <td>Requested By</td>
                    <td>
                      <select
                        name="requestor"
                        id="requestor"
                        class="form-control"
                      >
                        <option value="requestor 1">
                          requestor 1
                        </option>
                        <option value="requestor 2">
                          requestor 2
                        </option>
                        <option value="requestor 3">
                          requestor 3
                        </option>
                        <option value="requestor 4">
                          requestor 4
                        </option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Requested On</td>
                    <td>
                      <input type="date" class="form-control" name="" id="" />
                    </td>
                  </tr>
                  <tr>
                    <td>Application Period From</td>
                    <td>
                      <input type="date" class="form-control" name="" id="" />
                      <input type="time" class="form-control" name="" id="" />
                    </td>
                  </tr>
                  <tr>
                    <td>Application Period Until</td>
                    <td>
                      <input type="date" class="form-control" name="" id="" />
                      <input type="time" class="form-control" name="" id="" />
                    </td>
                  </tr>
                  <tr>
                    <td>Interview Location</td>
                    <td>
                      <select
                        name="location"
                        id="location"
                        class="form-control"
                      >
                        <option value="location 1">
                          location 1
                        </option>
                        <option value="location 2">
                          location 2
                        </option>
                        <option value="location 3">
                          location 3
                        </option>
                        <option value="location 4">
                          location 4
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
    name: 'vancancy-details-card'
}
</script>