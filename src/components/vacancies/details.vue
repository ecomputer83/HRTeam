<template>
  <div class="vacancies">
    <div class="main-wrapper">
      <layout-header></layout-header>
      <layout-sidebar></layout-sidebar>
      <!-- Page Wrapper -->
      <div class="page-wrapper">
        <!-- Page Content -->
        <div class="content container-fluid">
          <!-- Page Header -->
          <div class="page-header">
            <div class="row">
              <div class="col-sm-12">
                <h3>Account Manager - Job Title</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item active">Vacancy</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- /Page Header -->

          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-body">
                  <ul class="timeline">
                    <li class="passed-tl">1: Requested</li>
                    <li class="passed-tl">2: Enrichment</li>
                    <li class="passed-tl">3: Approval</li>
                    <li class="passed-tl">4: Publishing</li>
                    <li class="active-tl">5: Receiving Applications(11 Mo)</li>
                    <li>6: Selecting Candidates</li>
                    <li>7: Post-Processing</li>
                  </ul>
                  <ul class="tabs">
                    <li
                      data-tab-target="#details"
                      id="details_tab"
                      v-on:click="setTab('details')"
                      class="active tab"
                    >
                      Details
                    </li>
                    <li
                      data-tab-target="#job_requisition"
                      id="job_requisition_tab"
                      v-on:click="setTab('job_requisition')"
                      class="tab"
                    >
                      Job Requisition
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div id="details_content" data-tab-content class="active">
                      <div class="d-flex justify-content-between flex-wrap">
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
                                    <input
                                      class="form-control"
                                      type="text"
                                      value="2"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>Department</td>
                                  <td>
                                    <select
                                      name="department"
                                      id="department"
                                      class="form-control"
                                    >
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
                        <div class="col-xs-12 col-md-8 p-0 pl-sm-3">
                          <div class="col-md-12 job-card">
                            <div class="table-responsive">
                              <p>Vacancy Details</p>
                              <div
                                class="active d-flex justify-content-between flex-wrap"
                              >
                                <div
                                  class="datatable table mb-0 col-xs-12 col-md-6 p-0 pr-sm-3"
                                >
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
                                          <input
                                            class="form-control"
                                            type="text"
                                            value="---"
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Company Logo URL</td>
                                        <td>
                                          <input
                                            class="form-control"
                                            type="text"
                                            value="---"
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Budget</td>
                                        <td>
                                          <input
                                            class="form-control"
                                            type="text"
                                            value="---"
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Expected Costs</td>
                                        <td>
                                          <input
                                            class="form-control"
                                            type="text"
                                            value="---"
                                          />
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
                                <div
                                  class="datatable table mb-0 col-xs-12 col-md-6 p-0 pl-sm-3"
                                >
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
                                          <input
                                            type="date"
                                            class="form-control"
                                            name=""
                                            id=""
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Application Period From</td>
                                        <td>
                                          <input
                                            type="date"
                                            class="form-control"
                                            name=""
                                            id=""
                                          />
                                          <input
                                            type="time"
                                            class="form-control"
                                            name=""
                                            id=""
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Application Period Until</td>
                                        <td>
                                          <input
                                            type="date"
                                            class="form-control"
                                            name=""
                                            id=""
                                          />
                                          <input
                                            type="time"
                                            class="form-control"
                                            name=""
                                            id=""
                                          />
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
                          <div class="col-md-12 job-card">
                            <div class="table-responsive">
                              <p>Job Details</p>
                              <div
                                class="active d-flex justify-content-between flex-wrap"
                              >
                                <div
                                  class="datatable table mb-0 col-xs-12 col-md-6 p-0 pr-sm-3"
                                >
                                  <table class="w-100">
                                    <tbody>
                                      <tr>
                                        <td>Start Date</td>
                                        <td>
                                          <input
                                            type="date"
                                            class="form-control"
                                            name=""
                                            id=""
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Professional Experience</td>
                                        <td>
                                          <select
                                            name="experience"
                                            id="experience"
                                            class="form-control"
                                          >
                                            <option value="experience 1">
                                              experience 1
                                            </option>
                                            <option value="experience 2">
                                              experience 2
                                            </option>
                                            <option value="experience 3">
                                              experience 3
                                            </option>
                                            <option value="experience 4">
                                              experience 4
                                            </option>
                                          </select>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Job Location</td>
                                        <td>
                                          <select
                                            name="Job Location"
                                            id="Job_Location"
                                            class="form-control"
                                          >
                                            <option value="Job Location 1">
                                              Job Location 1
                                            </option>
                                            <option value="Job Location 2">
                                              Job Location 2
                                            </option>
                                            <option value="Job Location 3">
                                              Job Location 3
                                            </option>
                                            <option value="Job Location 4">
                                              Job Location 4
                                            </option>
                                          </select>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <div
                                  class="datatable table mb-0 col-xs-12 col-md-6 p-0 pl-sm-3"
                                >
                                  <table class="w-100">
                                    <tbody>
                                      <tr>
                                        <td>Enable Self Rating</td>
                                        <td>
                                          <div
                                            class="custom-control custom-switch"
                                          >
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
                                        <td>Accommodation Provided</td>
                                        <td>
                                          <div
                                            class="custom-control custom-switch"
                                          >
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
                                        <td>Traveling Required</td>
                                        <td>
                                          <select
                                            name="traveling"
                                            id="traveling"
                                            class="form-control"
                                          >
                                            <option value="">----</option>
                                            <option value="Not Required">
                                              Not Required
                                            </option>
                                            <option value="Occasionally">
                                              Occasionally
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
                        </div>
                      </div>
                    </div>
                    <div id="job_requisition_content" data-tab-content>
                      <div class="d-flex flex-wrap">
                        <div class="col-xs-12 col-md-12 job-card">
                          <div class="d-flex align-items-center">
                            <label for="requisition_title" class="mr-5 mb-0"
                              >Title </label
                            ><input
                              value="title"
                              type="text"
                              class="form-control"
                              name="requisition_title"
                              id="requisition_title"
                            />
                          </div>
                          <hr />
                        </div>
                        <div class="col-xs-12 col-md-6 p-0 pr-sm-2">
                          <div class="job-card">
                            <p>Header</p>
                            <quill-editor
                              v-model="content"
                              ref="myQuillEditor"
                              :options="editorOption"
                              @blur="onEditorBlur($event)"
                              @focus="onEditorFocus($event)"
                              @ready="onEditorReady($event)"
                            >
                            </quill-editor>
                          </div>
                        </div>
                        <div class="col-xs-12 col-md-6 p-0 pl-sm-2">
                          <div class="job-card">
                            <p>Job Definition</p>
                            <quill-editor
                              v-model="content"
                              ref="myQuillEditor"
                              :options="editorOption"
                              @blur="onEditorBlur($event)"
                              @focus="onEditorFocus($event)"
                              @ready="onEditorReady($event)"
                            >
                            </quill-editor>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /Page Content -->
        </div>
      </div>
      <!-- /Page Wrapper -->
    </div>
  </div>
