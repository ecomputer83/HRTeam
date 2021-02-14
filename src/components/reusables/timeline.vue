<template>
  <ul class="timeline">
    <li :class="{'passed-tl': tl.status == 'passed','active-tl': tl.status == 'active'}" v-for="(tl, i) in timeline_data">{{i+1}}:{{tl.name}}</li>
  </ul>
</template>
<script>
export default {
  props: ['timeline_data'],
  components: {},
  created() {},
  mounted() {}
};
</script>
<style scoped>
.timeline {
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 0;
  overflow: auto;
  margin-bottom: 50px;
}

.timeline li {
  list-style: none;
  position: relative;
  text-align: center;
  flex-grow: 1;
  flex-basis: 0;
  font-size: 14px;
  padding: 0 5px;
  white-space: nowrap;
}

.timeline li:before {
  content: "";
  width: 30px;
  height: 30px;
  border: 3px solid #f1f1f1;
  border-radius: 50%;
  display: block;
  text-align: center;
  line-height: 50px;
  margin: 0 auto 10px auto;
  background: #fff;
  transition: all ease-in-out 0.3s;
  cursor: pointer;
}

.timeline li:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: #f1f1f1;
  top: 15px;
  left: -50%;
  z-index: -1;
  transition: all ease-in-out 0.3s;
}

.timeline li:first-child:after {
  content: none;
}
.timeline li.active-tl {
  font-weight: 600;
}
.timeline li.active-tl:before {
  content: "\25CF";
  color: #fc6075;
  border: 3px solid #fc6075;
  align-items: center;
  display: flex;
  font-size: 23px;
  justify-content: center;
  line-height: 1;
}

.timeline li.passed-tl:before {
  content: "\2713";
  background: #fc6075;
  color: #fff;
  border: 3px solid #fc6075;
  align-items: center;
  display: flex;
  font-size: 18px;
  justify-content: center;
  line-height: 1;
}

.timeline li.passed-tl + li:after {
  background: #fc6075;
}
</style>
