<template>
  <div class="d-flex justify-content-between flex-wrap">
    <div class="col-xs-12 col-md-8 pr-sm-3">
      <div class="col-md-12 job-card">not done</div>
      <div class="col-md-12 job-card">not done</div>
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
export default {
  name: "application-overview",
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
    };
  }
};
</script>