</template>
<script>
import LayoutHeader from "@/components/layouts/Header.vue";
import LayoutSidebar from "@/components/layouts/Sidebar.vue";
import Vue from "vue";
export default {
  components: {
    LayoutHeader,
    LayoutSidebar
  },
  created() {},
  mounted() {
    console.log("this is current quill instance object", this.editor);
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  },
  data() {
    return {
      content: "<h2>I am Example</h2>",
      editorOption: {}
    };
  },
  methods: {
    setTab: function(tabid) {
      const tabContents = document.querySelectorAll("[data-tab-content]");
      const tabs = document.querySelectorAll("[data-tab-target]");
      const tab = document.getElementById(`${tabid}_tab`);
      const target = document.getElementById(`${tabid}_content`);
      tabContents.forEach(tabContent => {
        tabContent.classList.remove("active");
      });
      tabs.forEach(t => {
        t.classList.remove("active");
      });
      tab.classList.add("active");
      target.classList.add("active");
    },
    onEditorBlur(quill) {
      console.log("editor blur!", quill);
    },
    onEditorFocus(quill) {
      console.log("editor focus!", quill);
    },
    onEditorReady(quill) {
      console.log("editor ready!", quill);
    },
    onEditorChange({ quill, html, text }) {
      console.log("editor change!", quill, html, text);
      this.content = html;
    }
  },
  name: "vacancies-detail"
};
</script>

<style scoped>
.card {
  z-index: 1;
}
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
[data-tab-content] {
  display: none;
}

.active[data-tab-content] {
  display: block;
}
.tabs {
  display: flex;
  justify-content: flex-start;
  list-style-type: none;
  margin: 0;
  border-bottom: 1px solid #f1f1f1;
}

.tab {
  cursor: pointer;
  padding: 10px;
  padding: 10px 20px;
}

.tab.active {
  background-color: #fc6075;
  color: #fff;
  border-radius: 15px 15px 0 0;
}

.tab:hover {
  background-color: #ffebda;
  color: #000;
  border-radius: 15px 15px 0 0;
}

.tab-content {
  margin-left: 20px;
  margin-right: 20px;
}
.job-card {
  border: 1px solid #d4cbcb;
  margin: 15px 0;
  padding: 15px;
  height: fit-content;
}
.table td {
  border-top: none !important;
  border-bottom: 1px solid #d4cbcb !important;
}
textarea {
  height: auto !important;
}
.form-control {
  border: none !important;
  height: 35px !important;
}
.form-control:hover,
.form-control:focus {
  border: 1px solid #d4cbcb !important;
}
.custom-switch {
  padding-left: 50px;
}
</style>
