<template>
  <div class="d-flex justify-content-between flex-wrap">
    <div class="col-xs-12 col-md-8 pr-sm-3">
      <div class="col-md-12 job-card">
        <div class="table-responsive">
          <!-- <datatable :columns="columns" :data="rows"></datatable> -->
          <table
            id="evaluation-tablse"
            class="datatable2 table table-stripped mb-0"
          >
            <thead>
              <tr>
                <th>Skill</th>
                <th>Required Grade</th>
                <th>Actual Grade</th>
                <th>Self Grading</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in 2">
                <td>Business English</td>
                <td>C1 - Advanced</td>
                <td>C2 - Proficiency</td>
                <td>C1 - Advanced</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-md-12 job-card d-flex flex-wrap">
        <div class="col-md-6">
          <div class="datatable table mb-0 p-0 pr-sm-3">
            <table class="w-100">
              <tbody>
                <tr>
                  <td>
                    <p>Maximun Score</p>
                    <p>Last updated:</p>
                  </td>
                  <td>
                    <p>13</p>
                    <p>2/14/2021 5:03 AM</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-md-6">
          <div class="datatable table mb-0 p-0 ">
            <table class="w-100">
              <tbody>
                <tr>
                  <td>
                    <p>Applicant Score</p>
                    <p>Last updated:</p>
                  </td>
                  <td>
                    <p>13</p>
                    <p>2/14/2021 5:03 AM</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-md-6">
          <div class="datatable table mb-0 p-0 ">
            <table class="w-100">
              <tbody>
                <tr>
                  <td>Applicant Score (%)</td>
                  <td>
                    <p>93</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-md-4 pl-sm-3">
      <div class="job-card">
        <div id="chart">
          <apexchart
            type="bar"
            height="430"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { VuejsDatatableFactory } from 'vuejs-datatable';
export default {
  name: "application-evaluation",
  data() {
    return {
      series: [
        {
          data: [44, 55, 41]
        },
        {
          data: [40, 15, 49]
        },
        {
          data: [53, 32, 33]
        }
      ],
      chartOptions: {
        chart: {
          type: "bar",
          height: 430
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: "top"
            }
          }
        },
        dataLabels: {
          enabled: true,
          offsetX: -6,
          style: {
            fontSize: "12px",
            colors: ["#fff"]
          }
        },
        stroke: {
          show: true,
          width: 1,
          colors: ["#fff"]
        },
        xaxis: {
          categories: [2001, 2002, 2003]
        }
      }
      // columns: [
      //       {label: 'id', field: 'id'},
      //       {label: 'Username', field: 'user.username', headerClass: 'class-in-header second-class'},
      //       {label: 'First Name', field: 'user.firstName'},
      //       {label: 'Last Name', field: 'user.lastName'},
      //       {label: 'Email', field: 'user.email'},
      //       {label: 'Address', representedAs: ({address, city, state}) => `${address}<br />${city}, ${state}`, interpolate: true}
      //   ],
      //   rows: [
      //       {
      //           id: 1,
      //           user: {
      //               username: "dprice0",
      //               firstName: "Daniel",
      //               lastName: "Price",
      //               email: "dprice0@blogs.com"
      //           },
      //           address: "3 Toban Park",
      //           city: "Pocatello",
      //           state: "Idaho"
      //       }
      //   ]
    };
  },
  mounted() {
    if ($(".datatable2").length > 0) {
      $(".datatable2").DataTable({
        bFilter: false
      });
    }
  }
};
</script>
