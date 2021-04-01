<template>
    <div class="col-md-12 job-card">
        <div class="table-responsive">
          <p>Vacancy Details</p>
          <div class="active d-flex justify-content-between flex-wrap">
            <div class="datatable table mb-0 col-xs-12 col-md-6 p-0 pr-sm-3">
              <table class="w-100">
                <tbody>
                  
                  <tr>
                    <td>Requested By</td>
                    <td>
                      <select
                        name="requestor"
                        id="requestor"
                        class="form-control" v-model="vacancy.requestedBy"
                      >
                        <option
                        v-for="(item, index) in staffs"
                        :key="index"
                        :value="item.id"
                      >
                        {{ item.lastName + ' ' + item.firstName }}
                      </option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Requested On</td>
                    <td>
                      <input type="date" class="form-control" name="" id="" v-model="vacancy.requestedOn" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="datatable table mb-0 col-xs-12 col-md-6 p-0 pl-sm-3">
              <table class="w-100">
                <tbody>
                  
                  <tr>
                    <td>Application Period From</td>
                    <td>
                      <input type="date" class="form-control" name="" id="" v-model="vacancy.periodFrom" />
                      <input type="time" class="form-controlz" name="" id="" v-model="vacancy.periodFromTime" />
                    </td>
                  </tr>
                  <tr>
                    <td>Application Period Until</td>
                    <td>
                      <input type="date" class="form-control" name="" id="" v-model="vacancy.periodTo" />
                      <input type="time" class="form-controlz" name="" id="" v-model="vacancy.periodToTime" />
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
  import { employeeService } from '@/services/employeeService';
  import { authenticationService } from '@/services/authenticationService';
export default {
  props: {
         vacancy: {},
         currentOffice: {}
      },

    data() {
      return {
        //vacancy: this.vacancy,
        staffs: [],
        //currentOffice: this.currentOffice
      }

    },
    methods: {
      getEmployees () {
          employeeService.getEmployees(this.currentOffice.id)
            .then(
                model => { this.staffs = model},
                error => { this.error = error }
            )
      },
    },
    mounted() {
      this.getEmployees()
      this.$emit('update:vacancy', this.vacancy);
    },
    name: 'vancancy-details-card'
}
</script>