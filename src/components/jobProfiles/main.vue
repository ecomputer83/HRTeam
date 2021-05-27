<template>
  <div class="jobprofile">
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
                <ul class="breadcrumb">
                  <li class="breadcrumb-item active">Job Profile</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- /Page Header -->

          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header">
                  <div class="d-flex justify-content-between">
                    <h4 class="card-title mb-0">Job Profile Information</h4>
                    <div class="col-auto float-right ml-auto">
                      <router-link to="/job-profile-info" class="btn add-btn"
                        ><i class="fa fa-plus"></i>Add Profile</router-link
                      >
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <ul
                    class="nav nav-tabs nav-tabs-solid nav-tabs-rounded nav-justified"
                  >
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        href="#solid-rounded-justified-tab1"
                        data-toggle="tab"
                        >Active Profile</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="#solid-rounded-justified-tab2"
                        data-toggle="tab"
                        >Inactive Profile</a
                      >
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div
                      class="tab-pane show active"
                      id="solid-rounded-justified-tab1"
                    >
                      <div class="table-responsive">

                  <v-data-table
                    :headers="headers"
                    :items="activeprofiles"
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
                        >
                          <i class="material-icons"
                          >more_vert</i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                          <router-link
                            :to="{
                              name: 'jobprofileinfo',
                              params: { id: item.id },
                            }"
                            class="dropdown-item"
                            ><i class="fa fa-pencil m-r-5"></i> Edit</router-link
                          >
                          <a
                            class="dropdown-item"
                            @click="setDeleteProfile(item)"
                            ><i class="fa fa-trash-o m-r-5"></i> Delete</a
                          >
                        </div>
                        </div>
                    </template>
                    
                  </v-data-table>

                        <!-- <table class="datatable table table-stripped mb-0">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Job Level</th>
                              <th>Department</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              v-for="model in activeprofiles"
                              v-bind:key="model.id"
                            >
                              <td>
                                <router-link
                                  :to="{
                                    name: 'jobprofileinfo',
                                    params: { id: model.id },
                                  }"
                                >
                                  {{ model.title }}
                                </router-link>
                              </td>
                              <td>{{ model.rank.rankName }}</td>
                              <td>{{ model.department.name }}</td>
                              <td class="text-right">
                                <div class="dropdown dropdown-action">
                                  <a
                                    href="#"
                                    class="action-icon dropdown-toggle"
                                    data-toggle="dropdown"
                                    aria-expanded="false"
                                    ><i class="material-icons">more_vert</i></a
                                  >
                                  <div
                                    class="dropdown-menu dropdown-menu-right"
                                  >
                                    <router-link
                                      :to="{
                                        name: 'jobprofileinfo',
                                        params: { id: model.id },
                                      }"
                                      class="dropdown-item"
                                      data-toggle="modal"
                                      data-target="#edit_employee"
                                      ><i class="fa fa-pencil m-r-5"></i>
                                      Edit</router-link
                                    >
                                    <a
                                      class="dropdown-item"
                                      href="#"
                                      data-toggle="modal"
                                      data-target="#delete_employee"
                                      ><i class="fa fa-trash-o m-r-5"></i>
                                      Delete</a
                                    >
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table> -->
                        
                      </div>
                    </div>
                    <div class="tab-pane" id="solid-rounded-justified-tab2">
                      <div class="table-responsive">
                        <v-data-table
                    :headers="headers"
                    :items="inactiveprofiles"
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
                        >
                          <i class="material-icons"
                          >more_vert</i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                          <router-link
                            :to="{
                              name: 'jobprofileinfo',
                              params: { id: item.id },
                            }"
                            class="dropdown-item"
                            ><i class="fa fa-pencil m-r-5"></i> Edit</router-link
                          >
                          <a
                            class="dropdown-item"
                            @click="setDeleteProfile(item)"
                            ><i class="fa fa-trash-o m-r-5"></i> Delete</a
                          >
                        </div>
                        </div>
                    </template>
                    
                  </v-data-table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /Page Content -->
        </div>
        <v-dialog v-model="dialog" max-width="725px"
          >
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete Job Profile</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div class="modal-btn delete-action">
                  <div class="row">
                    <div class="col-6">
                      <a
                        @click.prevent="deleteJobProfile"
                        class="btn btn-primary continue-btn"
                        data-dismiss="modal"
                        >Delete</a
                      >
                    </div>
                    <div class="col-6">
                      <a
                        href="javascript:void(0);"
                        data-dismiss="modal"
                        class="btn btn-primary cancel-btn"
                        >Cancel</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
        </v-dialog>
      </div>
      <!-- /Page Wrapper -->
    </div>
  </div>
</template>
<script>
import LayoutHeader from "@/components/layouts/Header.vue";
import LayoutSidebar from "@/components/layouts/Sidebar.vue";
import { authenticationService } from "@/services/authenticationService";
import { jobService } from "@/services/jobService";
import Vue from "vue";
export default {
  components: {
    LayoutHeader,
    LayoutSidebar,
  },
  data() {
    return {
      dialog: false,
      activeprofiles: [],
      activeprofile: {},
      inactiveprofiles: [],
      currentOffice: authenticationService.currentOfficeValue,
      headers: [
      {
        text: 'Name',
        align: 'start',
        value: 'title',
      },
      { text: 'Job Level', value: 'rank.rankName' },
      { text: 'Department', value: 'department.name' },
      { text: '', value: 'actions', sortable: false },
    ],
    };
  },
  mounted() {
    this.getProfiles();
    if ($(".datatable").length > 0) {
      $(".datatable").DataTable({
        bFilter: false,
      });
    }
    if ($(".floating").length > 0) {
      $(".floating")
        .on("focus blur", function (e) {
          $(this)
            .parents(".form-focus")
            .toggleClass(
              "focused",
              e.type === "focus" || this.value.length > 0
            );
        })
        .trigger("blur");
    }
  },
  methods: {

    getProfiles() {
      jobService.getJobProfiles(this.currentOffice.id).then((p) => {
        this.activeprofiles = p.filter((c) => c.status == 1);
        this.inactiveprofiles = p.filter((c) => c.status == 0);
      });
    },
    setEditProfile(model) {
      this.activeprofile = model;
      this.dialogEdit = true
    },
    setDeleteProfile(model) {
      this.dialog = true,
      this.activeprofile = model;
    },
    closeDelete() {
      this.dialog = false
    },
    deleteJobProfile() {
      const id = this.activeprofile.id;
      //console.log(this.activeprofile)
      //console.log(`id`, id)
      jobService.removeJobProfiles(id)
          .then(id => {
            jobService.getJobProfiles(this.currentOffice.id).then((p) => {
              this.activeprofiles = p.filter((c) => c.status == 1);
              this.inactiveprofiles = p.filter((c) => c.status == 0);
              this.closeDelete()
            });
          })
    }
  },
  name: "jobprofile",
};
</Script>