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
                    <li>1: New</li>
                    <li class="active-tl">2: Initial Validation (9 Mon)</li>
                    <li>3: Line Manager Feedback</li>
                    <li>4: Phone Interview</li>
                    <li>5: Face-To-Face Interview</li>
                    <li>6: Contract Negotiation</li>
                  </ul>
                  <ul class="tabs">
                    <li
                      data-tab-target="#general"
                      id="general_tab"
                      v-on:click="setTab('general')"
                      class="active tab"
                    >
                      General
                    </li>
                    <li
                      data-tab-target="#evaluation"
                      id="evaluation_tab"
                      v-on:click="setTab('evaluation')"
                      class="tab"
                    >
                      Evaluation
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div id="general_content" data-tab-content class="active">
                      <div class="d-flex justify-content-between flex-wrap">
                        <div class="col-xs-12 col-md-6 pr-sm-3">
                          <div class="col-md-12 job-card">
                            <div class="table-responsive">
                              <div
                                class="active d-flex justify-content-between flex-wrap"
                              >
                                <div
                                  class="datatable table mb-0 col-xs-12 col-md-6 p-0 pr-sm-3"
                                >
                                  <table class="w-100">
                                    <tbody>
                                      <tr>
                                        <td>Applicant</td>
                                        <td>
                                          <select
                                            name="applicant"
                                            id="applicant"
                                            class="form-control"
                                          >
                                            <option value="applicant 1">
                                              applicant 1
                                            </option>
                                            <option value="applicant 2">
                                              applicant 2
                                            </option>
                                            <option value="applicant 3">
                                              applicant 3
                                            </option>
                                            <option value="applicant 4">
                                              applicant 4
                                            </option>
                                          </select>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Vacancy</td>
                                        <td>
                                          <select
                                            name="vacancy"
                                            id="vacancy"
                                            class="form-control"
                                          >
                                            <option value="vacancy 1">
                                              vacancy 1
                                            </option>
                                            <option value="vacancy 2">
                                              vacancy 2
                                            </option>
                                            <option value="vacancy 3">
                                              vacancy 3
                                            </option>
                                            <option value="vacancy 4">
                                              vacancy 4
                                            </option>
                                          </select>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Initiative Application</td>
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
                                    </tbody>
                                  </table>
                                </div>
                                <div
                                  class="datatable table mb-0 col-xs-12 col-md-6 p-0 pl-sm-3"
                                >
                                  <table class="w-100">
                                    <tbody>
                                      <tr>
                                        <td>Manager</td>
                                        <td>
                                          <select
                                            name="manager"
                                            id="manager"
                                            class="form-control"
                                          >
                                            <option value="manager 1">
                                              manager 1
                                            </option>
                                            <option value="manager 2">
                                              manager 2
                                            </option>
                                            <option value="manager 3">
                                              manager 3
                                            </option>
                                            <option value="manager 4">
                                              manager 4
                                            </option>
                                          </select>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Earliest Start Date</td>
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
                                        <td>Notice Period</td>
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
                          <div class="col-md-12 job-card">
                            <div class="table-responsive">
                              <p>Salary Expectation</p>
                              <div
                                class="active d-flex justify-content-between flex-wrap"
                              >
                                <div
                                  class="datatable table mb-0 col-xs-12 col-md-6 p-0 pr-sm-3"
                                >
                                  <table class="w-100">
                                    <tbody>
                                      <tr>
                                        <td>Currency</td>
                                        <td>
                                          <select
                                            name="currency"
                                            id="currency"
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
                                <div
                                  class="datatable table mb-0 col-xs-12 col-md-6 p-0 pl-sm-3"
                                >
                                  <table class="w-100">
                                    <tbody>
                                      <tr>
                                        <td style="border:none !important;"><select style="visibility: hidden;"
                                            name=""
                                            id=""
                                            class="form-control"
                                          >
                                          </select></td>
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
                          <div class="col-md-12 job-card">
                            <div class="table-responsive">
                              <p>Feedback</p>
                              <div
                                class="active d-flex justify-content-between flex-wrap"
                              >
                                <div
                                  class="datatable table mb-0 col-xs-12 col-md-12 p-0 pr-sm-3"
                                >
                                  <table class="w-100">
                                    <tbody>
                                      <tr>
                                        <td>Applicant</td>
                                        <td>
                                          <textarea
                                            style="height: auto !important"
                                            class="form-control"
                                            type="text"
                                          >
---</textarea
                                          >
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Vacancy</td>
                                        <td>
                                          <textarea
                                            style="height: auto !important"
                                            class="form-control"
                                            type="text"
                                          >
---</textarea
                                          >
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Initiative Application</td>
                                        <td>
                                          <textarea
                                            style="height: auto !important"
                                            class="form-control"
                                            type="text"
                                          >
---</textarea
                                          >
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xs-12 col-md-6 p-0 pl-sm-3">
                          <div class="col-md-12 job-card">
                            <p>Documents</p>
                          </div>
                       
                        </div>
                      </div>
                    </div>
                    <div id="evaluation_content" data-tab-content>
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
