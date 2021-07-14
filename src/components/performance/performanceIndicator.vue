<template>
  <div class="performanceindicator">
    <div class="main-wrapper">
      <layout-header></layout-header>
      <layout-sidebar></layout-sidebar>
      <!-- Page Wrapper -->
      <div class="page-wrapper">

        <!-- Page Content -->
        <div class="content container-fluid">

          <!-- Page Header -->
          <div class="page-header">
            <div class="row align-items-center">
              <div class="col">
                <h3 class="page-title">Performance Indicator</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/index">Dashboard</router-link>
                  </li>
                  <li class="breadcrumb-item active">Performance</li>
                </ul>
              </div>
              <div class="col-auto float-right ml-auto">
                <a
                  class="btn add-btn"
                  @click="openDialog"
                ><i class="fa fa-plus"></i> Add New</a>
              </div>
            </div>
          </div>
          <!-- /Page Header -->
          <!----Datatable-->
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <v-data-table
                  :headers="headers"
                  :items="performanceIndicators"
                  sort-by="firstName"
                  class="elevation-1"
                >
                  <template v-slot:[`item.actions`]="{ item }">
            
                    <div class="dropdown dropdown-action">
                      <a
                        href="#"
                        class="action-icon dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                        ><i class="material-icons">more_vert</i></a
                      >
                      <div class="dropdown-menu dropdown-menu-right">
                        <a
                          class="dropdown-item"
                          @click="setEditPerformanceIndicator(item)"
                          ><i class="fa fa-pencil m-r-5"></i> Edit</a
                        >
                        <a
                          class="dropdown-item"
                          @click="setDeletePerformanceIndicator(item)"
                          ><i class="fa fa-trash-o m-r-5"></i> Delete</a
                        >
                      </div>
                    </div>
                  </template>
                  <template v-slot:[`item.profile`]="{ item }">
                    <h2 class="table-avatar blue-link">
                      <router-link to="/profile" class="avatar"
                        ><img alt="" src="~@/assets/profiles/avatar-02.jpg"
                      /></router-link>
                      <router-link to="/profile">{{
                        `${item.employee.firstName} ${item.employee.lastName}`
                      }}</router-link>
                    </h2>
                  </template>
                  <template v-slot:[`item.createdAt`]="{ item }">
                    {{ item.createdAt ? new Date(item.createdAt).toLocaleDateString() : ""}}
                  </template>
                  <template v-slot:[`item.status`]="{ item }">
                    {{item.status == 1 ? 'Active': 'Inactive'}}
                  </template>
                </v-data-table>
              </div>
            </div>
          </div>
          <!---/Datatable-->
        </div>
        <!-- /Page Content -->

        <!-- Add Performance Indicator Modal -->
        <v-dialog v-model="dialog" max-width="725px">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Set New Indicator</h5>
                <button 
                  type="button" 
                  class="close" 
                  @click="close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="row">
                      <div class="col-md-12">
                        <div
                          class="alert alert-danger alert-dismissible fade show"
                          role="alert"
                          v-if="error"
                        >
                          <strong>Error!</strong> {{ error }}
                          <button
                            type="button"
                            class="close"
                            data-dismiss="alert"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div
                          class="alert alert-success alert-dismissible fade show"
                          role="alert"
                          v-if="message"
                        >
                          <strong>Success!</strong> {{ message }}
                          <button
                            type="button"
                            class="close"
                            data-dismiss="alert"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                      </div>
                    </div>
                <form @submit.prevent="onSubmit">
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label>Designation <span class="text-danger">*</span></label>
                        <select 
                          id="designationId" 
                          name="designationId" 
                          class="form-control" 
                          v-model.trim="$v.designationId.$model"
                          :class="{ 'is-invalid': submitted && $v.designationId.$error }"
                        >
                          <option disabled>Select Designation</option>
                          <option 
                            v-for="item in designations" 
                            :key="item.id" 
                            :value="item.id"
                          >
                            {{item.name}}
                          </option>
                        </select>
                        <div
                          v-if="submitted && !$v.designationId.required"
                          class="invalid-feedback"
                        >
                          Designation is required
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label>Added By <span class="text-danger">*</span></label>
                        <select 
                          id="addedBy" 
                          name="addedBy"  
                          class="form-control" 
                          v-model.trim="$v.addedBy.$model"
                          :class="{ 'is-invalid': submitted && $v.addedBy.$error }"
                        >
                          <option disabled>Select Employee</option>
                          <option 
                            v-for="item in employees" 
                            :key="item.id" 
                            :value="item.firstName + ' ' + item.lastName"
                          >
                            {{item.firstName + ' ' + item.lastName}}
                          </option>
                        </select>
                        <div
                          v-if="submitted && !$v.addedBy.required"
                          class="invalid-feedback"
                        >
                          Added By is required
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <h4 class="modal-sub-title">Technical</h4>

                      <div class="form-group">
                        <label class="col-form-label">Customer Experience</label>
                        <select 
                          id="tech_CE"
                          name="tech_CE" 
                          class="select form-control" 
                          v-model.trim="$v.tech_CE.$model"
                          :class="{ 'is-invalid': submitted && $v.tech_CE.$error }"
                        >
                          <option disabled>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                        <div
                          v-if="submitted && !$v.tech_CE.required"
                          class="invalid-feedback"
                        >
                          Customer Experience is required
                        </div>
                      </div>

                      <div class="form-group">
                        <label class="col-form-label">Marketing</label>
                        <select 
                          id="tech_Marketing"
                          name="tech_Marketing" 
                          class="select form-control" 
                          v-model.trim="$v.tech_Marketing.$model"
                          :class="{ 'is-invalid': submitted && $v.tech_Marketing.$error }"
                        >
                          <option disabled>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                        <div
                          v-if="submitted && !$v.tech_Marketing.required"
                          class="invalid-feedback"
                        >
                          Marketing is required
                        </div>
                      </div>

                      <div class="form-group">
                        <label class="col-form-label">Management</label>
                        <select 
                          id="tech_Management"
                          name="tech_Management" 
                          class="select form-control" 
                          v-model.trim="$v.tech_Management.$model"
                          :class="{ 'is-invalid': submitted && $v.tech_Management.$error }"
                        >
                          <option disabled>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                        <div
                          v-if="submitted && !$v.tech_Management.required"
                          class="invalid-feedback"
                        >
                          Management is required
                        </div>
                      </div>

                      <div class="form-group">
                        <label class="col-form-label">Administration</label>
                        <select 
                          id="tech_Administration"
                          name="tech_Administration" 
                          class="select form-control" 
                          v-model.trim="$v.tech_Administration.$model"
                          :class="{ 'is-invalid': submitted && $v.tech_Administration.$error }"
                        >
                          <option disabled>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                        <div
                          v-if="submitted && !$v.tech_Administration.required"
                          class="invalid-feedback"
                        >
                          Administration is required
                        </div>
                      </div>

                      <div class="form-group">
                        <label class="col-form-label">Presentation Skill</label>
                        <select 
                          id="tech_Presentation"
                          name="tech_Presentation" 
                          class="select form-control" 
                          v-model.trim="$v.tech_Presentation.$model"
                          :class="{ 'is-invalid': submitted && $v.tech_Presentation.$error }"
                        >
                          <option disabled>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                        <div
                          v-if="submitted && !$v.tech_Presentation.required"
                          class="invalid-feedback"
                        >
                          Presentation is required
                        </div>
                      </div>

                      <div class="form-group">
                        <label class="col-form-label">Quality Of Work</label>
                        <select 
                          id="tech_QOW"
                          name="tech_QOW" 
                          class="select form-control" 
                          v-model.trim="$v.tech_QOW.$model"
                          :class="{ 'is-invalid': submitted && $v.tech_QOW.$error }"
                        >
                          <option disabled>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                        <div
                          v-if="submitted && !$v.tech_QOW.required"
                          class="invalid-feedback"
                        >
                          Quality of Work is required
                        </div>
                      </div>

                      <div class="form-group">
                        <label class="col-form-label">Efficiency</label>
                        <select 
                          id="tech_Efficiency"
                          name="tech_Efficiency" 
                          class="select form-control" 
                          v-model.trim="$v.tech_Efficiency.$model"
                          :class="{ 'is-invalid': submitted && $v.tech_Efficiency.$error }"
                        >
                          <option disabled>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                        <div
                          v-if="submitted && !$v.tech_Efficiency.required"
                          class="invalid-feedback"
                        >
                          Efficiency is required
                        </div>
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <h4 class="modal-sub-title">Organizational</h4>
                      <div class="form-group">
                        <label class="col-form-label">Integrity</label>
                        <select 
                          id="org_Integrity"
                          name="org_Integrity" 
                          class="select form-control" 
                          v-model.trim="$v.org_Integrity.$model"
                          :class="{ 'is-invalid': submitted && $v.org_Integrity.$error }"
                        >
                          <option disabled>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                        <div
                          v-if="submitted && !$v.org_Integrity.required"
                          class="invalid-feedback"
                        >
                          Integrity is required
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Professionalism</label>
                        <select 
                          id="org_Professionalism"
                          name="org_Professionalism" 
                          class="select form-control" 
                          v-model.trim="$v.org_Professionalism.$model"
                          :class="{ 'is-invalid': submitted && $v.org_Professionalism.$error }"
                        >
                          <option disabled>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                        <div
                          v-if="submitted && !$v.org_Professionalism.required"
                          class="invalid-feedback"
                        >
                          Professionalism is required
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Team Work</label>
                        <select 
                          id="org_Teamwork"
                          name="org_Teamwork" 
                          class="select form-control" 
                          v-model.trim="$v.org_Teamwork.$model"
                          :class="{ 'is-invalid': submitted && $v.org_Teamwork.$error }"
                        >
                          <option disabled>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                        <div
                          v-if="submitted && !$v.org_Teamwork.required"
                          class="invalid-feedback"
                        >
                          Team Work is required
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Critical Thinking</label>
                        <select 
                          id="org_CriticalThinking"
                          name="org_CriticalThinking" 
                          class="select form-control" 
                          v-model.trim="$v.org_CriticalThinking.$model"
                          :class="{ 'is-invalid': submitted && $v.org_CriticalThinking.$error }"
                        >
                          <option disabled>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                        <div
                          v-if="submitted && !$v.org_CriticalThinking.required"
                          class="invalid-feedback"
                        >
                          Critical Thinking is required
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Conflict Management</label>
                        <select 
                          id="org_Conflict"
                          name="org_Conflict" 
                          class="select form-control" 
                          v-model.trim="$v.org_Conflict.$model"
                          :class="{ 'is-invalid': submitted && $v.org_Conflict.$error }"
                        >
                          <option disabled>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                        <div
                          v-if="submitted && !$v.org_Conflict.required"
                          class="invalid-feedback"
                        >
                          Conflict Management is required
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Attendance</label>
                        <select 
                          id="org_Attendance"
                          name="org_Attendance" 
                          class="select form-control" 
                          v-model.trim="$v.org_Attendance.$model"
                          :class="{ 'is-invalid': submitted && $v.org_Attendance.$error }"
                        >
                          <option disabled>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                        <div
                          v-if="submitted && !$v.org_Attendance.required"
                          class="invalid-feedback"
                        >
                          Attendance is required
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Ability To Meet Deadline</label>
                        <select 
                          id="org_ATMD"
                          name="org_ATMD" 
                          class="select form-control" 
                          v-model.trim="$v.org_ATMD.$model"
                          :class="{ 'is-invalid': submitted && $v.org_ATMD.$error }"
                        >
                          <option disabled>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                        <div
                          v-if="submitted && !$v.org_ATMD.required"
                          class="invalid-feedback"
                        >
                          Ability To Meet Deadline is required
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Status</label>
                        <select 
                          id="status"
                          name="status" 
                          class="select form-control" 
                          v-model.trim="$v.status.$model"
                          :class="{ 'is-invalid': submitted && $v.status.$error }"
                        >
                          <option disabled>Select Status</option>
                          <option value="1">Active</option>
                          <option value="0">Inactive</option>
                        </select>
                        <div
                          v-if="submitted && !$v.status.required"
                          class="invalid-feedback"
                        >
                          Status is required
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="submit-section">
                    <button @click.prevent="onSubmit" class="btn btn-primary submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
        </v-dialog>
        <!-- /Add Performance Indicator Modal -->

        <!-- Edit Performance Indicator Modal -->
        <v-dialog v-model="dialogEdit" max-width="725px">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Edit Performance Indicator</h5>
              <button type="button" class="close"  @click="closeEdit">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="UpdateDesignationPerformance">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="form-group">
                      <label class="col-form-label">Designation</label>
                      <select class="select form-control" v-model="performanceIndicator.designationId">
                        <option>Select Designation</option>
                        <option v-for="item in designations" :key="item.id" :value="item.id">{{item.name}}</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-sm-12">
                      <div class="form-group">
                        <label>Added By <span class="text-danger">*</span></label>
                        <select class="form-control" v-model="performanceIndicator.addedBy">
                          <option>Select Employee</option>
                          <option v-for="item in employees" :key="item.id" :value="item.firstName + ' ' + item.lastName">{{item.firstName + ' ' + item.lastName}}</option>
                        </select>
                      </div>
                    </div>
                  <div class="col-sm-6">
                    <h4 class="modal-sub-title">Technical</h4>
                    <div class="form-group">
                      <label class="col-form-label">Customer Experience</label>
                      <select class="select form-control" v-model="performanceIndicator.tech_CE">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert / Leader</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label class="col-form-label">Marketing</label>
                      <select class="select form-control" v-model="performanceIndicator.tech_Marketing">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert / Leader</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label class="col-form-label">Management</label>
                      <select class="select form-control" v-model="performanceIndicator.tech_Management">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert / Leader</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label class="col-form-label">Administration</label>
                      <select class="select form-control" v-model="performanceIndicator.tech_Administration">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option selected>Advanced</option>
                        <option>Expert / Leader</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label class="col-form-label">Presentation Skill</label>
                      <select class="select form-control" v-model="performanceIndicator.tech_Presentation">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert / Leader</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label class="col-form-label">Quality Of Work</label>
                      <select class="select form-control" v-model="performanceIndicator.tech_QOW">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert / Leader</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label class="col-form-label">Efficiency</label>
                      <select class="select form-control" v-model="performanceIndicator.tech_Efficiency">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert / Leader</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <h4 class="modal-sub-title">Organizational</h4>
                    <div class="form-group">
                      <label class="col-form-label">Integrity</label>
                      <select class="select" form-control v-model="performanceIndicator.org_Integrity">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert / Leader</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label class="col-form-label">Professionalism</label>
                      <select class="select form-control" v-model="performanceIndicator.org_Professionalism">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert / Leader</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label class="col-form-label">Team Work</label>
                      <select class="select form-control" v-model="performanceIndicator.org_Teamwork">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert / Leader</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label class="col-form-label">Critical Thinking</label>
                      <select class="select form-control" v-model="performanceIndicator.org_CriticalThinking">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert / Leader</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label class="col-form-label">Conflict Management</label>
                      <select class="select form-control" v-model="performanceIndicator.org_Conflict">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert / Leader</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label class="col-form-label">Attendance</label>
                      <select class="select form-control" v-model="performanceIndicator.org_Attendance">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert / Leader</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label class="col-form-label">Ability To Meet Deadline</label>
                      <select class="select form-control" v-model="performanceIndicator.org_ATMD">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert / Leader</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="form-group">
                      <label class="col-form-label">Status</label>
                      <select class="select form-control" v-model="performanceIndicator.status">
                        <option value="1">Active</option>
                        <option value="0">Inactive</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="submit-section">
                  <button @click.prevent="UpdateDesignationPerformance" class="btn btn-primary submit-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </v-dialog>
        <!-- /Edit Performance Indicator Modal -->

        <!-- Delete Performance Indicator Modal -->
        <v-dialog v-model="dialogDelete" max-width="725px">
          <div class="modal-content">
            <div class="modal-body">
              <div class="form-header">
                <h3>Delete Performance Indicator List</h3>
                <p>Are you sure want to delete?</p>
              </div>
              <div class="modal-btn delete-action">
                <div class="row">
                  <div class="col-6">
                    <a 
                      @click.prevent="deletePerformanceIndicator "
                      class="btn btn-primary continue-btn"
                    >
                      Delete
                    </a>
                  </div>
                  <div class="col-6">
                    <a href="javascript:void(0);" data-dismiss="modal" class="btn btn-primary cancel-btn">Cancel</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-dialog>
        <!-- /Delete Performance Indicator Modal -->

      </div>
      <!-- /Page Wrapper -->
    </div>
  </div>
