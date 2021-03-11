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
              <td>Job Profile</td>
              <td>
                <select
                  name="job profile"
                  id="job_profile"
                  class="form-controlz" v-model="vacancy.jobProfileId"
                >
                   <option
                        v-for="(item, index) in profiles"
                        :key="index"
                        :value="item.id"
                      >
                        {{ item.title }}
                      </option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Quantity of Position</td>
              <td>
                <input class="form-controlz" type="number" v-model="vacancy.quantity" />
              </td>
            </tr>
            <tr>
              <td>Designation</td>
              <td>
                <select name="designation" id="designation" class="form-controlz" v-model="vacancy.designationId">
                   <option
                        v-for="(item, index) in designations"
                        :key="index"
                        :value="item.id"
                      >
                        {{ item.name }}
                      </option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Designation</td>
              <td>
                <select name="designation" id="designation" class="form-controlz" v-model="vacancy.designationId">
                   <select
                      v-model="vacancy.type"
                      class="select form-controlz"
                    >
                      <option>-- Select --</option>
                      <option value="Full Time">Full Time</option>
                      <option value="Part Time">Part Time</option>
                      <option value="Intern">Intern</option>
                    </select>
                </select>
              </td>
            </tr>
            <tr>
              <td>Description</td>
              <td>
                <textarea
                  style="height: auto !important"
                  class="form-controlz"
                  type="text" v-model="vacancy.description"
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
  import { jobService } from '@/services/jobService';
  import { organizationService } from '@/services/organizationService';
  import { authenticationService } from '@/services/authenticationService';
export default {
  props: {
         vacancy: {},
         currentOffice: {}
      },

    data() {
      return {
        //vacancy: this.vacancy,

        designations: [],
        profiles:[],
        //currentOffice: this.currentOffice
      }

    },
  mounted() {
    this.getDesignations(),
    this.getProfiles()
    this.$emit('update:vacancy', this.vacancy);
  },
  methods: {
    getDesignations () {
        organizationService.getDesignations()
          .then(
            model => { this.designations = model},
            error => { error = error }
          )
      },
    getProfiles() {
        jobService.getJobProfiles(this.currentOffice.id)
        .then(
          p => {
            this.profiles = p.filter(c=>c.status == 1)
          }
        )
      },
    
  },
    name: 'vacancy-overview-card'
}
</script>