</template>
<script>
  import LayoutHeader from '@/components/layouts/Header.vue'
  import LayoutSidebar from '@/components/layouts/Sidebar.vue'
  import { organizationService } from '@/services/organizationService'
  import { employeeService } from "@/services/employeeService.js"
  import { performanceService } from "@/services/performanceService.js"
  import { authenticationService } from '@/services/authenticationService'
  import { required } from "vuelidate/lib/validators";
  
  export default {
    components: {
      LayoutHeader,
      LayoutSidebar,
    },
    data () {
        return {
          dialog: false,
          dialogEdit: false,
          dialogDelete: false,
          headers: [
            { text: 'Designation', value: 'designation.name' },
            { text: 'Department', value: 'designation.department.name' },
            { text: 'Added By', value: 'addedBy', sortable: false },
            { text: 'Created At', value: 'createdAt' },
            { text: 'Status', value: 'status', sortable: false },
            { text: 'Actions', value: 'actions', sortable: false },
          ],
          designations: [],
          performanceIndicator: {},
          performanceIndicators: [],
          employeeId: "",
          employees: [],
          designationId: "",
          addedBy: "",
          tech_CE: "",
          tech_Marketing: "",
          tech_Management: "",
          tech_Administration: "",
          tech_Presentation: "",
          tech_QOW: "",
          tech_Efficiency: "",
          org_Integrity: "",
          org_Professionalism: "",
          org_CriticalThinking: "",
          org_Teamwork: "",
          org_Conflict: "",
          org_Attendance: "",
          org_ATMD: "",
          status: "",
          submitted: false,
          loading: false,
          error: "",
          message: "",
          company: authenticationService.currentOfficeValue,
        }
    },
    methods: {
      openDialog(){
        this.dialog = true
      },
      close() {
        this.dialog = false;
        this.clearModel();
      },
      closeEdit() {
        this.dialogEdit = false
      },
      closeDelete() {
        this.dialogDelete = false
      },
      setEditPerformanceIndicator(model) {
        this.performanceIndicator = model;
        console.log(`model edit`, model)
        this.dialogEdit = true
      },
      setDeletePerformanceIndicator(model) {
        this.performanceIndicator = model;
        console.log(`model delete`, model)
        this.dialogDelete = true;
      },
      clearModel() {
        this.tech_CE = "", 
        this.tech_Marketing = "", 
        this.tech_Management = "", 
        this.tech_Administration = "", 
        this.tech_Presentation = "", 
        this.tech_QOW = "", 
        this.tech_Efficiency = "",
        this.org_Integrity = "",
        this.org_Professionalism = "",
        this.org_Teamwork = "",
        this.org_CriticalThinking = "",
        this.org_Conflict = "",
        this.org_Attendance = "",
        this.org_ATMD = "",
        this.designationId = "",
        this.addedBy = ""
      },
      GetDesignations(){
          organizationService.getDesignations()
          .then(
              model => { 
                  this.designations = model},
              error => { this.error = error }
          )
      },
      getEmployees () {
        const companyId = this.company.id;
        console.log('this.company.id', this.company.id)
        employeeService.getEmployees(companyId)
          .then(
            model => { this.employees = model
            console.log(model) 
            },
            error => { error = error }
          )
     },
     getDesignationPerformances () {
         const companyId = this.company.id;
         performanceService.getDesignationPerformances(companyId)
          .then(
            (model) => {
              this.performanceIndicators = model;
              console.log(`model`, model)
            },
            error => { error = error }
          )
     },
     onSubmit() {
       this.submitted = true;
       this.loading = true;

       this.$v.$touch();
       if (this.$v.$invalid) {
        return;
      }

       performanceService
        .addDesignationPerformance(
          this.tech_CE, 
          this.tech_Marketing, 
          this.tech_Management, 
          this.tech_Administration, 
          this.tech_Presentation, 
          this.tech_QOW, 
          this.tech_Efficiency,
          this.org_Integrity,
          this.org_Professionalism,
          this.org_Teamwork,
          this.org_CriticalThinking,
          this.org_Conflict,
          this.org_Attendance,
          this.org_ATMD,
          this.designationId,
          this.addedBy,
          parseInt(this.status)
        )
        .then(
          (id) => {
            performanceService.getDesignationPerformances(this.company.id).then((u) => {
              this.performanceIndicators = u;
              console.log(`u`, u)
              this.close();
            });
          },
          (error) => {
            this.error = error;
            this.loading = false;
          }
        );
     },
     UpdateDesignationPerformance () {
        this.submitted = true;
        this.loading = true;

        // this.$v.$touch();
        // if (this.$v.$invalid) {
        //   return;
        // }

       performanceService
        .updateDesignationPerformance(
          this.performanceIndicator.id,
          this.performanceIndicator.tech_CE, 
          this.performanceIndicator.tech_Marketing, 
          this.performanceIndicator.tech_Management, 
          this.performanceIndicator.tech_Administration, 
          this.performanceIndicator.tech_Presentation, 
          this.performanceIndicator.tech_QOW, 
          this.performanceIndicator.tech_Efficiency,
          this.performanceIndicator.org_Integrity,
          this.performanceIndicator.org_Professionalism,
          this.performanceIndicator.org_Teamwork,
          this.performanceIndicator.org_CriticalThinking,
          this.performanceIndicator.org_Conflict,
          this.performanceIndicator.org_Attendance,
          this.performanceIndicator.org_ATMD,
          this.performanceIndicator.designationId,
          this.performanceIndicator.addedBy,
          this.performanceIndicator.status
        )
        .then(
          (id) => {
            performanceService.getDesignationPerformances(this.company.id).then((u) => {
              this.performanceIndicators = u;
              console.log(`u`, u)
              this.closeEdit();
            });
          },
          (error) => {
            this.error = error;
            this.loading = false;
          }
        );

     },
     deletePerformanceIndicator () {
      const id = this.performanceIndicator.id;
      // console.log(this.performanceIndicator);
        performanceService.removeDesignationPerformance(id)
          .then(id => {
            performanceService.getDesignationPerformances(this.company.id)
              .then(
                model => { this.performanceIndicators = model
                console.log(model)
                this.closeDelete() },
                error => { error = error }
              )
          })
      },
    },
    validations: {
      designationId: { required },
      addedBy: { required },
      tech_CE: { required },
      tech_Marketing: { required },
      tech_Management: { required },
      tech_Administration: { required },
      tech_Presentation: { required },
      tech_QOW: { required },
      tech_Efficiency: { required },
      org_Integrity: { required },
      org_Professionalism: { required },
      org_CriticalThinking: { required },
      org_Teamwork: { required },
      org_Conflict: { required },
      org_Attendance: { required },
      org_ATMD: { required },
      status: { required },
    },
    mounted() {
      this.GetDesignations()
      this.getEmployees()
      this.getDesignationPerformances()
      // Date Time Picker

      if ($('.datetimepicker').length > 0) {
        $('.datetimepicker').datetimepicker({
          format: 'DD/MM/YYYY',
          icons: {
            up: "fa fa-angle-up",
            down: "fa fa-angle-down",
            next: 'fa fa-angle-right',
            previous: 'fa fa-angle-left'
          }
        });
      }

      // Select 2
      if ($('.select').length > 0) {
        $('.select').select2({
          minimumResultsForSearch: -1,
          width: '100%'
        });
      }
      // Multiselect
      if ($('#customleave_select').length > 0) {
        $('#customleave_select').multiselect();
      }
      if ($('#edit_customleave_select').length > 0) {
        $('#edit_customleave_select').multiselect();
      }
      // Datatable

      if ($('.datatable').length > 0) {
        $('.datatable').DataTable({
          "bFilter": false,
        });
      }
      if ($('.floating').length > 0) {
        $('.floating').on('focus blur', function (e) {
          $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
        }).trigger('blur');
      }
    },
    name: 'performanceindicator'
  }
</script>